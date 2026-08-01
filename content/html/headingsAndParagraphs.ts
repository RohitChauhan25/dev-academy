import { Tutorial } from '@/app/types/tutorial';

export const headingsAndParagraphs: Tutorial = {
  slug: 'headings-and-paragraphs',

  title: 'Headings & Paragraphs',

  description:
    'Structure text content correctly using heading levels and paragraphs, and understand why heading hierarchy matters.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 7 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'Headings',
      content:
        'HTML provides six levels of headings, from <h1> (most important) to <h6> (least important). Headings give text structure and help both readers and search engines understand the page outline.',
    },

    {
      type: 'code',
      title: 'Heading Levels',
      language: 'html',
      code: `<h1>Main Page Title</h1>
<h2>Section Heading</h2>
<h3>Sub-section Heading</h3>
<h4>Smaller Heading</h4>
<h5>Even Smaller</h5>
<h6>Smallest Heading</h6>`,
    },

    {
      type: 'paragraph',
      title: 'Paragraphs',
      content:
        'The <p> element defines a paragraph of text. Browsers automatically add space before and after each paragraph.',
    },

    {
      type: 'code',
      title: 'Paragraph Example',
      language: 'html',
      code: `<p>HTML paragraphs are used to group related sentences into blocks of text.</p>
<p>Each new paragraph starts on its own line.</p>`,
    },

    {
      type: 'table',
      title: 'Heading Usage',
      headers: ['Heading', 'Typical Use'],
      rows: [
        ['<h1>', 'The single main title of the page'],
        ['<h2>', 'Major section headings'],
        ['<h3>–<h6>', 'Nested sub-sections, in decreasing importance'],
      ],
    },

    {
      type: 'note',
      title: 'One <h1> Per Page',
      content:
        'Best practice is to use exactly one <h1> per page — it should describe the main topic of the page, similar to a book title.',
    },

    {
      type: 'warning',
      title: 'Do Not Skip Levels for Styling',
      content:
        'Never choose a heading level just because of its default font size (e.g. using <h3> because it looks smaller). Use CSS for styling and choose heading levels based on document structure instead.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Keep heading levels in order (h1 → h2 → h3) without skipping levels. This creates a logical outline that screen readers use for navigation.',
    },
  ],

  quiz: [
    {
      question: 'How many heading levels does HTML provide?',
      options: ['3', '4', '5', '6'],
      answer: 3,
    },
    {
      question: 'How many <h1> elements should a well-structured page typically have?',
      options: ['As many as needed', 'Exactly one', 'Zero', 'At least two'],
      answer: 1,
    },
    {
      question: 'Which element is used to define a paragraph?',
      options: ['<par>', '<paragraph>', '<p>', '<text>'],
      answer: 2,
    },
  ],

  previous: 'comments',
  next: 'text-formatting',
};
