import type { Metadata } from 'next';

import AboutHero from '@/components/ui/about/AboutHero';
import AboutMission from '@/components/ui/about/AboutMission';
import AboutCTA from '@/components/ui/about/AboutCTA';

export const metadata: Metadata = {
  title: 'About — Dev Academy',
  description:
    'Learn about Dev Academy — our mission to make technical interview prep free and accessible for every developer.',
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutMission />
      <AboutCTA />
    </div>
  );
}
