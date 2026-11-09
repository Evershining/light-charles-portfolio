import { SERVICES } from '../../data/content';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Services" accent="Services" after=" I Provide" />
          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#274233] py-1.5 pl-5 pr-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D3326] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A70A] focus-visible:ring-offset-2"
          >
            Start a project
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A70A] text-[#1B1B1B] transition-transform duration-300 group-hover:translate-x-0.5">
              <Icon name="arrow" className="h-4 w-4" />
            </span>
          </a>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 120}>
              <article className="group flex h-full flex-col rounded-2xl border border-black/5 bg-[#F6F5F1] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5A70A]/50 hover:bg-white hover:shadow-xl hover:shadow-black/5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#274233] text-[#F5A70A] transition-transform duration-300 group-hover:scale-110">
                  <Icon name={service.icon} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-[#1B1B1B]">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#1B1B1B]/65">
                  {service.text}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#274233] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A70A]"
                >
                  Learn more
                  <Icon
                    name="arrow"
                    className="h-4 w-4 text-[#F5A70A] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
