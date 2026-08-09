import { blogPosts, type BlogPost, type BlogPostMeta } from '@/content/blog';
import type { Blog } from './auth-api';

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogTags(): string[] {
  return Array.from(new Set(blogPosts.flatMap((post) => post.meta.tags))).sort();
}

// Card/listing views only need `meta` + `slug`, so a `BlogCard` can render
// either a static MDX post (which also has `Content`) or a backend-authored
// one without needing to know which source it came from.
//
// The extra fields here (coverImage, views, ...) only exist for
// backend-authored posts - static MDX posts simply omit them, and the
// detail page hides whatever isn't present rather than faking it.
export interface DisplayBlogMeta extends BlogPostMeta {
  coverImage?: string;
  authorAvatar?: string;
  views?: number;
  likesCount?: number;
}

export interface DisplayBlogPost {
  slug: string;
  meta: DisplayBlogMeta;
}

export function blogToDisplayPost(blog: Blog): DisplayBlogPost {
  return {
    slug: blog.slug,
    meta: {
      title: blog.title,
      description: blog.shortDescription,
      date: blog.createdAt,
      author: blog.author.name,
      tags: blog.tags,
      readingTime: `${blog.readingTime} min read`,
      coverImage: blog.coverImage || undefined,
      authorAvatar: blog.author.profilePicture,
      views: blog.views,
      likesCount: blog.likesCount,
    },
  };
}

// "Learn Next" sidebar uses the static MDX posts - real, already-published
// content available without an extra network round trip, regardless of
// which post (static or backend-authored) is currently being viewed.
export function getRelatedPosts(excludeSlug: string, limit = 4): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== excludeSlug).slice(0, limit);
}

export function formatBlogDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
