import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";

import type { BlogPost } from "@/content/blog";

export default function BlogRelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="rounded-2xl border bg-card p-5">
      <p className="flex items-center gap-2 text-sm font-semibold">
        <BookOpen className="h-4 w-4 text-violet-500" />
        Learn Next
      </p>

      <ul className="mt-4 space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blogs/${post.slug}`}
              className="group flex items-start justify-between gap-2 text-sm font-medium leading-6 text-foreground transition hover:text-violet-500"
            >
              {post.meta.title}
              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-violet-500" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
