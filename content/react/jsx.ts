import { Tutorial } from '@/app/types/tutorial';

export const jsx: Tutorial = {
  slug: 'jsx',

  title: 'JSX',

  description:
    'Learn JSX, the syntax extension that lets you write UI markup directly inside JavaScript.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 3 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'What is JSX?',
      content:
        'JSX (JavaScript XML) is a syntax extension that lets you write HTML-like markup directly inside JavaScript. It’s not required to use React, but it’s by far the most common way to describe UI in React code.',
    },

    {
      type: 'code',
      title: 'A Basic JSX Expression',
      language: 'jsx',
      code: `const element = <h1>Hello, world!</h1>;`,
    },

    {
      type: 'paragraph',
      title: 'JSX Compiles to Function Calls',
      content:
        'Browsers don’t understand JSX natively. A build tool compiles it into regular JavaScript function calls before your code ever runs.',
    },

    {
      type: 'code',
      title: 'What JSX Actually Compiles To',
      language: 'jsx',
      code: `// This JSX:
const element = <h1 className="title">Hello</h1>;

// Compiles to something like:
const element = React.createElement("h1", { className: "title" }, "Hello");`,
    },

    {
      type: 'paragraph',
      title: 'Embedding JavaScript Expressions',
      content:
        'Curly braces {} embed any JavaScript expression directly inside JSX — variables, function calls, arithmetic, or ternaries.',
    },

    {
      type: 'code',
      title: 'Embedding Expressions',
      language: 'jsx',
      code: `const name = "Alice";

function Greeting() {
  return <h1>Hello, {name}! You have {2 + 2} new messages.</h1>;
}`,
    },

    {
      type: 'table',
      title: 'JSX Differs Slightly from HTML',
      headers: ['HTML', 'JSX'],
      rows: [
        ['class="btn"', 'className="btn"'],
        ['for="email"', 'htmlFor="email"'],
        ['onclick="..."', 'onClick={handler}'],
        ['style="color: red"', 'style={{ color: "red" }}'],
        ['<br>', '<br /> (must be self-closed)'],
      ],
    },

    {
      type: 'paragraph',
      title: 'A Single Root Element',
      content:
        'Every component must return exactly one root JSX element. To return multiple sibling elements without adding an extra wrapping <div>, wrap them in a Fragment (<>...</>).',
    },

    {
      type: 'code',
      title: 'Returning Multiple Elements with a Fragment',
      language: 'jsx',
      code: `function UserInfo() {
  return (
    <>
      <h2>Alice</h2>
      <p>alice@example.com</p>
    </>
  );
}`,
    },

    {
      type: 'warning',
      title: 'Every Attribute Uses camelCase',
      content:
        'Almost every JSX attribute is written in camelCase (onClick, tabIndex, backgroundColor inside a style object) since JSX attributes ultimately become JavaScript object properties, not HTML attribute strings.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Think of JSX as "JavaScript with markup," not "HTML in JavaScript" — remembering that it compiles to function calls explains most of its quirks, like className and the single-root-element rule.',
    },
  ],

  quiz: [
    {
      question: 'What does JSX compile down to?',
      options: [
        'Raw HTML strings',
        'JavaScript function calls (like React.createElement)',
        'CSS',
        'WebAssembly',
      ],
      answer: 1,
    },
    {
      question: 'What is the JSX equivalent of the HTML class attribute?',
      options: ['class', 'className', 'cssClass', 'styleName'],
      answer: 1,
    },
    {
      question: 'How do you return multiple sibling elements from a component without an extra wrapping <div>?',
      options: [
        'It’s not possible',
        'Wrap them in a Fragment, <>...</>',
        'Return them as an array of strings',
        'Use two return statements',
      ],
      answer: 1,
    },
  ],

  previous: 'setup',
  next: 'components-and-props',
};
