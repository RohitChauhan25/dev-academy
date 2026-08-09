import { Tutorial } from '@/app/types/tutorial';

export const modulesCommonjsVsEsm: Tutorial = {
  slug: 'modules-commonjs-vs-esm',

  title: 'Modules: CommonJS vs ESM',

  description: 'Node.js supports two module systems for organizing code across files — know how each works.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 6 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Two Module Systems',
      content:
        'CommonJS (require/module.exports) is Node.js\'s original module system. ES Modules (import/export) is the standard JavaScript module system, also used in the browser. Node.js supports both, but a file uses one or the other, not a mix.',
    },

    {
      type: 'code',
      title: 'CommonJS',
      language: 'javascript',
      code: `// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };

// app.js
const { add } = require('./math');
console.log(add(2, 3));`,
    },

    {
      type: 'code',
      title: 'ES Modules',
      language: 'javascript',
      code: `// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from './math.js';
console.log(add(2, 3));`,
    },

    {
      type: 'table',
      title: 'Key Differences',
      headers: ['Aspect', 'CommonJS', 'ES Modules'],
      rows: [
        ['Import syntax', 'require()', 'import'],
        ['Export syntax', 'module.exports', 'export'],
        ['Loading', 'Synchronous', 'Can be asynchronous'],
        ['File extension needed on import', 'Optional', 'Required (./math.js, not ./math)'],
      ],
    },

    {
      type: 'code',
      title: 'Telling Node.js Which System to Use',
      language: 'json',
      code: `{
  "type": "module"
}
// In package.json — this makes .js files use ES Modules by default.
// Without it, .js files default to CommonJS.`,
    },

    {
      type: 'note',
      title: 'Mixed File Extensions',
      content:
        'Regardless of the "type" field, a .cjs file is always treated as CommonJS, and a .mjs file is always treated as ES Modules — useful when a project needs both in specific places.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'For new projects, prefer ES Modules ("type": "module") — it is the standard, aligns with browser and frontend tooling conventions, and is where the JavaScript ecosystem is converging.',
    },
  ],

  quiz: [
    {
      question: 'What is the CommonJS equivalent of ES Modules\' export?',
      options: ['export.default', 'module.exports', 'exports.module', 'define()'],
      answer: 1,
    },
    {
      question: 'What does "type": "module" in package.json do?',
      options: [
        'Nothing, it is ignored',
        'Makes .js files use ES Modules syntax by default instead of CommonJS',
        'Disables npm',
        'Forces TypeScript',
      ],
      answer: 1,
    },
    {
      question: 'Is a file extension required when importing a local file with ES Modules?',
      options: ['No, never', 'Yes, it is required (e.g. ./math.js)', 'Only for CommonJS', 'Only in production'],
      answer: 1,
    },
  ],

  previous: 'package-json',
  next: 'file-system',
};
