import { Tutorial } from '@/app/types/tutorial';

export const sharding: Tutorial = {
  slug: 'sharding',

  title: 'Sharding',

  description: 'Scale MongoDB horizontally by splitting a collection\'s data across multiple servers.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 23 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Shard?',
      content:
        'A single MongoDB server (or replica set) has limits on how much data and throughput it can handle. Sharding splits a collection\'s data across multiple servers (shards), so the dataset and the workload are distributed rather than living entirely on one machine.',
    },

    {
      type: 'table',
      title: 'Sharded Cluster Components',
      headers: ['Component', 'Role'],
      rows: [
        ['Shard', 'A server (usually a replica set) holding a portion of the data'],
        ['Config Servers', 'Store metadata about which data lives on which shard'],
        ['mongos', 'A router that applications connect to; routes each query to the correct shard(s)'],
      ],
    },

    {
      type: 'paragraph',
      title: 'The Shard Key',
      content:
        'When you shard a collection, you choose a shard key — the field (or fields) MongoDB uses to decide which shard a document belongs on. Choosing a good shard key is the single most important decision in sharding, because it is very difficult to change later.',
    },

    {
      type: 'code',
      title: 'Enabling Sharding on a Collection',
      language: 'javascript',
      code: `sh.enableSharding("mydb")
sh.shardCollection("mydb.orders", { customerId: 1 })`,
    },

    {
      type: 'table',
      title: 'What Makes a Good Shard Key',
      headers: ['Property', 'Why It Matters'],
      rows: [
        ['High cardinality', 'Many distinct values, so data spreads evenly across shards'],
        ['Even write distribution', 'Avoids a "hot shard" receiving most of the traffic'],
        ['Matches common queries', 'Queries that include the shard key can be routed to a single shard instead of every shard'],
      ],
    },

    {
      type: 'warning',
      title: 'A Poor Shard Key is Hard to Fix',
      content:
        'A shard key based on a monotonically increasing value (like a timestamp) tends to send all new writes to the same shard, creating a bottleneck — exactly the problem sharding was meant to solve. Choosing the right key upfront matters enormously.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Only reach for sharding once a single replica set genuinely cannot handle the data size or throughput — it adds real operational complexity, and most applications never actually need it.',
    },
  ],

  quiz: [
    {
      question: 'What problem does sharding solve?',
      options: [
        'Automatic backups',
        'Distributing data and workload across multiple servers when one server is not enough',
        'Enforcing schema validation',
        'Encrypting data at rest',
      ],
      answer: 1,
    },
    {
      question: 'What is a shard key?',
      options: [
        'A password for the database',
        'The field(s) MongoDB uses to decide which shard a document belongs on',
        'An index on the _id field',
        'A backup encryption key',
      ],
      answer: 1,
    },
    {
      question: 'Why is a monotonically increasing field, like a timestamp, often a poor shard key?',
      options: [
        'It is not allowed by MongoDB',
        'It tends to send all new writes to the same shard, creating a bottleneck',
        'It makes queries impossible',
        'It disables replication',
      ],
      answer: 1,
    },
  ],

  previous: 'replication',
  next: 'mongoose-odm-basics',
};
