import { Tutorial } from '@/app/types/tutorial';

export const shadowsAndFilters: Tutorial = {
  slug: 'shadows-and-filters',

  title: 'Shadows & Filters',

  description:
    'Learn how to add depth and visual effects with box-shadow, text-shadow, and the filter property.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 27 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'box-shadow',
      content:
        'box-shadow adds a shadow around an element’s box, defined by horizontal offset, vertical offset, blur radius, optional spread, and a color.',
    },

    {
      type: 'code',
      title: 'box-shadow',
      language: 'html',
      code: `<style>
  .card {
    width: 160px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
</style>

<div class="card">Card with a soft shadow</div>`,
    },

    {
      type: 'table',
      title: 'box-shadow Values',
      headers: ['Value', 'Meaning'],
      rows: [
        ['offset-x', 'Horizontal shadow position'],
        ['offset-y', 'Vertical shadow position'],
        ['blur-radius', 'How blurred the shadow edge is'],
        ['spread-radius', 'How much the shadow expands or shrinks (optional)'],
        ['color', 'The shadow’s color, usually with some transparency'],
        ['inset', 'Makes the shadow appear inside the box instead of outside'],
      ],
    },

    {
      type: 'code',
      title: 'Multiple Shadows and inset',
      language: 'html',
      code: `<style>
  .layered {
    width: 160px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow:
      0 1px 2px rgba(0,0,0,0.1),
      0 8px 20px rgba(0,0,0,0.15);
  }
  .pressed {
    width: 160px;
    padding: 20px;
    background: #eee;
    border-radius: 8px;
    box-shadow: inset 0 2px 6px rgba(0,0,0,0.3);
  }
</style>

<div style="display: flex; gap: 20px;">
  <div class="layered">Layered shadow</div>
  <div class="pressed">Inset shadow</div>
</div>`,
    },

    {
      type: 'paragraph',
      title: 'text-shadow',
      content:
        'text-shadow works similarly to box-shadow but applies to the glyphs of text, taking offset-x, offset-y, blur-radius, and color.',
    },

    {
      type: 'code',
      title: 'text-shadow',
      language: 'html',
      code: `<style>
  .glow {
    color: white;
    background: #222;
    padding: 20px;
    text-align: center;
    text-shadow: 0 0 8px #4facfe;
    font-size: 24px;
  }
</style>

<div class="glow">Glowing Text</div>`,
    },

    {
      type: 'paragraph',
      title: 'The filter Property',
      content:
        'filter applies graphical effects like blur, brightness, and grayscale — often used for image effects or hover states.',
    },

    {
      type: 'code',
      title: 'filter Examples',
      language: 'html',
      code: `<style>
  .swatch {
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, #667eea, #f093fb);
    display: inline-block;
    margin-right: 10px;
  }
  .blurred { filter: blur(3px); }
  .grayscale { filter: grayscale(100%); }
  .bright { filter: brightness(1.4); }
</style>

<div class="swatch"></div>
<div class="swatch blurred"></div>
<div class="swatch grayscale"></div>
<div class="swatch bright"></div>`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use subtle, low-opacity shadows for a natural sense of elevation rather than large, dark, sharply defined ones — real-world shadows are soft and semi-transparent.',
    },
  ],

  quiz: [
    {
      question: 'Which value makes a box-shadow appear inside the element instead of outside?',
      options: ['spread', 'inset', 'inner', 'reverse'],
      answer: 1,
    },
    {
      question: 'Which property adds a shadow to text glyphs specifically?',
      options: ['box-shadow', 'text-shadow', 'filter: shadow', 'outline'],
      answer: 1,
    },
    {
      question: 'Which property applies effects like blur() or grayscale() to an element?',
      options: ['transform', 'filter', 'shadow', 'effect'],
      answer: 1,
    },
  ],

  previous: 'transforms',
  next: 'gradients',
};
