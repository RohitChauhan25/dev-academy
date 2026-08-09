import { Tutorial } from '@/app/types/tutorial';

export const timers: Tutorial = {
  slug: 'timers',

  title: 'Timers',

  description: 'Schedule code to run later with setTimeout, setInterval, and setImmediate.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 14 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'The Three Timer Functions',
      content:
        'Node.js provides the same setTimeout and setInterval functions available in browsers, plus a Node-specific setImmediate. All three schedule a callback to run asynchronously, later.',
    },

    {
      type: 'code',
      title: 'setTimeout and clearTimeout',
      language: 'javascript',
      code: `const timer = setTimeout(() => {
  console.log('Runs once, after 1 second');
}, 1000);

// Cancel it before it fires
clearTimeout(timer);`,
    },

    {
      type: 'code',
      title: 'setInterval and clearInterval',
      language: 'javascript',
      code: `const interval = setInterval(() => {
  console.log('Runs every 2 seconds');
}, 2000);

// Stop it after 10 seconds
setTimeout(() => clearInterval(interval), 10000);`,
    },

    {
      type: 'table',
      title: 'Timer Functions Compared',
      headers: ['Function', 'Behavior'],
      rows: [
        ['setTimeout(fn, ms)', 'Runs fn once, after at least ms milliseconds'],
        ['setInterval(fn, ms)', 'Runs fn repeatedly, roughly every ms milliseconds'],
        ['setImmediate(fn)', 'Runs fn on the next event loop iteration, after I/O callbacks'],
      ],
    },

    {
      type: 'note',
      title: 'The Delay is a Minimum, Not a Guarantee',
      content:
        'setTimeout(fn, 0) does not run fn immediately — it schedules fn for the next timers phase, which only happens once the currently executing synchronous code (and any pending microtasks) finish. Under heavy load, the actual delay can be noticeably longer than requested.',
    },

    {
      type: 'code',
      title: 'A Non-Blocking Delay Helper',
      language: 'javascript',
      code: `function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log('Start');
await delay(1000);
console.log('One second later');`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always keep a reference to a timer if you might need to cancel it — an interval left running with no way to clear it is a classic source of memory leaks in long-running Node.js processes.',
    },
  ],

  quiz: [
    {
      question: 'What does setTimeout(fn, 0) actually guarantee?',
      options: [
        'fn runs immediately, synchronously',
        'fn is scheduled to run on a later event loop iteration, not immediately',
        'fn never runs',
        'fn runs before any synchronous code',
      ],
      answer: 1,
    },
    {
      question: 'What is a common cause of memory leaks involving timers?',
      options: [
        'Using setTimeout at all',
        'A setInterval left running with no reference kept to clear it later',
        'Using async/await',
        'Timers cannot cause memory leaks',
      ],
      answer: 1,
    },
    {
      question: 'How can setTimeout be used to build an awaitable delay?',
      options: [
        'It cannot be combined with Promises',
        'Wrap it in a Promise that resolves inside the setTimeout callback',
        'Use await setTimeout() directly',
        'Only setInterval supports this',
      ],
      answer: 1,
    },
  ],

  previous: 'event-loop-in-node',
  next: 'process-object',
};
