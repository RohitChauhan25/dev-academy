import { Tutorial } from '@/app/types/tutorial';

export const textFormatting: Tutorial = {
  slug: 'text-formatting',

  title: 'Text Formatting',

  description:
    'Learn the HTML elements used to emphasize, format, and structure inline text such as bold, italic, and superscript.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 8 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'Formatting Text',
      content:
        'HTML includes several inline elements for formatting small pieces of text within a larger block, such as a sentence inside a paragraph.',
    },

    {
      type: 'code',
      title: 'Common Formatting Elements',
      language: 'html',
      code: `<p><strong>Important</strong> text and <em>emphasized</em> text.</p>
<p><b>Bold</b>, <i>italic</i>, and <u>underlined</u> text.</p>
<p>H<sub>2</sub>O and 2<sup>10</sup></p>
<p><small>Fine print text</small></p>
<p><mark>Highlighted</mark> text</p>
<p><del>Deleted</del> and <ins>inserted</ins> text</p>`,
    },

    {
      type: 'table',
      title: 'Formatting Elements',
      headers: ['Tag', 'Meaning'],
      rows: [
        ['<strong>', 'Strong importance (rendered bold)'],
        ['<em>', 'Emphasis (rendered italic)'],
        ['<b>', 'Bold text with no added importance'],
        ['<i>', 'Italic text, e.g. a technical term or foreign phrase'],
        ['<mark>', 'Highlighted / marked text'],
        ['<small>', 'Side comments or fine print'],
        ['<del>', 'Text that has been removed'],
        ['<ins>', 'Text that has been inserted'],
        ['<sub>', 'Subscript text'],
        ['<sup>', 'Superscript text'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Semantic vs Visual Tags',
      content:
        '<strong> and <em> carry semantic meaning — screen readers announce them differently — while <b> and <i> are purely visual with no added meaning. Prefer the semantic versions unless you specifically want styling with no meaning attached.',
    },

    {
      type: 'code',
      title: 'Line Breaks and Horizontal Rules',
      language: 'html',
      code: `<p>First line<br />Second line</p>
<hr />`,
    },

    {
      type: 'note',
      title: 'br vs Paragraphs',
      content:
        '<br> forces a line break within the same block of text. It should not be used to create space between paragraphs — use separate <p> elements or CSS margin for that instead.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Choose formatting tags based on meaning, not appearance. If you just want text to look different, use CSS; use <strong>/<em> when the meaning of the text actually changes.',
    },
  ],

  quiz: [
    {
      question: 'Which tag conveys semantic strong importance and is rendered bold by default?',
      options: ['<b>', '<strong>', '<mark>', '<bold>'],
      answer: 1,
    },
    {
      question: 'Which element inserts a single line break?',
      options: ['<break>', '<lb>', '<br>', '<newline>'],
      answer: 2,
    },
    {
      question: 'What is the main difference between <b> and <strong>?',
      options: [
        'There is no difference',
        '<strong> carries semantic importance, <b> is purely visual',
        '<b> only works inside <p>',
        '<strong> is deprecated',
      ],
      answer: 1,
    },
  ],

  previous: 'headings-and-paragraphs',
  next: 'links',
};
