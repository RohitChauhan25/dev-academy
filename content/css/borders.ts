import { Tutorial } from '@/app/types/tutorial';

export const borders: Tutorial = {
  slug: 'borders',

  title: 'Borders & Border Radius',

  description:
    'Learn how to style element borders and create rounded corners with border-radius.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 10 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'The border Shorthand',
      content:
        'The border property combines width, style, and color into a single declaration: border: width style color.',
    },

    {
      type: 'code',
      title: 'Basic Border',
      language: 'html',
      code: `<style>
  .box {
    border: 2px solid #333;
    padding: 16px;
  }
</style>

<div class="box">A box with a solid border</div>`,
    },

    {
      type: 'table',
      title: 'Border Styles',
      headers: ['Value', 'Appearance'],
      rows: [
        ['solid', 'A single continuous line'],
        ['dashed', 'A series of dashes'],
        ['dotted', 'A series of dots'],
        ['double', 'Two parallel lines'],
        ['none', 'No border'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Styling Individual Sides',
      content:
        'Each side of the border can be styled independently using border-top, border-right, border-bottom, and border-left.',
    },

    {
      type: 'code',
      title: 'Single-Side Border',
      language: 'html',
      code: `<style>
  .quote {
    border-left: 4px solid steelblue;
    padding-left: 12px;
    color: #555;
    font-style: italic;
  }
</style>

<p class="quote">A quote with only a left border accent.</p>`,
    },

    {
      type: 'paragraph',
      title: 'Rounded Corners',
      content:
        'border-radius rounds an element’s corners. A single value rounds all four corners equally; four values control each corner independently.',
    },

    {
      type: 'code',
      title: 'border-radius',
      language: 'html',
      code: `<style>
  .rounded {
    border: 2px solid #764ba2;
    border-radius: 12px;
    padding: 16px;
  }
  .circle {
    width: 80px;
    height: 80px;
    background: #667eea;
    border-radius: 50%;
  }
</style>

<div class="rounded">Rounded corners</div>
<div class="circle"></div>`,
    },

    {
      type: 'note',
      title: 'Perfect Circles',
      content:
        'Setting border-radius: 50% on a square element (equal width and height) produces a perfect circle — a common technique for avatars and icon buttons.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use consistent border-radius values across your design (e.g. always 4px, 8px, or 16px) rather than arbitrary numbers, to keep the interface feeling cohesive.',
    },
  ],

  quiz: [
    {
      question: 'Which shorthand sets width, style, and color in one declaration?',
      options: ['border-style', 'border', 'outline', 'box-border'],
      answer: 1,
    },
    {
      question: 'Which property rounds an element’s corners?',
      options: ['border-round', 'corner-radius', 'border-radius', 'radius'],
      answer: 2,
    },
    {
      question: 'What border-radius value turns a square box into a circle?',
      options: ['10px', '25%', '50%', '100px'],
      answer: 2,
    },
  ],

  previous: 'backgrounds',
  next: 'margin-and-padding',
};
