import { Tutorial } from '@/app/types/tutorial';

export const deletingDocuments: Tutorial = {
  slug: 'deleting-documents',

  title: 'Deleting Documents',

  description: 'Remove documents from a collection with deleteOne and deleteMany.',

  level: 'Intermediate',

  readingTime: '8 min',

  lesson: 'Lesson 10 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'deleteOne and deleteMany',
      content:
        'deleteOne removes the first document matching a filter. deleteMany removes every matching document. Both permanently delete the data — there is no built-in undo.',
    },

    {
      type: 'code',
      title: 'Deleting Documents',
      language: 'javascript',
      code: `// Delete a single user by email
db.users.deleteOne({ email: "ada@example.com" })
// { acknowledged: true, deletedCount: 1 }

// Delete every unpublished post
db.posts.deleteMany({ published: false })
// { acknowledged: true, deletedCount: 12 }`,
    },

    {
      type: 'warning',
      title: 'An Empty Filter Deletes Everything',
      content:
        'db.users.deleteMany({}) deletes every document in the collection — the collection itself still exists, but it becomes empty. This is a common, dangerous typo (forgetting the filter object entirely), so always double-check the filter before running a deleteMany.',
    },

    {
      type: 'table',
      title: 'Delete vs Drop',
      headers: ['Operation', 'Effect'],
      rows: [
        ['deleteMany({})', 'Removes all documents, but the collection (and its indexes) still exists'],
        ['db.collection.drop()', 'Removes the collection itself entirely, including its indexes'],
      ],
    },

    {
      type: 'code',
      title: 'Finding Before Deleting',
      language: 'javascript',
      code: `// A safe habit: run find() with the same filter first
db.posts.find({ published: false }).count()
// Confirm the count looks right, then:
db.posts.deleteMany({ published: false })`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'For anything you might need to recover, consider a "soft delete" — setting a deleted: true flag with $set instead of actually removing the document — rather than a permanent deleteOne/deleteMany.',
    },
  ],

  quiz: [
    {
      question: 'What does db.users.deleteMany({}) do?',
      options: ['Nothing, it requires a filter', 'Deletes every document in the collection', 'Drops the entire database', 'Deletes only one document'],
      answer: 1,
    },
    {
      question: 'What is the difference between deleteMany({}) and drop()?',
      options: [
        'They are identical',
        'deleteMany empties the collection but it still exists; drop removes the collection entirely',
        'drop only deletes one document',
        'deleteMany also deletes the database',
      ],
      answer: 1,
    },
    {
      question: 'What is a "soft delete"?',
      options: [
        'A delete that only removes half the fields',
        'Flagging a document as deleted instead of actually removing it',
        'A delete that can be undone automatically by MongoDB',
        'Deleting a collection slowly',
      ],
      answer: 1,
    },
  ],

  previous: 'updating-documents',
  next: 'projection',
};
