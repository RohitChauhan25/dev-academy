export const fetchApi = {
  slug: 'fetch-api',

  title: 'The Fetch API',

  description:
    'Learn how to make HTTP requests with fetch(), handle the Response object correctly (including the gotcha that fetch only rejects on network failure), send data with POST requests, and cancel requests with AbortController.',

  level: 'Intermediate',

  readingTime: '18 min',

  lesson: 'Lesson 39 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'What fetch() Does',
      content:
        "fetch() is the built-in way to make HTTP requests from JavaScript. You call it with a URL, and it returns a Promise — the same kind of Promise you already know how to work with from the Promises and async/await lessons. That Promise resolves to a Response object representing the HTTP response: its status code, headers, and body. Getting the body's actual content, like JSON or text, is a separate, additional step, which trips a lot of people up the first time they use fetch().",
    },

    {
      type: 'code',
      title: 'A Basic fetch() Call',
      language: 'javascript',
      code: `fetch("https://api.example.com/users/1")
  .then((response) => {
    console.log(response.status); // e.g. 200
    console.log(response.ok); // true, since 200 is in the 200-299 range
    return response.json(); // parses the body as JSON — this ALSO returns a Promise
  })
  .then((user) => {
    console.log(user); // { id: 1, name: "Rohit" }
  });`,
    },

    {
      type: 'warning',
      title: 'The Biggest Gotcha: fetch() Only Rejects on Network Failure',
      content:
        "fetch()'s returned promise only rejects if the request never completed — a network failure, a DNS problem, a CORS block, and similar. It does NOT reject just because the server responded with an error status like 404 or 500. A 404 Not Found or a 500 Internal Server Error is still a completed HTTP exchange as far as fetch() is concerned, so the promise fulfills normally with a Response object whose .ok is false and whose .status reflects the error. If you don't check this yourself, your .then() or await will happily treat a failed request as a success.",
    },

    {
      type: 'code',
      title: 'Checking response.ok Yourself',
      language: 'javascript',
      code: `fetch("https://api.example.com/users/9999") // suppose this user doesn't exist
  .then((response) => {
    console.log(response.status); // 404
    console.log(response.ok); // false

    if (!response.ok) {
      throw new Error(\`Request failed with status \${response.status}\`);
    }

    return response.json();
  })
  .then((user) => console.log(user))
  .catch((error) => console.log("Caught:", error.message));
// Caught: Request failed with status 404
// Note: this only reaches .catch() because we manually threw —
// fetch() itself never rejected the promise for this 404.`,
    },

    {
      type: 'paragraph',
      title: 'Parsing the Response Body',
      content:
        "The Response object gives you several methods to read its body, and each one returns yet another Promise, because reading the body is itself an asynchronous streaming operation. response.json() parses the body as JSON and resolves with the resulting value. response.text() resolves with the raw body as a plain string, useful for HTML, plain text, or anything that isn't JSON. You can only read a response's body once — if you need to inspect it more than once, clone it first with response.clone().",
    },

    {
      type: 'code',
      title: 'response.json() vs. response.text()',
      language: 'javascript',
      code: `async function getUserAsJson() {
  const response = await fetch("https://api.example.com/users/1");
  const user = await response.json();
  return user;
}

async function getRawPage() {
  const response = await fetch("https://example.com");
  const html = await response.text();
  return html; // the raw HTML string
}`,
    },

    {
      type: 'paragraph',
      title: 'Sending a POST Request',
      content:
        "By default, fetch() sends a GET request. To send other HTTP methods, or to include a request body, pass a second argument: an options object. The method property sets the HTTP verb, headers sets any request headers (like telling the server you're sending JSON), and body carries the actual payload. Since body must be a string (or a few other specific types), you typically serialize a JavaScript object into JSON yourself with JSON.stringify() before sending it.",
    },

    {
      type: 'code',
      title: 'POST with a JSON Body',
      language: 'javascript',
      code: `async function createUser(newUser) {
  const response = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    throw new Error(\`Failed to create user: \${response.status}\`);
  }

  return response.json();
}

createUser({ name: "Rohit", role: "admin" })
  .then((created) => console.log("Created:", created))
  .catch((error) => console.log("Error:", error.message));`,
    },

    {
      type: 'paragraph',
      title: 'Using fetch() with async/await and try/catch',
      content:
        'Since fetch() returns a Promise, everything from the async/await lesson applies directly: await the call, and wrap it in a try/catch to handle both genuine network failures (caught automatically, since those are real rejections) and HTTP error statuses (which you still need to check and throw yourself, per the gotcha above). This combination — await plus a manual response.ok check plus try/catch — is the standard, production-ready shape for a fetch() call.',
    },

    {
      type: 'code',
      title: 'The Standard fetch() Pattern',
      language: 'javascript',
      code: `async function loadUser(id) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${id}\`);

    if (!response.ok) {
      throw new Error(\`Server responded with \${response.status}\`);
    }

    const user = await response.json();
    console.log("Loaded user:", user.name);
    return user;
  } catch (error) {
    // Catches BOTH real network failures (fetch's own rejection)
    // AND the error we threw ourselves for a bad HTTP status.
    console.log("Failed to load user:", error.message);
    return null;
  }
}

loadUser(1);`,
    },

    {
      type: 'paragraph',
      title: 'Cancelling a Request with AbortController',
      content:
        "Sometimes you need to cancel an in-flight fetch() — a user navigates away, types a new search query before the last one finished, or a request is simply taking too long. AbortController gives you a way to do this. You create a controller, pass its .signal to fetch()'s options object, and call controller.abort() whenever you want to cancel. The pending fetch() promise then rejects with an AbortError, which you can detect and handle separately from a genuine network failure.",
    },

    {
      type: 'code',
      title: 'Aborting a fetch() Request',
      language: 'javascript',
      code: `async function searchWithTimeout(query, timeoutMs) {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(\`https://api.example.com/search?q=\${query}\`, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId); // request finished in time, no need to abort anymore

    if (!response.ok) {
      throw new Error(\`Search failed: \${response.status}\`);
    }

    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request was aborted (timed out)");
    } else {
      console.log("Search failed:", error.message);
    }
    return null;
  }
}

searchWithTimeout("javascript", 3000);`,
    },

    {
      type: 'table',
      title: 'Response Object Cheat Sheet',
      headers: ['Property / Method', 'Purpose'],
      rows: [
        [
          'response.status',
          'The numeric HTTP status code (200, 404, 500, etc.)',
        ],
        [
          'response.ok',
          'true if status is in the 200-299 range, false otherwise',
        ],
        [
          'response.json()',
          'Returns a Promise that resolves with the body parsed as JSON',
        ],
        [
          'response.text()',
          'Returns a Promise that resolves with the body as a raw string',
        ],
        ['response.headers', 'A Headers object for reading response headers'],
      ],
    },

    {
      type: 'tip',
      title: 'Always Check response.ok Before Parsing',
      content:
        'Make it a habit to check response.ok (or response.status) immediately after every fetch() call, before trying to parse the body. Treating a non-ok response as success, and only discovering the problem when .json() fails to parse an HTML error page, is one of the most common fetch() mistakes.',
    },

    {
      type: 'note',
      title: 'Course Complete',
      content:
        "That's the end of the JavaScript fundamentals section of this course — 47 lessons covering everything from the basics of variables and functions through closures, prototypes, the event loop, memory management, and now the Fetch API. Everything you've learned here — Promises, async/await, and now fetch() — is the foundation you'll use constantly when building real applications that talk to real APIs. Congratulations on making it through the whole curriculum.",
    },
  ],

  quiz: [
    {
      question: 'What does fetch() return?',
      options: [
        'The parsed JSON body directly',
        'A Promise that resolves to a Response object',
        'A plain object with status and body properties',
        'An XMLHttpRequest instance',
      ],
      answer: 1,
    },
    {
      question:
        "Does fetch()'s promise reject when the server responds with a 500 status?",
      options: [
        'Yes, always',
        'No — it only rejects on network failure; you must check response.ok yourself for HTTP error statuses',
        'Only if the body cannot be parsed as JSON',
        'Only in Node.js, not in browsers',
      ],
      answer: 1,
    },
    {
      question:
        'How do you send a JSON payload in a POST request with fetch()?',
      options: [
        'Pass the object directly as the second argument',
        'Set method: "POST" and pass body: JSON.stringify(data) with a Content-Type header',
        'Call fetch.post(url, data)',
        'JSON payloads are not supported by fetch()',
      ],
      answer: 1,
    },
    {
      question: 'What does response.json() return?',
      options: [
        'The parsed JSON value, synchronously',
        'A Promise that resolves with the parsed JSON value',
        'A string containing raw JSON text',
        'undefined if the body is not valid JSON',
      ],
      answer: 1,
    },
    {
      question: 'How do you cancel a pending fetch() request?',
      options: [
        'Call response.cancel()',
        'Set a timeout property in the fetch() options',
        "Pass an AbortController's signal to fetch() and call controller.abort()",
        'fetch() requests cannot be cancelled once started',
      ],
      answer: 2,
    },
  ],

  previous: 'memory-management',
};
