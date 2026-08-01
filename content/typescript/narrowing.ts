import { Tutorial } from '@/app/types/tutorial';

export const narrowing: Tutorial = {
  slug: 'narrowing',

  title: 'Type Narrowing',

  description:
    'Learn how TypeScript narrows a broad or union type down to a more specific one within conditional checks.',

  level: 'Intermediate',

  readingTime: '18 min',

  lesson: 'Lesson 21 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is Narrowing?',
      content:
        'Narrowing is how TypeScript deduces a more specific type for a value within a certain block of code, based on a runtime check you’ve already written — like an if statement.',
    },

    {
      type: 'code',
      title: 'typeof Narrowing',
      language: 'typescript',
      code: `function format(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase(); // narrowed to string
  }
  return value.toFixed(2); // narrowed to number
}`,
    },

    {
      type: 'paragraph',
      title: 'Truthiness Narrowing',
      content:
        'A simple truthy check can narrow out null, undefined, "", 0, and NaN, which is especially useful for optional values.',
    },

    {
      type: 'code',
      title: 'Truthiness Narrowing',
      language: 'typescript',
      code: `function printLength(value?: string) {
  if (value) {
    console.log(value.length); // narrowed: value is 'string', not 'string | undefined'
  }
}`,
    },

    {
      type: 'paragraph',
      title: 'instanceof Narrowing',
      content:
        'instanceof narrows a value based on which class it was constructed from — commonly used with union types made of different class instances.',
    },

    {
      type: 'code',
      title: 'instanceof Narrowing',
      language: 'typescript',
      code: `class ApiError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}

function handle(error: Error | ApiError) {
  if (error instanceof ApiError) {
    console.log(error.statusCode); // narrowed to ApiError
  }
}`,
    },

    {
      type: 'paragraph',
      title: 'in Narrowing',
      content:
        'The in operator narrows based on whether an object has a particular property, useful for unions of plain object shapes that don’t share a class hierarchy.',
    },

    {
      type: 'code',
      title: 'in Narrowing',
      language: 'typescript',
      code: `interface Cat { meow(): void; }
interface Dog { bark(): void; }

function makeSound(animal: Cat | Dog) {
  if ("meow" in animal) {
    animal.meow(); // narrowed to Cat
  } else {
    animal.bark(); // narrowed to Dog
  }
}`,
    },

    {
      type: 'paragraph',
      title: 'Discriminated Unions',
      content:
        'When every member of a union shares a common literal property (a "tag"), checking that property narrows the entire object automatically — this is the most robust and scalable narrowing pattern.',
    },

    {
      type: 'code',
      title: 'Discriminated Union Narrowing',
      language: 'typescript',
      code: `type Result =
  | { status: "success"; data: string }
  | { status: "error"; message: string };

function handleResult(result: Result) {
  if (result.status === "success") {
    console.log(result.data); // narrowed: 'data' exists on this branch
  } else {
    console.log(result.message); // narrowed: 'message' exists on this branch
  }
}`,
    },

    {
      type: 'note',
      title: 'Custom Type Guards Extend Narrowing',
      content:
        'When built-in checks aren’t enough, you can write your own type predicate function (covered in a later lesson) to teach TypeScript how to narrow a type based on your own custom logic.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Prefer discriminated unions over loosely related optional properties whenever a value can take a few distinct shapes — the narrowing is exhaustive, safe, and reads clearly at every call site.',
    },
  ],

  quiz: [
    {
      question: 'What does narrowing mean in TypeScript?',
      options: [
        'Reducing a file’s size',
        'Deducing a more specific type for a value within a conditional block, based on a runtime check',
        'Converting a type to any',
        'Removing unused imports',
      ],
      answer: 1,
    },
    {
      question: 'Which operator narrows a union based on whether an object has a specific property?',
      options: ['typeof', 'instanceof', 'in', 'as'],
      answer: 2,
    },
    {
      question: 'What makes a discriminated union safe and exhaustive to narrow?',
      options: [
        'Using any for all members',
        'A shared literal "tag" property that TypeScript can check to identify the exact shape',
        'Avoiding interfaces entirely',
        'Using classes instead of objects',
      ],
      answer: 1,
    },
  ],

  previous: 'generic-constraints',
  next: 'utility-types',
};
