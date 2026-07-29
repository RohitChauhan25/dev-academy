import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { getAllBlogPosts, getBlogPost, formatBlogDate } from '@/lib/blog';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  return {
    title: `${post.meta.title} — Dev Academy Blog`,
    description: post.meta.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { Content, meta } = post;

  return (
    <article className="relative overflow-hidden py-20">
      <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="container relative mx-auto max-w-3xl px-6">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          All articles
        </Link>

        <div className="mt-8 flex flex-wrap gap-2">
          {meta.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="rounded-full border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="mt-6 text-4xl font-black leading-tight md:text-5xl">{meta.title}</h1>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">{meta.description}</p>

        <div className="mt-6 flex flex-wrap items-center gap-5 border-b pb-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            {meta.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formatBlogDate(meta.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {meta.readingTime}
          </span>
        </div>

        <div className="pb-10">
          <Content />
        </div>
      </div>
    </article>
  );
}
