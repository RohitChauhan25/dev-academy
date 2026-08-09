import { Tutorial } from '@/app/types/tutorial';

export const nodejsArchitecture: Tutorial = {
  slug: 'nodejs-architecture',

  title: 'Node.js Architecture',

  description: 'Understand the single-threaded event loop and libuv, the foundation of how Node.js handles concurrency.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 3 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Single-Threaded, Non-Blocking',
      content:
        'Node.js runs your JavaScript code on a single main thread — but it handles many concurrent operations (file reads, network requests) without blocking that thread, by delegating slow work elsewhere and using a callback-driven event loop to pick up results when ready.',
    },

    {
      type: 'table',
      title: 'Key Architecture Pieces',
      headers: ['Piece', 'Role'],
      rows: [
        ['V8', 'Compiles and executes JavaScript'],
        ['libuv', 'A C library providing the event loop and a thread pool for I/O'],
        ['Event Loop', 'Continuously checks for completed async work and runs its callbacks'],
        ['Thread Pool', 'A small pool of background threads libuv uses for things like file system operations'],
      ],
    },

    {
      type: 'code',
      title: 'Non-Blocking in Action',
      language: 'javascript',
      code: `console.log("1: Start");

setTimeout(() => console.log("2: Timer done"), 0);

console.log("3: End");

// Output order: 1, 3, 2
// The main thread never waits for the timer — it moves on immediately`,
    },

    {
      type: 'paragraph',
      title: 'Why This Matters',
      content:
        'A traditional multi-threaded server might spin up a new thread per request, which is memory-heavy at scale. Node.js instead handles thousands of concurrent connections on one thread, since most server work (waiting on a database or a network call) is I/O, not CPU — exactly what the non-blocking model is optimized for.',
    },

    {
      type: 'warning',
      title: 'CPU-Heavy Work Blocks Everything',
      content:
        'The non-blocking model only helps with I/O. A genuinely CPU-intensive task (like processing a huge image synchronously) still runs on the single main thread and blocks every other request until it finishes — this is Node.js\'s main weakness, addressed with worker threads for CPU-bound work.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Node.js is an excellent fit for I/O-heavy workloads (APIs, real-time apps) and a poor fit for CPU-heavy workloads (video encoding, heavy computation) on the main thread — know which kind of work your application actually does.',
    },
  ],

  quiz: [
    {
      question: 'How many main threads does a Node.js process run JavaScript on?',
      options: ['One', 'One per CPU core', 'Unlimited', 'It depends on the framework'],
      answer: 0,
    },
    {
      question: 'What is libuv responsible for?',
      options: ['Compiling JavaScript', 'Providing the event loop and a thread pool for I/O', 'Styling the terminal output', 'Managing npm packages'],
      answer: 1,
    },
    {
      question: 'Why can a CPU-heavy synchronous task be a problem in Node.js?',
      options: [
        'It cannot run at all',
        'It blocks the single main thread, delaying every other request until it finishes',
        'It automatically crashes the server',
        'It only affects the thread pool, not the main thread',
      ],
      answer: 1,
    },
  ],

  previous: 'installation-and-setup',
  next: 'npm-basics',
};
