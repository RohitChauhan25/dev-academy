import { Tutorial } from '@/app/types/tutorial';

export const likeAndWildcards: Tutorial = {
  slug: 'like-and-wildcards',

  title: 'LIKE & Wildcards',

  description: 'Match text patterns with LIKE, using the % and _ wildcards.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 12 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Pattern Matching with LIKE',
      content:
        'LIKE matches text against a pattern containing wildcards, rather than requiring an exact match. It is the standard SQL tool for "contains", "starts with", and "ends with" style searches.',
    },

    {
      type: 'table',
      title: 'Wildcards',
      headers: ['Wildcard', 'Matches'],
      rows: [
        ['%', 'Zero or more of any character'],
        ['_', 'Exactly one of any character'],
      ],
    },

    {
      type: 'code',
      title: 'Common LIKE Patterns',
      language: 'sql',
      code: `-- Starts with "A"
SELECT * FROM users WHERE name LIKE 'A%';

-- Ends with "@gmail.com"
SELECT * FROM users WHERE email LIKE '%@gmail.com';

-- Contains "love" anywhere
SELECT * FROM users WHERE name LIKE '%love%';

-- Exactly 5 characters, starting with "A"
SELECT * FROM users WHERE name LIKE 'A____';`,
    },

    {
      type: 'note',
      title: 'ILIKE for Case-Insensitive Matching',
      content:
        'LIKE is case-sensitive in most databases. PostgreSQL offers ILIKE as a case-insensitive equivalent; MySQL\'s LIKE is often case-insensitive by default depending on the column\'s collation.',
    },

    {
      type: 'warning',
      title: 'Leading Wildcards Are Slow',
      content:
        'A pattern like \'%love%\' cannot use a standard B-tree index efficiently, because the database can\'t know where a match might start — it has to scan every row. \'love%\' (no leading wildcard) can use an index normally.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'For real full-text search features (search-as-you-type, relevance ranking), use your database\'s dedicated full-text search capabilities instead of LIKE \'%...%\' — it is dramatically faster at scale.',
    },
  ],

  quiz: [
    {
      question: 'What does the % wildcard match in a LIKE pattern?',
      options: ['Exactly one character', 'Zero or more of any character', 'Only digits', 'Nothing, it is literal'],
      answer: 1,
    },
    {
      question: 'What does the _ wildcard match?',
      options: ['Zero or more characters', 'Exactly one character', 'Only letters', 'The start of a string'],
      answer: 1,
    },
    {
      question: 'Why is a pattern like \'%text%\' slower than \'text%\'?',
      options: [
        'It is not actually slower',
        'A leading wildcard prevents efficient use of a standard index, forcing a full scan',
        'It only works on numbers',
        'LIKE cannot use % at the start at all',
      ],
      answer: 1,
    },
  ],

  previous: 'logical-operators',
  next: 'in-and-between',
};
