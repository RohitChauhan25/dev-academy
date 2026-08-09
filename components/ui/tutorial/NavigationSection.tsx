'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/providers/AuthProvider';
import { recordTutorialComplete } from '@/lib/auth-api';

interface NavigationSectionProps {
  previous?: string;
  next?: string;
  technology: string;
  topic: string;
}

export default function NavigationSection({
  previous,
  next,
  technology,
  topic,
}: NavigationSectionProps) {
  const { accessToken } = useAuth();
  const startedAt = React.useRef(0);
  const [markedComplete, setMarkedComplete] = React.useState(false);

  React.useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const markComplete = () => {
    if (!accessToken) return;
    const timeSpentMinutes = Math.round((Date.now() - startedAt.current) / 60000);
    recordTutorialComplete(accessToken, `${technology}/${topic}`, timeSpentMinutes).catch(() => {});
  };

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
        <Button asChild onClick={markComplete}>
          <Link href={`/learn/${technology}/${next}`}>
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <Button
          disabled={markedComplete}
          onClick={() => {
            markComplete();
            setMarkedComplete(true);
          }}
        >
          {markedComplete ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Completed 🎉
            </>
          ) : (
            'Mark as complete 🎉'
          )}
        </Button>
      )}
    </div>
  );
}
