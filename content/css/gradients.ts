import { Tutorial } from '@/app/types/tutorial';

export const gradients: Tutorial = {
  slug: 'gradients',

  title: 'Gradients',

  description:
    'Learn how to create smooth color transitions with linear, radial, and conic gradients.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 28 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Gradient?',
      content:
        'A gradient is a smooth transition between two or more colors. In CSS, gradients are images — they’re used anywhere an image is expected, most commonly with background-image.',
    },

    {
      type: 'code',
      title: 'linear-gradient',
      language: 'html',
      code: `<style>
  .box {
    height: 100px;
    background: linear-gradient(to right, #667eea, #764ba2);
  }
</style>

<div class="box"></div>`,
    },

    {
      type: 'paragraph',
      title: 'Gradient Direction',
      content:
        'linear-gradient accepts a direction as a keyword (to right, to bottom left) or an angle in degrees (45deg), followed by two or more color stops.',
    },

    {
      type: 'code',
      title: 'Angles and Multiple Color Stops',
      language: 'html',
      code: `<style>
  .box {
    height: 100px;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%);
  }
</style>

<div class="box"></div>`,
    },

    {
      type: 'paragraph',
      title: 'radial-gradient',
      content:
        'radial-gradient radiates outward from a center point instead of along a straight line, useful for spotlight or glow effects.',
    },

    {
      type: 'code',
      title: 'radial-gradient',
      language: 'html',
      code: `<style>
  .spot {
    height: 120px;
    background: radial-gradient(circle at center, #ffffff, #4facfe 70%);
  }
</style>

<div class="spot"></div>`,
    },

    {
      type: 'paragraph',
      title: 'conic-gradient',
      content:
        'conic-gradient sweeps colors around a center point like a color wheel or pie chart, rather than radiating outward.',
    },

    {
      type: 'code',
      title: 'conic-gradient',
      language: 'html',
      code: `<style>
  .wheel {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: conic-gradient(red, orange, yellow, green, blue, violet, red);
  }
</style>

<div class="wheel"></div>`,
    },

    {
      type: 'table',
      title: 'Gradient Types',
      headers: ['Function', 'Direction'],
      rows: [
        ['linear-gradient()', 'Along a straight line at a given angle'],
        ['radial-gradient()', 'Radiating outward from a center point'],
        ['conic-gradient()', 'Sweeping around a center point, like a color wheel'],
      ],
    },

    {
      type: 'note',
      title: 'Gradients Can Be Combined with Images',
      content:
        'Multiple background-image values, including gradients and url() images, can be layered together, comma-separated — useful for tinting a photo with a gradient overlay.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use online gradient generators or your browser’s DevTools color picker to fine-tune color stops — small angle and stop-position changes make a big visual difference.',
    },
  ],

  quiz: [
    {
      question: 'Which function creates a gradient that radiates outward from a center point?',
      options: ['linear-gradient()', 'radial-gradient()', 'conic-gradient()', 'circle-gradient()'],
      answer: 1,
    },
    {
      question: 'Which function sweeps colors around a center point like a color wheel?',
      options: ['linear-gradient()', 'radial-gradient()', 'conic-gradient()', 'spin-gradient()'],
      answer: 2,
    },
    {
      question: 'How are gradients typically applied to an element?',
      options: [
        'With the color property',
        'With background-image (or the background shorthand)',
        'With border property',
        'With the gradient property',
      ],
      answer: 1,
    },
  ],

  previous: 'shadows-and-filters',
  next: 'css-functions',
};
