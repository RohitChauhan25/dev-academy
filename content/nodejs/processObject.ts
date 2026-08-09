import { Tutorial } from '@/app/types/tutorial';

export const processObject: Tutorial = {
  slug: 'process-object',

  title: 'The process Object',

  description: 'A global object giving your script access to environment variables, arguments, and process control.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 15 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'What process Provides',
      content:
        'process is a global object available in every Node.js script (no import needed) that represents the currently running Node.js process — its environment, command-line arguments, and ways to exit or listen for shutdown signals.',
    },

    {
      type: 'code',
      title: 'Environment Variables',
      language: 'javascript',
      code: `console.log(process.env.NODE_ENV);
console.log(process.env.DATABASE_URL);

// Set with a fallback
const port = process.env.PORT || 3000;`,
    },

    {
      type: 'code',
      title: 'Command-Line Arguments',
      language: 'javascript',
      code: `// node script.js --name Ada
console.log(process.argv);
// ["/usr/bin/node", "/path/to/script.js", "--name", "Ada"]`,
    },

    {
      type: 'table',
      title: 'Common process Properties & Methods',
      headers: ['Member', 'Purpose'],
      rows: [
        ['process.env', 'Access environment variables'],
        ['process.argv', 'Command-line arguments passed to the script'],
        ['process.exit(code)', 'Immediately terminate the process with an exit code'],
        ['process.cwd()', 'The current working directory'],
        ['process.on(\'SIGTERM\', ...)', 'Listen for shutdown signals to clean up gracefully'],
      ],
    },

    {
      type: 'code',
      title: 'Graceful Shutdown',
      language: 'javascript',
      code: `process.on('SIGTERM', async () => {
  console.log('Shutting down gracefully...');
  await server.close();
  process.exit(0);
});`,
    },

    {
      type: 'note',
      title: 'Exit Codes',
      content:
        'process.exit(0) signals success; any non-zero code (commonly 1) signals an error. Deployment tools, CI pipelines, and process managers use this exit code to decide whether a run succeeded or failed.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Listen for SIGTERM in any long-running server so it can finish in-flight requests and close database connections cleanly before exiting — this is especially important in containerized deployments, where orchestrators send SIGTERM before forcefully killing a process.',
    },
  ],

  quiz: [
    {
      question: 'Do you need to import process in Node.js scripts?',
      options: ['Yes, always', 'No, it is a global object available automatically', 'Only in ES Modules', 'Only for CLI tools'],
      answer: 1,
    },
    {
      question: 'What does process.argv contain?',
      options: ['Environment variables', 'Command-line arguments passed to the script', 'The current file path only', 'HTTP request headers'],
      answer: 1,
    },
    {
      question: 'Why listen for the SIGTERM signal in a server?',
      options: [
        'It has no practical use',
        'To shut down gracefully, finishing in-flight work before exiting',
        'It is required by npm',
        'It only matters for CLI scripts',
      ],
      answer: 1,
    },
  ],

  previous: 'timers',
  next: 'http-module',
};
