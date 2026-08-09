export const mongodb = {
  slug: 'mongodb',

  title: 'MongoDB',

  description:
    'Learn MongoDB from beginner to advanced with step-by-step tutorials covering documents, queries, aggregation, schema design, and scaling.',

  level: 'Beginner to Advanced',

  duration: '7+ Hours',

  tutorials: [
    {
      level: 'Beginner',
      items: [
        {
          title: 'Introduction',
          slug: 'introduction',
          duration: '10 min',
          description: 'What MongoDB is and how it differs from SQL.',
        },
        {
          title: 'Installation & Setup',
          slug: 'installation-and-setup',
          duration: '10 min',
          description: 'Run MongoDB locally or use Atlas.',
        },
        {
          title: 'MongoDB Shell & Compass',
          slug: 'mongodb-shell-and-compass',
          duration: '8 min',
          description: 'Interact with MongoDB via CLI and GUI.',
        },
        {
          title: 'Databases & Collections',
          slug: 'databases-and-collections',
          duration: '8 min',
          description: 'How MongoDB organizes data.',
        },
        {
          title: 'Documents & BSON',
          slug: 'documents-and-bson',
          duration: '10 min',
          description: 'What a document actually is.',
        },
        {
          title: 'Inserting Documents',
          slug: 'inserting-documents',
          duration: '8 min',
          description: 'Add data with insertOne and insertMany.',
        },
        {
          title: 'Finding Documents',
          slug: 'finding-documents',
          duration: '10 min',
          description: 'Query with find and findOne.',
        },
        {
          title: 'Query Operators',
          slug: 'query-operators',
          duration: '14 min',
          description: 'Comparison, logical, and array operators.',
        },
      ],
    },
    {
      level: 'Intermediate',
      items: [
        {
          title: 'Updating Documents',
          slug: 'updating-documents',
          duration: '12 min',
          description: 'Modify documents with update operators.',
        },
        {
          title: 'Deleting Documents',
          slug: 'deleting-documents',
          duration: '8 min',
          description: 'Remove documents safely.',
        },
        {
          title: 'Projection',
          slug: 'projection',
          duration: '8 min',
          description: 'Choose which fields a query returns.',
        },
        {
          title: 'Sorting & Limiting',
          slug: 'sorting-and-limiting',
          duration: '8 min',
          description: 'Order and paginate results.',
        },
        {
          title: 'Indexes',
          slug: 'indexes',
          duration: '14 min',
          description: 'Speed up queries with indexes.',
        },
        {
          title: 'Schema Design',
          slug: 'schema-design',
          duration: '12 min',
          description: 'Design around access patterns.',
        },
        {
          title: 'Embedding vs Referencing',
          slug: 'embedding-vs-referencing',
          duration: '14 min',
          description: 'Two ways to model relationships.',
        },
        {
          title: 'MongoDB Data Types',
          slug: 'data-types',
          duration: '10 min',
          description: 'BSON types and common gotchas.',
        },
        {
          title: 'Aggregation Pipeline',
          slug: 'aggregation-pipeline',
          duration: '14 min',
          description: 'Transform data through pipeline stages.',
        },
      ],
    },
    {
      level: 'Advanced',
      items: [
        {
          title: 'Common Aggregation Stages',
          slug: 'common-aggregation-stages',
          duration: '16 min',
          description: '$lookup, $unwind, and $facet.',
        },
        {
          title: 'One-to-Many Relationships',
          slug: 'one-to-many-relationships',
          duration: '12 min',
          description: 'Model one-to-many data.',
        },
        {
          title: 'Many-to-Many Relationships',
          slug: 'many-to-many-relationships',
          duration: '12 min',
          description: 'Model many-to-many data.',
        },
        {
          title: 'Transactions',
          slug: 'transactions',
          duration: '12 min',
          description: 'Multi-document atomic operations.',
        },
        {
          title: 'Replication',
          slug: 'replication',
          duration: '12 min',
          description: 'Replica sets and automatic failover.',
        },
        {
          title: 'Sharding',
          slug: 'sharding',
          duration: '14 min',
          description: 'Scale horizontally across servers.',
        },
        {
          title: 'Mongoose ODM Basics',
          slug: 'mongoose-odm-basics',
          duration: '14 min',
          description: 'Schemas and models in Node.js.',
        },
        {
          title: 'Schema Validation',
          slug: 'schema-validation',
          duration: '12 min',
          description: 'Enforce structure at the database level.',
        },
        {
          title: 'Best Practices',
          slug: 'best-practices',
          duration: '12 min',
          description: 'Schema, performance, and security checklist.',
        },
      ],
    },
  ],
};
