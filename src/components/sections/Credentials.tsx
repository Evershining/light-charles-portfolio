import { CERTIFICATIONS, LEADERSHIP } from '../../data/content';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';

export function Credentials() {
  return (
    <section id="credentials" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl bg-[#274233] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5A70A] text-[#1B1B1B]">
                <Icon name="award" />
              </span>
              <h3 className="text-xl font-bold text-white">Certifications</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {CERTIFICATIONS.map((c) => (
                <li
                  key={c.title}
                  className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                >
                  <span className="font-semibold text-white">{c.title}</span>
                  <span className="shrink-0 text-sm text-[#F5A70A]">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full rounded-2xl border border-black/5 bg-[#F6F5F1] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#274233] text-[#F5A70A]">
                <Icon name="users" />
              </span>
              <h3 className="text-xl font-bold text-[#1B1B1B]">Leadership & Volunteering</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {LEADERSHIP.map((l) => (
                <li
                  key={l.title}
                  className="flex items-start justify-between gap-4 border-b border-black/10 pb-4 last:border-0 last:pb-0"
                >
                  <span className="font-semibold text-[#1B1B1B]">{l.title}</span>
                  <span className="shrink-0 text-sm text-[#1B1B1B]/50">{l.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
