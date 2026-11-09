import { Eyebrow } from './Eyebrow';

/** Eyebrow plus a heading whose `accent` text is italic amber. */
export function SectionHeading({
  eyebrow,
  before,
  accent,
  after,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  before?: string;
  accent: string;
  after?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-3 ${center ? 'items-center text-center' : ''}`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${
          dark ? 'text-white' : 'text-[#1B1B1B]'
        }`}
      >
        {before}
        <span className="italic text-[#F5A70A]">{accent}</span>
        {after}
      </h2>
    </div>
  );
}
