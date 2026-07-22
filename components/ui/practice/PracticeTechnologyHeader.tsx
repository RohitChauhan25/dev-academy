import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

interface PracticeTechnologyHeaderProps {
  title: string;
  description: string;
  questionCount: number;
}

export default function PracticeTechnologyHeader({
  title,
  description,
  questionCount,
}: PracticeTechnologyHeaderProps) {
  return (
    <section className="container mx-auto px-6 pt-10">
      <div className="relative overflow-hidden rounded-2xl border bg-card px-5 py-8 sm:px-8 sm:py-10">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative">
          <div className="mb-6 flex flex-wrap items-center gap-1 text-xs text-muted-foreground sm:text-sm">
            <Link href="/practice" className="transition-colors hover:text-primary">
              Practice
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span className="font-medium text-foreground">{title}</span>
          </div>

          <Badge>{questionCount} Questions</Badge>

          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Practice {title}
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base lg:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
