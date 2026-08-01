import { Tutorial } from '@/app/types/tutorial';

export const cssFunctions: Tutorial = {
  slug: 'css-functions',

  title: 'CSS Functions',

  description:
    'Learn how to use calc(), clamp(), min(), and max() to write flexible, dynamic CSS values.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 29 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'calc()',
      content:
        'calc() performs math directly in a CSS value, and can mix different units — something you cannot do with plain arithmetic in CSS otherwise.',
    },

    {
      type: 'code',
      title: 'calc() Example',
      language: 'html',
      code: `<style>
  .sidebar-layout {
    display: flex;
  }
  .sidebar {
    width: 150px;
    background: #764ba2;
  }
  .main {
    width: calc(100% - 150px);
    background: #eef4fb;
  }
  .sidebar-layout > div {
    padding: 16px;
    color: #333;
  }
</style>

<div class="sidebar-layout">
  <div class="sidebar" style="color: white;">Sidebar</div>
  <div class="main">Main content fills exactly the remaining width</div>
</div>`,
    },

    {
      type: 'paragraph',
      title: 'min() and max()',
      content:
        'min() picks the smallest of a list of values, and max() picks the largest — both evaluated at render time, so they respond to viewport or container size changes.',
    },

    {
      type: 'code',
      title: 'min() and max()',
      language: 'html',
      code: `<style>
  .box {
    /* Never wider than 90% of its container, but never more than 300px */
    width: min(300px, 90%);
    background: steelblue;
    color: white;
    padding: 16px;
  }
</style>

<div class="box">Responsive width with min()</div>`,
    },

    {
      type: 'paragraph',
      title: 'clamp()',
      content:
        'clamp(min, preferred, max) picks a value that stays between a minimum and maximum, but prefers a middle value that can scale — extremely useful for fluid font sizes that scale with the viewport without ever getting too small or too large.',
    },

    {
      type: 'code',
      title: 'Fluid Font Size with clamp()',
      language: 'html',
      code: `<style>
  .heading {
    /* never smaller than 20px, never larger than 40px, scales with viewport width between */
    font-size: clamp(20px, 5vw, 40px);
  }
</style>

<h2 class="heading">Resize the preview to see this scale</h2>`,
    },

    {
      type: 'table',
      title: 'Function Summary',
      headers: ['Function', 'Purpose'],
      rows: [
        ['calc()', 'Perform math, mixing units like % and px'],
        ['min()', 'Use the smallest of a list of values'],
        ['max()', 'Use the largest of a list of values'],
        ['clamp(min, preferred, max)', 'Stay within a range while scaling fluidly'],
      ],
    },

    {
      type: 'note',
      title: 'clamp() is min() and max() Combined',
      content:
        'clamp(MIN, VAL, MAX) is roughly equivalent to max(MIN, min(VAL, MAX)) — it’s essentially a convenient shorthand for combining both bounds in one declaration.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use clamp() for fluid typography and spacing instead of writing many separate media queries — it often replaces several breakpoints with a single, smoothly scaling declaration.',
    },
  ],

  quiz: [
    {
      question: 'What does calc() allow that plain CSS values do not?',
      options: [
        'Combining different units in a single math expression',
        'Adding colors together',
        'Running JavaScript in CSS',
        'Loading external files',
      ],
      answer: 0,
    },
    {
      question: 'What does clamp(min, preferred, max) do?',
      options: [
        'Always uses the preferred value',
        'Picks a value that scales but stays within the min/max bounds',
        'Rounds the preferred value to the nearest integer',
        'Ignores the min and max values',
      ],
      answer: 1,
    },
    {
      question: 'Which function is commonly used for fluid font sizes that scale with viewport width?',
      options: ['calc()', 'min()', 'clamp()', 'max()'],
      answer: 2,
    },
  ],

  previous: 'gradients',
  next: 'best-practices',
};
