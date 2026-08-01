import { Tutorial } from '@/app/types/tutorial';

export const overflow: Tutorial = {
  slug: 'overflow',

  title: 'Overflow & Visibility',

  description:
    'Learn how to control content that exceeds the size of its container using the overflow property.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 16 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is Overflow?',
      content:
        'Overflow happens when content is larger than the box that contains it. The overflow property decides what happens to the content that doesn’t fit.',
    },

    {
      type: 'table',
      title: 'overflow Values',
      headers: ['Value', 'Behavior'],
      rows: [
        ['visible', 'Default. Content spills outside the box, unclipped'],
        ['hidden', 'Extra content is clipped and invisible'],
        ['scroll', 'Always shows scrollbars, even if not needed'],
        ['auto', 'Shows scrollbars only when content actually overflows'],
      ],
    },

    {
      type: 'code',
      title: 'overflow: auto',
      language: 'html',
      code: `<style>
  .scroll-box {
    width: 250px;
    height: 100px;
    overflow: auto;
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>

<div class="scroll-box">
  This box has a fixed height, and this text is long enough
  to overflow it, so a scrollbar automatically appears thanks
  to overflow: auto. Keep scrolling to see the rest of this
  paragraph inside the scrollable box.
</div>`,
    },

    {
      type: 'paragraph',
      title: 'overflow-x and overflow-y',
      content:
        'overflow can also be controlled independently per axis with overflow-x (horizontal) and overflow-y (vertical), useful for horizontally scrolling carousels while keeping vertical overflow hidden.',
    },

    {
      type: 'code',
      title: 'Horizontal Scroll Only',
      language: 'html',
      code: `<style>
  .carousel {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 10px;
    width: 260px;
  }
  .carousel div {
    flex: 0 0 100px;
    height: 60px;
    background: steelblue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="carousel">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>`,
    },

    {
      type: 'paragraph',
      title: 'Truncating Text with Ellipsis',
      content:
        'A common pattern combines overflow: hidden, text-overflow: ellipsis, and white-space: nowrap to truncate long text with a trailing "…" instead of wrapping or overflowing.',
    },

    {
      type: 'code',
      title: 'Text Truncation',
      language: 'html',
      code: `<style>
  .truncate {
    width: 180px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 1px solid #ccc;
    padding: 4px 8px;
  }
</style>

<div class="truncate">This is a long piece of text that will be truncated</div>`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Prefer overflow: auto over overflow: scroll in most cases — it avoids showing empty scrollbars when there’s nothing to scroll, giving a cleaner default appearance.',
    },
  ],

  quiz: [
    {
      question: 'Which overflow value clips extra content without showing a scrollbar?',
      options: ['visible', 'hidden', 'auto', 'scroll'],
      answer: 1,
    },
    {
      question: 'Which overflow value only shows a scrollbar when content actually overflows?',
      options: ['scroll', 'hidden', 'auto', 'visible'],
      answer: 2,
    },
    {
      question: 'Which three properties combine to truncate text with an ellipsis?',
      options: [
        'overflow: hidden, text-overflow: ellipsis, white-space: nowrap',
        'display: none, visibility: hidden, opacity: 0',
        'overflow: scroll, text-align: center, font-size: 12px',
        'white-space: pre, overflow: visible, text-overflow: clip',
      ],
      answer: 0,
    },
  ],

  previous: 'grid',
  next: 'z-index-and-stacking',
};
