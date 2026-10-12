import { Compass, PenTool, Smartphone } from 'lucide-react';
import Reveal from './Reveal';

const principles = [
  {
    icon: PenTool,
    title: 'Design with intention',
    body: 'Layout, type, and colour chosen to fit your brand — not a recycled template.',
  },
  {
    icon: Smartphone,
    title: 'Built for every screen',
    body: 'Your site looks and works well on phones, tablets, and desktops alike.',
  },
  {
    icon: Compass,
    title: 'Clear and easy to use',
    body: 'Simple navigation and obvious next steps so visitors know what to do.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-paper-2 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-clay">About</p>
          <h2 className="text-balance font-serif text-4xl text-ink sm:text-5xl">
            Thoughtful Design. Practical Development.
          </h2>
          <div className="mt-7 space-y-5 text-pretty text-lg leading-relaxed text-ink-muted">
            <p>
              Hi, I&apos;m Nishtha, a website developer who enjoys creating clean, modern digital
              experiences for businesses.
            </p>
            <p>
              I focus on business websites and e-commerce stores, with an emphasis on thoughtful
              design, responsive layouts, and a smooth user experience.
            </p>
            <p>
              My goal is to help businesses present themselves professionally online through websites
              that are attractive, clear, and easy to use.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-soft">
            <span>Based in India</span>
            <span>Working with clients remotely</span>
            <span>Clear communication, start to finish</span>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-center gap-5">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.title}
                className="flex items-start gap-5 rounded-2xl border border-line bg-white p-6 transition-colors hover:border-line-strong"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-clay-soft text-clay">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg text-ink">{principle.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{principle.body}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
