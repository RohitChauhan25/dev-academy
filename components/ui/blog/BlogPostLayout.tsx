import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight, Clock, Eye, Heart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  formatBlogDate,
  getRelatedPosts,
  type DisplayBlogMeta,
} from "@/lib/blog";
import BlogAuthorCard from "./BlogAuthorCard";
import BlogRelatedPosts from "./BlogRelatedPosts";
import BlogDiscoverMore from "./BlogDiscoverMore";

export default function BlogPostLayout({
  meta,
  slug,
  children,
}: {
  meta: DisplayBlogMeta;
  slug: string;
  children: ReactNode;
}) {
  const relatedPosts = getRelatedPosts(slug, 4);

  return (
    <article className="py-10">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/blogs" className="transition-colors hover:text-primary">
            Blogs
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="truncate font-medium text-foreground">
            {meta.title}
          </span>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {meta.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="rounded-full border-amber-300 bg-amber-100 text-amber-900 dark:border-[#FBBF24]/30 dark:bg-[#FBBF24]/10 dark:text-[#FBBF24]"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
          {meta.title}
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
          {meta.description}
        </p>

        {/* Meta bar */}
        <div className="mt-6 flex flex-wrap items-center gap-5 border-b pb-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            {meta.authorAvatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={meta.authorAvatar}
                alt={meta.author}
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <div className="h-7 w-7 rounded-full bg-[#FBBF24]/10" />
            )}
            <span className="font-medium text-foreground">{meta.author}</span>
          </div>

          <span>{formatBlogDate(meta.date)}</span>

          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {meta.readingTime}
          </span>

          {typeof meta.views === "number" && (
            <span className="flex items-center gap-1.5">
              <Eye className="h-4 w-4" />
              {meta.views}
            </span>
          )}

          {typeof meta.likesCount === "number" && (
            <span className="flex items-center gap-1.5">
              <Heart className="h-4 w-4" />
              {meta.likesCount}
            </span>
          )}

          {/* <button
            type="button"
            className="ml-auto flex items-center gap-1.5 rounded-full border px-3 py-1.5 transition hover:bg-muted"
          >
            <Share2 className="h-4 w-4" />
            Share
          </button> */}
        </div>

        {/* Content + sidebar */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="min-w-0">{children}</div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <BlogAuthorCard name={meta.author} avatar={meta.authorAvatar} />
            <BlogRelatedPosts posts={relatedPosts} />
            <BlogDiscoverMore />
          </aside>
        </div>
      </div>
    </article>
  );
}
