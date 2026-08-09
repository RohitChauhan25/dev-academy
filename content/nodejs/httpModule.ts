import { Tutorial } from '@/app/types/tutorial';

export const httpModule: Tutorial = {
  slug: 'http-module',

  title: 'The http Module',

  description: 'Node.js\'s built-in module for making requests and building servers, without any external framework.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 16 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Built-in, No Framework Required',
      content:
        'Every popular Node.js web framework — Express, Fastify, Koa — is ultimately built on top of the core http module. Understanding it directly helps demystify what those frameworks are actually doing underneath their APIs.',
    },

    {
      type: 'code',
      title: 'Making an HTTP Request',
      language: 'javascript',
      code: `import https from 'node:https';

https.get('https://api.example.com/users', (res) => {
  let data = '';
  res.on('data', (chunk) => (data += chunk));
  res.on('end', () => console.log(JSON.parse(data)));
});`,
    },

    {
      type: 'note',
      title: 'fetch() Is Also Available',
      content:
        'Modern Node.js versions include a global fetch() (the same API browsers use), which is usually more convenient than the raw http/https modules for making outgoing requests. The http module remains essential for building servers.',
    },

    {
      type: 'code',
      title: 'A Minimal HTTP Server',
      language: 'javascript',
      code: `import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js!');
});

server.listen(3000, () => console.log('Listening on port 3000'));`,
    },

    {
      type: 'table',
      title: 'Request & Response Basics',
      headers: ['Object', 'Useful Properties'],
      rows: [
        ['req', 'req.method, req.url, req.headers'],
        ['res', 'res.writeHead(status, headers), res.write(chunk), res.end(chunk)'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Why Frameworks Exist',
      content:
        'The raw http module has no built-in routing, no request body parsing, and no middleware system — every one of those is manually written on top. This is exactly what frameworks like Express add, which is why the next lessons introduce it.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Building at least one tiny server with the raw http module is a valuable exercise, even though you\'ll use a framework in practice — it makes concepts like routing, middleware, and body parsing feel far less magical once you see what they\'re built on.',
    },
  ],

  quiz: [
    {
      question: 'Are frameworks like Express built on top of the core http module?',
      options: ['No, they replace it entirely', 'Yes, they are built on top of it', 'Only in older versions', 'They are unrelated'],
      answer: 1,
    },
    {
      question: 'What does the raw http module lack that frameworks typically add?',
      options: ['The ability to receive requests at all', 'Built-in routing, body parsing, and middleware', 'Any way to send a response', 'Support for JSON'],
      answer: 1,
    },
    {
      question: 'What method sends the response headers and status code?',
      options: ['res.send()', 'res.writeHead(status, headers)', 'res.headers()', 'req.respond()'],
      answer: 1,
    },
  ],

  previous: 'process-object',
  next: 'creating-a-server',
};
