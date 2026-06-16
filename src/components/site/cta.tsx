"use client";

import { motion } from "framer-motion";
import { easeExpo } from "@/components/motion/primitives";

export function CTA() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.5, ease: easeExpo }}
        className="relative mx-auto max-w-[72rem] overflow-hidden rounded-card border border-signal/30 bg-surface px-8 py-16 text-center sm:px-16 sm:py-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-full h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-[100px]"
        />
        <h2 className="mx-auto max-w-[20ch] text-h2 font-semibold text-paper">
          Bring your infrastructure online.
        </h2>
        <p className="mx-auto mt-5 max-w-[44ch] text-lg text-muted">
          See PAL Systems orchestrate a live workload in under fifteen minutes.
        </p>
        <a
          href="mailto:hello@palsystems.example"
          className="mt-10 inline-block rounded-full bg-signal px-7 py-3 text-sm font-medium text-signal-ink transition-opacity hover:opacity-90"
        >
          Book a demo
        </a>
      </motion.div>
    </section>
  );
}
