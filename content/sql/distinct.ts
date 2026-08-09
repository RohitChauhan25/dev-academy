import { Tutorial } from '@/app/types/tutorial';

export const distinct: Tutorial = {
  slug: 'distinct',

  title: 'DISTINCT',

  description: 'Remove duplicate rows from query results.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 9 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What DISTINCT Does',
      content:
        'DISTINCT removes duplicate rows from a result set, based on the selected columns. Two rows are considered duplicates only if every selected column matches exactly.',
    },

    {
      type: 'code',
      title: 'Unique Countries in a Users Table',
      language: 'sql',
      code: `SELECT DISTINCT country FROM users;
-- Even if 500 users are from "USA", it appears only once`,
    },

    {
      type: 'code',
      title: 'DISTINCT Across Multiple Columns',
      language: 'sql',
      code: `SELECT DISTINCT country, city FROM users;
-- A row is only removed if BOTH country and city match another row exactly`,
    },

    {
      type: 'table',
      title: 'DISTINCT vs GROUP BY',
      headers: ['Approach', 'Use Case'],
      rows: [
        ['DISTINCT', 'Simply removing duplicate rows'],
        ['GROUP BY', 'Removing duplicates AND computing an aggregate per group (covered later)'],
      ],
    },

    {
      type: 'warning',
      title: 'DISTINCT Can Be Expensive',
      content:
        'Removing duplicates typically requires sorting or hashing the entire result set internally, which can be costly on large tables. Use it deliberately, not as a habitual fix for query results that "look wrong".',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'If you find yourself reaching for DISTINCT to fix duplicate rows caused by a JOIN, it is often a sign the join condition itself needs a closer look — DISTINCT hides the symptom rather than fixing the cause.',
    },
  ],

  quiz: [
    {
      question: 'What does SELECT DISTINCT country FROM users; return?',
      options: ['Every user', 'Each unique country value, once', 'Only the first user', 'A count of users per country'],
      answer: 1,
    },
    {
      question: 'When is a row considered a duplicate with SELECT DISTINCT col1, col2?',
      options: [
        'If col1 matches another row',
        'Only if both col1 AND col2 match another row exactly',
        'If either column matches',
        'DISTINCT cannot be used with multiple columns',
      ],
      answer: 1,
    },
    {
      question: 'Why might relying on DISTINCT to "fix" duplicate rows from a JOIN be a red flag?',
      options: [
        'It always causes an error',
        'It can mask a join condition that is actually incorrect',
        'DISTINCT cannot be used after a JOIN',
        'It has no real downside',
      ],
      answer: 1,
    },
  ],

  previous: 'limit-and-offset',
  next: 'comparison-operators',
};
