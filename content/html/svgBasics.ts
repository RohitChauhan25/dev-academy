import { Tutorial } from '@/app/types/tutorial';

export const svgBasics: Tutorial = {
  slug: 'svg-basics',

  title: 'SVG Basics',

  description:
    'Learn how to draw scalable vector graphics directly inline in HTML using the svg element and basic shape elements.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 26 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'What is SVG?',
      content:
        'SVG (Scalable Vector Graphics) is an XML-based format for drawing 2D graphics using shapes and paths instead of pixels. Because it’s vector-based, SVG stays crisp at any zoom level or screen resolution.',
    },

    {
      type: 'code',
      title: 'Inline SVG',
      language: 'html',
      code: `<svg width="200" height="200" viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="80" fill="steelblue" />
</svg>`,
    },

    {
      type: 'table',
      title: 'Basic Shape Elements',
      headers: ['Element', 'Draws'],
      rows: [
        ['<circle>', 'A circle, using cx, cy, and r'],
        ['<rect>', 'A rectangle, using x, y, width, and height'],
        ['<line>', 'A straight line between two points'],
        ['<polygon>', 'A closed shape from a list of points'],
        ['<path>', 'Any complex shape using a drawing command string'],
        ['<text>', 'Text rendered as part of the graphic'],
      ],
    },

    {
      type: 'code',
      title: 'Rectangle and Line',
      language: 'html',
      code: `<svg width="200" height="100">
  <rect x="10" y="10" width="120" height="60" fill="orange" />
  <line x1="0" y1="0" x2="200" y2="100" stroke="black" stroke-width="2" />
</svg>`,
    },

    {
      type: 'paragraph',
      title: 'The viewBox Attribute',
      content:
        'viewBox defines the coordinate system of the SVG canvas independently of its displayed width and height, which is what allows SVG graphics to scale cleanly to any size.',
    },

    {
      type: 'code',
      title: 'Using an Inline SVG Icon',
      language: 'html',
      code: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor">
  <path d="M12 2 L2 22 L22 22 Z" stroke-width="2" />
</svg>`,
    },

    {
      type: 'paragraph',
      title: 'Inline SVG vs img',
      content:
        'SVG can be embedded inline (as shown above), referenced via <img src="icon.svg">, or set as a CSS background-image. Inline SVG is the most flexible option since it can be styled with CSS and manipulated with JavaScript.',
    },

    {
      type: 'note',
      title: 'SVG Uses Its Own Attributes',
      content:
        'SVG elements use attributes like fill, stroke, and stroke-width instead of CSS background-color and border — though many of these can also be controlled from CSS on inline SVG.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use inline SVG for icons and graphics that need to change color or animate via CSS/JavaScript, and use <img> or CSS background-image for static illustrations to keep markup lean.',
    },
  ],

  quiz: [
    {
      question: 'What does SVG stand for?',
      options: [
        'Simple Vector Graphic',
        'Scalable Vector Graphics',
        'Styled Vector Group',
        'Static Vector Grid',
      ],
      answer: 1,
    },
    {
      question: 'Which attribute draws a circle in SVG?',
      options: ['<circle>', '<round>', '<oval>', '<dot>'],
      answer: 0,
    },
    {
      question: 'What is the main advantage of inline SVG over <img src="icon.svg">?',
      options: [
        'It loads faster on every browser',
        'It can be styled with CSS and manipulated with JavaScript',
        'It requires no viewBox',
        'It works only on mobile',
      ],
      answer: 1,
    },
  ],

  previous: 'data-attributes',
  next: 'accessibility',
};
