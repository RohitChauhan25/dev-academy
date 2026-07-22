export const promises = {
  slug: 'promises',

  title: 'Promises',

  description:
    'Learn how JavaScript Promises represent the eventual result of an asynchronous operation, and how to use .then(), .catch(), Promise.all(), Promise.race(), and Promise.allSettled().',

  level: 'Advanced',

  readingTime: '20 min',

  lesson: 'Lesson 41 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'What Is a Promise?',
      content:
        "A Promise is an object representing the eventual result of an asynchronous operation — something that hasn't finished yet, but will finish (successfully or not) at some point in the future. Instead of forcing your code to freeze and wait, a Promise lets you keep going and attach instructions for what to do once the result is ready. This solves the exact problem from the previous lesson: it gives asynchronous work a proper, catchable way to report success or failure.",
    },

    {
      type: 'table',
      title: 'The Three States of a Promise',
      headers: ['State', 'Meaning'],
      rows: [
        ['Pending', 'The initial state — the operation has not completed yet'],
        [
          'Fulfilled',
          'The operation completed successfully, and has a resulting value',
        ],
        [
          'Rejected',
          'The operation failed, and has a reason (typically an Error)',
        ],
      ],
    },

    {
      type: 'paragraph',
      title: 'Creating a Promise',
      content:
        'You create a Promise with the Promise constructor, which takes a single function called the executor. The executor receives two functions as arguments — resolve and reject — call resolve(value) when the operation succeeds, or reject(error) when it fails. Once a promise settles (resolves or rejects), its state is locked in permanently; it can never change again.',
    },

    {
      type: 'code',
      title: 'The Promise Constructor',
      language: 'javascript',
      code: `function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) {
        reject(new Error("Invalid user id"));
      } else {
        resolve({ id, name: "Rohit" });
      }
    }, 500);
  });
}

console.log(fetchUser(1));
// Promise { <pending> } — logged immediately, before the timeout finishes`,
    },

    {
      type: 'paragraph',
      title: 'Consuming a Promise: then, catch, finally',
      content:
        ".then() registers callbacks to run when a promise fulfills (first argument) or rejects (second, optional argument). .catch() is shorthand for handling only the rejection case, and reads more cleanly when placed after one or more .then() calls. .finally() runs once the promise settles, regardless of whether it fulfilled or rejected — just like the finally block from try/catch, it's the place for cleanup that must always happen.",
    },

    {
      type: 'code',
      title: 'then / catch / finally',
      language: 'javascript',
      code: `fetchUser(1)
  .then((user) => {
    console.log("Got user:", user.name);
  })
  .catch((error) => {
    console.log("Failed:", error.message);
  })
  .finally(() => {
    console.log("Request finished");
  });
// Got user: Rohit
// Request finished

fetchUser(-1)
  .then((user) => {
    console.log("Got user:", user.name);
  })
  .catch((error) => {
    console.log("Failed:", error.message);
  })
  .finally(() => {
    console.log("Request finished");
  });
// Failed: Invalid user id
// Request finished`,
    },

    {
      type: 'paragraph',
      title: 'Chaining Promises',
      content:
        'Each call to .then() returns a brand new promise, which is what makes chaining possible. If you return a plain value from inside a .then() callback, that value becomes the fulfillment value of the next promise in the chain. If you return another promise, the chain waits for that promise to settle before continuing — this is how you sequence multiple asynchronous steps, one after another, without nesting callbacks inside callbacks.',
    },

    {
      type: 'code',
      title: 'Chaining Multiple Steps',
      language: 'javascript',
      code: `function fetchUser(id) {
  return Promise.resolve({ id, name: "Rohit" });
}

function fetchOrders(user) {
  return Promise.resolve([{ id: 101, item: "Keyboard" }, { id: 102, item: "Mouse" }]);
}

fetchUser(1)
  .then((user) => fetchOrders(user))
  .then((orders) => {
    console.log("Order count:", orders.length);
  });
// Order count: 2`,
    },

    {
      type: 'warning',
      title: 'Forgetting to Return Inside a .then()',
      content:
        "A very common bug: forgetting to return the promise (or value) you're producing inside a .then() callback. Without the return, the next .then() in the chain runs immediately with undefined instead of waiting for your inner operation to finish — the chain silently stops tracking the work you actually care about.",
    },

    {
      type: 'code',
      title: 'The Missing return Bug',
      language: 'javascript',
      code: `function fetchOrders(user) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Keyboard", "Mouse"]), 300);
  });
}

// Wrong — missing return, orders will be undefined
fetchUser(1)
  .then((user) => {
    fetchOrders(user); // not returned!
  })
  .then((orders) => {
    console.log(orders); // undefined
  });

// Right — the inner promise is returned, so the chain waits for it
fetchUser(1)
  .then((user) => {
    return fetchOrders(user);
  })
  .then((orders) => {
    console.log(orders); // ["Keyboard", "Mouse"]
  });`,
    },

    {
      type: 'paragraph',
      title: 'Promise.all() — Run Many, Wait for All',
      content:
        "Promise.all() takes an array of promises and returns a single promise that fulfills with an array of all their results, in the same order, once every one of them has fulfilled. If even one of the promises rejects, Promise.all() immediately rejects with that error, without waiting for the others. It's the right tool when you need several independent operations to all succeed before moving on.",
    },

    {
      type: 'code',
      title: 'Promise.all() Example',
      language: 'javascript',
      code: `const promiseA = Promise.resolve(1);
const promiseB = Promise.resolve(2);
const promiseC = Promise.resolve(3);

Promise.all([promiseA, promiseB, promiseC]).then((results) => {
  console.log(results);
  // [1, 2, 3]
});

Promise.all([Promise.resolve(1), Promise.reject(new Error("boom")), Promise.resolve(3)])
  .then((results) => console.log(results))
  .catch((error) => console.log("Failed fast:", error.message));
// Failed fast: boom`,
    },

    {
      type: 'paragraph',
      title: 'Promise.race() — First One Wins',
      content:
        "Promise.race() also takes an array of promises, but settles as soon as the first one settles — whether that first one fulfills or rejects. This is useful for scenarios like timeouts, where you want to race a real operation against a promise that rejects after a set duration, so a slow request doesn't hang forever.",
    },

    {
      type: 'code',
      title: 'Promise.race() Example',
      language: 'javascript',
      code: `function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Timed out")), ms);
  });

  return Promise.race([promise, timeout]);
}

const slowRequest = new Promise((resolve) => setTimeout(() => resolve("data"), 2000));

withTimeout(slowRequest, 500)
  .then((result) => console.log("Success:", result))
  .catch((error) => console.log("Race lost:", error.message));
// Race lost: Timed out`,
    },

    {
      type: 'paragraph',
      title: 'Promise.allSettled() — Wait for Everything, No Matter What',
      content:
        "Unlike Promise.all(), Promise.allSettled() never short-circuits on a rejection. It waits for every promise to settle and returns an array of result objects, each shaped like { status: 'fulfilled', value } or { status: 'rejected', reason }. Reach for this when you want to know the outcome of every operation — successes and failures alike — instead of stopping at the first failure.",
    },

    {
      type: 'code',
      title: 'Promise.allSettled() Example',
      language: 'javascript',
      code: `Promise.allSettled([
  Promise.resolve("ok"),
  Promise.reject(new Error("failed")),
  Promise.resolve("also ok"),
]).then((results) => {
  console.log(results);
  // [
  //   { status: "fulfilled", value: "ok" },
  //   { status: "rejected", reason: Error: failed },
  //   { status: "fulfilled", value: "also ok" }
  // ]
});`,
    },

    {
      type: 'tip',
      title: 'Choosing the Right Combinator',
      content:
        "Use Promise.all() when every operation must succeed and you'll bail out if any fail. Use Promise.allSettled() when you want the outcome of every operation regardless of individual failures. Use Promise.race() when you only care about whichever promise settles first, such as implementing a timeout.",
    },
  ],

  quiz: [
    {
      question: 'Which state indicates a Promise has not yet completed?',
      options: ['Fulfilled', 'Rejected', 'Pending', 'Settled'],
      answer: 2,
    },
    {
      question:
        'What do the two arguments passed to the Promise constructor executor do?',
      options: [
        'They log success and failure messages',
        'They are called resolve and reject, and settle the promise',
        'They pause and resume execution',
        'They are optional and rarely used',
      ],
      answer: 1,
    },
    {
      question:
        'What is the main risk of forgetting to return a promise inside a .then() callback?',
      options: [
        'The program throws a SyntaxError',
        'The promise chain waits forever',
        'The next .then() runs immediately with undefined instead of the real result',
        'The .catch() handler runs instead',
      ],
      answer: 2,
    },
    {
      question: 'How does Promise.all() differ from Promise.allSettled()?',
      options: [
        'Promise.all() rejects immediately if any promise rejects; Promise.allSettled() always waits for every promise',
        'Promise.all() is faster but less accurate',
        'Promise.allSettled() can only accept two promises',
        'There is no meaningful difference',
      ],
      answer: 0,
    },
    {
      question:
        'Which combinator is best suited for implementing a request timeout?',
      options: [
        'Promise.all()',
        'Promise.allSettled()',
        'Promise.race()',
        'Promise.resolve()',
      ],
      answer: 2,
    },
    {
      question: 'What does this code log?',
      code: `Promise.resolve(1)
  .then((value) => {
    console.log(value);
    return value + 1;
  })
  .then((value) => {
    console.log(value);
  });`,
      options: ['1, 1', '1, 2', '2, 1', 'undefined, undefined'],
      answer: 1,
    },
    {
      question: 'What does this code log?',
      code: `Promise.reject("Error!")
  .then(() => console.log("resolved"))
  .catch((err) => console.log("caught:", err));`,
      options: [
        '"resolved"',
        '"caught: Error!"',
        'Nothing is logged',
        'Uncaught error crashes the program',
      ],
      answer: 1,
    },
  ],

  previous: 'error-handling',
  next: 'async-await',
};
