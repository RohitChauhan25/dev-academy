import { Tutorial } from '@/app/types/tutorial';

export const colors: Tutorial = {
  slug: 'colors',

  title: 'CSS Colors',

  description:
    'Learn the different ways to specify colors in CSS: named colors, hex codes, rgb(), hsl(), and transparency.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 5 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Ways to Specify Color',
      content:
        'CSS supports several color formats. Any of them can be used wherever a color value is expected — text color, backgrounds, borders, and shadows.',
    },

    {
      type: 'table',
      title: 'Color Formats',
      headers: ['Format', 'Example', 'Notes'],
      rows: [
        ['Named', 'tomato', '148 keyword names, easy to read'],
        ['Hex', '#ff6347', 'Six-digit RGB in hexadecimal'],
        ['RGB', 'rgb(255, 99, 71)', 'Red, green, blue from 0–255'],
        ['RGBA', 'rgba(255, 99, 71, 0.5)', 'RGB plus alpha (transparency) from 0–1'],
        ['HSL', 'hsl(9, 100%, 64%)', 'Hue, saturation, lightness'],
        ['HSLA', 'hsla(9, 100%, 64%, 0.5)', 'HSL plus alpha transparency'],
      ],
    },

    {
      type: 'code',
      title: 'Color Formats in Use',
      language: 'html',
      code: `<style>
  .named { background: tomato; }
  .hex { background: #4682b4; }
  .rgb { background: rgb(70, 130, 180); }
  .hsl { background: hsl(207, 44%, 49%); }
  div {
    color: white;
    padding: 10px;
    margin-bottom: 6px;
    font-family: sans-serif;
  }
</style>

<div class="named">named: tomato</div>
<div class="hex">hex: #4682b4</div>
<div class="rgb">rgb(70, 130, 180)</div>
<div class="hsl">hsl(207, 44%, 49%)</div>`,
    },

    {
      type: 'paragraph',
      title: 'Transparency',
      content:
        'The alpha channel in rgba() and hsla() controls opacity, from 0 (fully transparent) to 1 (fully opaque). The standalone opacity property does something similar but affects the entire element, including its children.',
    },

    {
      type: 'code',
      title: 'Transparent Overlay',
      language: 'html',
      code: `<style>
  .overlay {
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 20px;
  }
</style>

<div class="overlay">Semi-transparent overlay</div>`,
    },

    {
      type: 'note',
      title: 'HSL is Easier to Reason About',
      content:
        'HSL describes color the way humans think about it — hue (the base color), saturation (intensity), and lightness. It makes creating consistent color variations (like a hover state) much easier than guessing hex values.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Pick one color format per project and stick with it for consistency — many teams prefer HSL for its readability, combined with CSS variables for a shared color palette.',
    },
  ],

  quiz: [
    {
      question: 'Which value represents a fully transparent color in rgba()?',
      options: ['Alpha = 1', 'Alpha = 0', 'Alpha = 100', 'Alpha = 255'],
      answer: 1,
    },
    {
      question: 'What does HSL stand for?',
      options: [
        'Hue, Saturation, Lightness',
        'Highlight, Shade, Layer',
        'Horizontal, Style, Layout',
        'Hex, Style, Length',
      ],
      answer: 0,
    },
    {
      question: 'Which color format uses a six-digit code prefixed with #?',
      options: ['RGB', 'HSL', 'Hex', 'Named'],
      answer: 2,
    },
  ],

  previous: 'selectors',
  next: 'units',
};
