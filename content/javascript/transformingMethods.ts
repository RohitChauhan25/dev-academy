export const transformingMethods = {
  slug: 'transforming-methods',

  title: 'Transforming Arrays',

  description:
    'Learn how to reshape arrays using sort(), reverse(), flat(), flatMap(), and join() — including mutation behavior, comparator functions, and common pitfalls.',

  level: 'Intermediate',

  readingTime: '20 min',

  lesson: 'Lesson 19 of 40',

  sections: [
    {
      type: 'paragraph',
      title: 'Introduction',
      content:
        "Beyond adding, removing, searching, and iterating, JavaScript also gives you methods that reshape an array's overall structure or presentation — reordering it, flattening nested arrays, or turning it into a string. Two of these methods, sort() and reverse(), mutate the original array in place, which surprises a lot of developers coming from map() and filter(). The others, flat(), flatMap(), and join(), are non-mutating and return something new. Knowing which category each method falls into is essential for avoiding accidental bugs in your data.",
    },

    {
      type: 'table',
      title: 'Methods Overview',
      headers: ['Method', 'Purpose', 'Returns', 'Modifies Original Array'],
      rows: [
        ['sort()', 'Reorder elements', 'The same array, sorted', '✅ Yes'],
        ['reverse()', 'Reverse the order of elements', 'The same array, reversed', '✅ Yes'],
        ['flat()', 'Flatten nested arrays', 'New, flattened array', '❌ No'],
        ['flatMap()', 'Map then flatten one level', 'New array', '❌ No'],
        ['join()', 'Combine elements into a string', 'A string', '❌ No'],
      ],
    },

    {
      type: 'paragraph',
      title: 'sort()',
      content:
        'The sort() method reorders the elements of an array in place and also returns a reference to that same array. By default, sort() converts elements to strings and compares their UTF-16 code units — this means numbers are sorted as if they were text, so [10, 2, 30].sort() surprisingly produces [10, 2, 30] sorted as strings, giving [10, 2, 30] → ["10", "2", "30"] → [10, 2, 30] is wrong; the correct output is [10, 2, 30] sorted alphabetically as strings, resulting in [10, 2, 30]. To sort correctly, always pass a comparator function: (a, b) => a - b for ascending numbers, or (a, b) => b - a for descending. The comparator should return a negative number if a should come first, a positive number if b should come first, and 0 if their order doesn\'t matter.',
    },

    {
      type: 'code',
      title: 'sort() Example — The Default Trap',
      language: 'javascript',
      code: `const numbers = [40, 1, 5, 200];

console.log(numbers.sort());
// [1, 200, 40, 5] — sorted as strings, NOT numerically!

console.log(numbers);
// [1, 200, 40, 5] — the original array was mutated too`,
    },

    {
      type: 'code',
      title: 'sort() Example — Using a Comparator',
      language: 'javascript',
      code: `const numbers = [40, 1, 5, 200];

// Ascending numeric order
numbers.sort((a, b) => a - b);
console.log(numbers);
// [1, 5, 40, 200]

// Descending numeric order
numbers.sort((a, b) => b - a);
console.log(numbers);
// [200, 40, 5, 1]

// Sorting objects by a property
const users = [
  { name: "Charlie", age: 35 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

users.sort((a, b) => a.age - b.age);
console.log(users.map((u) => u.name));
// ["Alice", "Bob", "Charlie"]`,
    },

    {
      type: 'paragraph',
      title: 'reverse()',
      content:
        'The reverse() method reverses the order of the elements in an array in place, meaning the last element becomes the first and vice versa, and it returns a reference to the same, now-reversed array. Because it mutates directly, if you need to keep the original order intact elsewhere, copy the array first — for example with [...array].reverse() or array.slice().reverse() — rather than calling reverse() on the original.',
    },

    {
      type: 'code',
      title: 'reverse() Example',
      language: 'javascript',
      code: `const numbers = [1, 2, 3, 4, 5];

numbers.reverse();

console.log(numbers);
// [5, 4, 3, 2, 1] — the original array itself was reversed

// Reversing without mutating the original
const original = [1, 2, 3];
const reversedCopy = [...original].reverse();

console.log(reversedCopy);
// [3, 2, 1]

console.log(original);
// [1, 2, 3] — untouched`,
    },

    {
      type: 'paragraph',
      title: 'flat()',
      content:
        "The flat() method creates a new array with all sub-array elements concatenated into it, up to a specified depth. By default, flat() only flattens one level deep; passing a number as an argument flattens that many levels, and passing Infinity flattens arrays of any depth, no matter how deeply nested. flat() does not mutate the original array — it returns a brand new, flattened one. It's especially useful for cleaning up data that comes back nested from an API or from grouping operations.",
    },

    {
      type: 'code',
      title: 'flat() Example',
      language: 'javascript',
      code: `const nested = [1, [2, 3], [4, [5, 6]]];

console.log(nested.flat());
// [1, 2, 3, 4, [5, 6]] — only one level deep by default

console.log(nested.flat(2));
// [1, 2, 3, 4, 5, 6] — two levels deep

const deeplyNested = [1, [2, [3, [4, [5]]]]];
console.log(deeplyNested.flat(Infinity));
// [1, 2, 3, 4, 5] — fully flattened, regardless of depth`,
    },

    {
      type: 'paragraph',
      title: 'flatMap()',
      content:
        "The flatMap() method first runs a map() callback on every element, then flattens the result by exactly one level — combining two common operations into a single, slightly more efficient method call. It's especially handy when your mapping callback itself returns an array for some or all elements, since a plain map() in that situation would leave you with an array of arrays that you'd then need to flatten yourself.",
    },

    {
      type: 'code',
      title: 'flatMap() Example',
      language: 'javascript',
      code: `const sentences = ["Hello world", "How are you"];

// Splitting each sentence into words, then flattening the result
const words = sentences.flatMap((sentence) => sentence.split(" "));

console.log(words);
// ["Hello", "world", "How", "are", "you"]

// Compare with plain map(), which leaves nested arrays
const withMap = sentences.map((sentence) => sentence.split(" "));
console.log(withMap);
// [["Hello", "world"], ["How", "are", "you"]]`,
    },

    {
      type: 'paragraph',
      title: 'join()',
      content:
        "The join() method combines every element of an array into a single string, separated by whatever separator string you provide as an argument (a comma by default if you omit it). Unlike the other methods on this page, join() doesn't return an array at all — it returns a plain string. It's the natural counterpart to String.prototype.split(), which turns a string into an array; join() takes an array back to a string.",
    },

    {
      type: 'code',
      title: 'join() Example',
      language: 'javascript',
      code: `const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.join());
// "Apple,Banana,Mango" (default separator is a comma)

console.log(fruits.join(" - "));
// "Apple - Banana - Mango"

console.log(fruits.join(""));
// "AppleBananaMango" (no separator at all)`,
    },

    {
      type: 'tip',
      title: 'Watch Out for Mutation',
      content:
        "sort() and reverse() are the two methods in this lesson that change the original array — everything else (flat(), flatMap(), join()) leaves it untouched and returns something new. If you're working with state you shouldn't mutate directly (like React state), always make a copy first with the spread operator, e.g. const sorted = [...original].sort(...), rather than calling sort() or reverse() on the state array itself.",
    },

    {
      type: 'warning',
      title: 'Important',
      content:
        'Never call sort() without a comparator function when working with numbers — the default string-based comparison will silently produce wrong results without throwing any error, which makes this bug especially easy to miss in testing. Always use (a, b) => a - b (or the reverse) for numeric sorts, and a comparator based on the relevant property when sorting arrays of objects.',
    },
  ],

  interviewQuestions: [
    {
      question: 'Why does numbers.sort() sometimes produce unexpected results with numeric arrays?',
      answer:
        'By default, sort() converts every element to a string and compares them based on their UTF-16 code unit values, not their numeric value. This means numbers are sorted lexicographically (as text) rather than numerically, so an array like [40, 1, 5, 200] can come out in an order that looks wrong at first glance. To sort numbers correctly, you must pass a comparator function such as (a, b) => a - b for ascending order.',
    },
    {
      question:
        'Do sort() and reverse() mutate the original array? How would you avoid that if needed?',
      answer:
        'Yes, both sort() and reverse() mutate the array in place and also return a reference to that same (now-modified) array. To avoid mutating the original — for example when working with immutable state — make a shallow copy first, such as with the spread operator ([...array].sort(...)) or array.slice(), and call the method on the copy instead.',
    },
    {
      question: 'What is the difference between flat() and flatMap()?',
      answer:
        "flat() simply flattens an existing array by a given depth (one level by default, or more if you pass a number, or fully with Infinity) — it doesn't transform the elements themselves. flatMap() first maps each element through a callback function and then flattens the result by exactly one level, combining both operations into a single, slightly more efficient call. Use flatMap() when your mapping callback returns arrays that need to be flattened afterward.",
    },
    {
      question: 'How would you flatten a deeply, arbitrarily nested array in one call?',
      answer:
        'Call flat(Infinity) — passing Infinity as the depth argument tells flat() to keep flattening no matter how many levels of nesting exist, rather than being limited to a specific number of levels.',
    },
    {
      question: 'What does join() return, and how is it related to split()?',
      answer:
        "join() returns a single string made by concatenating every element of the array together, separated by whatever separator you provide (a comma by default). It's effectively the reverse operation of String.prototype.split(), which takes a string and breaks it into an array — join() takes an array and combines it back into a string.",
    },
    {
      question:
        'If you need to sort an array of objects by a numeric property in descending order, how would you write the comparator?',
      answer:
        "You'd pass a comparator like (a, b) => b.property - a.property, where \"property\" is the numeric field you're sorting by. Subtracting a's value from b's value (rather than the other way around) produces descending order, since it returns a positive number whenever a's value is smaller than b's, telling sort() to place b first.",
    },
  ],

  quiz: [
    {
      question: 'What is wrong with calling [40, 1, 5, 200].sort() without a comparator?',
      options: [
        'It throws an error',
        'It sorts the numbers as strings, not numerically',
        'It returns undefined',
        'Nothing is wrong — it works correctly',
      ],
      answer: 1,
    },
    {
      question: 'Which of these methods does NOT mutate the original array?',
      options: ['sort()', 'reverse()', 'flat()', 'Both sort() and reverse()'],
      answer: 2,
    },
    {
      question: 'What argument would you pass to flat() to flatten an array of any nesting depth?',
      options: ['0', '1', 'true', 'Infinity'],
      answer: 3,
    },
    {
      question: 'What does flatMap() do differently from map()?',
      options: [
        'It sorts the results afterward',
        'It maps and then flattens the result by one level',
        'It removes duplicate values',
        'It mutates the original array',
      ],
      answer: 1,
    },
    {
      question: 'What does join() return by default if no separator is provided?',
      options: [
        'Elements separated by a space',
        'Elements separated by a comma',
        'Elements with no separator',
        'An array, not a string',
      ],
      answer: 1,
    },
  ],

  previous: 'iteration-methods',

  next: 'static-array-methods',
};
