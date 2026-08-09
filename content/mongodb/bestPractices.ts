import { Tutorial } from '@/app/types/tutorial';

export const bestPractices: Tutorial = {
  slug: 'best-practices',

  title: 'MongoDB Best Practices',

  description: 'A checklist of habits for schema design, performance, and security in production.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 26 of 26',

  sections: [
    {
      type: 'list',
      title: 'Schema Design',
      items: [
        'Design documents around your application\'s actual access patterns, not abstract normalization',
        'Embed data that is small, bounded, and read together',
        'Reference data that is large, unbounded, or queried independently',
        'Avoid unbounded arrays that could exceed the 16MB document size limit',
      ],
    },

    {
      type: 'list',
      title: 'Performance',
      items: [
        'Index the fields your queries actually filter and sort on',
        'Use .explain() to confirm queries are using an index, not scanning the collection',
        'Use projection to avoid transferring fields you don\'t need',
        'Paginate large result sets with limit(), and prefer cursor-based pagination at scale',
      ],
    },

    {
      type: 'list',
      title: 'Security',
      items: [
        'Never expose a MongoDB instance directly to the public internet without authentication',
        'Use role-based access control — application users should not connect as an admin',
        'Store connection strings and credentials in environment variables, never in code',
        'Enable schema validation for collections holding sensitive or critical data',
      ],
    },

    {
      type: 'code',
      title: 'Using .explain() to Check Performance',
      language: 'javascript',
      code: `db.users.find({ email: "ada@example.com" }).explain("executionStats")

// Look for "IXSCAN" (index scan, good) vs "COLLSCAN" (full collection scan, bad)`,
    },

    {
      type: 'table',
      title: 'Reliability',
      headers: ['Practice', 'Why'],
      rows: [
        ['Run a replica set in production', 'Survives a single server failure without downtime'],
        ['Take regular backups', 'Replication protects against server failure, not against accidental deletes'],
        ['Monitor slow queries', 'Catches performance regressions before users notice'],
      ],
    },

    {
      type: 'warning',
      title: 'Replication is Not a Backup',
      content:
        'A replica set protects against hardware failure, since every node has a copy of the data. But if you accidentally delete a document, that delete replicates to every node too — replication alone does not protect against human error or bad application logic.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Revisit your schema as access patterns change. A document design that was ideal at launch can become a bottleneck as certain arrays grow much larger than expected — MongoDB rewards iterating on schema design, not treating it as fixed forever.',
    },
  ],

  quiz: [
    {
      question: 'What does IXSCAN in an .explain() output indicate?',
      options: ['A full collection scan', 'An index scan being used', 'A failed query', 'A sharding operation'],
      answer: 1,
    },
    {
      question: 'Does replication protect against an accidental deleteMany({}) on the wrong collection?',
      options: ['Yes, replicas keep the old data safe', 'No, the delete replicates to every node too', 'Only on the primary node', 'Only with schema validation enabled'],
      answer: 1,
    },
    {
      question: 'Why should application users connect with limited roles rather than as an admin?',
      options: [
        'It has no security benefit',
        'It limits the damage a compromised application credential could do',
        'MongoDB requires it',
        'It improves query performance',
      ],
      answer: 1,
    },
  ],

  previous: 'schema-validation',
};
