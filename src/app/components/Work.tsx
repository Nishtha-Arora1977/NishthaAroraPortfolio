import { ArrowUpRight, Globe } from 'lucide-react';
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

const demos: Project[] = [
  {
    name: 'Maison Élise',
    category: 'E-commerce Demo',
    badge: 'Live demo',
    image: '/boutique-preview.png',
    description:
      'A boutique website demo for a fashion brand. Products are grouped into categories with a clean product gallery, details, and pricing — and customers can order directly over WhatsApp. Finished in a black editorial theme with a sidebar layout.',
    features: [
      'Product gallery & categories',
      'Western, ethnic & accessory edits',
      'Product details and pricing',
      'WhatsApp ordering flow',
      'Elegant, responsive storefront',
    ],
    tech: ['Vite + React', 'Tailwind CSS', 'WhatsApp API'],
    live: 'https://boutique-website-omega.vercel.app/',
    code: 'https://github.com/Nishtha-Arora1977/boutique-website',
  },
  {
    name: 'Lumière Studio',
    category: 'Business Website Demo',
    badge: 'Live demo',
    image: '/salon-preview.png',
    description:
      'A hair & beauty studio website demo. Visitors can browse services with transparent pricing, see the studio in a photo gallery, check location and opening hours, and send appointment requests via WhatsApp.',
    features: [
      'Services & transparent pricing',
      'Photo gallery',
      'Location & opening hours',
      'WhatsApp appointment inquiries',
    ],
    tech: ['Vite + React', 'Tailwind CSS', 'WhatsApp API'],
    live: 'https://salon-website-kohl-six.vercel.app/',
    code: 'https://github.com/Nishtha-Arora1977/salon-website',
  },
];

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
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-clay-strong"
    >
      <Globe className="h-4 w-4" />
      View live site
    </a>
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

function DemoCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white">
      <div className="p-6 pb-0 sm:p-8 sm:pb-0">
        {project.image && (
          <BrowserImage src={project.image} alt={`Screenshot of the ${project.name} website`} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full bg-clay-soft px-3 py-1 text-xs font-medium text-clay">
            {project.category}
          </span>
        </div>
        <h3 className="font-serif text-2xl text-ink">{project.name}</h3>
        <p className="mt-3 text-pretty leading-relaxed text-ink-muted">{project.description}</p>

        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {project.features.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-ink-soft">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <TagList tech={project.tech} />
        </div>

        <div className="mt-7">
          <ProjectLinks project={project} />
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

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {[...featured, ...demos].map((project, index) => (
            <Reveal key={project.name} delay={(index % 2) * 0.06}>
              <DemoCard project={project} />
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