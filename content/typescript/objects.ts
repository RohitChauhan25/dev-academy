import { Tutorial } from '@/app/types/tutorial';

export const objects: Tutorial = {
  slug: 'objects',

  title: 'Object Types',

  description:
    'Learn how to type object shapes inline, nested objects, and index signatures for dynamic keys.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 13 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Inline Object Types',
      content:
        'An object’s shape can be typed directly inline, without a separate interface or type alias — useful for small, one-off shapes.',
    },

    {
      type: 'code',
      title: 'Inline Object Type',
      language: 'typescript',
      code: `function printCoordinate(point: { x: number; y: number }) {
  console.log(\`(\${point.x}, \${point.y})\`);
}

printCoordinate({ x: 10, y: 20 });`,
    },

    {
      type: 'paragraph',
      title: 'Nested Object Types',
      content:
        'Object types can be nested to describe deeply structured data, mirroring the shape of the actual object.',
    },

    {
      type: 'code',
      title: 'Nested Objects',
      language: 'typescript',
      code: `interface Order {
  id: number;
  customer: {
    name: string;
    email: string;
  };
  total: number;
}

const order: Order = {
  id: 1,
  customer: { name: "Alice", email: "alice@example.com" },
  total: 49.99,
};`,
    },

    {
      type: 'paragraph',
      title: 'Index Signatures',
      content:
        'An index signature types an object whose exact keys aren’t known ahead of time, but whose values all share a common type — like a dictionary or lookup table.',
    },

    {
      type: 'code',
      title: 'Index Signature',
      language: 'typescript',
      code: `interface Scores {
  [studentName: string]: number;
}

const scores: Scores = {
  Alice: 92,
  Bob: 88,
};

scores.Charlie = 95; // OK — any string key maps to a number`,
    },

    {
      type: 'paragraph',
      title: 'Record<K, V> as an Alternative',
      content:
        'The built-in Record<K, V> utility type is a more concise, commonly preferred way to type a dictionary object with known key types.',
    },

    {
      type: 'code',
      title: 'Record Utility Type',
      language: 'typescript',
      code: `type Scores = Record<string, number>;

const scores: Scores = {
  Alice: 92,
  Bob: 88,
};`,
    },

    {
      type: 'paragraph',
      title: 'Excess Property Checks',
      content:
        'When passing an object literal directly where a specific type is expected, TypeScript performs an extra check and flags properties that don’t exist on the target type — a safeguard against typos.',
    },

    {
      type: 'code',
      title: 'Excess Property Check',
      language: 'typescript',
      code: `interface Config {
  timeout: number;
}

function setup(config: Config) {}

setup({ timeout: 1000, timeOut: 2000 }); // Error: 'timeOut' does not exist on type 'Config'`,
    },

    {
      type: 'note',
      title: 'Excess Checks Only Apply to Object Literals',
      content:
        'Assigning through a variable instead of a literal skips this check, since the variable might legitimately have extra properties from a wider type — this is a deliberate part of structural typing.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use Record<K, V> for simple dictionaries with known key/value types, and reach for a full interface once the object has several distinct, individually meaningful properties.',
    },
  ],

  quiz: [
    {
      question: 'What is an index signature used for?',
      options: [
        'Typing an array',
        'Typing an object whose keys aren’t known ahead of time but share a common value type',
        'Adding a numeric index to a string',
        'Sorting object keys',
      ],
      answer: 1,
    },
    {
      question: 'What does Record<string, number> describe?',
      options: [
        'An array of numbers',
        'An object with string keys and number values',
        'A tuple of a string and a number',
        'A function type',
      ],
      answer: 1,
    },
    {
      question: 'When does TypeScript perform excess property checks?',
      options: [
        'Always, for every assignment',
        'When passing an object literal directly to a typed parameter',
        'Only for arrays',
        'Never',
      ],
      answer: 1,
    },
  ],

  previous: 'literal-types',
  next: 'optional-and-readonly',
};
