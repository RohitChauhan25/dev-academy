import { Tutorial } from '@/app/types/tutorial';

export const viewsIndexesAndWindowFunctions: Tutorial = {
  slug: 'views-indexes-and-window-functions',

  title: 'Views, Indexes & Window Functions',

  description: 'Three tools for organizing, speeding up, and analyzing your queries at a more advanced level.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 30 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Views',
      content:
        'A view is a saved, named SELECT query that behaves like a virtual table — querying it re-runs the underlying query each time, so it always reflects current data without duplicating any of it.',
    },

    {
      type: 'code',
      title: 'Creating and Using a View',
      language: 'sql',
      code: `CREATE VIEW completed_orders AS
SELECT * FROM orders WHERE status = 'completed';

-- Query it just like a table
SELECT * FROM completed_orders WHERE total > 100;`,
    },

    {
      type: 'paragraph',
      title: 'Indexes',
      content:
        'Just like in MongoDB, a SQL index is a separate data structure that lets the database look up matching rows quickly instead of scanning the whole table. Primary keys are indexed automatically; other frequently-queried columns often benefit from an explicit index.',
    },

    {
      type: 'code',
      title: 'Creating an Index',
      language: 'sql',
      code: `CREATE INDEX idx_users_email ON users (email);

-- Check whether a query actually uses it
EXPLAIN SELECT * FROM users WHERE email = 'ada@example.com';`,
    },

    {
      type: 'paragraph',
      title: 'Window Functions',
      content:
        'A window function computes a value across a set of related rows — similar to an aggregate — but without collapsing them into a single row. Each row keeps its individual identity while also getting access to an aggregate calculated over its "window" of related rows.',
    },

    {
      type: 'code',
      title: 'ROW_NUMBER and RANK',
      language: 'sql',
      code: `SELECT
  name,
  total,
  RANK() OVER (ORDER BY total DESC) AS rank
FROM orders;`,
    },

    {
      type: 'code',
      title: 'A Running Total with PARTITION BY',
      language: 'sql',
      code: `SELECT
  customer_id,
  order_date,
  total,
  SUM(total) OVER (PARTITION BY customer_id ORDER BY order_date) AS running_total
FROM orders;`,
    },

    {
      type: 'table',
      title: 'Aggregate vs Window Function',
      headers: ['Aggregate (with GROUP BY)', 'Window Function'],
      rows: [
        ['Collapses rows into one per group', 'Keeps every row, adds a computed column'],
        ['Cannot see individual row detail alongside the total', 'Shows both the detail and the aggregate together'],
      ],
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for a window function whenever you need a running total, a rank, or a comparison to a group\'s aggregate — while keeping every individual row visible, which plain GROUP BY cannot do.',
    },
  ],

  quiz: [
    {
      question: 'What is a SQL view?',
      options: [
        'A permanent copy of query results',
        'A saved, named SELECT query that acts like a virtual table',
        'A type of index',
        'A backup of a table',
      ],
      answer: 1,
    },
    {
      question: 'How does a window function differ from a regular aggregate with GROUP BY?',
      options: [
        'They are identical',
        'A window function keeps every individual row while still computing an aggregate over a related set',
        'Window functions can only be used with COUNT',
        'GROUP BY is faster in every case',
      ],
      answer: 1,
    },
    {
      question: 'What does PARTITION BY do in a window function?',
      options: [
        'Deletes rows outside the partition',
        'Divides rows into groups the window function\'s calculation is scoped to, without collapsing them',
        'Creates a new table',
        'Sorts the entire result set',
      ],
      answer: 1,
    },
  ],

  previous: 'subqueries',
};
