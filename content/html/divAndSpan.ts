import { Tutorial } from '@/app/types/tutorial';

export const divAndSpan: Tutorial = {
  slug: 'div-and-span',

  title: 'Div & Span',

  description:
    'Learn how to group content using the generic div and span container elements, and when to reach for them.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 12 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'Generic Containers',
      content:
        '<div> and <span> carry no semantic meaning of their own. They exist purely to group content so it can be styled with CSS or manipulated with JavaScript.',
    },

    {
      type: 'code',
      title: 'div Example',
      language: 'html',
      code: `<div class="card">
  <h2>Product Name</h2>
  <p>Product description goes here.</p>
</div>`,
    },

    {
      type: 'paragraph',
      title: 'div is Block-Level',
      content:
        '<div> is a block-level element — it starts on a new line and takes up the full available width by default. It is commonly used to group sections of a page, like a card, header, or sidebar.',
    },

    {
      type: 'paragraph',
      title: 'span is Inline',
      content:
        '<span> is an inline element — it does not start on a new line and only takes up as much width as its content. It is used to style or target a small piece of text within a larger block.',
    },

    {
      type: 'code',
      title: 'span Example',
      language: 'html',
      code: `<p>The price is <span class="highlight">$49.99</span> today only.</p>`,
    },

    {
      type: 'table',
      title: 'div vs span',
      headers: ['Element', 'Display', 'Typical Use'],
      rows: [
        ['<div>', 'Block-level', 'Grouping larger sections of content'],
        ['<span>', 'Inline', 'Styling or targeting a piece of text'],
      ],
    },

    {
      type: 'warning',
      title: 'Prefer Semantic Elements First',
      content:
        'Before reaching for <div>, check if a semantic element fits better — <header>, <nav>, <main>, <section>, and <article> all describe their content more meaningfully than a generic <div>.',
    },

    {
      type: 'note',
      title: '"Divitis"',
      content:
        'Overusing <div> for everything is sometimes called "divitis". It makes markup harder to read and less accessible. Reach for semantic HTML5 elements whenever one fits the content.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use <div> and <span> only when no semantic element applies — typically for pure styling hooks or layout wrappers with no inherent meaning.',
    },
  ],

  quiz: [
    {
      question: 'Is <div> a block-level or inline element?',
      options: ['Inline', 'Block-level', 'Neither', 'Both, depending on content'],
      answer: 1,
    },
    {
      question: 'Is <span> a block-level or inline element?',
      options: ['Block-level', 'Inline', 'Neither', 'Both, depending on content'],
      answer: 1,
    },
    {
      question: 'What should you consider before using a <div>?',
      options: [
        'Nothing, always use <div>',
        'Whether a semantic element fits the content better',
        'Whether the page has a <head>',
        'Whether CSS is enabled',
      ],
      answer: 1,
    },
  ],

  previous: 'lists',
  next: 'tables',
};
