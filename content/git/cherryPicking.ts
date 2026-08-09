import { Tutorial } from '@/app/types/tutorial';

export const cherryPicking: Tutorial = {
  slug: 'cherry-picking',

  title: 'Cherry Picking',

  description: 'Apply a single specific commit from one branch onto another with git cherry-pick.',

  level: 'Advanced',

  readingTime: '10 min',

  lesson: 'Lesson 25 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'What Cherry-Pick Does',
      content:
        'git cherry-pick copies a single commit from anywhere in the repository and applies it as a new commit on your current branch — without merging the entire branch it came from. It is useful when you need just one fix, not everything else that branch contains.',
    },

    {
      type: 'code',
      title: 'Cherry-Picking a Commit',
      language: 'bash',
      code: `# Find the commit hash you want (e.g. from another branch)
git log feature/payments --oneline

# Apply just that one commit onto your current branch
git cherry-pick a6f92e1`,
    },

    {
      type: 'paragraph',
      title: 'Common Use Case: Hotfixes',
      content:
        'A classic scenario: a critical bug fix was committed on a feature branch that also has unfinished, unrelated work. Rather than merging the whole branch, cherry-pick just the fix commit onto main to ship it immediately.',
    },

    {
      type: 'table',
      title: 'Cherry-Pick Options',
      headers: ['Command', 'Effect'],
      rows: [
        ['git cherry-pick <hash>', 'Apply one commit'],
        ['git cherry-pick <hash1> <hash2>', 'Apply multiple commits, in order'],
        ['git cherry-pick --abort', 'Cancel a cherry-pick that hit a conflict'],
        ['git cherry-pick --continue', 'Resume after resolving a conflict'],
      ],
    },

    {
      type: 'warning',
      title: 'Cherry-Picking Creates a New Commit',
      content:
        'Like rebasing, cherry-picking gives the copied commit a brand-new hash on the target branch — it is a copy, not a move. The original commit still exists unchanged wherever it came from.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Cherry-pick sparingly — reaching for it often is usually a sign that work should have been organized into smaller, separate branches to begin with.',
    },
  ],

  quiz: [
    {
      question: 'What does git cherry-pick do?',
      options: [
        'Merges an entire branch',
        'Applies one specific commit onto the current branch',
        'Deletes a commit',
        'Renames a branch',
      ],
      answer: 1,
    },
    {
      question: 'What is a common real-world use case for cherry-picking?',
      options: [
        'Deleting old branches',
        'Applying just a critical hotfix commit without the rest of its branch',
        'Renaming remotes',
        'Setting global config',
      ],
      answer: 1,
    },
    {
      question: 'Does the cherry-picked commit keep the same hash as the original?',
      options: ['Yes, always', 'No, it gets a new hash on the target branch', 'Only with --same-hash', 'Only for merge commits'],
      answer: 1,
    },
  ],

  previous: 'rebase-vs-merge',
  next: 'git-tags',
};
