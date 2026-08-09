import { Tutorial } from '@/app/types/tutorial';

export const eventLoopInNode: Tutorial = {
  slug: 'event-loop-in-node',

  title: 'The Event Loop in Node.js',

  description: 'A closer look at how Node.js schedules callbacks, and its distinct phases.',

  level: 'Intermediate',

  readingTime: '16 min',

  lesson: 'Lesson 13 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Phases of the Event Loop',
      content:
        'Node.js\'s event loop runs through a fixed set of phases repeatedly, each dedicated to a specific kind of callback. Unlike the browser\'s simpler task/microtask model, Node.js has several distinct phases for different sources of async work.',
    },

    {
      type: 'table',
      title: 'Main Phases (Simplified)',
      headers: ['Phase', 'Handles'],
      rows: [
        ['Timers', 'Callbacks scheduled by setTimeout and setInterval'],
        ['Pending Callbacks', 'Some system-level callbacks deferred from the previous cycle'],
        ['Poll', 'Fetching new I/O events; executes I/O callbacks (like a completed file read)'],
        ['Check', 'setImmediate() callbacks'],
        ['Close Callbacks', 'Cleanup, like socket "close" events'],
      ],
    },

    {
      type: 'code',
      title: 'setTimeout vs setImmediate',
      language: 'javascript',
      code: `setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));

// The order between these two is NOT guaranteed at the top level —
// it depends on process startup timing. Inside an I/O callback,
// setImmediate consistently runs before setTimeout(fn, 0).`,
    },

    {
      type: 'paragraph',
      title: 'Microtasks Run Between Every Phase',
      content:
        'Promise callbacks (via .then()) and process.nextTick() are microtasks — they run to completion after the currently executing operation finishes, before the event loop proceeds to the next phase. process.nextTick() has even higher priority than resolved promises.',
    },

    {
      type: 'code',
      title: 'Ordering Example',
      language: 'javascript',
      code: `console.log('1: sync');

setTimeout(() => console.log('2: timeout'), 0);

Promise.resolve().then(() => console.log('3: promise'));

process.nextTick(() => console.log('4: nextTick'));

console.log('5: sync');

// Output: 1, 5, 4, 3, 2
// Sync code first, then nextTick, then promises, then timers`,
    },

    {
      type: 'note',
      title: 'Why This Matters in Practice',
      content:
        'You rarely need to reason about exact phase ordering day to day — but understanding that promises resolve before timers, and that nextTick has the highest priority, explains a lot of subtle async bugs when they do come up.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Avoid process.nextTick() recursion (calling nextTick from within a nextTick callback repeatedly) — because it runs before the event loop can proceed to I/O, an unbounded recursive chain can starve I/O entirely.',
    },
  ],

  quiz: [
    {
      question: 'What is process.nextTick() relative to resolved Promise callbacks?',
      options: ['Lower priority', 'Higher priority — it runs before promise microtasks', 'Identical priority', 'It does not exist'],
      answer: 1,
    },
    {
      question: 'In the ordering example, why does synchronous code ("1" and "5") run before everything else?',
      options: [
        'It is random',
        'Synchronous code always runs to completion before any queued async callback',
        'setTimeout always runs first',
        'It depends on file size',
      ],
      answer: 1,
    },
    {
      question: 'What can happen if process.nextTick() is called recursively without bound?',
      options: [
        'Nothing, it is always safe',
        'It can starve I/O, since nextTick callbacks run before the event loop proceeds',
        'It automatically times out after 1 second',
        'It only affects setTimeout',
      ],
      answer: 1,
    },
  ],

  previous: 'buffers',
  next: 'timers',
};
