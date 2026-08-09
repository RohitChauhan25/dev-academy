import { Tutorial } from '@/app/types/tutorial';

export const selectStatement: Tutorial = {
  slug: 'select-statement',

  title: 'The SELECT Statement',

  description: 'Retrieve data from a table — the single most-used SQL statement.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 5 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'The Basic Shape',
      content:
        'SELECT specifies which columns to retrieve, and FROM specifies which table to retrieve them from. Every other clause you\'ll learn (WHERE, ORDER BY, GROUP BY) builds on top of this basic pair.',
    },

    {
      type: 'code',
      title: 'Selecting Specific Columns',
      language: 'sql',
      code: `SELECT name, email FROM users;`,
    },

    {
      type: 'code',
      title: 'Selecting Every Column',
      language: 'sql',
      code: `SELECT * FROM users;`,
    },

    {
      type: 'table',
      title: 'SELECT Basics',
      headers: ['Syntax', 'Meaning'],
      rows: [
        ['SELECT *', 'Every column'],
        ['SELECT col1, col2', 'Only the listed columns'],
        ['SELECT col AS alias', 'Rename a column in the results'],
      ],
    },

    {
      type: 'code',
      title: 'Aliasing a Column',
      language: 'sql',
      code: `SELECT name AS full_name, email AS contact_email FROM users;`,
    },

    {
      type: 'warning',
      title: 'Avoid SELECT * in Application Code',
      content:
        'SELECT * transfers every column, including ones you may not need, and it silently breaks if the table structure changes and code was relying on column order. In application code, explicitly list the columns you actually use.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'SELECT * is fine for quick, ad-hoc exploration in a database client, but list explicit columns in anything that becomes part of your application\'s real query logic.',
    },
  ],

  quiz: [
    {
      question: 'What does SELECT * FROM users; do?',
      options: ['Deletes the users table', 'Retrieves every column for every row in users', 'Retrieves only the first row', 'Counts rows in users'],
      answer: 1,
    },
    {
      question: 'What does the AS keyword do in a SELECT statement?',
      options: ['Filters rows', 'Renames a column in the query results', 'Sorts results', 'Joins two tables'],
      answer: 1,
    },
    {
      question: 'Why avoid SELECT * in production application code?',
      options: [
        'It is invalid SQL',
        'It transfers unnecessary data and can break if the table structure changes',
        'It only works in SQLite',
        'It is always slower than any alternative',
      ],
      answer: 1,
    },
  ],

  previous: 'setting-up-a-database',
  next: 'where-clause',
};
