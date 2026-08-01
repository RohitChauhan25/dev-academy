import { Tutorial } from '@/app/types/tutorial';

export const lists: Tutorial = {
  slug: 'lists',

  title: 'HTML Lists',

  description:
    'Learn how to create ordered, unordered, and description lists, and how to nest lists inside one another.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 11 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'Types of Lists',
      content:
        'HTML provides three list types: unordered lists for items with no particular sequence, ordered lists for sequential items, and description lists for term/definition pairs.',
    },

    {
      type: 'code',
      title: 'Unordered List',
      language: 'html',
      code: `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`,
    },

    {
      type: 'code',
      title: 'Ordered List',
      language: 'html',
      code: `<ol>
  <li>Preheat the oven</li>
  <li>Mix the ingredients</li>
  <li>Bake for 30 minutes</li>
</ol>`,
    },

    {
      type: 'table',
      title: 'List Elements',
      headers: ['Element', 'Purpose'],
      rows: [
        ['<ul>', 'Unordered (bulleted) list'],
        ['<ol>', 'Ordered (numbered) list'],
        ['<li>', 'A single list item, used inside <ul> or <ol>'],
        ['<dl>', 'Description list'],
        ['<dt>', 'A term inside a description list'],
        ['<dd>', 'The description of a term'],
      ],
    },

    {
      type: 'code',
      title: 'Description List',
      language: 'html',
      code: `<dl>
  <dt>HTML</dt>
  <dd>The markup language used to structure web pages.</dd>

  <dt>CSS</dt>
  <dd>The language used to style web pages.</dd>
</dl>`,
    },

    {
      type: 'paragraph',
      title: 'Nesting Lists',
      content:
        'Lists can be nested by placing a new <ul> or <ol> inside an <li> element, useful for sub-items or multi-level navigation menus.',
    },

    {
      type: 'code',
      title: 'Nested List',
      language: 'html',
      code: `<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>`,
    },

    {
      type: 'paragraph',
      title: 'Customizing Ordered Lists',
      content:
        'The <ol> element accepts a start attribute to begin at a number other than 1, and a type attribute to change the numbering style (1, A, a, I, i).',
    },

    {
      type: 'code',
      title: 'Ordered List Attributes',
      language: 'html',
      code: `<ol start="5" type="A">
  <li>Item E</li>
  <li>Item F</li>
</ol>`,
    },

    {
      type: 'warning',
      title: 'li Must Be a Direct Child',
      content:
        '<li> elements must be direct children of <ul> or <ol>. Placing other elements directly inside a list (without an <li> wrapper) is invalid HTML.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use <ul> when order doesn’t matter and <ol> when it does (like steps in a recipe). Use CSS, not the type attribute, to style bullet appearance unless you specifically need the semantic numbering style.',
    },
  ],

  quiz: [
    {
      question: 'Which element creates a numbered list?',
      options: ['<ul>', '<ol>', '<list>', '<dl>'],
      answer: 1,
    },
    {
      question: 'What must be the direct parent of an <li> element?',
      options: ['<div>', '<ul> or <ol>', '<span>', '<section>'],
      answer: 1,
    },
    {
      question: 'Which element pairs a term with its definition?',
      options: ['<ul>', '<ol>', '<dl>', '<table>'],
      answer: 2,
    },
  ],

  previous: 'images',
  next: 'div-and-span',
};
