import { Tutorial } from '@/app/types/tutorial';

export const introduction: Tutorial = {
  slug: 'introduction',

  title: 'TypeScript Introduction',

  description:
    'Understand what TypeScript is, why it exists, and how it improves on plain JavaScript with static types.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 1 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is TypeScript?',
      content:
        'TypeScript is a superset of JavaScript developed by Microsoft that adds static typing. Every valid JavaScript program is also valid TypeScript — TypeScript just lets you optionally describe the shape of your data, and catches type-related bugs before your code ever runs.',
    },

    {
      type: 'paragraph',
      title: 'Why Add Types to JavaScript?',
      content:
        'JavaScript is dynamically typed — a variable can hold any type, and mistakes like calling a method that doesn’t exist on a value only surface at runtime. TypeScript catches these mistakes at compile time, right in your editor, before the code ever runs.',
    },

    {
      type: 'code',
      title: 'JavaScript vs TypeScript',
      language: 'typescript',
      code: `// Plain JavaScript — no error until this line actually runs
function greet(name) {
  return "Hello, " + name.toUppercase(); // typo: should be toUpperCase
}

// TypeScript — the typo is flagged immediately, before running anything
function greetTyped(name: string): string {
  return "Hello, " + name.toUppercase(); // Error: Property 'toUppercase' does not exist
}`,
    },

    {
      type: 'table',
      title: 'Quick Facts',
      headers: ['Feature', 'Value'],
      rows: [
        ['Created By', 'Microsoft'],
        ['First Released', '2012'],
        ['Relationship to JavaScript', 'A typed superset — compiles down to plain JavaScript'],
        ['File Extension', '.ts (or .tsx for files with JSX)'],
        ['Runs In', 'Nowhere directly — it compiles to JavaScript first'],
      ],
    },

    {
      type: 'paragraph',
      title: 'TypeScript Compiles to JavaScript',
      content:
        'Browsers and Node.js don’t understand TypeScript directly. The TypeScript compiler (tsc) reads your .ts files, checks the types, and outputs plain .js files that run anywhere JavaScript already runs.',
    },

    {
      type: 'list',
      title: 'Why Learn TypeScript?',
      items: [
        'Catches bugs at compile time instead of at runtime.',
        'Provides autocomplete and inline documentation in your editor.',
        'Makes refactoring large codebases far safer.',
        'The default choice for most modern frontend frameworks and large Node.js projects.',
        'Types double as living documentation for how your code should be used.',
      ],
    },

    {
      type: 'note',
      title: 'TypeScript Types Are Erased at Runtime',
      content:
        'Type annotations exist only during development and compilation — the compiled JavaScript output has no types left in it at all. TypeScript adds zero runtime overhead.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'You don’t need to type everything explicitly from day one. TypeScript’s type inference handles most cases automatically — start simple, and add explicit types where they add real clarity.',
    },
  ],

  quiz: [
    {
      question: 'What is TypeScript?',
      options: [
        'A completely different language from JavaScript',
        'A typed superset of JavaScript that compiles to plain JavaScript',
        'A JavaScript runtime like Node.js',
        'A CSS framework',
      ],
      answer: 1,
    },
    {
      question: 'Do browsers run TypeScript files directly?',
      options: ['Yes, natively', 'No — TypeScript compiles to JavaScript first', 'Only Chrome does', 'Only with a plugin'],
      answer: 1,
    },
    {
      question: 'What happens to TypeScript’s type annotations at runtime?',
      options: [
        'They are checked again at runtime',
        'They are erased entirely — compiled JavaScript has no types',
        'They are converted to comments',
        'They slow down execution',
      ],
      answer: 1,
    },
  ],

  next: 'setup',
};
