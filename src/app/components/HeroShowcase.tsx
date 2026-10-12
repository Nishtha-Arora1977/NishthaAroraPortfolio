import { motion, useReducedMotion } from 'motion/react';
import { Check, Lock, ShoppingBag } from 'lucide-react';

export default function HeroShowcase() {
  const reduceMotion = useReducedMotion();

  const float = (distance: number, duration: number) =>
    reduceMotion
      ? {}
      : {
          animate: { y: [0, -distance, 0] },
          transition: { duration, repeat: Infinity, ease: 'easeInOut' as const },
        };

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-clay-soft/70 blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_60px_-30px_rgba(26,25,22,0.35)]">
        <div className="flex items-center gap-2 border-b border-line bg-paper-2 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <div className="ml-3 flex flex-1 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] text-ink-muted">
            <Lock className="h-3 w-3 text-clay" />
            yourbusiness.in
          </div>
        </div>

        <div className="space-y-5 p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-md bg-ink" />
              <span className="font-serif text-sm text-ink">Your Brand</span>
            </div>
            <div className="hidden gap-3 sm:flex">
              <span className="h-2 w-10 rounded-full bg-paper-3" />
              <span className="h-2 w-10 rounded-full bg-paper-3" />
              <span className="h-2 w-10 rounded-full bg-paper-3" />
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3 space-y-3">
              <p className="font-serif text-lg leading-snug text-ink sm:text-xl">
                Grow your business online
              </p>
              <div className="space-y-2">
                <span className="block h-2 w-full rounded-full bg-paper-3" />
                <span className="block h-2 w-4/5 rounded-full bg-paper-3" />
              </div>
              <div className="flex gap-2 pt-1">
                <span className="rounded-full bg-clay px-4 py-1.5 text-[11px] font-medium text-white">
                  Get in touch
                </span>
                <span className="rounded-full border border-line px-4 py-1.5 text-[11px] font-medium text-ink-soft">
                  Services
                </span>
              </div>
            </div>
            <div className="col-span-2 rounded-xl bg-gradient-to-br from-clay-soft to-paper-2" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((index) => (
              <div key={index} className="space-y-2 rounded-xl border border-line bg-paper p-3">
                <span className="block h-6 w-6 rounded-lg bg-clay-soft" />
                <span className="block h-2 w-full rounded-full bg-paper-3" />
                <span className="block h-2 w-2/3 rounded-full bg-paper-3" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        {...float(10, 6)}
        className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:-left-8"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clay-soft text-clay">
          <ShoppingBag className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-medium text-ink">Order confirmed</p>
          <p className="text-[11px] text-ink-muted">Checkout complete</p>
        </div>
      </motion.div>

      <motion.div
        {...float(8, 7)}
        className="absolute -right-3 -top-5 flex items-center gap-2 rounded-full border border-line bg-white/95 px-4 py-2 shadow-lg backdrop-blur sm:-right-6"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-clay text-white">
          <Check className="h-3.5 w-3.5" />
        </span>
        <span className="text-xs font-medium text-ink">Live & responsive</span>
      </motion.div>
    </div>
  );
}
