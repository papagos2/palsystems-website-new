"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/motion/primitives";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-40 pb-24 sm:pt-48 sm:pb-32"
    >
      {/* Backdrop: dotted grid + radial glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-signal/10 blur-[120px]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-[72rem]"
      >
        <motion.p
          variants={staggerItem}
          className="flex items-center gap-2 font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-muted"
        >
          <motion.span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-signal"
            animate={
              reduceMotion ? undefined : { opacity: [1, 0.3, 1], scale: [1, 0.85, 1] }
            }
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          Systems online
        </motion.p>

        <motion.h1
          variants={staggerItem}
          className="mt-6 max-w-[18ch] text-display font-semibold text-paper"
        >
          Infrastructure, in motion.
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="mt-6 max-w-[48ch] text-xl leading-relaxed text-muted"
        >
          PAL Systems is the orchestration, observability, and resilience layer
          modern teams run on. Engineered for scale — designed for calm.
        </motion.p>

        <motion.div variants={staggerItem} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-signal px-6 py-3 text-sm font-medium text-signal-ink transition-opacity hover:opacity-90"
          >
            Book a demo
          </a>
          <a
            href="#capabilities"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-surface"
          >
            Explore the platform
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
