import { Tutorial } from '@/app/types/tutorial';

export const introduction: Tutorial = {
  slug: 'introduction',

  title: 'CSS Introduction',

  description:
    'Understand what CSS is, how it styles HTML, and how it works together with HTML and JavaScript to build modern web pages.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 1 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is CSS?',
      content:
        'CSS (Cascading Style Sheets) is the language used to style HTML. It controls colors, fonts, spacing, layout, and animation — everything about how a page looks, without changing the underlying content.',
    },

    {
      type: 'paragraph',
      title: 'How CSS Works',
      content:
        'CSS works by selecting HTML elements and applying rules to them. A rule is made up of a selector (which elements to target) and a declaration block (which styles to apply).',
    },

    {
      type: 'code',
      title: 'Your First CSS Rule',
      language: 'html',
      code: `<style>
  p {
    color: steelblue;
    font-size: 20px;
  }
</style>

<p>This paragraph is styled with CSS.</p>
<p>So is this one — the rule applies to every &lt;p&gt;.</p>`,
    },

    {
      type: 'table',
      title: 'Quick Facts',
      headers: ['Feature', 'Value'],
      rows: [
        ['Stands For', 'Cascading Style Sheets'],
        ['First Released', '1996'],
        ['Maintained By', 'W3C (CSS Working Group)'],
        ['File Extension', '.css'],
        ['Works With', 'HTML and JavaScript'],
      ],
    },

    {
      type: 'paragraph',
      title: 'The Cascade',
      content:
        '"Cascading" describes how CSS resolves conflicts when multiple rules target the same element — styles cascade based on source order, specificity, and importance, with later, more specific, or "!important" rules typically winning.',
    },

    {
      type: 'list',
      title: 'What CSS Can Control',
      items: [
        'Colors and backgrounds',
        'Typography — fonts, size, spacing',
        'Layout — position, size, and alignment of elements',
        'Responsive behavior across screen sizes',
        'Transitions and animations',
      ],
    },

    {
      type: 'note',
      title: 'HTML, CSS, and JavaScript',
      content:
        'HTML provides structure, CSS provides presentation, and JavaScript provides behavior. Learning HTML first makes CSS click faster, since every CSS rule needs elements to target.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Keep style out of your HTML as much as possible — use CSS rules in a stylesheet rather than inline styles, so your markup stays clean and your styling stays reusable.',
    },
  ],

  quiz: [
    {
      question: 'What does CSS stand for?',
      options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Styling System', 'Colorful Style Sheets'],
      answer: 1,
    },
    {
      question: 'What are the two main parts of a CSS rule?',
      options: [
        'Tag and attribute',
        'Selector and declaration block',
        'Element and class',
        'Property and unit',
      ],
      answer: 1,
    },
    {
      question: 'What does "cascading" refer to in CSS?',
      options: [
        'How styles scroll down the page',
        'How conflicting rules are resolved based on order, specificity, and importance',
        'A type of CSS animation',
        'How CSS files are loaded',
      ],
      answer: 1,
    },
  ],

  next: 'setup',
};
