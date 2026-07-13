export const addingRemovingMethods = {
  slug: 'adding-removing-methods',

  title: 'Adding & Removing Array Elements',

  description:
    'Learn how to add and remove elements from arrays using push(), pop(), shift(), unshift(), and splice() — including return values, performance, and common gotchas.',

  level: 'Intermediate',

  readingTime: '18 min',

  lesson: 'Lesson 16 of 40',

  sections: [
    {
      type: 'paragraph',
      title: 'Introduction',
      content:
        'JavaScript arrays are dynamic, which means you can grow or shrink them at any time — you never have to declare a fixed size up front. To do this, JavaScript gives you a handful of built-in methods. Some of these methods are "mutating": they change the original array in place and often return something small, like the new length or the removed item. Others are "non-mutating": they leave the original array untouched and return a brand new array instead. In this lesson we focus on the five classic mutating methods — push(), pop(), shift(), unshift(), and splice() — because understanding how they mutate the array is the key to avoiding subtle bugs later, especially in frameworks like React where mutating state directly can cause the UI not to update.',
    },

    {
      type: 'table',
      title: 'Methods Overview',
      headers: ['Method', 'Purpose', 'Modifies Original Array', 'Returns', 'Typical Speed'],
      rows: [
        ['push()', 'Add element(s) to the end', '✅ Yes', 'New length', 'Fast — O(1)'],
        ['pop()', 'Remove the last element', '✅ Yes', 'The removed element', 'Fast — O(1)'],
        ['unshift()', 'Add element(s) to the beginning', '✅ Yes', 'New length', 'Slower — O(n)'],
        ['shift()', 'Remove the first element', '✅ Yes', 'The removed element', 'Slower — O(n)'],
        [
          'splice()',
          'Add/remove/replace anywhere',
          '✅ Yes',
          'Array of removed elements',
          'Depends on position — O(n)',
        ],
      ],
    },

    {
      type: 'paragraph',
      title: 'push()',
      content:
        'The push() method adds one or more elements to the end of an array and returns the new length of the array (not the array itself). Because it only touches the end of the array, the JavaScript engine doesn\'t need to shift any existing elements around, which is why push() is fast even on large arrays. You can pass multiple arguments to push() in a single call — e.g. fruits.push("Mango", "Kiwi") — and both will be appended in order. This makes push() the go-to method for building up a list incrementally, such as collecting results in a loop.',
    },

    {
      type: 'code',
      title: 'push() Example',
      language: 'javascript',
      code: `const fruits = ["Apple", "Banana"];

const newLength = fruits.push("Mango");

console.log(fruits);
// ["Apple", "Banana", "Mango"]

console.log(newLength);
// 3 (push returns the new length, not the array)

// Pushing multiple items at once
fruits.push("Kiwi", "Grape");
console.log(fruits);
// ["Apple", "Banana", "Mango", "Kiwi", "Grape"]`,
    },

    {
      type: 'paragraph',
      title: 'pop()',
      content:
        'The pop() method removes the last element from an array and returns that removed element, so you can capture and use it right away. If the array is already empty, pop() does not throw an error — it simply returns undefined and leaves the array as an empty array. Because pop() only removes from the end, it is just as fast as push(), which is why the pair push()/pop() is the standard way to implement a "stack" data structure (last in, first out).',
    },

    {
      type: 'code',
      title: 'pop() Example',
      language: 'javascript',
      code: `const fruits = ["Apple", "Banana", "Mango"];

const item = fruits.pop();

console.log(item);
// "Mango" (the removed element)

console.log(fruits);
// ["Apple", "Banana"]

// Calling pop() on an empty array
const empty = [];
console.log(empty.pop());
// undefined — no error is thrown`,
    },

    {
      type: 'paragraph',
      title: 'unshift()',
      content:
        "The unshift() method adds one or more elements to the very beginning of an array and, like push(), returns the new length. The tradeoff is performance: because every existing element has to be shifted one position to the right to make room, unshift() takes longer as the array grows — this is known as O(n) time complexity. For small arrays this difference is unnoticeable, but it's worth knowing if you're repeatedly unshifting into a very large array in a performance-sensitive loop.",
    },

    {
      type: 'code',
      title: 'unshift() Example',
      language: 'javascript',
      code: `const fruits = ["Banana", "Mango"];

const newLength = fruits.unshift("Apple");

console.log(fruits);
// ["Apple", "Banana", "Mango"]

console.log(newLength);
// 3

// Adding multiple items at the start, in the order given
fruits.unshift("Strawberry", "Blueberry");
console.log(fruits);
// ["Strawberry", "Blueberry", "Apple", "Banana", "Mango"]`,
    },

    {
      type: 'paragraph',
      title: 'shift()',
      content:
        'The shift() method removes the first element from an array and returns it, shifting every remaining element one position to the left to close the gap. Just like unshift(), this re-indexing means shift() is an O(n) operation — slower than pop() on large arrays. shift() and push() together are commonly used to implement a "queue" data structure (first in, first out), such as processing items in the order they arrived.',
    },

    {
      type: 'code',
      title: 'shift() Example',
      language: 'javascript',
      code: `const fruits = ["Apple", "Banana", "Mango"];

const removed = fruits.shift();

console.log(removed);
// "Apple" (the removed element)

console.log(fruits);
// ["Banana", "Mango"]

// shift() on an empty array
console.log([].shift());
// undefined — no error is thrown`,
    },

    {
      type: 'paragraph',
      title: 'splice()',
      content:
        'The splice() method is the most flexible of the five: it can remove elements, insert elements, or do both at the same time, at any position in the array. Its signature is array.splice(start, deleteCount, item1, item2, ...). The "start" argument is the index to begin at (negative values count from the end), "deleteCount" is how many elements to remove from that point, and any further arguments are new elements to insert at that same position. splice() always returns an array containing whatever elements were removed — this is different from push()/pop()/shift()/unshift(), which return either a length or a single value.',
    },

    {
      type: 'code',
      title: 'Remove Elements using splice()',
      language: 'javascript',
      code: `const numbers = [10, 20, 30, 40];

const removed = numbers.splice(1, 2);

console.log(numbers);
// [10, 40]

console.log(removed);
// [20, 30] — splice() always returns the removed items as an array`,
    },

    {
      type: 'code',
      title: 'Add Elements using splice()',
      language: 'javascript',
      code: `const numbers = [10, 40];

// deleteCount of 0 means "insert only, don't remove anything"
numbers.splice(1, 0, 20, 30);

console.log(numbers);
// [10, 20, 30, 40]`,
    },

    {
      type: 'code',
      title: 'Replace Elements using splice()',
      language: 'javascript',
      code: `const fruits = ["Apple", "Banana", "Orange"];

// Remove 1 item starting at index 1, and insert "Mango" in its place
fruits.splice(1, 1, "Mango");

console.log(fruits);
// ["Apple", "Mango", "Orange"]`,
    },

    {
      type: 'code',
      title: 'splice() with a negative start index',
      language: 'javascript',
      code: `const letters = ["a", "b", "c", "d", "e"];

// -2 means "start 2 elements from the end"
letters.splice(-2, 1);

console.log(letters);
// ["a", "b", "c", "e"] — removed "d"`,
    },

    {
      type: 'tip',
      title: 'When to Use Which Method',
      content:
        "Use push() and pop() for stack-like behavior (last in, first out) and when you mainly add/remove at the end — they're the fastest of the group. Use shift() and unshift() for queue-like behavior (first in, first out), keeping in mind they are slower on large arrays because every element has to be re-indexed. Use splice() whenever you need to insert, remove, or replace elements at a specific index rather than just at the start or end — it's more powerful, but also easy to misuse if you forget what the second argument (deleteCount) does.",
    },

    {
      type: 'warning',
      title: 'Important',
      content:
        'All five of these methods mutate — that is, change — the original array rather than returning a new one. This matters a lot in situations like React state, where the framework expects you to treat state as immutable and create a new array instead of mutating the existing one. If you want to keep the original array unchanged, avoid these methods and instead use non-mutating alternatives like slice() (not splice!), concat(), the spread operator [...arr], or newer immutable methods such as toSorted(), toSpliced(), and toReversed() introduced in modern JavaScript (ES2023).',
    },
  ],

  interviewQuestions: [
    {
      question:
        'What is the difference between push() and unshift(), both in behavior and performance?',
      answer:
        "push() adds one or more elements to the end of the array and returns the new length; unshift() adds one or more elements to the beginning and also returns the new length. Behaviorally they're mirror images of each other, but performance differs: push() is O(1) because it just appends after the last element, while unshift() is O(n) because every existing element has to be shifted one position to the right to make room at the front.",
    },
    {
      question:
        'What is the return value of pop(), and what happens if you call it on an empty array?',
      answer:
        'pop() returns the element that was removed from the end of the array. If the array is empty, pop() does not throw an error — it simply returns undefined and the array remains an empty array.',
    },
    {
      question:
        'How is shift() different from pop() in terms of which element is removed and how fast each is?',
      answer:
        'pop() removes the last element of the array and runs in O(1) time since no re-indexing is needed. shift() removes the first element and runs in O(n) time, because every remaining element must be shifted one position to the left to fill the gap left at index 0.',
    },
    {
      question:
        'What does splice() return, and how do its start/deleteCount/items arguments work together?',
      answer:
        'splice() returns an array containing the elements that were removed (an empty array if none were removed). Its signature is array.splice(start, deleteCount, item1, item2, ...): "start" is the index to begin at (negative values count from the end), "deleteCount" is how many elements to remove from that index, and any additional arguments are new elements inserted at that same position — so splice() can remove, insert, or replace depending on which of these you use.',
    },
    {
      question:
        'Which array methods mutate the original array, and how would you achieve the same result without mutation?',
      answer:
        'push(), pop(), shift(), unshift(), and splice() all mutate the original array in place. To get an equivalent result without mutating, use non-mutating alternatives instead: slice() to copy out a portion, concat() or the spread operator [...arr] to add elements into a new array, filter() to remove elements into a new array, or the newer ES2023 methods like toSpliced(), toSorted(), and toReversed(), which return a new array and leave the original untouched.',
    },
    {
      question: 'Why is unshift() considered slower than push() on large arrays?',
      answer:
        "Arrays in JavaScript are typically stored so that elements can be appended at the end cheaply. push() takes advantage of this by just adding to the end — O(1). unshift() has to insert at index 0, which means every other element's index shifts up by one, so the engine must move all n existing elements — O(n). The larger the array, the more noticeable this cost becomes.",
    },
  ],

  quiz: [
    {
      question: 'Which method adds an element to the beginning of an array?',
      options: ['push()', 'unshift()', 'splice()', 'shift()'],
      answer: 1,
    },
    {
      question: 'Which method removes the last element?',
      options: ['shift()', 'splice()', 'pop()', 'slice()'],
      answer: 2,
    },
    {
      question: 'Which method can add and remove elements at any index?',
      options: ['splice()', 'push()', 'find()', 'includes()'],
      answer: 0,
    },
    {
      question: 'What does splice() return?',
      options: [
        'The new length of the array',
        'An array of the removed elements',
        'undefined',
        'The original array unchanged',
      ],
      answer: 1,
    },
    {
      question: 'Why is unshift() generally slower than push() on large arrays?',
      options: [
        'unshift() copies the array to a new memory location every time',
        'unshift() has to re-index every existing element',
        'unshift() is not actually slower',
        'unshift() only works on arrays smaller than 100 items',
      ],
      answer: 1,
    },
  ],

  previous: 'array-methods',

  next: 'searching-methods',
};
