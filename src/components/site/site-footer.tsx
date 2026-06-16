import { Container } from "@/components/ui/container";

const columns = [
  {
    heading: "Platform",
    links: ["Orchestration", "Observability", "Resilience", "Pricing"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    heading: "Resources",
    links: ["Docs", "Status", "Changelog", "Security"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-16">
      <Container className="grid gap-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <p className="font-mono text-sm font-semibold tracking-tight">
            PAL<span className="text-signal">·</span>SYSTEMS
          </p>
          <p className="mt-4 max-w-[28ch] text-sm text-muted">
            The infrastructure layer modern teams run on.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <h3 className="font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-muted">
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <Container className="mt-12 flex flex-col gap-2 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} PAL Systems. All rights reserved.</p>
        <p className="font-mono text-[0.8125rem]">Built for scale.</p>
      </Container>
    </footer>
  );
}
