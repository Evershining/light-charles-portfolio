import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { PROFILE } from '../../data/content';
import type { IconName } from '../../types';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const FIELD_CLASS =
  'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 transition-colors duration-300 focus:border-[#F5A70A] focus:outline-none focus:ring-2 focus:ring-[#F5A70A]/30';

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: IconName;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#F5A70A]">
        <Icon name={icon} />
      </span>
      <div>
        <p className="text-xs font-medium text-white/50">{label}</p>
        <div className="mt-0.5 text-base font-semibold text-white">{children}</div>
      </div>
    </div>
  );
}

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  // Opens the visitor's email app with the message pre-filled.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
    window.setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#1F3527] py-20 sm:py-24">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#F5A70A]/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              before="Let's build something "
              accent="great"
              after=" together"
              dark
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
              Have a project, a role, or a question? Send a message and I&apos;ll get back to you.
              Referees are available upon request.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 space-y-6">
              <ContactRow icon="mail" label="Email">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="break-all transition-colors hover:text-[#F5A70A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A70A]"
                >
                  {PROFILE.email}
                </a>
              </ContactRow>
              <ContactRow icon="phone" label="Phone">
                <div className="flex flex-col gap-0.5">
                  {PROFILE.phones.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      className="transition-colors hover:text-[#F5A70A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A70A]"
                    >
                      {p.label}
                    </a>
                  ))}
                </div>
              </ContactRow>
              <ContactRow icon="linkedin" label="LinkedIn">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[#F5A70A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A70A]"
                >
                  {PROFILE.linkedinLabel}
                  <Icon name="arrowUpRight" className="h-4 w-4" />
                </a>
              </ContactRow>
              <ContactRow icon="pin" label="Location">
                {PROFILE.location}
              </ContactRow>
            </div>
          </Reveal>
        </div>

        <Reveal from="right" delay={150}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-white/80">
                  Your name
                </label>
                <input
                  id="c-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className={FIELD_CLASS}
                />
              </div>
              <div>
                <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-white/80">
                  Your email
                </label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  className={FIELD_CLASS}
                />
              </div>
              <div>
                <label
                  htmlFor="c-message"
                  className="mb-1.5 block text-sm font-medium text-white/80"
                >
                  Message
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or role"
                  className={`${FIELD_CLASS} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#F5A70A] py-2 pl-6 pr-2 text-sm font-semibold text-[#1B1B1B] transition-colors duration-300 hover:bg-[#FFB927] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F3527]"
            >
              Send message
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#274233] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                <Icon name="send" className="h-4 w-4" />
              </span>
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`mt-4 text-sm text-[#F5A70A] transition-opacity duration-500 ${
                sent ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {sent ? 'Your email app should open with the message ready to send.' : '\u00A0'}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
