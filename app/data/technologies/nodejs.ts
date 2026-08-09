export const nodejs = {
  slug: 'nodejs',

  title: 'Node.js',

  description:
    'Learn Node.js from beginner to advanced with step-by-step tutorials covering core modules, Express, databases, authentication, and deployment-ready practices.',

  level: 'Beginner to Advanced',

  duration: '9+ Hours',

  tutorials: [
    {
      level: 'Beginner',
      items: [
        {
          title: 'Introduction',
          slug: 'introduction',
          duration: '10 min',
          description: 'What Node.js is and where it is used.',
        },
        {
          title: 'Installation & Setup',
          slug: 'installation-and-setup',
          duration: '8 min',
          description: 'Install Node.js and run your first script.',
        },
        {
          title: 'Node.js Architecture',
          slug: 'nodejs-architecture',
          duration: '12 min',
          description: 'The single-threaded, non-blocking event loop.',
        },
        {
          title: 'npm Basics',
          slug: 'npm-basics',
          duration: '12 min',
          description: 'Install and manage packages with npm.',
        },
        {
          title: 'package.json',
          slug: 'package-json',
          duration: '10 min',
          description: 'The manifest file for every Node.js project.',
        },
        {
          title: 'Modules: CommonJS vs ESM',
          slug: 'modules-commonjs-vs-esm',
          duration: '14 min',
          description: 'Two module systems, and how to choose.',
        },
        {
          title: 'The File System (fs) Module',
          slug: 'file-system',
          duration: '14 min',
          description: 'Read and write files.',
        },
        {
          title: 'The path Module',
          slug: 'path-module',
          duration: '8 min',
          description: 'Build file paths correctly, cross-platform.',
        },
        {
          title: 'The os Module',
          slug: 'os-module',
          duration: '8 min',
          description: 'Query operating system information.',
        },
      ],
    },
    {
      level: 'Intermediate',
      items: [
        {
          title: 'Events & EventEmitter',
          slug: 'events-and-eventemitter',
          duration: '12 min',
          description: 'The pattern behind much of Node.js\'s API.',
        },
        {
          title: 'Streams',
          slug: 'streams',
          duration: '14 min',
          description: 'Process data piece by piece.',
        },
        {
          title: 'Buffers',
          slug: 'buffers',
          duration: '10 min',
          description: 'Work with raw binary data.',
        },
        {
          title: 'The Event Loop in Node.js',
          slug: 'event-loop-in-node',
          duration: '16 min',
          description: 'A closer look at the phases and timing.',
        },
        {
          title: 'Timers',
          slug: 'timers',
          duration: '10 min',
          description: 'setTimeout, setInterval, and setImmediate.',
        },
        {
          title: 'The process Object',
          slug: 'process-object',
          duration: '12 min',
          description: 'Environment variables, args, and shutdown.',
        },
        {
          title: 'The http Module',
          slug: 'http-module',
          duration: '12 min',
          description: 'Make requests and build servers, framework-free.',
        },
        {
          title: 'Creating a Server',
          slug: 'creating-a-server',
          duration: '14 min',
          description: 'Manual routing and body parsing.',
        },
        {
          title: 'Express Introduction',
          slug: 'express-introduction',
          duration: '10 min',
          description: 'Meet the most popular Node.js web framework.',
        },
        {
          title: 'Express Routing',
          slug: 'express-routing',
          duration: '12 min',
          description: 'Routes, parameters, and Router modules.',
        },
      ],
    },
    {
      level: 'Advanced',
      items: [
        {
          title: 'Middleware',
          slug: 'middleware',
          duration: '14 min',
          description: 'The core of Express\'s design.',
        },
        {
          title: 'Request & Response',
          slug: 'request-and-response',
          duration: '12 min',
          description: 'req and res in depth.',
        },
        {
          title: 'Query Params & Body Parsing',
          slug: 'query-params-and-body-parsing',
          duration: '12 min',
          description: 'The different ways data arrives.',
        },
        {
          title: 'Environment Variables',
          slug: 'environment-variables',
          duration: '10 min',
          description: 'Config and secrets, kept out of code.',
        },
        {
          title: 'Error Handling in Express',
          slug: 'error-handling-in-express',
          duration: '14 min',
          description: 'Centralized error-handling middleware.',
        },
        {
          title: 'REST API Design',
          slug: 'rest-api-design',
          duration: '14 min',
          description: 'Resources, methods, and status codes.',
        },
        {
          title: 'File Uploads',
          slug: 'file-uploads',
          duration: '12 min',
          description: 'Handle uploads with multer.',
        },
        {
          title: 'Connecting to MongoDB',
          slug: 'connecting-to-mongodb',
          duration: '14 min',
          description: 'Wire up Mongoose in an Express app.',
        },
        {
          title: 'Connecting to SQL',
          slug: 'connecting-to-sql',
          duration: '14 min',
          description: 'Connection pools and parameterized queries.',
        },
        {
          title: 'Authentication Basics',
          slug: 'authentication-basics',
          duration: '12 min',
          description: 'Authentication vs authorization, login flows.',
        },
        {
          title: 'JWT (JSON Web Tokens)',
          slug: 'jwt',
          duration: '14 min',
          description: 'Stateless, signed authentication tokens.',
        },
        {
          title: 'Password Hashing',
          slug: 'password-hashing',
          duration: '12 min',
          description: 'Hash passwords correctly with bcrypt.',
        },
        {
          title: 'CORS & Security Headers',
          slug: 'cors-and-security-headers',
          duration: '14 min',
          description: 'Control origins and harden HTTP headers.',
        },
        {
          title: 'Testing Node.js Apps',
          slug: 'testing-node-apps',
          duration: '14 min',
          description: 'Unit and integration tests for an API.',
        },
        {
          title: 'Best Practices',
          slug: 'best-practices',
          duration: '12 min',
          description: 'Structure, security, and reliability checklist.',
        },
      ],
    },
  ],
};
