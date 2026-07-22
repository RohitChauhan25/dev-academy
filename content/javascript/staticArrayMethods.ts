export const staticArrayMethods = {
  slug: 'static-array-methods',

  title: 'Static Array Methods',

  description:
    'Learn the static methods that live on the Array constructor itself — Array.isArray(), Array.from(), and Array.of() — for checking, creating, and converting arrays.',

  level: 'Intermediate',

  readingTime: '15 min',

  lesson: 'Lesson 28 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'Introduction',
      content:
        "Every method you've seen so far — push(), map(), sort(), and the rest — is an instance method, meaning you call it on an actual array you already have. Static methods are different: they live directly on the Array constructor and don't require an existing array to call them on. Instead, they're typically used to check whether something is an array, or to build a new array from scratch out of some other kind of data. The three you'll use most often are Array.isArray(), Array.from(), and Array.of().",
    },

    {
      type: 'table',
      title: 'Methods Overview',
      headers: ['Method', 'Purpose', 'Returns'],
      rows: [
        ['Array.isArray()', 'Check whether a value is an array', 'A boolean'],
        [
          'Array.from()',
          'Build an array from an iterable or array-like object',
          'A new array',
        ],
        [
          'Array.of()',
          'Build an array from a list of arguments',
          'A new array',
        ],
      ],
    },

    {
      type: 'paragraph',
      title: 'Array.isArray()',
      content:
        'Array.isArray() checks whether the value passed to it is an array, returning true or false. This is more reliable than using typeof, because typeof returns "object" for arrays, objects, and null alike — it can\'t tell them apart. Array.isArray() is especially useful when a function might receive either a single item or an array of items, and you need to branch your logic depending on which one it got.',
    },

    {
      type: 'code',
      title: 'Array.isArray() Example',
      language: 'javascript',
      code: `console.log(Array.isArray([1, 2, 3]));
// true

console.log(Array.isArray("hello"));
// false

console.log(Array.isArray({ length: 3 }));
// false

console.log(typeof [1, 2, 3]);
// "object" — not helpful for distinguishing arrays from other objects

function printAll(input) {
  const list = Array.isArray(input) ? input : [input];
  list.forEach((item) => console.log(item));
}

printAll("single value"); // prints "single value"
printAll(["a", "b", "c"]); // prints "a", "b", "c"`,
    },

    {
      type: 'paragraph',
      title: 'Array.from()',
      content:
        "Array.from() creates a new array from an iterable (like a string, Set, or Map) or an array-like object (something with a length property and indexed elements, like arguments or a NodeList). It also accepts an optional second argument — a map function — that gets applied to every element as the array is built, similar to chaining .map() immediately afterward but in a single step. This makes Array.from() a common tool for converting things that look like arrays, but aren't quite arrays, into real ones you can use array methods on.",
    },

    {
      type: 'code',
      title: 'Array.from() Example',
      language: 'javascript',
      code: `// From a string
console.log(Array.from("hello"));
// ["h", "e", "l", "l", "o"]

// From a Set (removes duplicates, then converts to array)
const uniqueValues = new Set([1, 2, 2, 3, 3, 3]);
console.log(Array.from(uniqueValues));
// [1, 2, 3]

// From an array-like object
function sumArguments() {
  const argsArray = Array.from(arguments);
  return argsArray.reduce((total, n) => total + n, 0);
}
console.log(sumArguments(1, 2, 3));
// 6

// Using the optional map function
console.log(Array.from([1, 2, 3], (n) => n * 2));
// [2, 4, 6]

// Generating a sequence of numbers
const range = Array.from({ length: 5 }, (_, index) => index);
console.log(range);
// [0, 1, 2, 3, 4]`,
    },

    {
      type: 'paragraph',
      title: 'Array.of()',
      content:
        'Array.of() creates a new array from whatever arguments you pass to it, treating each argument as an element of the resulting array. This sounds like exactly what the Array() constructor already does, and usually it is — except for one well-known edge case: calling Array(7) creates an empty array with a length of 7, while Array.of(7) creates an array containing the single element 7. Array.of() exists specifically to avoid that inconsistency.',
    },

    {
      type: 'code',
      title: 'Array.of() Example',
      language: 'javascript',
      code: `console.log(Array.of(7));
// [7]

console.log(Array(7));
// [ <7 empty items> ] — an empty array with length 7, NOT [7]

console.log(Array.of(1, 2, 3));
// [1, 2, 3]

console.log(Array(1, 2, 3));
// [1, 2, 3] — Array() behaves the same as Array.of() here,
// the inconsistency only shows up with a single numeric argument`,
    },

    {
      type: 'tip',
      title: 'Static vs. Instance Methods',
      content:
        "Remember the distinction: static methods like Array.isArray(), Array.from(), and Array.of() are called on the Array constructor itself, not on an array instance — you'll never write myArray.isArray(). Instance methods like map(), filter(), and sort() are called on an actual array value. If you find yourself trying to call Array.from() on a variable holding an array, you likely want to use the array directly instead.",
    },

    {
      type: 'warning',
      title: 'Important',
      content:
        "Array.from() only applies its map function while building the array — you can't retroactively add one after the array already exists without a separate .map() call. Also remember that Array-like objects need a length property; passing something without one, such as a plain object with arbitrary keys, will produce an empty array rather than an error, which can be a silent source of bugs.",
    },
  ],

  quiz: [
    {
      question: 'Which method reliably checks whether a value is an array?',
      options: [
        'typeof value',
        'value instanceof Object',
        'Array.isArray(value)',
        'value.length !== undefined',
      ],
      answer: 2,
    },
    {
      question: 'What does Array.from("hi") return?',
      options: ['"hi"', '["hi"]', '["h", "i"]', 'undefined'],
      answer: 2,
    },
    {
      question: 'What is the result of Array(7)?',
      options: [
        'An array containing the number 7',
        'An empty array with length 7',
        'An error is thrown',
        'An array of 7 zeroes',
      ],
      answer: 1,
    },
    {
      question: 'What is the result of Array.of(7)?',
      options: [
        'An empty array with length 7',
        'An array containing the number 7',
        'An error is thrown',
        'undefined',
      ],
      answer: 1,
    },
    {
      question:
        'What is the purpose of the second argument in Array.from(arrayLike, mapFn)?',
      options: [
        'It sets the length of the resulting array',
        'It filters out falsy values',
        'It maps each element as the array is built',
        'It sorts the resulting array',
      ],
      answer: 2,
    },
  ],

  previous: 'transformation-methods',
  next: 'array-destructuring',
};
