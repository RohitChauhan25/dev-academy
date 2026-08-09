import type { InterviewQuestionTopic } from '@/content/javascript/interview-questions';

export const nodejsInterviewQuestions: InterviewQuestionTopic[] = [
  {
    slug: 'introduction',
    title: 'Node.js Introduction',
    questions: [
      {
        question: 'What is Node.js, and what engine does it run on?',
        answer: 'A JavaScript runtime, built on Chrome\'s V8 engine, that lets JavaScript run outside a browser — on a server, as a CLI tool, or in a build script.',
        difficulty: 'beginner',
      },
      {
        question: 'What is a key difference between Node.js and browser JavaScript environments?',
        answer:
          'Node.js provides server-side APIs like file system and networking access instead of browser APIs like the DOM and window object — the core JavaScript language itself is the same in both.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'nodejs-architecture',
    title: 'Node.js Architecture',
    questions: [
      {
        question: 'Is Node.js single-threaded or multi-threaded for running JavaScript?',
        answer:
          'Single-threaded for executing your JavaScript code, but it delegates I/O work to libuv\'s thread pool and OS-level async mechanisms, so it can still handle many concurrent operations without blocking.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why is Node.js a poor fit for CPU-intensive synchronous work?',
        answer:
          'A CPU-heavy task runs on the single main thread and blocks the event loop, delaying every other request until it finishes — worker threads exist specifically to move CPU-bound work off the main thread.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'npm-basics',
    title: 'npm Basics',
    questions: [
      {
        question: 'What is the purpose of package-lock.json?',
        answer: 'It records the exact resolved version of every dependency (including nested ones), ensuring consistent installs across machines and CI.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'modules-commonjs-vs-esm',
    title: 'Modules: CommonJS vs ESM',
    questions: [
      {
        question: 'What is the main syntactic difference between CommonJS and ES Modules?',
        answer: 'CommonJS uses require() and module.exports; ES Modules use import and export. A file uses one system or the other, not a mix.',
        difficulty: 'beginner',
      },
      {
        question: 'How does Node.js decide whether a .js file is CommonJS or an ES Module?',
        answer:
          'By the "type" field in package.json ("module" for ESM, otherwise CommonJS by default), unless the file explicitly uses a .cjs or .mjs extension, which always overrides that setting.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'file-system',
    title: 'The File System (fs) Module',
    questions: [
      {
        question: 'Why should readFileSync() generally be avoided in a running web server?',
        answer: 'It blocks the entire event loop until the disk read completes, freezing every other in-flight request in the meantime.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'streams',
    title: 'Streams',
    questions: [
      {
        question: 'What problem do streams solve compared to reading an entire file into memory?',
        answer: 'They process data in small chunks as it arrives, keeping memory usage low regardless of the total file size.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is backpressure in the context of streams?',
        answer:
          'An automatic mechanism where .pipe() pauses a fast readable stream until a slower writable stream catches up, preventing unbounded memory growth.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'event-loop-in-node',
    title: 'The Event Loop in Node.js',
    questions: [
      {
        question: 'What runs first: synchronous code, process.nextTick(), resolved Promise callbacks, or a setTimeout(fn, 0) callback?',
        answer:
          'Synchronous code runs first, then process.nextTick() callbacks, then resolved Promise (microtask) callbacks, and only then does the event loop reach the timers phase for setTimeout.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'process-object',
    title: 'The process Object',
    questions: [
      {
        question: 'Why should a server listen for the SIGTERM signal?',
        answer: 'To shut down gracefully — finishing in-flight requests and closing database connections — before the process actually exits, which matters especially in containerized deployments.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'http-module',
    title: 'The http Module',
    questions: [
      {
        question: 'What does a framework like Express add on top of the core http module?',
        answer: 'Routing, middleware, and convenient request/response helpers — none of which exist in the raw http module by default.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'middleware',
    title: 'Middleware',
    questions: [
      {
        question: 'What must an Express middleware function do to pass control to the next one?',
        answer: 'Call next() — or send a response directly. Failing to do either leaves the request hanging indefinitely.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'query-params-and-body-parsing',
    title: 'Query Params & Body Parsing',
    questions: [
      {
        question: 'Why is req.body undefined even when a client sends a valid JSON body?',
        answer: 'Because the express.json() (or similar) middleware was not registered before the route — without it, Express does not parse the body automatically.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'error-handling-in-express',
    title: 'Error Handling in Express',
    questions: [
      {
        question: 'How does Express identify an error-handling middleware?',
        answer: 'By its signature — a function with exactly four parameters: (err, req, res, next).',
        difficulty: 'intermediate',
      },
      {
        question: 'In older Express versions, does an unhandled rejected Promise in an async route handler automatically reach the error middleware?',
        answer: 'No — it must be caught and passed explicitly via next(err), or wrapped in a helper that does so automatically (Express 5 changes this behavior).',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'rest-api-design',
    title: 'REST API Design',
    questions: [
      {
        question: 'What is the conventional difference between PUT and PATCH?',
        answer: 'PUT conventionally replaces the entire resource; PATCH updates only the fields provided in the request.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'connecting-to-sql',
    title: 'Connecting to SQL',
    questions: [
      {
        question: 'Why are parameterized queries important when querying a SQL database from Node.js?',
        answer: 'They prevent SQL injection by safely escaping user-supplied values, instead of concatenating raw input directly into a query string.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'authentication-basics',
    title: 'Authentication Basics',
    questions: [
      {
        question: 'What is the difference between authentication and authorization?',
        answer: 'Authentication verifies who a user is; authorization determines what an already-authenticated user is allowed to do.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'jwt',
    title: 'JWT (JSON Web Tokens)',
    questions: [
      {
        question: 'Is the payload of a JWT encrypted?',
        answer: 'No — it is only base64-encoded and readable by anyone who has the token. The signature only prevents undetected tampering, not reading the contents.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is a downside of stateless JWT authentication compared to server-side sessions?',
        answer: 'A JWT cannot be instantly revoked before it expires without additional infrastructure, like a token blocklist — unlike a database-backed session, which can be deleted immediately.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'password-hashing',
    title: 'Password Hashing',
    questions: [
      {
        question: 'Why is bcrypt preferred over a fast general-purpose hash like SHA-256 for passwords?',
        answer: 'bcrypt is deliberately slow and includes an automatic per-user salt, making brute-force attacks impractical — a fast hash function lets attackers try billions of guesses per second.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'cors-and-security-headers',
    title: 'CORS & Security Headers',
    questions: [
      {
        question: 'Does CORS protect an API from all unauthorized access?',
        answer: 'No — CORS is enforced by browsers for JavaScript-initiated cross-origin requests specifically. It does not stop server-to-server requests, curl, or non-browser clients.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'testing-node-apps',
    title: 'Testing Node.js Apps',
    questions: [
      {
        question: 'Why is it common to separate app.js from server.js in an Express project?',
        answer: 'So tests can import the configured Express app directly using a tool like supertest, without needing to start a real server bound to a port.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'best-practices',
    title: 'Node.js Best Practices',
    questions: [
      {
        question: 'What can happen if an unhandled promise rejection is left unaddressed in a Node.js app?',
        answer: 'It can silently fail or, in newer Node.js versions, crash the process entirely — a process.on(\'unhandledRejection\') handler helps surface these bugs during development.',
        difficulty: 'advanced',
      },
    ],
  },
];
