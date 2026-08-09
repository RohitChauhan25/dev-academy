import { Tutorial } from '@/app/types/tutorial';

export const logicalOperators: Tutorial = {
  slug: 'logical-operators',

  title: 'Logical Operators',

  description: 'Combine multiple conditions in a WHERE clause with AND, OR, and NOT.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 11 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Combining Conditions',
      content:
        'AND, OR, and NOT let you build compound conditions out of simpler ones — the same logical operators you\'d find in any programming language, applied to a WHERE clause.',
    },

    {
      type: 'code',
      title: 'AND and OR',
      language: 'sql',
      code: `-- Both conditions must be true
SELECT * FROM orders WHERE status = 'completed' AND total > 100;

-- Either condition can be true
SELECT * FROM users WHERE role = 'admin' OR role = 'moderator';`,
    },

    {
      type: 'paragraph',
      title: 'Operator Precedence',
      content:
        'AND binds more tightly than OR — a condition like a OR b AND c is evaluated as a OR (b AND c), which can be surprising if you expected left-to-right evaluation. Use parentheses to make the intent explicit.',
    },

    {
      type: 'code',
      title: 'Using Parentheses for Clarity',
      language: 'sql',
      code: `-- Ambiguous without parentheses (AND binds tighter than OR)
SELECT * FROM users WHERE role = 'admin' OR role = 'editor' AND active = true;

-- Explicit and unambiguous
SELECT * FROM users WHERE (role = 'admin' OR role = 'editor') AND active = true;`,
    },

    {
      type: 'code',
      title: 'NOT',
      language: 'sql',
      code: `SELECT * FROM orders WHERE NOT status = 'cancelled';
-- Equivalent to: WHERE status <> 'cancelled'`,
    },

    {
      type: 'table',
      title: 'Truth Table for AND / OR',
      headers: ['A', 'B', 'A AND B', 'A OR B'],
      rows: [
        ['true', 'true', 'true', 'true'],
        ['true', 'false', 'false', 'true'],
        ['false', 'false', 'false', 'false'],
      ],
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always use parentheses when mixing AND and OR in the same WHERE clause — even when you know the precedence rules, explicit grouping makes the query\'s intent obvious to the next person reading it.',
    },
  ],

  quiz: [
    {
      question: 'Which operator has higher precedence in SQL: AND or OR?',
      options: ['OR', 'AND', 'They have equal precedence', 'It depends on the database'],
      answer: 1,
    },
    {
      question: 'What does WHERE NOT status = \'cancelled\' do?',
      options: ['Matches rows where status is cancelled', 'Matches rows where status is anything except cancelled', 'Causes a syntax error', 'Deletes cancelled rows'],
      answer: 1,
    },
    {
      question: 'Why use parentheses when mixing AND and OR?',
      options: [
        'They are required by SQL syntax',
        'To make the intended grouping explicit and avoid relying on precedence rules',
        'They improve performance',
        'They have no effect at all',
      ],
      answer: 1,
    },
  ],

  previous: 'comparison-operators',
  next: 'like-and-wildcards',
};
