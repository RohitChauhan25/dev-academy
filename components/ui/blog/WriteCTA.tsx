import Link from 'next/link';
import { PenSquare } from 'lucide-react';

export default function WriteCTA() {
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-10 text-center">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px]" />

      <PenSquare className="mx-auto h-8 w-8 text-violet-500" />

      <h2 className="mt-4 text-2xl font-bold">Have something to teach?</h2>

      <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
        Write an article for the Dev Academy blog — draft it with a live preview, then export it
        as a ready-to-publish post.
      </p>

      <Link
        href="/blogs/write"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
      >
        <PenSquare className="h-4 w-4" />
        Write a post
      </Link>
    </div>
  );
}
