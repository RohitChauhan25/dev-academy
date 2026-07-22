import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PracticeCTA({ technology }: { technology: string }) {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="rounded-2xl border bg-card p-10 text-center">
        <h2 className="text-3xl font-bold">Finished Learning {technology}?</h2>

        <p className="mt-4 text-muted-foreground">
          Test your knowledge with MCQs, output-based questions, and interview questions.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Button asChild>
            <Link href="/practice">Practice Questions</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/interview-questions">Interview Questions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
