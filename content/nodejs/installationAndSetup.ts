import { Tutorial } from '@/app/types/tutorial';

export const installationAndSetup: Tutorial = {
  slug: 'installation-and-setup',

  title: 'Installation & Setup',

  description: 'Install Node.js, understand LTS versions, and run your first script.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 2 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Installing Node.js',
      content:
        'Node.js can be installed directly from nodejs.org, via a system package manager, or — the most flexible option — through a version manager that lets you switch between Node versions per project.',
    },

    {
      type: 'code',
      title: 'Using a Version Manager (nvm)',
      language: 'bash',
      code: `# Install nvm, then:
nvm install --lts
nvm use --lts

node --version
npm --version`,
    },

    {
      type: 'table',
      title: 'LTS vs Current',
      headers: ['Release Line', 'Best For'],
      rows: [
        ['LTS (Long-Term Support)', 'Production applications — stable, supported for years'],
        ['Current', 'Trying out the newest features, not recommended for production'],
      ],
    },

    {
      type: 'code',
      title: 'Running Scripts',
      language: 'bash',
      code: `node script.js

# Start an interactive REPL
node`,
    },

    {
      type: 'note',
      title: 'npm Ships With Node.js',
      content:
        'Installing Node.js automatically installs npm (Node Package Manager) alongside it — you don\'t need to install it separately, and its version is tied to the Node.js version you installed.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use a version manager like nvm from the start, even on your very first project — different projects (and teammates) often require different Node versions, and switching should be a one-line command.',
    },
  ],

  quiz: [
    {
      question: 'What does nvm let you do?',
      options: ['Manage npm packages', 'Switch between installed Node.js versions', 'Deploy applications', 'Write TypeScript'],
      answer: 1,
    },
    {
      question: 'Which release line is recommended for production applications?',
      options: ['Current', 'LTS (Long-Term Support)', 'Nightly', 'Beta'],
      answer: 1,
    },
    {
      question: 'Does installing Node.js also install npm?',
      options: ['No, npm must be installed separately', 'Yes, npm ships alongside Node.js', 'Only on Windows', 'Only with nvm'],
      answer: 1,
    },
  ],

  previous: 'introduction',
  next: 'nodejs-architecture',
};
