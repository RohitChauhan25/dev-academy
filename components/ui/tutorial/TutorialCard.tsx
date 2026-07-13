import Link from 'next/link';
import { ArrowRight, Clock3 } from 'lucide-react';

interface Tutorial {
  title: string;
  slug: string;
  duration: string;
  description: string;
}

interface TutorialCardProps {
  technology: string;
  tutorial: Tutorial;
}

export default function TutorialCard({ technology, tutorial }: TutorialCardProps) {
  return (
    <Link
      href={`/learn/${technology}/${tutorial.slug}`}
      className="group flex flex-col rounded-xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{tutorial.title}</h3>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock3 className="h-4 w-4" />
          {tutorial.duration}
        </div>
      </div>

      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{tutorial.description}</p>

      <div className="mt-6 flex items-center gap-2 font-medium text-primary">
        Start Learning
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}
