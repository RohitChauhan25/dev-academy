import type { ComponentType } from 'react';

import UnderstandingClosures, {
  metadata as understandingClosuresMeta,
} from './understanding-closures.mdx';
import EventLoopExplained, { metadata as eventLoopExplainedMeta } from './event-loop-explained.mdx';
import ArrayMethodsYouShouldUse, {
  metadata as arrayMethodsYouShouldUseMeta,
} from './array-methods-you-should-use.mdx';

export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: string;
}

export interface BlogPost {
  slug: string;
  meta: BlogPostMeta;
  Content: ComponentType;
}

const posts: BlogPost[] = [
  {
    slug: 'understanding-closures',
    meta: understandingClosuresMeta as unknown as BlogPostMeta,
    Content: UnderstandingClosures,
  },
  {
    slug: 'event-loop-explained',
    meta: eventLoopExplainedMeta as unknown as BlogPostMeta,
    Content: EventLoopExplained,
  },
  {
    slug: 'array-methods-you-should-use',
    meta: arrayMethodsYouShouldUseMeta as unknown as BlogPostMeta,
    Content: ArrayMethodsYouShouldUse,
  },
];

export const blogPosts: BlogPost[] = [...posts].sort(
  (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
);
