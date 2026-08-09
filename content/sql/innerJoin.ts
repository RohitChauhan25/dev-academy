import { Tutorial } from '@/app/types/tutorial';

export const innerJoin: Tutorial = {
  slug: 'inner-join',

  title: 'INNER JOIN',

  description: 'Combine rows from two tables based on a related column — the most common type of join.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 18 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Joins Exist',
      content:
        'Because relational databases split data across multiple related tables (recall the authors/books example), you need a way to bring that data back together in a single query. JOIN does exactly that, matching rows between tables based on a shared key.',
    },

    {
      type: 'code',
      title: 'A Basic INNER JOIN',
      language: 'sql',
      code: `SELECT orders.id, orders.total, customers.name
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;`,
    },

    {
      type: 'paragraph',
      title: 'How It Works',
      content:
        'INNER JOIN returns only rows where the join condition matches on both sides. An order with a customer_id that doesn\'t exist in the customers table (or a customer with no orders) is excluded entirely from the result.',
    },

    {
      type: 'table',
      title: 'INNER JOIN Behavior',
      headers: ['Situation', 'Included in Result?'],
      rows: [
        ['Order with a matching customer', 'Yes'],
        ['Order with no matching customer (orphaned)', 'No'],
        ['Customer with no orders', 'No'],
      ],
    },

    {
      type: 'code',
      title: 'Joining and Aggregating Together',
      language: 'sql',
      code: `SELECT customers.name, COUNT(orders.id) AS order_count
FROM customers
INNER JOIN orders ON customers.id = orders.customer_id
GROUP BY customers.name;`,
    },

    {
      type: 'note',
      title: 'Table Aliases',
      content:
        'For longer queries, aliasing tables (FROM orders o JOIN customers c ON o.customer_id = c.id) keeps column references short and readable, and is required when a table is joined against itself (covered in the self join lesson).',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always qualify column names with the table (or alias) once a query joins more than one table — orders.id vs customers.id — even when a column name isn\'t ambiguous yet, it prevents confusion as the query grows.',
    },
  ],

  quiz: [
    {
      question: 'What does INNER JOIN return?',
      options: [
        'Every row from both tables regardless of matches',
        'Only rows where the join condition matches on both sides',
        'Only rows from the first table',
        'Only rows with NULL values',
      ],
      answer: 1,
    },
    {
      question: 'What happens to an order whose customer_id has no matching row in customers with INNER JOIN?',
      options: ['It is included with NULL customer fields', 'It is excluded from the result entirely', 'It causes an error', 'It is duplicated'],
      answer: 1,
    },
    {
      question: 'Why alias table names in a multi-table query?',
      options: [
        'It is required by SQL syntax',
        'It keeps column references shorter and more readable, especially as queries grow',
        'It makes the query run faster',
        'It has no real benefit',
      ],
      answer: 1,
    },
  ],

  previous: 'having',
  next: 'left-and-right-join',
};
