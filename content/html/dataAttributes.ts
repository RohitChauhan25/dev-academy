import { Tutorial } from '@/app/types/tutorial';

export const dataAttributes: Tutorial = {
  slug: 'data-attributes',

  title: 'Data Attributes',

  description:
    'Learn how to store custom data directly on HTML elements using data-* attributes, and read them from JavaScript.',

  level: 'Advanced',

  readingTime: '10 min',

  lesson: 'Lesson 25 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'What Are Data Attributes?',
      content:
        'Any attribute prefixed with data- is a custom data attribute. They let you attach extra information to an element without inventing new HTML attributes or relying on classes.',
    },

    {
      type: 'code',
      title: 'Data Attribute Example',
      language: 'html',
      code: `<button data-user-id="42" data-role="admin">
  Delete User
</button>`,
    },

    {
      type: 'paragraph',
      title: 'Reading Data Attributes in JavaScript',
      content:
        'The dataset property gives JavaScript easy access to every data-* attribute on an element, automatically converting kebab-case names to camelCase.',
    },

    {
      type: 'code',
      title: 'Reading with dataset',
      language: 'javascript',
      code: `const button = document.querySelector('button');

console.log(button.dataset.userId); // "42"
console.log(button.dataset.role);   // "admin"`,
    },

    {
      type: 'paragraph',
      title: 'Selecting with CSS Attribute Selectors',
      content:
        'Data attributes can also be targeted directly in CSS using attribute selectors — useful for styling elements based on state without adding extra classes.',
    },

    {
      type: 'code',
      title: 'CSS Attribute Selector',
      language: 'html',
      code: `<style>
  [data-role="admin"] {
    color: red;
  }
</style>

<span data-role="admin">Admin</span>`,
    },

    {
      type: 'list',
      title: 'Common Use Cases',
      items: [
        'Storing an ID that maps a DOM element to a backend record.',
        'Marking element state, like data-status="active".',
        'Passing configuration values to a JavaScript widget.',
        'Powering CSS-only interactions combined with attribute selectors.',
      ],
    },

    {
      type: 'warning',
      title: 'Not for Sensitive Data',
      content:
        'Data attributes are visible in the page source and can be read or modified by anyone using browser dev tools. Never store sensitive information, like tokens or personal data, in them.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use data-* attributes as the standard way to bridge HTML and JavaScript without polluting class names with non-styling information.',
    },
  ],

  quiz: [
    {
      question: 'What prefix must a custom data attribute use?',
      options: ['custom-', 'data-', 'x-', 'attr-'],
      answer: 1,
    },
    {
      question: 'Which JavaScript property provides access to an element’s data attributes?',
      options: ['element.data', 'element.attributes', 'element.dataset', 'element.custom'],
      answer: 2,
    },
    {
      question: 'Should sensitive information be stored in data attributes?',
      options: ['Yes, they are encrypted', 'No, they are visible in the page source', 'Only in production', 'Only if minified'],
      answer: 1,
    },
  ],

  previous: 'meta-tags',
  next: 'svg-basics',
};
