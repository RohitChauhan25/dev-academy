import Hero from '@/components/ui/home/HeroSection';
import HowItWorksSection from '@/components/ui/home/HowItWorksSection';
import CategorySection from '@/components/ui/learn/CategorySection';
import PracticeCTA from '@/components/ui/learn/PracticeCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorksSection />
      <CategorySection />
      <PracticeCTA />
    </>
  );
}
