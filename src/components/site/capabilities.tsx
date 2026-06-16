"use client";

import { motion } from "framer-motion";
import { easeExpo, staggerContainer, staggerItem } from "@/components/motion/primitives";
import type { ReactNode } from "react";

type Capability = {
  title: string;
  body: string;
  icon: ReactNode;
};

const capabilities: Capability[] = [
  {
    title: "Orchestration",
    body: "Declarative pipelines that schedule, scale, and self-heal across every region — without the YAML sprawl.",
    icon: (
      <path d="M4 7h16M4 12h10M4 17h7" strokeWidth="1.5" strokeLinecap="round" />
    ),
  },
  {
    title: "Observability",
    body: "Traces, metrics, and logs unified into one signal. See cause and effect the moment it happens.",
    icon: (
      <path
        d="M3 12h4l2 6 4-14 2 8h6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Resilience",
    body: "Automated failover and chaos-tested recovery keep you online when the unexpected arrives.",
    icon: (
      <path
        d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[72rem]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease: easeExpo }}
          className="max-w-[40ch]"
        >
          <p className="font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-signal">
            The platform
          </p>
          <h2 className="mt-4 text-h2 font-semibold text-paper">
            One control plane for everything you run.
          </h2>
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {capabilities.map((c) => (
            <motion.li
              key={c.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: easeExpo }}
              className="group rounded-card border border-line bg-surface p-8 transition-colors hover:border-paper/20"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-signal">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5"
                  aria-hidden
                >
                  {c.icon}
                </svg>
              </span>
              <h3 className="mt-6 text-xl font-semibold text-paper">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{c.body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
