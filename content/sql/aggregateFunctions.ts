import { Tutorial } from '@/app/types/tutorial';

export const aggregateFunctions: Tutorial = {
  slug: 'aggregate-functions',

  title: 'Aggregate Functions',

  description: 'Compute a single summary value across many rows with COUNT, SUM, AVG, MIN, and MAX.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 15 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What Aggregate Functions Do',
      content:
        'Aggregate functions collapse many rows into a single summary value — a count, a total, an average. Used without GROUP BY, they summarize the entire result set into one row.',
    },

    {
      type: 'table',
      title: 'Common Aggregate Functions',
      headers: ['Function', 'Returns'],
      rows: [
        ['COUNT(*)', 'Number of rows'],
        ['SUM(col)', 'Total of a numeric column'],
        ['AVG(col)', 'Average of a numeric column'],
        ['MIN(col)', 'Smallest value'],
        ['MAX(col)', 'Largest value'],
      ],
    },

    {
      type: 'code',
      title: 'Basic Aggregates',
      language: 'sql',
      code: `SELECT COUNT(*) AS total_orders FROM orders;

SELECT SUM(total) AS revenue FROM orders WHERE status = 'completed';

SELECT AVG(price) AS avg_price, MIN(price) AS cheapest, MAX(price) AS priciest
FROM products;`,
    },

    {
      type: 'paragraph',
      title: 'Aggregates Combine With WHERE',
      content:
        'WHERE filters rows before the aggregate is computed — so SUM(total) WHERE status = \'completed\' sums only completed orders, not every order in the table.',
    },

    {
      type: 'note',
      title: 'COUNT(*) vs COUNT(column)',
      content:
        'COUNT(*) counts every row, regardless of NULLs. COUNT(column) counts only rows where that specific column is not NULL — the two can return different numbers on the same table.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use COUNT(*) when you want a plain row count, and COUNT(column) specifically when you want to know how many rows have a value for that particular column.',
    },
  ],

  quiz: [
    {
      question: 'What does COUNT(*) return?',
      options: ['The sum of all values', 'The number of rows', 'The largest value', 'The average'],
      answer: 1,
    },
    {
      question: 'Does WHERE filter rows before or after an aggregate function is computed?',
      options: ['After', 'Before', 'Aggregate functions ignore WHERE', 'It depends on the database'],
      answer: 1,
    },
    {
      question: 'Can COUNT(*) and COUNT(column) return different results on the same table?',
      options: [
        'No, they are always identical',
        'Yes, if the column has NULL values, since COUNT(column) excludes them',
        'Only if the table is empty',
        'Only in MySQL',
      ],
      answer: 1,
    },
  ],

  previous: 'null-handling',
  next: 'group-by',
};
