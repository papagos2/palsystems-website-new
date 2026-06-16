"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// Spec easing: expo-out
export const easeExpo = [0.16, 1, 0.3, 1] as const;

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeExpo } },
};

/**
 * Fade + rise on scroll into view (once). Reduced motion is handled globally by
 * MotionConfig reducedMotion="user" and the CSS safety net in globals.css.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.5, ease: easeExpo, delay }}
    >
      {children}
    </motion.div>
  );
}
