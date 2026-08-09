import { Tutorial } from '@/app/types/tutorial';

export const commonAggregationStages: Tutorial = {
  slug: 'common-aggregation-stages',

  title: 'Common Aggregation Stages',

  description: 'A deeper look at $lookup, $unwind, and $facet — the stages that unlock the most powerful reports.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 18 of 26',

  sections: [
    {
      type: 'paragraph',
      title: '$lookup: Joining Collections',
      content:
        '$lookup performs a left outer join with another collection — the closest thing MongoDB has to a SQL JOIN. It is the standard way to pull in referenced data (covered in the embedding vs referencing lesson) within an aggregation pipeline.',
    },

    {
      type: 'code',
      title: 'A $lookup Example',
      language: 'javascript',
      code: `db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "customerId",
      foreignField: "_id",
      as: "customer",
    },
  },
])

// Each order document now also has a "customer" array field
// containing the matching user document(s)`,
    },

    {
      type: 'paragraph',
      title: '$unwind: Flattening Arrays',
      content:
        '$unwind deconstructs an array field, producing one output document per array element. It is commonly used right after $lookup, since $lookup always produces an array — $unwind turns that array of (usually one) matched document into a plain nested object.',
    },

    {
      type: 'code',
      title: '$lookup Followed by $unwind',
      language: 'javascript',
      code: `db.orders.aggregate([
  { $lookup: { from: "users", localField: "customerId", foreignField: "_id", as: "customer" } },
  { $unwind: "$customer" },
])
// "customer" is now a single object instead of a one-item array`,
    },

    {
      type: 'table',
      title: 'More Useful Stages',
      headers: ['Stage', 'Purpose'],
      rows: [
        ['$count', 'Count the documents at that point in the pipeline'],
        ['$facet', 'Run multiple sub-pipelines in parallel, useful for a single query returning both results and a total count'],
        ['$addFields', 'Add new computed fields without removing existing ones'],
      ],
    },

    {
      type: 'code',
      title: '$facet for Paginated Results with a Total Count',
      language: 'javascript',
      code: `db.posts.aggregate([
  { $match: { published: true } },
  {
    $facet: {
      results: [{ $skip: 0 }, { $limit: 10 }],
      totalCount: [{ $count: "count" }],
    },
  },
])`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use $facet when an API endpoint needs both a page of results and a total count for pagination — it avoids running two separate queries against the collection.',
    },
  ],

  quiz: [
    {
      question: 'What does $lookup do?',
      options: ['Deletes documents', 'Performs a left outer join with another collection', 'Sorts results', 'Creates an index'],
      answer: 1,
    },
    {
      question: 'Why is $unwind often used right after $lookup?',
      options: [
        'It is required syntax',
        '$lookup produces an array, and $unwind flattens it into individual documents',
        'It deletes the joined data',
        'It has no relation to $lookup',
      ],
      answer: 1,
    },
    {
      question: 'What is $facet useful for?',
      options: [
        'Deleting documents in bulk',
        'Running multiple sub-pipelines in parallel, like results plus a total count',
        'Creating unique indexes',
        'Renaming fields',
      ],
      answer: 1,
    },
  ],

  previous: 'aggregation-pipeline',
  next: 'one-to-many-relationships',
};
