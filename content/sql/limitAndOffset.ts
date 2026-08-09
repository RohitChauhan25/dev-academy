import { Tutorial } from '@/app/types/tutorial';

export const limitAndOffset: Tutorial = {
  slug: 'limit-and-offset',

  title: 'LIMIT & OFFSET',

  description: 'Control how many rows a query returns, and paginate through large result sets.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 8 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'LIMIT',
      content:
        'LIMIT caps the number of rows a query returns. It is commonly combined with ORDER BY to get, for example, "the 10 most recent orders".',
    },

    {
      type: 'code',
      title: 'The 5 Most Expensive Products',
      language: 'sql',
      code: `SELECT name, price FROM products
ORDER BY price DESC
LIMIT 5;`,
    },

    {
      type: 'paragraph',
      title: 'OFFSET',
      content:
        'OFFSET skips a given number of rows before starting to return results — combined with LIMIT, this is the classic pattern for pagination.',
    },

    {
      type: 'code',
      title: 'Paginating Results',
      language: 'sql',
      code: `-- Page 1 (rows 1–10)
SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 0;

-- Page 2 (rows 11–20)
SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 10;

-- Page 3 (rows 21–30)
SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 20;`,
    },

    {
      type: 'table',
      title: 'Pagination Formula',
      headers: ['Page', 'OFFSET'],
      rows: [
        ['1', '0'],
        ['2', 'pageSize'],
        ['n', '(n - 1) * pageSize'],
      ],
    },

    {
      type: 'warning',
      title: 'OFFSET Gets Slower on Large Tables',
      content:
        'Just like MongoDB\'s skip(), a large OFFSET still requires the database to scan and discard every skipped row internally. For deep pagination on huge tables, keyset pagination (filtering with WHERE id > last_seen_id instead of OFFSET) scales much better.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always pair LIMIT with an explicit ORDER BY — without one, "the next 10 rows" is not well-defined, and results can shift unpredictably between pages.',
    },
  ],

  quiz: [
    {
      question: 'What does LIMIT 5 do?',
      options: ['Skips the first 5 rows', 'Returns at most 5 rows', 'Deletes 5 rows', 'Groups results into 5 sets'],
      answer: 1,
    },
    {
      question: 'What OFFSET value gets you to page 3 with a page size of 10?',
      options: ['3', '10', '20', '30'],
      answer: 2,
    },
    {
      question: 'Why is a large OFFSET slower on big tables?',
      options: [
        'It is not, OFFSET is always constant time',
        'The database still has to scan and discard every skipped row',
        'It requires rebuilding indexes',
        'LIMIT and OFFSET cannot be combined',
      ],
      answer: 1,
    },
  ],

  previous: 'order-by',
  next: 'distinct',
};
