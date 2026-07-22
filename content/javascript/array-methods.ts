export const arrayMethods = {
  slug: 'array-methods',

  title: 'JavaScript Array Methods',

  description:
    'Learn what array methods are, why they are useful, and explore the most commonly used methods in JavaScript.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 23 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'What are Array Methods?',
      content:
        'Array methods are built-in JavaScript functions that allow you to manipulate, search, transform, iterate, and sort arrays efficiently. Instead of writing complex loops, you can use array methods to perform common operations with cleaner and more readable code.',
    },

    {
      type: 'code',
      title: 'Example',
      language: 'javascript',
      code: `const fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange");

console.log(fruits);`,
    },

    {
      type: 'paragraph',
      title: 'Why Use Array Methods?',
      content:
        'Array methods reduce the amount of code you need to write, improve readability, make your code easier to maintain, and are highly optimized by JavaScript engines.',
    },

    {
      type: 'list',
      title: 'Benefits',
      items: [
        'Cleaner and shorter code',
        'Easy to read and maintain',
        'Avoid writing unnecessary loops',
        'Perform operations efficiently',
        'Work well with functional programming',
      ],
    },

    {
      type: 'table',
      title: 'Categories of Array Methods',
      headers: ['Category', 'Examples'],
      rows: [
        ['Adding & Removing', 'push(), pop(), shift(), unshift(), splice()'],
        ['Searching', 'includes(), indexOf(), find(), findIndex()'],
        ['Iteration', 'forEach()'],
        ['Transformation', 'map(), filter(), reduce(), flatMap()'],
        ['Sorting', 'sort(), reverse(), toSorted()'],
        ['Extraction', 'slice(), concat()'],
        ['Conversion', 'join(), toString()'],
        ['Modern Methods', 'at(), flat(), with(), toReversed()'],
      ],
    },

    {
      type: 'tip',
      title: 'Tip',
      content:
        'Most modern JavaScript applications heavily use methods like map(), filter(), reduce(), find(), and forEach(). Mastering these methods will make your code much cleaner.',
    },

    {
      type: 'warning',
      title: 'Important',
      content:
        'Some array methods modify the original array (push, pop, splice, sort), while others return a new array (map, filter, slice, concat). Knowing the difference is essential.',
    },

    {
      type: 'paragraph',
      title: 'What You Will Learn Next',
      content:
        'In the following lessons, we will explore every category of array methods in detail with practical examples, interview questions, and coding exercises.',
    },
  ],

  quiz: [
    {
      question: 'Which method adds an element to the end of an array?',
      options: ['push()', 'shift()', 'slice()', 'find()'],
      answer: 0,
    },
    {
      question: 'Which method returns a new array?',
      options: ['pop()', 'splice()', 'map()', 'shift()'],
      answer: 2,
    },
    {
      question: 'Which method checks whether an element exists?',
      options: ['includes()', 'push()', 'join()', 'reverse()'],
      answer: 0,
    },
  ],

  previous: 'strings',

  next: 'adding-removing-methods',
};
