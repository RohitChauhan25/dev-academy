import { Tutorial } from '@/app/types/tutorial';

export const utilityTypes: Tutorial = {
  slug: 'utility-types',

  title: 'Utility Types',

  description:
    'Learn TypeScript’s built-in utility types — Partial, Required, Pick, Omit, Record, and more — for transforming existing types.',

  level: 'Advanced',

  readingTime: '18 min',

  lesson: 'Lesson 22 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Utility Types?',
      content:
        'TypeScript ships with a set of built-in generic types that transform an existing type into a new one, so you don’t need to redefine similar shapes by hand.',
    },

    {
      type: 'code',
      title: 'Partial<T> and Required<T>',
      language: 'typescript',
      code: `interface User {
  name: string;
  email: string;
  age?: number;
}

// All properties become optional — perfect for a partial update function
type UserUpdate = Partial<User>;

function updateUser(id: number, changes: UserUpdate) { /* ... */ }
updateUser(1, { name: "New Name" }); // OK, other fields omitted

// All properties become required, even ones that were optional
type CompleteUser = Required<User>;`,
    },

    {
      type: 'code',
      title: 'Pick<T, K> and Omit<T, K>',
      language: 'typescript',
      code: `// Pick: keep only the listed properties
type UserPreview = Pick<User, "name" | "email">;

// Omit: keep everything except the listed properties
type UserWithoutEmail = Omit<User, "email">;`,
    },

    {
      type: 'code',
      title: 'Record<K, V>',
      language: 'typescript',
      code: `// A dictionary type: keys of type K, values of type V
type RolePermissions = Record<"admin" | "editor" | "viewer", boolean>;

const permissions: RolePermissions = {
  admin: true,
  editor: true,
  viewer: false,
};`,
    },

    {
      type: 'table',
      title: 'Common Utility Types',
      headers: ['Utility Type', 'What It Does'],
      rows: [
        ['Partial<T>', 'Makes every property in T optional'],
        ['Required<T>', 'Makes every property in T required'],
        ['Readonly<T>', 'Makes every property in T readonly'],
        ['Pick<T, K>', 'Keeps only the listed keys K from T'],
        ['Omit<T, K>', 'Removes the listed keys K from T'],
        ['Record<K, V>', 'Builds an object type with keys K and values V'],
        ['ReturnType<F>', 'Extracts a function’s return type'],
        ['Parameters<F>', 'Extracts a function’s parameter types as a tuple'],
      ],
    },

    {
      type: 'code',
      title: 'ReturnType<F> and Parameters<F>',
      language: 'typescript',
      code: `function createUser(name: string, age: number) {
  return { name, age, createdAt: new Date() };
}

type NewUser = ReturnType<typeof createUser>;
// { name: string; age: number; createdAt: Date }

type CreateUserArgs = Parameters<typeof createUser>;
// [name: string, age: number]`,
    },

    {
      type: 'paragraph',
      title: 'Utility Types Are Built from Simpler Features',
      content:
        'These utilities aren’t magic — they’re implemented internally using mapped types and conditional types, the two features covered in the next couple of lessons.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for a utility type before writing a near-duplicate interface by hand — Partial, Pick, and Omit alone cover a huge share of everyday type transformations.',
    },
  ],

  quiz: [
    {
      question: 'What does Partial<User> do?',
      options: [
        'Makes every property of User required',
        'Makes every property of User optional',
        'Removes half of User’s properties',
        'Creates an array of User',
      ],
      answer: 1,
    },
    {
      question: 'What is the difference between Pick and Omit?',
      options: [
        'They do the same thing',
        'Pick keeps only the listed keys, Omit removes the listed keys',
        'Pick works on arrays, Omit works on objects',
        'Omit is deprecated',
      ],
      answer: 1,
    },
    {
      question: 'What does ReturnType<typeof someFunction> give you?',
      options: [
        'The function’s parameter types',
        'The type of the value the function returns',
        'The function itself',
        'A boolean indicating if the function is async',
      ],
      answer: 1,
    },
  ],

  previous: 'narrowing',
  next: 'mapped-types',
};
