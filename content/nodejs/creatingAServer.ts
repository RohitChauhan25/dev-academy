import { Tutorial } from '@/app/types/tutorial';

export const creatingAServer: Tutorial = {
  slug: 'creating-a-server',

  title: 'Creating a Server',

  description: 'Build a slightly more complete HTTP server: routing by URL, and returning JSON.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 17 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Manual Routing',
      content:
        'Without a framework, "routing" just means writing conditional logic that inspects req.url and req.method, and responds differently based on what it finds.',
    },

    {
      type: 'code',
      title: 'A Server With Basic Routes',
      language: 'javascript',
      code: `import { createServer } from 'node:http';

const server = createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home page');
  } else if (req.method === 'GET' && req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000);`,
    },

    {
      type: 'paragraph',
      title: 'Reading a Request Body',
      content:
        'The request body arrives as a stream of Buffer chunks, not as a ready-made value — you have to collect and parse it yourself when building directly on http, which frameworks handle for you automatically.',
    },

    {
      type: 'code',
      title: 'Parsing a JSON Request Body',
      language: 'javascript',
      code: `function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

const server = createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/api/users') {
    const body = await readBody(req);
    const user = JSON.parse(body);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ created: user.name }));
  }
});`,
    },

    {
      type: 'table',
      title: 'Common HTTP Status Codes',
      headers: ['Code', 'Meaning'],
      rows: [
        ['200', 'OK'],
        ['201', 'Created'],
        ['400', 'Bad Request'],
        ['404', 'Not Found'],
        ['500', 'Internal Server Error'],
      ],
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Seeing how much manual work goes into routing and body parsing with raw http is exactly why real projects use a framework like Express — it replaces all of this boilerplate with a few lines of declarative route definitions.',
    },
  ],

  quiz: [
    {
      question: 'How does a raw http server determine which route to serve?',
      options: [
        'Automatically, based on file names',
        'Manually, by inspecting req.method and req.url with conditional logic',
        'It cannot route requests without a framework',
        'Using a built-in router object',
      ],
      answer: 1,
    },
    {
      question: 'How does a raw http server body arrive?',
      options: [
        'As a ready-made parsed JavaScript object',
        'As a stream of data chunks that must be collected manually',
        'It cannot receive a body',
        'As a file on disk',
      ],
      answer: 1,
    },
    {
      question: 'What HTTP status code conventionally indicates a resource was successfully created?',
      options: ['200', '201', '204', '400'],
      answer: 1,
    },
  ],

  previous: 'http-module',
  next: 'express-introduction',
};
