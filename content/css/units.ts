import { Tutorial } from '@/app/types/tutorial';

export const units: Tutorial = {
  slug: 'units',

  title: 'Units & Values',

  description:
    'Learn the difference between absolute and relative CSS units, and when to use px, %, em, rem, vw, and vh.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 6 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Absolute vs Relative Units',
      content:
        'CSS units fall into two categories: absolute units, which always represent the same physical size, and relative units, which scale based on another value like the parent’s font size or the viewport.',
    },

    {
      type: 'table',
      title: 'Common Units',
      headers: ['Unit', 'Type', 'Relative To'],
      rows: [
        ['px', 'Absolute', 'A fixed pixel size'],
        ['%', 'Relative', 'The parent element’s corresponding size'],
        ['em', 'Relative', 'The current element’s font size'],
        ['rem', 'Relative', 'The root (<html>) element’s font size'],
        ['vw', 'Relative', '1% of the viewport width'],
        ['vh', 'Relative', '1% of the viewport height'],
      ],
    },

    {
      type: 'code',
      title: 'em vs rem',
      language: 'html',
      code: `<style>
  html { font-size: 16px; }
  .parent { font-size: 20px; }
  .em-box { font-size: 1.5em; }   /* 1.5 x 20px = 30px */
  .rem-box { font-size: 1.5rem; } /* 1.5 x 16px = 24px, ignores parent */
</style>

<div class="parent">
  <p class="em-box">Sized with em (relative to parent)</p>
  <p class="rem-box">Sized with rem (relative to root)</p>
</div>`,
    },

    {
      type: 'paragraph',
      title: 'Viewport Units',
      content:
        'vw and vh are based on the browser’s viewport size, making them useful for full-height sections or text that scales with screen size.',
    },

    {
      type: 'code',
      title: 'Viewport Units Example',
      language: 'html',
      code: `<style>
  .hero {
    width: 100%;
    height: 40vh;
    background: linear-gradient(to right, #4facfe, #00f2fe);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 5vw;
  }
</style>

<div class="hero">Hero Section</div>`,
    },

    {
      type: 'paragraph',
      title: 'Percentages',
      content:
        'Percentage values are always relative to some property of the parent element — for example, width: 50% means half the parent’s width, while height: 50% requires the parent to have an explicit height.',
    },

    {
      type: 'note',
      title: 'Unitless Line Height',
      content:
        'line-height is one of the few properties commonly given without a unit (e.g. line-height: 1.5). A unitless value scales with the element’s own font size, which is usually what you want.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use rem for font sizes and spacing so everything scales consistently with the user’s root font size (important for accessibility), and reserve px for things that should never scale, like a 1px border.',
    },
  ],

  quiz: [
    {
      question: 'What is rem relative to?',
      options: [
        'The parent element’s font size',
        'The root (<html>) element’s font size',
        'The viewport width',
        'The browser default only'
      ],
      answer: 1,
    },
    {
      question: 'What is em relative to?',
      options: [
        'The root element’s font size',
        'The viewport height',
        'The current element’s own font size',
        'A fixed 16px'
      ],
      answer: 2,
    },
    {
      question: 'What does 1vw represent?',
      options: [
        '1 pixel',
        '1% of the viewport width',
        '1% of the parent’s width',
        '1% of the root font size'
      ],
      answer: 1,
    },
  ],

  previous: 'colors',
  next: 'box-model',
};
