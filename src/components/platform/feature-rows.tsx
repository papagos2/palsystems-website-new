"use client";

import { motion } from "framer-motion";
import { easeExpo } from "@/components/motion/primitives";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";

type Feature = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  sample: string[];
};

const features: Feature[] = [
  {
    eyebrow: "Orchestration",
    title: "Declare intent. PAL handles the rest.",
    body: "Replace brittle pipelines with objectives. The scheduler continuously reconciles desired state across every region and provider.",
    points: ["Intent-based scheduling", "Multi-cloud placement", "Zero-downtime rollouts"],
    sample: ["objective: latency < 40ms", "regions: [eu, us, apac]", "strategy: rolling"],
  },
  {
    eyebrow: "Observability",
    title: "One signal, not three silos.",
    body: "Traces, metrics, and logs correlated automatically. Cause and effect surface together — no dashboard archaeology.",
    points: ["Unified traces + metrics + logs", "Automatic correlation", "Sub-second queries"],
    sample: ["trace: checkout.flow", "p99: 38ms  ✓", "anomalies: 0"],
  },
  {
    eyebrow: "Resilience",
    title: "Recovers before you page someone.",
    body: "Chaos-tested failover and automated remediation hold the line. Set guardrails once; let the system enforce them.",
    points: ["Automated failover", "Chaos-tested recovery", "Policy guardrails"],
    sample: ["failover: armed", "rto: 12s", "last drill: passed"],
  },
];

export function FeatureRows() {
  return (
    <div className="border-t border-line">
      {features.map((f, i) => (
        <section key={f.eyebrow} className="border-b border-line py-20 sm:py-28">
          <Container>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.5, ease: easeExpo }}
                className={cn(i % 2 === 1 && "md:order-2")}
              >
                <Eyebrow accent>{f.eyebrow}</Eyebrow>
                <h2 className="mt-4 text-h2 font-semibold text-paper">{f.title}</h2>
                <p className="mt-4 max-w-[44ch] leading-relaxed text-muted">{f.body}</p>
                <ul className="mt-6 space-y-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-paper">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-signal" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.5, ease: easeExpo, delay: 0.05 }}
                className={cn("rounded-card border border-line bg-surface p-6", i % 2 === 1 && "md:order-1")}
              >
                <div className="mb-4 flex gap-1.5" aria-hidden>
                  <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-signal/60" />
                </div>
                <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-muted">
                  {f.sample.map((line) => (
                    <span key={line} className="block">
                      <span className="select-none text-paper/25">$ </span>
                      {line}
                    </span>
                  ))}
                </pre>
              </motion.div>
            </div>
          </Container>
        </section>
      ))}
    </div>
  );
}
