import { Tutorial } from '@/app/types/tutorial';

export const schemaDesign: Tutorial = {
  slug: 'schema-design',

  title: 'Schema Design',

  description: 'Design MongoDB documents around how your application actually reads and writes data.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 14 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'Design for Access Patterns, Not Normalization',
      content:
        'Relational database design starts with normalization — minimizing duplicate data. MongoDB schema design instead starts with your application\'s access patterns: what data do you read together most often? That data should usually live together in the same document.',
    },

    {
      type: 'paragraph',
      title: 'The Core Trade-off',
      content:
        'MongoDB documents can nest related data directly (embedding) or store just a reference to another document (referencing, covered in the next lesson). The right choice depends on how the data is used, updated, and how large it can grow — there is no single universally correct answer.',
    },

    {
      type: 'table',
      title: 'Questions to Ask When Designing a Schema',
      headers: ['Question', 'Why It Matters'],
      rows: [
        ['What data is read together?', 'Data read together often benefits from being embedded in one document'],
        ['How fast does this data grow?', 'Unbounded arrays (like millions of comments) are a poor fit for embedding'],
        ['How often does it change?', 'Frequently updated sub-data may be better as a separate document'],
        ['Does it need independent queries?', 'Data queried on its own often benefits from its own collection'],
      ],
    },

    {
      type: 'code',
      title: 'A Document Designed Around Reads',
      language: 'json',
      code: `{
  "_id": "post123",
  "title": "MongoDB Schema Design",
  "author": { "name": "Ada Lovelace", "avatar": "/ada.jpg" },
  "commentCount": 12
}`,
    },

    {
      type: 'note',
      title: 'It Is Fine to Duplicate Some Data',
      content:
        'Storing the author\'s name and avatar directly on a post (instead of only a reference) is a deliberate trade-off — it makes reading a post list fast (no extra lookup), at the cost of needing to update it in multiple places if the author changes their name.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Sketch out your application\'s most common queries before designing the schema — "show a user\'s recent orders", "show a post with its comments" — and let those specific reads drive the document structure.',
    },
  ],

  quiz: [
    {
      question: 'What primarily drives MongoDB schema design, more than in relational databases?',
      options: ['Strict normalization', 'The application\'s actual access patterns', 'The hosting provider', 'The programming language used'],
      answer: 1,
    },
    {
      question: 'Why might you intentionally duplicate a small piece of data across documents?',
      options: [
        'It is always a mistake',
        'To make a common read fast, at the cost of needing multiple updates if that data changes',
        'MongoDB requires duplication',
        'To save disk space',
      ],
      answer: 1,
    },
    {
      question: 'What is a poor fit for embedding directly inside a document?',
      options: [
        'A small, fixed-size object like an address',
        'An array that can grow unboundedly, like millions of comments',
        'A user\'s name',
        'A boolean flag',
      ],
      answer: 1,
    },
  ],

  previous: 'indexes',
  next: 'embedding-vs-referencing',
};
