export const asyncAwait = {
  slug: 'async-await',

  title: 'Async/Await',

  description:
    'Learn how async/await lets you write asynchronous, Promise-based code that reads like ordinary synchronous code, including error handling and running work in parallel.',

  level: 'Advanced',

  readingTime: '20 min',

  lesson: 'Lesson 42 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'From Promise Chains to async/await',
      content:
        "async/await is syntax built on top of Promises — it doesn't replace them, it makes them easier to read and write. Instead of chaining .then() calls, you mark a function as async and use the await keyword inside it to pause execution until a promise settles. The result reads almost exactly like synchronous code, while still being fully asynchronous under the hood.",
    },

    {
      type: 'paragraph',
      title: 'async Functions Always Return a Promise',
      content:
        'Adding the async keyword before a function declaration changes what it returns: an async function always returns a Promise, no matter what you return inside it. If you return a plain value, JavaScript automatically wraps it in a resolved promise. If you throw an error inside an async function, that error becomes a rejected promise instead of an uncaught exception.',
    },

    {
      type: 'code',
      title: 'async Functions Wrap Return Values in Promises',
      language: 'javascript',
      code: `async function getGreeting() {
  return "Hello!";
}

console.log(getGreeting());
// Promise { "Hello!" } — not the string itself

getGreeting().then((message) => console.log(message));
// Hello!

async function willFail() {
  throw new Error("Something broke");
}

willFail().catch((error) => console.log("Caught:", error.message));
// Caught: Something broke`,
    },

    {
      type: 'paragraph',
      title: 'The await Keyword',
      content:
        "The await keyword can only be used inside an async function (with one exception covered later). It pauses execution of that function until the promise it's given settles, then either returns the fulfilled value or throws the rejection as an error. Crucially, await only pauses the async function itself — the rest of your program keeps running normally, since JavaScript is still single-threaded and non-blocking underneath.",
    },

    {
      type: 'code',
      title: 'Converting a .then() Chain to async/await',
      language: 'javascript',
      code: `function fetchUser(id) {
  return Promise.resolve({ id, name: "Rohit" });
}

function fetchOrders(user) {
  return Promise.resolve(["Keyboard", "Mouse"]);
}

// Before: a .then() chain
function loadUserOrdersWithThen(id) {
  return fetchUser(id)
    .then((user) => fetchOrders(user))
    .then((orders) => {
      console.log("Orders:", orders);
      return orders;
    });
}

// After: the same logic with async/await
async function loadUserOrders(id) {
  const user = await fetchUser(id);
  const orders = await fetchOrders(user);

  console.log("Orders:", orders);
  return orders;
}

loadUserOrders(1);
// Orders: ["Keyboard", "Mouse"]`,
    },

    {
      type: 'paragraph',
      title: 'Error Handling with try/catch',
      content:
        'One of the biggest advantages of async/await is that it lets you handle Promise rejections with an ordinary try/catch block, exactly like synchronous errors from the earlier lesson on error handling. If any awaited promise rejects, execution jumps straight to the catch block — no need for a separate .catch() call chained onto every asynchronous step.',
    },

    {
      type: 'code',
      title: 'try/catch Around await',
      language: 'javascript',
      code: `function fetchUser(id) {
  return id > 0
    ? Promise.resolve({ id, name: "Rohit" })
    : Promise.reject(new Error("Invalid user id"));
}

async function loadUser(id) {
  try {
    const user = await fetchUser(id);
    console.log("Loaded:", user.name);
    return user;
  } catch (error) {
    console.log("Failed to load user:", error.message);
    return null;
  } finally {
    console.log("Done attempting to load user");
  }
}

loadUser(-1);
// Failed to load user: Invalid user id
// Done attempting to load user`,
    },

    {
      type: 'paragraph',
      title: 'Parallel vs. Serial awaits',
      content:
        "A subtle but important trap: awaiting one promise at a time inside a loop or sequence of statements runs those operations one after another, even if they don't depend on each other's results. If the operations are independent, start them all first and then await them together with Promise.all() — this runs them in parallel and can be dramatically faster.",
    },

    {
      type: 'code',
      title: 'Accidentally Serializing Independent Work',
      language: 'javascript',
      code: `function delay(value, ms) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

// Slower: each await waits for the previous one to finish first
async function serial() {
  const a = await delay("a", 1000);
  const b = await delay("b", 1000);
  const c = await delay("c", 1000);
  return [a, b, c];
  // Takes roughly 3000ms total
}

// Faster: all three timers start immediately, then we wait for all of them
async function parallel() {
  const promiseA = delay("a", 1000);
  const promiseB = delay("b", 1000);
  const promiseC = delay("c", 1000);

  const results = await Promise.all([promiseA, promiseB, promiseC]);
  return results;
  // Takes roughly 1000ms total, since all three run at the same time
}`,
    },

    {
      type: 'warning',
      title: 'await Inside Loops',
      content:
        "Calling await on a fresh promise inside every iteration of a for loop forces each iteration to wait for the last one to finish, even when the operations have nothing to do with each other. If the iterations are independent, map over the array to start all the promises first, then await Promise.all() on the resulting array — don't await inside the loop itself.",
    },

    {
      type: 'paragraph',
      title: 'A Brief Note on Top-Level await',
      content:
        "Historically, await was only legal inside an async function. Modern JavaScript modules (the ES module system covered in the next lesson) support top-level await, letting you use await directly in a module's top-level code without wrapping it in an async function. This is handy for one-off setup work, like awaiting a database connection before the rest of a module runs — but it's only available inside modules, not in regular scripts.",
    },

    {
      type: 'code',
      title: 'Top-Level await in a Module',
      language: 'javascript',
      code: `// Inside an ES module file (not a regular script):
const response = await fetch("https://api.example.com/config");
const config = await response.json();

console.log(config);
// The module's remaining code waits for this before continuing to run`,
    },

    {
      type: 'tip',
      title: 'Mixing Promises and async/await',
      content:
        "You don't have to choose one style forever — async/await and raw Promise methods interoperate freely. It's common to write async functions that still use Promise.all(), Promise.race(), or Promise.allSettled() internally, combining the readability of await with the power of the Promise combinators from the previous lesson.",
    },
  ],

  quiz: [
    {
      question: 'What does an async function always return?',
      options: [
        'undefined',
        'A Promise',
        'The literal return value with no wrapping',
        'An array',
      ],
      answer: 1,
    },
    {
      question:
        'What happens when you await a rejected promise inside a try block?',
      options: [
        'The function silently returns undefined',
        'It throws, and execution jumps to the matching catch block',
        'The program crashes immediately',
        'It is ignored and execution continues normally',
      ],
      answer: 1,
    },
    {
      question:
        'Why does awaiting three independent promises one at a time run slower than necessary?',
      options: [
        'await always adds a fixed delay',
        'Each await pauses until the previous operation finishes, serializing work that could run in parallel',
        'JavaScript limits you to one promise per function',
        'It does not run slower, this is a myth',
      ],
      answer: 1,
    },
    {
      question:
        'How do you run several independent async operations in parallel and await all their results?',
      options: [
        'Await each one inside a for loop',
        'Start them all, then await Promise.all() on the array of promises',
        'Use await twice on the same promise',
        'It is not possible with async/await',
      ],
      answer: 1,
    },
    {
      question: 'Where is top-level await supported?',
      options: [
        'In any regular JavaScript script file',
        'Only inside ES modules',
        'Only inside try/catch blocks',
        'Only inside arrow functions',
      ],
      answer: 1,
    },
    {
      question: 'What does this code log?',
      code: `async function getValue() {
  return 5;
}

console.log(getValue());`,
      options: ['5', 'Promise {<fulfilled>: 5}', 'undefined', 'SyntaxError'],
      answer: 1,
    },
    {
      question: 'In what order does this code log?',
      code: `async function run() {
  console.log("A");
  await null;
  console.log("B");
}

console.log("start");
run();
console.log("end");`,
      options: [
        'start, A, B, end',
        'start, A, end, B',
        'A, start, end, B',
        'start, end, A, B',
      ],
      answer: 1,
    },
  ],

  previous: 'promises',
  next: 'modules',
};
