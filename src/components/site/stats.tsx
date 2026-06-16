"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/motion/primitives";

const stats = [
  { value: "99.99%", label: "Measured uptime" },
  { value: "<40ms", label: "p99 control-plane latency" },
  { value: "180+", label: "Regions orchestrated" },
  { value: "4.2T", label: "Events processed / day" },
];

export function Stats() {
  return (
    <section id="stats" className="border-y border-line px-6 py-24 sm:py-32">
      <motion.dl
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-15%" }}
        className="mx-auto grid max-w-[72rem] gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={staggerItem}>
            <dt className="text-5xl font-semibold tracking-tight text-paper">
              {s.value}
            </dt>
            <dd className="mt-3 font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-muted">
              {s.label}
            </dd>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
}
