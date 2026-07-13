import { notFound } from 'next/navigation';

import TechnologyHero from '@/components/ui/tutorial/TechnologyHero';
import TechnologyStats from '@/components/ui/tutorial/TechnologyStats';
import TutorialSection from '@/components/ui/tutorial/TutorialSection';
import PracticeCTA from '@/components/ui/tutorial/PracticeCTA';
import { technologies } from '@/app/data/technologies';

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ technology: string }>;
}) {
  const { technology } = await params;

  const data = technologies[technology as keyof typeof technologies];

  if (!data) {
    notFound();
  }

  return (
    <main className="pb-20">
      <TechnologyStats technology={data} />

      <TutorialSection technology={data} />

      <PracticeCTA technology={data.title} />
    </main>
  );
}
