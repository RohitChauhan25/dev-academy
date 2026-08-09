export const sql = {
  slug: 'sql',

  title: 'SQL',

  description:
    'Learn SQL from beginner to advanced with step-by-step tutorials covering queries, joins, aggregation, schema design, and transactions.',

  level: 'Beginner to Advanced',

  duration: '8+ Hours',

  tutorials: [
    {
      level: 'Beginner',
      items: [
        {
          title: 'Introduction to SQL',
          slug: 'introduction',
          duration: '10 min',
          description: 'What SQL is and the categories of statements.',
        },
        {
          title: 'Relational Databases',
          slug: 'relational-databases',
          duration: '10 min',
          description: 'Tables, rows, columns, and keys.',
        },
        {
          title: 'SQL Data Types',
          slug: 'sql-data-types',
          duration: '10 min',
          description: 'Common column types.',
        },
        {
          title: 'Setting Up a Database',
          slug: 'setting-up-a-database',
          duration: '10 min',
          description: 'Get a SQL database running.',
        },
        {
          title: 'The SELECT Statement',
          slug: 'select-statement',
          duration: '10 min',
          description: 'Retrieve data from a table.',
        },
        {
          title: 'The WHERE Clause',
          slug: 'where-clause',
          duration: '10 min',
          description: 'Filter which rows are returned.',
        },
        {
          title: 'ORDER BY',
          slug: 'order-by',
          duration: '8 min',
          description: 'Control result order.',
        },
        {
          title: 'LIMIT & OFFSET',
          slug: 'limit-and-offset',
          duration: '8 min',
          description: 'Cap results and paginate.',
        },
        {
          title: 'DISTINCT',
          slug: 'distinct',
          duration: '8 min',
          description: 'Remove duplicate rows.',
        },
      ],
    },
    {
      level: 'Intermediate',
      items: [
        {
          title: 'Comparison Operators',
          slug: 'comparison-operators',
          duration: '8 min',
          description: 'Compare values in a WHERE clause.',
        },
        {
          title: 'Logical Operators',
          slug: 'logical-operators',
          duration: '10 min',
          description: 'Combine conditions with AND, OR, NOT.',
        },
        {
          title: 'LIKE & Wildcards',
          slug: 'like-and-wildcards',
          duration: '10 min',
          description: 'Pattern matching for text.',
        },
        {
          title: 'IN & BETWEEN',
          slug: 'in-and-between',
          duration: '8 min',
          description: 'Match a list of values or a range.',
        },
        {
          title: 'NULL Handling',
          slug: 'null-handling',
          duration: '10 min',
          description: 'Understand and check for NULL correctly.',
        },
        {
          title: 'Aggregate Functions',
          slug: 'aggregate-functions',
          duration: '12 min',
          description: 'COUNT, SUM, AVG, MIN, MAX.',
        },
        {
          title: 'GROUP BY',
          slug: 'group-by',
          duration: '12 min',
          description: 'Aggregate per group of rows.',
        },
        {
          title: 'HAVING',
          slug: 'having',
          duration: '10 min',
          description: 'Filter groups after aggregation.',
        },
        {
          title: 'INNER JOIN',
          slug: 'inner-join',
          duration: '14 min',
          description: 'Combine matched rows from two tables.',
        },
        {
          title: 'LEFT & RIGHT JOIN',
          slug: 'left-and-right-join',
          duration: '14 min',
          description: 'Keep unmatched rows from one side.',
        },
      ],
    },
    {
      level: 'Advanced',
      items: [
        {
          title: 'FULL OUTER JOIN',
          slug: 'full-outer-join',
          duration: '10 min',
          description: 'Keep every row from both tables.',
        },
        {
          title: 'Self Joins',
          slug: 'self-joins',
          duration: '12 min',
          description: 'Join a table to itself.',
        },
        {
          title: 'UNION',
          slug: 'union',
          duration: '10 min',
          description: 'Combine results of two queries.',
        },
        {
          title: 'INSERT',
          slug: 'insert-statement',
          duration: '10 min',
          description: 'Add new rows to a table.',
        },
        {
          title: 'UPDATE & DELETE',
          slug: 'update-and-delete',
          duration: '12 min',
          description: 'Modify and remove existing rows.',
        },
        {
          title: 'Transactions',
          slug: 'transactions',
          duration: '12 min',
          description: 'COMMIT and ROLLBACK grouped statements.',
        },
        {
          title: 'CREATE TABLE & Constraints',
          slug: 'create-table-and-constraints',
          duration: '14 min',
          description: 'Define structure and enforce integrity.',
        },
        {
          title: 'ALTER TABLE',
          slug: 'alter-table',
          duration: '10 min',
          description: 'Change an existing table\'s structure.',
        },
        {
          title: 'Normalization',
          slug: 'normalization',
          duration: '14 min',
          description: 'Reduce duplication and anomalies.',
        },
        {
          title: 'Subqueries',
          slug: 'subqueries',
          duration: '14 min',
          description: 'Nest queries inside queries.',
        },
        {
          title: 'Views, Indexes & Window Functions',
          slug: 'views-indexes-and-window-functions',
          duration: '16 min',
          description: 'Virtual tables, speed, and per-row aggregates.',
        },
      ],
    },
  ],
};
