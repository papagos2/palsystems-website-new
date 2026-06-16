import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/** Centered content column with the spec's 72rem max-width and gutters. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto max-w-[72rem] px-6", className)}>{children}</div>;
}
