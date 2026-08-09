import { Tutorial } from '@/app/types/tutorial';

export const gitCommit: Tutorial = {
  slug: 'git-commit',

  title: 'Committing Changes',

  description: 'Record staged changes permanently with git commit, and write commit messages that are actually useful later.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 7 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'What a Commit Is',
      content:
        'A commit is a permanent snapshot of your staged changes, along with a message, an author, a timestamp, and a link to the previous commit. Chained together, commits form the project\'s entire history — this chain is what lets you view, compare, or return to any point in time.',
    },

    {
      type: 'code',
      title: 'Making a Commit',
      language: 'bash',
      code: `git add .
git commit -m "Add user login form"`,
    },

    {
      type: 'paragraph',
      title: 'Writing Good Commit Messages',
      content:
        'A good commit message explains why a change was made, not just what changed (the diff already shows what changed). The first line should be a short, imperative summary under about 50 characters, e.g. "Fix null pointer on empty cart" rather than "fixed bug" or "changes".',
    },

    {
      type: 'code',
      title: 'Multi-line Commit Message',
      language: 'bash',
      code: `git commit -m "Fix cart total rounding" -m "Totals were truncated instead of rounded,
causing a 1 cent discrepancy on some orders."`,
    },

    {
      type: 'table',
      title: 'Useful Commit Flags',
      headers: ['Flag', 'Effect'],
      rows: [
        ['-m "message"', 'Provide the commit message inline'],
        ['-a', 'Automatically stage all tracked, modified files before committing'],
        ['--amend', 'Modify the most recent commit instead of creating a new one'],
      ],
    },

    {
      type: 'note',
      title: 'Every Commit Has a Unique ID',
      content:
        'Each commit is identified by a SHA-1 hash (like a6f92e1...), calculated from its contents, author, timestamp, and parent commit. This is why even an identical-looking commit made twice gets a different ID — the timestamp and parent differ.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Commit small, logically complete changes often rather than one giant commit at the end of the day. Small commits are easier to review, revert, and understand months later.',
    },
  ],

  quiz: [
    {
      question: 'What does a Git commit record?',
      options: [
        'Only the file names that changed',
        'A permanent snapshot of staged changes plus metadata like author and message',
        'A live link to the working directory',
        'A backup of the entire operating system',
      ],
      answer: 1,
    },
    {
      question: 'What identifies each commit uniquely?',
      options: ['A sequential number', 'The file name', 'A SHA-1 hash', 'The branch name'],
      answer: 2,
    },
    {
      question: 'What is generally considered a good first line for a commit message?',
      options: [
        'A long paragraph describing every line changed',
        'A short, imperative summary of the change',
        'The developer\'s name and date',
        'The word "update"',
      ],
      answer: 1,
    },
  ],

  previous: 'git-add',
  next: 'git-status-and-diff',
};
