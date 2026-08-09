import { Tutorial } from '@/app/types/tutorial';

export const gitConfig: Tutorial = {
  slug: 'git-config',

  title: 'Git Configuration',

  description: 'Set your identity and customize Git behavior with git config.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 3 of 28',

  sections: [
    {
      type: 'paragraph',
      title: 'Setting Your Identity',
      content:
        'Every commit records who made it. Before your first commit, tell Git your name and email — these values are stored permanently in the commit history, so use the same email you use on GitHub if you want commits linked to your profile.',
    },

    {
      type: 'code',
      title: 'Set Global Identity',
      language: 'bash',
      code: `git config --global user.name "Ada Lovelace"
git config --global user.email "ada@example.com"

# Confirm it worked
git config --get user.name`,
    },

    {
      type: 'table',
      title: 'Configuration Levels',
      headers: ['Level', 'Flag', 'Scope'],
      rows: [
        ['System', '--system', 'Every user on the machine'],
        ['Global', '--global', 'Every repository for the current user'],
        ['Local', '(no flag, or --local)', 'Just the current repository'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Local Overrides Global',
      content:
        'Local config takes priority over global, which takes priority over system. This is useful when you want a different email for work versus personal projects — run git config user.email "work@company.com" without --global inside just that one repository.',
    },

    {
      type: 'code',
      title: 'Useful Config Options',
      language: 'bash',
      code: `# Set the default branch name for new repos
git config --global init.defaultBranch main

# Set your default editor for commit messages
git config --global core.editor "code --wait"

# List every config value currently in effect
git config --list`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Run git config --list at least once after setup to confirm your name, email, and default branch are all correct — a wrong email quietly attaches to every commit until you notice.',
    },
  ],

  quiz: [
    {
      question: 'Which flag applies a config setting to every repository for the current user?',
      options: ['--system', '--global', '--local', '--all'],
      answer: 1,
    },
    {
      question: 'Which config level takes priority when local and global values conflict?',
      options: ['System', 'Global', 'Local', 'They average together'],
      answer: 2,
    },
    {
      question: 'Which command lists every active Git configuration value?',
      options: ['git config --list', 'git list config', 'git status --config', 'git config --show'],
      answer: 0,
    },
  ],

  previous: 'installation-and-setup',
  next: 'creating-a-repository',
};
