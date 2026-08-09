import { Tutorial } from '@/app/types/tutorial';

export const sqlDataTypes: Tutorial = {
  slug: 'sql-data-types',

  title: 'SQL Data Types',

  description: 'The common column types available across most SQL databases.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 3 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Every Column Has a Type',
      content:
        'Unlike a document database, a SQL table enforces a fixed type for every column — every row\'s "age" column must be a number, every row\'s "name" must be text. This is what gives relational databases strong data integrity guarantees by default.',
    },

    {
      type: 'table',
      title: 'Common Data Types',
      headers: ['Type', 'Stores'],
      rows: [
        ['INT / INTEGER', 'Whole numbers'],
        ['DECIMAL(p, s) / NUMERIC', 'Exact decimal numbers, like currency'],
        ['VARCHAR(n)', 'Variable-length text, up to n characters'],
        ['TEXT', 'Long, unbounded text'],
        ['BOOLEAN', 'true / false'],
        ['DATE / TIMESTAMP', 'Calendar dates, or dates with time'],
      ],
    },

    {
      type: 'code',
      title: 'Types in a CREATE TABLE Statement',
      language: 'sql',
      code: `CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10, 2),
  in_stock BOOLEAN,
  created_at TIMESTAMP
);`,
    },

    {
      type: 'warning',
      title: 'Never Use Floating Point for Money',
      content:
        'FLOAT and DOUBLE store approximate values, which can introduce tiny rounding errors — unacceptable for currency. Use DECIMAL(p, s) instead, which stores an exact number of digits before and after the decimal point.',
    },

    {
      type: 'note',
      title: 'VARCHAR vs TEXT',
      content:
        'VARCHAR(n) enforces a maximum length, which can double as basic validation. TEXT has no length limit and is better suited to genuinely unbounded content, like a blog post body.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Pick the narrowest type that correctly represents your data — it improves storage efficiency and lets the database catch invalid data (like text in a numeric column) automatically.',
    },
  ],

  quiz: [
    {
      question: 'Why should currency values use DECIMAL instead of FLOAT?',
      options: [
        'DECIMAL is faster',
        'FLOAT stores approximate values, which can introduce rounding errors unacceptable for money',
        'FLOAT cannot store negative numbers',
        'There is no real difference',
      ],
      answer: 1,
    },
    {
      question: 'What does VARCHAR(100) enforce?',
      options: ['Exactly 100 characters, padded if shorter', 'A maximum of 100 characters', 'A minimum of 100 characters', 'Nothing, it is just documentation'],
      answer: 1,
    },
    {
      question: 'What is a key difference between VARCHAR and TEXT?',
      options: [
        'They are identical in every database',
        'VARCHAR has a defined maximum length; TEXT is typically unbounded',
        'TEXT cannot store letters',
        'VARCHAR is always slower',
      ],
      answer: 1,
    },
  ],

  previous: 'relational-databases',
  next: 'setting-up-a-database',
};
