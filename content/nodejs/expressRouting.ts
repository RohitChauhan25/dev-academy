import { Tutorial } from '@/app/types/tutorial';

export const expressRouting: Tutorial = {
  slug: 'express-routing',

  title: 'Express Routing',

  description: 'Define routes for different URLs and HTTP methods, including dynamic route parameters.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 19 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Defining Routes',
      content:
        'A route pairs an HTTP method and a URL pattern with a handler function. Express provides a method for each HTTP verb — app.get(), app.post(), app.put(), app.delete(), and so on.',
    },

    {
      type: 'code',
      title: 'Basic Routes',
      language: 'javascript',
      code: `app.get('/api/users', (req, res) => res.json({ users: [] }));
app.post('/api/users', (req, res) => res.status(201).json({ created: true }));
app.put('/api/users/:id', (req, res) => res.json({ updated: true }));
app.delete('/api/users/:id', (req, res) => res.status(204).end());`,
    },

    {
      type: 'code',
      title: 'Route Parameters',
      language: 'javascript',
      code: `app.get('/api/users/:id', (req, res) => {
  res.json({ userId: req.params.id });
});

// GET /api/users/42 → { "userId": "42" }`,
    },

    {
      type: 'table',
      title: 'Route Pattern Examples',
      headers: ['Pattern', 'Matches'],
      rows: [
        ['/api/users/:id', 'Any single segment, captured as req.params.id'],
        ['/api/users/:id/posts/:postId', 'Two captured parameters'],
        ['/files/*', 'A wildcard matching any remaining path'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Organizing Routes with express.Router()',
      content:
        'As an app grows past a handful of routes, express.Router() lets you group related routes into their own module — like all /api/users routes — which is then "mounted" onto the main app at a specific path prefix.',
    },

    {
      type: 'code',
      title: 'Splitting Routes Into a Router',
      language: 'javascript',
      code: `// routes/users.js
import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => res.json({ users: [] }));
router.get('/:id', (req, res) => res.json({ id: req.params.id }));

export default router;

// app.js
import usersRouter from './routes/users.js';
app.use('/api/users', usersRouter);`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Split routes into separate Router modules by resource (users, orders, products) once an app grows past a handful of routes — it keeps app.js focused on wiring things together rather than containing every route handler.',
    },
  ],

  quiz: [
    {
      question: 'How do you access a value from a dynamic route parameter like /users/:id?',
      options: ['req.query.id', 'req.params.id', 'req.body.id', 'req.id'],
      answer: 1,
    },
    {
      question: 'What does express.Router() provide?',
      options: [
        'A way to connect to a database',
        'A way to define a group of routes in a separate, mountable module',
        'A built-in ORM',
        'A testing framework',
      ],
      answer: 1,
    },
    {
      question: 'Which method registers a handler for HTTP DELETE requests?',
      options: ['app.remove()', 'app.delete()', 'app.destroy()', 'app.del()'],
      answer: 1,
    },
  ],

  previous: 'express-introduction',
  next: 'middleware',
};
