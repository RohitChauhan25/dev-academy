import { Tutorial } from '@/app/types/tutorial';

export const insertStatement: Tutorial = {
  slug: 'insert-statement',

  title: 'INSERT',

  description: 'Add new rows to a table with the INSERT statement.',

  level: 'Advanced',

  readingTime: '10 min',

  lesson: 'Lesson 23 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'The Basic Shape',
      content:
        'INSERT adds one or more new rows to a table. You specify which columns you\'re providing values for, and a matching list of values for each new row.',
    },

    {
      type: 'code',
      title: 'Inserting a Single Row',
      language: 'sql',
      code: `INSERT INTO users (name, email, age)
VALUES ('Ada Lovelace', 'ada@example.com', 28);`,
    },

    {
      type: 'code',
      title: 'Inserting Multiple Rows at Once',
      language: 'sql',
      code: `INSERT INTO users (name, email, age)
VALUES
  ('Grace Hopper', 'grace@example.com', 45),
  ('Alan Turing', 'alan@example.com', 33);`,
    },

    {
      type: 'paragraph',
      title: 'Omitted Columns Use Defaults',
      content:
        'Any column not listed in the INSERT is set to its default value — either an explicit DEFAULT defined in the table schema, or NULL if the column allows it and has no default.',
    },

    {
      type: 'table',
      title: 'What Happens to Unlisted Columns',
      headers: ['Column Definition', 'Result if Omitted from INSERT'],
      rows: [
        ['Has a DEFAULT value', 'Uses that default'],
        ['SERIAL / AUTO_INCREMENT primary key', 'Auto-generates the next value'],
        ['Nullable, no default', 'Set to NULL'],
        ['NOT NULL, no default', 'The INSERT fails with an error'],
      ],
    },

    {
      type: 'code',
      title: 'Inserting From Another Query',
      language: 'sql',
      code: `-- Copy active users into an archive table
INSERT INTO archived_users (name, email)
SELECT name, email FROM users WHERE active = false;`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always explicitly list the columns you\'re inserting (INSERT INTO users (name, email) rather than INSERT INTO users VALUES (...)) — it makes the statement resilient to future column additions or reordering in the table.',
    },
  ],

  quiz: [
    {
      question: 'What happens to a column not listed in an INSERT statement?',
      options: [
        'The INSERT always fails',
        'It uses its default value, or NULL if nullable and no default is set',
        'It is set to zero automatically',
        'It duplicates the previous row\'s value',
      ],
      answer: 1,
    },
    {
      question: 'What happens if you omit a NOT NULL column with no default from an INSERT?',
      options: ['It defaults to an empty string', 'The INSERT fails with an error', 'It is silently skipped', 'It uses the primary key value'],
      answer: 1,
    },
    {
      question: 'Can INSERT populate a table using the results of a SELECT query?',
      options: ['No, only literal VALUES are allowed', 'Yes, INSERT INTO ... SELECT ... is valid', 'Only in PostgreSQL', 'Only for a single row'],
      answer: 1,
    },
  ],

  previous: 'union',
  next: 'update-and-delete',
};
