import { Suspense } from "react";
import Hero from "@/components/ui/home/HeroSection";
import HowItWorksSection from "@/components/ui/home/HowItWorksSection";
import CategorySection from "@/components/ui/learn/CategorySection";
import PracticeCTA from "@/components/ui/learn/PracticeCTA";

export default function Home() {
  return (
    <>
      <div className="absolute h-screen inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:42px_42px]" />

      <Hero />
      <HowItWorksSection />
      <Suspense fallback={null}>
        <CategorySection />
      </Suspense>
      <PracticeCTA />
    </>
  );
}
