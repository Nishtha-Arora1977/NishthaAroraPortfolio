import { ArrowUpRight, Github, Globe } from 'lucide-react';
import Reveal from './Reveal';

type Project = {
  name: string;
  category: string;
  badge: string;
  description: string;
  features: string[];
  tech: string[];
  live?: string;
  code?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: 'Aakaars',
    category: 'E-commerce Store',
    badge: 'Live store',
    description:
      'A small-batch store for 3D-printed goods. Shoppers can browse products by category, view product details, add items to a cart, and send custom order inquiries — all in a clean, responsive storefront.',
    features: [
      'Product catalogue with categories',
      'Product detail views',
      'Shopping cart experience',
      'Custom order inquiries',
      'Responsive storefront',
    ],
    tech: ['Responsive layout', 'Storefront', 'Cart'],
    live: 'https://aakaars.in',
    featured: true,
  },
  {
    name: 'Nishtha Arora Portfolio',
    category: 'Business Website',
    badge: 'This site',
    description:
      'The website you are viewing now — a freelance portfolio designed to present services clearly and make it easy for a business to get in touch.',
    features: [
      'Single-page business layout',
      'Services and work sections',
      'Inquiry form with validation',
      'Responsive navigation',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    live: 'https://nishtha-arora-portfolio.vercel.app/',
    code: 'https://github.com/Nishtha-Arora1977/NishthaAroraPortfolio',
  },
  {
    name: 'AI Candidate Ranking System',
    category: 'Full-stack / AI project',
    badge: 'Technical project',
    description:
      'A full-stack platform that ranks candidates against a job description using semantic similarity and embeddings. Built as a technical project, alongside my website work.',
    features: [
      'FastAPI REST endpoints',
      'Semantic matching and ranking',
      'Candidate dashboard UI',
      'Supabase database with pgvector',
    ],
    tech: ['Python', 'FastAPI', 'Next.js', 'Supabase', 'pgvector'],
    live: 'https://ai-candidate-ranking-system-psi.vercel.app/',
    code: 'https://github.com/Nishtha-Arora1977/ai-candidate-ranking-system',
  },
];

function ProjectPreview({ tone, label }: { tone: string; label: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-line ${tone}`}>
      <div className="flex items-center gap-2 border-b border-line/70 bg-white/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <span className="font-serif text-sm text-ink">{label}</span>
          <span className="h-2 w-12 rounded-full bg-black/10" />
        </div>
        <div className="h-24 rounded-xl bg-white/70" />
        <div className="grid grid-cols-3 gap-3">
          <div className="h-12 rounded-lg bg-white/60" />
          <div className="h-12 rounded-lg bg-white/60" />
          <div className="h-12 rounded-lg bg-white/60" />
        </div>
      </div>
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-clay-strong"
        >
          <Globe className="h-4 w-4" />
          View live site
        </a>
      )}
      {project.code && (
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-white"
        >
          <Github className="h-4 w-4" />
          Source code
        </a>
      )}
    </div>
  );
}

function TagList({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-ink-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Work() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-clay">Work</p>
          <h2 className="text-balance font-serif text-4xl text-ink sm:text-5xl">
            Projects and stores I&apos;ve built
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-muted">
            A selection of personal and project builds. I&apos;m currently welcoming my first
            freelance clients, so new work will be added here as it ships.
          </p>
        </Reveal>

        <Reveal className="mt-16">
          <article className="grid overflow-hidden rounded-3xl border border-line bg-white lg:grid-cols-2">
            <div className="order-2 flex flex-col justify-center p-8 sm:p-10 lg:order-1">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-clay-soft px-3 py-1 text-xs font-medium text-clay">
                  {featured.category}
                </span>
                <span className="text-xs text-ink-muted">{featured.badge}</span>
              </div>
              <h3 className="font-serif text-3xl text-ink">{featured.name}</h3>
              <p className="mt-4 text-pretty leading-relaxed text-ink-muted">
                {featured.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {featured.features.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <TagList tech={featured.tech} />
              </div>

              <div className="mt-8">
                <ProjectLinks project={featured} />
              </div>
            </div>

            <div className="order-1 flex items-center bg-paper-2 p-6 sm:p-10 lg:order-2">
              <div className="w-full">
                <ProjectPreview tone="bg-gradient-to-br from-clay-soft via-paper-2 to-paper-3" label="aakaars.in" />
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {rest.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.1} as="div">
              <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_30px_60px_-35px_rgba(26,25,22,0.4)]">
                <div className="mb-6 aspect-[16/10] w-full overflow-hidden rounded-2xl">
                  <ProjectPreview
                    tone={
                      project.category.includes('Business')
                        ? 'bg-gradient-to-br from-paper-2 via-paper-3 to-clay-soft'
                        : 'bg-gradient-to-br from-paper-3 via-paper-2 to-clay-soft/70'
                    }
                    label={project.live ? new URL(project.live).hostname : project.name}
                  />
                </div>

                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-clay-soft px-3 py-1 text-xs font-medium text-clay">
                    {project.category}
                  </span>
                  <span className="text-xs text-ink-muted">{project.badge}</span>
                </div>

                <h3 className="font-serif text-2xl text-ink">{project.name}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-ink-muted">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {project.features.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-ink-soft">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <TagList tech={project.tech} />
                </div>

                <div className="mt-8 pt-2">
                  <ProjectLinks project={project} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 text-center">
          <a
            href="https://github.com/Nishtha-Arora1977"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-clay"
          >
            See more projects on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
