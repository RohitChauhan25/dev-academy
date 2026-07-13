import Link from 'next/link';
import { BookOpen, ChevronRight, Clock3 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

interface TutorialHeroProps {
  technology: string;
  title: string;
  description: string;
  level: string;
  readingTime: string;
  lesson: string;
}

export default function TutorialHero({
  technology,
  title,
  description,
  level,
  readingTime,
  lesson,
}: TutorialHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border bg-card px-5 py-8 sm:px-8 sm:py-10">
      {/* Background */}
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative">
        {/* Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-1 text-xs text-muted-foreground sm:text-sm">
          <Link href="/learn" className="transition-colors hover:text-primary">
            Learn
          </Link>

          <ChevronRight className="h-4 w-4" />

          <Link
            href={`/learn/${technology}`}
            className="capitalize transition-colors hover:text-primary"
          >
            {technology}
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span className="truncate font-medium text-foreground">{title}</span>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <Badge>{level}</Badge>

          <Badge variant="secondary" className="capitalize">
            {technology}
          </Badge>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base lg:text-lg">
          {description}
        </p>

        {/* Meta */}
        <div className="mt-8 grid grid-cols-1 gap-4 border-t pt-6 sm:grid-cols-2 lg:flex lg:items-center lg:gap-8">
          <div className="flex items-center gap-2 rounded-lg border bg-muted/30 px-4 py-3">
            <Clock3 className="h-5 w-5 text-primary" />

            <div>
              <p className="text-xs text-muted-foreground">Reading Time</p>

              <p className="font-medium">{readingTime}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg border bg-muted/30 px-4 py-3">
            <BookOpen className="h-5 w-5 text-primary" />

            <div>
              <p className="text-xs text-muted-foreground">Lesson</p>

              <p className="font-medium">{lesson}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
