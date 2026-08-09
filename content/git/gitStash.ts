import { Tutorial } from '@/app/types/tutorial';

export const gitStash: Tutorial = {
  slug: 'git-stash',

  title: 'git stash',

  description: 'Temporarily shelve uncommitted changes so you can switch context without committing half-finished work.',

  level: 'Advanced',

  readingTime: '10 min',

  lesson: 'Lesson 19 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem It Solves',
      content:
        'You are halfway through a change when you need to urgently switch branches — but Git won\'t let you switch if it would overwrite uncommitted changes, and the work isn\'t ready to commit yet. git stash saves your uncommitted changes aside and gives you a clean working directory.',
    },

    {
      type: 'code',
      title: 'Stashing Changes',
      language: 'bash',
      code: `git stash
# Saved working directory and index state WIP on main: a6f92e1 Add login form

git status
# nothing to commit, working tree clean`,
    },

    {
      type: 'table',
      title: 'Stash Commands',
      headers: ['Command', 'Effect'],
      rows: [
        ['git stash', 'Save uncommitted changes and clean the working directory'],
        ['git stash list', 'List all stashes'],
        ['git stash pop', 'Reapply the most recent stash and remove it from the list'],
        ['git stash apply', 'Reapply the most recent stash but keep it in the list'],
        ['git stash drop', 'Delete a stash without applying it'],
      ],
    },

    {
      type: 'code',
      title: 'Naming a Stash',
      language: 'bash',
      code: `git stash push -m "WIP: login validation"
git stash list
# stash@{0}: On main: WIP: login validation`,
    },

    {
      type: 'note',
      title: 'Stashes are a Local Stack',
      content:
        'Each stash is stacked, most recent first (stash@{0}). They live only in your local repository and are not pushed to remotes — if you clean your repository or lose your machine, unpushed stashes are lost too.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Prefer git stash pop when you know you\'ll use the stash right away, and git stash apply when you might want to apply the same stash to more than one branch.',
    },
  ],

  quiz: [
    {
      question: 'What problem does git stash solve?',
      options: [
        'It deletes old branches',
        'It lets you set aside uncommitted changes to get a clean working directory',
        'It merges two branches',
        'It compresses the repository',
      ],
      answer: 1,
    },
    {
      question: 'What is the difference between git stash pop and git stash apply?',
      options: [
        'pop deletes the stash after applying it, apply keeps it',
        'They are identical',
        'apply only works on the main branch',
        'pop requires a remote connection',
      ],
      answer: 0,
    },
    {
      question: 'Are stashes pushed to a remote when you run git push?',
      options: ['Yes, always', 'No, they stay local only', 'Only named stashes', 'Only the first stash'],
      answer: 1,
    },
  ],

  previous: 'pull-requests-and-forking',
  next: 'undoing-changes',
};
