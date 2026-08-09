import { Tutorial } from '@/app/types/tutorial';

export const sortingAndLimiting: Tutorial = {
  slug: 'sorting-and-limiting',

  title: 'Sorting & Limiting',

  description: 'Order query results and control how many documents are returned with sort, limit, and skip.',

  level: 'Intermediate',

  readingTime: '8 min',

  lesson: 'Lesson 12 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'Chaining Cursor Methods',
      content:
        'find() returns a cursor, and methods like sort(), limit(), and skip() are chained onto it to shape the results before they are fetched.',
    },

    {
      type: 'code',
      title: 'Sorting Results',
      language: 'javascript',
      code: `// Newest first (descending)
db.posts.find().sort({ createdAt: -1 })

// Alphabetical by title (ascending)
db.posts.find().sort({ title: 1 })`,
    },

    {
      type: 'table',
      title: 'Cursor Methods',
      headers: ['Method', 'Effect'],
      rows: [
        ['sort({ field: 1 })', 'Ascending order'],
        ['sort({ field: -1 })', 'Descending order'],
        ['limit(n)', 'Return at most n documents'],
        ['skip(n)', 'Skip the first n matching documents'],
      ],
    },

    {
      type: 'code',
      title: 'Pagination with skip and limit',
      language: 'javascript',
      code: `const page = 2;
const pageSize = 10;

db.posts
  .find()
  .sort({ createdAt: -1 })
  .skip((page - 1) * pageSize)
  .limit(pageSize)`,
    },

    {
      type: 'warning',
      title: 'skip() Gets Slow on Large Offsets',
      content:
        'skip() still has to scan and discard every skipped document internally, so skip(100000) is meaningfully slower than skip(10). For deep pagination on large collections, cursor-based pagination (using a value like _id or createdAt from the last item as a starting point) scales much better.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always pair sort() with a limit() when the collection could be large — an unbounded query can return and transfer far more data than an application actually needs.',
    },
  ],

  quiz: [
    {
      question: 'What does sort({ createdAt: -1 }) do?',
      options: ['Sorts ascending by createdAt', 'Sorts descending by createdAt', 'Filters by createdAt', 'Deletes old documents'],
      answer: 1,
    },
    {
      question: 'What does limit(10) do?',
      options: ['Skips the first 10 documents', 'Returns at most 10 documents', 'Deletes documents beyond the 10th', 'Sorts by a field named "limit"'],
      answer: 1,
    },
    {
      question: 'Why does skip() get slower with large offsets?',
      options: [
        'It does not, it is always constant time',
        'It still has to scan and discard every skipped document internally',
        'It rebuilds indexes each time',
        'It only works with sort()',
      ],
      answer: 1,
    },
  ],

  previous: 'projection',
  next: 'indexes',
};
