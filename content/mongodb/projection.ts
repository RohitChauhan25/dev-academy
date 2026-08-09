import { Tutorial } from '@/app/types/tutorial';

export const projection: Tutorial = {
  slug: 'projection',

  title: 'Projection',

  description: 'Choose exactly which fields a query returns instead of the whole document.',

  level: 'Intermediate',

  readingTime: '8 min',

  lesson: 'Lesson 11 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'What Projection Does',
      content:
        'find() accepts a second argument — the projection — which controls which fields are included or excluded in the results. This avoids transferring large fields (like a big description or an embedded array) when you only need a couple of values.',
    },

    {
      type: 'code',
      title: 'Including Specific Fields',
      language: 'javascript',
      code: `db.users.find({}, { name: 1, email: 1 })

// Each result only includes _id, name, and email
// { _id: ..., name: "Ada Lovelace", email: "ada@example.com" }`,
    },

    {
      type: 'code',
      title: 'Excluding Specific Fields',
      language: 'javascript',
      code: `db.users.find({}, { password: 0 })
// Returns every field except password`,
    },

    {
      type: 'table',
      title: 'Projection Rules',
      headers: ['Value', 'Meaning'],
      rows: [
        ['1', 'Include this field'],
        ['0', 'Exclude this field'],
        ['_id', 'Included by default; set { _id: 0 } to exclude it explicitly'],
      ],
    },

    {
      type: 'warning',
      title: 'Cannot Mix Include and Exclude',
      content:
        'You generally cannot mix 1 and 0 in the same projection (other than for _id) — { name: 1, password: 0 } is invalid. Decide whether you are building an inclusion list or an exclusion list.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always exclude sensitive fields like password or apiKey with an explicit { password: 0 } projection when returning user documents from an API — never rely on the frontend to simply not display a field it already received.',
    },
  ],

  quiz: [
    {
      question: 'What is a projection in a MongoDB query?',
      options: [
        'A filter for which documents to match',
        'A specification of which fields to include or exclude in the results',
        'A sort order',
        'An index definition',
      ],
      answer: 1,
    },
    {
      question: 'Is _id included in query results by default?',
      options: ['No, never', 'Yes, unless explicitly excluded with { _id: 0 }', 'Only if listed with 1', 'Only for admin users'],
      answer: 1,
    },
    {
      question: 'Can you mix 1 and 0 in the same projection?',
      options: [
        'Yes, freely',
        'Generally no, except for excluding _id alongside an inclusion list',
        'Only in aggregation pipelines',
        'Only for arrays',
      ],
      answer: 1,
    },
  ],

  previous: 'deleting-documents',
  next: 'sorting-and-limiting',
};
