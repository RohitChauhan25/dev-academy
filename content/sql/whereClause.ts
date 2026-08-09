import { Tutorial } from '@/app/types/tutorial';

export const whereClause: Tutorial = {
  slug: 'where-clause',

  title: 'The WHERE Clause',

  description: 'Filter which rows a query returns based on a condition.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 6 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Filtering Rows',
      content:
        'WHERE filters rows before they are returned — only rows where the condition evaluates to true are included in the result. It is placed after FROM.',
    },

    {
      type: 'code',
      title: 'Basic Filtering',
      language: 'sql',
      code: `SELECT name, age FROM users WHERE age >= 18;`,
    },

    {
      type: 'code',
      title: 'Multiple Conditions',
      language: 'sql',
      code: `SELECT * FROM orders WHERE status = 'completed' AND total > 100;`,
    },

    {
      type: 'table',
      title: 'Basic Comparison Operators',
      headers: ['Operator', 'Meaning'],
      rows: [
        ['=', 'Equal to'],
        ['!= or <>', 'Not equal to'],
        ['>, <, >=, <=', 'Greater/less than (or equal)'],
      ],
    },

    {
      type: 'paragraph',
      title: 'WHERE Runs Before Column Selection Conceptually',
      content:
        'Even though SELECT is written first, SQL logically evaluates FROM and WHERE before deciding which columns to output — this is why you can filter on a column that isn\'t even in your SELECT list.',
    },

    {
      type: 'code',
      title: 'Filtering on a Column Not in the Output',
      language: 'sql',
      code: `SELECT name FROM users WHERE country = 'USA';
-- Returns just names, even though "country" isn't selected`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Put the most selective condition first when writing multiple AND conditions — while most modern query planners optimize this automatically, it also makes the query easier for a human to read.',
    },
  ],

  quiz: [
    {
      question: 'What does the WHERE clause do?',
      options: ['Sorts rows', 'Filters which rows are returned', 'Renames columns', 'Groups rows together'],
      answer: 1,
    },
    {
      question: 'Can you filter on a column with WHERE that isn\'t in the SELECT list?',
      options: ['No, it must be selected too', 'Yes, WHERE can reference any column in the table', 'Only with an alias', 'Only for primary keys'],
      answer: 1,
    },
    {
      question: 'Which operator checks for "not equal to" in most SQL dialects?',
      options: ['==', '!= or <>', '<>', 'Both != and <> are commonly supported'],
      answer: 3,
    },
  ],

  previous: 'select-statement',
  next: 'order-by',
};
