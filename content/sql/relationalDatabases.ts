import { Tutorial } from '@/app/types/tutorial';

export const relationalDatabases: Tutorial = {
  slug: 'relational-databases',

  title: 'Relational Databases',

  description: 'Understand tables, rows, columns, and how relationships between tables are modeled.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 2 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What Makes a Database "Relational"',
      content:
        'A relational database organizes data into tables with a fixed set of columns, and models relationships between tables using shared key values — rather than nesting related data inside a single record, as a document database does.',
    },

    {
      type: 'table',
      title: 'Core Terminology',
      headers: ['Term', 'Meaning'],
      rows: [
        ['Table', 'A structured collection of rows, all sharing the same columns'],
        ['Row (Record)', 'A single entry in a table'],
        ['Column (Field)', 'A named attribute every row has a value for'],
        ['Primary Key', 'A column (or set of columns) that uniquely identifies each row'],
        ['Foreign Key', 'A column referencing the primary key of another table, expressing a relationship'],
      ],
    },

    {
      type: 'code',
      title: 'Two Related Tables',
      language: 'sql',
      code: `-- authors table
id | name
1  | Ada Lovelace

-- books table
id | title              | author_id
1  | Analytical Engine   | 1`,
    },

    {
      type: 'paragraph',
      title: 'Why Relationships Matter',
      content:
        'The books.author_id column references authors.id — this is a foreign key relationship. It lets you look up which author wrote a book, or which books an author wrote, without duplicating the author\'s data into every single book row.',
    },

    {
      type: 'note',
      title: 'Relational vs Document Databases',
      content:
        'A document database like MongoDB often embeds related data directly. A relational database instead normalizes data into separate tables connected by keys, and uses JOINs (covered later in this course) to bring related data back together at query time.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Every table should have a primary key. It is what makes a specific row addressable, and what foreign keys in other tables point to.',
    },
  ],

  quiz: [
    {
      question: 'What is a primary key?',
      options: ['A column that can be duplicated freely', 'A column (or columns) that uniquely identifies each row in a table', 'A password for the database', 'The first column in a table'],
      answer: 1,
    },
    {
      question: 'What does a foreign key represent?',
      options: ['A duplicate of a primary key in the same table', 'A reference from one table to the primary key of another', 'An encrypted column', 'A column with no data type'],
      answer: 1,
    },
    {
      question: 'How does a relational database typically avoid duplicating an author\'s data across every one of their books?',
      options: [
        'It embeds the author document in every book',
        'It stores the author once in its own table and references it by foreign key',
        'It does not support this relationship',
        'It stores authors as a comma-separated string',
      ],
      answer: 1,
    },
  ],

  previous: 'introduction',
  next: 'sql-data-types',
};
