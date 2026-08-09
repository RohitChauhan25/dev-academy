import { Tutorial } from '@/app/types/tutorial';

export const gitMerge: Tutorial = {
  slug: 'git-merge',

  title: 'Merging Branches',

  description: 'Combine the changes from one branch into another with git merge.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 12 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'What Merging Does',
      content:
        'Merging takes the changes from one branch and integrates them into another. You switch to the branch you want to update (usually main), then run git merge <branch> to bring the other branch\'s commits in.',
    },

    {
      type: 'code',
      title: 'A Basic Merge',
      language: 'bash',
      code: `git switch main
git merge feature/login

# Updating a1b2c3d..e4f5g6h
# Fast-forward
#  login.js | 24 ++++++++++++++++++++++++
#  1 file changed, 24 insertions(+)`,
    },

    {
      type: 'table',
      title: 'Two Kinds of Merge',
      headers: ['Type', 'When It Happens'],
      rows: [
        ['Fast-forward', 'main has no new commits since the branch was created — the pointer just moves forward'],
        ['Three-way merge', 'Both branches have new commits — Git creates a new merge commit joining them'],
      ],
    },

    {
      type: 'paragraph',
      title: 'The Merge Commit',
      content:
        'A three-way merge produces a special commit with two parents instead of one — it represents the point where two lines of history rejoined. This is what gives git log --graph its branching, diamond-shaped visuals.',
    },

    {
      type: 'code',
      title: 'Forcing a Merge Commit',
      language: 'bash',
      code: `# Always create a merge commit, even if a fast-forward is possible
git merge --no-ff feature/login`,
    },

    {
      type: 'note',
      title: 'Merging Doesn\'t Delete the Branch',
      content:
        'After merging, the feature branch still exists and still points to its last commit. It is common (and safe) to delete it afterward with git branch -d feature/login once its work is safely inside main.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Pull the latest main into your feature branch regularly (git merge main while on the feature branch) so the final merge back into main is small and conflict-free.',
    },
  ],

  quiz: [
    {
      question: 'What is a fast-forward merge?',
      options: [
        'A merge that skips testing',
        'A merge where the target branch pointer simply moves forward, with no new commit created',
        'A merge that discards the source branch',
        'A merge that only works on remote branches',
      ],
      answer: 1,
    },
    {
      question: 'How many parent commits does a three-way merge commit have?',
      options: ['Zero', 'One', 'Two', 'It varies'],
      answer: 2,
    },
    {
      question: 'Does merging a branch automatically delete it?',
      options: ['Yes, always', 'No, it must be deleted manually afterward', 'Only feature branches', 'Only if --no-ff is used'],
      answer: 1,
    },
  ],

  previous: 'branches',
  next: 'merge-conflicts',
};
