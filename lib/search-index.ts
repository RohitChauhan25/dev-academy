import { getTechnologyTutorials, getTechnologyInterviewQuestions } from '@/lib/tutorials';
import { getAllBlogPosts } from '@/lib/blog';
import { slugify } from '@/lib/utils';
import type { Tutorial } from '@/app/types/tutorial';

export interface SearchItem {
  title: string;
  subtitle?: string;
  group: string;
  href: string;
}

export function getSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  const tutorials = getTechnologyTutorials('javascript') ?? {};
  Object.values(tutorials as Record<string, Tutorial>).forEach((tutorial) => {
    items.push({
      title: tutorial.title,
      group: 'Tutorials',
      href: `/learn/javascript/${tutorial.slug}`,
    });

    tutorial.sections?.forEach((section) => {
      items.push({
        title: section.title,
        subtitle: tutorial.title,
        group: 'Topics',
        href: `/learn/javascript/${tutorial.slug}#${slugify(section.title)}`,
      });
    });
  });

  const interviewTopics = getTechnologyInterviewQuestions('javascript') ?? [];
  interviewTopics.forEach((topic) => {
    if (topic.questions.length === 0) return;
    items.push({
      title: topic.title,
      group: 'Interview Questions',
      href: `/interview-questions/javascript#${topic.slug}-q1`,
    });
  });

  getAllBlogPosts().forEach((post) => {
    items.push({
      title: post.meta.title,
      subtitle: post.meta.description,
      group: 'Blog',
      href: `/blogs/${post.slug}`,
    });
  });

  items.push(
    { title: 'Learn', group: 'Pages', href: '/learn' },
    { title: 'Practice', group: 'Pages', href: '/practice' },
    { title: 'Interview Questions', group: 'Pages', href: '/interview-questions' },
    { title: 'Blog', group: 'Pages', href: '/blogs' },
    { title: 'Write a Blog Post', group: 'Pages', href: '/blogs/write' },
  );

  return items;
}
