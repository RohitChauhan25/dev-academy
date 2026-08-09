import { Tutorial } from '@/app/types/tutorial';

export const alterTable: Tutorial = {
  slug: 'alter-table',

  title: 'ALTER TABLE',

  description: 'Change an existing table\'s structure — add, modify, or remove columns and constraints.',

  level: 'Advanced',

  readingTime: '10 min',

  lesson: 'Lesson 27 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Modifying an Existing Table',
      content:
        'ALTER TABLE changes the structure of a table that already exists (and may already contain data) — adding a column, changing a type, adding a constraint, or removing something no longer needed.',
    },

    {
      type: 'code',
      title: 'Adding and Removing Columns',
      language: 'sql',
      code: `ALTER TABLE users ADD COLUMN phone VARCHAR(20);

ALTER TABLE users DROP COLUMN phone;`,
    },

    {
      type: 'code',
      title: 'Changing a Column\'s Type',
      language: 'sql',
      code: `ALTER TABLE products ALTER COLUMN price TYPE DECIMAL(10, 2);`,
    },

    {
      type: 'code',
      title: 'Adding a Constraint to an Existing Table',
      language: 'sql',
      code: `ALTER TABLE users ADD CONSTRAINT email_unique UNIQUE (email);

ALTER TABLE orders
  ADD CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customers(id);`,
    },

    {
      type: 'table',
      title: 'Common ALTER TABLE Operations',
      headers: ['Operation', 'Syntax'],
      rows: [
        ['Add a column', 'ALTER TABLE t ADD COLUMN col type'],
        ['Drop a column', 'ALTER TABLE t DROP COLUMN col'],
        ['Rename a column', 'ALTER TABLE t RENAME COLUMN old TO new'],
        ['Rename a table', 'ALTER TABLE old_name RENAME TO new_name'],
      ],
    },

    {
      type: 'warning',
      title: 'Some Changes Lock the Table',
      content:
        'On a large table, certain ALTER TABLE operations (like changing a column\'s type, or adding a NOT NULL constraint without a default) can require rewriting every existing row, temporarily locking the table and blocking other queries.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'On a large, actively-used production table, research your specific database\'s behavior for a given ALTER TABLE operation before running it — some changes are instant metadata updates, others rewrite the entire table.',
    },
  ],

  quiz: [
    {
      question: 'What does ALTER TABLE ADD COLUMN do?',
      options: ['Creates a new table', 'Adds a new column to an existing table', 'Deletes a column', 'Renames a table'],
      answer: 1,
    },
    {
      question: 'Why can changing a column\'s data type be risky on a large table?',
      options: [
        'It is never risky',
        'It may require rewriting every existing row, locking the table temporarily',
        'It always deletes existing data',
        'It only works on empty tables',
      ],
      answer: 1,
    },
    {
      question: 'Which statement adds a foreign key constraint to an existing table?',
      options: [
        'ALTER TABLE orders ADD CONSTRAINT fk FOREIGN KEY (customer_id) REFERENCES customers(id)',
        'CREATE FOREIGN KEY orders.customer_id',
        'UPDATE orders SET FOREIGN KEY',
        'INSERT CONSTRAINT INTO orders',
      ],
      answer: 0,
    },
  ],

  previous: 'create-table-and-constraints',
  next: 'normalization',
};
