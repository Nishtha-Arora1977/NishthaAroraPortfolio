import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import HeroShowcase from './HeroShowcase';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fade = (delay: number) =>
    reduceMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay } }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-clay-soft/80 blur-[120px]" />
        <div className="absolute top-1/2 left-[-15%] h-96 w-96 rounded-full bg-paper-3/70 blur-[100px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div>
          <motion.p
            {...fade(0)}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-clay"
          >
            Freelance Website Developer
          </motion.p>

          <motion.h1
            {...fade(0.08)}
            className="text-balance font-serif text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-[4.25rem]"
          >
            Beautiful Websites.
            <br />
            Built for{' '}
            <span className="italic text-clay">Growing Businesses.</span>
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted"
          >
            I help businesses build a strong online presence with modern business websites and
            e-commerce stores designed around their brand and customers.
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-all hover:bg-clay-strong hover:shadow-lg hover:shadow-clay/20"
            >
              Let&apos;s Build Your Website
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/60 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-white"
            >
              Explore My Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            {...fade(0.32)}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-muted"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-clay" />
              Business websites
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-clay" />
              E-commerce stores
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-clay" />
              Based in India · Remote friendly
            </span>
          </motion.div>
        </div>

        <motion.div {...fade(0.2)}>
          <HeroShowcase />
        </motion.div>
      </div>
    </section>
  );
}
