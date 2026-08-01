import { Tutorial } from '@/app/types/tutorial';

export const declarationFiles: Tutorial = {
  slug: 'declaration-files',

  title: 'Declaration Files',

  description:
    'Learn how .d.ts files describe the types of plain JavaScript code, and how TypeScript finds them for third-party packages.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 27 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Declaration File?',
      content:
        'A declaration file (ending in .d.ts) contains only type information — no actual implementation code. It describes the shape of existing JavaScript so TypeScript can type-check code that uses it.',
    },

    {
      type: 'code',
      title: 'A Simple Declaration File',
      language: 'typescript',
      code: `// math-utils.d.ts
export function square(n: number): number;
export function cube(n: number): number;`,
    },

    {
      type: 'paragraph',
      title: 'Why Declaration Files Exist',
      content:
        'Countless JavaScript libraries were written before TypeScript existed, and many still ship as plain JavaScript. Declaration files let TypeScript understand and type-check calls into that untyped code, without the library itself needing to be rewritten.',
    },

    {
      type: 'paragraph',
      title: 'The DefinitelyTyped Project',
      content:
        'For popular packages that don’t ship their own types, the community maintains type definitions in the @types npm scope, sourced from the DefinitelyTyped repository.',
    },

    {
      type: 'code',
      title: 'Installing Community Types',
      language: 'bash',
      code: `npm install lodash
npm install --save-dev @types/lodash`,
    },

    {
      type: 'paragraph',
      title: 'Generating Declaration Files from Your Own Code',
      content:
        'The declaration compiler option automatically generates .d.ts files alongside your compiled JavaScript, so consumers of your own published package get full type support.',
    },

    {
      type: 'code',
      title: 'Emitting Declarations',
      language: 'json',
      code: `{
  "compilerOptions": {
    "declaration": true,
    "outDir": "dist"
  }
}`,
    },

    {
      type: 'paragraph',
      title: 'Ambient Declarations for Global Values',
      content:
        'A declare statement describes a value that exists at runtime but wasn’t defined through a normal TypeScript declaration — commonly used for global variables injected by a script tag or build tool.',
    },

    {
      type: 'code',
      title: 'Declaring a Global Value',
      language: 'typescript',
      code: `// globals.d.ts
declare const APP_VERSION: string;

// usage anywhere in the project, no import needed
console.log(APP_VERSION);`,
    },

    {
      type: 'note',
      title: 'How TypeScript Finds Types for a Package',
      content:
        'TypeScript checks, in order: the package’s own bundled .d.ts files (referenced via its "types" field in package.json), then a matching @types/package-name package, before finally falling back to implicit any if strict mode allows it.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Before writing a custom declaration file for a third-party package, check whether @types/package-name already exists — most popular packages are already covered.',
    },
  ],

  quiz: [
    {
      question: 'What does a .d.ts file contain?',
      options: [
        'Only implementation code, no types',
        'Only type information, no runtime implementation',
        'CSS styles',
        'Test cases',
      ],
      answer: 1,
    },
    {
      question: 'What is DefinitelyTyped?',
      options: [
        'A TypeScript compiler flag',
        'A community repository of type definitions for JavaScript packages, published under @types',
        'A linting tool',
        'A build tool',
      ],
      answer: 1,
    },
    {
      question: 'What does declare const APP_VERSION: string do?',
      options: [
        'Creates the variable at runtime',
        'Tells TypeScript a value named APP_VERSION exists at runtime, without TypeScript needing to define it',
        'Imports a module',
        'Declares a new class',
      ],
      answer: 1,
    },
  ],

  previous: 'modules',
  next: 'decorators',
};
