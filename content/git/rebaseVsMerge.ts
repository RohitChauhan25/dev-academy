import { Tutorial } from '@/app/types/tutorial';

export const rebaseVsMerge: Tutorial = {
  slug: 'rebase-vs-merge',

  title: 'Rebase vs Merge',

  description: 'Compare the two strategies for combining branches and know when to reach for each.',

  level: 'Advanced',

  readingTime: '10 min',

  lesson: 'Lesson 24 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'Same Goal, Different History',
      content:
        'Both merge and rebase combine changes from one branch into another — the code ends up the same either way. The difference is entirely in how the resulting history looks and whether existing commit hashes are preserved.',
    },

    {
      type: 'table',
      title: 'Side-by-Side Comparison',
      headers: ['Aspect', 'Merge', 'Rebase'],
      rows: [
        ['History shape', 'Branching, with merge commits', 'Linear, no merge commits'],
        ['Commit hashes', 'Unchanged', 'Rewritten'],
        ['Safe on shared branches?', 'Yes, always', 'No — only on local, unpushed commits'],
        ['Shows exactly when branches diverged/joined', 'Yes', 'No — looks like it happened in order'],
      ],
    },

    {
      type: 'paragraph',
      title: 'When to Merge',
      content:
        'Use merge for integrating a finished feature branch into main, and for anything involving commits that have already been pushed and might be shared with others. It is always safe and never rewrites history.',
    },

    {
      type: 'paragraph',
      title: 'When to Rebase',
      content:
        'Use rebase to keep your own local feature branch up to date with main as you work, and to clean up your commits (with interactive rebase) before opening a pull request. Once those commits are pushed and shared, stop rebasing them.',
    },

    {
      type: 'note',
      title: 'Many Teams Use Both',
      content:
        'A common convention: rebase your feature branch locally to stay current with main and keep history clean, then merge (often via a "squash and merge" button on GitHub) when the pull request is approved.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'When unsure, merge is always the safe default — it never rewrites history. Reach for rebase only once you understand exactly which commits are still local-only.',
    },
  ],

  quiz: [
    {
      question: 'Does merge or rebase preserve the original commit hashes?',
      options: ['Merge', 'Rebase', 'Both', 'Neither'],
      answer: 0,
    },
    {
      question: 'Which produces a linear history with no merge commits?',
      options: ['Merge', 'Rebase', 'Both equally', 'Neither'],
      answer: 1,
    },
    {
      question: 'Which strategy is safe to use on already-pushed, shared commits?',
      options: ['Rebase', 'Merge', 'Both are equally risky', 'Neither is safe'],
      answer: 1,
    },
  ],

  previous: 'git-rebase',
  next: 'cherry-picking',
};
