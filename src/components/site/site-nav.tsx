"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const links = [
  { href: "#capabilities", label: "Platform" },
  { href: "#stats", label: "Scale" },
  { href: "#contact", label: "Company" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-line bg-ink/80 backdrop-blur-md" : "border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[72rem] items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          PAL<span className="text-signal">·</span>SYSTEMS
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-paper"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Button href="#contact" size="sm">
          Book a demo
        </Button>
      </nav>
    </header>
  );
}
