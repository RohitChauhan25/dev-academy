import { Tutorial } from '@/app/types/tutorial';

export const introduction: Tutorial = {
  slug: 'introduction',

  title: 'React Introduction',

  description:
    'Understand what React is, the problem it solves, and how it changed the way developers build user interfaces.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 1 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'What is React?',
      content:
        'React is a JavaScript library for building user interfaces, created and maintained by Meta. It lets you describe what your UI should look like for any given state, and React handles efficiently updating the actual DOM to match.',
    },

    {
      type: 'paragraph',
      title: 'The Problem React Solves',
      content:
        'Before React, developers manually updated the DOM with methods like document.getElementById() and .innerHTML as application state changed — a process that becomes error-prone and hard to reason about as an app grows. React lets you describe your UI declaratively instead, based purely on the current state.',
    },

    {
      type: 'code',
      title: 'A Simple React Component',
      language: 'jsx',
      code: `function Greeting() {
  return <h1>Hello, DevAcademy!</h1>;
}

export default Greeting;`,
    },

    {
      type: 'table',
      title: 'Quick Facts',
      headers: ['Feature', 'Value'],
      rows: [
        ['Created By', 'Jordan Walke at Facebook (Meta)'],
        ['First Released', '2013'],
        ['Type', 'JavaScript library for building UIs'],
        ['Core Idea', 'Declarative, component-based UI'],
        ['Used For', 'Web apps, and mobile apps via React Native'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Declarative vs Imperative',
      content:
        'Imperative code describes the exact steps to reach a result. Declarative code describes the desired end result, and lets the framework figure out the steps. React embraces the declarative approach — you describe the UI for a given state, not the sequence of DOM operations needed to get there.',
    },

    {
      type: 'list',
      title: 'Core React Concepts',
      items: [
        'Components — reusable, self-contained pieces of UI.',
        'JSX — a syntax extension for writing markup inside JavaScript.',
        'Props — how data flows into a component from its parent.',
        'State — data a component manages and can change over time.',
        'The Virtual DOM — React’s in-memory representation used to compute efficient updates.',
      ],
    },

    {
      type: 'paragraph',
      title: 'Where React is Used',
      content:
        'React powers everything from small interactive widgets to entire large-scale applications, and is the foundation for meta-frameworks like Next.js, which add server-side rendering, routing, and more on top of it.',
    },

    {
      type: 'note',
      title: 'React is a Library, Not a Framework',
      content:
        'Unlike some competitors, React itself only handles rendering the UI — routing, data fetching conventions, and build tooling are provided by separate libraries or frameworks (like React Router or Next.js) built around it.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Make sure you’re comfortable with modern JavaScript (arrow functions, destructuring, array methods, modules) before diving into React — nearly all of React’s API is just JavaScript functions and objects.',
    },
  ],

  quiz: [
    {
      question: 'What is React?',
      options: [
        'A full backend framework',
        'A JavaScript library for building user interfaces',
        'A CSS framework',
        'A database',
      ],
      answer: 1,
    },
    {
      question: 'Does React encourage a declarative or imperative style of UI programming?',
      options: ['Imperative', 'Declarative', 'Neither', 'Both equally'],
      answer: 1,
    },
    {
      question: 'Is React itself a full framework with built-in routing and data fetching?',
      options: [
        'Yes, everything is built in',
        'No — it’s a UI library; routing and other concerns come from separate libraries/frameworks',
        'Only in the newest version',
        'Only when using Next.js',
      ],
      answer: 1,
    },
  ],

  next: 'setup',
};
