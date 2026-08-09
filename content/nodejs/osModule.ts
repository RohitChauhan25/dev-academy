import { Tutorial } from '@/app/types/tutorial';

export const osModule: Tutorial = {
  slug: 'os-module',

  title: 'The os Module',

  description: 'Query information about the operating system a Node.js process is running on.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 9 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'What os Provides',
      content:
        'The os module exposes details about the underlying operating system and hardware — CPU info, memory, network interfaces, and the current user — useful for diagnostics, logging, and platform-specific logic.',
    },

    {
      type: 'code',
      title: 'Common os Methods',
      language: 'javascript',
      code: `import os from 'node:os';

os.platform();    // "darwin", "linux", "win32"
os.arch();        // "x64", "arm64"
os.cpus().length; // number of logical CPU cores
os.totalmem();    // total system memory, in bytes
os.freemem();     // free system memory, in bytes
os.homedir();     // the current user's home directory`,
    },

    {
      type: 'table',
      title: 'Common Uses',
      headers: ['Method', 'Use Case'],
      rows: [
        ['os.cpus().length', 'Deciding how many worker processes to spawn'],
        ['os.platform()', 'Running platform-specific logic or file paths'],
        ['os.totalmem() / os.freemem()', 'Health checks and monitoring dashboards'],
        ['os.tmpdir()', 'A safe, OS-appropriate location for temporary files'],
      ],
    },

    {
      type: 'code',
      title: 'Deciding Worker Count Based on CPU Cores',
      language: 'javascript',
      code: `import os from 'node:os';
import cluster from 'node:cluster';

const numWorkers = os.cpus().length;

if (cluster.isPrimary) {
  for (let i = 0; i < numWorkers; i++) {
    cluster.fork();
  }
}`,
    },

    {
      type: 'note',
      title: 'Values Reflect the Host Machine',
      content:
        'Inside a container (like Docker), os.cpus() and os.totalmem() report values based on the underlying host or container limits, which is worth remembering when using them to size worker pools in a containerized deployment.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use os.cpus().length as a starting point for sizing a worker pool or process cluster, but validate it against your actual container resource limits in production rather than assuming it matches your deployment environment exactly.',
    },
  ],

  quiz: [
    {
      question: 'What does os.platform() return?',
      options: ['The Node.js version', 'The operating system, like "darwin" or "linux"', 'The current directory', 'The npm version'],
      answer: 1,
    },
    {
      question: 'What is a common use for os.cpus().length?',
      options: ['Reading a file', 'Deciding how many worker processes to spawn', 'Parsing a URL', 'Hashing a password'],
      answer: 1,
    },
    {
      question: 'What does os.tmpdir() return?',
      options: ['The project root directory', 'A safe, OS-appropriate location for temporary files', 'The current user\'s email', 'The npm cache directory'],
      answer: 1,
    },
  ],

  previous: 'path-module',
  next: 'events-and-eventemitter',
};
