import { Tutorial } from '@/app/types/tutorial';

export const elementsAndTags: Tutorial = {
  slug: 'elements-and-tags',

  title: 'Elements & Tags',

  description:
    'Understand the difference between tags and elements, and learn about opening tags, closing tags, and self-closing (void) elements.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 4 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'Tags vs Elements',
      content:
        'A tag is the markup itself, like <p> or </p>. An element is the tag plus its content: <p>Hello</p> is a paragraph element made up of an opening tag, the content, and a closing tag.',
    },

    {
      type: 'code',
      title: 'Anatomy of an Element',
      language: 'html',
      code: `<p>This is a paragraph.</p>
<!--
^   ^                    ^
opening  content       closing
tag                       tag
-->`,
    },

    {
      type: 'paragraph',
      title: 'Opening and Closing Tags',
      content:
        'Most HTML elements have an opening tag and a matching closing tag, with the closing tag prefixed by a forward slash. Content placed between them becomes the element’s content.',
    },

    {
      type: 'paragraph',
      title: 'Void (Self-Closing) Elements',
      content:
        'Some elements have no content and therefore no closing tag. These are called void elements — common examples include <img>, <br>, <hr>, and <input>.',
    },

    {
      type: 'code',
      title: 'Void Elements',
      language: 'html',
      code: `<img src="photo.jpg" alt="A photo" />
<br />
<hr />
<input type="text" />`,
    },

    {
      type: 'table',
      title: 'Common Void Elements',
      headers: ['Tag', 'Purpose'],
      rows: [
        ['<img>', 'Embeds an image'],
        ['<br>', 'Inserts a line break'],
        ['<hr>', 'Inserts a horizontal rule'],
        ['<input>', 'Creates a form input field'],
        ['<meta>', 'Provides document metadata'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Nesting Elements',
      content:
        'Elements can contain other elements. When nesting, closing tags must close in the reverse order they were opened, like closing brackets.',
    },

    {
      type: 'code',
      title: 'Correct vs Incorrect Nesting',
      language: 'html',
      code: `<!-- Correct -->
<p>This is <strong>very</strong> important.</p>

<!-- Incorrect: tags cross each other -->
<p>This is <strong>very</p></strong>`,
    },

    {
      type: 'note',
      title: 'Tags Are Case-Insensitive',
      content:
        'HTML tags can be written in uppercase or lowercase (<DIV> and <div> both work), but lowercase is the universal convention and is required by stricter formats like XHTML.',
    },

    {
      type: 'warning',
      title: 'Never Skip Closing Tags',
      content:
        'Forgetting to close a non-void element can cause the browser to render the rest of the page incorrectly, since everything after it may be treated as nested content.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always close every non-void tag, even if the browser would tolerate leaving it open. It keeps your markup predictable and easy to debug.',
    },
  ],

  quiz: [
    {
      question: 'What is the difference between a tag and an element?',
      options: [
        'There is no difference',
        'A tag is the markup; an element is the tag plus its content',
        'An element is only used in the head',
        'A tag can only be used once per page',
      ],
      answer: 1,
    },
    {
      question: 'Which of these is a void element?',
      options: ['<p>', '<div>', '<img>', '<span>'],
      answer: 2,
    },
    {
      question: 'When nesting elements, in what order must closing tags appear?',
      options: [
        'Any order',
        'Alphabetical order',
        'The reverse order they were opened',
        'The same order they were opened',
      ],
      answer: 2,
    },
  ],

  previous: 'basic-structure',
  next: 'attributes',
};
