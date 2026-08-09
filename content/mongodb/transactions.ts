import { Tutorial } from '@/app/types/tutorial';

export const transactions: Tutorial = {
  slug: 'transactions',

  title: 'Transactions',

  description: 'Group multiple operations across documents (or collections) so they succeed or fail together.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 21 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Transactions Are Needed',
      content:
        'A single document write in MongoDB is always atomic — it either fully succeeds or fully fails. But when an operation spans multiple documents (like transferring money between two account documents), you need a transaction to guarantee both writes succeed or both are rolled back together.',
    },

    {
      type: 'code',
      title: 'A Multi-Document Transaction',
      language: 'javascript',
      code: `const session = db.getMongo().startSession();
session.startTransaction();

try {
  const accounts = session.getDatabase("bank").accounts;

  accounts.updateOne({ _id: "acc1" }, { $inc: { balance: -100 } });
  accounts.updateOne({ _id: "acc2" }, { $inc: { balance: 100 } });

  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
  throw error;
} finally {
  session.endSession();
}`,
    },

    {
      type: 'table',
      title: 'Transaction Guarantees (ACID)',
      headers: ['Property', 'Meaning'],
      rows: [
        ['Atomicity', 'All operations in the transaction succeed, or none do'],
        ['Consistency', 'The database moves from one valid state to another'],
        ['Isolation', 'Concurrent transactions don\'t see each other\'s uncommitted changes'],
        ['Durability', 'Once committed, changes survive even a crash'],
      ],
    },

    {
      type: 'warning',
      title: 'Transactions Have a Performance Cost',
      content:
        'Multi-document transactions are more expensive than individual atomic writes, since MongoDB has to coordinate and lock across documents. Reach for a transaction only when you genuinely need multiple writes to succeed or fail as a unit — most operations don\'t.',
    },

    {
      type: 'note',
      title: 'A Single Document Update is Already Atomic',
      content:
        'If your update only touches fields within a single document — even a deeply nested one — it is already atomic by default, with no transaction needed. This is one reason MongoDB\'s embedding-friendly schema design can reduce how often transactions are necessary in the first place.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Often, good schema design (embedding related data that changes together into one document) eliminates the need for a transaction entirely — reach for transactions when data genuinely must live in separate documents but change together.',
    },
  ],

  quiz: [
    {
      question: 'Is a single document write in MongoDB atomic by default?',
      options: ['No, never', 'Yes, a single document write is always atomic', 'Only with transactions enabled', 'Only for embedded fields'],
      answer: 1,
    },
    {
      question: 'When are multi-document transactions necessary?',
      options: [
        'For every write, always',
        'When multiple documents (or collections) must succeed or fail together as a unit',
        'Only for deletes',
        'Never, MongoDB handles this automatically',
      ],
      answer: 1,
    },
    {
      question: 'What does "Isolation" mean in the context of ACID transactions?',
      options: [
        'Data is stored in isolated servers',
        'Concurrent transactions cannot see each other\'s uncommitted changes',
        'Each transaction runs on a separate database',
        'Transactions cannot be rolled back',
      ],
      answer: 1,
    },
  ],

  previous: 'many-to-many-relationships',
  next: 'replication',
};
