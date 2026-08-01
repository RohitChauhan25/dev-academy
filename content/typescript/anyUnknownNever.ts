import { Tutorial } from '@/app/types/tutorial';

export const anyUnknownNever: Tutorial = {
  slug: 'any-unknown-never',

  title: 'any, unknown, never & void',

  description:
    'Understand TypeScript’s special-purpose types: the type-checking escape hatch any, the safer unknown, the unreachable never, and void.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 6 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'The any Type',
      content:
        'any disables type checking entirely for that value — you can assign anything to it and call anything on it with no compiler errors. It’s effectively an escape hatch back to plain JavaScript.',
    },

    {
      type: 'code',
      title: 'any Disables Type Safety',
      language: 'typescript',
      code: `let data: any = "hello";
data = 42;
data.toUpperCase(); // No error at compile time, but crashes at runtime`,
    },

    {
      type: 'paragraph',
      title: 'The unknown Type',
      content:
        'unknown is the type-safe counterpart to any. It accepts any value too, but you can’t use it for anything until you first narrow it to a more specific type — forcing you to check before you use it.',
    },

    {
      type: 'code',
      title: 'unknown Requires Narrowing First',
      language: 'typescript',
      code: `let data: unknown = "hello";

data.toUpperCase(); // Error: 'data' is of type 'unknown'

if (typeof data === "string") {
  data.toUpperCase(); // OK — narrowed to string inside this block
}`,
    },

    {
      type: 'table',
      title: 'any vs unknown',
      headers: ['', 'any', 'unknown'],
      rows: [
        ['Accepts any value', 'Yes', 'Yes'],
        ['Usable without narrowing', 'Yes (unsafe)', 'No — must narrow first'],
        ['Recommended for', 'Rarely — last resort', 'External/untrusted data, like API responses'],
      ],
    },

    {
      type: 'paragraph',
      title: 'The never Type',
      content:
        'never represents a value that can never occur — used for functions that always throw or never return, and for exhaustiveness checks in switch statements over a union type.',
    },

    {
      type: 'code',
      title: 'never in a Function That Always Throws',
      language: 'typescript',
      code: `function throwError(message: string): never {
  throw new Error(message);
}`,
    },

    {
      type: 'code',
      title: 'never for Exhaustiveness Checking',
      language: 'typescript',
      code: `type Shape = "circle" | "square";

function area(shape: Shape) {
  switch (shape) {
    case "circle":
      return "π × r²";
    case "square":
      return "side × side";
    default:
      const exhaustiveCheck: never = shape; // errors if a case is missing
      return exhaustiveCheck;
  }
}`,
    },

    {
      type: 'paragraph',
      title: 'The void Type',
      content:
        'void describes the return type of a function that doesn’t return a meaningful value — most commonly a function that only performs side effects, like logging.',
    },

    {
      type: 'code',
      title: 'void Return Type',
      language: 'typescript',
      code: `function logMessage(message: string): void {
  console.log(message);
}`,
    },

    {
      type: 'warning',
      title: 'Avoid any Where Possible',
      content:
        'Every any in a codebase is a place TypeScript can no longer catch bugs for you. Prefer unknown for genuinely unknown data, and only reach for any as a deliberate, temporary escape hatch.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Type external data (API responses, JSON.parse() results) as unknown, then validate and narrow it before use — this keeps the type system honest about what you’ve actually verified.',
    },
  ],

  quiz: [
    {
      question: 'What is the key difference between any and unknown?',
      options: [
        'There is no difference',
        'unknown requires narrowing before use, any allows anything with no checks',
        'any is safer than unknown',
        'unknown cannot hold objects',
      ],
      answer: 1,
    },
    {
      question: 'What does the never type represent?',
      options: [
        'A value that is always undefined',
        'A value that can never occur, e.g. a function that always throws',
        'A boolean that is always false',
        'An empty array',
      ],
      answer: 1,
    },
    {
      question: 'What return type would a function that only logs a message and returns nothing have?',
      options: ['never', 'any', 'void', 'undefined only'],
      answer: 2,
    },
  ],

  previous: 'enums',
  next: 'type-inference',
};
