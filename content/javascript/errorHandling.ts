export const errorHandling = {
  slug: 'error-handling',

  title: 'Error Handling',

  description:
    'Learn how to handle runtime errors gracefully in JavaScript using try/catch/finally, the Error object, custom error classes, and catching specific error types.',

  level: 'Intermediate',

  readingTime: '16 min',

  lesson: 'Lesson 33 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Handle Errors?',
      content:
        "No matter how carefully you write code, things go wrong at runtime — a network request fails, a user types a number where an object was expected, a file doesn't exist. If you don't handle these situations, a single unexpected error can crash your entire program. Error handling lets you anticipate failure, respond to it gracefully, and keep the rest of your application running instead of dying at the first sign of trouble.",
    },

    {
      type: 'paragraph',
      title: 'try, catch, and finally',
      content:
        'The try...catch statement is the core tool for handling errors. Code that might fail goes inside the try block. If an error is thrown anywhere in that block, execution immediately jumps to the catch block, which receives the error as an argument. An optional finally block runs afterward no matter what happened — whether the try block succeeded, failed, or even returned early.',
    },

    {
      type: 'code',
      title: 'Basic try/catch/finally',
      language: 'javascript',
      code: `function parseAge(input) {
  try {
    const age = JSON.parse(input);

    if (typeof age !== "number") {
      throw new Error("Age must be a number");
    }

    console.log("Parsed age:", age);
    return age;
  } catch (error) {
    console.log("Something went wrong:", error.message);
    return null;
  } finally {
    console.log("Finished attempting to parse age");
  }
}

parseAge("25");
// Parsed age: 25
// Finished attempting to parse age

parseAge('"twenty-five"');
// Something went wrong: Age must be a number
// Finished attempting to parse age`,
    },

    {
      type: 'paragraph',
      title: 'The Error Object',
      content:
        'When you create or catch an error, you\'re working with an Error object. It has a message property describing what went wrong, a name property identifying the type of error (like "TypeError" or "Error"), and a stack property containing a trace of where the error occurred — invaluable when debugging. You can create one yourself with new Error("some message") and throw it whenever your code detects a problem it can\'t recover from.',
    },

    {
      type: 'code',
      title: 'Inspecting an Error',
      language: 'javascript',
      code: `try {
  throw new Error("Could not connect to server");
} catch (error) {
  console.log(error.name);
  // "Error"

  console.log(error.message);
  // "Could not connect to server"

  console.log(typeof error.stack);
  // "string" — a trace of the call stack at the point of the throw
}`,
    },

    {
      type: 'paragraph',
      title: 'Creating a Custom Error Subclass',
      content:
        "Sometimes a generic Error isn't descriptive enough — you want to distinguish a validation problem from a network problem from a permissions problem. You can do this by extending the built-in Error class. Call super(message) inside the constructor to set up the message and stack correctly, then set this.name to something meaningful so catch blocks (and log output) can tell your custom errors apart from ordinary ones.",
    },

    {
      type: 'code',
      title: 'Custom Error Class',
      language: 'javascript',
      code: `class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function createUser(user) {
  if (!user.email) {
    throw new ValidationError("Email is required");
  }

  return { ...user, id: Date.now() };
}

try {
  createUser({ name: "Rohit" });
} catch (error) {
  console.log(error.name);
  // "ValidationError"

  console.log(error instanceof ValidationError);
  // true

  console.log(error instanceof Error);
  // true — a ValidationError is still an Error under the hood
}`,
    },

    {
      type: 'paragraph',
      title: 'Catching Specific Error Types',
      content:
        "A single catch block often needs to handle more than one kind of failure differently — maybe a validation error should be shown to the user, while a network error should trigger a retry. Since JavaScript doesn't support multiple typed catch clauses like some other languages, the common pattern is to check the error's type inside a single catch block using instanceof, and branch accordingly.",
    },

    {
      type: 'code',
      title: 'Branching on Error Type',
      language: 'javascript',
      code: `class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}

function handle(error) {
  if (error instanceof ValidationError) {
    console.log("Please fix your input:", error.message);
  } else if (error instanceof NetworkError) {
    console.log("Retrying request due to:", error.message);
  } else {
    console.log("Unexpected error:", error.message);
  }
}

try {
  throw new NetworkError("Request timed out");
} catch (error) {
  handle(error);
}
// Retrying request due to: Request timed out`,
    },

    {
      type: 'table',
      title: 'Common Built-in Error Types',
      headers: ['Error Type', 'Thrown When'],
      rows: [
        [
          'TypeError',
          'A value is not of the expected type (e.g. calling a non-function)',
        ],
        [
          'RangeError',
          'A number is outside an allowed range (e.g. invalid array length)',
        ],
        ['ReferenceError', 'A variable that does not exist is referenced'],
        [
          'SyntaxError',
          'Code is malformed, often from JSON.parse() on invalid JSON',
        ],
        [
          'Error',
          'The generic base type, and the base class for custom errors',
        ],
      ],
    },

    {
      type: 'paragraph',
      title: 'Why finally Always Runs',
      content:
        'The finally block is guaranteed to run after the try/catch, regardless of what happens inside them — even if the try block returns a value, or the catch block throws a new error. This makes finally the right place for cleanup work that must always happen, such as closing a connection, hiding a loading spinner, or releasing a lock, no matter whether the operation succeeded or failed.',
    },

    {
      type: 'code',
      title: 'finally Runs Even After a Return',
      language: 'javascript',
      code: `function getValue() {
  try {
    return "from try";
  } finally {
    console.log("finally still runs before the function actually returns");
  }
}

console.log(getValue());
// "finally still runs before the function actually returns"
// "from try"`,
    },

    {
      type: 'paragraph',
      title: 'Error Handling and Async Code',
      content:
        'try/catch works well for code that runs immediately, but most real-world failures — a fetch request, a database query, a timer — happen asynchronously. A plain try/catch wrapped around asynchronous code will NOT catch errors thrown later, inside a callback, because by the time that callback runs, the try block has already finished executing. This gap is exactly what Promises exist to solve, giving asynchronous operations a proper way to report success or failure that your error-handling code can hook into — which is where the next lesson picks up.',
    },

    {
      type: 'code',
      title: 'try/catch Cannot Catch Async Callback Errors',
      language: 'javascript',
      code: `function riskyAsyncOperation() {
  setTimeout(() => {
    throw new Error("Failed inside the callback");
  }, 100);
}

try {
  riskyAsyncOperation();
} catch (error) {
  // This never runs! The try block finishes before
  // the setTimeout callback executes, so the throw
  // happens completely outside the try/catch's reach.
  console.log("Caught:", error.message);
}

console.log("try/catch block has already finished by the time the error is thrown");`,
    },

    {
      type: 'tip',
      title: 'Keep catch Blocks Specific',
      content:
        "Avoid catching errors just to silently swallow them with an empty catch block — that hides bugs instead of fixing them. Log the error, handle the specific cases you know how to recover from, and consider re-throwing errors you don't know how to handle so they surface higher up in your program where more context is available.",
    },

    {
      type: 'warning',
      title: 'Only try/catch Synchronous Code (For Now)',
      content:
        "A try/catch block only catches errors thrown synchronously within it. Errors thrown inside setTimeout callbacks, event listeners, or (as you'll see next) unhandled Promise rejections will slip right past it. Once you learn Promises and async/await, you'll see how await lets you bring asynchronous errors back into a familiar try/catch shape.",
    },
  ],

  quiz: [
    {
      question:
        'Which block always executes, regardless of whether an error was thrown or caught?',
      options: ['try', 'catch', 'finally', 'throw'],
      answer: 2,
    },
    {
      question:
        'What must you call inside a custom Error subclass constructor to properly set up the message?',
      options: [
        'this.message()',
        'super(message)',
        'Error(message)',
        'new Error(message)',
      ],
      answer: 1,
    },
    {
      question:
        'Which operator lets you check whether a caught error is an instance of a specific custom error class?',
      options: ['typeof', 'instanceof', 'in', 'is'],
      answer: 1,
    },
    {
      question: 'What does the stack property of an Error object contain?',
      options: [
        'A trace of the call stack at the point the error was thrown',
        'The line number where the error was defined',
        'A list of all errors thrown during the program',
        'The name of the function that will catch the error',
      ],
      answer: 0,
    },
    {
      question:
        'Why can a synchronous try/catch not catch an error thrown inside a setTimeout callback?',
      options: [
        'setTimeout callbacks cannot throw errors',
        'The try block has already finished running by the time the callback executes',
        'finally blocks block all asynchronous errors',
        'You must use catch() instead of catch for async code',
      ],
      answer: 1,
    },
  ],

  previous: 'class-features',
  next: 'promises',
};
