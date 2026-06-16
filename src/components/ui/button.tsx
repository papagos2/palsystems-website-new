import Link from "next/link";
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
  const classes = cn(base, variants[variant], sizes[size], className);

  // Internal routes use next/link for client-side navigation; external links
  // (mailto:, https:, tel:) fall back to a plain anchor.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
