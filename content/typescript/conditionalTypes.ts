import { Tutorial } from '@/app/types/tutorial';

export const conditionalTypes: Tutorial = {
  slug: 'conditional-types',

  title: 'Conditional Types',

  description:
    'Learn how to choose between two types based on a condition, using TypeScript’s extends ? : syntax.',

  level: 'Advanced',

  readingTime: '18 min',

  lesson: 'Lesson 24 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Conditional Type?',
      content:
        'A conditional type picks between two types based on whether one type is assignable to another, using syntax that mirrors JavaScript’s ternary operator: T extends U ? X : Y.',
    },

    {
      type: 'code',
      title: 'A Basic Conditional Type',
      language: 'typescript',
      code: `type IsString<T> = T extends string ? "yes" : "no";

type A = IsString<string>; // "yes"
type B = IsString<number>; // "no"`,
    },

    {
      type: 'paragraph',
      title: 'A More Practical Example',
      content:
        'Conditional types are most useful when combined with generics, letting a type adapt its shape based on what it’s given.',
    },

    {
      type: 'code',
      title: 'Flattening a Possibly-Array Type',
      language: 'typescript',
      code: `type Flatten<T> = T extends (infer Item)[] ? Item : T;

type A = Flatten<string[]>; // string
type B = Flatten<number>;   // number (unchanged, since it isn't an array)`,
    },

    {
      type: 'paragraph',
      title: 'The infer Keyword',
      content:
        'infer introduces a new type variable inside the extends clause, letting TypeScript extract and capture a piece of a type — like the element type of an array, or a function’s return type.',
    },

    {
      type: 'code',
      title: 'Extracting a Return Type with infer',
      language: 'typescript',
      code: `type MyReturnType<F> = F extends (...args: any[]) => infer R ? R : never;

function greet() {
  return "hello";
}

type Result = MyReturnType<typeof greet>; // string`,
    },

    {
      type: 'paragraph',
      title: 'Distributive Conditional Types',
      content:
        'When a conditional type is applied to a union, it automatically distributes over each member of the union individually, then combines the results back into a union.',
    },

    {
      type: 'code',
      title: 'Distribution Over a Union',
      language: 'typescript',
      code: `type ToArray<T> = T extends any ? T[] : never;

type Result = ToArray<string | number>;
// Distributes to: string[] | number[] (not (string | number)[])`,
    },

    {
      type: 'paragraph',
      title: 'Chaining Conditional Types',
      content:
        'Multiple conditional types can be chained together to express more complex, multi-branch logic entirely at the type level.',
    },

    {
      type: 'code',
      title: 'Chained Conditional Type',
      language: 'typescript',
      code: `type TypeName<T> =
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  "object";

type A = TypeName<42>;    // "number"
type B = TypeName<true>;  // "boolean"`,
    },

    {
      type: 'note',
      title: 'This is Advanced, Library-Level TypeScript',
      content:
        'Conditional types (especially combined with infer) are mostly seen in library and utility-type code, not everyday application code — but recognizing the pattern helps when reading type errors from libraries you depend on.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for conditional types when building reusable, generic utilities. In application code, prefer simpler, explicit types wherever possible — conditional types can quickly become hard to read.',
    },
  ],

  quiz: [
    {
      question: 'What does T extends U ? X : Y mean?',
      options: [
        'T must always extend U at runtime',
        'If T is assignable to U, resolve to type X, otherwise resolve to type Y',
        'It merges T and U',
        'It’s invalid TypeScript syntax',
      ],
      answer: 1,
    },
    {
      question: 'What does the infer keyword do inside a conditional type?',
      options: [
        'Asserts a value is not null',
        'Introduces a new type variable to capture part of a matched type',
        'Forces a type to be inferred as any',
        'Only works with arrays',
      ],
      answer: 1,
    },
    {
      question: 'What happens when a conditional type is applied to a union type?',
      options: [
        'It errors immediately',
        'It automatically distributes over each member of the union',
        'It only applies to the first member',
        'It converts the union into an intersection',
      ],
      answer: 1,
    },
  ],

  previous: 'mapped-types',
  next: 'type-guards',
};
