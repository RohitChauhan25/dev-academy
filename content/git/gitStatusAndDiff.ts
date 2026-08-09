import { Tutorial } from '@/app/types/tutorial';

export const gitStatusAndDiff: Tutorial = {
  slug: 'git-status-and-diff',

  title: 'git status & git diff',

  description: 'Inspect what has changed in your project before you stage or commit it.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 8 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'git status',
      content:
        'git status is the command you will run more than any other. It shows which branch you are on, which files are staged, which are modified but unstaged, and which are untracked entirely.',
    },

    {
      type: 'code',
      title: 'Reading git status',
      language: 'bash',
      code: `git status

# On branch main
# Changes to be committed:
#   modified:   app.js
#
# Changes not staged for commit:
#   modified:   style.css
#
# Untracked files:
#   notes.txt`,
    },

    {
      type: 'table',
      title: 'The Three File States git status Shows',
      headers: ['Section', 'Meaning'],
      rows: [
        ['Changes to be committed', 'Staged — will be included in the next commit'],
        ['Changes not staged for commit', 'Modified, but not yet staged'],
        ['Untracked files', 'Git has never seen this file before'],
      ],
    },

    {
      type: 'paragraph',
      title: 'git diff',
      content:
        'While git status tells you which files changed, git diff shows you exactly what changed inside them, line by line, using +/- markers for additions and removals.',
    },

    {
      type: 'code',
      title: 'Comparing Changes',
      language: 'bash',
      code: `# Diff of unstaged changes (working directory vs staging area)
git diff

# Diff of staged changes (staging area vs last commit)
git diff --staged

# Diff between two specific commits
git diff a1b2c3d e4f5g6h`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Run git diff --staged right before every commit as a final review — it is the fastest way to catch a stray console.log or debug line before it ends up in history.',
    },
  ],

  quiz: [
    {
      question: 'What does git status show?',
      options: [
        'The exact line-by-line changes in each file',
        'Which files are staged, modified, or untracked',
        'The remote repository URL',
        'A list of past commits',
      ],
      answer: 1,
    },
    {
      question: 'Which command shows line-by-line changes for already-staged files?',
      options: ['git status --staged', 'git diff --staged', 'git log --staged', 'git show --staged'],
      answer: 1,
    },
    {
      question: 'What does an "untracked" file mean in git status?',
      options: [
        'The file was deleted',
        'Git has never seen this file before',
        'The file has conflicts',
        'The file is staged but not committed',
      ],
      answer: 1,
    },
  ],

  previous: 'git-commit',
  next: 'gitignore',
};
