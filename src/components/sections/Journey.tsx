import { useState } from 'react';
import type { ReactNode } from 'react';
import { EDUCATION, JOBS } from '../../data/content';
import type { IconName, Job } from '../../types';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

function JourneyCard({
  icon,
  title,
  children,
  delay,
}: {
  icon: IconName;
  title: string;
  children: ReactNode;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="h-full rounded-2xl border border-black/5 bg-[#F6F5F1] p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#274233] text-[#F5A70A]">
            <Icon name={icon} />
          </span>
          <h3 className="text-xl font-bold text-[#1B1B1B]">{title}</h3>
        </div>
        <div className="mt-6 divide-y divide-black/10">{children}</div>
      </div>
    </Reveal>
  );
}

/** One expandable job. The panel animates open with a grid-rows transition. */
function JobItem({
  job,
  open,
  onToggle,
  id,
}: {
  job: Job;
  open: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className="group flex w-full items-start justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A70A]"
      >
        <span>
          <span className="block text-xs font-medium text-[#1B1B1B]/50">{job.period}</span>
          <span className="mt-1 block text-lg font-bold text-[#1B1B1B]">{job.role}</span>
          <span className="block text-sm text-[#1B1B1B]/60">{job.org}</span>
        </span>
        <span
          className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-[#274233] transition-all duration-300 group-hover:border-[#F5A70A] group-hover:bg-[#F5A70A] ${
            open ? 'rotate-180 border-[#F5A70A] bg-[#F5A70A]' : ''
          }`}
        >
          <Icon name="chevron" className="h-4 w-4" />
        </span>
      </button>

      <div
        id={id}
        className="grid transition-[grid-template-rows] duration-500 ease-in-out motion-reduce:transition-none"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <ul
            className={`mt-4 space-y-2.5 transition-opacity duration-500 ${
              open ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {job.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm leading-relaxed text-[#1B1B1B]/70">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5A70A]"
                  aria-hidden="true"
                />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Journey() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="journey" className="bg-[#FBFAF7] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Education & Work"
            before="My "
            accent="Academic and Professional"
            after=" Journey"
            center
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <JourneyCard icon="cap" title="Education" delay={0}>
            {EDUCATION.map((item) => (
              <div key={item.school} className="py-4 first:pt-0 last:pb-0">
                <p className="text-xs font-medium text-[#1B1B1B]/50">{item.year}</p>
                <p className="mt-1 text-lg font-bold text-[#1B1B1B]">{item.school}</p>
                <p className="text-sm text-[#1B1B1B]/60">{item.detail}</p>
              </div>
            ))}
          </JourneyCard>

          <JourneyCard icon="briefcase" title="Work Experience" delay={120}>
            {JOBS.map((job, i) => (
              <JobItem
                key={job.role}
                job={job}
                id={`job-${i}`}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </JourneyCard>
        </div>
      </div>
    </section>
  );
}
