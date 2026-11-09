import { PROJECTS } from '../../data/content';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="bg-[#FBFAF7] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            before="Some of the "
            accent="Projects"
            after=" I've Worked On"
            center
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 120} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5A70A]/50 hover:shadow-xl hover:shadow-black/5">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#274233] text-[#F5A70A] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon name={project.icon} className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-[#F5A70A]/15 px-3 py-1 text-xs font-semibold text-[#8A5A00]">
                    {project.role}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#1B1B1B]">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#1B1B1B]/65">
                  {project.text}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} tools`}>
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-[#274233]/15 px-3 py-1 text-xs font-medium text-[#274233]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#274233] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A70A]"
                  >
                    View project
                    <Icon
                      name="arrowUpRight"
                      className="h-4 w-4 text-[#F5A70A] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
