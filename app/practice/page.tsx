import PracticeHero from '@/components/ui/practice/PracticeHero';
import PracticeTechnologyGrid from '@/components/ui/practice/PracticeTechnologyGrid';
import { getTechnologyTutorials } from '@/lib/tutorials';

const AVAILABLE_TECHNOLOGIES = [
  'javascript',
  'typescript',
  'react',
  'html',
  'css',
  'nodejs',
] as const;

function countQuestions(technology: string): number {
  const tutorials = getTechnologyTutorials(technology) ?? {};
  return Object.values(tutorials).reduce(
    (total: number, tutorial: { quiz?: unknown[] }) => total + (tutorial.quiz?.length ?? 0),
    0,
  );
}

export default function PracticePage() {
  const questionCounts = Object.fromEntries(
    AVAILABLE_TECHNOLOGIES.map((tech) => [tech, countQuestions(tech)]),
  );

  const totalQuestionCount = Object.values(questionCounts).reduce((sum, count) => sum + count, 0);

  return (
    <div>
      <PracticeHero totalQuestionCount={totalQuestionCount} />
      <PracticeTechnologyGrid questionCounts={questionCounts} />
    </div>
  );
}
