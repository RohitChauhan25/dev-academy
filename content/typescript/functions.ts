import { Tutorial } from '@/app/types/tutorial';

export const functions: Tutorial = {
  slug: 'functions',

  title: 'Function Types',

  description:
    'Learn how to type function parameters, return values, optional/default parameters, and function overloads.',

  level: 'Beginner',

  readingTime: '16 min',

  lesson: 'Lesson 10 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Typing Parameters and Return Values',
      content:
        'Function parameters are typed with a colon after each name, and the return type is typed after the closing parenthesis.',
    },

    {
      type: 'code',
      title: 'A Typed Function',
      language: 'typescript',
      code: `function add(a: number, b: number): number {
  return a + b;
}

add(2, "3"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'`,
    },

    {
      type: 'paragraph',
      title: 'Optional and Default Parameters',
      content:
        'A parameter marked with ? is optional and may be omitted by the caller. A parameter with a default value is automatically optional too, using that value when omitted.',
    },

    {
      type: 'code',
      title: 'Optional and Default Parameters',
      language: 'typescript',
      code: `function greet(name: string, greeting?: string): string {
  return \`\${greeting ?? "Hello"}, \${name}!\`;
}

function multiply(a: number, b: number = 2): number {
  return a * b;
}

greet("Alice");            // "Hello, Alice!"
multiply(5);                // 10, using the default b = 2`,
    },

    {
      type: 'paragraph',
      title: 'Rest Parameters',
      content:
        'A rest parameter collects any number of remaining arguments into a typed array.',
    },

    {
      type: 'code',
      title: 'Rest Parameters',
      language: 'typescript',
      code: `function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3, 4); // 10`,
    },

    {
      type: 'paragraph',
      title: 'Arrow Function Types',
      content:
        'Arrow functions are typed the same way as regular functions, and their type can also be described as a standalone function type.',
    },

    {
      type: 'code',
      title: 'Typed Arrow Function',
      language: 'typescript',
      code: `const square = (n: number): number => n * n;

type Comparator = (a: number, b: number) => number;

const ascending: Comparator = (a, b) => a - b;`,
    },

    {
      type: 'paragraph',
      title: 'Function Overloads',
      content:
        'Overloads let a function accept different combinations of parameter types, each with its own precise return type, by declaring multiple call signatures above a single implementation.',
    },

    {
      type: 'code',
      title: 'Function Overloads',
      language: 'typescript',
      code: `function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
function makeDate(yearOrTimestamp: number, month?: number, day?: number): Date {
  if (month !== undefined && day !== undefined) {
    return new Date(yearOrTimestamp, month, day);
  }
  return new Date(yearOrTimestamp);
}

makeDate(2026, 0, 15); // matches the second overload
makeDate(1700000000);  // matches the first overload`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always type function parameters explicitly, since TypeScript can’t infer them from a caller. Return types can usually be left to inference unless the function is part of a public API, where an explicit return type documents intent clearly.',
    },
  ],

  quiz: [
    {
      question: 'What happens if a parameter has a default value?',
      options: [
        'It becomes required',
        'It becomes optional automatically, using the default when omitted',
        'It must still be passed explicitly',
        'Default values are not supported'
      ],
      answer: 1,
    },
    {
      question: 'What does a rest parameter (...args: number[]) collect?',
      options: [
        'Only the first extra argument',
        'Any number of remaining arguments into a typed array',
        'Nothing, it’s just documentation',
        'Only string arguments'
      ],
      answer: 1,
    },
    {
      question: 'What are function overloads used for?',
      options: [
        'Making a function run faster',
        'Allowing a function to accept different parameter combinations, each with a precise return type',
        'Hiding a function’s implementation',
        'Only usable with arrow functions'
      ],
      answer: 1,
    },
  ],

  previous: 'interfaces',
  next: 'union-and-intersection-types',
};
