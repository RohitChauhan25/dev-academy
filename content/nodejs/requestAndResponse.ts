import { Tutorial } from '@/app/types/tutorial';

export const requestAndResponse: Tutorial = {
  slug: 'request-and-response',

  title: 'Request & Response',

  description: 'A tour of the most useful properties and methods on Express\'s req and res objects.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 21 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'The req Object',
      content:
        'req represents the incoming HTTP request — its method, URL, headers, route parameters, query string, and (once parsed by middleware) its body.',
    },

    {
      type: 'table',
      title: 'Useful req Properties',
      headers: ['Property', 'Contains'],
      rows: [
        ['req.params', 'Named route parameters, like :id'],
        ['req.query', 'The query string, parsed into an object'],
        ['req.body', 'The parsed request body (requires express.json() middleware)'],
        ['req.headers', 'HTTP request headers'],
        ['req.method', 'The HTTP method (GET, POST, etc.)'],
      ],
    },

    {
      type: 'code',
      title: 'Reading From req',
      language: 'javascript',
      code: `// GET /api/users/42?verbose=true
app.get('/api/users/:id', (req, res) => {
  console.log(req.params.id);   // "42"
  console.log(req.query.verbose); // "true"
});`,
    },

    {
      type: 'paragraph',
      title: 'The res Object',
      content:
        'res represents the response being built and sent back. Its methods are chainable, so you\'ll commonly see them combined in a single expression.',
    },

    {
      type: 'table',
      title: 'Useful res Methods',
      headers: ['Method', 'Effect'],
      rows: [
        ['res.status(code)', 'Set the HTTP status code'],
        ['res.json(data)', 'Send a JSON response'],
        ['res.send(data)', 'Send a response, inferring the content type'],
        ['res.redirect(url)', 'Redirect to a different URL'],
        ['res.set(header, value)', 'Set a response header'],
      ],
    },

    {
      type: 'code',
      title: 'Chaining Response Methods',
      language: 'javascript',
      code: `app.post('/api/users', (req, res) => {
  res.status(201).json({ id: 1, name: req.body.name });
});`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use res.json() rather than res.send() when returning structured data — it explicitly sets the correct Content-Type header and consistently serializes the response, avoiding ambiguity about what\'s being sent.',
    },
  ],

  quiz: [
    {
      question: 'What does req.query contain?',
      options: ['Route parameters', 'The parsed query string', 'The request body', 'Response headers'],
      answer: 1,
    },
    {
      question: 'What is required for req.body to be populated with parsed JSON?',
      options: ['Nothing, it works automatically', 'The express.json() middleware must be registered', 'req.body only works with forms', 'A database connection'],
      answer: 1,
    },
    {
      question: 'What does res.status(201).json({...}) do?',
      options: [
        'Sends two separate responses',
        'Sets the status code to 201, then sends a JSON response',
        'Causes an error since methods cannot be chained',
        'Only sets the status code, without sending a body',
      ],
      answer: 1,
    },
  ],

  previous: 'middleware',
  next: 'query-params-and-body-parsing',
};
