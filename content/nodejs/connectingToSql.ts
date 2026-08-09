import { Tutorial } from '@/app/types/tutorial';

export const connectingToSql: Tutorial = {
  slug: 'connecting-to-sql',

  title: 'Connecting to SQL',

  description: 'Connect a Node.js/Express app to a SQL database, and understand why a connection pool matters.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 28 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Connection Pools',
      content:
        'Opening a brand-new database connection for every single request is slow and wasteful. A connection pool keeps a set of ready-to-use connections open, handing one out per query and returning it to the pool afterward.',
    },

    {
      type: 'code',
      title: 'Setting Up a Pool (PostgreSQL Example)',
      language: 'javascript',
      code: `import pg from 'pg';

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;`,
    },

    {
      type: 'code',
      title: 'Querying From a Route',
      language: 'javascript',
      code: `import pool from './db.js';

app.get('/api/users/:id', async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Not found' });
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});`,
    },

    {
      type: 'warning',
      title: 'Never Build SQL Strings by Concatenation',
      content:
        'Inserting user input directly into a SQL string (like `SELECT * FROM users WHERE id = ${req.params.id}`) is vulnerable to SQL injection. Always use parameterized queries — placeholders like $1 — where the driver safely escapes values for you.',
    },

    {
      type: 'code',
      title: 'Parameterized Queries Prevent SQL Injection',
      language: 'javascript',
      code: `// Dangerous — never do this
const bad = await pool.query(\`SELECT * FROM users WHERE email = '\${req.body.email}'\`);

// Safe — the driver escapes the value automatically
const safe = await pool.query('SELECT * FROM users WHERE email = $1', [req.body.email]);`,
    },

    {
      type: 'paragraph',
      title: 'ORMs as an Alternative',
      content:
        'Tools like Prisma, Drizzle, and Sequelize sit on top of the raw driver, letting you query using JavaScript/TypeScript objects and methods instead of writing raw SQL strings — trading some control for significantly less boilerplate and built-in protection against injection.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always use parameterized queries (or an ORM that generates them for you) — never string-concatenate user input into SQL, regardless of how "trusted" the input source seems.',
    },
  ],

  quiz: [
    {
      question: 'Why use a connection pool instead of opening a new connection per request?',
      options: [
        'It has no real benefit',
        'Opening a fresh connection per request is slow; a pool reuses ready connections',
        'Pools are required by SQL syntax',
        'It only matters for MongoDB',
      ],
      answer: 1,
    },
    {
      question: 'Why is string-concatenating user input into a SQL query dangerous?',
      options: [
        'It is not dangerous if done carefully',
        'It opens the door to SQL injection attacks',
        'It only affects performance',
        'It is a syntax error',
      ],
      answer: 1,
    },
    {
      question: 'What do parameterized queries (like $1 placeholders) protect against?',
      options: ['Slow queries', 'SQL injection, by safely escaping values', 'Connection timeouts', 'Missing indexes'],
      answer: 1,
    },
  ],

  previous: 'connecting-to-mongodb',
  next: 'authentication-basics',
};
