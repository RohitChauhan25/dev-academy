import type { Metadata } from 'next';
import VerifyEmailClient from './VerifyEmailClient';

export const metadata: Metadata = {
  title: 'Verify your email',
};

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center text-center">
      <VerifyEmailClient token={token ?? null} />
    </div>
  );
}
