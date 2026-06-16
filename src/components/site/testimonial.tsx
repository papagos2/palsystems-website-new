"use client";

import { motion } from "framer-motion";
import { easeExpo } from "@/components/motion/primitives";
import { Container } from "@/components/ui/container";

export function Testimonial() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease: easeExpo }}
          className="mx-auto max-w-[56rem] text-center"
        >
          <blockquote className="text-balance text-3xl font-medium leading-snug tracking-tight text-paper sm:text-4xl">
            <span className="text-signal">&ldquo;</span>
            We cut incident response from hours to minutes. PAL doesn&rsquo;t just
            tell us what broke — it has usually already fixed it.
            <span className="text-signal">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-8 font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-muted">
            Dana Okonkwo · VP Infrastructure, Meridian
          </figcaption>
        </motion.figure>
      </Container>
    </section>
  );
}
