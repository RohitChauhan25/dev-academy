import { Tutorial } from '@/app/types/tutorial';

export const union: Tutorial = {
  slug: 'union',

  title: 'UNION',

  description: 'Combine the results of two separate SELECT queries into one result set.',

  level: 'Advanced',

  readingTime: '10 min',

  lesson: 'Lesson 22 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What UNION Does',
      content:
        'UNION stacks the results of two SELECT statements on top of each other into a single result set — unlike JOIN, which combines columns side by side, UNION combines rows.',
    },

    {
      type: 'code',
      title: 'Combining Two Result Sets',
      language: 'sql',
      code: `SELECT name, email FROM customers
UNION
SELECT name, email FROM suppliers;`,
    },

    {
      type: 'table',
      title: 'UNION Requirements',
      headers: ['Rule', 'Why'],
      rows: [
        ['Same number of columns in both queries', 'Rows are stacked directly, column by column'],
        ['Compatible data types per column position', 'The database needs a single consistent type per output column'],
        ['Column names come from the first query', 'The second query\'s column names are ignored in the output'],
      ],
    },

    {
      type: 'code',
      title: 'UNION vs UNION ALL',
      language: 'sql',
      code: `-- Removes duplicate rows (slower — requires de-duplication)
SELECT city FROM customers
UNION
SELECT city FROM suppliers;

-- Keeps every row, including duplicates (faster)
SELECT city FROM customers
UNION ALL
SELECT city FROM suppliers;`,
    },

    {
      type: 'note',
      title: 'UNION Automatically Removes Duplicates',
      content:
        'Plain UNION implicitly deduplicates the combined result, similar to applying DISTINCT — which has a real performance cost. If you know duplicates are fine (or impossible), UNION ALL avoids that extra work.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Default to UNION ALL unless you specifically need duplicates removed — it is faster, and it forces you to think explicitly about whether de-duplication is actually necessary for your use case.',
    },
  ],

  quiz: [
    {
      question: 'What does UNION do differently from JOIN?',
      options: [
        'UNION combines columns side by side; JOIN stacks rows',
        'UNION stacks rows from two queries; JOIN combines columns side by side based on a condition',
        'They are identical',
        'UNION only works on a single table',
      ],
      answer: 1,
    },
    {
      question: 'What is required for two SELECT queries to be combined with UNION?',
      options: [
        'They must query the same table',
        'They must return the same number of columns with compatible types',
        'They must both use WHERE',
        'They must have identical column names',
      ],
      answer: 1,
    },
    {
      question: 'What is the difference between UNION and UNION ALL?',
      options: [
        'UNION ALL is always slower',
        'UNION removes duplicate rows; UNION ALL keeps every row including duplicates',
        'They are functionally identical',
        'UNION ALL only works with numbers',
      ],
      answer: 1,
    },
  ],

  previous: 'self-joins',
  next: 'insert-statement',
};
