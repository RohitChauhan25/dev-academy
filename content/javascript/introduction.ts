import { Tutorial } from '@/app/types/tutorial';

export const introduction: Tutorial = {
  slug: 'introduction',

  title: 'JavaScript Introduction',

  description:
    'Understand what JavaScript is, why it is the most popular programming language for web development, how it works, and where it is used.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 1 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'What is JavaScript?',
      content:
        'JavaScript is a high-level, interpreted programming language used to create interactive and dynamic web applications. It allows developers to update content without reloading the page, validate forms, create animations, communicate with servers, and build modern user experiences.',
    },

    {
      type: 'paragraph',
      title: 'A Brief History',
      content:
        'JavaScript was created by Brendan Eich in 1995 at Netscape in just 10 days. It was originally called LiveScript, but was later renamed JavaScript because Java was extremely popular at that time. Today, JavaScript and Java are completely different programming languages.',
    },

    {
      type: 'table',
      title: 'Quick Facts',
      headers: ['Feature', 'Value'],
      rows: [
        ['Created By', 'Brendan Eich'],
        ['Released', '1995'],
        ['Official Standard', 'ECMAScript'],
        ['Runs On', 'Browsers & Servers'],
        ['Current Usage', 'Frontend, Backend, Mobile, Desktop'],
      ],
    },

    {
      type: 'list',
      title: 'Why Learn JavaScript?',
      items: [
        'The most popular programming language for web development.',
        'Required for Frontend Development.',
        'Used with React, Angular and Vue.',
        'Build backend applications using Node.js.',
        'Develop Browser Extensions.',
        'Create Mobile Apps using React Native.',
        'Build Desktop Apps using Electron.',
        'High demand in software companies.',
      ],
    },

    {
      type: 'paragraph',
      title: 'Where is JavaScript Used?',
      content:
        'JavaScript is no longer limited to websites. Today it is used in almost every area of software development.',
    },

    {
      type: 'list',
      title: 'Popular Use Cases',
      items: [
        'Interactive Websites',
        'Frontend Development',
        'Backend APIs (Node.js)',
        'Browser Extensions',
        'Chrome Extensions',
        'Mobile Applications',
        'Desktop Applications',
        'Games',
        'Serverless Functions',
      ],
    },

    {
      type: 'paragraph',
      title: 'How JavaScript Works',
      content:
        'When you write JavaScript, the browser reads your code using a JavaScript Engine such as V8 (Chrome), SpiderMonkey (Firefox), or JavaScriptCore (Safari). The engine parses the code, compiles it into machine code, and executes it efficiently.',
    },

    {
      type: 'code',
      title: 'Your First JavaScript Program',
      language: 'javascript',
      code: `console.log("Hello, DevAcademy!");`,
    },

    {
      type: 'note',
      title: 'JavaScript vs Java',
      content:
        'Despite their similar names, JavaScript and Java are completely different programming languages designed for different purposes.',
    },

    {
      type: 'table',
      title: 'JavaScript vs Java',
      headers: ['JavaScript', 'Java'],
      rows: [
        ['Runs inside Browser & Node.js', 'Runs on JVM'],
        ['Interpreted / JIT Compiled', 'Compiled'],
        ['Used for Web Development', 'Used for Enterprise Applications'],
        ['Dynamic Typing', 'Static Typing'],
      ],
    },

    {
      type: 'paragraph',
      title: 'What JavaScript Can Do',
      content:
        'JavaScript can manipulate HTML, update CSS, respond to user actions, communicate with servers, store local data, validate forms, create animations, and build complete web applications.',
    },

    {
      type: 'list',
      title: 'Capabilities',
      items: [
        'Modify HTML',
        'Modify CSS',
        'Handle Button Clicks',
        'Send API Requests',
        'Store Local Data',
        'Validate Forms',
        'Create Animations',
        'Build Single Page Applications',
      ],
    },

    {
      type: 'warning',
      title: 'What JavaScript Cannot Do',
      content:
        'For security reasons, JavaScript running inside the browser cannot access your operating system, read arbitrary files, or use your camera and microphone without your permission.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'The best way to learn JavaScript is by writing code. After every lesson, try building a small project or solving a few coding exercises.',
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        'JavaScript is the language of the web. It powers interactive websites, modern frameworks like React, backend development with Node.js, browser extensions, mobile applications, and much more. Learning JavaScript is the first step toward becoming a professional web developer.',
    },
  ],

  quiz: [
    {
      question: 'Who created JavaScript?',
      options: [
        'James Gosling',
        'Brendan Eich',
        'Dennis Ritchie',
        'Guido van Rossum',
      ],
      answer: 1,
    },
    {
      question: 'JavaScript is standardized as?',
      options: ['ECMAScript', 'TypeScript', 'Node.js', 'HTML'],
      answer: 0,
    },
    {
      question: 'Which engine is used in Google Chrome?',
      options: ['SpiderMonkey', 'Nitro', 'V8', 'Chakra'],
      answer: 2,
    },
  ],

  next: 'setup',
};
