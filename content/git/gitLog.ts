import { Tutorial } from '@/app/types/tutorial';

export const gitLog: Tutorial = {
  slug: 'git-log',

  title: 'Viewing History',

  description: 'Explore commit history with git log and its most useful formatting options.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 10 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'git log',
      content:
        'git log lists commits starting from the current branch\'s latest commit, going backward. By default it shows the full hash, author, date, and message for every commit — useful, but verbose for a quick scan.',
    },

    {
      type: 'code',
      title: 'Basic Log',
      language: 'bash',
      code: `git log

# commit a6f92e1d4b8c3f... (HEAD -> main)
# Author: Ada Lovelace <ada@example.com>
# Date:   Mon Aug 3 10:15:00 2026 +0000
#
#     Add user login form`,
    },

    {
      type: 'table',
      title: 'Useful Log Options',
      headers: ['Command', 'Effect'],
      rows: [
        ['git log --oneline', 'One compact line per commit'],
        ['git log --graph', 'ASCII graph of branches and merges'],
        ['git log -p', 'Show the full diff for each commit'],
        ['git log --author="Ada"', 'Filter commits by author'],
        ['git log -- file.js', 'Show only commits that touched file.js'],
      ],
    },

    {
      type: 'code',
      title: 'A Practical Combination',
      language: 'bash',
      code: `git log --oneline --graph --all

# * a6f92e1 (HEAD -> main) Add user login form
# * 7c3d1f2 Set up project structure
# * 1a2b3c4 Initial commit`,
    },

    {
      type: 'note',
      title: 'HEAD',
      content:
        'HEAD is a pointer to the commit you currently have checked out — usually the tip of your current branch. Most Git commands that accept a commit also accept HEAD, HEAD~1 (one commit back), HEAD~2, and so on.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Create an alias for your favorite log format so you never have to type the full flags again: git config --global alias.lg "log --oneline --graph --all".',
    },
  ],

  quiz: [
    {
      question: 'What does git log --oneline do?',
      options: [
        'Shows only the first commit',
        'Shows one compact line per commit',
        'Deletes old commits',
        'Shows only unstaged changes',
      ],
      answer: 1,
    },
    {
      question: 'What does HEAD refer to?',
      options: [
        'The very first commit ever made',
        'The commit currently checked out',
        'The remote repository',
        'The staging area',
      ],
      answer: 1,
    },
    {
      question: 'What does HEAD~2 refer to?',
      options: ['Two branches ahead', 'Two commits before HEAD', 'The second remote', 'Two staged files'],
      answer: 1,
    },
  ],

  previous: 'gitignore',
  next: 'branches',
};
