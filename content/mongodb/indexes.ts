import { Tutorial } from '@/app/types/tutorial';

export const indexes: Tutorial = {
  slug: 'indexes',

  title: 'Indexes',

  description: 'Speed up queries dramatically by indexing the fields you search and sort on most often.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 13 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Indexes Matter',
      content:
        'Without an index, MongoDB has to scan every document in a collection to find matches — a "collection scan". An index is a separate, ordered data structure on a field (or fields) that lets MongoDB jump directly to matching documents instead, turning a linear scan into something closer to a lookup.',
    },

    {
      type: 'code',
      title: 'Creating a Simple Index',
      language: 'javascript',
      code: `db.users.createIndex({ email: 1 })

// List all indexes on a collection
db.users.getIndexes()`,
    },

    {
      type: 'paragraph',
      title: 'The Default _id Index',
      content:
        'Every collection automatically has an index on _id — you never need to create it yourself, and it is what makes lookups by ID fast by default.',
    },

    {
      type: 'code',
      title: 'A Compound Index',
      language: 'javascript',
      code: `// Speeds up queries that filter by status AND sort by createdAt
db.posts.createIndex({ status: 1, createdAt: -1 })`,
    },

    {
      type: 'table',
      title: 'Common Index Types',
      headers: ['Type', 'Use Case'],
      rows: [
        ['Single field', 'Speeds up queries/sorts on one field'],
        ['Compound', 'Speeds up queries that filter or sort on multiple fields together'],
        ['Unique', 'Enforces that a field\'s values are never duplicated'],
        ['Text', 'Enables full-text search across string fields'],
      ],
    },

    {
      type: 'code',
      title: 'A Unique Index',
      language: 'javascript',
      code: `db.users.createIndex({ email: 1 }, { unique: true })
// Inserting a second user with the same email now fails`,
    },

    {
      type: 'warning',
      title: 'Indexes Are Not Free',
      content:
        'Every index speeds up reads but slows down writes slightly (each insert/update also has to update every relevant index) and consumes extra disk space. Index the fields your queries actually filter and sort on — not every field.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use .explain() on a slow query to see whether MongoDB is doing an efficient index scan or an expensive full collection scan — it is the single best debugging tool for query performance.',
    },
  ],

  quiz: [
    {
      question: 'What happens without an index when querying on a field?',
      options: [
        'The query fails',
        'MongoDB scans every document in the collection (a collection scan)',
        'The query returns no results',
        'MongoDB creates an index automatically every time',
      ],
      answer: 1,
    },
    {
      question: 'Which field is automatically indexed on every MongoDB collection?',
      options: ['name', 'createdAt', '_id', 'None by default'],
      answer: 2,
    },
    {
      question: 'What is a downside of adding an index?',
      options: [
        'It has no downsides',
        'It slightly slows down writes and uses extra disk space',
        'It makes all queries slower',
        'It prevents deleting documents',
      ],
      answer: 1,
    },
  ],

  previous: 'sorting-and-limiting',
  next: 'schema-design',
};
