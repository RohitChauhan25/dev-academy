import { Tutorial } from '@/app/types/tutorial';

export const comparisonOperators: Tutorial = {
  slug: 'comparison-operators',

  title: 'Comparison Operators',

  description: 'A closer look at the operators used to compare values in a WHERE clause.',

  level: 'Intermediate',

  readingTime: '8 min',

  lesson: 'Lesson 10 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Comparing Values',
      content:
        'Comparison operators are the building blocks of any WHERE condition — they compare a column\'s value against a literal, another column, or the result of a subquery.',
    },

    {
      type: 'table',
      title: 'Comparison Operators',
      headers: ['Operator', 'Meaning'],
      rows: [
        ['=', 'Equal to'],
        ['<> or !=', 'Not equal to'],
        ['>', 'Greater than'],
        ['<', 'Less than'],
        ['>=', 'Greater than or equal to'],
        ['<=', 'Less than or equal to'],
      ],
    },

    {
      type: 'code',
      title: 'Comparing Against a Column',
      language: 'sql',
      code: `-- Orders where the discounted price is still above cost
SELECT * FROM orders WHERE price > cost;`,
    },

    {
      type: 'code',
      title: 'Comparing Dates',
      language: 'sql',
      code: `SELECT * FROM orders WHERE created_at >= '2026-01-01';`,
    },

    {
      type: 'note',
      title: 'String Comparison is Case-Sensitive by Default',
      content:
        'In most databases, \'Ada\' = \'ada\' is false by default — string comparisons are case-sensitive unless the column\'s collation is configured otherwise. Use LOWER() on both sides for a case-insensitive comparison.',
    },

    {
      type: 'code',
      title: 'Case-Insensitive Comparison',
      language: 'sql',
      code: `SELECT * FROM users WHERE LOWER(email) = LOWER('Ada@Example.com');`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'For frequently-run case-insensitive lookups (like email login), consider normalizing the stored value (e.g. always lowercase emails on insert) rather than applying a function on every query — it also allows a plain index to be used effectively.',
    },
  ],

  quiz: [
    {
      question: 'Is string comparison case-sensitive by default in most SQL databases?',
      options: ['No, never', 'Yes, unless the collation says otherwise', 'Only for numbers', 'Only in MySQL'],
      answer: 1,
    },
    {
      question: 'What does WHERE price > cost compare?',
      options: ['Two literal values', 'Two columns from the same row', 'Two different tables', 'A column against NULL'],
      answer: 1,
    },
    {
      question: 'What function is commonly used for a case-insensitive comparison?',
      options: ['UPPER() or LOWER()', 'ROUND()', 'COUNT()', 'DISTINCT()'],
      answer: 0,
    },
  ],

  previous: 'distinct',
  next: 'logical-operators',
};
