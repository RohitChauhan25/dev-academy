import { Tutorial } from '@/app/types/tutorial';

export const expressIntroduction: Tutorial = {
  slug: 'express-introduction',

  title: 'Express Introduction',

  description: 'Meet Express, the most widely used web framework for Node.js.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 18 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Express?',
      content:
        'Express is a minimal, unopinionated web framework that sits on top of the http module, adding routing, middleware, and convenient request/response helpers — replacing all the manual boilerplate seen in the previous lessons.',
    },

    {
      type: 'code',
      title: 'Installing and Starting an Express App',
      language: 'bash',
      code: `npm install express`,
    },

    {
      type: 'code',
      title: 'A Minimal Express Server',
      language: 'javascript',
      code: `import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => console.log('Listening on port 3000'));`,
    },

    {
      type: 'table',
      title: 'Express vs Raw http',
      headers: ['Raw http', 'Express'],
      rows: [
        ['Manual req.url/req.method checks', 'app.get(), app.post(), etc. with path patterns'],
        ['Manual body stream reading', 'express.json() middleware parses it automatically'],
        ['No built-in middleware concept', 'A rich middleware ecosystem for logging, auth, CORS, etc.'],
      ],
    },

    {
      type: 'code',
      title: 'res Helper Methods',
      language: 'javascript',
      code: `app.get('/api/users', (req, res) => {
  res.json({ users: [] });        // sends JSON with the right Content-Type
});

app.get('/missing', (req, res) => {
  res.status(404).send('Not Found');
});`,
    },

    {
      type: 'note',
      title: '"Unopinionated" by Design',
      content:
        'Unlike some frameworks (NestJS, Rails), Express doesn\'t enforce a particular project structure, ORM, or architecture — it gives you routing and middleware primitives, and you (or your team\'s conventions) decide everything else.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Even experienced Node.js developers rarely write raw http servers day-to-day — Express (or a similar framework) is the practical default for building APIs, precisely because it eliminates so much repetitive boilerplate.',
    },
  ],

  quiz: [
    {
      question: 'What is Express built on top of?',
      options: ['MongoDB', 'The core http module', 'React', 'TypeScript'],
      answer: 1,
    },
    {
      question: 'What does res.json({ users: [] }) do?',
      options: [
        'Sends a plain text response',
        'Sends a JSON response with the correct Content-Type header set automatically',
        'Only logs to the console',
        'Redirects the request',
      ],
      answer: 1,
    },
    {
      question: 'What does "unopinionated" mean about Express?',
      options: [
        'It has no features at all',
        'It doesn\'t enforce a particular project structure or architecture',
        'It cannot be customized',
        'It only supports one database',
      ],
      answer: 1,
    },
  ],

  previous: 'creating-a-server',
  next: 'express-routing',
};
