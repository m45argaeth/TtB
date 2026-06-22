import { Hero } from "@/components/hero";
import { FeatureGrid, CtaSection } from "@/components/landing-sections";
import { FunFacts } from "@/components/fun-facts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <FunFacts />
      <CtaSection />
    </>
  );
}
