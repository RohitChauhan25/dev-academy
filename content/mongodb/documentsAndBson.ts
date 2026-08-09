import { Tutorial } from '@/app/types/tutorial';

export const documentsAndBson: Tutorial = {
  slug: 'documents-and-bson',

  title: 'Documents & BSON',

  description: 'A closer look at what a MongoDB document actually is, and the special role of the _id field.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 5 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'What a Document Is',
      content:
        'A document is the basic unit of data in MongoDB — a set of field-value pairs, similar to a JSON object. Values can be strings, numbers, booleans, arrays, nested objects, or even other documents, letting you model rich, hierarchical data in a single record.',
    },

    {
      type: 'code',
      title: 'A Document With Nested Data',
      language: 'json',
      code: `{
  "_id": ObjectId("6720f1a2b3c4d5e6f7a8b9c0"),
  "title": "Dune",
  "author": { "name": "Frank Herbert", "born": 1920 },
  "tags": ["sci-fi", "classic"],
  "inStock": true,
  "price": 14.99
}`,
    },

    {
      type: 'paragraph',
      title: 'The _id Field',
      content:
        'Every document has a unique _id field, which acts as its primary key. If you don\'t provide one when inserting, MongoDB automatically generates an ObjectId — a 12-byte value that is effectively guaranteed to be unique, and encodes its creation timestamp.',
    },

    {
      type: 'table',
      title: 'Why BSON Instead of Plain JSON',
      headers: ['Feature', 'Benefit'],
      rows: [
        ['Binary format', 'Faster to parse and traverse than text-based JSON'],
        ['Extra types', 'Native support for dates, binary data, and precise decimals — JSON has no date type'],
        ['Ordered fields', 'Field order is preserved, unlike some JSON implementations'],
      ],
    },

    {
      type: 'code',
      title: 'ObjectId Basics',
      language: 'javascript',
      code: `db.books.insertOne({ title: "Dune" })
// { acknowledged: true, insertedId: ObjectId("6720f1a2b3c4d5e6f7a8b9c0") }

// You can extract the creation timestamp from any ObjectId
ObjectId("6720f1a2b3c4d5e6f7a8b9c0").getTimestamp()`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Let MongoDB auto-generate _id with ObjectId unless you have a specific reason to use your own value (like an existing external ID) — it is optimized for uniqueness and index performance.',
    },
  ],

  quiz: [
    {
      question: 'What field acts as a document\'s primary key in MongoDB?',
      options: ['id', '_id', 'key', 'pk'],
      answer: 1,
    },
    {
      question: 'What happens if you insert a document without specifying _id?',
      options: [
        'The insert fails',
        'MongoDB automatically generates an ObjectId',
        'It defaults to null',
        'It uses the document\'s position as the id',
      ],
      answer: 1,
    },
    {
      question: 'What is one advantage BSON has over plain JSON?',
      options: ['It is human-readable text', 'It has native support for types like dates that JSON lacks', 'It cannot store arrays', 'It is always smaller than XML'],
      answer: 1,
    },
  ],

  previous: 'databases-and-collections',
  next: 'inserting-documents',
};
