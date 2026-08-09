import { Tutorial } from '@/app/types/tutorial';

export const findingDocuments: Tutorial = {
  slug: 'finding-documents',

  title: 'Finding Documents',

  description: 'Query a collection with find and findOne.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 7 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'find and findOne',
      content:
        'find() returns a cursor over every document matching a query filter. findOne() returns just the single first matching document (or null), which is convenient when you only expect one result.',
    },

    {
      type: 'code',
      title: 'Basic Queries',
      language: 'javascript',
      code: `// Every document in the collection
db.users.find()

// Documents where age equals 28
db.users.find({ age: 28 })

// Just the first matching document
db.users.findOne({ email: "ada@example.com" })`,
    },

    {
      type: 'code',
      title: 'Matching Multiple Fields',
      language: 'javascript',
      code: `// Implicit AND — both conditions must match
db.users.find({ age: 28, active: true })`,
    },

    {
      type: 'table',
      title: 'Query Filter Basics',
      headers: ['Filter', 'Meaning'],
      rows: [
        ['{}', 'Match every document'],
        ['{ field: value }', 'Match documents where field equals value exactly'],
        ['{ a: 1, b: 2 }', 'Match documents where a is 1 AND b is 2'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Cursors',
      content:
        'find() doesn\'t immediately return an array — it returns a cursor, which lazily fetches results as you iterate it. In mongosh, the shell automatically prints the first batch; in application code (like the Node.js driver), you typically call .toArray() to collect everything into a real array.',
    },

    {
      type: 'code',
      title: 'Converting a Cursor to an Array (Node.js Driver)',
      language: 'javascript',
      code: `const users = await db.collection('users').find({ age: 28 }).toArray();`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use findOne when you expect (or only need) a single result, like looking up a user by a unique email — it is slightly cheaper than fetching a whole cursor for one document.',
    },
  ],

  quiz: [
    {
      question: 'What does find() return in MongoDB?',
      options: ['An array immediately', 'A cursor that lazily fetches matching documents', 'A single document', 'A count of documents'],
      answer: 1,
    },
    {
      question: 'What does { age: 28, active: true } as a query filter mean?',
      options: ['age is 28 OR active is true', 'age is 28 AND active is true', 'Only active users are counted', 'It is invalid syntax'],
      answer: 1,
    },
    {
      question: 'What does findOne return if nothing matches?',
      options: ['An empty array', 'null', 'An error', 'undefined always throws'],
      answer: 1,
    },
  ],

  previous: 'inserting-documents',
  next: 'query-operators',
};
