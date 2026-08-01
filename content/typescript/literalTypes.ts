import { Tutorial } from '@/app/types/tutorial';

export const literalTypes: Tutorial = {
  slug: 'literal-types',

  title: 'Literal Types',

  description:
    'Learn how to restrict a value to one or more specific literal values instead of a broad type.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 12 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Literal Type?',
      content:
        'A literal type narrows a value down to one exact value rather than an entire category of values — "success" as a type means only the string "success" is allowed, not any string.',
    },

    {
      type: 'code',
      title: 'A String Literal Type',
      language: 'typescript',
      code: `let direction: "up" | "down" | "left" | "right";

direction = "up";      // OK
direction = "sideways"; // Error: not assignable`,
    },

    {
      type: 'paragraph',
      title: 'Literal Types Also Work with Numbers and Booleans',
      content:
        'Literal types aren’t limited to strings — number and boolean values can be narrowed to specific literals too.',
    },

    {
      type: 'code',
      title: 'Numeric and Boolean Literals',
      language: 'typescript',
      code: `type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
type Toggle = true; // only the literal value true is allowed

let roll: DiceRoll = 4;
let alwaysOn: Toggle = true;`,
    },

    {
      type: 'paragraph',
      title: 'Literal Types as Function Parameters',
      content:
        'A common use for literal unions is restricting a function parameter to a small, valid set of string options — similar in spirit to an enum, but with no extra runtime code.',
    },

    {
      type: 'code',
      title: 'Restricting a Parameter',
      language: 'typescript',
      code: `function setAlignment(value: "left" | "center" | "right") {
  // ...
}

setAlignment("center"); // OK
setAlignment("middle");  // Error: not one of the allowed literals`,
    },

    {
      type: 'paragraph',
      title: 'const Narrows Automatically, let Does Not',
      content:
        'A variable declared with const and a literal value is automatically inferred as that literal type, since it can never change. A let variable is inferred more broadly (as string, number, etc.) since it might be reassigned later.',
    },

    {
      type: 'code',
      title: 'const vs let Inference',
      language: 'typescript',
      code: `const status = "active";  // inferred as the literal type "active"
let mutableStatus = "active"; // inferred more broadly as string`,
    },

    {
      type: 'paragraph',
      title: 'as const',
      content:
        'The as const assertion locks an entire object or array to its most specific literal types, and makes it deeply readonly — extremely useful for defining constant configuration values.',
    },

    {
      type: 'code',
      title: 'as const',
      language: 'typescript',
      code: `const config = {
  theme: "dark",
  version: 2,
} as const;

// config.theme is typed as "dark", not string
// config is also readonly — reassigning a property is an error`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use literal unions for small, closed sets of valid string/number values passed as parameters, and as const for defining fixed configuration objects whose exact shape and values should never change.',
    },
  ],

  quiz: [
    {
      question: 'What does the literal type "success" allow as a value?',
      options: ['Any string', 'Only the exact string "success"', 'Any string containing "success"', 'Numbers only'],
      answer: 1,
    },
    {
      question: 'How is a const string variable typically inferred, compared to a let variable?',
      options: [
        'The same way, as the general string type',
        'const infers the specific literal type, let infers the broader string type',
        'const is always any',
        'let cannot hold strings',
      ],
      answer: 1,
    },
    {
      question: 'What does the as const assertion do to an object?',
      options: [
        'Deletes its properties',
        'Locks it to its most specific literal types and makes it deeply readonly',
        'Converts it to JSON',
        'Makes every property optional',
      ],
      answer: 1,
    },
  ],

  previous: 'union-and-intersection-types',
  next: 'objects',
};
