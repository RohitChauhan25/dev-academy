import { Tutorial } from '@/app/types/tutorial';

export const unionAndIntersectionTypes: Tutorial = {
  slug: 'union-and-intersection-types',

  title: 'Union & Intersection Types',

  description:
    'Learn how to combine types with union (|) and intersection (&) operators.',

  level: 'Beginner',

  readingTime: '16 min',

  lesson: 'Lesson 11 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Union Types',
      content:
        'A union type allows a value to be one of several types, separated by |. The value can be any one of them, but the compiler only lets you use operations valid for every member of the union unless you narrow it first.',
    },

    {
      type: 'code',
      title: 'A Basic Union',
      language: 'typescript',
      code: `let id: string | number;

id = "abc123"; // OK
id = 42;        // OK
id = true;      // Error: 'boolean' is not assignable to 'string | number'`,
    },

    {
      type: 'paragraph',
      title: 'Narrowing a Union Before Use',
      content:
        'To call type-specific methods, you first need to narrow the union to a single type, typically with typeof, instanceof, or a property check.',
    },

    {
      type: 'code',
      title: 'Narrowing with typeof',
      language: 'typescript',
      code: `function formatId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase(); // safe: narrowed to string
  }
  return id.toFixed(0); // safe: narrowed to number
}`,
    },

    {
      type: 'paragraph',
      title: 'Union of Object Types',
      content:
        'Unions work with object shapes too, letting a function accept one of several related but distinct structures.',
    },

    {
      type: 'code',
      title: 'Union of Interfaces',
      language: 'typescript',
      code: `interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

type Shape = Circle | Square;

function area(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side ** 2;
}`,
    },

    {
      type: 'paragraph',
      title: 'Intersection Types',
      content:
        'An intersection type combines multiple types into one, using &. The resulting type has all the members of every combined type — the value must satisfy all of them at once.',
    },

    {
      type: 'code',
      title: 'A Basic Intersection',
      language: 'typescript',
      code: `type Named = { name: string };
type Aged = { age: number };

type Person = Named & Aged;

const person: Person = { name: "Alice", age: 30 };`,
    },

    {
      type: 'table',
      title: 'Union vs Intersection',
      headers: ['', 'Union (|)', 'Intersection (&)'],
      rows: [
        ['Meaning', 'Value is one of the listed types', 'Value must satisfy all listed types at once'],
        ['Common use', 'A value with a few valid shapes/forms', 'Merging multiple smaller shapes into one'],
      ],
    },

    {
      type: 'note',
      title: 'The "kind" Pattern is a Discriminated Union',
      content:
        'Giving each member of a union a shared literal property (like kind: "circle") lets TypeScript automatically narrow the type inside conditional checks — this pattern is called a discriminated union.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use discriminated unions (a shared literal "tag" property) for related-but-different object shapes — it gives you safe, exhaustive narrowing with excellent editor autocomplete.',
    },
  ],

  quiz: [
    {
      question: 'What does string | number mean for a variable?',
      options: [
        'It must be both a string and a number at once',
        'It can be either a string or a number',
        'It is always a string',
        'It is invalid syntax',
      ],
      answer: 1,
    },
    {
      question: 'What does an intersection type (A & B) require?',
      options: [
        'The value must be either A or B',
        'The value must satisfy both A and B at once',
        'A and B cannot overlap',
        'Only classes can use intersections',
      ],
      answer: 1,
    },
    {
      question: 'What is a discriminated union?',
      options: [
        'A union with no common properties',
        'A union of object types sharing a common literal "tag" property, enabling safe narrowing',
        'A type that can never be narrowed',
        'A special kind of enum',
      ],
      answer: 1,
    },
  ],

  previous: 'functions',
  next: 'literal-types',
};
