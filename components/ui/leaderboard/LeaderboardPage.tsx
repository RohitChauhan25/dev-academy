'use client';

import * as React from 'react';
import { Loader2, Trophy, Flame, Target } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SignUpModal from '@/components/ui/auth/SignUpModal';
import { useAuth } from '@/components/providers/AuthProvider';
import { getLeaderboard, type Leaderboard, type LeaderboardEntry } from '@/lib/auth-api';

const RANK_STYLES: Record<number, string> = {
  1: 'bg-amber-400/15 text-amber-500 dark:text-amber-400',
  2: 'bg-slate-400/15 text-slate-500 dark:text-slate-300',
  3: 'bg-orange-400/15 text-orange-500 dark:text-orange-400',
};

export default function LeaderboardPage() {
  const { user, accessToken, status } = useAuth();
  const [leaderboard, setLeaderboard] = React.useState<Leaderboard | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    if (status !== 'authenticated' || !accessToken) return;
    getLeaderboard(accessToken, 50)
      .then(({ data }) => data && setLeaderboard(data))
      .catch((err) =>
        setError(err instanceof Error ? err.message : 'Failed to load leaderboard.')
      )
      .finally(() => setLoading(false));
  }, [status, accessToken]);

  if (status === 'loading') {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="size-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-xl font-semibold text-foreground">Sign in to see the leaderboard</h1>
        <p className="text-sm text-muted-foreground">
          See how your progress stacks up against the rest of the DevAcademy community.
        </p>
        <SignUpModal trigger={<Button>Sign In</Button>} />
      </div>
    );
  }

  const entries = leaderboard?.entries ?? [];
  const me = leaderboard?.me ?? null;
  const meInTop = me ? entries.some((e) => e.user._id === me.user._id) : false;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-8 sm:px-6">
      <div className="flex items-center gap-2">
        <Trophy className="size-6 text-primary" />
        <h1 className="text-xl font-semibold text-foreground">Leaderboard</h1>
      </div>
      <p className="-mt-4 text-sm text-muted-foreground">
        Ranked by correct answers, with accuracy and volume as tie-breakers.
      </p>

      {loading && (
        <div className="flex justify-center py-10">
          <Loader2 className="size-6 animate-spin text-muted-foreground" />
        </div>
      )}

      {!loading && error && <p className="text-sm text-destructive">{error}</p>}

      {!loading && !error && entries.length === 0 && (
        <p className="py-10 text-center text-sm text-muted-foreground">
          No activity yet — be the first to answer a question and claim the top spot.
        </p>
      )}

      {!loading && !error && entries.length > 0 && (
        <Card>
          {entries.map((entry) => (
            <LeaderboardRow key={entry.user._id} entry={entry} isMe={entry.user._id === user?._id} />
          ))}
        </Card>
      )}

      {!loading && !error && me && !meInTop && (
        <div>
          <h2 className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground">
            YOUR RANK
          </h2>
          <Card className="p-0">
            <LeaderboardRow entry={me} isMe />
          </Card>
        </div>
      )}
    </div>
  );
}

function LeaderboardRow({ entry, isMe }: { entry: LeaderboardEntry; isMe: boolean }) {
  const initials = (entry.user.name ?? entry.user.username ?? '?').charAt(0).toUpperCase();
  const rankBadgeClass = RANK_STYLES[entry.rank] ?? 'bg-muted text-muted-foreground';

  return (
    <CardContent
      className={`flex items-center gap-4 py-3 ${isMe ? 'bg-primary/5' : ''}`}
    >
      <div
        className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${rankBadgeClass}`}
      >
        {entry.rank}
      </div>

      <Avatar className="size-9 shrink-0">
        <AvatarImage src={entry.user.profilePicture || undefined} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-foreground" title={entry.user.name}>
          {entry.user.name}
          {isMe && (
            <Badge variant="secondary" className="ml-2">
              You
            </Badge>
          )}
        </p>
        <p className="truncate text-xs text-muted-foreground">@{entry.user.username}</p>
      </div>

      <div className="flex shrink-0 items-center gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1" title="Correct answers">
          <Target className="size-3.5" />
          {entry.correctAnswers}
        </span>
        <span className="flex items-center gap-1" title="Day streak">
          <Flame className="size-3.5" />
          {entry.learningStreak}
        </span>
        <span className="hidden font-medium text-foreground sm:inline">{entry.accuracy}%</span>
      </div>
    </CardContent>
  );
}
