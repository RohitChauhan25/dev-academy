import { Tutorial } from '@/app/types/tutorial';

export const databasesAndCollections: Tutorial = {
  slug: 'databases-and-collections',

  title: 'Databases & Collections',

  description: 'Understand how MongoDB organizes data into databases and collections.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 4 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'The Hierarchy',
      content:
        'A MongoDB server can host multiple databases. Each database contains multiple collections. Each collection holds many documents. This mirrors a SQL server → database → table → row hierarchy, with "collection" replacing "table" and "document" replacing "row".',
    },

    {
      type: 'code',
      title: 'Creating a Database and Collection',
      language: 'javascript',
      code: `use bookstore

// Collections and databases are created implicitly on first write
db.books.insertOne({ title: "Dune", author: "Frank Herbert" })

show dbs
show collections`,
    },

    {
      type: 'note',
      title: 'Databases Are Created Lazily',
      content:
        'Switching to a database with "use" does not actually create it. MongoDB only creates the database (and a collection) the moment you insert the first document into it.',
    },

    {
      type: 'table',
      title: 'Common Database Commands',
      headers: ['Command', 'Effect'],
      rows: [
        ['show dbs', 'List all databases'],
        ['use <db>', 'Switch the current database context'],
        ['show collections', 'List collections in the current database'],
        ['db.dropDatabase()', 'Delete the current database entirely'],
        ['db.<collection>.drop()', 'Delete a specific collection'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Schema-less by Default',
      content:
        'A collection does not enforce any particular structure on its documents unless you add schema validation rules (covered later in this course). This flexibility is powerful, but it also means an application bug can insert inconsistent data more easily than in a strict relational schema.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Name collections with plural, lowercase nouns (users, orders, products) — it reads naturally in queries like db.users.find() and matches MongoDB\'s own conventions.',
    },
  ],

  quiz: [
    {
      question: 'What is the correct hierarchy in MongoDB?',
      options: [
        'Collection → Database → Document',
        'Database → Collection → Document',
        'Document → Database → Collection',
        'Database → Document → Collection',
      ],
      answer: 1,
    },
    {
      question: 'When does MongoDB actually create a new database?',
      options: [
        'The moment you run "use <db>"',
        'When you insert the first document into it',
        'When the server starts',
        'It must be created manually with a special command first',
      ],
      answer: 1,
    },
    {
      question: 'Does a MongoDB collection enforce a fixed schema by default?',
      options: ['Yes, always', 'No, unless schema validation rules are added', 'Only for the first document', 'Only in Atlas'],
      answer: 1,
    },
  ],

  previous: 'mongodb-shell-and-compass',
  next: 'documents-and-bson',
};
