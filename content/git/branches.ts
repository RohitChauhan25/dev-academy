import { Tutorial } from '@/app/types/tutorial';

export const branches: Tutorial = {
  slug: 'branches',

  title: 'Branches',

  description: 'Create and switch branches to work on features in isolation.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 11 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Branch?',
      content:
        'A branch is simply a movable pointer to a commit. The default branch (usually main) points to the latest commit on the main line of development. Creating a new branch just adds another pointer — it does not copy any files, which is why branching in Git is instant and cheap.',
    },

    {
      type: 'code',
      title: 'Creating and Switching Branches',
      language: 'bash',
      code: `# Create a new branch
git branch feature/login

# Switch to it
git switch feature/login

# Create and switch in one step
git switch -c feature/signup

# Older, equivalent syntax
git checkout -b feature/signup`,
    },

    {
      type: 'table',
      title: 'Common Branch Commands',
      headers: ['Command', 'Effect'],
      rows: [
        ['git branch', 'List local branches'],
        ['git branch -a', 'List local and remote branches'],
        ['git switch <name>', 'Switch to an existing branch'],
        ['git branch -d <name>', 'Delete a branch (safe — refuses if unmerged)'],
        ['git branch -D <name>', 'Force-delete a branch, even if unmerged'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Why Branch at All?',
      content:
        'Branches let you develop a feature, fix a bug, or experiment without touching the stable main branch. If the experiment fails, you delete the branch and main is completely unaffected. If it succeeds, you merge it back in.',
    },

    {
      type: 'code',
      title: 'Renaming a Branch',
      language: 'bash',
      code: `git branch -m old-name new-name`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use a consistent naming convention like feature/, fix/, or chore/ prefixes — it makes git branch output instantly scannable and integrates well with automated tooling.',
    },
  ],

  quiz: [
    {
      question: 'What does a Git branch actually consist of?',
      options: [
        'A full copy of every file in the project',
        'A movable pointer to a commit',
        'A separate .git folder',
        'A zip archive',
      ],
      answer: 1,
    },
    {
      question: 'Which command creates a new branch and switches to it in one step?',
      options: ['git branch -c', 'git switch -c <name>', 'git new <name>', 'git commit -b'],
      answer: 1,
    },
    {
      question: 'What does git branch -d do if the branch has unmerged changes?',
      options: [
        'Deletes it silently',
        'Refuses to delete it, to prevent losing work',
        'Merges it automatically first',
        'Renames it instead',
      ],
      answer: 1,
    },
  ],

  previous: 'git-log',
  next: 'git-merge',
};
