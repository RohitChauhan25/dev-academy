import { blogPosts, type BlogPost } from '@/content/blog';

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogTags(): string[] {
  return Array.from(new Set(blogPosts.flatMap((post) => post.meta.tags))).sort();
}

export function formatBlogDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
