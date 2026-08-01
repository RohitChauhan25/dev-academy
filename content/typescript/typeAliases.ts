import { Tutorial } from '@/app/types/tutorial';

export const typeAliases: Tutorial = {
  slug: 'type-aliases',

  title: 'Type Aliases',

  description:
    'Learn how to create reusable, named types with the type keyword.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 8 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Type Alias?',
      content:
        'A type alias gives a name to any type — a primitive, an object shape, a union, or anything else — so it can be reused instead of repeating the same definition everywhere.',
    },

    {
      type: 'code',
      title: 'A Basic Type Alias',
      language: 'typescript',
      code: `type ID = string | number;

let userId: ID = 42;
let orderId: ID = "ORD-1001";`,
    },

    {
      type: 'paragraph',
      title: 'Aliasing Object Shapes',
      content:
        'Type aliases are commonly used to name the shape of an object, avoiding repetition across function signatures.',
    },

    {
      type: 'code',
      title: 'Object Shape Alias',
      language: 'typescript',
      code: `type User = {
  id: number;
  name: string;
  email: string;
};

function greetUser(user: User): string {
  return \`Hello, \${user.name}!\`;
}`,
    },

    {
      type: 'paragraph',
      title: 'Aliasing Function Types',
      content:
        'A type alias can also describe the shape of a function — its parameter types and return type — useful for typing callbacks consistently.',
    },

    {
      type: 'code',
      title: 'Function Type Alias',
      language: 'typescript',
      code: `type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;`,
    },

    {
      type: 'paragraph',
      title: 'Composing Aliases',
      content:
        'Type aliases can be built from other aliases, combined with unions and intersections, keeping complex types readable and DRY.',
    },

    {
      type: 'code',
      title: 'Composed Type Aliases',
      language: 'typescript',
      code: `type Status = "pending" | "active" | "completed";

type Task = {
  title: string;
  status: Status;
};`,
    },

    {
      type: 'note',
      title: 'Type Aliases Don’t Create New Types',
      content:
        'A type alias is just a name for an existing type — it doesn’t create a distinct new type the way a class does. Two aliases pointing at the same shape are fully interchangeable.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Name a type as soon as it’s used in more than one place, or once its inline definition becomes hard to read at a glance — clear names make signatures far easier to scan.',
    },
  ],

  quiz: [
    {
      question: 'What keyword creates a type alias?',
      options: ['interface', 'type', 'alias', 'typedef'],
      answer: 1,
    },
    {
      question: 'Can a type alias describe a union of types?',
      options: ['No, only object shapes', 'Yes, e.g. type ID = string | number', 'Only with interface', 'Only primitive types'],
      answer: 1,
    },
    {
      question: 'Does a type alias create a genuinely new, distinct type?',
      options: [
        'Yes, always',
        'No — it’s just another name for an existing type',
        'Only for object shapes',
        'Only when exported',
      ],
      answer: 1,
    },
  ],

  previous: 'type-inference',
  next: 'interfaces',
};
