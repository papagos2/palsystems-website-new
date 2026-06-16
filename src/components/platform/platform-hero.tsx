"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/motion/primitives";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

export function PlatformHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 sm:pt-48 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_55%_45%_at_50%_0%,#000_40%,transparent_100%)]" />
      </div>

      <Container>
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-[52rem]">
          <motion.div variants={staggerItem}>
            <Eyebrow accent>The platform</Eyebrow>
          </motion.div>
          <motion.h1
            variants={staggerItem}
            className="mt-6 text-display font-semibold text-paper"
          >
            One control plane. Every layer.
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-[52ch] text-xl leading-relaxed text-muted"
          >
            Orchestration, observability, and resilience — unified into a single
            system that understands your infrastructure as well as you do.
          </motion.p>
          <motion.div variants={staggerItem} className="mt-10">
            <Button href="/#contact">Book a demo</Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
