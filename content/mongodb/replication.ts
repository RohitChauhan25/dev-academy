import { Tutorial } from '@/app/types/tutorial';

export const replication: Tutorial = {
  slug: 'replication',

  title: 'Replication',

  description: 'Understand replica sets — how MongoDB keeps multiple copies of your data in sync for reliability.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 22 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Replica Set?',
      content:
        'A replica set is a group of MongoDB servers that maintain identical copies of the same data. One node is elected primary and handles all writes; the rest are secondaries, continuously replicating the primary\'s changes.',
    },

    {
      type: 'table',
      title: 'Replica Set Roles',
      headers: ['Role', 'Responsibility'],
      rows: [
        ['Primary', 'Accepts all write operations'],
        ['Secondary', 'Replicates data from the primary, can serve reads'],
        ['Arbiter', 'Participates in elections but holds no data, used to break ties'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Automatic Failover',
      content:
        'If the primary becomes unreachable, the remaining nodes automatically hold an election and promote a secondary to be the new primary — usually within a few seconds. This is what makes replica sets the foundation of MongoDB\'s high availability, without requiring manual intervention.',
    },

    {
      type: 'code',
      title: 'Connecting to a Replica Set',
      language: 'bash',
      code: `mongodb://host1:27017,host2:27017,host3:27017/mydb?replicaSet=rs0`,
    },

    {
      type: 'paragraph',
      title: 'Read Preference',
      content:
        'By default, all reads go to the primary too, to guarantee you always see the latest data. You can configure a read preference to route reads to secondaries instead — useful for scaling read-heavy workloads, at the cost of potentially reading slightly stale data.',
    },

    {
      type: 'note',
      title: 'This is Different From Sharding',
      content:
        'Replication is about redundancy — every node has a full copy of the data. Sharding (the next lesson) is about scale — splitting data across nodes so no single node has to hold everything. The two are often combined in large production deployments.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Run a replica set (at minimum three nodes) for any production deployment — it is the baseline for surviving a single server failure without downtime or data loss.',
    },
  ],

  quiz: [
    {
      question: 'What is the role of the primary node in a replica set?',
      options: ['It only serves reads', 'It accepts all write operations', 'It holds no data', 'It only exists during elections'],
      answer: 1,
    },
    {
      question: 'What happens automatically if the primary node becomes unreachable?',
      options: [
        'The database goes offline until manually fixed',
        'The remaining nodes elect a new primary automatically',
        'All data is lost',
        'Writes are queued indefinitely',
      ],
      answer: 1,
    },
    {
      question: 'What is the key difference between replication and sharding?',
      options: [
        'They are the same thing',
        'Replication duplicates data for redundancy; sharding splits data across nodes for scale',
        'Sharding is only for backups',
        'Replication requires an arbiter, sharding does not',
      ],
      answer: 1,
    },
  ],

  previous: 'transactions',
  next: 'sharding',
};
