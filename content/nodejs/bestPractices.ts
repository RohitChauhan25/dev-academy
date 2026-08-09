import { Tutorial } from '@/app/types/tutorial';

export const bestPractices: Tutorial = {
  slug: 'best-practices',

  title: 'Node.js Best Practices',

  description: 'A checklist of habits for building reliable, secure, and maintainable Node.js applications.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 34 of 34',

  sections: [
    {
      type: 'list',
      title: 'Structure & Code Quality',
      items: [
        'Separate app.js (routes/middleware) from server.js (the actual .listen() call) for testability',
        'Group routes by resource using express.Router()',
        'Use async/await with a consistent error-handling pattern (a wrapper or try/catch + next(err))',
        'Validate input at the boundary — reject bad requests before they reach business logic',
      ],
    },

    {
      type: 'list',
      title: 'Security',
      items: [
        'Never commit secrets — use environment variables and .gitignore .env',
        'Hash passwords with bcrypt or argon2, never store them in plain text',
        'Use parameterized queries for SQL; never concatenate user input into a query',
        'Enable helmet() and a properly scoped CORS policy',
        'Validate and limit file upload size and type',
      ],
    },

    {
      type: 'code',
      title: 'Graceful Shutdown',
      language: 'javascript',
      code: `process.on('SIGTERM', async () => {
  console.log('Shutting down...');
  await server.close();
  await mongoose.disconnect();
  process.exit(0);
});`,
    },

    {
      type: 'table',
      title: 'Reliability',
      headers: ['Practice', 'Why'],
      rows: [
        ['Centralize error handling', 'Consistent responses, easier debugging, no duplicated logic'],
        ['Log structured errors, not just console.log', 'Machine-readable logs are searchable in production'],
        ['Handle graceful shutdown', 'Finish in-flight requests before a container is killed'],
        ['Set request timeouts', 'A hung upstream dependency shouldn\'t hang your whole server'],
      ],
    },

    {
      type: 'warning',
      title: 'Don\'t Ignore Unhandled Rejections',
      content:
        'An unhandled promise rejection can silently fail or, in newer Node.js versions, crash the process entirely. Always add a process.on(\'unhandledRejection\', ...) handler during development to catch bugs where a Promise\'s error was never caught.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Treat this checklist as a starting point, not a final answer — the right Node.js practices depend heavily on your app\'s scale and requirements. What matters most is being deliberate about these decisions rather than accepting whatever a tutorial\'s defaults happened to be.',
    },
  ],

  quiz: [
    {
      question: 'Why separate app.js from server.js?',
      options: [
        'It is required by Node.js',
        'It lets tests import the configured Express app without starting a real server',
        'It makes the app run faster',
        'There is no real benefit',
      ],
      answer: 1,
    },
    {
      question: 'Why handle SIGTERM in a production server?',
      options: [
        'It has no practical use',
        'To finish in-flight requests and close connections cleanly before the process exits',
        'It is required by npm',
        'Only CLI tools need this',
      ],
      answer: 1,
    },
    {
      question: 'What can happen if an unhandled promise rejection is ignored?',
      options: [
        'Nothing, Node.js always recovers automatically',
        'It can silently fail or crash the process in newer Node.js versions',
        'It only affects the terminal output',
        'It automatically retries the operation',
      ],
      answer: 1,
    },
  ],

  previous: 'testing-node-apps',
};
