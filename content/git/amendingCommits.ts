import { Tutorial } from '@/app/types/tutorial';

export const amendingCommits: Tutorial = {
  slug: 'amending-commits',

  title: 'Amending Commits',

  description: 'Fix the most recent commit\'s message or contents with git commit --amend.',

  level: 'Advanced',

  readingTime: '8 min',

  lesson: 'Lesson 22 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'What --amend Does',
      content:
        'git commit --amend replaces the most recent commit with a new one, letting you fix a typo in the message or add a forgotten file — without cluttering history with a separate "fix typo" commit.',
    },

    {
      type: 'code',
      title: 'Fixing a Commit Message',
      language: 'bash',
      code: `git commit --amend -m "Add login form validation"`,
    },

    {
      type: 'code',
      title: 'Adding a Forgotten File',
      language: 'bash',
      code: `git add forgotten-file.js
git commit --amend --no-edit
# --no-edit keeps the existing commit message unchanged`,
    },

    {
      type: 'paragraph',
      title: 'It Creates a New Commit',
      content:
        'Amending doesn\'t edit the old commit in place — Git creates an entirely new commit with a new hash and makes the branch point to it, while the old commit becomes unreferenced. Functionally it looks like an edit, but technically it is a replacement.',
    },

    {
      type: 'warning',
      title: 'Never Amend a Pushed Commit',
      content:
        'Because amending changes the commit\'s hash, amending a commit that others have already pulled will cause their history to diverge from yours, requiring a force-push and confusing anyone who already has the old commit.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Amend freely for commits that only exist on your machine. Once a commit is pushed to a shared branch, prefer a new, separate commit instead.',
    },
  ],

  quiz: [
    {
      question: 'What does git commit --amend do?',
      options: [
        'Deletes the last commit permanently',
        'Replaces the most recent commit with a new one',
        'Creates a new branch',
        'Merges two commits from different branches',
      ],
      answer: 1,
    },
    {
      question: 'Does the amended commit keep the same hash as the original?',
      options: ['Yes, always', 'No, it gets a new hash', 'Only if the message is unchanged', 'Only on the main branch'],
      answer: 1,
    },
    {
      question: 'Why is amending a pushed, shared commit risky?',
      options: [
        'It deletes the remote repository',
        'It creates a merge conflict immediately',
        'It changes the commit hash, diverging from what others already have',
        'It is not risky at all',
      ],
      answer: 2,
    },
  ],

  previous: 'git-reset-and-revert',
  next: 'git-rebase',
};
