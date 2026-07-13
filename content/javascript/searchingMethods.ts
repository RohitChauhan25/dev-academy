export const searchingMethods = {
  slug: 'searching-methods',

  title: 'Searching Array Elements',

  description:
    'Learn how to search arrays using indexOf(), lastIndexOf(), includes(), find(), findIndex(), some(), and every() — including return values, performance, and when to use each one.',

  level: 'Intermediate',

  readingTime: '20 min',

  lesson: 'Lesson 17 of 40',

  sections: [
    {
      type: 'paragraph',
      title: 'Introduction',
      content:
        'Once you know how to add and remove elements from an array, the next common task is finding something inside it. JavaScript gives you two families of searching methods. The first family — indexOf(), lastIndexOf(), and includes() — looks for an exact value match using strict equality (===), which works well for primitives like numbers and strings. The second family — find(), findIndex(), some(), and every() — takes a callback function, which lets you search based on a condition instead of an exact value, making it the right choice for arrays of objects or more complex matching logic. None of these methods mutate the original array; they only read it and return a result.',
    },

    {
      type: 'table',
      title: 'Methods Overview',
      headers: ['Method', 'Purpose', 'Returns', 'Stops at First Match?'],
      rows: [
        ['indexOf()', 'Find the index of an exact value', 'Index number, or -1', '✅ Yes'],
        [
          'lastIndexOf()',
          'Find the index of the last exact match',
          'Index number, or -1',
          '✅ Yes (searches backward)',
        ],
        ['includes()', 'Check if a value exists', 'true or false', '✅ Yes'],
        [
          'find()',
          'Get the first element matching a condition',
          'The matching element, or undefined',
          '✅ Yes',
        ],
        ['findIndex()', 'Get the index of the first match', 'Index number, or -1', '✅ Yes'],
        ['some()', 'Check if at least one element matches', 'true or false', '✅ Yes'],
        [
          'every()',
          'Check if all elements match',
          'true or false',
          '❌ No (checks all, unless one fails)',
        ],
      ],
    },

    {
      type: 'paragraph',
      title: 'indexOf()',
      content:
        'The indexOf() method searches the array for the first occurrence of a specific value and returns its index. If the value isn\'t found, it returns -1 instead of throwing an error, so it\'s common to check the result with an if statement or compare it directly against -1. indexOf() uses strict equality, which means it compares both value and type — so 1 and "1" are treated as different values. You can also pass a second argument, fromIndex, to tell indexOf() where in the array to start searching.',
    },

    {
      type: 'code',
      title: 'indexOf() Example',
      language: 'javascript',
      code: `const fruits = ["Apple", "Banana", "Mango", "Banana"];

console.log(fruits.indexOf("Banana"));
// 1 (the first match)

console.log(fruits.indexOf("Kiwi"));
// -1 (not found)

// Searching starting from a specific index
console.log(fruits.indexOf("Banana", 2));
// 3 (skips the match at index 1, finds the next one)`,
    },

    {
      type: 'paragraph',
      title: 'lastIndexOf()',
      content:
        'The lastIndexOf() method works just like indexOf(), except it searches the array from the end toward the beginning and returns the index of the last matching value. This is useful when duplicates exist and you specifically need the final occurrence rather than the first. Like indexOf(), it returns -1 if no match is found, and it also accepts an optional fromIndex argument to limit how far back it starts searching.',
    },

    {
      type: 'code',
      title: 'lastIndexOf() Example',
      language: 'javascript',
      code: `const fruits = ["Apple", "Banana", "Mango", "Banana"];

console.log(fruits.lastIndexOf("Banana"));
// 3 (the last match, searching from the end)

console.log(fruits.lastIndexOf("Kiwi"));
// -1 (not found)`,
    },

    {
      type: 'paragraph',
      title: 'includes()',
      content:
        "The includes() method is the simplest way to check whether an array contains a particular value — it returns a plain true or false instead of an index, which makes your code more readable when you don't actually need the position. Unlike indexOf(), includes() can correctly detect NaN in an array (indexOf() cannot, because NaN !== NaN under strict equality, but includes() uses a slightly different algorithm called SameValueZero).",
    },

    {
      type: 'code',
      title: 'includes() Example',
      language: 'javascript',
      code: `const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.includes("Banana"));
// true

console.log(fruits.includes("Kiwi"));
// false

// includes() can find NaN, unlike indexOf()
const numbers = [1, 2, NaN];
console.log(numbers.includes(NaN));
// true

console.log(numbers.indexOf(NaN));
// -1 (indexOf cannot find NaN)`,
    },

    {
      type: 'paragraph',
      title: 'find()',
      content:
        "The find() method takes a callback function and returns the first element for which that callback returns a truthy value. This makes it perfect for searching arrays of objects, where you can't just check for an exact value match. As soon as find() locates a matching element, it stops iterating and returns it — if no element matches, it returns undefined rather than -1.",
    },

    {
      type: 'code',
      title: 'find() Example',
      language: 'javascript',
      code: `const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const user = users.find((u) => u.age > 28);

console.log(user);
// { id: 2, name: "Bob", age: 30 } — the first match

const missing = users.find((u) => u.age > 100);
console.log(missing);
// undefined — no match found`,
    },

    {
      type: 'paragraph',
      title: 'findIndex()',
      content:
        'The findIndex() method behaves exactly like find(), except it returns the index of the first matching element instead of the element itself. If no element satisfies the callback, it returns -1, matching the convention set by indexOf(). This is handy when you need the position so you can later use it with something like splice() to remove or replace that element.',
    },

    {
      type: 'code',
      title: 'findIndex() Example',
      language: 'javascript',
      code: `const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const index = users.findIndex((u) => u.name === "Charlie");

console.log(index);
// 2

const notFound = users.findIndex((u) => u.name === "Dave");
console.log(notFound);
// -1`,
    },

    {
      type: 'paragraph',
      title: 'some()',
      content:
        'The some() method checks whether at least one element in the array satisfies the given condition, returning true as soon as it finds one match, or false if it checks every element without finding one. It\'s the array equivalent of asking "does ANY of these qualify?" — useful for validation checks, like confirming a form field contains at least one uppercase letter.',
    },

    {
      type: 'code',
      title: 'some() Example',
      language: 'javascript',
      code: `const numbers = [1, 3, 5, 8, 9];

const hasEven = numbers.some((n) => n % 2 === 0);

console.log(hasEven);
// true — 8 is even

const allNegative = numbers.some((n) => n < 0);
console.log(allNegative);
// false — no negative numbers`,
    },

    {
      type: 'paragraph',
      title: 'every()',
      content:
        'The every() method checks whether ALL elements in the array satisfy the given condition. It returns true only if every single element passes the test, and stops immediately and returns false as soon as it finds one element that fails. An important edge case: calling every() on an empty array always returns true — this is called "vacuous truth", since there are no elements to fail the check.',
    },

    {
      type: 'code',
      title: 'every() Example',
      language: 'javascript',
      code: `const numbers = [2, 4, 6, 8];

const allEven = numbers.every((n) => n % 2 === 0);

console.log(allEven);
// true

const mixed = [2, 4, 5, 8];
console.log(mixed.every((n) => n % 2 === 0));
// false — 5 breaks the pattern

// Edge case: empty arrays always return true
console.log([].every((n) => n > 100));
// true`,
    },

    {
      type: 'tip',
      title: 'Which Method Should You Use?',
      content:
        'Use indexOf(), lastIndexOf(), and includes() when you\'re searching for an exact primitive value like a number or string. Use find() and findIndex() when you\'re searching an array of objects or need a condition rather than an exact match — find() when you want the element itself, findIndex() when you want its position. Use some() when you only need a yes/no answer to "does at least one element match?", and every() when you need to confirm "do all elements match?".',
    },

    {
      type: 'warning',
      title: 'Important',
      content:
        'All of these methods are read-only — none of them modify the original array. Be careful with indexOf() and lastIndexOf() on arrays of objects: they use strict equality, so searching for { id: 1 } will not find an object that looks identical but is a different reference in memory. For object comparisons, use find() or findIndex() with a callback that checks a specific property instead.',
    },
  ],

  interviewQuestions: [
    {
      question: 'What is the difference between indexOf() and includes()?',
      answer:
        "indexOf() returns the index of the first matching element, or -1 if it isn't found, so it's useful when you need the position. includes() returns a boolean (true/false) indicating whether the value exists, which is more readable when you only care about presence. includes() also has an edge-case advantage: it can correctly detect NaN in an array using the SameValueZero algorithm, while indexOf() cannot, because NaN !== NaN under strict equality.",
    },
    {
      question:
        'How does find() differ from filter(), and what does find() return if nothing matches?',
      answer:
        'find() returns only the first element that satisfies the callback and stops iterating as soon as it finds one, whereas filter() checks every element and returns a new array containing all matches. If no element satisfies the condition, find() returns undefined, while filter() would return an empty array.',
    },
    {
      question: 'What is the difference between find() and findIndex()?',
      answer:
        'find() returns the actual matching element (or undefined if none matches), while findIndex() returns the index of that matching element (or -1 if none matches). Use findIndex() when you need the position — for example, to later remove or replace that element with splice().',
    },
    {
      question: 'What does every() return when called on an empty array, and why?',
      answer:
        "every() returns true on an empty array. This is because every() is only false if it finds an element that fails the condition; with no elements to check, there's nothing to fail, so the check is vacuously true. This is a common source of confusion and worth testing explicitly.",
    },
    {
      question:
        'Why might indexOf() fail to find an object in an array even if an "identical" object exists in that array?',
      answer:
        'indexOf() uses strict equality (===) to compare values. For objects, strict equality checks whether two variables reference the exact same object in memory, not whether their properties are equal. So searching for a newly created object like { id: 1 } will return -1 even if the array contains another object with the same shape and values, because they are different references. To search by property value, use find() or findIndex() with a callback instead.',
    },
    {
      question: 'When would you choose some() over every(), or vice versa?',
      answer:
        'Choose some() when you need to confirm that at least one element in the array meets a condition — for example, checking if a cart contains any out-of-stock item. Choose every() when you need to confirm that all elements meet a condition — for example, validating that every field in a form has been filled in. some() short-circuits on the first true result, and every() short-circuits on the first false result, so both can be efficient even on large arrays.',
    },
  ],

  quiz: [
    {
      question: 'What does indexOf() return when the value is not found in the array?',
      options: ['null', 'undefined', '-1', 'false'],
      answer: 2,
    },
    {
      question: 'Which method returns a boolean instead of an index or element?',
      options: ['findIndex()', 'includes()', 'find()', 'lastIndexOf()'],
      answer: 1,
    },
    {
      question:
        'Which method is best suited for searching an array of objects by a specific property?',
      options: ['indexOf()', 'includes()', 'find()', 'lastIndexOf()'],
      answer: 2,
    },
    {
      question: 'What does every() return when called on an empty array?',
      options: ['false', 'true', 'undefined', 'It throws an error'],
      answer: 1,
    },
    {
      question: 'Which method can correctly detect NaN inside an array?',
      options: ['indexOf()', 'includes()', 'lastIndexOf()', 'findIndex()'],
      answer: 1,
    },
  ],

  previous: 'adding-removing-methods',

  next: 'transforming-methods',
};
