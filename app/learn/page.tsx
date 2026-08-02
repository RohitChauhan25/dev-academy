import { Suspense } from 'react';
import CategorySection from '@/components/ui/learn/CategorySection';
import LatestTutorials from '@/components/ui/learn/LatestTutorials';
import LearnHero from '@/components/ui/learn/LearnHero';
import LearningPaths from '@/components/ui/learn/LearningPaths';
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
      <LearningPaths />
      <LatestTutorials />
      <PracticeCTA />
    </div>
  );
};

export default Page;
