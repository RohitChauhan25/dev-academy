import CategorySection from '@/components/ui/learn/CategorySection';
import LatestTutorials from '@/components/ui/learn/LatestTutorials';
import LearnHero from '@/components/ui/learn/LearnHero';
import LearningPaths from '@/components/ui/learn/LearningPaths';
import PracticeCTA from '@/components/ui/learn/PracticeCTA';
import TechnologyGrid from '@/components/ui/learn/TechnologyGrid';

const page = () => {
  return (
    <div>
      {' '}
      <LearnHero />
      <CategorySection />
      <TechnologyGrid />
      <LearningPaths />
      <LatestTutorials />
      <PracticeCTA />
    </div>
  );
};

export default page;
