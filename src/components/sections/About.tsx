import { COMPETENCIES, CV_URL, PROFILE, PROJECTS } from '../../data/content';
import { useInView } from '../../hooks/useInView';
import { Avatar } from '../ui/Avatar';
import { PrimaryButton } from '../ui/PrimaryButton';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Stat } from '../ui/Stat';

export function About() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section id="about" className="relative overflow-hidden bg-[#274233] py-20 sm:py-24">
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#F5A70A]/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal from="left" className="mx-auto w-full max-w-90">
          <div className="relative">
            <Avatar className="aspect-square w-full" />
            <span className="absolute -bottom-3 -right-3 rounded-2xl bg-white px-4 py-3 text-xs font-semibold text-[#274233] shadow-xl sm:text-sm">
              HND Computer Science
              <span className="block text-[#F5A70A]">Distinction</span>
            </span>
          </div>
        </Reveal>

        <div ref={ref}>
          <Reveal>
            <SectionHeading
              eyebrow="About Me"
              before="Who is "
              accent={PROFILE.fullName}
              after="?"
              dark
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
              {PROFILE.summary}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-white/10 py-6">
              <Stat value={2} suffix="+" label="Years of experience" start={inView} />
              <Stat value={PROJECTS.length} suffix="" label="Featured projects" start={inView} />
              <Stat value={2} suffix="" label="Certifications" start={inView} />
            </div>
          </Reveal>

          <Reveal delay={280}>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Core competencies">
              {COMPETENCIES.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/85 transition-colors duration-300 hover:border-[#F5A70A] hover:text-[#F5A70A] sm:text-sm"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <PrimaryButton href={CV_URL} icon="download" variant="outline-light">
                Download CV
              </PrimaryButton>
              {/* <span className="lc-script text-4xl text-[#F5A70A]" aria-hidden="true">
                {PROFILE.firstName}
              </span> */}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
