import { notFound } from 'next/navigation';

import TutorialRenderer from '@/components/ui/tutorial/TutorialRenderer';
import InterviewSection from '@/components/ui/tutorial/InterviewSection';
import QuizSection from '@/components/ui/tutorial/QuizSection';
import NavigationSection from '@/components/ui/tutorial/NavigationSection';
import TutorialHero from '@/components/ui/tutorial/TechnologyHero';
import { getTutorial } from '@/lib/tutorials';
import TableOfContents from '@/components/ui/tutorial/TableOfContents';

interface Props {
  params: Promise<{
    technology: string;
    topic: string;
  }>;
}

export default async function TutorialPage({ params }: Props) {
  const { technology, topic } = await params;

  const tutorial: any = getTutorial(technology, topic);

  if (!tutorial) {
    notFound();
  }

  return (
    <main className="container mx-auto max-w-6xl py-10">
      <TutorialHero
        title={tutorial.title}
        description={tutorial.description}
        level={tutorial.level}
        readingTime={tutorial.readingTime}
        lesson={tutorial.lesson}
        technology={technology}
      />
      {/* <TableOfContents sections={tutorial.sections} /> */}

      <TutorialRenderer sections={tutorial?.sections} />

      <InterviewSection questions={tutorial.interviewQuestions} />

      {tutorial.quiz && <QuizSection quiz={tutorial.quiz} />}

      <NavigationSection
        technology={technology}
        previous={tutorial.previous}
        next={tutorial.next}
      />
    </main>
  );
}
