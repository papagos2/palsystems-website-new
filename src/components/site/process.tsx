"use client";

import { motion } from "framer-motion";
import { easeExpo, staggerContainer, staggerItem } from "@/components/motion/primitives";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

const steps = [
  {
    n: "01",
    title: "Connect",
    body: "Point PAL at your clusters, clouds, and services. Auto-discovery maps your topology in minutes — no agents to babysit.",
  },
  {
    n: "02",
    title: "Orchestrate",
    body: "Describe intent, not infrastructure. PAL schedules, scales, and rebalances workloads against your declared objectives.",
  },
  {
    n: "03",
    title: "Observe",
    body: "Every signal in one plane. Set guardrails once and let automated recovery hold the line while you sleep.",
  },
];

export function Process() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease: easeExpo }}
          className="max-w-[40ch]"
        >
          <Eyebrow accent>How it works</Eyebrow>
          <h2 className="mt-4 text-h2 font-semibold text-paper">
            From connected to self-healing in three steps.
          </h2>
        </motion.div>

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-16 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3"
        >
          {steps.map((s) => (
            <motion.li key={s.n} variants={staggerItem} className="bg-ink p-8">
              <span className="font-mono text-sm text-signal">{s.n}</span>
              <h3 className="mt-6 text-xl font-semibold text-paper">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
