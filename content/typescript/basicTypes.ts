import { Tutorial } from '@/app/types/tutorial';

export const basicTypes: Tutorial = {
  slug: 'basic-types',

  title: 'Basic Types',

  description:
    'Learn TypeScript’s core primitive types: string, number, boolean, null, and undefined.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 3 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Annotating Variables',
      content:
        'A type annotation follows a variable name with a colon and the type, telling TypeScript exactly what values are allowed.',
    },

    {
      type: 'code',
      title: 'Basic Type Annotations',
      language: 'typescript',
      code: `let username: string = "devacademy";
let age: number = 25;
let isActive: boolean = true;

username = 42; // Error: Type 'number' is not assignable to type 'string'`,
    },

    {
      type: 'table',
      title: 'Primitive Types',
      headers: ['Type', 'Example Values'],
      rows: [
        ['string', '"hello", \'world\', `template`'],
        ['number', '1, 3.14, -10 (no separate int/float type)'],
        ['boolean', 'true, false'],
        ['null', 'null'],
        ['undefined', 'undefined'],
        ['bigint', '100n'],
        ['symbol', 'Symbol("id")'],
      ],
    },

    {
      type: 'paragraph',
      title: 'One number Type for All Numbers',
      content:
        'Unlike some languages, TypeScript doesn’t distinguish between integers and floats — every numeric value, whole or decimal, is typed as number.',
    },

    {
      type: 'code',
      title: 'Numbers',
      language: 'typescript',
      code: `let price: number = 19.99;
let quantity: number = 3;
let hex: number = 0xff;`,
    },

    {
      type: 'paragraph',
      title: 'null and undefined',
      content:
        'With strictNullChecks enabled (part of strict mode), null and undefined are their own distinct types and are not automatically assignable to other types unless explicitly included, e.g. string | null.',
    },

    {
      type: 'code',
      title: 'strictNullChecks in Action',
      language: 'typescript',
      code: `let middleName: string | null = null; // must explicitly allow null
let firstName: string = null; // Error, if strictNullChecks is on`,
    },

    {
      type: 'paragraph',
      title: 'Arrays of Primitives',
      content:
        'Arrays are typed by appending [] to the element type, e.g. number[] for an array of numbers.',
    },

    {
      type: 'code',
      title: 'Typed Arrays',
      language: 'typescript',
      code: `let scores: number[] = [10, 20, 30];
let names: string[] = ["Alice", "Bob"];`,
    },

    {
      type: 'note',
      title: 'Type Annotations Are Often Optional',
      content:
        'TypeScript can usually infer the type from the initial value, so let age: number = 25 and let age = 25 behave identically. Explicit annotations matter most for function parameters and empty declarations.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Let TypeScript infer types for simple local variables, but always annotate function parameters explicitly — inference can’t know what a caller might pass in.',
    },
  ],

  quiz: [
    {
      question: 'How many distinct numeric types does TypeScript have for integers and decimals?',
      options: ['One — number covers both', 'Two — int and float', 'Three', 'None, numbers are untyped'],
      answer: 0,
    },
    {
      question: 'How do you type an array of strings?',
      options: ['Array<string>()', 'string[]', 'string{}', 'array(string)'],
      answer: 1,
    },
    {
      question: 'What does strictNullChecks do?',
      options: [
        'Disables null entirely',
        'Prevents null/undefined from being assigned to other types unless explicitly allowed',
        'Only affects arrays',
        'Removes the need for type annotations',
      ],
      answer: 1,
    },
  ],

  previous: 'setup',
  next: 'arrays-and-tuples',
};
