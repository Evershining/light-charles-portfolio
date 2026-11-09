import type { ReactNode } from 'react';
import type { IconName } from '../../types';
import { Icon } from './Icon';

type Variant = 'green' | 'outline-light' | 'amber';

const STYLES: Record<Variant, string> = {
  green: 'bg-[#274233] text-white hover:bg-[#1D3326]',
  'outline-light': 'border border-white/40 text-white hover:bg-white/10',
  amber: 'bg-[#F5A70A] text-[#1B1B1B] hover:bg-[#FFB927]',
};

/** Pill-shaped link button with a round icon on the right. */
export function PrimaryButton({
  href,
  children,
  icon = 'arrow',
  variant = 'green',
}: {
  href: string;
  children: ReactNode;
  icon?: IconName;
  variant?: Variant;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A70A] focus-visible:ring-offset-2 ${STYLES[variant]}`}
    >
      {children}
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 ${
          variant === 'amber' ? 'bg-[#274233] text-white' : 'bg-[#F5A70A] text-[#1B1B1B]'
        }`}
      >
        <Icon name={icon} className="h-4 w-4" />
      </span>
    </a>
  );
}
