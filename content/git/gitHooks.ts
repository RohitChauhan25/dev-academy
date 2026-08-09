import { Tutorial } from '@/app/types/tutorial';

export const gitHooks: Tutorial = {
  slug: 'git-hooks',

  title: 'Git Hooks',

  description: 'Run custom scripts automatically at key points in the Git workflow, like before a commit or push.',

  level: 'Advanced',

  readingTime: '10 min',

  lesson: 'Lesson 27 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'What Hooks Are',
      content:
        'Git hooks are scripts that Git runs automatically at specific points — like right before a commit is created, or right before a push. They live in the .git/hooks folder and can be written in any scripting language, as long as the file is executable.',
    },

    {
      type: 'table',
      title: 'Common Hooks',
      headers: ['Hook', 'Runs'],
      rows: [
        ['pre-commit', 'Right before a commit is created — good for linting and formatting'],
        ['commit-msg', 'After the message is written — good for enforcing a message format'],
        ['pre-push', 'Right before pushing — good for running tests'],
        ['post-merge', 'After a merge completes — good for reinstalling dependencies if package.json changed'],
      ],
    },

    {
      type: 'code',
      title: 'A Simple pre-commit Hook',
      language: 'bash',
      code: `# .git/hooks/pre-commit
#!/bin/sh
npm run lint

# Make it executable
chmod +x .git/hooks/pre-commit`,
    },

    {
      type: 'paragraph',
      title: 'A Hook Can Block the Action',
      content:
        'If a hook script exits with a non-zero status, Git aborts the action — a pre-commit hook that fails linting will prevent the commit from being created at all, forcing the issue to be fixed first.',
    },

    {
      type: 'note',
      title: 'Hooks Are Not Shared by Default',
      content:
        'The .git folder is never committed, so raw hooks in .git/hooks are local-only and don\'t travel with git clone. Teams that want shared hooks typically use a tool like Husky, which installs hooks via a package.json script after npm install.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'For team projects, use a hook manager like Husky rather than raw .git/hooks scripts — it keeps hooks version-controlled and automatically installed for every contributor.',
    },
  ],

  quiz: [
    {
      question: 'Where do raw Git hook scripts live?',
      options: ['package.json', '.git/hooks', '.github/workflows', 'node_modules'],
      answer: 1,
    },
    {
      question: 'What happens if a pre-commit hook script fails (non-zero exit)?',
      options: [
        'Nothing, the commit proceeds anyway',
        'Git aborts the commit',
        'Git deletes the repository',
        'The hook is skipped next time',
      ],
      answer: 1,
    },
    {
      question: 'Why do teams often use a tool like Husky instead of raw hooks?',
      options: [
        'Raw hooks are slower',
        'Raw hooks live in .git, which is not committed, so they are not shared automatically',
        'Husky is required by GitHub',
        'Raw hooks only work on Linux',
      ],
      answer: 1,
    },
  ],

  previous: 'git-tags',
  next: 'best-practices',
};
