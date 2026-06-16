import type { Metadata } from "next";
import { PlatformHero } from "@/components/platform/platform-hero";
import { FeatureRows } from "@/components/platform/feature-rows";
import { CTA } from "@/components/site/cta";

const title = "Platform — PAL Systems";
const description =
  "Orchestration, observability, and resilience unified into one control plane. Explore the PAL Systems platform.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function PlatformPage() {
  return (
    <main>
      <PlatformHero />
      <FeatureRows />
      <CTA />
    </main>
  );
}
