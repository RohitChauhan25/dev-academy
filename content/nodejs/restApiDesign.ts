import { Tutorial } from '@/app/types/tutorial';

export const restApiDesign: Tutorial = {
  slug: 'rest-api-design',

  title: 'REST API Design',

  description: 'Conventions for structuring resources, URLs, and status codes in a predictable, RESTful API.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 25 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Resources, Not Actions',
      content:
        'A RESTful API models URLs around resources (nouns), and uses HTTP methods to express the action — rather than encoding the verb into the URL itself. /users is a resource; GET, POST, PUT, and DELETE against it are the actions.',
    },

    {
      type: 'table',
      title: 'Standard REST Conventions',
      headers: ['Method + URL', 'Action'],
      rows: [
        ['GET /users', 'List all users'],
        ['GET /users/:id', 'Get a single user'],
        ['POST /users', 'Create a new user'],
        ['PUT /users/:id', 'Replace a user entirely'],
        ['PATCH /users/:id', 'Partially update a user'],
        ['DELETE /users/:id', 'Delete a user'],
      ],
    },

    {
      type: 'code',
      title: 'A Bad vs Good URL Design',
      language: 'bash',
      code: `# Avoid: verbs baked into the URL
POST /createUser
GET /getUserById?id=42

# Prefer: resources + HTTP methods
POST /users
GET /users/42`,
    },

    {
      type: 'paragraph',
      title: 'Nested Resources',
      content:
        'When one resource clearly belongs to another, nest it in the URL: /users/42/orders lists orders belonging to user 42. Avoid nesting more than one or two levels deep — it quickly becomes unwieldy.',
    },

    {
      type: 'table',
      title: 'Choosing the Right Status Code',
      headers: ['Situation', 'Status Code'],
      rows: [
        ['Successful GET', '200 OK'],
        ['Successful POST creating a resource', '201 Created'],
        ['Successful DELETE', '204 No Content'],
        ['Invalid request data', '400 Bad Request'],
        ['Not authenticated', '401 Unauthorized'],
        ['Authenticated but not allowed', '403 Forbidden'],
        ['Resource does not exist', '404 Not Found'],
      ],
    },

    {
      type: 'note',
      title: 'PUT vs PATCH',
      content:
        'PUT conventionally replaces the entire resource — fields you omit are expected to be reset. PATCH updates only the fields provided, leaving everything else untouched. Many real-world APIs use PATCH more often than strict REST purism would suggest, since it matches how forms actually submit partial edits.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Version your API from the start (e.g. /api/v1/users) — it costs almost nothing upfront and gives you a clean path to make breaking changes later without disrupting existing clients.',
    },
  ],

  quiz: [
    {
      question: 'What is the RESTful convention for a URL, per the guidance in this lesson?',
      options: [
        'Verbs in the URL, like /getUser',
        'Nouns representing resources, with HTTP methods expressing the action',
        'Every URL should be a single word',
        'URLs should always include the word "api"',
      ],
      answer: 1,
    },
    {
      question: 'What status code conventionally indicates a resource was successfully created?',
      options: ['200', '201', '204', '404'],
      answer: 1,
    },
    {
      question: 'What is the conventional difference between PUT and PATCH?',
      options: [
        'They are identical',
        'PUT replaces the entire resource; PATCH updates only the provided fields',
        'PUT is for reading, PATCH is for writing',
        'PATCH can only be used with JSON',
      ],
      answer: 1,
    },
  ],

  previous: 'error-handling-in-express',
  next: 'file-uploads',
};
