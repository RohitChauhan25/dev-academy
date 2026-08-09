'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Loader2, XCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { getProfile } from '@/lib/auth-api';
import { useAuth } from '@/components/providers/AuthProvider';

export default function OAuthCallbackClient({
  accessToken,
  error,
}: {
  accessToken: string | null;
  error: string | null;
}) {
  const router = useRouter();
  const { setSession } = useAuth();
  const [failure, setFailure] = React.useState(
    () => error ?? (accessToken ? null : 'missing_token')
  );
  const hasRun = React.useRef(false);

  React.useEffect(() => {
    if (hasRun.current || error || !accessToken) return;
    hasRun.current = true;

    getProfile(accessToken)
      .then(({ data }) => {
        if (!data) throw new Error('Missing profile');
        setSession(data.user, accessToken);
        router.replace('/');
      })
      .catch(() => setFailure('profile_fetch_failed'));
  }, [accessToken, error, router, setSession]);

  if (failure) {
    return (
      <>
        <XCircle className="size-10 text-destructive" />
        <h1 className="mt-4 text-lg font-semibold text-foreground">
          Google sign-in failed
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Something went wrong while signing you in. Please try again.
        </p>
        <Button asChild variant="outline" className="mt-5">
          <Link href="/">Back to homepage</Link>
        </Button>
      </>
    );
  }

  return (
    <>
      <Loader2 className="size-10 animate-spin text-muted-foreground" />
      <h1 className="mt-4 text-lg font-semibold text-foreground">
        Signing you in...
      </h1>
    </>
  );
}
