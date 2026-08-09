import { Tutorial } from '@/app/types/tutorial';

export const gitPushAndPull: Tutorial = {
  slug: 'git-push-and-pull',

  title: 'git push & git pull',

  description: 'Sync your local commits with a remote repository.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 16 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'git push',
      content:
        'git push uploads your local commits to a remote repository, updating the branch there to match yours. Nothing you commit locally is visible to anyone else until you push it.',
    },

    {
      type: 'code',
      title: 'Pushing Commits',
      language: 'bash',
      code: `git push origin main

# First push of a new branch — sets up tracking
git push -u origin feature/login

# After tracking is set up, just:
git push`,
    },

    {
      type: 'paragraph',
      title: 'git pull',
      content:
        'git pull downloads new commits from the remote and integrates them into your current branch. It is actually two steps combined: git fetch (download) followed by git merge (integrate).',
    },

    {
      type: 'code',
      title: 'Pulling Changes',
      language: 'bash',
      code: `git pull origin main

# Equivalent to:
git fetch origin main
git merge origin/main`,
    },

    {
      type: 'table',
      title: 'Push vs Pull',
      headers: ['Command', 'Direction'],
      rows: [
        ['git push', 'Local commits → remote'],
        ['git pull', 'Remote commits → local'],
      ],
    },

    {
      type: 'warning',
      title: 'Rejected Pushes',
      content:
        'If the remote has commits you don\'t have locally, git push is rejected to avoid silently overwriting someone else\'s work. Run git pull first to bring your branch up to date, resolve any conflicts, then push again.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Pull before you start working each day, and push often in small increments — the longer commits stay local-only, the more likely they are to conflict with everyone else\'s changes.',
    },
  ],

  quiz: [
    {
      question: 'What does git push do?',
      options: [
        'Downloads commits from the remote',
        'Uploads local commits to the remote',
        'Deletes the remote repository',
        'Creates a new branch',
      ],
      answer: 1,
    },
    {
      question: 'What two steps does git pull combine?',
      options: ['add and commit', 'clone and init', 'fetch and merge', 'stash and pop'],
      answer: 2,
    },
    {
      question: 'Why might git push be rejected?',
      options: [
        'You are offline',
        'The remote has commits you do not have locally',
        'You used the wrong branch name',
        'Push is always rejected the first time',
      ],
      answer: 1,
    },
  ],

  previous: 'git-clone',
  next: 'git-fetch',
};
