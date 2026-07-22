export const eventLoop = {
  slug: 'event-loop',

  title: 'The Event Loop',

  description:
    'Learn how JavaScript manages asynchronous work on a single thread — the call stack, Web APIs, the macrotask and microtask queues, and the event loop that ties them all together.',

  level: 'Advanced',

  readingTime: '20 min',

  lesson: 'Lesson 47 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'JavaScript Is Single-Threaded',
      content:
        "JavaScript runs on a single thread, meaning it has exactly one call stack and can only do one thing at a time. There's no built-in way for two pieces of your JavaScript code to run at the exact same instant. This might seem like it should make asynchronous code — like the Promises and async/await from the last two lessons — impossible, but it doesn't. The trick is that JavaScript doesn't handle asynchronous work by itself; it hands that work off to the surrounding environment (the browser or Node.js) and gets notified later when the work is done. The event loop is the mechanism that makes this handoff and notification system work.",
    },

    {
      type: 'paragraph',
      title: 'The Call Stack',
      content:
        'The call stack is where your synchronous code actually executes, one function call at a time. When a function is called, a new frame is pushed onto the stack; when it returns, that frame is popped off. As long as the stack has frames on it, the thread is busy — nothing else, including any pending asynchronous callback, can run. This is why a long-running synchronous loop can freeze an entire page: the stack never empties, so nothing waiting behind it gets a turn.',
    },

    {
      type: 'code',
      title: 'A Blocking Synchronous Call',
      language: 'javascript',
      code: `function first() {
  second();
  console.log("first done");
}

function second() {
  console.log("inside second");
}

first();
// inside second
// first done
// The stack goes: first() pushed -> second() pushed -> second() popped -> first() popped`,
    },

    {
      type: 'paragraph',
      title: 'Web APIs: Where Async Work Actually Happens',
      content:
        "Things like setTimeout(), fetch(), and DOM event listeners are not part of the JavaScript language itself — they're provided by the host environment (Web APIs in a browser, similar APIs in Node.js). When you call setTimeout(fn, 1000), JavaScript hands the timer off to the environment and immediately moves on to the next line; it does not sit on the call stack waiting. The environment manages the timer, the network request, or the event listener in the background, completely outside the call stack, and only comes back to JavaScript once that work is ready to be handled.",
    },

    {
      type: 'paragraph',
      title: 'The Callback (Macrotask) Queue',
      content:
        "When a Web API finishes its work — a timer expires, a network response arrives, a click happens — it doesn't jump straight onto the call stack. Instead, its callback is placed into a queue, often called the callback queue or macrotask queue. Other macrotasks include setTimeout/setInterval callbacks, DOM events, and I/O in Node.js. These callbacks wait in line until the call stack is completely empty.",
    },

    {
      type: 'paragraph',
      title: 'The Microtask Queue',
      content:
        'Promises use a separate, higher-priority queue called the microtask queue. Callbacks passed to .then(), .catch(), .finally(), as well as callbacks scheduled with queueMicrotask(), all land here instead of the macrotask queue. The microtask queue is checked more frequently than the macrotask queue — specifically, it is fully drained after every single synchronous chunk of code finishes, and after every individual macrotask, before the event loop ever looks at the macrotask queue again.',
    },

    {
      type: 'paragraph',
      title: "The Event Loop's Job",
      content:
        'The event loop is a continuously running process with one simple job: check whether the call stack is empty, and if it is, pull the next task in and push it onto the stack to execute. Its priority order is strict: first, run all synchronous code to completion. Then, before doing anything else, drain the entire microtask queue — every microtask, including any new microtasks queued by earlier ones. Only once the microtask queue is completely empty does the event loop take a single task from the macrotask queue, run it, and then immediately drain the microtask queue again before taking the next macrotask.',
    },

    {
      type: 'table',
      title: 'Queue Comparison',
      headers: ['Queue', 'Examples', 'Priority'],
      rows: [
        [
          'Call stack',
          'Regular synchronous function calls',
          'Runs first, always, until empty',
        ],
        [
          'Microtask queue',
          'Promise .then()/.catch()/.finally(), queueMicrotask()',
          'Fully drained before every macrotask',
        ],
        [
          'Macrotask queue',
          'setTimeout, setInterval, DOM events, I/O',
          'One task at a time, only when stack and microtasks are empty',
        ],
      ],
    },

    {
      type: 'paragraph',
      title: 'Why Microtasks Drain Completely First',
      content:
        'This design exists so that Promise-based work resolves as promptly and predictably as possible relative to other pending work — a chain of chained .then() calls all gets a chance to run before the event loop moves on to, say, the next timer or rendering update. The consequence is that if a microtask keeps scheduling more microtasks, the event loop will keep draining them indefinitely and the macrotask queue will starve, never getting a turn. This is rare in practice but explains why misusing recursive Promise chains can make timers appear to never fire.',
    },

    {
      type: 'code',
      title: 'The Classic Ordering Example',
      language: 'javascript',
      code: `console.log("1: synchronous start");

setTimeout(() => {
  console.log("2: setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("3: promise then (microtask)");
});

console.log("4: synchronous end");

// Output:
// 1: synchronous start
// 4: synchronous end
// 3: promise then (microtask)
// 2: setTimeout callback (macrotask)`,
    },

    {
      type: 'paragraph',
      title: 'Walking Through the Example',
      content:
        "Even though setTimeout(fn, 0) asks to run \"immediately,\" it still has to wait: it's a macrotask, so it can't run until all synchronous code finishes AND the microtask queue is empty. Here's the sequence: the two console.log() calls at the top and bottom run first because they're plain synchronous code on the call stack. The setTimeout callback is handed to the Web API and, once its 0ms timer expires, its callback is placed on the macrotask queue — it does not run yet. The Promise.resolve().then() callback is placed on the microtask queue. Once the synchronous code finishes and the stack is empty, the event loop drains the microtask queue first (log 3), and only then does it pull the one macrotask off the queue (log 2). This is why the output reads 1, 4, 3, 2 instead of the top-to-bottom order 1, 2, 3, 4 you might expect from reading the source alone.",
    },

    {
      type: 'code',
      title: 'queueMicrotask() Directly',
      language: 'javascript',
      code: `console.log("start");

setTimeout(() => console.log("timeout"), 0);

queueMicrotask(() => console.log("microtask 1"));

Promise.resolve().then(() => console.log("promise then"));

queueMicrotask(() => console.log("microtask 2"));

console.log("end");

// start
// end
// microtask 1
// promise then
// microtask 2
// timeout
// All microtasks (queueMicrotask and .then callbacks) drain, in order,
// before the setTimeout macrotask gets a turn.`,
    },

    {
      type: 'note',
      title: 'setTimeout(fn, 0) Does Not Mean "Run Now"',
      content:
        'A delay of 0ms only means the timer expires as soon as possible — it still has to wait for the current synchronous code to finish and for the entire microtask queue to drain before its callback can run. "Zero milliseconds" is a minimum, not a guarantee of immediacy.',
    },

    {
      type: 'paragraph',
      title: 'Why This Matters for Debugging',
      content:
        'Understanding the event loop is what lets you predict — rather than guess — the order in which asynchronous callbacks fire. Bugs like a value being read before a Promise has actually resolved, a UI update happening in the wrong order relative to a timer, or a callback firing later than expected almost always trace back to a misunderstanding of the call stack, the microtask queue, and the macrotask queue. Once you can mentally trace through which queue a piece of code lands in and when the event loop will get to it, these ordering bugs become predictable instead of mysterious.',
    },

    {
      type: 'tip',
      title: 'A Mental Model You Can Reuse',
      content:
        'When reading async code, ask three questions in order: (1) What runs synchronously, right now, on the call stack? (2) What Promise-related callbacks get queued as microtasks, and in what order? (3) What timer or event callbacks get queued as macrotasks? Then remember the rule: all synchronous code runs, then all microtasks drain, then one macrotask runs, then microtasks drain again, repeating for every macrotask.',
    },

    {
      type: 'warning',
      title: 'A Busy Microtask Queue Can Starve Timers',
      content:
        'If code inside a .then() callback keeps scheduling more microtasks (for example, resolving another promise and chaining onto it, over and over), the event loop will keep draining the microtask queue and never reach the macrotask queue. In practice this means setTimeout callbacks, and even things like rendering, can be indefinitely delayed by runaway microtask chains.',
    },
  ],

  quiz: [
    {
      question: 'How many call stacks does JavaScript have?',
      options: [
        'One',
        'Two, one for sync and one for async code',
        'As many as there are pending callbacks',
        'It depends on the environment',
      ],
      answer: 0,
    },
    {
      question: 'Where does a setTimeout callback go once its timer expires?',
      options: [
        'Directly onto the call stack',
        'Into the microtask queue',
        'Into the macrotask (callback) queue, to wait for the stack and microtask queue to clear',
        'It runs immediately, interrupting the current code',
      ],
      answer: 2,
    },
    {
      question: 'Which of these lands on the microtask queue?',
      options: [
        'A setTimeout callback',
        'A DOM click event handler',
        'A Promise .then() callback',
        'A setInterval callback',
      ],
      answer: 2,
    },
    {
      question: 'In what order does the event loop process pending work?',
      options: [
        'Macrotasks first, then microtasks, then sync code',
        'Sync code, then the entire microtask queue, then one macrotask, repeating',
        'Whichever queue was populated first, in a single pass',
        'Sync code and macrotasks interleaved evenly',
      ],
      answer: 1,
    },
    {
      question:
        'What logs first in: console.log("A"); setTimeout(() => console.log("B"), 0); Promise.resolve().then(() => console.log("C")); console.log("D");',
      options: ['A, B, C, D', 'A, D, C, B', 'A, D, B, C', 'A, C, D, B'],
      answer: 1,
    },
    {
      question: 'In what order does this code log?',
      code: `console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve()
  .then(() => console.log("promise 1"))
  .then(() => console.log("promise 2"));

console.log("end");`,
      options: [
        'start, end, promise 1, promise 2, timeout',
        'start, end, timeout, promise 1, promise 2',
        'start, promise 1, promise 2, end, timeout',
        'start, end, promise 1, timeout, promise 2',
      ],
      answer: 0,
    },
  ],

  previous: 'prototype',
  next: 'memory-management',
};
