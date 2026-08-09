import { Tutorial } from '@/app/types/tutorial';

export const subqueries: Tutorial = {
  slug: 'subqueries',

  title: 'Subqueries',

  description: 'Nest a query inside another query to express conditions that a single query can\'t express alone.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 29 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What a Subquery Is',
      content:
        'A subquery is a SELECT statement nested inside another query — in a WHERE clause, a FROM clause, or even the SELECT list. It lets you use the result of one query as an input to another.',
    },

    {
      type: 'code',
      title: 'A Subquery in WHERE',
      language: 'sql',
      code: `-- Customers who have placed at least one order
SELECT name FROM customers
WHERE id IN (SELECT DISTINCT customer_id FROM orders);`,
    },

    {
      type: 'code',
      title: 'A Subquery in FROM',
      language: 'sql',
      code: `SELECT customer_id, order_count
FROM (
  SELECT customer_id, COUNT(*) AS order_count
  FROM orders
  GROUP BY customer_id
) AS order_summary
WHERE order_count > 5;`,
    },

    {
      type: 'code',
      title: 'A Correlated Subquery',
      language: 'sql',
      code: `-- For each customer, find orders above their own average order value
SELECT * FROM orders o
WHERE total > (
  SELECT AVG(total) FROM orders WHERE customer_id = o.customer_id
);`,
    },

    {
      type: 'table',
      title: 'Subquery Types',
      headers: ['Type', 'Description'],
      rows: [
        ['Scalar subquery', 'Returns a single value, usable anywhere a value is expected'],
        ['Row subquery', 'Returns a single row with multiple columns'],
        ['Table subquery', 'Returns multiple rows, usable in FROM or with IN'],
        ['Correlated subquery', 'References a column from the outer query, re-evaluated per row'],
      ],
    },

    {
      type: 'warning',
      title: 'Correlated Subqueries Can Be Slow',
      content:
        'A correlated subquery runs once per row of the outer query, which can be expensive on large tables. Often, the same result can be expressed more efficiently with a JOIN and GROUP BY instead.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'If a subquery-based query feels slow, try rewriting it as a JOIN — many subqueries (especially ones using IN with a simple SELECT) have an equivalent, often faster, JOIN formulation.',
    },
  ],

  quiz: [
    {
      question: 'What is a subquery?',
      options: [
        'A query that only returns one column',
        'A SELECT statement nested inside another query',
        'A query that modifies data',
        'A type of index',
      ],
      answer: 1,
    },
    {
      question: 'What makes a subquery "correlated"?',
      options: [
        'It uses a JOIN internally',
        'It references a column from the outer query, so it is re-evaluated per outer row',
        'It always returns exactly one row',
        'It cannot use WHERE',
      ],
      answer: 1,
    },
    {
      question: 'Why might a query using a correlated subquery be rewritten as a JOIN?',
      options: [
        'Correlated subqueries are invalid SQL',
        'JOINs can often express the same logic more efficiently, avoiding a per-row re-evaluation',
        'JOINs support more data types',
        'There is no reason, they are identical',
      ],
      answer: 1,
    },
  ],

  previous: 'normalization',
  next: 'views-indexes-and-window-functions',
};
