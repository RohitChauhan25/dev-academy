import { Tutorial } from '@/app/types/tutorial';

export const normalization: Tutorial = {
  slug: 'normalization',

  title: 'Normalization',

  description: 'Organize tables to reduce data duplication and prevent update anomalies.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 28 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem Normalization Solves',
      content:
        'Storing an order with the customer\'s full name and address repeated on every single order row means that if a customer moves, you\'d need to update every one of their orders — and if you miss one, the data becomes inconsistent. Normalization organizes data to avoid this.',
    },

    {
      type: 'table',
      title: 'Normal Forms (Simplified)',
      headers: ['Form', 'Rule'],
      rows: [
        ['1NF', 'Each column holds a single, atomic value — no lists or repeating groups in one cell'],
        ['2NF', 'Every non-key column depends on the entire primary key, not just part of it'],
        ['3NF', 'Every non-key column depends only on the primary key, not on other non-key columns'],
      ],
    },

    {
      type: 'code',
      title: 'Before: Denormalized',
      language: 'sql',
      code: `-- customer_name and customer_email are duplicated on every order
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(100),
  customer_email VARCHAR(100),
  total DECIMAL(10, 2)
);`,
    },

    {
      type: 'code',
      title: 'After: Normalized',
      language: 'sql',
      code: `CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES customers(id),
  total DECIMAL(10, 2)
);`,
    },

    {
      type: 'paragraph',
      title: 'The Trade-off',
      content:
        'Normalization reduces duplication and prevents inconsistency, but it means more tables and more JOINs to reassemble the full picture at query time. Real-world schemas often deliberately denormalize specific parts for read performance, once the trade-off is well understood.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Start with a normalized design by default — it is easier to reason about correctness. Denormalize deliberately and selectively later, once you have real evidence that a particular JOIN is a genuine performance bottleneck.',
    },
  ],

  quiz: [
    {
      question: 'What problem does normalization primarily solve?',
      options: [
        'Slow queries',
        'Data duplication and the update inconsistencies it can cause',
        'Missing indexes',
        'Encryption of sensitive data',
      ],
      answer: 1,
    },
    {
      question: 'What does 1NF require?',
      options: [
        'Every table must have a foreign key',
        'Each column holds a single, atomic value',
        'Every column must be indexed',
        'No table can have more than 5 columns',
      ],
      answer: 1,
    },
    {
      question: 'What is the main trade-off of normalization?',
      options: [
        'It has no downsides',
        'More tables and more JOINs needed to reassemble related data',
        'It always makes writes slower',
        'It removes the need for primary keys',
      ],
      answer: 1,
    },
  ],

  previous: 'alter-table',
  next: 'subqueries',
};
