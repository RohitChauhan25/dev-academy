import { Tutorial } from '@/app/types/tutorial';

export const oneToManyRelationships: Tutorial = {
  slug: 'one-to-many-relationships',

  title: 'One-to-Many Relationships',

  description: 'Model a one-to-many relationship, like a blog author with many posts, in MongoDB.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 19 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'Three Common Approaches',
      content:
        'A "one-to-many" relationship — like one author having many posts — can be modeled a few different ways in MongoDB, depending on how many "many" really is and how the data is queried.',
    },

    {
      type: 'table',
      title: 'Three Ways to Model One-to-Many',
      headers: ['Approach', 'When to Use'],
      rows: [
        ['Embed the array in the "one" side', 'A small, bounded number of children (e.g. a user\'s 3 addresses)'],
        ['Reference from the "many" side', 'A large or unbounded number of children (e.g. millions of blog posts)'],
        ['Reference from the "one" side (array of IDs)', 'A moderate, capped number of children, queried mostly together with the parent'],
      ],
    },

    {
      type: 'code',
      title: 'Embedding (One-to-Few)',
      language: 'json',
      code: `{
  "_id": "user1",
  "name": "Ada Lovelace",
  "addresses": [
    { "label": "Home", "city": "London" },
    { "label": "Work", "city": "London" }
  ]
}`,
    },

    {
      type: 'code',
      title: 'Referencing From the "Many" Side (One-to-Many-at-Scale)',
      language: 'json',
      code: `// authors collection
{ "_id": "author1", "name": "Ada Lovelace" }

// posts collection — each post references its author
{ "_id": "post1", "title": "Schema Design", "authorId": "author1" }
{ "_id": "post2", "title": "Indexing 101", "authorId": "author1" }`,
    },

    {
      type: 'code',
      title: 'Querying an Author\'s Posts',
      language: 'javascript',
      code: `db.posts.find({ authorId: "author1" })

// Or joined via aggregation:
db.authors.aggregate([
  { $match: { _id: "author1" } },
  { $lookup: { from: "posts", localField: "_id", foreignField: "authorId", as: "posts" } },
])`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'When "many" could realistically grow into the thousands or more, always reference from the "many" side rather than storing an array of child IDs on the parent — an unbounded array eventually hits MongoDB\'s 16MB document size limit.',
    },
  ],

  quiz: [
    {
      question: 'When is embedding the "many" side directly appropriate for a one-to-many relationship?',
      options: [
        'Always, regardless of scale',
        'When the number of children is small and bounded',
        'Only for many-to-many relationships',
        'Never, referencing is always required',
      ],
      answer: 1,
    },
    {
      question: 'Why should an unbounded one-to-many relationship reference from the "many" side?',
      options: [
        'It is slower otherwise',
        'An array of child references on the parent could grow past MongoDB\'s document size limit',
        'MongoDB requires it by default',
        'It has no real reason',
      ],
      answer: 1,
    },
    {
      question: 'What is a practical way to fetch a parent along with its related "many" documents?',
      options: ['A second manual query, or $lookup in an aggregation pipeline', 'It is impossible in MongoDB', 'Only by embedding', 'Only via schema validation'],
      answer: 0,
    },
  ],

  previous: 'common-aggregation-stages',
  next: 'many-to-many-relationships',
};
