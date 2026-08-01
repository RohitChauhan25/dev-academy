import { Tutorial } from '@/app/types/tutorial';

export const blockVsInline: Tutorial = {
  slug: 'block-vs-inline',

  title: 'Block vs Inline Elements',

  description:
    'Understand the difference between block-level and inline elements, and how it affects page layout.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 18 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'Two Display Behaviors',
      content:
        'Every HTML element has a default display behavior: block-level or inline. This determines whether it starts on a new line and how much space it takes up.',
    },

    {
      type: 'table',
      title: 'Block vs Inline',
      headers: ['', 'Block-Level', 'Inline'],
      rows: [
        ['Starts on new line', 'Yes', 'No'],
        ['Takes full width by default', 'Yes', 'No, only as wide as content'],
        ['Can set width/height', 'Yes', 'No (without changing display)'],
        ['Examples', '<div>, <p>, <h1>–<h6>, <ul>, <section>', '<span>, <a>, <strong>, <em>, <img>'],
      ],
    },

    {
      type: 'code',
      title: 'Block-Level Example',
      language: 'html',
      code: `<div>First block</div>
<div>Second block</div>
<!-- Each div appears on its own line -->`,
    },

    {
      type: 'code',
      title: 'Inline Example',
      language: 'html',
      code: `<span>First</span><span>Second</span>
<!-- Both spans appear on the same line, side by side -->`,
    },

    {
      type: 'paragraph',
      title: 'img is a Special Case',
      content:
        '<img> is inline-level by default but, unlike text-based inline elements, it does accept width and height because it is treated as a replaced element.',
    },

    {
      type: 'note',
      title: 'CSS Can Change display',
      content:
        'The default block/inline behavior is just a starting point — CSS’s display property (block, inline, inline-block, flex, grid, none) can override it for any element.',
    },

    {
      type: 'warning',
      title: 'Invalid Nesting',
      content:
        'Block-level elements generally should not be placed inside inline elements — for example, putting a <div> inside a <span> is invalid and can cause unpredictable rendering.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Choose elements based on their semantic meaning first; use CSS display properties afterward if you need different visual behavior than the default.',
    },
  ],

  quiz: [
    {
      question: 'Does a block-level element start on a new line by default?',
      options: ['Yes', 'No', 'Only if styled with CSS', 'Only inside a <div>'],
      answer: 0,
    },
    {
      question: 'Which of these is an inline element by default?',
      options: ['<div>', '<p>', '<span>', '<section>'],
      answer: 2,
    },
    {
      question: 'What CSS property can override an element’s default block/inline behavior?',
      options: ['position', 'display', 'float', 'visibility'],
      answer: 1,
    },
  ],

  previous: 'semantic-html',
  next: 'classes-and-ids',
};
