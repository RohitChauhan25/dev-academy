import { Tutorial } from '@/app/types/tutorial';

export const gitRebase: Tutorial = {
  slug: 'git-rebase',

  title: 'Rebasing',

  description: 'Replay a branch\'s commits on top of another branch to create a cleaner, linear history.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 23 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'What Rebasing Does',
      content:
        'Rebasing takes the commits from your current branch and replays them, one by one, on top of another branch\'s latest commit — as if you had started your work later, from that newer point. The result is a straight, linear history with no merge commit.',
    },

    {
      type: 'code',
      title: 'Rebasing a Feature Branch onto main',
      language: 'bash',
      code: `git switch feature/login
git rebase main

# Each commit on feature/login is replayed on top of the latest main`,
    },

    {
      type: 'table',
      title: 'Rebase vs Merge, Visually',
      headers: ['Merge', 'Rebase'],
      rows: [
        ['Preserves exact history, adds a merge commit', 'Rewrites commits with new hashes, linear history'],
        ['Non-destructive', 'Rewrites history — do not rebase shared commits'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Interactive Rebase',
      content:
        'git rebase -i lets you edit, reorder, combine (squash), or drop commits before they land — useful for cleaning up a messy feature branch (like five "wip" commits) into a small number of well-described commits before opening a pull request.',
    },

    {
      type: 'code',
      title: 'Squashing the Last 3 Commits',
      language: 'bash',
      code: `git rebase -i HEAD~3

# Opens an editor listing the last 3 commits — change "pick" to
# "squash" (or "s") on the ones you want merged into the commit above them`,
    },

    {
      type: 'warning',
      title: 'The Golden Rule of Rebasing',
      content:
        'Never rebase commits that have already been pushed and might have been pulled by someone else. Rebasing rewrites commit hashes, so anyone with the old commits will end up with a diverged, conflicting history.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use interactive rebase to clean up your own local, unpushed commits before opening a pull request — it makes the PR far easier to review.',
    },
  ],

  quiz: [
    {
      question: 'What does rebasing do to a branch\'s commits?',
      options: [
        'Deletes them',
        'Replays them on top of another branch, giving them new hashes',
        'Merges them without changing hashes',
        'Converts them into tags',
      ],
      answer: 1,
    },
    {
      question: 'What does interactive rebase (-i) let you do?',
      options: [
        'Only rename the branch',
        'Reorder, edit, squash, or drop commits before they land',
        'Delete the entire repository',
        'Push directly to production',
      ],
      answer: 1,
    },
    {
      question: 'What is the golden rule of rebasing?',
      options: [
        'Always rebase main into feature branches',
        'Never rebase commits that have already been pushed and shared',
        'Rebase only works with GitHub',
        'Rebase should replace merge entirely',
      ],
      answer: 1,
    },
  ],

  previous: 'amending-commits',
  next: 'rebase-vs-merge',
};
