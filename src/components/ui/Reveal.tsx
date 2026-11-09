import type { ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

type RevealFrom = 'up' | 'left' | 'right' | 'none';

const HIDDEN_OFFSET: Record<RevealFrom, string> = {
  up: 'translate-y-8',
  left: '-translate-x-8',
  right: 'translate-x-8',
  none: '',
};

/** Fades and slides its children in the first time they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  from = 'up',
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  from?: RevealFrom;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        inView ? 'translate-x-0 translate-y-0 opacity-100' : `opacity-0 ${HIDDEN_OFFSET[from]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
