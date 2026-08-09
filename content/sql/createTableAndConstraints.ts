import { Tutorial } from '@/app/types/tutorial';

export const createTableAndConstraints: Tutorial = {
  slug: 'create-table-and-constraints',

  title: 'CREATE TABLE & Constraints',

  description: 'Define a table\'s structure, and use constraints to enforce data integrity at the database level.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 26 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'CREATE TABLE',
      content:
        'CREATE TABLE defines a new table\'s name, columns, and their types. Constraints attached to columns (or the table as a whole) enforce rules the database refuses to violate, no matter what application inserts the data.',
    },

    {
      type: 'code',
      title: 'A Table With Constraints',
      language: 'sql',
      code: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  age INT CHECK (age >= 0),
  role VARCHAR(20) DEFAULT 'member'
);`,
    },

    {
      type: 'table',
      title: 'Common Constraints',
      headers: ['Constraint', 'Enforces'],
      rows: [
        ['PRIMARY KEY', 'Uniquely identifies each row; implies NOT NULL and UNIQUE'],
        ['NOT NULL', 'The column must always have a value'],
        ['UNIQUE', 'No two rows can share the same value in this column'],
        ['CHECK (condition)', 'A custom condition every row must satisfy'],
        ['DEFAULT value', 'A fallback value used if none is provided on insert'],
        ['FOREIGN KEY', 'The value must exist in another table\'s referenced column'],
      ],
    },

    {
      type: 'code',
      title: 'A Foreign Key Constraint',
      language: 'sql',
      code: `CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES customers(id),
  total DECIMAL(10, 2)
);
-- Inserting an order with a customer_id that doesn't exist in customers fails`,
    },

    {
      type: 'warning',
      title: 'Constraints Reject Bad Data at Write Time',
      content:
        'An INSERT or UPDATE that would violate any constraint is rejected entirely with an error — this is a safety net that protects data integrity regardless of which application (or bug) is writing to the database.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Add constraints as you design a table, not as an afterthought — a NOT NULL or CHECK constraint added later can fail to apply if existing data already violates it, requiring a data cleanup first.',
    },
  ],

  quiz: [
    {
      question: 'What does a UNIQUE constraint enforce?',
      options: ['A value can never be NULL', 'No two rows can share the same value in that column', 'The column must be a number', 'The row must have a foreign key'],
      answer: 1,
    },
    {
      question: 'What does PRIMARY KEY imply about a column?',
      options: ['Nothing extra', 'It implies both NOT NULL and UNIQUE', 'It must be text', 'It can be duplicated once'],
      answer: 1,
    },
    {
      question: 'What happens if an INSERT violates a CHECK constraint?',
      options: ['The value is silently corrected', 'The INSERT is rejected with an error', 'The constraint is ignored', 'A warning is logged but the insert proceeds'],
      answer: 1,
    },
  ],

  previous: 'transactions',
  next: 'alter-table',
};
