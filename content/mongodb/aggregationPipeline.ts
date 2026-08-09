import { Tutorial } from '@/app/types/tutorial';

export const aggregationPipeline: Tutorial = {
  slug: 'aggregation-pipeline',

  title: 'Aggregation Pipeline',

  description: 'Transform and analyze data with MongoDB\'s aggregation pipeline — a sequence of processing stages.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 17 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'What the Aggregation Pipeline Is',
      content:
        'The aggregation pipeline processes documents through a sequence of stages, each transforming the data before passing it to the next — similar to a Unix pipeline. It handles filtering, grouping, reshaping, and computing values that a plain find() query cannot.',
    },

    {
      type: 'code',
      title: 'A Basic Pipeline',
      language: 'javascript',
      code: `db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$customerId", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } },
])`,
    },

    {
      type: 'paragraph',
      title: 'Reading the Example',
      content:
        'This pipeline first keeps only completed orders ($match), then groups the remaining documents by customer and sums their order amounts ($group), then sorts customers by total spend, highest first ($sort) — three simple stages combining into a "top spenders" report.',
    },

    {
      type: 'table',
      title: 'Common Stages',
      headers: ['Stage', 'Purpose'],
      rows: [
        ['$match', 'Filter documents (like a find() query)'],
        ['$group', 'Group documents and compute aggregates (sum, avg, count)'],
        ['$sort', 'Order the results'],
        ['$project', 'Reshape documents — include, exclude, or compute fields'],
        ['$limit', 'Cap the number of results'],
      ],
    },

    {
      type: 'code',
      title: 'Reshaping with $project',
      language: 'javascript',
      code: `db.users.aggregate([
  { $project: { fullName: { $concat: ["$firstName", " ", "$lastName"] }, email: 1 } },
])`,
    },

    {
      type: 'note',
      title: 'Field References Start with $',
      content:
        'Inside an aggregation pipeline, a $ prefix on a string (like "$customerId") means "the value of this field", not the literal text — a subtle but essential distinction from a regular query filter.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Put $match as early as possible in a pipeline — filtering out unneeded documents first means every later stage has less data to process, which matters a lot on large collections.',
    },
  ],

  quiz: [
    {
      question: 'What does the aggregation pipeline do?',
      options: [
        'Only deletes documents',
        'Processes documents through a sequence of transforming stages',
        'Creates indexes automatically',
        'Replaces find() entirely',
      ],
      answer: 1,
    },
    {
      question: 'What does $group typically do in a pipeline?',
      options: ['Filters documents', 'Groups documents and computes aggregate values like sums or counts', 'Sorts results', 'Deletes duplicates'],
      answer: 1,
    },
    {
      question: 'Why is it good practice to put $match early in a pipeline?',
      options: [
        'It is required syntax',
        'It reduces the number of documents later stages have to process',
        'It has no effect on performance',
        '$match can only appear first',
      ],
      answer: 1,
    },
  ],

  previous: 'data-types',
  next: 'common-aggregation-stages',
};
