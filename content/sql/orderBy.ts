import { Tutorial } from '@/app/types/tutorial';

export const orderBy: Tutorial = {
  slug: 'order-by',

  title: 'ORDER BY',

  description: 'Control the order in which query results are returned.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 7 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Sorting Results',
      content:
        'Without ORDER BY, a SQL query does not guarantee any particular row order — the database may return rows in whatever order is most convenient internally. ORDER BY makes the order explicit and predictable.',
    },

    {
      type: 'code',
      title: 'Sorting Ascending and Descending',
      language: 'sql',
      code: `-- Ascending (default)
SELECT name, age FROM users ORDER BY age;

-- Descending
SELECT name, age FROM users ORDER BY age DESC;`,
    },

    {
      type: 'code',
      title: 'Sorting by Multiple Columns',
      language: 'sql',
      code: `SELECT * FROM users ORDER BY country ASC, age DESC;
-- Groups by country alphabetically, then within each country, oldest first`,
    },

    {
      type: 'table',
      title: 'ORDER BY Keywords',
      headers: ['Keyword', 'Meaning'],
      rows: [
        ['ASC', 'Ascending order (default if omitted)'],
        ['DESC', 'Descending order'],
      ],
    },

    {
      type: 'note',
      title: 'Sorting by Column Position',
      content:
        'ORDER BY 2 sorts by the second column in the SELECT list. It works, but it is fragile — reordering the SELECT list silently changes the sort. Prefer sorting by explicit column name.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'If a query needs a stable, predictable order — like a paginated list — always include an ORDER BY. Relying on "whatever order the database happens to return" can silently change between queries.',
    },
  ],

  quiz: [
    {
      question: 'What is the default sort direction if ASC/DESC is omitted?',
      options: ['DESC', 'ASC', 'Random', 'It depends on the primary key'],
      answer: 1,
    },
    {
      question: 'Without ORDER BY, is row order in a SQL query guaranteed?',
      options: ['Yes, always alphabetical', 'No, it is not guaranteed', 'Yes, always by primary key', 'Only in PostgreSQL'],
      answer: 1,
    },
    {
      question: 'What does ORDER BY country ASC, age DESC do?',
      options: [
        'Sorts only by age',
        'Sorts by country ascending, then by age descending within each country',
        'Causes an error',
        'Sorts randomly',
      ],
      answer: 1,
    },
  ],

  previous: 'where-clause',
  next: 'limit-and-offset',
};
