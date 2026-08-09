import { Tutorial } from '@/app/types/tutorial';

export const transactions: Tutorial = {
  slug: 'transactions',

  title: 'Transactions',

  description: 'Group multiple statements so they succeed or fail together, with COMMIT and ROLLBACK.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 25 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Transactions Matter',
      content:
        'Some operations require multiple statements to succeed together as a unit — like transferring money, which needs both a debit and a credit to happen, or neither. A transaction groups statements so they can be committed together, or rolled back together if something goes wrong.',
    },

    {
      type: 'code',
      title: 'A Basic Transaction',
      language: 'sql',
      code: `BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;`,
    },

    {
      type: 'code',
      title: 'Rolling Back on Failure',
      language: 'sql',
      code: `BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
-- Something goes wrong here (e.g. insufficient funds check fails)

ROLLBACK;
-- Both statements are undone; the database is unchanged`,
    },

    {
      type: 'table',
      title: 'ACID Properties',
      headers: ['Property', 'Meaning'],
      rows: [
        ['Atomicity', 'All statements in the transaction succeed, or none do'],
        ['Consistency', 'The database moves between valid states'],
        ['Isolation', 'Concurrent transactions don\'t interfere with each other'],
        ['Durability', 'Committed changes survive even a crash'],
      ],
    },

    {
      type: 'note',
      title: 'A Single Statement is Already a Transaction',
      content:
        'Most databases run each individual statement in its own implicit transaction by default (often called "autocommit"). Explicit BEGIN...COMMIT is for when multiple statements need to be treated as one atomic unit.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Keep transactions as short as possible — a long-running transaction can hold locks on rows for an extended period, blocking other queries and reducing overall throughput.',
    },
  ],

  quiz: [
    {
      question: 'What does COMMIT do?',
      options: ['Undoes the transaction', 'Permanently applies the changes made in the transaction', 'Starts a new transaction', 'Locks the table forever'],
      answer: 1,
    },
    {
      question: 'What does ROLLBACK do?',
      options: ['Permanently saves changes', 'Undoes all changes made since BEGIN', 'Deletes the table', 'Restarts the database'],
      answer: 1,
    },
    {
      question: 'Why should transactions be kept as short as possible?',
      options: [
        'Long transactions are not allowed',
        'A long-running transaction can hold locks, blocking other queries',
        'It has no real consequence',
        'Only short transactions can use ROLLBACK',
      ],
      answer: 1,
    },
  ],

  previous: 'update-and-delete',
  next: 'create-table-and-constraints',
};
