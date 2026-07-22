import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

import QuizSection from '@/components/ui/tutorial/QuizSection';
import { technologies } from '@/app/data/technologies';
import { getTutorial, slugifyLevel } from '@/lib/tutorials';

interface Props {
  params: Promise<{
    technology: string;
    level: string;
  }>;
}

export default async function PracticeLevelPage({ params }: Props) {
  const { technology, level } = await params;

  const data = technologies[technology as keyof typeof technologies];

  if (!data) {
    notFound();
  }

  const section = data.tutorials.find((item) => slugifyLevel(item.level) === level);

  if (!section) {
    notFound();
  }

  const quiz = section.items.flatMap((item) => getTutorial(technology, item.slug)?.quiz ?? []);

  if (!quiz.length) {
    notFound();
  }

  return (
    <main className="container mx-auto max-w-4xl px-6 py-10">
      <div className="mb-6 flex flex-wrap items-center gap-1 text-xs text-muted-foreground sm:text-sm">
        <Link href="/practice" className="transition-colors hover:text-primary">
          Practice
        </Link>

        <ChevronRight className="h-4 w-4" />

        <Link
          href={`/practice/${technology}`}
          className="capitalize transition-colors hover:text-primary"
        >
          {data.title}
        </Link>

        <ChevronRight className="h-4 w-4" />

        <span className="font-medium text-foreground">{section.level}</span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {data.title} {section.level} Practice
      </h1>

      <p className="mt-3 text-muted-foreground">
        {quiz.length} questions covering {section.items.length} {data.title} topics.
      </p>

      <QuizSection quiz={quiz} />
    </main>
  );
}
