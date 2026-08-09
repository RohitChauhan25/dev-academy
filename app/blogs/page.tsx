import type { Metadata } from 'next';

import BlogHero from '@/components/ui/blog/BlogHero';
import BlogCard from '@/components/ui/blog/BlogCard';
import WriteCTA from '@/components/ui/blog/WriteCTA';
import { getAllBlogPosts, getAllBlogTags, blogToDisplayPost, type DisplayBlogPost } from '@/lib/blog';
import { listBlogs } from '@/lib/auth-api';

export const metadata: Metadata = {
  title: 'Blog — Dev Academy',
  description:
    'Practical, no-fluff articles on JavaScript fundamentals, common gotchas, and the concepts that keep showing up in interviews.',
};

export default async function BlogsPage() {
  const staticPosts = getAllBlogPosts();
  const staticTags = getAllBlogTags();

  // The backend may be unreachable in some environments - degrade to
  // showing just the static articles rather than failing the whole page.
  const dbPosts = await listBlogs({ limit: 50, sort: 'newest' })
    .then(({ data }) => data?.blogs.map(blogToDisplayPost) ?? [])
    .catch(() => [] as DisplayBlogPost[]);

  const posts = [...dbPosts, ...staticPosts].sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );
  const tags = Array.from(new Set([...staticTags, ...dbPosts.flatMap((p) => p.meta.tags)])).sort();

  return (
    <div>
      <BlogHero postCount={posts.length} tagCount={tags.length} />

      <section className="pb-24">
        <div className="container mx-auto px-6">
          {posts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-muted-foreground">
              No articles published yet — check back soon.
            </p>
          )}

          <div className="mt-16">
            <WriteCTA />
          </div>
        </div>
      </section>
    </div>
  );
}
