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
  image?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: 'Aakaars',
    category: 'E-commerce Store',
    badge: 'Live store',
    image: '/aakaars-preview.png',
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
    name: 'AI Candidate Ranking System',
    category: 'Full-stack / AI project',
    badge: 'Technical project',
    image: '/ai-candidate-preview.png',
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
    featured: true,
  },
];

function BrowserImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_25px_50px_-30px_rgba(26,25,22,0.4)]">
      <div className="flex items-center gap-2 border-b border-line bg-paper-2 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
      </div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={1440}
        height={1000}
        className="h-auto w-full"
      />
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

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article className="grid overflow-hidden rounded-3xl border border-line bg-white lg:grid-cols-2">
      <div className={`flex flex-col justify-center p-8 sm:p-10 ${flip ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full bg-clay-soft px-3 py-1 text-xs font-medium text-clay">
            {project.category}
          </span>
          <span className="text-xs text-ink-muted">{project.badge}</span>
        </div>
        <h3 className="font-serif text-3xl text-ink">{project.name}</h3>
        <p className="mt-4 text-pretty leading-relaxed text-ink-muted">{project.description}</p>

        <ul className="mt-6 space-y-2.5">
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

        <div className="mt-8">
          <ProjectLinks project={project} />
        </div>
      </div>

      <div className={`flex items-center bg-paper-2 p-6 sm:p-10 ${flip ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="w-full">
          {project.image && (
            <BrowserImage src={project.image} alt={`Screenshot of the ${project.name} website`} />
          )}
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  const featured = projects.filter((project) => project.featured);

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

        <div className="mt-16 space-y-8">
          {featured.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.08}>
              <FeaturedCard project={project} index={index} />
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