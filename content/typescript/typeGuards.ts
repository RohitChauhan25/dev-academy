import { Tutorial } from '@/app/types/tutorial';

export const typeGuards: Tutorial = {
  slug: 'type-guards',

  title: 'Custom Type Guards',

  description:
    'Learn how to write your own type predicate functions to teach TypeScript custom narrowing logic.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 25 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'When Built-In Narrowing Isn’t Enough',
      content:
        'typeof, instanceof, and in cover a lot of narrowing scenarios, but sometimes checking a type requires custom logic — validating shape of unknown JSON data, for example. Custom type guards let you write that logic once and reuse it everywhere.',
    },

    {
      type: 'paragraph',
      title: 'The is Type Predicate',
      content:
        'A function whose return type is written as parameterName is Type tells TypeScript: "if this function returns true, treat the parameter as this specific type from now on."',
    },

    {
      type: 'code',
      title: 'A Basic Type Guard',
      language: 'typescript',
      code: `interface Cat {
  meow(): void;
}

interface Dog {
  bark(): void;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).meow !== undefined;
}

function makeSound(animal: Cat | Dog) {
  if (isCat(animal)) {
    animal.meow(); // narrowed to Cat
  } else {
    animal.bark(); // narrowed to Dog
  }
}`,
    },

    {
      type: 'paragraph',
      title: 'Validating Unknown Data',
      content:
        'Type guards are especially useful for safely validating data of type unknown — like a parsed API response — before trusting its shape.',
    },

    {
      type: 'code',
      title: 'A Type Guard for Unknown Data',
      language: 'typescript',
      code: `interface User {
  id: number;
  name: string;
}

function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "name" in value &&
    typeof (value as User).id === "number" &&
    typeof (value as User).name === "string"
  );
}

function processData(data: unknown) {
  if (isUser(data)) {
    console.log(data.name); // safely narrowed to User
  }
}`,
    },

    {
      type: 'paragraph',
      title: 'Type Guards as Array Filters',
      content:
        'A type guard used inside Array.prototype.filter() also narrows the resulting array’s element type — a common pattern for removing null or undefined values from an array.',
    },

    {
      type: 'code',
      title: 'Filtering Out null with a Type Guard',
      language: 'typescript',
      code: `function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

const values: (string | null)[] = ["a", null, "b", null];
const cleaned = values.filter(isDefined); // typed as string[], not (string | null)[]`,
    },

    {
      type: 'warning',
      title: 'A Type Guard is a Promise, Not a Guarantee',
      content:
        'TypeScript trusts the return type you declare, but doesn’t verify your guard’s logic is actually correct — an incorrect implementation compiles fine but narrows to the wrong type, reintroducing the exact bugs type guards are meant to prevent.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Write a type guard whenever you find yourself repeating the same manual narrowing check (typeof, in, property checks) in more than one place — extracting it keeps validation logic in a single, testable location.',
    },
  ],

  quiz: [
    {
      question: 'What does a function return type like value is User indicate?',
      options: [
        'It always returns a User object',
        'It’s a type predicate — if it returns true, TypeScript narrows value to User',
        'It throws if value is not a User',
        'It converts value into a User',
      ],
      answer: 1,
    },
    {
      question: 'Why are custom type guards useful for validating unknown data?',
      options: [
        'They automatically fetch data from an API',
        'They let you safely check and narrow unknown values before trusting their shape',
        'They remove the need for interfaces',
        'They only work with arrays',
      ],
      answer: 1,
    },
    {
      question: 'Does TypeScript verify that a type guard’s implementation is actually correct?',
      options: [
        'Yes, it runs the logic and checks the result',
        'No — it trusts the declared return type, so an incorrect guard compiles fine',
        'Only in strict mode',
        'Only for guards using instanceof',
      ],
      answer: 1,
    },
  ],

  previous: 'conditional-types',
  next: 'modules',
};
