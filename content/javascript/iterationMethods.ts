export const iterationMethods = {
  slug: 'iteration-methods',

  title: 'Iterating Over Array Elements',

  description:
    'Learn how to loop through and transform arrays using forEach(), map(), filter(), reduce(), and reduceRight() — including return values, chaining, and common pitfalls.',

  level: 'Intermediate',

  readingTime: '22 min',

  lesson: 'Lesson 18 of 40',

  sections: [
    {
      type: 'paragraph',
      title: 'Introduction',
      content:
        "So far you've learned how to add, remove, and search for elements in an array. The next step is iteration — running some logic against every element in the array. JavaScript gives you dedicated methods for this instead of always reaching for a traditional for loop. Each method in this lesson takes a callback function that runs once per element, but they differ in what they return: forEach() returns nothing, map() returns a new array of transformed values, filter() returns a new array of matching values, and reduce()/reduceRight() combine every element down into a single value. None of these methods mutate the original array — they all read it and, where relevant, build something new.",
    },

    {
      type: 'table',
      title: 'Methods Overview',
      headers: ['Method', 'Purpose', 'Returns', 'Modifies Original Array'],
      rows: [
        ['forEach()', 'Run a function once per element', 'undefined', '❌ No'],
        ['map()', 'Transform each element', 'New array (same length)', '❌ No'],
        ['filter()', 'Keep only matching elements', 'New array (same length or shorter)', '❌ No'],
        [
          'reduce()',
          'Combine all elements into one value (left to right)',
          'A single accumulated value',
          '❌ No',
        ],
        [
          'reduceRight()',
          'Combine all elements into one value (right to left)',
          'A single accumulated value',
          '❌ No',
        ],
      ],
    },

    {
      type: 'paragraph',
      title: 'forEach()',
      content:
        "The forEach() method runs a callback function once for every element in the array, in order. It always returns undefined, so you should never try to assign its result to a variable expecting a new array — that's a very common beginner mistake. forEach() is best used when you want to perform a side effect for each item, like logging to the console, updating the DOM, or pushing values into an external array, rather than producing a new array yourself.",
    },

    {
      type: 'code',
      title: 'forEach() Example',
      language: 'javascript',
      code: `const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
  console.log(\`\${index}: \${fruit}\`);
});
// 0: Apple
// 1: Banana
// 2: Mango

// forEach() always returns undefined — this is a common mistake
const result = fruits.forEach((fruit) => fruit.toUpperCase());
console.log(result);
// undefined (use map() instead if you want a new array back)`,
    },

    {
      type: 'paragraph',
      title: 'map()',
      content:
        "The map() method creates a brand new array by calling the provided callback on every element and collecting the returned values, in the same order and always the same length as the original array. This makes map() the right tool whenever you want to transform data — for example, converting an array of Celsius temperatures to Fahrenheit, or pulling out a single property from an array of objects. Because map() always returns a new array of equal length, it should not be used purely for side effects (that's what forEach() is for), and it should not be used to filter elements out (that's what filter() is for).",
    },

    {
      type: 'code',
      title: 'map() Example',
      language: 'javascript',
      code: `const numbers = [1, 2, 3, 4];

const doubled = numbers.map((n) => n * 2);

console.log(doubled);
// [2, 4, 6, 8]

console.log(numbers);
// [1, 2, 3, 4] — the original array is unchanged

// Extracting a property from an array of objects
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const names = users.map((u) => u.name);
console.log(names);
// ["Alice", "Bob"]`,
    },

    {
      type: 'paragraph',
      title: 'filter()',
      content:
        'The filter() method creates a new array containing only the elements for which the callback returns a truthy value. Unlike map(), the resulting array can be shorter than the original — or even empty if nothing matches — because elements that fail the test are simply left out rather than transformed. filter() and map() are often chained together: filter down to the elements you care about, then map() to transform them.',
    },

    {
      type: 'code',
      title: 'filter() Example',
      language: 'javascript',
      code: `const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter((n) => n % 2 === 0);

console.log(evens);
// [2, 4, 6]

// Chaining filter() and map() together
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
];

const adultNames = users
  .filter((u) => u.age >= 18)
  .map((u) => u.name);

console.log(adultNames);
// ["Alice", "Charlie"]`,
    },

    {
      type: 'paragraph',
      title: 'reduce()',
      content:
        'The reduce() method walks through the array from left to right, calling a callback with an "accumulator" and the current element, and building up a single final value. Its signature is array.reduce((accumulator, currentValue, index, array) => { ... }, initialValue). The initialValue argument is optional but strongly recommended — if you omit it, reduce() uses the first element of the array as the starting accumulator and begins iterating from the second element, which can produce confusing bugs on empty arrays (calling reduce() on an empty array with no initialValue throws a TypeError). reduce() is powerful enough to implement map(), filter(), and even forEach() yourself, which is why it\'s often considered the most fundamental of the array iteration methods.',
    },

    {
      type: 'code',
      title: 'reduce() Example — Summing Numbers',
      language: 'javascript',
      code: `const numbers = [1, 2, 3, 4];

const total = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(total);
// 10

// Without an initialValue, the first element becomes the starting accumulator
const total2 = numbers.reduce((accumulator, current) => accumulator + current);
console.log(total2);
// 10 (same result here, but riskier — throws on an empty array)`,
    },

    {
      type: 'code',
      title: 'reduce() Example — Building an Object',
      language: 'javascript',
      code: `const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const counts = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(counts);
// { apple: 3, banana: 2, orange: 1 }`,
    },

    {
      type: 'paragraph',
      title: 'reduceRight()',
      content:
        'The reduceRight() method works exactly like reduce(), but processes the array from right to left instead of left to right. The final result is often the same for operations that are commutative and associative, like summing numbers, but the direction matters for operations where order affects the outcome — such as building a string, composing functions, or working with nested structures where right-to-left evaluation is meaningful.',
    },

    {
      type: 'code',
      title: 'reduceRight() Example',
      language: 'javascript',
      code: `const parts = ["World", "Hello"];

// reduce() (left to right)
console.log(parts.reduce((acc, part) => acc + " " + part));
// "World Hello"

// reduceRight() (right to left)
console.log(parts.reduceRight((acc, part) => acc + " " + part));
// "Hello World"`,
    },

    {
      type: 'tip',
      title: 'Choosing the Right Iteration Method',
      content:
        "Use forEach() when you just need to perform an action for each element and don't need a return value. Use map() when you need to transform every element into something new, keeping the same array length. Use filter() when you need to keep only some elements based on a condition. Use reduce() (or reduceRight() when direction matters) when you need to collapse the whole array down into a single value — a sum, an object, a string, or even another array.",
    },

    {
      type: 'warning',
      title: 'Important',
      content:
        "None of these methods mutate the original array, but that doesn't mean your callback can't cause side effects — if your callback mutates objects that are referenced inside the array, those changes will still be visible outside the method. Also remember that forEach() cannot be stopped early with break the way a for loop can; if you need to exit iteration early, use a plain for loop, for...of with break, or methods like some()/find() that short-circuit on their own.",
    },
  ],

  interviewQuestions: [
    {
      question: 'What is the key difference between forEach() and map()?',
      answer:
        "forEach() runs a callback for every element purely for its side effects and always returns undefined, so it should never be used when you need a new array back. map() also runs a callback for every element, but it collects each callback's return value into a brand new array of the same length as the original, making it the right choice when you want to transform data rather than just act on it.",
    },
    {
      question: 'Why is it recommended to always pass an initialValue to reduce()?',
      answer:
        "If you omit initialValue, reduce() uses the array's first element as the starting accumulator and begins iterating from the second element. This can cause confusing bugs — most notably, calling reduce() without an initialValue on an empty array throws a TypeError, since there's no element to use as a starting point. Passing an explicit initialValue makes the behavior predictable and safe for empty arrays.",
    },
    {
      question: 'How would you use filter() and map() together, and why chain them in that order?',
      answer:
        'You can chain them as array.filter(condition).map(transform) to first narrow the array down to only the elements you care about, then transform just those elements. Filtering first is generally more efficient because map() then only has to run its transformation on the smaller, already-filtered set rather than on every original element.',
    },
    {
      question: 'What is the difference between reduce() and reduceRight()?',
      answer:
        "Both combine every element of an array into a single accumulated value using a callback, but reduce() processes elements from left to right (start to end), while reduceRight() processes them from right to left (end to start). For operations like summing numbers, the direction doesn't change the result, but for order-sensitive operations — like building a string or composing functions — the direction changes the outcome.",
    },
    {
      question: 'Can you stop forEach() early, and if not, what should you use instead?',
      answer:
        'No — forEach() has no built-in way to break out early; return inside the callback only skips to the next iteration, it does not stop the loop. If you need to exit early once a condition is met, use a traditional for loop or a for...of loop (both support break), or reach for a method designed to short-circuit, such as some(), every(), or find().',
    },
    {
      question:
        "If a callback inside map() or filter() mutates an object from the original array, is that still a problem even though these methods don't mutate the array itself?",
      answer:
        "Yes. map() and filter() don't mutate the array structure (its length or which elements are at which index), but they don't protect you from mutating the contents of the elements themselves. If an array holds objects and your callback changes a property on one of those objects, that change persists on the original object — and on the original array too, since arrays of objects store references, not copies.",
    },
  ],

  quiz: [
    {
      question: 'What does forEach() return?',
      options: ['A new array', 'The last processed element', 'undefined', 'true or false'],
      answer: 2,
    },
    {
      question:
        'Which method is guaranteed to return a new array with the same length as the original?',
      options: ['filter()', 'reduce()', 'map()', 'forEach()'],
      answer: 2,
    },
    {
      question: 'What happens if you call reduce() on an empty array without an initialValue?',
      options: [
        'It returns undefined',
        'It returns 0',
        'It throws a TypeError',
        'It returns an empty array',
      ],
      answer: 2,
    },
    {
      question: 'Which method processes array elements from right to left?',
      options: ['reduce()', 'reduceRight()', 'map()', 'filter()'],
      answer: 1,
    },
    {
      question: 'Which method can shorten the resulting array compared to the original?',
      options: ['map()', 'forEach()', 'filter()', 'reduce()'],
      answer: 2,
    },
  ],

  previous: 'searching-methods',

  next: 'transforming-methods',
};
