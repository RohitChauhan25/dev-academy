import { Tutorial } from '@/app/types/tutorial';

export const setup: Tutorial = {
  slug: 'setup',

  title: 'TypeScript Setup',

  description:
    'Install the TypeScript compiler, create your first .ts file, and configure a project with tsconfig.json.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 2 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Installing TypeScript',
      content:
        'TypeScript is installed via npm, either globally or as a project dependency. Installing it locally per-project is recommended so everyone on a team compiles with the same version.',
    },

    {
      type: 'code',
      title: 'Installing TypeScript',
      language: 'bash',
      code: `npm install typescript --save-dev

# Check the installed version
npx tsc --version`,
    },

    {
      type: 'paragraph',
      title: 'Compiling a File',
      content:
        'The tsc command compiles a .ts file into a .js file. Any type errors are reported in the terminal, and by default a .js file is still emitted even if errors are found (unless configured otherwise).',
    },

    {
      type: 'code',
      title: 'Compiling Manually',
      language: 'typescript',
      code: `// greet.ts
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("DevAcademy"));`,
    },

    {
      type: 'code',
      title: 'Running the Compiler',
      language: 'bash',
      code: `npx tsc greet.ts
# produces greet.js, which you run normally:
node greet.js`,
    },

    {
      type: 'paragraph',
      title: 'tsconfig.json',
      content:
        'Real projects use a tsconfig.json file to configure how the compiler behaves — which files to include, which JavaScript version to target, and which strictness rules to enforce.',
    },

    {
      type: 'code',
      title: 'Generating a tsconfig.json',
      language: 'bash',
      code: `npx tsc --init`,
    },

    {
      type: 'code',
      title: 'A Minimal tsconfig.json',
      language: 'json',
      code: `{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "outDir": "dist",
    "esModuleInterop": true
  },
  "include": ["src"]
}`,
    },

    {
      type: 'table',
      title: 'Common Compiler Options',
      headers: ['Option', 'Purpose'],
      rows: [
        ['target', 'Which JavaScript version to compile down to'],
        ['strict', 'Enables all strict type-checking options at once'],
        ['outDir', 'Where compiled .js files are written'],
        ['include', 'Which files/folders the compiler should process'],
      ],
    },

    {
      type: 'note',
      title: 'Editor Support Without Compiling',
      content:
        'Editors like VS Code use the TypeScript language service to show type errors and autocomplete live as you type, even before you run tsc — the compile step is mainly for producing the final JavaScript output.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Enable "strict": true from the very start of a new project. Retrofitting strict mode onto a large, loosely-typed codebase later is far more painful than starting strict.',
    },
  ],

  quiz: [
    {
      question: 'Which command compiles a TypeScript file into JavaScript?',
      options: ['npm run ts', 'tsc', 'node --typescript', 'ts-run'],
      answer: 1,
    },
    {
      question: 'What does tsconfig.json do?',
      options: [
        'Stores npm dependencies',
        'Configures how the TypeScript compiler behaves for the project',
        'Replaces package.json',
        'Runs tests',
      ],
      answer: 1,
    },
    {
      question: 'What does the strict compiler option do?',
      options: [
        'Disables all type checking',
        'Enables all strict type-checking options at once',
        'Only checks function return types',
        'Speeds up compilation',
      ],
      answer: 1,
    },
  ],

  previous: 'introduction',
  next: 'basic-types',
};
