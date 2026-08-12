import { Suspense } from "react";
import CategorySection from "@/components/ui/learn/CategorySection";
import LatestTutorials from "@/components/ui/learn/LatestTutorials";
import LearnHero from "@/components/ui/learn/LearnHero";
import PracticeCTA from "@/components/ui/learn/PracticeCTA";
import TechnologyGrid from "@/components/ui/learn/TechnologyGrid";

const Page = () => {
  return (
    <div>
      <div className="absolute h-screen inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:42px_42px]" />

      <Suspense fallback={null}>
        <LearnHero />
        <CategorySection />
        <TechnologyGrid />
      </Suspense>
      <LatestTutorials />
      <PracticeCTA />
    </div>
  );
};

export default Page;
