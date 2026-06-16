import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/** Mono uppercase label used above headings. */
export function Eyebrow({
  children,
  accent = false,
  className,
}: {
  children: ReactNode;
  accent?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[0.8125rem] uppercase tracking-[0.1em]",
        accent ? "text-signal" : "text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
