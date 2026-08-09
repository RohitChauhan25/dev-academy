import { Tutorial } from '@/app/types/tutorial';

export const queryParamsAndBodyParsing: Tutorial = {
  slug: 'query-params-and-body-parsing',

  title: 'Query Params & Body Parsing',

  description: 'The different ways data arrives in a request, and how to read each one correctly.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 22 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Three Ways Data Arrives',
      content:
        'A request can carry data in its URL path (route params), its query string (query params), or its body — each suited to a different kind of data.',
    },

    {
      type: 'table',
      title: 'When to Use Each',
      headers: ['Location', 'Typical Use'],
      rows: [
        ['Route param (/users/:id)', 'Identifying a specific resource'],
        ['Query param (?sort=name&page=2)', 'Optional filters, sorting, pagination'],
        ['Body', 'Data being created or updated, especially larger payloads'],
      ],
    },

    {
      type: 'code',
      title: 'Reading Query Parameters',
      language: 'javascript',
      code: `// GET /api/products?category=books&page=2
app.get('/api/products', (req, res) => {
  const { category, page = 1 } = req.query;
  res.json({ category, page: Number(page) });
});`,
    },

    {
      type: 'code',
      title: 'Enabling and Reading a JSON Body',
      language: 'javascript',
      code: `app.use(express.json()); // must run before routes that need req.body

app.post('/api/products', (req, res) => {
  const { name, price } = req.body;
  res.status(201).json({ name, price });
});`,
    },

    {
      type: 'code',
      title: 'Parsing Form-Encoded Bodies',
      language: 'javascript',
      code: `// For traditional HTML form submissions (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));`,
    },

    {
      type: 'warning',
      title: 'req.body is undefined Without Middleware',
      content:
        'Without express.json() (or a similar body-parsing middleware) registered before the route, req.body is undefined even if the client sent a valid JSON body — a very common source of confusion for beginners.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Query parameters are always strings, even ones that look numeric — always explicitly convert them (Number(req.query.page)) rather than assuming JavaScript will coerce them correctly in every comparison.',
    },
  ],

  quiz: [
    {
      question: 'What data type is a query parameter always received as?',
      options: ['A number', 'A string', 'A boolean', 'It depends on the value'],
      answer: 1,
    },
    {
      question: 'What happens to req.body if express.json() is not registered?',
      options: ['It parses automatically anyway', 'It remains undefined, even with a valid JSON body sent', 'It throws an error', 'It defaults to an empty array'],
      answer: 1,
    },
    {
      question: 'Where would you typically put a resource\'s unique identifier in a request?',
      options: ['The request body', 'A route parameter, like /users/:id', 'A custom header only', 'It cannot be sent'],
      answer: 1,
    },
  ],

  previous: 'request-and-response',
  next: 'environment-variables',
};
