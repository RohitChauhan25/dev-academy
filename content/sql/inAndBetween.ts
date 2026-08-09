import { Tutorial } from '@/app/types/tutorial';

export const inAndBetween: Tutorial = {
  slug: 'in-and-between',

  title: 'IN & BETWEEN',

  description: 'Two operators that make WHERE conditions more concise: matching a list of values, or a range.',

  level: 'Intermediate',

  readingTime: '8 min',

  lesson: 'Lesson 13 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'IN',
      content:
        'IN checks whether a value matches any value in a given list — a concise alternative to a long chain of OR conditions.',
    },

    {
      type: 'code',
      title: 'IN Instead of Repeated OR',
      language: 'sql',
      code: `-- Verbose
SELECT * FROM users WHERE role = 'admin' OR role = 'editor' OR role = 'moderator';

-- Equivalent, and more readable
SELECT * FROM users WHERE role IN ('admin', 'editor', 'moderator');`,
    },

    {
      type: 'paragraph',
      title: 'BETWEEN',
      content:
        'BETWEEN checks whether a value falls within an inclusive range — it is shorthand for two comparisons combined with AND.',
    },

    {
      type: 'code',
      title: 'BETWEEN for a Range',
      language: 'sql',
      code: `-- Equivalent to: WHERE age >= 18 AND age <= 65
SELECT * FROM users WHERE age BETWEEN 18 AND 65;

-- Also works with dates
SELECT * FROM orders WHERE created_at BETWEEN '2026-01-01' AND '2026-01-31';`,
    },

    {
      type: 'table',
      title: 'Combining with NOT',
      headers: ['Expression', 'Meaning'],
      rows: [
        ['col NOT IN (a, b, c)', 'Value is not any of a, b, or c'],
        ['col NOT BETWEEN a AND b', 'Value is outside the inclusive range a to b'],
      ],
    },

    {
      type: 'warning',
      title: 'BETWEEN is Inclusive on Both Ends',
      content:
        'BETWEEN 18 AND 65 matches ages exactly equal to 18 or 65, not just values strictly in between. This trips people up especially with date ranges, where BETWEEN \'2026-01-01\' AND \'2026-01-31\' can miss rows with a timestamp later on Jan 31 (e.g. 23:00) depending on the column type.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'For date ranges with a TIMESTAMP column, prefer created_at >= start AND created_at < end (using an exclusive upper bound the day after) over BETWEEN, to avoid accidentally cutting off part of the last day.',
    },
  ],

  quiz: [
    {
      question: 'What does WHERE role IN (\'admin\', \'editor\') do?',
      options: ['Matches only "admin"', 'Matches role equal to either "admin" or "editor"', 'Matches nothing', 'Causes an error'],
      answer: 1,
    },
    {
      question: 'Is BETWEEN inclusive or exclusive of its endpoints?',
      options: ['Exclusive of both', 'Inclusive of both', 'Inclusive only of the lower bound', 'It depends on the database'],
      answer: 1,
    },
    {
      question: 'Why might BETWEEN be risky for a date range using a TIMESTAMP column?',
      options: [
        'It never works with dates',
        'It can miss later times on the final day if the upper bound is just a date',
        'It requires an index',
        'It only works with integers',
      ],
      answer: 1,
    },
  ],

  previous: 'like-and-wildcards',
  next: 'null-handling',
};
