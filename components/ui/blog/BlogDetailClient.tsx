'use client';

import * as React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/providers/AuthProvider';
import { getBlogBySlug, type Blog } from '@/lib/auth-api';
import { blogToDisplayPost } from '@/lib/blog';
import BlogPostLayout from './BlogPostLayout';
import DbContentEnhancer from './DbContentEnhancer';

/**
 * Renders when the server-side (unauthenticated) lookup for a blog slug
 * came back empty. That happens for genuinely missing posts, but also for
 * an author's own draft - the server has no access to the browser's
 * in-memory access token, so drafts can only be confirmed as "yours" here,
 * client-side, once auth has resolved.
 */
export default function BlogDetailClient({ slug }: { slug: string }) {
  const { accessToken, status } = useAuth();
  const [blog, setBlog] = React.useState<Blog | null>(null);
  const [notFound, setNotFound] = React.useState(false);

  React.useEffect(() => {
    if (status === 'loading') return;
    getBlogBySlug(slug, accessToken ?? undefined)
      .then(({ data }) => (data ? setBlog(data.blog) : setNotFound(true)))
      .catch(() => setNotFound(true));
  }, [slug, accessToken, status]);

  if (notFound) {
    return (
      <div className="mx-auto flex min-h-[50vh] max-w-md flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-xl font-semibold text-foreground">Post not found</h1>
        <p className="text-sm text-muted-foreground">
          This post doesn&apos;t exist, or isn&apos;t published yet.
        </p>
        <Button asChild variant="outline">
          <Link href="/blogs">Back to blog</Link>
        </Button>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="size-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const { meta } = blogToDisplayPost(blog);

  return (
    <BlogPostLayout meta={meta} slug={slug}>
      <DbContentEnhancer html={blog.content} />
    </BlogPostLayout>
  );
}
