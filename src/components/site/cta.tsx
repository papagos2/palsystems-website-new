"use client";

import { motion } from "framer-motion";
import { easeExpo } from "@/components/motion/primitives";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease: easeExpo }}
          className="relative overflow-hidden rounded-card border border-signal/30 bg-surface px-8 py-16 text-center sm:px-16 sm:py-24"
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
        <Button href="mailto:hello@palsystems.example" className="mt-10">
          Book a demo
        </Button>
        </motion.div>
      </Container>
    </section>
  );
}
