import { Tutorial } from '@/app/types/tutorial';

export const position: Tutorial = {
  slug: 'position',

  title: 'Positioning',

  description:
    'Learn the five CSS position values — static, relative, absolute, fixed, and sticky — and how they affect layout.',

  level: 'Intermediate',

  readingTime: '18 min',

  lesson: 'Lesson 13 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'The position Property',
      content:
        'position controls how an element is placed in the document, and works together with top, right, bottom, and left to offset it.',
    },

    {
      type: 'table',
      title: 'Position Values',
      headers: ['Value', 'Behavior'],
      rows: [
        ['static', 'Default. Normal document flow; top/left/etc. have no effect'],
        ['relative', 'Stays in normal flow, but can be offset from its normal position'],
        ['absolute', 'Removed from flow, positioned relative to nearest positioned ancestor'],
        ['fixed', 'Removed from flow, positioned relative to the viewport, stays put when scrolling'],
        ['sticky', 'Acts relative until a scroll threshold, then sticks like fixed'],
      ],
    },

    {
      type: 'code',
      title: 'relative Positioning',
      language: 'html',
      code: `<style>
  .shifted {
    position: relative;
    top: 10px;
    left: 20px;
    background: #ffeaa7;
    display: inline-block;
    padding: 10px;
  }
</style>

<div class="shifted">Shifted 10px down, 20px right from its normal spot</div>`,
    },

    {
      type: 'paragraph',
      title: 'absolute Positioning',
      content:
        'An absolutely positioned element is removed from normal flow and positioned relative to its nearest ancestor that has a position other than static — commonly used for badges, tooltips, and dropdown menus.',
    },

    {
      type: 'code',
      title: 'absolute Inside relative',
      language: 'html',
      code: `<style>
  .card {
    position: relative;
    width: 200px;
    height: 100px;
    background: #eef4fb;
    border: 1px solid steelblue;
  }
  .badge {
    position: absolute;
    top: 8px;
    right: 8px;
    background: crimson;
    color: white;
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 12px;
  }
</style>

<div class="card">
  <span class="badge">New</span>
  Card content
</div>`,
    },

    {
      type: 'paragraph',
      title: 'fixed and sticky',
      content:
        'fixed keeps an element pinned to the viewport regardless of scrolling — common for sticky headers or "back to top" buttons. sticky behaves like relative until the page scrolls past a threshold, then behaves like fixed within its parent.',
    },

    {
      type: 'code',
      title: 'sticky Header',
      language: 'html',
      code: `<style>
  .scroll-area {
    height: 150px;
    overflow-y: auto;
    border: 1px solid #ccc;
  }
  .sticky-header {
    position: sticky;
    top: 0;
    background: steelblue;
    color: white;
    padding: 8px;
  }
</style>

<div class="scroll-area">
  <div class="sticky-header">Sticky Header</div>
  <p style="padding: 0 8px;">Scroll inside this box...</p>
  <p style="padding: 0 8px;">More content...</p>
  <p style="padding: 0 8px;">Even more content...</p>
  <p style="padding: 0 8px;">Keep scrolling...</p>
</div>`,
    },

    {
      type: 'warning',
      title: 'absolute Needs a Positioned Ancestor',
      content:
        'If no ancestor has position: relative, absolute, or fixed, an absolutely positioned element is placed relative to the entire page — a very common source of unexpected layout bugs.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always pair position: absolute with a nearby position: relative parent that acts as its containing box, so the offset behaves predictably.',
    },
  ],

  quiz: [
    {
      question: 'Which position value is the default for every element?',
      options: ['relative', 'static', 'absolute', 'sticky'],
      answer: 1,
    },
    {
      question: 'What is an absolutely positioned element positioned relative to?',
      options: [
        'Always the viewport',
        'Its nearest ancestor with a non-static position',
        'The <body> element only',
        'Its direct parent, always',
      ],
      answer: 1,
    },
    {
      question: 'How does position: sticky behave?',
      options: [
        'Exactly like fixed at all times',
        'Exactly like static at all times',
        'Like relative until a scroll threshold, then like fixed',
        'It removes the element from the page',
      ],
      answer: 2,
    },
  ],

  previous: 'display',
  next: 'flexbox',
};
