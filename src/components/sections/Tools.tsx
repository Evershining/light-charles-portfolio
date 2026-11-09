import { TOOLS } from '../../data/content';
import { useInView } from '../../hooks/useInView';
import type { Tool } from '../../types';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

function ToolPill({ tool, delay }: { tool: Tool; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <Reveal delay={delay}>
      <div
        ref={ref}
        className="group relative mx-auto flex h-56 w-full max-w-32 flex-col items-center justify-between overflow-hidden rounded-[64px] border border-black/5 bg-[#F1F0EC] px-3 pb-5 pt-5 transition-transform duration-300 hover:-translate-y-1.5"
      >
        {/* fill that rises to the proficiency level */}
        <div
          className="absolute inset-x-0 bottom-0 bg-[#F5A70A]/15 transition-[height] duration-1400 ease-out motion-reduce:transition-none"
          style={{ height: inView ? `${tool.level}%` : '0%', transitionDelay: `${delay + 200}ms` }}
          aria-hidden="true"
        />
        <span
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-extrabold shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105"
          style={{ backgroundColor: tool.bg, color: tool.fg }}
          aria-hidden="true"
        >
          {tool.short}
        </span>
        <div className="relative text-center">
          <p className="text-lg font-bold text-[#1B1B1B]">{tool.level}%</p>
          <p className="mt-1 text-xs font-medium leading-tight text-[#1B1B1B]/60">{tool.name}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function Tools() {
  return (
    <section id="tools" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="My Favorite Tools"
            before="Exploring the "
            accent="Tools"
            after=" Behind My Work"
            center
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {TOOLS.map((tool, i) => (
            <ToolPill key={tool.name} tool={tool} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
