import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import BlogEditor from '@/components/ui/blog/BlogEditor';

export const metadata: Metadata = {
  title: 'Write a Post — Dev Academy Blog',
  description: 'Draft a new blog post with a live markdown preview.',
};

export default function WriteBlogPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          All articles
        </Link>

        <h1 className="mt-6 text-3xl font-black leading-tight md:text-4xl">
          Write a{' '}
          <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 bg-clip-text text-transparent">
            new post
          </span>
        </h1>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          Draft your article with Markdown on the left and see it rendered exactly like a
          published post on the right.
        </p>

        <div className="mt-10">
          <BlogEditor />
        </div>
      </div>
    </div>
  );
}
