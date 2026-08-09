import { Tutorial } from '@/app/types/tutorial';

export const gitFetch: Tutorial = {
  slug: 'git-fetch',

  title: 'git fetch',

  description: 'Download remote changes without merging them, and understand how it differs from git pull.',

  level: 'Intermediate',

  readingTime: '8 min',

  lesson: 'Lesson 17 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'What git fetch Does',
      content:
        'git fetch downloads commits, branches, and tags from a remote, but does not touch your working directory or current branch at all. It just updates Git\'s local record of what the remote looks like (remote-tracking branches like origin/main).',
    },

    {
      type: 'code',
      title: 'Fetching Without Merging',
      language: 'bash',
      code: `git fetch origin

# See what changed on the remote before deciding to merge
git log main..origin/main --oneline`,
    },

    {
      type: 'table',
      title: 'Fetch vs Pull',
      headers: ['Command', 'Downloads?', 'Merges into your branch?'],
      rows: [
        ['git fetch', 'Yes', 'No'],
        ['git pull', 'Yes', 'Yes, automatically'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Why Fetch Separately?',
      content:
        'Fetching lets you inspect what has changed on the remote before deciding what to do — review the incoming commits, then merge, rebase, or ignore them on your own terms rather than letting a pull silently merge into your working branch.',
    },

    {
      type: 'code',
      title: 'Merging After a Fetch',
      language: 'bash',
      code: `git fetch origin
git merge origin/main`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'If you like to review incoming changes before merging, prefer git fetch followed by an explicit git merge or git rebase over a blind git pull.',
    },
  ],

  quiz: [
    {
      question: 'Does git fetch change your working directory?',
      options: ['Yes, immediately', 'No, it only updates remote-tracking references', 'Only on the main branch', 'Only with --force'],
      answer: 1,
    },
    {
      question: 'What does git pull do that git fetch does not?',
      options: ['Downloads commits', 'Creates a remote', 'Automatically merges the fetched changes', 'Deletes local commits'],
      answer: 2,
    },
    {
      question: 'What is origin/main after a fetch?',
      options: [
        'Your local main branch',
        'A remote-tracking reference showing where the remote\'s main branch is',
        'A deleted branch',
        'A tag',
      ],
      answer: 1,
    },
  ],

  previous: 'git-push-and-pull',
  next: 'pull-requests-and-forking',
};
