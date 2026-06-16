import { Hero } from "@/components/site/hero";
import { LogoBar } from "@/components/site/logo-bar";
import { Capabilities } from "@/components/site/capabilities";
import { Process } from "@/components/site/process";
import { Stats } from "@/components/site/stats";
import { Testimonial } from "@/components/site/testimonial";
import { CTA } from "@/components/site/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoBar />
      <Capabilities />
      <Process />
      <Stats />
      <Testimonial />
      <CTA />
    </main>
  );
}
