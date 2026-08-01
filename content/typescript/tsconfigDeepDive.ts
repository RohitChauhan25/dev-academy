import { Tutorial } from '@/app/types/tutorial';

export const tsconfigDeepDive: Tutorial = {
  slug: 'tsconfig-deep-dive',

  title: 'tsconfig Deep Dive',

  description:
    'Understand the most important tsconfig.json compiler options and what each one actually controls.',

  level: 'Advanced',

  readingTime: '18 min',

  lesson: 'Lesson 29 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Revisiting tsconfig.json',
      content:
        'tsconfig.json configures how the TypeScript compiler behaves. This lesson goes deeper into the options that matter most for real projects.',
    },

    {
      type: 'code',
      title: 'A More Complete tsconfig.json',
      language: 'json',
      code: `{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "lib": ["ES2020", "DOM"],
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "dist",
    "declaration": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}`,
    },

    {
      type: 'table',
      title: 'Key Options Explained',
      headers: ['Option', 'Purpose'],
      rows: [
        ['target', 'Which JavaScript version the output is compiled to'],
        ['module', 'Which module system the output uses (ESNext, CommonJS, etc.)'],
        ['lib', 'Which built-in type definitions are available (DOM, ES2020, etc.)'],
        ['strict', 'Enables all strict type-checking flags at once'],
        ['esModuleInterop', 'Improves interop between CommonJS and ES module imports'],
        ['skipLibCheck', 'Skips type-checking of .d.ts files, speeding up compilation'],
        ['outDir', 'Where compiled JavaScript is written'],
        ['include / exclude', 'Which files the compiler processes'],
      ],
    },

    {
      type: 'paragraph',
      title: 'What strict Actually Enables',
      content:
        'strict is itself a shorthand that turns on several individual flags together, including strictNullChecks, noImplicitAny, and strictFunctionTypes — each catching a different category of mistake.',
    },

    {
      type: 'table',
      title: 'Flags Included in strict',
      headers: ['Flag', 'What It Catches'],
      rows: [
        ['noImplicitAny', 'Values that would silently fall back to the any type'],
        ['strictNullChecks', 'Using a possibly null/undefined value without checking it first'],
        ['strictFunctionTypes', 'Unsound function parameter type checking'],
        ['strictPropertyInitialization', 'Class properties that are never initialized'],
      ],
    },

    {
      type: 'paragraph',
      title: 'noUncheckedIndexedAccess',
      content:
        'This extra safety flag (not included in strict) makes indexing into an object or array with an index signature return T | undefined instead of just T, correctly reflecting that the key might not actually exist.',
    },

    {
      type: 'code',
      title: 'noUncheckedIndexedAccess in Action',
      language: 'typescript',
      code: `const scores: Record<string, number> = { alice: 90 };

const bobScore = scores["bob"];
// Without the flag: typed as 'number' (misleading — it's actually undefined)
// With the flag: typed as 'number | undefined' (accurate)`,
    },

    {
      type: 'paragraph',
      title: 'target vs lib',
      content:
        'target controls what JavaScript syntax the output uses (and is down-leveled for older environments). lib controls which type definitions are available for you to use in your code — they’re independent settings that often get confused.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Start new projects with strict: true and skipLibCheck: true, and add noUncheckedIndexedAccess once your team is comfortable — it catches a very real class of bugs that plain strict mode misses.',
    },
  ],

  quiz: [
    {
      question: 'What does the target option control?',
      options: [
        'Which files are compiled',
        'Which JavaScript version the compiled output targets',
        'The output folder',
        'Whether strict mode is enabled',
      ],
      answer: 1,
    },
    {
      question: 'Is noUncheckedIndexedAccess included in strict mode by default?',
      options: ['Yes, always', 'No — it must be enabled separately', 'Only in newer projects', 'It replaces strict mode'],
      answer: 1,
    },
    {
      question: 'What does skipLibCheck do?',
      options: [
        'Disables all type checking',
        'Skips type-checking .d.ts declaration files, speeding up compilation',
        'Skips checking your own source files',
        'Removes the need for a tsconfig.json',
      ],
      answer: 1,
    },
  ],

  previous: 'decorators',
  next: 'best-practices',
};
