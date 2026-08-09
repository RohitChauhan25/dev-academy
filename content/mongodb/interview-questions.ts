import type { InterviewQuestionTopic } from '@/content/javascript/interview-questions';

export const mongodbInterviewQuestions: InterviewQuestionTopic[] = [
  {
    slug: 'introduction',
    title: 'MongoDB Introduction',
    questions: [
      {
        question: 'What kind of database is MongoDB, and how does it differ from a relational database?',
        answer:
          'MongoDB is a document-oriented NoSQL database that stores flexible, JSON-like documents in collections, instead of rows in fixed-schema tables. Collections do not enforce a fixed set of fields the way SQL tables enforce columns.',
        difficulty: 'beginner',
      },
      {
        question: 'What is the MongoDB equivalent of a SQL row?',
        answer: 'A document.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'databases-and-collections',
    title: 'Databases & Collections',
    questions: [
      {
        question: 'When does MongoDB actually create a database you switch to with "use"?',
        answer: 'Only once you insert the first document into it — "use" alone does not create anything.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'documents-and-bson',
    title: 'Documents & BSON',
    questions: [
      {
        question: 'What is an ObjectId, and what information does it encode?',
        answer:
          'A 12-byte value MongoDB automatically generates for _id if none is provided. It encodes a creation timestamp among other components, and is effectively guaranteed to be unique.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why does MongoDB store BSON instead of plain JSON?',
        answer:
          'BSON is a binary format that is faster to parse and traverse than text JSON, and it adds types JSON lacks — like a real Date type and precise numeric types.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'inserting-documents',
    title: 'Inserting Documents',
    questions: [
      {
        question: 'Why is insertMany generally preferred over looping insertOne calls?',
        answer: 'It sends all documents in a single network round trip instead of many separate ones, which is significantly faster for bulk inserts.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'query-operators',
    title: 'Query Operators',
    questions: [
      {
        question: 'How would you query for users aged between 25 and 40, inclusive?',
        answer: 'db.users.find({ age: { $gte: 25, $lte: 40 } })',
        difficulty: 'beginner',
      },
      {
        question: 'What does the $in operator do?',
        answer: 'It matches documents where a field\'s value is one of the values in a given array, similar to SQL\'s IN clause.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'updating-documents',
    title: 'Updating Documents',
    questions: [
      {
        question: 'Why does an update without $set risk replacing the whole document instead of modifying fields?',
        answer:
          'A plain object passed as the update (without an operator like $set) is interpreted as a full document replacement in modern MongoDB versions, not a partial update — you must use $set for partial field updates.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'deleting-documents',
    title: 'Deleting Documents',
    questions: [
      {
        question: 'What does db.collection.deleteMany({}) do, and why is it dangerous?',
        answer:
          'It deletes every document in the collection, since an empty filter object matches everything. It is a common, dangerous typo when someone forgets to add a filter.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'indexes',
    title: 'Indexes',
    questions: [
      {
        question: 'What is a collection scan, and how does an index avoid it?',
        answer:
          'A collection scan is when MongoDB checks every document in a collection to find matches, because there is no index to consult. An index is a separate, ordered structure on a field that lets MongoDB jump directly to matching documents.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is a compound index, and when would you use one?',
        answer:
          'An index on multiple fields together, used when queries commonly filter or sort by that same combination of fields, e.g. { status: 1, createdAt: -1 }.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'schema-design',
    title: 'Schema Design',
    questions: [
      {
        question: 'How does MongoDB schema design differ philosophically from relational schema design?',
        answer:
          'Relational design starts with normalization to minimize duplication. MongoDB design starts with the application\'s access patterns — data that is read together is usually modeled together, even if that means some duplication.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'embedding-vs-referencing',
    title: 'Embedding vs Referencing',
    questions: [
      {
        question: 'When should you choose referencing over embedding?',
        answer:
          'When the related data is large, grows unboundedly, needs to be queried independently, or is shared across many parent documents — embedding it everywhere would duplicate and bloat data unnecessarily.',
        difficulty: 'advanced',
      },
      {
        question: 'What aggregation stage lets you fetch referenced data in a single query?',
        answer: '$lookup, which performs a left outer join with another collection.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'data-types',
    title: 'MongoDB Data Types',
    questions: [
      {
        question: 'Why should dates be stored as the Date type rather than as strings?',
        answer:
          'Storing dates as strings breaks range queries, correct sorting, and date arithmetic — only the real Date type lets MongoDB compare and index dates properly.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'aggregation-pipeline',
    title: 'Aggregation Pipeline',
    questions: [
      {
        question: 'What does the $match stage do, and why is it usually placed early in a pipeline?',
        answer:
          'It filters documents, similar to a find() query. Placing it early reduces the number of documents that later, potentially more expensive stages have to process.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does $group typically compute?',
        answer: 'It groups documents by a key and computes aggregate values across each group, like sums, averages, or counts.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'common-aggregation-stages',
    title: 'Common Aggregation Stages',
    questions: [
      {
        question: 'Why is $unwind often used immediately after $lookup?',
        answer:
          '$lookup always returns an array of matched documents (even if there is only one), and $unwind flattens that array into individual, more usable documents or nested objects.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'one-to-many-relationships',
    title: 'One-to-Many Relationships',
    questions: [
      {
        question: 'Why should an unbounded one-to-many relationship reference from the "many" side rather than storing an array of IDs on the "one" side?',
        answer:
          'An array of child references on the parent could keep growing and eventually exceed MongoDB\'s 16MB document size limit — referencing from the "many" side avoids that ceiling entirely.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'many-to-many-relationships',
    title: 'Many-to-Many Relationships',
    questions: [
      {
        question: 'When should a many-to-many relationship be modeled as its own collection rather than arrays of IDs on both sides?',
        answer:
          'When the relationship itself carries meaningful data, like an enrollment date or a role — a separate collection lets that data live somewhere sensible, similar to a SQL join table with extra columns.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'transactions',
    title: 'Transactions',
    questions: [
      {
        question: 'Is a single-document update in MongoDB atomic without an explicit transaction?',
        answer: 'Yes — a write to a single document, even a deeply nested one, is always atomic by default.',
        difficulty: 'intermediate',
      },
      {
        question: 'When are multi-document transactions actually necessary?',
        answer: 'When an operation spans multiple documents or collections that must all succeed or all fail together, like transferring a balance between two account documents.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'replication',
    title: 'Replication',
    questions: [
      {
        question: 'What happens automatically if the primary node in a replica set becomes unreachable?',
        answer: 'The remaining secondary nodes hold an election and automatically promote one of themselves to be the new primary, typically within seconds.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'sharding',
    title: 'Sharding',
    questions: [
      {
        question: 'Why is choosing a good shard key so important?',
        answer:
          'It determines how evenly data and write load are distributed across shards — a poor choice (like a monotonically increasing timestamp) can funnel most writes to a single shard, and shard keys are very difficult to change later.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'mongoose-odm-basics',
    title: 'Mongoose ODM Basics',
    questions: [
      {
        question: 'What does Mongoose add on top of the raw MongoDB driver?',
        answer:
          'Schema definitions, validation, automatic type casting, query/model helper methods, and middleware hooks (like pre-save) — bringing some application-level structure to MongoDB\'s flexible documents.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'schema-validation',
    title: 'Schema Validation',
    questions: [
      {
        question: 'Why add schema validation at the database level if the application already validates with something like Mongoose?',
        answer:
          'Database-level validation enforces rules no matter what inserts the data — a different service, a script, or a bug — while application-level validation only protects data going through that specific app.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'best-practices',
    title: 'MongoDB Best Practices',
    questions: [
      {
        question: 'Does replication protect against an accidental deleteMany({}) on the wrong collection?',
        answer: 'No — the delete operation replicates to every node in the replica set too, so replication protects against hardware failure, not human error.',
        difficulty: 'advanced',
      },
      {
        question: 'How can you confirm a query is using an index instead of doing a full collection scan?',
        answer:
          'Run .explain("executionStats") on the query and check whether the plan shows IXSCAN (index scan) rather than COLLSCAN (collection scan).',
        difficulty: 'advanced',
      },
    ],
  },
];
