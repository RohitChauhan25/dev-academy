import { Tutorial } from '@/app/types/tutorial';

export const errorHandlingInExpress: Tutorial = {
  slug: 'error-handling-in-express',

  title: 'Error Handling in Express',

  description: 'Centralize error handling with a dedicated error-handling middleware instead of scattering try/catch everywhere.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 24 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Error-Handling Middleware',
      content:
        'Express recognizes a middleware function with four parameters (err, req, res, next) as a special error handler, run whenever next(err) is called or a synchronous error is thrown inside a route.',
    },

    {
      type: 'code',
      title: 'A Centralized Error Handler',
      language: 'javascript',
      code: `// Must be registered LAST, after all other routes/middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
});`,
    },

    {
      type: 'code',
      title: 'Triggering the Error Handler',
      language: 'javascript',
      code: `app.get('/api/users/:id', async (req, res, next) => {
  try {
    const user = await findUser(req.params.id);
    if (!user) {
      const error = new Error('User not found');
      error.status = 404;
      throw error;
    }
    res.json(user);
  } catch (err) {
    next(err); // Passes the error to the error-handling middleware
  }
});`,
    },

    {
      type: 'warning',
      title: 'Async Errors Need next(err), Not Just throw',
      content:
        'In older Express versions, a rejected Promise inside an async route handler does NOT automatically reach the error handler unless you explicitly catch it and call next(err) — an unhandled rejection just hangs the request. (Express 5 handles this automatically.)',
    },

    {
      type: 'code',
      title: 'A Wrapper to Avoid Repetitive try/catch',
      language: 'javascript',
      code: `function asyncHandler(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

app.get('/api/users/:id', asyncHandler(async (req, res) => {
  const user = await findUser(req.params.id);
  res.json(user);
}));`,
    },

    {
      type: 'table',
      title: 'Custom Error Classes',
      headers: ['Benefit', 'Example'],
      rows: [
        ['Consistent status codes', 'class NotFoundError extends Error { status = 404 }'],
        ['Easier to catch specific error types', 'if (err instanceof ValidationError) { ... }'],
      ],
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Define a small set of custom error classes (NotFoundError, ValidationError, UnauthorizedError) with a status property — it keeps error handling consistent and makes the centralized handler simple to reason about.',
    },
  ],

  quiz: [
    {
      question: 'How does Express recognize an error-handling middleware?',
      options: [
        'By its function name',
        'By having four parameters: (err, req, res, next)',
        'By being registered first',
        'By returning a Promise',
      ],
      answer: 1,
    },
    {
      question: 'In older Express versions, what happens to an unhandled rejected Promise in an async route handler?',
      options: [
        'It automatically reaches the error-handling middleware',
        'It does not automatically reach the error handler unless caught and passed via next(err)',
        'It crashes the entire server immediately',
        'It is silently ignored with no consequence',
      ],
      answer: 1,
    },
    {
      question: 'Where must error-handling middleware be registered relative to routes?',
      options: ['First, before any routes', 'Last, after all other routes and middleware', 'It does not matter', 'Only inside individual route files'],
      answer: 1,
    },
  ],

  previous: 'environment-variables',
  next: 'rest-api-design',
};
