import { Suspense } from 'react';
import CategorySection from '@/components/ui/learn/CategorySection';
import LatestTutorials from '@/components/ui/learn/LatestTutorials';
import LearnHero from '@/components/ui/learn/LearnHero';
import PracticeCTA from '@/components/ui/learn/PracticeCTA';
import TechnologyGrid from '@/components/ui/learn/TechnologyGrid';

const Page = () => {
  return (
    <div>
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
