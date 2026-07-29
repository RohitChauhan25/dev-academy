import type { Metadata } from 'next';

import BlogHero from '@/components/ui/blog/BlogHero';
import BlogCard from '@/components/ui/blog/BlogCard';
import WriteCTA from '@/components/ui/blog/WriteCTA';
import { getAllBlogPosts, getAllBlogTags } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Dev Academy',
  description:
    'Practical, no-fluff articles on JavaScript fundamentals, common gotchas, and the concepts that keep showing up in interviews.',
};

export default function BlogsPage() {
  const posts = getAllBlogPosts();
  const tags = getAllBlogTags();

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
