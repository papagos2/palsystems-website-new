import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

const companies = ["Northwind", "Arcadia", "Meridian", "Helix", "Vantage"];

export function LogoBar() {
  return (
    <section className="border-y border-line py-12">
      <Container>
        <Eyebrow className="text-center">Trusted by engineering teams at</Eyebrow>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((name) => (
            <li
              key={name}
              className="text-lg font-semibold text-paper/40 transition-colors hover:text-paper/70"
            >
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
