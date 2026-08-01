import { Tutorial } from '@/app/types/tutorial';

export const transforms: Tutorial = {
  slug: 'transforms',

  title: 'Transforms',

  description:
    'Learn how to move, rotate, scale, and skew elements visually using the transform property.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 26 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is transform?',
      content:
        'The transform property applies visual transformations to an element — moving, rotating, scaling, or skewing it — without affecting the layout of surrounding elements.',
    },

    {
      type: 'table',
      title: 'Common Transform Functions',
      headers: ['Function', 'Effect'],
      rows: [
        ['translate(x, y)', 'Moves the element'],
        ['rotate(deg)', 'Rotates the element'],
        ['scale(x, y)', 'Resizes the element'],
        ['skew(x, y)', 'Slants the element along an axis'],
      ],
    },

    {
      type: 'code',
      title: 'translate and rotate',
      language: 'html',
      code: `<style>
  .box {
    width: 80px;
    height: 80px;
    background: steelblue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .moved {
    transform: translate(30px, 10px);
  }
  .rotated {
    transform: rotate(15deg);
  }
</style>

<div style="display: flex; gap: 40px; padding: 10px;">
  <div class="box moved">Moved</div>
  <div class="box rotated">Rotated</div>
</div>`,
    },

    {
      type: 'code',
      title: 'scale on Hover',
      language: 'html',
      code: `<style>
  .scale-box {
    width: 80px;
    height: 80px;
    background: crimson;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
  }
  .scale-box:hover {
    transform: scale(1.2);
  }
</style>

<div class="scale-box">Hover</div>`,
    },

    {
      type: 'paragraph',
      title: 'Combining Multiple Transforms',
      content:
        'Multiple functions can be combined in a single transform declaration, applied in the order they’re written — transform: translateX(20px) rotate(10deg) first moves, then rotates.',
    },

    {
      type: 'code',
      title: 'Combined Transforms',
      language: 'css',
      code: `.card {
  transform: translateY(-4px) scale(1.03) rotate(1deg);
}`,
    },

    {
      type: 'paragraph',
      title: 'The transform-origin Property',
      content:
        'transform-origin controls the pivot point transforms are calculated from — by default the center of the element, but it can be moved to a corner or any custom point.',
    },

    {
      type: 'code',
      title: 'Changing the Rotation Origin',
      language: 'html',
      code: `<style>
  .swing {
    width: 60px;
    height: 60px;
    background: #764ba2;
    transform-origin: top left;
    transform: rotate(20deg);
  }
</style>

<div class="swing"></div>`,
    },

    {
      type: 'note',
      title: 'Transforms Don’t Affect Layout',
      content:
        'Unlike changing width, top, or margin, a transform is purely visual — it doesn’t reflow surrounding content, which makes it ideal for smooth, performant animations.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Combine transform with transition for hover/focus effects instead of animating layout properties like top or width — it looks smoother and performs significantly better.',
    },
  ],

  quiz: [
    {
      question: 'Which transform function moves an element without affecting layout?',
      options: ['margin', 'translate()', 'padding', 'top'],
      answer: 1,
    },
    {
      question: 'What does transform-origin control?',
      options: [
        'The animation duration',
        'The pivot point transforms are calculated from',
        'The element’s color',
        'Whether the transform is visible',
      ],
      answer: 1,
    },
    {
      question: 'Why is transform preferred over animating top/width for movement?',
      options: [
        'It requires less CSS syntax',
        'It doesn’t trigger layout reflow, so it animates more smoothly',
        'top and width cannot be changed at all',
        'transform works only in Chrome',
      ],
      answer: 1,
    },
  ],

  previous: 'animations',
  next: 'shadows-and-filters',
};
