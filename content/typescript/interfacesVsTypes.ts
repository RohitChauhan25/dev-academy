import { Tutorial } from '@/app/types/tutorial';

export const interfacesVsTypes: Tutorial = {
  slug: 'interfaces-vs-types',

  title: 'Interfaces vs Type Aliases',

  description:
    'Understand the practical differences between interface and type, and when to reach for each one.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 18 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'They Overlap a Lot',
      content:
        'For describing simple object shapes, interface and type are nearly interchangeable — either works, and the choice mostly comes down to a few specific differences and team convention.',
    },

    {
      type: 'code',
      title: 'Equivalent Object Shapes',
      language: 'typescript',
      code: `interface UserInterface {
  name: string;
  age: number;
}

type UserType = {
  name: string;
  age: number;
};`,
    },

    {
      type: 'paragraph',
      title: 'Declaration Merging (Interfaces Only)',
      content:
        'Multiple interface declarations with the same name automatically merge into one — a feature unique to interfaces, often used to extend types from external libraries.',
    },

    {
      type: 'code',
      title: 'Declaration Merging',
      language: 'typescript',
      code: `interface User {
  name: string;
}

interface User {
  age: number;
}

// User is now merged: { name: string; age: number }
const user: User = { name: "Alice", age: 30 };`,
    },

    {
      type: 'paragraph',
      title: 'type Can Describe More Than Object Shapes',
      content:
        'type can name unions, intersections, tuples, and primitives directly — things an interface cannot represent on its own.',
    },

    {
      type: 'code',
      title: 'Only type Can Do This',
      language: 'typescript',
      code: `type ID = string | number;      // union
type Point = [number, number];  // tuple
type Handler = () => void;      // function type`,
    },

    {
      type: 'table',
      title: 'Feature Comparison',
      headers: ['Feature', 'interface', 'type'],
      rows: [
        ['Object shapes', 'Yes', 'Yes'],
        ['extends another', 'Yes (extends)', 'Yes (via &)'],
        ['Declaration merging', 'Yes', 'No — duplicate names error'],
        ['Unions / tuples / primitives', 'No', 'Yes'],
        ['Implemented by a class', 'Yes', 'Yes'],
      ],
    },

    {
      type: 'note',
      title: 'A Common Convention',
      content:
        'Many teams use interface for object shapes and class contracts (taking advantage of declaration merging and extends), and type for everything else — unions, tuples, and utility compositions.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Pick one convention for your team and apply it consistently. The functional differences rarely matter for simple object shapes — consistency across a codebase matters more than which one you chose.',
    },
  ],

  quiz: [
    {
      question: 'Which feature is unique to interface and not available with type?',
      options: ['Extending another shape', 'Declaration merging', 'Describing object shapes', 'Being used as a function parameter type'],
      answer: 1,
    },
    {
      question: 'Can a type alias represent a union like string | number?',
      options: ['No, only interface can', 'Yes', 'Only with extends', 'Only for primitives'],
      answer: 1,
    },
    {
      question: 'What happens if you declare two interfaces with the same name?',
      options: [
        'The second one silently overrides the first',
        'It’s a compile error',
        'They automatically merge into one combined interface',
        'Only the first one is used',
      ],
      answer: 2,
    },
  ],

  previous: 'access-modifiers',
  next: 'generics',
};
