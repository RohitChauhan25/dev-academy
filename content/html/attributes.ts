import { Tutorial } from '@/app/types/tutorial';

export const attributes: Tutorial = {
  slug: 'attributes',

  title: 'HTML Attributes',

  description:
    'Learn how attributes provide additional information about elements, and explore the most common global attributes.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 5 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'What Are Attributes?',
      content:
        'Attributes provide extra information about an element. They are always specified in the opening tag as name/value pairs, in the form name="value".',
    },

    {
      type: 'code',
      title: 'Attribute Syntax',
      language: 'html',
      code: `<a href="https://example.com" target="_blank">Visit Example</a>
<img src="logo.png" alt="Company logo" width="120" />`,
    },

    {
      type: 'table',
      title: 'Common Global Attributes',
      headers: ['Attribute', 'Purpose'],
      rows: [
        ['id', 'Uniquely identifies a single element on the page'],
        ['class', 'Assigns one or more class names for styling/scripting'],
        ['style', 'Applies inline CSS directly to the element'],
        ['title', 'Shows a tooltip when hovering the element'],
        ['lang', 'Declares the language of the element’s content'],
        ['hidden', 'Hides the element from the page'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Attributes Are Element-Specific',
      content:
        'While global attributes work on almost any element, many attributes only make sense on specific elements — for example, href only applies to <a>, and src only applies to elements like <img>, <script>, and <video>.',
    },

    {
      type: 'code',
      title: 'Element-Specific Attributes',
      language: 'html',
      code: `<input type="email" placeholder="you@example.com" required />
<video src="movie.mp4" controls></video>`,
    },

    {
      type: 'paragraph',
      title: 'Boolean Attributes',
      content:
        'Some attributes do not take a value — their mere presence turns a feature on. Examples include disabled, required, checked, and hidden.',
    },

    {
      type: 'code',
      title: 'Boolean Attributes Example',
      language: 'html',
      code: `<input type="text" disabled />
<input type="checkbox" checked />`,
    },

    {
      type: 'note',
      title: 'Quoting Attribute Values',
      content:
        'Attribute values should always be wrapped in double or single quotes. Unquoted values can work for simple cases but break as soon as the value contains a space.',
    },

    {
      type: 'warning',
      title: 'id Must Be Unique',
      content:
        'Unlike class, an id value must be unique within the entire page. Using the same id on multiple elements is invalid HTML and can break CSS selectors and JavaScript lookups.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Prefer class over id for styling, since classes are reusable across many elements. Reserve id for unique anchors, JavaScript hooks, or accessibility references like aria-labelledby.',
    },
  ],

  quiz: [
    {
      question: 'Where are attributes written in an HTML element?',
      options: [
        'Between the opening and closing tag',
        'In the closing tag',
        'In the opening tag',
        'Only in the <head>',
      ],
      answer: 2,
    },
    {
      question: 'Which attribute must be unique across an entire page?',
      options: ['class', 'id', 'title', 'style'],
      answer: 1,
    },
    {
      question: 'Which of these is a boolean attribute?',
      options: ['href', 'src', 'disabled', 'alt'],
      answer: 2,
    },
  ],

  previous: 'elements-and-tags',
  next: 'comments',
};
