import { Tutorial } from '@/app/types/tutorial';

export const middleware: Tutorial = {
  slug: 'middleware',

  title: 'Middleware',

  description: 'Functions that run between a request arriving and a response being sent — the core of Express\'s design.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 20 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'What Middleware Is',
      content:
        'Middleware is a function with access to the request, the response, and a next() function to pass control to the next middleware in the chain. Logging, authentication, parsing a request body, and error handling are all implemented as middleware in Express.',
    },

    {
      type: 'code',
      title: 'A Simple Logging Middleware',
      language: 'javascript',
      code: `function logger(req, res, next) {
  console.log(\`\${req.method} \${req.url}\`);
  next(); // Pass control to the next middleware/route handler
}

app.use(logger);`,
    },

    {
      type: 'paragraph',
      title: 'Middleware Runs in Order',
      content:
        'app.use() and route handlers form a chain, executed top to bottom in the order they are registered. Each middleware must call next() to continue to the next one — forgetting to call next() (or send a response) leaves the request hanging forever.',
    },

    {
      type: 'code',
      title: 'Middleware for a Specific Route Only',
      language: 'javascript',
      code: `function requireAuth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

app.get('/api/profile', requireAuth, (req, res) => {
  res.json({ user: 'Ada' });
});`,
    },

    {
      type: 'table',
      title: 'Common Built-in and Third-Party Middleware',
      headers: ['Middleware', 'Purpose'],
      rows: [
        ['express.json()', 'Parses a JSON request body'],
        ['express.static(dir)', 'Serves static files from a folder'],
        ['cors()', 'Handles Cross-Origin Resource Sharing headers'],
        ['helmet()', 'Sets security-related HTTP headers'],
        ['morgan()', 'HTTP request logging'],
      ],
    },

    {
      type: 'warning',
      title: 'A Middleware That Never Calls next() Hangs the Request',
      content:
        'If a middleware neither calls next() nor sends a response (res.send(), res.json(), res.end()), the request never completes — it just hangs until the client eventually times out.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Order matters — register broadly-applicable middleware (logging, CORS, body parsing) before your routes, and route-specific middleware (like auth checks) directly on the routes that need it.',
    },
  ],

  quiz: [
    {
      question: 'What must a middleware function call to pass control onward?',
      options: ['res.send()', 'next()', 'app.use()', 'return true'],
      answer: 1,
    },
    {
      question: 'What happens if a middleware neither calls next() nor sends a response?',
      options: ['Express automatically continues', 'The request hangs until the client times out', 'It throws an error immediately', 'It is skipped automatically'],
      answer: 1,
    },
    {
      question: 'What does the express.json() middleware do?',
      options: ['Sends a JSON response', 'Parses an incoming JSON request body', 'Converts routes to JSON', 'Logs requests'],
      answer: 1,
    },
  ],

  previous: 'express-routing',
  next: 'request-and-response',
};
