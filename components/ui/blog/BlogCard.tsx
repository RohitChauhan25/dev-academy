import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { formatBlogDate } from '@/lib/blog';
import type { BlogPost } from '@/content/blog';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:shadow-xl"
    >
      <div className="flex flex-wrap gap-2">
        {post.meta.tags.slice(0, 3).map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="rounded-full border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300"
          >
            {tag}
          </Badge>
        ))}
      </div>

      <h3 className="mt-4 text-xl font-bold leading-snug transition group-hover:text-violet-500">
        {post.meta.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
        {post.meta.description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t pt-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatBlogDate(post.meta.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.meta.readingTime}
          </span>
        </div>

        <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
    </Link>
  );
}
