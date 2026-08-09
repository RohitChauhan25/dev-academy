import { Tutorial } from '@/app/types/tutorial';

export const dataTypes: Tutorial = {
  slug: 'data-types',

  title: 'MongoDB Data Types',

  description: 'The BSON types available for document fields, and a few gotchas worth knowing.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 16 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'BSON Types',
      content:
        'Because MongoDB stores BSON rather than plain JSON, it supports several types beyond what JSON itself defines — most notably a proper Date type and distinct integer/decimal number types.',
    },

    {
      type: 'table',
      title: 'Common BSON Types',
      headers: ['Type', 'Example'],
      rows: [
        ['String', '"Ada Lovelace"'],
        ['Number (Int32 / Int64 / Double)', '28, 3.14'],
        ['Boolean', 'true / false'],
        ['Date', 'ISODate("2026-08-05T00:00:00Z")'],
        ['ObjectId', 'ObjectId("6720f1a2b3c4d5e6f7a8b9c0")'],
        ['Array', '["sci-fi", "classic"]'],
        ['Object (nested document)', '{ street: "1 Main St", city: "Springfield" }'],
        ['Null', 'null'],
      ],
    },

    {
      type: 'code',
      title: 'Storing Dates Correctly',
      language: 'javascript',
      code: `db.posts.insertOne({
  title: "Schema Design",
  createdAt: new Date(),
})

// Query documents created in the last 7 days
db.posts.find({
  createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
})`,
    },

    {
      type: 'warning',
      title: 'Don\'t Store Dates as Strings',
      content:
        'A common beginner mistake is storing a date as a plain string like "2026-08-05". This breaks range queries, sorting, and date arithmetic — always use the actual Date type so MongoDB can compare and index it properly.',
    },

    {
      type: 'code',
      title: 'Checking a Field\'s Type',
      language: 'javascript',
      code: `db.users.find({ age: { $type: "int" } })
db.users.find({ age: { $type: "string" } }) // catches an accidental "28" instead of 28`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Be consistent about a field\'s type across every document in a collection, even though MongoDB doesn\'t enforce it by default — mixing "28" (string) and 28 (number) for the same field silently breaks numeric queries and sorting.',
    },
  ],

  quiz: [
    {
      question: 'Why should dates be stored using the Date type instead of strings?',
      options: [
        'It saves disk space only',
        'Range queries, sorting, and date math work correctly with the real Date type',
        'Strings are not allowed in MongoDB',
        'It has no real effect',
      ],
      answer: 1,
    },
    {
      question: 'What operator can check the BSON type of a field?',
      options: ['$exists', '$type', '$in', '$set'],
      answer: 1,
    },
    {
      question: 'What can go wrong if the same field is sometimes a string and sometimes a number across documents?',
      options: [
        'Nothing, MongoDB automatically converts it',
        'Numeric queries and sorting on that field can silently miss documents',
        'The collection will fail to insert',
        'It automatically gets indexed differently',
      ],
      answer: 1,
    },
  ],

  previous: 'embedding-vs-referencing',
  next: 'aggregation-pipeline',
};
