import Reveal from './Reveal';

const groups = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    label: 'Tooling & Deployment',
    items: ['Vite', 'Git', 'GitHub', 'Vercel'],
  },
  {
    label: 'Backend & Data',
    items: ['Python', 'FastAPI', 'PostgreSQL', 'Supabase'],
  },
];

export default function Technologies() {
  return (
    <section aria-labelledby="tech-heading" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            Tools
          </p>
          <h2 id="tech-heading" className="text-balance font-serif text-4xl text-ink sm:text-5xl">
            The tools I build with
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-muted">
            The technologies behind the websites and stores you see here.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.08}>
              <h3 className="border-b border-line pb-4 font-serif text-lg text-ink">
                {group.label}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
