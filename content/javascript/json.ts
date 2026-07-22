export const json = {
  slug: 'json',

  title: 'Working with JSON',

  description:
    'Learn what JSON is and why it exists, then master JSON.stringify() and JSON.parse() for converting between JavaScript values and JSON text, along with the gotchas that trip people up.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 21 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'What is JSON?',
      content:
        "JSON (JavaScript Object Notation) is a lightweight, text-based data interchange format. It was born out of JavaScript's object literal syntax, which is why it looks so familiar, but JSON itself is language-independent — nearly every programming language has a library for reading and writing it. It's the format you'll see constantly when working with APIs: a server sends back JSON text, and your JavaScript code turns that text into a usable object.",
    },

    {
      type: 'paragraph',
      title: 'JSON is Not JavaScript',
      content:
        "It's easy to assume JSON is just a JavaScript object literal, but JSON is actually a stricter subset of that syntax. Object keys must be wrapped in double quotes (not single quotes, and never left bare). Values can only be strings, numbers, booleans, null, arrays, or other JSON objects — functions, undefined, and comments are simply not allowed. Trailing commas, which JavaScript tolerates in some places, are also invalid in JSON. Treat JSON as its own format with its own rules, not as interchangeable with JS object syntax.",
    },

    {
      type: 'code',
      title: 'Valid vs. Invalid JSON',
      language: 'javascript',
      code: `// Valid JSON text
const validJson = \`{
  "name": "Rohit",
  "age": 28,
  "isAdmin": false,
  "skills": ["JavaScript", "React"],
  "address": null
}\`;

// Invalid JSON — single-quoted keys, a function, and a comment
const invalidJson = \`{
  'name': 'Rohit', // not allowed
  greet: function() {},
  age: undefined
}\`;

console.log(JSON.parse(validJson));
// { name: "Rohit", age: 28, isAdmin: false, skills: [...], address: null }

// JSON.parse(invalidJson) would throw a SyntaxError`,
    },

    {
      type: 'paragraph',
      title: 'JSON.stringify()',
      content:
        'JSON.stringify() converts a JavaScript value into a JSON-formatted string. This is what you use before sending data to a server, saving it to localStorage, or logging a readable snapshot of an object. It accepts up to three arguments: the value to convert, an optional replacer, and an optional space value for indentation.',
    },

    {
      type: 'code',
      title: 'JSON.stringify() Basics',
      language: 'javascript',
      code: `const user = { name: 'Aman', age: 25, role: 'developer' };

console.log(JSON.stringify(user));
// '{"name":"Aman","age":25,"role":"developer"}'

// Third argument: indentation (number of spaces or a string like "\\t")
console.log(JSON.stringify(user, null, 2));
// {
//   "name": "Aman",
//   "age": 25,
//   "role": "developer"
// }`,
    },

    {
      type: 'paragraph',
      title: 'The Replacer Argument',
      content:
        'The second argument to JSON.stringify() is a "replacer," which lets you control what gets included in the output. Pass an array of key names to include only those properties, or pass a function that receives each key/value pair and returns the value to use (or undefined to omit that key entirely).',
    },

    {
      type: 'code',
      title: 'Replacer Examples',
      language: 'javascript',
      code: `const user = { name: 'Aman', age: 25, password: 'secret123' };

// Array replacer — only include these keys
console.log(JSON.stringify(user, ['name', 'age']));
// '{"name":"Aman","age":25}'

// Function replacer — omit the password field
const safeJson = JSON.stringify(user, (key, value) => {
  if (key === 'password') return undefined;
  return value;
});
console.log(safeJson);
// '{"name":"Aman","age":25}'`,
    },

    {
      type: 'paragraph',
      title: 'JSON.parse()',
      content:
        'JSON.parse() does the reverse of stringify — it takes a JSON-formatted string and converts it into a real JavaScript value (an object, array, or primitive). This is what you use after receiving a JSON response from a server (via response.json() in the Fetch API) or reading a JSON string back out of storage.',
    },

    {
      type: 'code',
      title: 'JSON.parse() with a Reviver',
      language: 'javascript',
      code: `const jsonText = '{"name":"Aman","createdAt":"2024-01-15T10:00:00.000Z"}';

const parsed = JSON.parse(jsonText);
console.log(typeof parsed.createdAt);
// "string" — dates don't survive the round trip automatically

// A reviver function lets you transform values as they're parsed
const revived = JSON.parse(jsonText, (key, value) => {
  if (key === 'createdAt') return new Date(value);
  return value;
});
console.log(revived.createdAt instanceof Date);
// true`,
    },

    {
      type: 'list',
      title: 'Common Gotchas',
      items: [
        'Dates are converted to ISO string form during stringify, and stay strings after parse — you must revive them manually if you need real Date objects back.',
        'Properties with a value of undefined are dropped entirely by JSON.stringify(); they never appear in the output at all.',
        'Functions are also dropped silently — JSON has no way to represent executable code.',
        'Circular references (an object that refers back to itself) cause JSON.stringify() to throw a TypeError, since it cannot represent an infinite structure.',
        'NaN and Infinity are converted to null, since JSON has no concept of either.',
      ],
    },

    {
      type: 'code',
      title: 'Gotchas in Action',
      language: 'javascript',
      code: `console.log(JSON.stringify({ a: undefined, b: function () {}, c: 1 }));
// '{"c":1}' — undefined and functions are dropped

console.log(JSON.stringify({ value: NaN, other: Infinity }));
// '{"value":null,"other":null}'

const obj = { name: 'loop' };
obj.self = obj; // circular reference

try {
  JSON.stringify(obj);
} catch (error) {
  console.log(error instanceof TypeError);
  // true — "Converting circular structure to JSON"
}`,
    },

    {
      type: 'table',
      title: 'JSON.stringify() vs. JSON.parse()',
      headers: ['Method', 'Direction', 'Typical Use'],
      rows: [
        [
          'JSON.stringify()',
          'JS value → JSON string',
          'Sending data to a server, saving to storage',
        ],
        [
          'JSON.parse()',
          'JSON string → JS value',
          'Reading a server response, loading saved data',
        ],
      ],
    },

    {
      type: 'tip',
      title: 'Pretty-Printing for Debugging',
      content:
        "Passing 2 (or 4) as the third argument to JSON.stringify() is a quick way to log a readable, indented snapshot of a complex object — much easier to scan than console.log()'s default single-line output for deeply nested data.",
    },

    {
      type: 'warning',
      title: 'Watch Out for Invalid JSON at Parse Time',
      content:
        "JSON.parse() throws a SyntaxError on malformed input, including trailing commas, single-quoted strings, or unquoted keys. If you're parsing data from an untrusted or unpredictable source, wrap the call in a try/catch so a bad response doesn't crash your app.",
    },
  ],

  quiz: [
    {
      question: 'Which of the following is valid JSON?',
      options: [
        "{ name: 'Rohit' }",
        '{"name": "Rohit"}',
        '{"name": "Rohit",}',
        "{'name': 'Rohit'}",
      ],
      answer: 1,
    },
    {
      question: 'What does JSON.stringify({ a: undefined, b: 1 }) return?',
      options: [
        '\'{"a":null,"b":1}\'',
        '\'{"a":undefined,"b":1}\'',
        '\'{"b":1}\'',
        'An error is thrown',
      ],
      answer: 2,
    },
    {
      question:
        'What is the purpose of the third argument to JSON.stringify()?',
      options: [
        'It filters which keys are included',
        'It controls indentation for pretty-printing',
        'It converts dates automatically',
        'It prevents circular reference errors',
      ],
      answer: 1,
    },
    {
      question: 'What does the reviver function passed to JSON.parse() do?',
      options: [
        'It formats the resulting string with indentation',
        'It transforms each key/value pair as the value is parsed',
        'It validates the JSON before parsing',
        'It converts the result back into a string',
      ],
      answer: 1,
    },
    {
      question:
        'What happens when JSON.stringify() encounters a circular reference?',
      options: [
        'It silently omits the circular property',
        'It returns the string "null"',
        'It throws a TypeError',
        'It replaces the reference with an empty object',
      ],
      answer: 2,
    },
  ],

  previous: 'map-and-set',
  next: 'regular-expressions',
};
