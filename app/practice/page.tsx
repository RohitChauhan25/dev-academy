import PracticeHero from '@/components/ui/practice/PracticeHero';
import PracticeTechnologyGrid from '@/components/ui/practice/PracticeTechnologyGrid';
import { getTechnologyTutorials } from '@/lib/tutorials';

export default function PracticePage() {
  const javascriptTutorials = getTechnologyTutorials('javascript') ?? {};

  const javascriptQuestionCount = Object.values(javascriptTutorials).reduce(
    (total: number, tutorial: any) => total + (tutorial.quiz?.length ?? 0),
    0,
  );

  return (
    <div>
      <PracticeHero javascriptQuestionCount={javascriptQuestionCount} />
      <PracticeTechnologyGrid javascriptQuestionCount={javascriptQuestionCount} />
    </div>
  );
}
