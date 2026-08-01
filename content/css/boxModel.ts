import { Tutorial } from '@/app/types/tutorial';

export const boxModel: Tutorial = {
  slug: 'box-model',

  title: 'The Box Model',

  description:
    'Understand how every element is treated as a box made of content, padding, border, and margin.',

  level: 'Beginner',

  readingTime: '16 min',

  lesson: 'Lesson 7 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Every Element is a Box',
      content:
        'CSS treats every HTML element as a rectangular box, made up of four layers: the content, padding, border, and margin — from innermost to outermost.',
    },

    {
      type: 'table',
      title: 'Box Model Layers',
      headers: ['Layer', 'Description'],
      rows: [
        ['Content', 'The actual text, image, or other content'],
        ['Padding', 'Transparent space between the content and the border'],
        ['Border', 'A line that wraps the padding and content'],
        ['Margin', 'Transparent space outside the border, separating it from other elements'],
      ],
    },

    {
      type: 'code',
      title: 'Visualizing the Box Model',
      language: 'html',
      code: `<style>
  .box {
    width: 200px;
    padding: 20px;
    border: 4px solid steelblue;
    margin: 20px;
    background: #eef4fb;
  }
</style>

<div class="box">Content area</div>`,
    },

    {
      type: 'paragraph',
      title: 'Calculating Total Size',
      content:
        'By default, an element’s total rendered width is width + padding-left + padding-right + border-left + border-right (margin is separate space outside the box, not part of its size).',
    },

    {
      type: 'code',
      title: 'Default Size Calculation',
      language: 'css',
      code: `.box {
  width: 200px;
  padding: 20px;
  border: 4px solid black;
}
/* Rendered width = 200 + 20 + 20 + 4 + 4 = 248px */`,
    },

    {
      type: 'paragraph',
      title: 'box-sizing: border-box',
      content:
        'The box-sizing property changes this calculation. With border-box, the width you set already includes padding and border, making sizing far more predictable.',
    },

    {
      type: 'code',
      title: 'border-box in Action',
      language: 'html',
      code: `<style>
  * {
    box-sizing: border-box;
  }
  .box {
    width: 200px;
    padding: 20px;
    border: 4px solid tomato;
    background: #fdeceb;
  }
</style>

<div class="box">Now width stays exactly 200px total.</div>`,
    },

    {
      type: 'warning',
      title: 'Default box-sizing Surprises',
      content:
        'The default box-sizing value is content-box, which is why adding padding to a fixed-width element often unexpectedly makes it wider than intended.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Apply box-sizing: border-box to every element with a universal selector at the top of your stylesheet. It’s one of the most common resets in real-world CSS.',
    },
  ],

  quiz: [
    {
      question: 'What are the four layers of the box model, from inside out?',
      options: [
        'Margin, border, padding, content',
        'Content, padding, border, margin',
        'Padding, content, margin, border',
        'Border, content, padding, margin',
      ],
      answer: 1,
    },
    {
      question: 'With the default box-sizing, does padding increase an element’s total rendered width?',
      options: ['No, never', 'Yes', 'Only for images', 'Only with box-sizing: border-box'],
      answer: 1,
    },
    {
      question: 'What does box-sizing: border-box do?',
      options: [
        'Removes all padding',
        'Makes the specified width include padding and border',
        'Adds a border to every element',
        'Disables margins',
      ],
      answer: 1,
    },
  ],

  previous: 'units',
  next: 'text-and-fonts',
};
