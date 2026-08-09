import { Tutorial } from '@/app/types/tutorial';

export const fullOuterJoin: Tutorial = {
  slug: 'full-outer-join',

  title: 'FULL OUTER JOIN',

  description: 'Keep every row from both tables, matched where possible.',

  level: 'Advanced',

  readingTime: '10 min',

  lesson: 'Lesson 20 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Combining LEFT and RIGHT',
      content:
        'FULL OUTER JOIN returns every row from both tables — matched together wherever the join condition succeeds, and padded with NULL on whichever side has no match, when it fails.',
    },

    {
      type: 'code',
      title: 'A FULL OUTER JOIN',
      language: 'sql',
      code: `SELECT customers.name, orders.id AS order_id
FROM customers
FULL OUTER JOIN orders ON customers.id = orders.customer_id;

-- Includes customers with no orders (order_id is NULL)
-- AND orders with no matching customer (name is NULL)`,
    },

    {
      type: 'table',
      title: 'Join Type Summary',
      headers: ['Join Type', 'Keeps'],
      rows: [
        ['INNER JOIN', 'Only matched rows from both sides'],
        ['LEFT JOIN', 'Everything from the left, matched or not'],
        ['RIGHT JOIN', 'Everything from the right, matched or not'],
        ['FULL OUTER JOIN', 'Everything from both sides, matched or not'],
      ],
    },

    {
      type: 'warning',
      title: 'Not Every Database Supports FULL OUTER JOIN Natively',
      content:
        'MySQL historically doesn\'t support FULL OUTER JOIN directly. A common workaround is a LEFT JOIN UNION a RIGHT JOIN (using UNION, covered next, to combine and de-duplicate the two result sets).',
    },

    {
      type: 'code',
      title: 'A FULL OUTER JOIN Workaround',
      language: 'sql',
      code: `SELECT customers.name, orders.id AS order_id
FROM customers LEFT JOIN orders ON customers.id = orders.customer_id
UNION
SELECT customers.name, orders.id AS order_id
FROM customers RIGHT JOIN orders ON customers.id = orders.customer_id;`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'FULL OUTER JOIN is less common in everyday queries than INNER or LEFT JOIN — reach for it specifically when you need to see mismatches on both sides at once, like an audit report comparing two datasets that should mostly line up.',
    },
  ],

  quiz: [
    {
      question: 'What does FULL OUTER JOIN return?',
      options: [
        'Only matched rows',
        'Every row from both tables, with NULLs where no match exists',
        'Only rows from the left table',
        'An error if there is no match',
      ],
      answer: 1,
    },
    {
      question: 'Which database is known for not supporting FULL OUTER JOIN natively?',
      options: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle'],
      answer: 1,
    },
    {
      question: 'What is a common workaround for FULL OUTER JOIN when it is unsupported?',
      options: [
        'It cannot be worked around',
        'Combining a LEFT JOIN and a RIGHT JOIN with UNION',
        'Using INNER JOIN twice',
        'Using GROUP BY instead',
      ],
      answer: 1,
    },
  ],

  previous: 'left-and-right-join',
  next: 'self-joins',
};
