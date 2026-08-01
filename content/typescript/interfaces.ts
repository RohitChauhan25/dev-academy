import { Tutorial } from '@/app/types/tutorial';

export const interfaces: Tutorial = {
  slug: 'interfaces',

  title: 'Interfaces',

  description:
    'Learn how to describe the shape of objects using interfaces, and how interfaces can extend one another.',

  level: 'Beginner',

  readingTime: '16 min',

  lesson: 'Lesson 9 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is an Interface?',
      content:
        'An interface describes the shape an object must have — which properties it needs, and what type each one is. Any object matching that shape satisfies the interface, regardless of how it was created.',
    },

    {
      type: 'code',
      title: 'A Basic Interface',
      language: 'typescript',
      code: `interface User {
  id: number;
  name: string;
  email: string;
}

function printUser(user: User) {
  console.log(\`\${user.name} <\${user.email}>\`);
}

printUser({ id: 1, name: "Alice", email: "alice@example.com" });`,
    },

    {
      type: 'paragraph',
      title: 'Structural Typing',
      content:
        'TypeScript uses structural typing — an object satisfies an interface if it has the required shape, even if it was never explicitly declared as that interface. This is sometimes called "duck typing."',
    },

    {
      type: 'code',
      title: 'Structural Typing in Action',
      language: 'typescript',
      code: `interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(\`(\${p.x}, \${p.y})\`);
}

const location = { x: 10, y: 20, label: "Home" };
printPoint(location); // Works — has at least x and y`,
    },

    {
      type: 'paragraph',
      title: 'Extending Interfaces',
      content:
        'An interface can extend one or more other interfaces with the extends keyword, inheriting all of their members.',
    },

    {
      type: 'code',
      title: 'Extending an Interface',
      language: 'typescript',
      code: `interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = { name: "Rex", breed: "Labrador" };`,
    },

    {
      type: 'paragraph',
      title: 'Optional and Readonly Properties',
      content:
        'A property marked with ? is optional, and one marked readonly cannot be reassigned after the object is created.',
    },

    {
      type: 'code',
      title: 'Optional and Readonly',
      language: 'typescript',
      code: `interface Config {
  readonly apiUrl: string;
  timeout?: number;
}

const config: Config = { apiUrl: "https://api.example.com" };
config.apiUrl = "https://other.com"; // Error: read-only property`,
    },

    {
      type: 'paragraph',
      title: 'Interfaces for Functions and Classes',
      content:
        'Interfaces can also describe callable function shapes, and classes can formally implement an interface with the implements keyword to guarantee they provide a matching shape.',
    },

    {
      type: 'code',
      title: 'A Class Implementing an Interface',
      language: 'typescript',
      code: `interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use interfaces to describe the public shape of objects and class contracts. They’re easily extendable and produce clearer error messages than deeply nested type aliases.',
    },
  ],

  quiz: [
    {
      question: 'What does an interface describe?',
      options: [
        'A specific value',
        'The shape an object must have',
        'A function’s implementation',
        'A CSS class'
      ],
      answer: 1,
    },
    {
      question: 'What is structural typing?',
      options: [
        'Types are matched by name only',
        'An object satisfies a type if it has the required shape, regardless of how it was declared',
        'Only classes can implement interfaces',
        'Types must be explicitly cast'
      ],
      answer: 1,
    },
    {
      question: 'How does one interface inherit members from another?',
      options: ['implements', 'extends', 'inherits', 'super'],
      answer: 1,
    },
  ],

  previous: 'type-aliases',
  next: 'functions',
};
