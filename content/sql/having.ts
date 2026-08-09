import { Tutorial } from '@/app/types/tutorial';

export const having: Tutorial = {
  slug: 'having',

  title: 'HAVING',

  description: 'Filter groups after aggregation — the WHERE clause for GROUP BY results.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 17 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Why WHERE Can\'t Filter Aggregates',
      content:
        'WHERE filters individual rows before grouping happens — at that point, an aggregate like SUM(total) doesn\'t exist yet for any group. HAVING runs after GROUP BY, so it can filter based on the computed aggregate values.',
    },

    {
      type: 'code',
      title: 'Customers Who Spent Over $500',
      language: 'sql',
      code: `SELECT customer_id, SUM(total) AS revenue
FROM orders
GROUP BY customer_id
HAVING SUM(total) > 500;`,
    },

    {
      type: 'table',
      title: 'WHERE vs HAVING',
      headers: ['Clause', 'Filters', 'Runs'],
      rows: [
        ['WHERE', 'Individual rows', 'Before grouping'],
        ['HAVING', 'Groups, based on aggregate values', 'After grouping'],
      ],
    },

    {
      type: 'code',
      title: 'Combining WHERE and HAVING',
      language: 'sql',
      code: `SELECT customer_id, SUM(total) AS revenue
FROM orders
WHERE status = 'completed'
GROUP BY customer_id
HAVING SUM(total) > 500;`,
    },

    {
      type: 'paragraph',
      title: 'Reading the Combined Query',
      content:
        'This filters to completed orders first (WHERE), groups the remaining rows by customer (GROUP BY), then keeps only the customer groups whose total revenue exceeds 500 (HAVING) — three distinct filtering stages, each operating at a different point in the query.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use WHERE to eliminate rows as early as possible (it is generally cheaper), and reserve HAVING specifically for conditions that genuinely depend on an aggregate value.',
    },
  ],

  quiz: [
    {
      question: 'Why can\'t WHERE be used to filter on SUM(total) > 500?',
      options: [
        'WHERE cannot use numbers',
        'WHERE runs before grouping, when the aggregate doesn\'t exist yet',
        'WHERE has no real limitation here',
        'It actually can, HAVING is unnecessary',
      ],
      answer: 1,
    },
    {
      question: 'What does HAVING filter?',
      options: ['Individual rows before grouping', 'Groups, based on aggregate values, after grouping', 'Only text columns', 'Table names'],
      answer: 1,
    },
    {
      question: 'In a query with both WHERE and HAVING, which runs first?',
      options: ['HAVING', 'WHERE', 'They run simultaneously', 'It depends on the database'],
      answer: 1,
    },
  ],

  previous: 'group-by',
  next: 'inner-join',
};
