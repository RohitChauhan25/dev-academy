import { Tutorial } from '@/app/types/tutorial';

export const introduction: Tutorial = {
  slug: 'introduction',

  title: 'MongoDB Introduction',

  description: 'Understand what MongoDB is, how it differs from relational databases, and where it fits.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 1 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'What is MongoDB?',
      content:
        'MongoDB is a document-oriented NoSQL database. Instead of storing data in rows and tables like a relational database, it stores data as flexible, JSON-like documents grouped into collections — making it a natural fit for JavaScript and Node.js applications.',
    },

    {
      type: 'code',
      title: 'A MongoDB Document',
      language: 'json',
      code: `{
  "_id": "6720f1a2b3c4d5e6f7a8b9c0",
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "roles": ["admin", "editor"],
  "profile": {
    "bio": "Mathematician and writer",
    "joined": "2026-01-15"
  }
}`,
    },

    {
      type: 'table',
      title: 'Relational vs MongoDB Terminology',
      headers: ['Relational', 'MongoDB'],
      rows: [
        ['Database', 'Database'],
        ['Table', 'Collection'],
        ['Row', 'Document'],
        ['Column', 'Field'],
        ['Primary Key', '_id field'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Schema Flexibility',
      content:
        'Unlike a SQL table, a MongoDB collection does not enforce a fixed set of columns — documents in the same collection can have different fields. This makes it easy to evolve your data model over time, though it puts more responsibility on the application (or schema validation rules) to keep data consistent.',
    },

    {
      type: 'note',
      title: 'MongoDB Stores BSON, Not JSON',
      content:
        'Documents look like JSON but are actually stored as BSON (Binary JSON) — a binary format that adds extra types JSON doesn\'t have, like dates and a proper integer/decimal distinction, while staying fast to parse and traverse.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'MongoDB shines when your data is naturally document-shaped (a user profile, a blog post with comments) and your access patterns are known upfront — it is less suited to workloads that need complex multi-table joins and strict relational integrity.',
    },
  ],

  quiz: [
    {
      question: 'What type of database is MongoDB?',
      options: ['Relational', 'Document-oriented NoSQL', 'Key-value only', 'Graph database'],
      answer: 1,
    },
    {
      question: 'What is the MongoDB equivalent of a SQL table?',
      options: ['Document', 'Field', 'Collection', 'Index'],
      answer: 2,
    },
    {
      question: 'What format does MongoDB actually store documents in?',
      options: ['Plain JSON text', 'BSON (Binary JSON)', 'XML', 'CSV'],
      answer: 1,
    },
  ],

  next: 'installation-and-setup',
};
