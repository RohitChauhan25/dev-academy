import { Tutorial } from '@/app/types/tutorial';

export const nullHandling: Tutorial = {
  slug: 'null-handling',

  title: 'NULL Handling',

  description: 'Understand what NULL really means in SQL, and why = NULL never works the way you\'d expect.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 14 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'NULL Means "Unknown", Not "Empty"',
      content:
        'NULL represents the absence of a value — it is not the same as an empty string, zero, or false. Critically, any comparison involving NULL (like NULL = NULL) evaluates to unknown, not true, which is why = NULL never matches anything.',
    },

    {
      type: 'code',
      title: 'The Classic NULL Mistake',
      language: 'sql',
      code: `-- Wrong: this NEVER matches, even for rows where phone actually is NULL
SELECT * FROM users WHERE phone = NULL;

-- Correct
SELECT * FROM users WHERE phone IS NULL;`,
    },

    {
      type: 'table',
      title: 'Checking for NULL',
      headers: ['Expression', 'Meaning'],
      rows: [
        ['col IS NULL', 'True if the column has no value'],
        ['col IS NOT NULL', 'True if the column has a value'],
        ['col = NULL', 'Always evaluates to unknown — never use this'],
      ],
    },

    {
      type: 'code',
      title: 'COALESCE: A Fallback Value',
      language: 'sql',
      code: `-- Show "N/A" instead of NULL for missing phone numbers
SELECT name, COALESCE(phone, 'N/A') AS phone FROM users;`,
    },

    {
      type: 'warning',
      title: 'NULL Values Are Excluded from Most Aggregates',
      content:
        'COUNT(column) skips NULL values entirely — only COUNT(*) counts every row regardless of NULLs. AVG(), SUM(), MIN(), and MAX() also silently ignore NULL rows rather than treating them as zero.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Decide deliberately whether a column should ever be NULL — mark columns NOT NULL wherever a missing value genuinely shouldn\'t be allowed, rather than defaulting every column to nullable.',
    },
  ],

  quiz: [
    {
      question: 'Why does WHERE phone = NULL never match any rows?',
      options: [
        'It is a syntax error',
        'Any comparison with NULL evaluates to unknown, not true, even NULL = NULL',
        'NULL is treated as an empty string',
        'It matches every row instead',
      ],
      answer: 1,
    },
    {
      question: 'What is the correct way to check for a missing value?',
      options: ['col = NULL', 'col IS NULL', 'col == NULL', 'col.isNull()'],
      answer: 1,
    },
    {
      question: 'What does COUNT(column) do with NULL values in that column?',
      options: ['Counts them as zero', 'Skips/excludes them', 'Throws an error', 'Counts them as one each'],
      answer: 1,
    },
  ],

  previous: 'in-and-between',
  next: 'aggregate-functions',
};
