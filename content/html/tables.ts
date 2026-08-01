import { Tutorial } from '@/app/types/tutorial';

export const tables: Tutorial = {
  slug: 'tables',

  title: 'HTML Tables',

  description:
    'Learn how to build tabular data layouts with table, row, and cell elements, including headers and captions.',

  level: 'Intermediate',

  readingTime: '18 min',

  lesson: 'Lesson 13 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'The table Element',
      content:
        'Tables display data in rows and columns using the <table> element together with rows (<tr>) and cells (<td> or <th>).',
    },

    {
      type: 'code',
      title: 'Basic Table',
      language: 'html',
      code: `<table>
  <tr>
    <th>Name</th>
    <th>Role</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>Developer</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>Designer</td>
  </tr>
</table>`,
    },

    {
      type: 'table',
      title: 'Table Elements',
      headers: ['Element', 'Purpose'],
      rows: [
        ['<table>', 'Wraps the entire table'],
        ['<tr>', 'Defines a table row'],
        ['<th>', 'Defines a header cell (bold, centered by default)'],
        ['<td>', 'Defines a standard data cell'],
        ['<thead>', 'Groups the header row(s)'],
        ['<tbody>', 'Groups the main body rows'],
        ['<tfoot>', 'Groups footer row(s), e.g. totals'],
        ['<caption>', 'Provides a title/description for the table'],
      ],
    },

    {
      type: 'code',
      title: 'Structured Table',
      language: 'html',
      code: `<table>
  <caption>Monthly Sales</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$12,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$12,000</td>
    </tr>
  </tfoot>
</table>`,
    },

    {
      type: 'paragraph',
      title: 'Merging Cells',
      content:
        'The colspan attribute merges a cell across multiple columns, and rowspan merges a cell across multiple rows.',
    },

    {
      type: 'code',
      title: 'colspan and rowspan',
      language: 'html',
      code: `<table>
  <tr>
    <th colspan="2">Full Name</th>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>`,
    },

    {
      type: 'paragraph',
      title: 'Associating Headers with Data',
      content:
        'The scope attribute on <th> ("col" or "row") tells assistive technology whether the header applies to a column or a row, improving accessibility for complex tables.',
    },

    {
      type: 'code',
      title: 'scope Attribute',
      language: 'html',
      code: `<th scope="col">Name</th>
<th scope="row">Total</th>`,
    },

    {
      type: 'warning',
      title: 'Do Not Use Tables for Page Layout',
      content:
        'Tables should only be used for genuinely tabular data. Using tables to lay out an entire page (a common practice in the early 2000s) hurts accessibility and responsiveness — use CSS Grid or Flexbox for layout instead.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always use <th> for header cells (with scope set) and wrap your table body in <tbody>. This improves both accessibility and styling flexibility.',
    },
  ],

  quiz: [
    {
      question: 'Which element defines a header cell in a table?',
      options: ['<td>', '<th>', '<tr>', '<head>'],
      answer: 1,
    },
    {
      question: 'Which attribute merges a cell across multiple columns?',
      options: ['rowspan', 'colspan', 'merge', 'span'],
      answer: 1,
    },
    {
      question: 'Should tables be used to lay out an entire page?',
      options: ['Yes, always', 'No, use CSS Grid or Flexbox instead', 'Only on mobile', 'Only with colspan'],
      answer: 1,
    },
  ],

  previous: 'div-and-span',
  next: 'forms',
};
