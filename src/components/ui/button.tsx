import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Variant = "signal" | "outline";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition";

const variants: Record<Variant, string> = {
  signal: "bg-signal text-signal-ink hover:opacity-90",
  outline: "border border-line text-paper hover:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
};

/** Anchor-based CTA button. Inherits the global focus-visible ring. */
export function Button({
  href,
  children,
  variant = "signal",
  size = "md",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <a href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </a>
  );
}
