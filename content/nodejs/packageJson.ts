import { Tutorial } from '@/app/types/tutorial';

export const packageJson: Tutorial = {
  slug: 'package-json',

  title: 'package.json',

  description: 'The manifest file at the heart of every Node.js project.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 5 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'What package.json Describes',
      content:
        'package.json is a JSON manifest describing a project — its name, version, dependencies, and the scripts you can run against it. Every Node.js project (whether a library or an app) has one.',
    },

    {
      type: 'code',
      title: 'A Typical package.json',
      language: 'json',
      code: `{
  "name": "my-api",
  "version": "1.0.0",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "node --watch src/server.js",
    "test": "vitest run"
  },
  "dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "vitest": "^2.0.0"
  }
}`,
    },

    {
      type: 'table',
      title: 'Key Fields',
      headers: ['Field', 'Purpose'],
      rows: [
        ['name / version', 'Identifies the package, especially if published'],
        ['main', 'The entry file when this package is imported'],
        ['scripts', 'Named commands runnable with npm run <name>'],
        ['dependencies / devDependencies', 'Packages the project needs'],
        ['engines', 'The Node.js version(s) the project supports'],
      ],
    },

    {
      type: 'code',
      title: 'Running a Script',
      language: 'bash',
      code: `npm run dev
# "start" and "test" have shorthand: npm start, npm test`,
    },

    {
      type: 'note',
      title: 'Semver in Dependency Versions',
      content:
        '"^4.19.2" means "4.19.2 or any later compatible version within the same major version (4.x.x)". A caret (^) allows minor and patch updates; a tilde (~) allows only patch updates; an exact version pins it precisely.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Give every script a clear, conventional name (dev, build, start, test, lint) — it makes a project instantly navigable to anyone familiar with the Node.js ecosystem, without reading any documentation.',
    },
  ],

  quiz: [
    {
      question: 'What does the scripts field in package.json define?',
      options: ['Dependency versions', 'Named commands runnable with npm run', 'The project\'s license', 'Environment variables'],
      answer: 1,
    },
    {
      question: 'What does the caret (^) mean in a version like "^4.19.2"?',
      options: [
        'Exactly this version, nothing else',
        'This version or any later compatible version within the same major version',
        'Any version at all',
        'Only patch-level updates',
      ],
      answer: 1,
    },
    {
      question: 'What shorthand exists for npm run start?',
      options: ['npm start', 'npm run', 'npm go', 'There is no shorthand'],
      answer: 0,
    },
  ],

  previous: 'npm-basics',
  next: 'modules-commonjs-vs-esm',
};
