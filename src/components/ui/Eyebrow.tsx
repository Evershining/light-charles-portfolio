import type { ReactNode } from 'react';

/** Small label with an amber dash, shown above section headings. */
export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`flex items-center gap-2 text-sm font-medium ${
        dark ? 'text-white/80' : 'text-[#1B1B1B]'
      }`}
    >
      <span className="h-px w-3 bg-[#F5A70A]" aria-hidden="true" />
      {children}
    </p>
  );
}
