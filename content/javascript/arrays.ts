export const arrays = {
  slug: 'arrays',

  title: 'JavaScript Arrays',

  description:
    'Learn how to store multiple values using arrays, access elements, modify data, and use common array methods.',

  level: 'Beginner',

  readingTime: '15 min',

  lesson: 'Lesson 10 of 40',

  sections: [
    {
      type: 'paragraph',
      title: 'What is an Array?',
      content:
        'An array is a special object in JavaScript used to store multiple values in a single variable. Each value is called an element and is accessed using its index, starting from 0.',
    },

    {
      type: 'code',
      title: 'Creating an Array',
      language: 'javascript',
      code: `const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);`,
    },

    {
      type: 'paragraph',
      title: 'Accessing Array Elements',
      content: 'Array elements are accessed using their index. The first element is at index 0.',
    },

    {
      type: 'code',
      title: 'Access Elements',
      language: 'javascript',
      code: `const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango`,
    },

    {
      type: 'paragraph',
      title: 'Updating Array Elements',
      content: 'You can change any element by assigning a new value to its index.',
    },

    {
      type: 'code',
      title: 'Update an Element',
      language: 'javascript',
      code: `const fruits = ["Apple", "Banana", "Mango"];

fruits[1] = "Orange";

console.log(fruits);`,
    },

    {
      type: 'paragraph',
      title: 'Array Properties',
      content: 'The length property returns the total number of elements present in an array.',
    },

    {
      type: 'code',
      title: 'Array Length',
      language: 'javascript',
      code: `const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);`,
    },

    {
      type: 'table',
      title: 'Common Array Methods',
      headers: ['Method', 'Description'],
      rows: [
        ['push()', 'Adds an element to the end'],
        ['pop()', 'Removes the last element'],
        ['shift()', 'Removes the first element'],
        ['unshift()', 'Adds an element to the beginning'],
        ['includes()', 'Checks if a value exists'],
        ['indexOf()', 'Returns the index of an element'],
        ['slice()', 'Returns a portion of an array'],
        ['splice()', 'Adds or removes elements'],
      ],
    },

    {
      type: 'code',
      title: 'Using Array Methods',
      language: 'javascript',
      code: `const numbers = [10, 20, 30];

numbers.push(40);
numbers.pop();

console.log(numbers);`,
    },

    {
      type: 'note',
      variant: 'tip',
      title: 'Remember',
      content:
        'Arrays can store different data types including numbers, strings, booleans, objects, functions, and even other arrays.',
    },
  ],

  interviewQuestions: [
    {
      question: 'What is an array in JavaScript?',
      answer: 'An array is an ordered collection of values stored in a single variable.',
    },
    {
      question: 'What is the index of the first element?',
      answer: '0',
    },
    {
      question: 'What is the difference between push() and pop()?',
      answer: 'push() adds an element to the end, while pop() removes the last element.',
    },
    {
      question: 'How do you find the length of an array?',
      answer: 'Using the length property.',
    },
    {
      question: 'Can an array contain different data types?',
      answer: 'Yes, JavaScript arrays can contain mixed data types.',
    },
  ],

  quiz: [
    {
      question: 'Which index represents the first element of an array?',
      options: ['0', '1', '-1', 'First'],
      answer: 0,
    },
    {
      question: 'Which method adds an element to the end of an array?',
      options: ['push()', 'pop()', 'shift()', 'slice()'],
      answer: 0,
    },
    {
      question: 'Which property returns the total number of elements?',
      options: ['count', 'size', 'length', 'total'],
      answer: 2,
    },
  ],

  previous: 'objects',

  next: 'array-methods',
};
