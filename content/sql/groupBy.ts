import { Tutorial } from '@/app/types/tutorial';

export const groupBy: Tutorial = {
  slug: 'group-by',

  title: 'GROUP BY',

  description: 'Compute an aggregate value separately for each group of rows that share a value.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 16 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Aggregating Per Group',
      content:
        'GROUP BY splits rows into groups sharing the same value in one or more columns, then computes an aggregate function separately for each group — instead of one summary for the whole table.',
    },

    {
      type: 'code',
      title: 'Revenue Per Customer',
      language: 'sql',
      code: `SELECT customer_id, SUM(total) AS revenue
FROM orders
GROUP BY customer_id;`,
    },

    {
      type: 'paragraph',
      title: 'The Golden Rule of GROUP BY',
      content:
        'Every column in the SELECT list must either be part of the GROUP BY clause, or wrapped in an aggregate function. This is because for each group, SQL has no way to pick a single value for a non-grouped, non-aggregated column when the group contains multiple rows.',
    },

    {
      type: 'code',
      title: 'Grouping by Multiple Columns',
      language: 'sql',
      code: `SELECT status, customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY status, customer_id;`,
    },

    {
      type: 'table',
      title: 'A Worked Example',
      headers: ['customer_id', 'total (per order)'],
      rows: [
        ['1', '50'],
        ['1', '30'],
        ['2', '20'],
      ],
    },

    {
      type: 'note',
      title: 'Result of GROUP BY customer_id, SUM(total)',
      content:
        'For the table above: customer 1 → 80 (50 + 30), customer 2 → 20. The two rows for customer 1 collapse into a single output row.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Think of GROUP BY as answering "one row per X" — GROUP BY customer_id means the result has exactly one row per customer, no matter how many orders they placed.',
    },
  ],

  quiz: [
    {
      question: 'What does GROUP BY customer_id do to rows sharing the same customer_id?',
      options: ['Deletes duplicates', 'Collapses them into a single row per customer_id, computing aggregates', 'Sorts them', 'Filters them out'],
      answer: 1,
    },
    {
      question: 'What is required of every SELECT column when using GROUP BY?',
      options: [
        'It must be a number',
        'It must be in the GROUP BY clause or wrapped in an aggregate function',
        'It must have an alias',
        'Nothing special is required',
      ],
      answer: 1,
    },
    {
      question: 'What does SELECT status, COUNT(*) FROM orders GROUP BY status; return?',
      options: [
        'One row total',
        'One row per distinct status, with a count of orders in each',
        'Every row in the table',
        'An error',
      ],
      answer: 1,
    },
  ],

  previous: 'aggregate-functions',
  next: 'having',
};
