import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationSectionProps {
  previous?: string;
  next?: string;
  technology: string;
}

export default function NavigationSection({ previous, next, technology }: NavigationSectionProps) {
  return (
    <div className="mt-20 flex justify-between">
      {previous ? (
        <Button variant="outline" asChild>
          <Link href={`/learn/${technology}/${previous}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Link>
        </Button>
      ) : (
        <Button variant="outline" disabled>
          Previous
        </Button>
      )}

      {next ? (
        <Button asChild>
          <Link href={`/learn/${technology}/${next}`}>
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <Button disabled>Completed 🎉</Button>
      )}
    </div>
  );
}
