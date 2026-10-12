import { ArrowRight, Check, LayoutTemplate, ShoppingBag, type LucideIcon } from 'lucide-react';
import Reveal from './Reveal';

type Service = {
  icon: LucideIcon;
  index: string;
  title: string;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    icon: LayoutTemplate,
    index: '01',
    title: 'Websites That Make Your Business Stand Out',
    description:
      'Professional, modern websites that help businesses showcase their brand, communicate their services, and build trust with potential customers.',
    features: [
      'Custom website design and layout',
      'Business information and service pages',
      'Contact information and inquiry forms',
      'Responsive desktop and mobile layouts',
      'Clear navigation and calls to action',
      'Deployment and custom domain setup',
    ],
  },
  {
    icon: ShoppingBag,
    index: '02',
    title: 'Online Stores Made for Shopping',
    description:
      'Modern online stores that help businesses present their products beautifully and provide customers with a smooth shopping experience.',
    features: [
      'Product listing and category pages',
      'Product detail pages',
      'Shopping cart functionality',
      'Responsive layouts across devices',
      'Checkout and payment integration where supported',
      'Product categories and store navigation',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-paper-2 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            Services
          </p>
          <h2 className="text-balance font-serif text-4xl text-ink sm:text-5xl">
            Two focused ways I can help your business
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-muted">
            I keep my work focused so every project gets my full attention. Here is what I build.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.title}
                delay={index * 0.1}
                className="group relative flex flex-col rounded-3xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_30px_60px_-35px_rgba(26,25,22,0.4)] sm:p-10"
              >
                <span className="absolute right-8 top-8 font-serif text-sm text-line-strong">
                  {service.index}
                </span>

                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-clay-soft text-clay transition-colors group-hover:bg-clay group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="mt-7 font-serif text-2xl leading-snug text-ink">
                  {service.title}
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-ink-muted">
                  {service.description}
                </p>

                <ul className="mt-7 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-ink-soft">
                      <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-clay-soft text-clay">
                        <Check className="h-3 w-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="group/btn mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  Discuss Your Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-pretty text-sm leading-relaxed text-ink-muted">
            The exact feature set depends on your goals and the technology a project needs. Advanced
            features such as payments and checkout are added where the project and platform support
            them — we&apos;ll agree on the scope together before I start.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
