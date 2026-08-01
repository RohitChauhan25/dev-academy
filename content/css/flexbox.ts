import { Tutorial } from '@/app/types/tutorial';

export const flexbox: Tutorial = {
  slug: 'flexbox',

  title: 'Flexbox',

  description:
    'Learn how to build flexible, one-dimensional layouts using the Flexbox model.',

  level: 'Intermediate',

  readingTime: '22 min',

  lesson: 'Lesson 14 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is Flexbox?',
      content:
        'Flexbox is a one-dimensional layout model designed for distributing space and aligning items along a row or a column. Turning on display: flex on a container makes its direct children flex items.',
    },

    {
      type: 'code',
      title: 'A Basic Flex Container',
      language: 'html',
      code: `<style>
  .row {
    display: flex;
    gap: 10px;
  }
  .row div {
    background: steelblue;
    color: white;
    padding: 16px;
    flex: 1;
    text-align: center;
  }
</style>

<div class="row">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>`,
    },

    {
      type: 'table',
      title: 'Key Container Properties',
      headers: ['Property', 'Purpose'],
      rows: [
        ['flex-direction', 'Main axis direction: row, column, row-reverse, column-reverse'],
        ['justify-content', 'Alignment along the main axis'],
        ['align-items', 'Alignment along the cross axis'],
        ['flex-wrap', 'Whether items wrap onto multiple lines'],
        ['gap', 'Space between flex items'],
      ],
    },

    {
      type: 'code',
      title: 'Centering with Flexbox',
      language: 'html',
      code: `<style>
  .center-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    background: #eef4fb;
  }
</style>

<div class="center-box">
  <div>Perfectly centered</div>
</div>`,
    },

    {
      type: 'paragraph',
      title: 'Flex Item Properties',
      content:
        'Individual flex items can control how they grow, shrink, and their base size using the flex shorthand, which combines flex-grow, flex-shrink, and flex-basis.',
    },

    {
      type: 'code',
      title: 'flex-grow in Action',
      language: 'html',
      code: `<style>
  .layout {
    display: flex;
    gap: 10px;
  }
  .sidebar {
    flex: 0 0 150px; /* don't grow, don't shrink, fixed 150px */
    background: #764ba2;
    color: white;
    padding: 10px;
  }
  .main {
    flex: 1; /* grow to fill remaining space */
    background: #eef4fb;
    padding: 10px;
  }
</style>

<div class="layout">
  <div class="sidebar">Sidebar</div>
  <div class="main">Main content grows to fill space</div>
</div>`,
    },

    {
      type: 'table',
      title: 'justify-content Values',
      headers: ['Value', 'Effect'],
      rows: [
        ['flex-start', 'Items packed at the start (default)'],
        ['flex-end', 'Items packed at the end'],
        ['center', 'Items centered'],
        ['space-between', 'Equal space between items, none at the edges'],
        ['space-around', 'Equal space around each item'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Wrapping Items',
      content:
        'By default, flex items try to fit on a single line, shrinking if necessary. flex-wrap: wrap allows them to flow onto multiple lines instead.',
    },

    {
      type: 'note',
      title: 'Main Axis vs Cross Axis',
      content:
        'With flex-direction: row, the main axis is horizontal and justify-content aligns along it, while align-items aligns along the vertical cross axis. Switching to flex-direction: column swaps these roles.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for Flexbox whenever you need to align or distribute items along a single row or column — navbars, button groups, and centering content are classic use cases.',
    },
  ],

  quiz: [
    {
      question: 'Which property turns a container’s children into flex items?',
      options: ['flex: 1', 'display: flex', 'flex-direction: row', 'position: flex'],
      answer: 1,
    },
    {
      question: 'Which property centers flex items along the main axis?',
      options: ['align-items', 'justify-content', 'flex-wrap', 'gap'],
      answer: 1,
    },
    {
      question: 'What does flex: 1 do to a flex item?',
      options: [
        'Fixes its size permanently',
        'Allows it to grow and fill available space',
        'Removes it from the flex layout',
        'Centers it vertically only',
      ],
      answer: 1,
    },
  ],

  previous: 'position',
  next: 'grid',
};
