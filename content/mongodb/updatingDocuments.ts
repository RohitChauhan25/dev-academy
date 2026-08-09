import { Tutorial } from '@/app/types/tutorial';

export const updatingDocuments: Tutorial = {
  slug: 'updating-documents',

  title: 'Updating Documents',

  description: 'Modify existing documents with updateOne, updateMany, and update operators.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 9 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'updateOne and updateMany',
      content:
        'updateOne modifies the first document matching a filter; updateMany modifies every matching document. Both require an update operator like $set — passing a plain object without one would try to replace the entire document instead of modifying specific fields.',
    },

    {
      type: 'code',
      title: 'Updating Specific Fields',
      language: 'javascript',
      code: `db.users.updateOne(
  { email: "ada@example.com" },
  { $set: { age: 29 } }
)

// { acknowledged: true, matchedCount: 1, modifiedCount: 1 }`,
    },

    {
      type: 'table',
      title: 'Common Update Operators',
      headers: ['Operator', 'Effect'],
      rows: [
        ['$set', 'Set a field to a new value (creates it if missing)'],
        ['$unset', 'Remove a field entirely'],
        ['$inc', 'Increment a numeric field by a given amount'],
        ['$push', 'Add an item to an array field'],
        ['$pull', 'Remove matching items from an array field'],
      ],
    },

    {
      type: 'code',
      title: 'Incrementing and Array Updates',
      language: 'javascript',
      code: `// Increment a view counter
db.posts.updateOne({ _id: postId }, { $inc: { views: 1 } })

// Add a tag to an array
db.posts.updateOne({ _id: postId }, { $push: { tags: "featured" } })

// Remove a tag from an array
db.posts.updateOne({ _id: postId }, { $pull: { tags: "featured" } })`,
    },

    {
      type: 'code',
      title: 'Updating Many Documents',
      language: 'javascript',
      code: `// Mark every unpublished post as archived
db.posts.updateMany(
  { published: false },
  { $set: { status: "archived" } }
)`,
    },

    {
      type: 'warning',
      title: 'Replacing vs Updating',
      content:
        'db.users.updateOne({ _id }, { age: 29 }) — without $set — throws an error in modern MongoDB versions, because a plain object without operators is treated as an attempted full document replacement (which is what replaceOne is for), not a partial update.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always use $set for partial updates. Reserve full-document replacement (replaceOne) for cases where you genuinely want to overwrite everything except _id.',
    },
  ],

  quiz: [
    {
      question: 'What does the $set operator do?',
      options: ['Deletes a field', 'Sets a field to a new value', 'Increments a number', 'Replaces the whole document'],
      answer: 1,
    },
    {
      question: 'What does $push do to an array field?',
      options: ['Removes an item', 'Adds an item to the array', 'Sorts the array', 'Empties the array'],
      answer: 1,
    },
    {
      question: 'What is the difference between updateOne and updateMany?',
      options: [
        'updateOne is faster',
        'updateOne modifies the first match; updateMany modifies every match',
        'They are identical',
        'updateMany only works with $inc',
      ],
      answer: 1,
    },
  ],

  previous: 'query-operators',
  next: 'deleting-documents',
};
