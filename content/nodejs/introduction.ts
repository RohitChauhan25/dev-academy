import { Tutorial } from '@/app/types/tutorial';

export const introduction: Tutorial = {
  slug: 'introduction',

  title: 'Node.js Introduction',

  description: 'Understand what Node.js is, how it lets JavaScript run outside the browser, and where it is used.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 1 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'What is Node.js?',
      content:
        'Node.js is a JavaScript runtime built on Chrome\'s V8 engine that lets you run JavaScript outside a browser — on a server, in a script, or as a command-line tool. It added things browsers don\'t need (file system access, networking) and removed things servers don\'t need (a DOM, a window object).',
    },

    {
      type: 'code',
      title: 'Your First Node.js Script',
      language: 'bash',
      code: `# hello.js
console.log("Hello from Node.js!");

# Run it
node hello.js`,
    },

    {
      type: 'table',
      title: 'What Node.js Enables',
      headers: ['Use Case', 'Example'],
      rows: [
        ['Web servers & APIs', 'Express, Fastify, NestJS'],
        ['Command-line tools', 'npm itself, ESLint, Prettier'],
        ['Build tools', 'Vite, Webpack, Next.js'],
        ['Scripting & automation', 'Deployment scripts, data processing'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Same Language, Different Environment',
      content:
        'Core JavaScript (variables, functions, promises, classes) works identically in Node.js and the browser. What differs is the surrounding environment — Node.js gives you modules like fs and http instead of document and window.',
    },

    {
      type: 'note',
      title: 'Why Node.js Matters for Full-Stack JavaScript',
      content:
        'Node.js is what makes it possible to use JavaScript on both the frontend and backend of an application — sharing types, validation logic, and even entire libraries between the two, and letting a team specialize in one language across the whole stack.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'If you already know JavaScript from the browser, most of your knowledge transfers directly to Node.js — focus your learning specifically on the new APIs (modules, fs, http) rather than the language itself.',
    },
  ],

  quiz: [
    {
      question: 'What engine is Node.js built on?',
      options: ['SpiderMonkey', 'V8', 'Chakra', 'JavaScriptCore'],
      answer: 1,
    },
    {
      question: 'What is a key difference between Node.js and browser JavaScript?',
      options: [
        'Node.js uses a different programming language',
        'Node.js provides server-side APIs like file system access instead of DOM APIs',
        'Node.js cannot use variables',
        'There is no difference at all',
      ],
      answer: 1,
    },
    {
      question: 'Which of these is a common Node.js use case?',
      options: ['Styling web pages with CSS', 'Building a web server or API', 'Rendering 3D graphics in a browser', 'Writing HTML markup'],
      answer: 1,
    },
  ],

  next: 'installation-and-setup',
};
