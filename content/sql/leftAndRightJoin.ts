import { Tutorial } from '@/app/types/tutorial';

export const leftAndRightJoin: Tutorial = {
  slug: 'left-and-right-join',

  title: 'LEFT & RIGHT JOIN',

  description: 'Keep every row from one side of a join, even when there is no match on the other side.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 19 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem with INNER JOIN',
      content:
        'INNER JOIN drops any row without a match on both sides — but sometimes you specifically want "every customer, whether or not they have orders yet". That\'s exactly what LEFT JOIN is for.',
    },

    {
      type: 'code',
      title: 'LEFT JOIN: Every Customer, With or Without Orders',
      language: 'sql',
      code: `SELECT customers.name, orders.id AS order_id
FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id;

-- A customer with no orders still appears, with order_id as NULL`,
    },

    {
      type: 'table',
      title: 'LEFT JOIN Behavior',
      headers: ['Left Table (customers)', 'Right Table (orders)', 'Included?'],
      rows: [
        ['Every row', 'Matching rows', 'Yes'],
        ['Every row', 'No match found', 'Yes — right-side columns are NULL'],
      ],
    },

    {
      type: 'code',
      title: 'A Practical Use: Finding Customers With No Orders',
      language: 'sql',
      code: `SELECT customers.name
FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id
WHERE orders.id IS NULL;`,
    },

    {
      type: 'paragraph',
      title: 'RIGHT JOIN',
      content:
        'RIGHT JOIN is the mirror image — it keeps every row from the right-hand table instead. In practice, RIGHT JOIN is rarely used, since the same result can always be achieved by writing a LEFT JOIN with the tables swapped, which most developers find easier to read.',
    },

    {
      type: 'note',
      title: 'LEFT vs RIGHT vs INNER Summary',
      content:
        'LEFT JOIN keeps everything from the left table. RIGHT JOIN keeps everything from the right table. INNER JOIN keeps only rows matched on both sides. FULL OUTER JOIN (next lesson) keeps everything from both.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Prefer LEFT JOIN over RIGHT JOIN in your own queries by convention — it keeps the "table I care most about keeping everything from" as the first table listed, which most people find more intuitive to read top to bottom.',
    },
  ],

  quiz: [
    {
      question: 'What does LEFT JOIN guarantee?',
      options: [
        'Every row from the right table is kept',
        'Every row from the left table is kept, even without a match on the right',
        'Only matching rows from both tables',
        'No rows with NULL values',
      ],
      answer: 1,
    },
    {
      question: 'How can you find customers with no orders using a LEFT JOIN?',
      options: [
        'It is not possible with LEFT JOIN',
        'LEFT JOIN orders, then filter WHERE orders.id IS NULL',
        'Use INNER JOIN instead',
        'Use RIGHT JOIN on orders',
      ],
      answer: 1,
    },
    {
      question: 'Why is RIGHT JOIN rarely used in practice?',
      options: [
        'It is not valid SQL',
        'The same result can be achieved with a LEFT JOIN and swapped table order, which most people find more readable',
        'It always throws an error',
        'It is slower than LEFT JOIN',
      ],
      answer: 1,
    },
  ],

  previous: 'inner-join',
  next: 'full-outer-join',
};
