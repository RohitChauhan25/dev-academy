import { Tutorial } from '@/app/types/tutorial';

export const genericConstraints: Tutorial = {
  slug: 'generic-constraints',

  title: 'Generic Constraints',

  description:
    'Learn how to restrict a generic type parameter to types with specific properties using extends.',

  level: 'Intermediate',

  readingTime: '16 min',

  lesson: 'Lesson 20 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem: Unconstrained Generics',
      content:
        'A plain generic type parameter T could be anything, so TypeScript won’t let you access any properties on it — even ones that seem obviously safe, like .length.',
    },

    {
      type: 'code',
      title: 'An Unconstrained Generic Fails',
      language: 'typescript',
      code: `function printLength<T>(value: T) {
  console.log(value.length); // Error: Property 'length' does not exist on type 'T'
}`,
    },

    {
      type: 'paragraph',
      title: 'Constraining with extends',
      content:
        'Adding extends after the type parameter restricts T to types that satisfy a given shape, unlocking access to the properties that shape guarantees.',
    },

    {
      type: 'code',
      title: 'A Constrained Generic',
      language: 'typescript',
      code: `interface HasLength {
  length: number;
}

function printLength<T extends HasLength>(value: T) {
  console.log(value.length); // OK — T is guaranteed to have 'length'
}

printLength("hello");        // OK — strings have .length
printLength([1, 2, 3]);      // OK — arrays have .length
printLength(42);              // Error: number doesn't have .length`,
    },

    {
      type: 'paragraph',
      title: 'Constraining to keyof Another Type',
      content:
        'A very common pattern constrains one generic parameter to be a key of another, guaranteeing safe, typed property access — this is exactly how the built-in Object methods stay type-safe.',
    },

    {
      type: 'code',
      title: 'A Typed getProperty Function',
      language: 'typescript',
      code: `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 30 };

getProperty(user, "name"); // OK, returns a string
getProperty(user, "email"); // Error: 'email' is not a key of the user object`,
    },

    {
      type: 'paragraph',
      title: 'Default Type Parameters',
      content:
        'A generic parameter can have a default type, used when the caller doesn’t explicitly provide or infer one.',
    },

    {
      type: 'code',
      title: 'Default Generic Type',
      language: 'typescript',
      code: `interface ApiResponse<T = unknown> {
  data: T;
  success: boolean;
}

const response: ApiResponse = { data: "anything", success: true }; // T defaults to unknown`,
    },

    {
      type: 'note',
      title: 'Constraints Narrow, They Don’t Widen',
      content:
        'A constraint only guarantees the minimum shape T must have — the actual type passed in can still have additional properties beyond what the constraint requires.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for constraints as soon as a generic function needs to access any property on its parameter. The keyof pattern (T, K extends keyof T) is especially useful for writing safe, reusable object utilities.',
    },
  ],

  quiz: [
    {
      question: 'Why does an unconstrained generic <T> not allow accessing value.length?',
      options: [
        'It’s a TypeScript bug',
        'T could be any type, and TypeScript can’t guarantee every type has a length property',
        'length is a reserved word',
        'Generics never allow property access',
      ],
      answer: 1,
    },
    {
      question: 'What does <T extends HasLength> do?',
      options: [
        'Makes T optional',
        'Restricts T to types that satisfy the HasLength shape',
        'Converts T into HasLength',
        'Removes type checking for T',
      ],
      answer: 1,
    },
    {
      question: 'What does K extends keyof T typically guarantee in a function signature?',
      options: [
        'K is always a string',
        'K is restricted to one of the actual property keys of T',
        'K must be a number',
        'Nothing, it’s just documentation',
      ],
      answer: 1,
    },
  ],

  previous: 'generics',
  next: 'narrowing',
};
