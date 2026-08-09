import { Tutorial } from '@/app/types/tutorial';

export const settingUpADatabase: Tutorial = {
  slug: 'setting-up-a-database',

  title: 'Setting Up a Database',

  description: 'Get a SQL database running locally, and connect to it to run your first queries.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 4 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Choosing a Database Engine',
      content:
        'This course uses standard SQL that works across the major engines. PostgreSQL and MySQL are the most common open-source choices for real applications; SQLite is a zero-setup, file-based database great for learning and small projects.',
    },

    {
      type: 'table',
      title: 'Popular SQL Engines',
      headers: ['Engine', 'Good For'],
      rows: [
        ['PostgreSQL', 'Feature-rich, standards-compliant, great default choice'],
        ['MySQL / MariaDB', 'Widely used, huge ecosystem'],
        ['SQLite', 'Zero setup, a single file, ideal for learning and small apps'],
        ['SQL Server', 'Common in enterprise, Windows-centric environments'],
      ],
    },

    {
      type: 'code',
      title: 'Installing PostgreSQL (macOS example)',
      language: 'bash',
      code: `brew install postgresql@16
brew services start postgresql@16

# Connect with the psql CLI
psql postgres`,
    },

    {
      type: 'code',
      title: 'Creating a Database and Table',
      language: 'sql',
      code: `CREATE DATABASE bookstore;

\\c bookstore

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200),
  price DECIMAL(10, 2)
);`,
    },

    {
      type: 'note',
      title: 'SERIAL / AUTO_INCREMENT',
      content:
        'SERIAL (PostgreSQL) or AUTO_INCREMENT (MySQL) automatically generates a unique, incrementing number for a primary key column, so you don\'t have to manually assign IDs on every insert.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'For learning SQL, SQLite (or an in-browser SQL playground) removes almost all setup friction — you can focus entirely on writing queries instead of managing a server.',
    },
  ],

  quiz: [
    {
      question: 'What is a good SQL database choice for learning with zero setup?',
      options: ['SQL Server', 'SQLite', 'Oracle', 'A distributed cluster'],
      answer: 1,
    },
    {
      question: 'What does SERIAL (in PostgreSQL) commonly do for a column?',
      options: [
        'Encrypts the column',
        'Automatically generates a unique, incrementing number',
        'Makes the column read-only',
        'Converts the column to text',
      ],
      answer: 1,
    },
    {
      question: 'Do the major SQL engines (PostgreSQL, MySQL, SQLite) share the same core SQL syntax?',
      options: [
        'No, they are entirely different languages',
        'Yes, core SQL transfers almost entirely between them, with minor dialect differences',
        'Only SELECT statements are shared',
        'Only if using the exact same version',
      ],
      answer: 1,
    },
  ],

  previous: 'sql-data-types',
  next: 'select-statement',
};
