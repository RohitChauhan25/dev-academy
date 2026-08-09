import type { InterviewQuestionTopic } from '@/content/javascript/interview-questions';

export const sqlInterviewQuestions: InterviewQuestionTopic[] = [
  {
    slug: 'introduction',
    title: 'Introduction to SQL',
    questions: [
      {
        question: 'What are the four main categories of SQL statements?',
        answer:
          'DQL (Data Query Language, e.g. SELECT), DML (Data Manipulation Language, e.g. INSERT/UPDATE/DELETE), DDL (Data Definition Language, e.g. CREATE/ALTER/DROP), and DCL (Data Control Language, e.g. GRANT/REVOKE).',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'relational-databases',
    title: 'Relational Databases',
    questions: [
      {
        question: 'What is the difference between a primary key and a foreign key?',
        answer:
          'A primary key uniquely identifies each row within its own table. A foreign key is a column in one table that references the primary key of another table, expressing a relationship between them.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'sql-data-types',
    title: 'SQL Data Types',
    questions: [
      {
        question: 'Why should DECIMAL be used instead of FLOAT for storing currency?',
        answer: 'FLOAT stores approximate values, which can introduce rounding errors — unacceptable for money. DECIMAL stores an exact number of digits, avoiding that imprecision.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'where-clause',
    title: 'The WHERE Clause',
    questions: [
      {
        question: 'Can a WHERE clause filter on a column that isn\'t in the SELECT list?',
        answer: 'Yes — WHERE can reference any column in the table being queried, regardless of which columns are ultimately selected.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'limit-and-offset',
    title: 'LIMIT & OFFSET',
    questions: [
      {
        question: 'Why is a large OFFSET slow on a big table, and what is a common alternative?',
        answer:
          'A large OFFSET still requires scanning and discarding every skipped row internally. Keyset (cursor-based) pagination — filtering with WHERE id > last_seen_id instead — scales much better for deep pagination.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'distinct',
    title: 'DISTINCT',
    questions: [
      {
        question: 'When is a row considered a duplicate with SELECT DISTINCT col1, col2?',
        answer: 'Only when both col1 and col2 match another row exactly — DISTINCT considers the full combination of selected columns.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'logical-operators',
    title: 'Logical Operators',
    questions: [
      {
        question: 'Why should you use parentheses when combining AND and OR in the same WHERE clause?',
        answer:
          'AND has higher precedence than OR, so a OR b AND c is evaluated as a OR (b AND c) — parentheses make the intended grouping explicit rather than relying on precedence rules.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'like-and-wildcards',
    title: 'LIKE & Wildcards',
    questions: [
      {
        question: 'Why is a LIKE pattern with a leading wildcard, like \'%text\', slow on a large table?',
        answer:
          'A leading wildcard means the database can\'t know where a potential match starts, so it can\'t use a standard B-tree index efficiently and has to scan every row.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'null-handling',
    title: 'NULL Handling',
    questions: [
      {
        question: 'Why does WHERE column = NULL never return any rows, even for rows where the column genuinely is NULL?',
        answer:
          'Any comparison involving NULL, including NULL = NULL, evaluates to unknown rather than true. The correct check is column IS NULL.',
        difficulty: 'intermediate',
      },
      {
        question: 'Does COUNT(column) count rows where that column is NULL?',
        answer: 'No — COUNT(column) excludes NULL values; only COUNT(*) counts every row regardless of NULLs.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'aggregate-functions',
    title: 'Aggregate Functions',
    questions: [
      {
        question: 'What is the difference between COUNT(*) and COUNT(column)?',
        answer: 'COUNT(*) counts every row regardless of NULLs. COUNT(column) counts only rows where that specific column has a non-NULL value.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'group-by',
    title: 'GROUP BY',
    questions: [
      {
        question: 'What rule must every column in the SELECT list follow when GROUP BY is used?',
        answer: 'Each selected column must either appear in the GROUP BY clause or be wrapped in an aggregate function — otherwise SQL has no single value to pick for that column within a multi-row group.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'having',
    title: 'HAVING',
    questions: [
      {
        question: 'Why can\'t WHERE be used to filter on an aggregate like SUM(total) > 500?',
        answer: 'WHERE filters individual rows before grouping happens, so the aggregate does not exist yet at that point — HAVING runs after grouping and can filter on aggregate values.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'inner-join',
    title: 'INNER JOIN',
    questions: [
      {
        question: 'What happens to a row with no match on the other side of an INNER JOIN?',
        answer: 'It is excluded from the result entirely — INNER JOIN only returns rows where the join condition matches on both sides.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'left-and-right-join',
    title: 'LEFT & RIGHT JOIN',
    questions: [
      {
        question: 'How would you find customers with no orders using a LEFT JOIN?',
        answer: 'LEFT JOIN orders onto customers, then filter WHERE orders.id IS NULL — customers with no matching order will have NULL in the joined columns.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why is RIGHT JOIN rarely used in practice?',
        answer: 'The same result can always be achieved with a LEFT JOIN and the table order swapped, which most people find more intuitive to read.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'full-outer-join',
    title: 'FULL OUTER JOIN',
    questions: [
      {
        question: 'How can FULL OUTER JOIN be simulated in a database that doesn\'t support it natively, like MySQL?',
        answer: 'By combining a LEFT JOIN and a RIGHT JOIN with UNION, which merges and de-duplicates the two result sets.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'self-joins',
    title: 'Self Joins',
    questions: [
      {
        question: 'Why are table aliases required in a self join?',
        answer: 'Since the table is joined to itself, SQL needs different aliases to distinguish which occurrence of a column a reference means.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'union',
    title: 'UNION',
    questions: [
      {
        question: 'What is the difference between UNION and UNION ALL?',
        answer: 'UNION removes duplicate rows from the combined result (at a performance cost); UNION ALL keeps every row, including duplicates, and is faster.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'update-and-delete',
    title: 'UPDATE & DELETE',
    questions: [
      {
        question: 'What happens if you run an UPDATE or DELETE without a WHERE clause?',
        answer: 'It affects every row in the table — the same danger applies to both statements, which is why previewing with an equivalent SELECT first is a common safety habit.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'transactions',
    title: 'Transactions',
    questions: [
      {
        question: 'What do COMMIT and ROLLBACK do?',
        answer: 'COMMIT permanently applies all changes made since the transaction began. ROLLBACK undoes all of them, returning the database to its state before the transaction started.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does the "Atomicity" property of ACID guarantee?',
        answer: 'That every statement within a transaction succeeds, or none of them do — there is no partial application of a transaction\'s changes.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'create-table-and-constraints',
    title: 'CREATE TABLE & Constraints',
    questions: [
      {
        question: 'What does a FOREIGN KEY constraint enforce?',
        answer: 'That a column\'s value must exist in the referenced column of another table — inserting a value with no matching row in that other table is rejected.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'normalization',
    title: 'Normalization',
    questions: [
      {
        question: 'What problem does normalization primarily aim to solve?',
        answer: 'Data duplication and the update inconsistencies it can cause — e.g. a customer\'s address stored on every order row instead of once in a customers table.',
        difficulty: 'advanced',
      },
      {
        question: 'What is the trade-off of a fully normalized schema?',
        answer: 'More tables and more JOINs are needed to reassemble related data at query time, compared to a denormalized design.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'subqueries',
    title: 'Subqueries',
    questions: [
      {
        question: 'What makes a subquery "correlated", and why can it be slow?',
        answer:
          'A correlated subquery references a column from the outer query, so it must be re-evaluated once per row of the outer query — this can be expensive on large tables, and is sometimes better expressed as a JOIN.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'views-indexes-and-window-functions',
    title: 'Views, Indexes & Window Functions',
    questions: [
      {
        question: 'How does a window function differ from a regular aggregate combined with GROUP BY?',
        answer:
          'A window function keeps every individual row in the result while still computing an aggregate over a related set of rows ("window"), whereas GROUP BY collapses rows into one per group.',
        difficulty: 'advanced',
      },
      {
        question: 'What is a SQL view, and does it store its own copy of the data?',
        answer:
          'A view is a saved, named SELECT query that acts like a virtual table. It does not store its own copy of data — querying it re-runs the underlying query, so results always reflect current data.',
        difficulty: 'intermediate',
      },
    ],
  },
];
