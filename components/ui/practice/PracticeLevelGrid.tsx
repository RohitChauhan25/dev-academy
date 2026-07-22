import Link from 'next/link';
import { ArrowRight, BrainCircuit } from 'lucide-react';

interface PracticeLevelGridProps {
  technology: string;
  levels: {
    level: string;
    slug: string;
    topicCount: number;
    questionCount: number;
  }[];
}

const levelDescriptions: Record<string, string> = {
  Beginner: 'Core fundamentals every developer should know.',
  Intermediate: 'Build on the basics with everyday patterns and methods.',
  Advanced: 'Deeper concepts asked in senior-level interviews.',
};

export default function PracticeLevelGrid({ technology, levels }: PracticeLevelGridProps) {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {levels.map((item) => {
          const isAvailable = item.questionCount > 0;

          const card = (
            <div
              className={`group flex h-full flex-col rounded-2xl border bg-card p-8 transition-all duration-300 ${
                isAvailable
                  ? 'hover:-translate-y-2 hover:border-primary hover:shadow-xl'
                  : 'opacity-60'
              }`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <BrainCircuit className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-2xl font-bold">{item.level}</h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                {levelDescriptions[item.level] ?? `${item.level} level practice questions.`}
              </p>

              <p className="mt-6 text-sm text-muted-foreground">
                {item.topicCount} topics · {item.questionCount} questions
              </p>

              {isAvailable && (
                <div className="mt-6 flex items-center gap-2 font-medium text-primary">
                  Start Practice
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              )}
            </div>
          );

          return isAvailable ? (
            <Link key={item.slug} href={`/practice/${technology}/${item.slug}`}>
              {card}
            </Link>
          ) : (
            <div key={item.slug}>{card}</div>
          );
        })}
      </div>
    </section>
  );
}
