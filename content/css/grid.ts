import { Tutorial } from '@/app/types/tutorial';

export const grid: Tutorial = {
  slug: 'grid',

  title: 'CSS Grid',

  description:
    'Learn how to build two-dimensional layouts with CSS Grid, controlling rows and columns together.',

  level: 'Intermediate',

  readingTime: '22 min',

  lesson: 'Lesson 15 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is CSS Grid?',
      content:
        'CSS Grid is a two-dimensional layout system — unlike Flexbox, it lets you control rows and columns at the same time, making it ideal for full page layouts and card grids.',
    },

    {
      type: 'code',
      title: 'A Basic Grid',
      language: 'html',
      code: `<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .grid div {
    background: steelblue;
    color: white;
    padding: 20px;
    text-align: center;
  }
</style>

<div class="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>`,
    },

    {
      type: 'table',
      title: 'Key Grid Properties',
      headers: ['Property', 'Purpose'],
      rows: [
        ['grid-template-columns', 'Defines the number and size of columns'],
        ['grid-template-rows', 'Defines the number and size of rows'],
        ['gap', 'Space between rows and columns'],
        ['grid-column / grid-row', 'Places an item across specific tracks'],
        ['grid-template-areas', 'Names layout regions for readable placement'],
      ],
    },

    {
      type: 'paragraph',
      title: 'The fr Unit',
      content:
        'fr represents a fraction of the available space in the grid container. grid-template-columns: 1fr 2fr creates two columns, the second twice as wide as the first.',
    },

    {
      type: 'code',
      title: 'Spanning Multiple Columns',
      language: 'html',
      code: `<style>
  .layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  .featured {
    grid-column: span 2;
    background: #764ba2;
    color: white;
    padding: 20px;
  }
  .layout div:not(.featured) {
    background: #eef4fb;
    padding: 20px;
  }
</style>

<div class="layout">
  <div class="featured">Spans 2 columns</div>
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
</div>`,
    },

    {
      type: 'paragraph',
      title: 'Named Grid Areas',
      content:
        'grid-template-areas lets you visually sketch a layout in your CSS using named regions, then assign each child to a named area with grid-area.',
    },

    {
      type: 'code',
      title: 'Named Areas Layout',
      language: 'html',
      code: `<style>
  .page {
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
    gap: 8px;
    height: 220px;
  }
  .header { grid-area: header; background: #333; color: white; }
  .sidebar { grid-area: sidebar; background: #764ba2; color: white; }
  .main { grid-area: main; background: #eef4fb; }
  .footer { grid-area: footer; background: #333; color: white; }
  .page > div { padding: 8px; }
</style>

<div class="page">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main</div>
  <div class="footer">Footer</div>
</div>`,
    },

    {
      type: 'note',
      title: 'Grid vs Flexbox',
      content:
        'Use Grid when you need to control both rows and columns together, like a full page layout. Use Flexbox for simpler, one-directional alignment, like a navbar or a row of buttons. The two are often combined in the same project.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use repeat() and the fr unit for flexible column definitions instead of hardcoding many equal-width tracks by hand — it’s shorter and adapts more gracefully.',
    },
  ],

  quiz: [
    {
      question: 'What does the fr unit represent in a grid?',
      options: [
        'A fixed number of pixels',
        'A fraction of the available space in the grid container',
        'A percentage of the viewport',
        'The number of rows',
      ],
      answer: 1,
    },
    {
      question: 'Which property lets an item span multiple columns?',
      options: ['grid-gap', 'grid-column', 'grid-template', 'grid-area-span'],
      answer: 1,
    },
    {
      question: 'When is CSS Grid generally preferred over Flexbox?',
      options: [
        'When aligning a single row of items',
        'When you need to control rows and columns together, two-dimensionally',
        'Grid should always be used instead of Flexbox',
        'Only for text styling',
      ],
      answer: 1,
    },
  ],

  previous: 'flexbox',
  next: 'overflow',
};
