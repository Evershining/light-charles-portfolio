import { PROFILE } from '../../data/content';
import { Icon } from '../ui/Icon';

export function Footer() {
  return (
    <footer className="bg-[#16261C] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-white/60 sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {PROFILE.fullName}. All rights reserved.
        </p>
        <a
          href="#home"
          className="group inline-flex items-center gap-2 font-medium text-white/80 transition-colors hover:text-[#F5A70A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A70A]"
        >
          Back to top
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-transform duration-300 group-hover:-translate-y-0.5">
            <Icon name="arrow" className="h-4 w-4 -rotate-90" />
          </span>
        </a>
      </div>
    </footer>
  );
}
