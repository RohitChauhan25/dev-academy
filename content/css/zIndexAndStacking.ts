import { Tutorial } from '@/app/types/tutorial';

export const zIndexAndStacking: Tutorial = {
  slug: 'z-index-and-stacking',

  title: 'z-index & Stacking',

  description:
    'Learn how z-index controls the stacking order of overlapping elements, and how stacking contexts affect it.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 17 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is z-index?',
      content:
        'When elements overlap, z-index controls which one appears on top. Elements with a higher z-index are drawn in front of elements with a lower one. It only applies to positioned elements (anything other than position: static).',
    },

    {
      type: 'code',
      title: 'Basic z-index',
      language: 'html',
      code: `<style>
  .box {
    position: absolute;
    width: 100px;
    height: 100px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .back {
    background: steelblue;
    top: 20px;
    left: 20px;
    z-index: 1;
  }
  .front {
    background: crimson;
    top: 50px;
    left: 70px;
    z-index: 2;
  }
</style>

<div style="position: relative; height: 160px;">
  <div class="box back">Back</div>
  <div class="box front">Front</div>
</div>`,
    },

    {
      type: 'paragraph',
      title: 'z-index Requires Positioning',
      content:
        'z-index has no effect on an element with the default position: static. It only works on elements positioned with relative, absolute, fixed, or sticky.',
    },

    {
      type: 'paragraph',
      title: 'Stacking Contexts',
      content:
        'z-index values are not compared globally — they are compared within the same stacking context. Certain properties (like opacity < 1, transform, or filter) create a new stacking context, which can trap child z-index values inside it, isolated from the rest of the page.',
    },

    {
      type: 'table',
      title: 'Common Stacking Context Triggers',
      headers: ['Property', 'Effect'],
      rows: [
        ['position + z-index', 'The most common way to create a new stacking context'],
        ['opacity less than 1', 'Creates a new stacking context'],
        ['transform (any value but none)', 'Creates a new stacking context'],
        ['filter', 'Creates a new stacking context'],
      ],
    },

    {
      type: 'warning',
      title: 'A Common z-index Pitfall',
      content:
        'A child with z-index: 9999 can still appear behind another element if its parent has a lower z-index and both are in separate stacking contexts — the child can never escape its parent’s stacking context.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Keep a small, documented scale of z-index values across your project (e.g. 10 for dropdowns, 100 for modals, 1000 for tooltips) instead of arbitrary large numbers, to avoid unpredictable stacking battles.',
    },
  ],

  quiz: [
    {
      question: 'Does z-index affect elements with position: static?',
      options: ['Yes, always', 'No, it has no effect', 'Only on images', 'Only in Chrome'],
      answer: 1,
    },
    {
      question: 'What can create a new stacking context besides positioning with z-index?',
      options: ['color', 'opacity less than 1', 'font-size', 'text-align'],
      answer: 1,
    },
    {
      question: 'Why might a child with z-index: 9999 still appear behind another element?',
      options: [
        'z-index only works on text',
        'Its parent may be in a separate stacking context with a lower z-index',
        'z-index values above 100 are ignored',
        'It needs !important',
      ],
      answer: 1,
    },
  ],

  previous: 'overflow',
  next: 'pseudo-classes',
};
