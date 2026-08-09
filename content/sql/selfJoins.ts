import { Tutorial } from '@/app/types/tutorial';

export const selfJoins: Tutorial = {
  slug: 'self-joins',

  title: 'Self Joins',

  description: 'Join a table to itself to compare rows within the same table.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 21 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'When You Need a Self Join',
      content:
        'A self join is used when rows in a table relate to other rows in the same table — a classic example is an employees table where each row has a manager_id pointing to another employee\'s id.',
    },

    {
      type: 'code',
      title: 'Employees and Their Managers',
      language: 'sql',
      code: `SELECT e.name AS employee, m.name AS manager
FROM employees e
JOIN employees m ON e.manager_id = m.id;`,
    },

    {
      type: 'paragraph',
      title: 'Why Aliases Are Required',
      content:
        'Since the query joins employees to itself, both sides need different aliases (e and m here) — without them, SQL wouldn\'t be able to tell which occurrence of employees.name a given column reference means.',
    },

    {
      type: 'code',
      title: 'Including Employees With No Manager (LEFT JOIN)',
      language: 'sql',
      code: `SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;
-- The CEO (manager_id is NULL) still appears, with manager as NULL`,
    },

    {
      type: 'table',
      title: 'Common Self Join Use Cases',
      headers: ['Scenario', 'Example'],
      rows: [
        ['Hierarchies', 'Employees and managers, categories and subcategories'],
        ['Finding pairs', 'Products in the same category, priced within $5 of each other'],
        ['Comparing rows', 'Finding duplicate email addresses in a users table'],
      ],
    },

    {
      type: 'code',
      title: 'Finding Duplicate Emails',
      language: 'sql',
      code: `SELECT a.id, b.id, a.email
FROM users a
JOIN users b ON a.email = b.email AND a.id <> b.id;`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'The a.id <> b.id condition in a self join is essential when comparing rows for equality on another field — without it, every row trivially "matches itself".',
    },
  ],

  quiz: [
    {
      question: 'What is a self join used for?',
      options: [
        'Joining two completely unrelated tables',
        'Joining a table to itself to relate rows within the same table',
        'Removing duplicate rows',
        'Sorting a result set',
      ],
      answer: 1,
    },
    {
      question: 'Why do self joins require table aliases?',
      options: [
        'They are optional but improve style',
        'Without them, SQL cannot distinguish between the two occurrences of the same table',
        'Aliases are required for every JOIN, not specific to self joins',
        'Self joins do not require aliases',
      ],
      answer: 1,
    },
    {
      question: 'Why include a.id <> b.id when self-joining to find rows with matching values?',
      options: [
        'It is unnecessary',
        'To avoid trivially matching each row with itself',
        'To make the query faster',
        'To enable indexing',
      ],
      answer: 1,
    },
  ],

  previous: 'full-outer-join',
  next: 'union',
};
