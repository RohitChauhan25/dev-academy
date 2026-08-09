import { Tutorial } from '@/app/types/tutorial';

export const embeddingVsReferencing: Tutorial = {
  slug: 'embedding-vs-referencing',

  title: 'Embedding vs Referencing',

  description: 'The two ways to model relationships between data in MongoDB, and when to use each.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 15 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'Embedding',
      content:
        'Embedding nests related data directly inside the parent document. It is fast to read (one query gets everything) but means the embedded data is duplicated if it also needs to be accessed independently, and it can bloat the document if the embedded data grows without bound.',
    },

    {
      type: 'code',
      title: 'Embedded Example',
      language: 'json',
      code: `{
  "_id": "order1",
  "customer": "Ada Lovelace",
  "items": [
    { "product": "Keyboard", "price": 79.99 },
    { "product": "Mouse", "price": 29.99 }
  ]
}`,
    },

    {
      type: 'paragraph',
      title: 'Referencing',
      content:
        'Referencing stores just an _id pointing to a document in another collection — similar to a foreign key in SQL. It keeps documents small and avoids duplication, but requires a second query (or an aggregation $lookup) to fetch the related data.',
    },

    {
      type: 'code',
      title: 'Referenced Example',
      language: 'json',
      code: `// orders collection
{ "_id": "order1", "customerId": "user42", "productIds": ["p1", "p2"] }

// users collection
{ "_id": "user42", "name": "Ada Lovelace" }`,
    },

    {
      type: 'table',
      title: 'Choosing Between Them',
      headers: ['Use Embedding When', 'Use Referencing When'],
      rows: [
        ['The data is always read together', 'The related data is large or grows unboundedly'],
        ['The data rarely changes independently', 'The related data needs to be queried on its own'],
        ['A "contains" relationship (order → line items)', 'A many-to-many relationship (students ↔ courses)'],
      ],
    },

    {
      type: 'note',
      title: 'It Is Not All-or-Nothing',
      content:
        'A common hybrid: embed a small, frequently-needed summary (like an author\'s name and avatar) while also storing a reference (authorId) for cases that need the full related document.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Default to embedding for one-to-few relationships where the child data has no independent existence (an address inside a user). Default to referencing once the relationship is one-to-many-at-scale or many-to-many.',
    },
  ],

  quiz: [
    {
      question: 'What is the main advantage of embedding related data?',
      options: ['Less disk space', 'A single query retrieves everything, since it is nested in one document', 'It enforces referential integrity', 'It works better for many-to-many relationships'],
      answer: 1,
    },
    {
      question: 'When is referencing generally preferred over embedding?',
      options: [
        'When data is small and always read together',
        'When related data is large, grows unboundedly, or needs independent queries',
        'Never, embedding is always better',
        'Only for the _id field',
      ],
      answer: 1,
    },
    {
      question: 'What MongoDB aggregation stage is commonly used to join referenced data across collections?',
      options: ['$match', '$lookup', '$project', '$sort'],
      answer: 1,
    },
  ],

  previous: 'schema-design',
  next: 'data-types',
};
