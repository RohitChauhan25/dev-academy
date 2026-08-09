import { Tutorial } from '@/app/types/tutorial';

export const gitignore: Tutorial = {
  slug: 'gitignore',

  title: '.gitignore',

  description: 'Tell Git which files and folders to never track, like build output, dependencies, and secrets.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 9 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Ignore Files?',
      content:
        'Not everything in a project folder belongs in version control — generated build artifacts, dependency folders like node_modules, editor settings, and files containing secrets (like .env) should never be committed. A .gitignore file, placed at the root of the repository, tells Git to ignore matching files entirely.',
    },

    {
      type: 'code',
      title: 'A Typical .gitignore',
      language: 'bash',
      code: `# Dependencies
node_modules/

# Build output
dist/
build/

# Environment variables
.env
.env.local

# Editor & OS files
.vscode/
.DS_Store`,
    },

    {
      type: 'table',
      title: 'Pattern Syntax',
      headers: ['Pattern', 'Matches'],
      rows: [
        ['*.log', 'Every file ending in .log, anywhere'],
        ['node_modules/', 'A folder named node_modules, anywhere'],
        ['/dist', 'Only a top-level dist folder, not nested ones'],
        ['!important.log', 'An exception — un-ignores a file that would otherwise match'],
      ],
    },

    {
      type: 'warning',
      title: 'gitignore Only Affects Untracked Files',
      content:
        'Adding a pattern to .gitignore does nothing for a file Git is already tracking — you must first remove it from tracking with git rm --cached <file> before the ignore rule takes effect.',
    },

    {
      type: 'code',
      title: 'Stop Tracking an Already-Committed File',
      language: 'bash',
      code: `# Remove from Git tracking, but keep the file on disk
git rm --cached .env
echo ".env" >> .gitignore
git commit -m "Stop tracking .env"`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Add a .gitignore file in your very first commit, before adding any other files. GitHub provides ready-made .gitignore templates for most languages and frameworks at github.com/github/gitignore.',
    },
  ],

  quiz: [
    {
      question: 'What does .gitignore do?',
      options: [
        'Deletes matching files from disk',
        'Tells Git to never track matching files or folders',
        'Encrypts sensitive files',
        'Compresses the repository',
      ],
      answer: 1,
    },
    {
      question: 'Adding a pattern to .gitignore for a file Git is already tracking will...',
      options: [
        'Immediately untrack it',
        'Delete it from history',
        'Have no effect until you also run git rm --cached on it',
        'Cause a merge conflict',
      ],
      answer: 2,
    },
    {
      question: 'Which pattern ignores only a top-level dist folder, not nested ones?',
      options: ['dist/', '*/dist', '/dist', '!dist'],
      answer: 2,
    },
  ],

  previous: 'git-status-and-diff',
  next: 'git-log',
};
