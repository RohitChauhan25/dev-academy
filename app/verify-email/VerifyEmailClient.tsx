'use client';

import * as React from 'react';
import Link from 'next/link';
import { CheckCircle2, Loader2, XCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { verifyEmail } from '@/lib/auth-api';

type Status = 'loading' | 'success' | 'error';

export default function VerifyEmailClient({ token }: { token: string | null }) {
  const [status, setStatus] = React.useState<Status>(token ? 'loading' : 'error');
  const [message, setMessage] = React.useState('');
  const hasRun = React.useRef(false);

  React.useEffect(() => {
    if (!token || hasRun.current) return;
    hasRun.current = true;

    verifyEmail(token)
      .then(() => setStatus('success'))
      .catch((err: Error) => {
        setStatus('error');
        setMessage(err.message);
      });
  }, [token]);

  if (status === 'loading') {
    return (
      <>
        <Loader2 className="size-10 animate-spin text-muted-foreground" />
        <h1 className="mt-4 text-lg font-semibold text-foreground">
          Verifying your email...
        </h1>
      </>
    );
  }

  if (status === 'success') {
    return (
      <>
        <CheckCircle2 className="size-10 text-emerald-500" />
        <h1 className="mt-4 text-lg font-semibold text-foreground">
          Email verified!
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Your account is ready. You can now sign in.
        </p>
        <Button asChild className="mt-5">
          <Link href="/">Go to homepage</Link>
        </Button>
      </>
    );
  }

  return (
    <>
      <XCircle className="size-10 text-destructive" />
      <h1 className="mt-4 text-lg font-semibold text-foreground">
        Verification failed
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {message || 'This verification link is missing or invalid.'}
      </p>
      <Button asChild variant="outline" className="mt-5">
        <Link href="/">Back to homepage</Link>
      </Button>
    </>
  );
}
