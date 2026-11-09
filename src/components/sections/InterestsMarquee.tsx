import { INTERESTS } from '../../data/content';
import { Icon } from '../ui/Icon';

/** Scrolling amber strip of interests. The list is doubled for a seamless loop. */
export function InterestsMarquee() {
  const items = [...INTERESTS, ...INTERESTS];
  return (
    <div
      className="lc-marquee overflow-hidden border-y border-[#274233]/10 bg-[#F5A70A] py-4"
      aria-label="Interests"
    >
      <div className="lc-marquee-track flex w-max items-center">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-6 pr-6 text-sm font-bold text-[#1F3527] sm:text-base"
            aria-hidden={i >= INTERESTS.length}
          >
            {item}
            <Icon name="sparkle" className="h-4 w-4" />
          </span>
        ))}
      </div>
    </div>
  );
}
