import { Tutorial } from '@/app/types/tutorial';

export const insertingDocuments: Tutorial = {
  slug: 'inserting-documents',

  title: 'Inserting Documents',

  description: 'Add new documents to a collection with insertOne and insertMany.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 6 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'insertOne',
      content:
        'insertOne adds a single document to a collection. If the collection doesn\'t exist yet, MongoDB creates it automatically on this first insert.',
    },

    {
      type: 'code',
      title: 'Inserting a Single Document',
      language: 'javascript',
      code: `db.users.insertOne({
  name: "Ada Lovelace",
  email: "ada@example.com",
  age: 28,
})

// {
//   acknowledged: true,
//   insertedId: ObjectId("6720f1a2b3c4d5e6f7a8b9c0")
// }`,
    },

    {
      type: 'code',
      title: 'Inserting Many Documents at Once',
      language: 'javascript',
      code: `db.users.insertMany([
  { name: "Grace Hopper", age: 45 },
  { name: "Alan Turing", age: 33 },
])

// { acknowledged: true, insertedIds: { '0': ObjectId(...), '1': ObjectId(...) } }`,
    },

    {
      type: 'table',
      title: 'insertOne vs insertMany',
      headers: ['Method', 'Use Case'],
      rows: [
        ['insertOne', 'Adding a single document'],
        ['insertMany', 'Bulk-loading many documents in one round trip, much faster than looping insertOne calls'],
      ],
    },

    {
      type: 'warning',
      title: 'insertMany Defaults to Ordered Inserts',
      content:
        'By default, if one document in an insertMany call fails validation, MongoDB stops and does not insert any documents after it. Pass { ordered: false } if you want MongoDB to skip failed documents and keep inserting the rest.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Prefer insertMany over a loop of insertOne calls when adding several documents at once — it is a single network round trip instead of many, which matters a lot for performance.',
    },
  ],

  quiz: [
    {
      question: 'What does insertOne return on success?',
      options: [
        'The full inserted document',
        'An acknowledgment object including the generated _id',
        'Nothing',
        'The entire collection',
      ],
      answer: 1,
    },
    {
      question: 'Why is insertMany generally faster than looping insertOne calls?',
      options: [
        'It uses less memory',
        'It sends all documents in a single network round trip',
        'It skips validation',
        'It does not generate _id values',
      ],
      answer: 1,
    },
    {
      question: 'What does { ordered: false } do in insertMany?',
      options: [
        'Sorts the documents before inserting',
        'Lets MongoDB skip failed documents and continue inserting the rest',
        'Disables _id generation',
        'Inserts documents in reverse order',
      ],
      answer: 1,
    },
  ],

  previous: 'documents-and-bson',
  next: 'finding-documents',
};
