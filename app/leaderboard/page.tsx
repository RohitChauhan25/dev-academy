import type { Metadata } from 'next';

import LeaderboardPage from '@/components/ui/leaderboard/LeaderboardPage';

export const metadata: Metadata = {
  title: 'Leaderboard — Dev Academy',
  description: 'See how your learning progress ranks against the Dev Academy community.',
};

export default function Page() {
  return <LeaderboardPage />;
}
