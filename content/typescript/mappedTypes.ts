import { Tutorial } from '@/app/types/tutorial';

export const mappedTypes: Tutorial = {
  slug: 'mapped-types',

  title: 'Mapped Types',

  description:
    'Learn how to transform every property of an existing type into a new type using mapped type syntax.',

  level: 'Advanced',

  readingTime: '18 min',

  lesson: 'Lesson 23 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Mapped Type?',
      content:
        'A mapped type builds a new type by iterating over the keys of an existing type (or a union of literal keys) and applying the same transformation to each one — it’s essentially a "map()" for types.',
    },

    {
      type: 'code',
      title: 'A Basic Mapped Type',
      language: 'typescript',
      code: `type User = {
  name: string;
  email: string;
};

type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};

// Equivalent to: { readonly name: string; readonly email: string }`,
    },

    {
      type: 'paragraph',
      title: 'This is How Partial and Readonly Are Built',
      content:
        'TypeScript’s own built-in Partial<T> and Readonly<T> utility types are just mapped types under the hood.',
    },

    {
      type: 'code',
      title: 'Reimplementing Partial',
      language: 'typescript',
      code: `type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

type PartialUser = MyPartial<User>;
// { name?: string; email?: string }`,
    },

    {
      type: 'paragraph',
      title: 'Modifiers: Adding and Removing ? and readonly',
      content:
        'A - prefix removes a modifier instead of adding it, letting a mapped type strip optionality or readonly from an existing type.',
    },

    {
      type: 'code',
      title: 'Removing Modifiers',
      language: 'typescript',
      code: `type PartialUser = { name?: string; email?: string };

// Strips '?' from every property, making them all required again
type RequiredAgain = {
  [K in keyof PartialUser]-?: PartialUser[K];
};`,
    },

    {
      type: 'paragraph',
      title: 'Remapping Keys with as',
      content:
        'A mapped type can rename each key as it maps over them, using the as clause — useful for building things like a set of getter method names from a plain object type.',
    },

    {
      type: 'code',
      title: 'Key Remapping',
      language: 'typescript',
      code: `type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

type UserGetters = Getters<User>;
// { getName: () => string; getEmail: () => string }`,
    },

    {
      type: 'paragraph',
      title: 'Mapping Over a Union of Literals',
      content:
        'Mapped types don’t need to start from keyof — they can iterate over any union of string literals directly.',
    },

    {
      type: 'code',
      title: 'Mapping Over a Literal Union',
      language: 'typescript',
      code: `type Role = "admin" | "editor" | "viewer";

type RolePermissions = {
  [R in Role]: boolean;
};
// { admin: boolean; editor: boolean; viewer: boolean }`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'You rarely need to write mapped types from scratch — reach for the built-in utility types first, and write a custom mapped type only when nothing built-in expresses the exact transformation you need.',
    },
  ],

  quiz: [
    {
      question: 'What does a mapped type do, conceptually?',
      options: [
        'It creates a JavaScript Map object',
        'It transforms every property of an existing type using the same rule, like map() for types',
        'It merges two unrelated types',
        'It converts a type into JSON',
      ],
      answer: 1,
    },
    {
      question: 'What does the -? modifier do inside a mapped type?',
      options: [
        'Makes every property optional',
        'Removes the optional modifier, making properties required',
        'Deletes the property entirely',
        'Makes the property readonly',
      ],
      answer: 1,
    },
    {
      question: 'What does the as clause inside a mapped type allow?',
      options: [
        'Type assertions',
        'Renaming each key as it’s mapped over',
        'Casting the whole type to any',
        'Adding comments to types',
      ],
      answer: 1,
    },
  ],

  previous: 'utility-types',
  next: 'conditional-types',
};
