import { Tutorial } from '@/app/types/tutorial';

export const queryOperators: Tutorial = {
  slug: 'query-operators',

  title: 'Query Operators',

  description: 'Go beyond exact matches with comparison, logical, and array query operators.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 8 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'Beyond Exact Matches',
      content:
        'Query operators, prefixed with $, let you express conditions like "greater than", "in a list of values", or "field exists" — far more expressive than a plain equality match.',
    },

    {
      type: 'table',
      title: 'Comparison Operators',
      headers: ['Operator', 'Meaning'],
      rows: [
        ['$eq', 'Equal to (same as a plain value)'],
        ['$ne', 'Not equal to'],
        ['$gt / $gte', 'Greater than / greater than or equal'],
        ['$lt / $lte', 'Less than / less than or equal'],
        ['$in', 'Value is in a given array'],
        ['$nin', 'Value is not in a given array'],
      ],
    },

    {
      type: 'code',
      title: 'Using Comparison Operators',
      language: 'javascript',
      code: `// Users older than 25
db.users.find({ age: { $gt: 25 } })

// Users aged 25 to 40 inclusive
db.users.find({ age: { $gte: 25, $lte: 40 } })

// Users with a role of "admin" or "editor"
db.users.find({ role: { $in: ["admin", "editor"] } })`,
    },

    {
      type: 'table',
      title: 'Logical Operators',
      headers: ['Operator', 'Meaning'],
      rows: [
        ['$and', 'All conditions must match'],
        ['$or', 'At least one condition must match'],
        ['$not', 'Negates a condition'],
      ],
    },

    {
      type: 'code',
      title: 'Combining Conditions with $or',
      language: 'javascript',
      code: `db.users.find({
  $or: [{ role: "admin" }, { age: { $gt: 60 } }],
})`,
    },

    {
      type: 'code',
      title: 'Checking Field Existence and Arrays',
      language: 'javascript',
      code: `// Documents that have a "phone" field at all
db.users.find({ phone: { $exists: true } })

// Documents where "tags" array contains "sci-fi"
db.books.find({ tags: "sci-fi" })

// Documents where "tags" contains all of these values
db.books.find({ tags: { $all: ["sci-fi", "classic"] } })`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'For a plain equality match, { field: value } is equivalent to { field: { $eq: value } } — use the shorter form for simple equality, and reserve the $eq operator for cases where you need to combine it with other operators on the same field.',
    },
  ],

  quiz: [
    {
      question: 'What does { age: { $gt: 25 } } match?',
      options: ['Age equal to 25', 'Age greater than 25', 'Age less than 25', 'Age not equal to 25'],
      answer: 1,
    },
    {
      question: 'What does the $in operator check?',
      options: ['If a field exists', 'If a value is one of several given values', 'If two fields are equal', 'If an array is empty'],
      answer: 1,
    },
    {
      question: 'How do you query for documents where an array field contains a specific value?',
      options: [
        'You cannot query arrays directly',
        'db.collection.find({ arrayField: value }) matches if the array contains that value',
        'You must use $exists',
        'Only $all works on arrays',
      ],
      answer: 1,
    },
  ],

  previous: 'finding-documents',
  next: 'updating-documents',
};
