import type { CSSProperties } from 'react';
import { HERO_CHIPS, PROFILE } from '../../data/content';
import { Avatar } from '../ui/Avatar';
import { Eyebrow } from '../ui/Eyebrow';
import { PrimaryButton } from '../ui/PrimaryButton';

const CHIP_POSITIONS = [
  'left-[-6%] top-[14%]',
  'right-[-8%] top-[26%]',
  'left-[-10%] top-[52%]',
  'right-[-4%] top-[64%]',
  'left-[18%] bottom-[-4%]',
];

/** Sets the CSS variable that staggers the entrance animations. */
const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FBFAF7] pb-20 pt-32 sm:pt-36 lg:pb-28"
    >
      {/* soft background shapes */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-130 w-130 rounded-full bg-[#F5A70A]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-95 w-95 rounded-full bg-[#274233]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="lc-rise" style={delay(50)}>
            <Eyebrow>Hello, I&apos;m</Eyebrow>
          </div>
          <h1
            className="lc-rise mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#1B1B1B] sm:text-5xl lg:text-6xl"
            style={delay(150)}
          >
            <span className="italic text-[#F5A70A]">Light Agnes</span> Charles
          </h1>
          <p
            className="lc-rise mt-4 text-lg font-semibold text-[#274233] sm:text-xl"
            style={delay(260)}
          >
            {PROFILE.role}
          </p>
          <p
            className="lc-rise mt-5 max-w-xl text-base leading-relaxed text-[#1B1B1B]/70"
            style={delay(360)}
          >
            I turn Figma designs into clean, responsive React interfaces and build internal tools
            with Microsoft Power Apps and Power Automate, based in {PROFILE.location}.
          </p>

          <div className="lc-rise mt-8 flex flex-wrap items-center gap-4" style={delay(470)}>
            <PrimaryButton href="#contact">Let&apos;s talk</PrimaryButton>
            <a
              href="#projects"
              className="rounded-full px-5 py-3 text-sm font-semibold text-[#274233] underline decoration-[#F5A70A] decoration-2 underline-offset-8 transition-colors hover:text-[#1B1B1B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A70A]"
            >
              See my work
            </a>
          </div>
        </div>

        {/* Portrait cluster */}
        <div className="lc-pop relative mx-auto w-full max-w-95" style={delay(250)}>
          <div
            className="lc-spin-slow absolute -inset-4 rounded-full border-2 border-dashed border-[#274233]/20"
            aria-hidden="true"
          />
          <Avatar className="aspect-square w-full" />

          {HERO_CHIPS.map((chip, i) => (
            <span
              key={chip}
              style={delay(i * 600)}
              className={`lc-float absolute ${CHIP_POSITIONS[i]} whitespace-nowrap rounded-full bg-[#274233] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-black/10 sm:text-sm`}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
