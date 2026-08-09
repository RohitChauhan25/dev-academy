import type { Metadata } from 'next';

import { getAllBlogPosts, getBlogPost, blogToDisplayPost } from '@/lib/blog';
import { getBlogBySlug } from '@/lib/auth-api';
import BlogPostLayout from '@/components/ui/blog/BlogPostLayout';
import BlogDetailClient from '@/components/ui/blog/BlogDetailClient';
import DbContentEnhancer from '@/components/ui/blog/DbContentEnhancer';

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
  if (post) {
    return {
      title: `${post.meta.title} — Dev Academy Blog`,
      description: post.meta.description,
    };
  }

  const { data } = await getBlogBySlug(slug).catch(() => ({ data: null }));
  if (!data) return {};

  return {
    title: `${data.blog.title} — Dev Academy Blog`,
    description: data.blog.shortDescription,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    const { data } = await getBlogBySlug(slug).catch(() => ({ data: null }));
    if (!data) {
      // Not visible to an anonymous viewer - could be a genuinely missing
      // post, or the logged-in author's own draft. Only the browser knows
      // which, since the access token never reaches this server render.
      return <BlogDetailClient slug={slug} />;
    }

    const { meta } = blogToDisplayPost(data.blog);
    return (
      <BlogPostLayout meta={meta} slug={slug}>
        <DbContentEnhancer html={data.blog.content} />
      </BlogPostLayout>
    );
  }

  const { Content, meta } = post;

  return (
    <BlogPostLayout meta={meta} slug={slug}>
      <Content />
    </BlogPostLayout>
  );
}
