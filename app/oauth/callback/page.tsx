import type { Metadata } from 'next';
import OAuthCallbackClient from './OAuthCallbackClient';

export const metadata: Metadata = {
  title: 'Signing you in...',
};

export default async function OAuthCallbackPage({
  searchParams,
}: {
  searchParams: Promise<{ accessToken?: string; error?: string }>;
}) {
  const { accessToken, error } = await searchParams;

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center text-center">
      <OAuthCallbackClient accessToken={accessToken ?? null} error={error ?? null} />
    </div>
  );
}
