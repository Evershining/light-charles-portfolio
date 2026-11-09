import { useEffect, useState } from 'react';
import { NAV } from '../../data/content';
import { Icon } from '../ui/Icon';

export function Navbar({
  active,
  progress,
  scrolled,
}: {
  active: string;
  progress: number;
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-[#FBFAF7]/85 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-[#1B1B1B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A70A]"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#274233] text-sm text-[#F5A70A]">
            LC
          </span>
          <span className="hidden sm:inline">Light Charles</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'page' : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A70A] ${
                  active === item.id ? 'text-[#274233]' : 'text-[#1B1B1B]/60 hover:text-[#1B1B1B]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-[#F5A70A] transition-transform duration-300 ${
                    active === item.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#274233] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1D3326] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A70A] focus-visible:ring-offset-2"
          >
            Hire me
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#1B1B1B] transition-colors hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A70A] md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out md:hidden ${
          open ? 'max-h-110 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-5 flex flex-col gap-1 border-t border-black/5 pb-6 pt-3 sm:mx-8">
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  active === item.id ? 'bg-[#274233] text-white' : 'text-[#1B1B1B] hover:bg-black/5'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll progress */}
      <div
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-[#F5A70A]"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </header>
  );
}
