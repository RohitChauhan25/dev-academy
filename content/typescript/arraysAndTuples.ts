import { Tutorial } from '@/app/types/tutorial';

export const arraysAndTuples: Tutorial = {
  slug: 'arrays-and-tuples',

  title: 'Arrays & Tuples',

  description:
    'Learn how to type arrays of a single type, and fixed-length, fixed-type tuples.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 4 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Typing Arrays',
      content:
        'An array type can be written as Type[] or the equivalent generic form Array<Type>. Both mean exactly the same thing.',
    },

    {
      type: 'code',
      title: 'Two Equivalent Syntaxes',
      language: 'typescript',
      code: `let ids: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];`,
    },

    {
      type: 'paragraph',
      title: 'Arrays of Objects',
      content:
        'Array element types aren’t limited to primitives — they can be object shapes, interfaces, or unions.',
    },

    {
      type: 'code',
      title: 'Array of Objects',
      language: 'typescript',
      code: `interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];`,
    },

    {
      type: 'paragraph',
      title: 'What is a Tuple?',
      content:
        'A tuple is a fixed-length array where each position has its own specific type — unlike a regular array, order and count matter.',
    },

    {
      type: 'code',
      title: 'Basic Tuple',
      language: 'typescript',
      code: `let point: [number, number] = [10, 20];

let entry: [string, number] = ["age", 25];
// entry[0] is always a string, entry[1] is always a number`,
    },

    {
      type: 'code',
      title: 'Tuples Enforce Position and Length',
      language: 'typescript',
      code: `let coordinate: [number, number];

coordinate = [10, 20];      // OK
coordinate = [10, 20, 30];  // Error: too many elements
coordinate = ["10", 20];    // Error: wrong type at index 0`,
    },

    {
      type: 'paragraph',
      title: 'Named Tuple Members',
      content:
        'Tuple elements can be labeled for clarity in editor tooltips — the labels are purely documentation and don’t change runtime behavior.',
    },

    {
      type: 'code',
      title: 'Labeled Tuple',
      language: 'typescript',
      code: `let rgb: [red: number, green: number, blue: number] = [255, 0, 128];`,
    },

    {
      type: 'paragraph',
      title: 'Optional and Rest Elements in Tuples',
      content:
        'Tuples support optional elements with ? and a rest element to allow a variable number of trailing items of a given type.',
    },

    {
      type: 'code',
      title: 'Optional and Rest Tuple Elements',
      language: 'typescript',
      code: `let range: [start: number, end?: number] = [0];

let scores: [name: string, ...results: number[]] = ["Alice", 90, 85, 100];`,
    },

    {
      type: 'note',
      title: 'When to Reach for a Tuple',
      content:
        'Tuples are ideal for small, fixed structures like a coordinate pair or a React useState() return value — [value, setValue] — where position carries specific meaning.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Prefer a regular array (Type[]) for lists of similar items, and reach for a tuple only when the position of each element has a distinct, fixed meaning.',
    },
  ],

  quiz: [
    {
      question: 'What is the key difference between an array and a tuple in TypeScript?',
      options: [
        'Tuples cannot hold objects',
        'A tuple has a fixed length with a specific type at each position',
        'Arrays are immutable, tuples are not',
        'There is no difference',
      ],
      answer: 1,
    },
    {
      question: 'Which of these correctly types a tuple of [string, number]?',
      options: ['string[] & number[]', '[string, number]', '{string, number}', 'Tuple<string, number>'],
      answer: 1,
    },
    {
      question: 'What does a rest element in a tuple, like ...results: number[], allow?',
      options: [
        'Nothing, it’s invalid syntax',
        'A variable number of trailing elements of that type',
        'Only one extra element',
        'Converts the tuple into a regular array',
      ],
      answer: 1,
    },
  ],

  previous: 'basic-types',
  next: 'enums',
};
