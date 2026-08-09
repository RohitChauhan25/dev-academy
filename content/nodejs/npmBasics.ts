import { Tutorial } from '@/app/types/tutorial';

export const npmBasics: Tutorial = {
  slug: 'npm-basics',

  title: 'npm Basics',

  description: 'Install, manage, and run packages using npm, Node.js\'s default package manager.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 4 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'What npm Does',
      content:
        'npm (Node Package Manager) installs third-party packages from the npm registry, manages their versions, and runs project scripts — it is the backbone of the Node.js ecosystem.',
    },

    {
      type: 'code',
      title: 'Common npm Commands',
      language: 'bash',
      code: `npm init -y                # create a package.json
npm install express        # install a dependency
npm install -D typescript  # install a dev-only dependency
npm uninstall express      # remove a dependency
npm run <script>           # run a script defined in package.json`,
    },

    {
      type: 'table',
      title: 'Dependency Types',
      headers: ['Type', 'Flag', 'Example'],
      rows: [
        ['dependencies', '(default)', 'express, react — needed to run the app'],
        ['devDependencies', '-D or --save-dev', 'typescript, eslint — only needed during development'],
        ['peerDependencies', 'n/a — declared in package.json', 'A version a plugin expects the host app to already provide'],
      ],
    },

    {
      type: 'code',
      title: 'Installing Everything from package.json',
      language: 'bash',
      code: `npm install
# Reads package.json and installs every listed dependency into node_modules`,
    },

    {
      type: 'note',
      title: 'package-lock.json',
      content:
        'npm generates a package-lock.json file recording the exact resolved version of every package (including nested dependencies). Committing this file ensures everyone on a team — and your CI pipeline — installs the exact same versions.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always commit package-lock.json to version control. It is what makes "works on my machine" dependency issues far less common.',
    },
  ],

  quiz: [
    {
      question: 'What does npm install -D typescript do differently from npm install typescript?',
      options: [
        'Nothing, they are identical',
        'It adds typescript as a devDependency instead of a regular dependency',
        'It installs an older version',
        'It installs typescript globally',
      ],
      answer: 1,
    },
    {
      question: 'What is the purpose of package-lock.json?',
      options: [
        'It lists only devDependencies',
        'It records the exact resolved versions of every dependency for consistent installs',
        'It stores environment variables',
        'It is optional and safe to delete anytime',
      ],
      answer: 1,
    },
    {
      question: 'What does npm install (with no package name) do?',
      options: [
        'Installs npm itself',
        'Installs every dependency listed in package.json',
        'Updates Node.js',
        'Removes node_modules',
      ],
      answer: 1,
    },
  ],

  previous: 'nodejs-architecture',
  next: 'package-json',
};
