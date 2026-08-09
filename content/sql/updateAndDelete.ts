import { Tutorial } from '@/app/types/tutorial';

export const updateAndDelete: Tutorial = {
  slug: 'update-and-delete',

  title: 'UPDATE & DELETE',

  description: 'Modify and remove existing rows — and understand why the WHERE clause is critical for both.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 24 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'UPDATE',
      content:
        'UPDATE modifies existing rows that match a WHERE condition, setting one or more columns to new values.',
    },

    {
      type: 'code',
      title: 'Updating Rows',
      language: 'sql',
      code: `UPDATE users
SET age = 29
WHERE email = 'ada@example.com';

-- Multiple columns at once
UPDATE orders
SET status = 'shipped', shipped_at = NOW()
WHERE id = 42;`,
    },

    {
      type: 'paragraph',
      title: 'DELETE',
      content:
        'DELETE removes rows matching a WHERE condition. It removes entire rows, not individual column values — for clearing a column instead, use UPDATE ... SET column = NULL.',
    },

    {
      type: 'code',
      title: 'Deleting Rows',
      language: 'sql',
      code: `DELETE FROM orders WHERE status = 'cancelled';`,
    },

    {
      type: 'warning',
      title: 'A Missing WHERE Clause Affects Every Row',
      content:
        'UPDATE users SET active = false; without a WHERE clause updates every single row in the table — the exact same danger as an unfiltered DELETE. Always double-check the WHERE clause before running either statement, especially against production.',
    },

    {
      type: 'code',
      title: 'A Safety Habit: Preview With SELECT First',
      language: 'sql',
      code: `-- Run this first to see exactly what would be affected
SELECT * FROM orders WHERE status = 'cancelled';

-- Only then run the actual DELETE with the same WHERE clause
DELETE FROM orders WHERE status = 'cancelled';`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'For any UPDATE or DELETE against production data, run the equivalent SELECT with the same WHERE clause first to confirm exactly which rows will be affected before committing to the change.',
    },
  ],

  quiz: [
    {
      question: 'What happens if UPDATE users SET active = false; is run without a WHERE clause?',
      options: [
        'It updates nothing',
        'It updates every row in the table',
        'It throws an error',
        'It only updates the first row',
      ],
      answer: 1,
    },
    {
      question: 'What is a safe habit before running a DELETE with a specific WHERE clause?',
      options: [
        'Nothing extra is needed',
        'Run the equivalent SELECT with the same WHERE clause first to confirm what will be affected',
        'Always add LIMIT 1',
        'Delete the whole table first',
      ],
      answer: 1,
    },
    {
      question: 'Does DELETE remove specific column values or entire rows?',
      options: ['Specific column values only', 'Entire rows', 'It depends on the WHERE clause', 'Neither, it archives rows'],
      answer: 1,
    },
  ],

  previous: 'insert-statement',
  next: 'transactions',
};
