import { Tutorial } from '@/app/types/tutorial';

export const corsAndSecurityHeaders: Tutorial = {
  slug: 'cors-and-security-headers',

  title: 'CORS & Security Headers',

  description: 'Control which origins can call your API, and add HTTP headers that protect against common attacks.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 32 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'What CORS Is',
      content:
        'Cross-Origin Resource Sharing (CORS) is a browser security mechanism that blocks a web page from making requests to a different origin (domain, port, or protocol) unless the server explicitly allows it via response headers.',
    },

    {
      type: 'code',
      title: 'Enabling CORS in Express',
      language: 'bash',
      code: `npm install cors`,
    },

    {
      type: 'code',
      title: 'Basic CORS Setup',
      language: 'javascript',
      code: `import cors from 'cors';

// Allow any origin (fine for a fully public API)
app.use(cors());

// Restrict to a specific frontend origin
app.use(cors({ origin: 'https://myapp.com' }));`,
    },

    {
      type: 'table',
      title: 'Common CORS Options',
      headers: ['Option', 'Purpose'],
      rows: [
        ['origin', 'Which origin(s) are allowed to call this API'],
        ['methods', 'Which HTTP methods are allowed cross-origin'],
        ['credentials', 'Whether cookies/auth headers are allowed cross-origin'],
      ],
    },

    {
      type: 'note',
      title: 'CORS is a Browser Protection, Not a Server Firewall',
      content:
        'CORS only affects requests made from a browser via JavaScript — it does not stop a server-to-server request, a curl command, or a mobile app from calling your API. It protects users from malicious websites making requests on their behalf, not your API from all unauthorized access.',
    },

    {
      type: 'paragraph',
      title: 'Security Headers with Helmet',
      content:
        'helmet is a middleware that sets a collection of HTTP response headers known to reduce common web vulnerabilities — like preventing your API\'s responses from being embedded in a malicious iframe, or telling browsers not to guess (sniff) content types.',
    },

    {
      type: 'code',
      title: 'Adding Security Headers',
      language: 'javascript',
      code: `import helmet from 'helmet';

app.use(helmet());`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Enable helmet() and a properly scoped CORS policy (a specific origin, not a wildcard, for any API handling authenticated requests) as two of the very first middleware registered in any production Express app.',
    },
  ],

  quiz: [
    {
      question: 'What does CORS control?',
      options: [
        'Which servers can be accessed by curl',
        'Whether a browser allows JavaScript on one origin to make requests to a different origin',
        'Database access permissions',
        'File upload sizes',
      ],
      answer: 1,
    },
    {
      question: 'Does CORS stop a server-to-server request from bypassing it?',
      options: ['Yes, always', 'No, CORS is a browser-enforced protection, not a general firewall', 'Only for GET requests', 'Only without credentials'],
      answer: 1,
    },
    {
      question: 'What does the helmet middleware do?',
      options: [
        'Parses request bodies',
        'Sets a collection of HTTP headers that reduce common web vulnerabilities',
        'Handles file uploads',
        'Connects to a database',
      ],
      answer: 1,
    },
  ],

  previous: 'password-hashing',
  next: 'testing-node-apps',
};
