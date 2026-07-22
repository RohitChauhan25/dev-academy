import { notFound } from 'next/navigation';

import PracticeTechnologyHeader from '@/components/ui/practice/PracticeTechnologyHeader';
import PracticeLevelGrid from '@/components/ui/practice/PracticeLevelGrid';
import { technologies } from '@/app/data/technologies';
import { getTutorial, slugifyLevel } from '@/lib/tutorials';

interface Props {
  params: Promise<{ technology: string }>;
}

export default async function PracticeTechnologyPage({ params }: Props) {
  const { technology } = await params;

  const data = technologies[technology as keyof typeof technologies];

  if (!data) {
    notFound();
  }

  const levels = data.tutorials.map((section) => ({
    level: section.level,
    slug: slugifyLevel(section.level),
    topicCount: section.items.length,
    questionCount: section.items.reduce(
      (sum, item) => sum + (getTutorial(technology, item.slug)?.quiz?.length ?? 0),
      0,
    ),
  }));

  const questionCount = levels.reduce((total, level) => total + level.questionCount, 0);

  return (
    <main className="pb-20">
      <PracticeTechnologyHeader
        title={data.title}
        description={`Choose a difficulty level to practice ${data.title} questions.`}
        questionCount={questionCount}
      />

      <PracticeLevelGrid technology={technology} levels={levels} />
    </main>
  );
}
