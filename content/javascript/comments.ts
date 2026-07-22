import { Tutorial } from '@/app/types/tutorial';

export const comments: Tutorial = {
  slug: 'comments',

  title: 'JavaScript Comments',

  description:
    'Learn how to write comments in JavaScript, understand the different types of comments, and discover best practices for writing clean and maintainable code.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 4 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'What are Comments?',
      content:
        'Comments are lines of text that are ignored by the JavaScript engine. They are written to explain code, improve readability, and help developers understand the purpose of a piece of code. Comments are not executed when the program runs.',
    },

    {
      type: 'paragraph',
      title: 'Why Use Comments?',
      content:
        'Writing meaningful comments makes your code easier to understand and maintain. They are especially useful when working in teams or when revisiting your own code after a long time.',
    },

    {
      type: 'list',
      title: 'Benefits of Comments',
      items: [
        'Improve code readability',
        'Explain complex logic',
        'Help during debugging',
        'Make collaboration easier',
        'Temporarily disable code',
      ],
    },

    {
      type: 'paragraph',
      title: 'Single-line Comments',
      content:
        'Single-line comments begin with two forward slashes (//). Everything after // on the same line is treated as a comment.',
    },

    {
      type: 'code',
      title: 'Single-line Comment Example',
      language: 'javascript',
      code: `// Print a welcome message
console.log("Welcome to DevAcademy");

// Store the user's name
let name = "Rohit";`,
    },

    {
      type: 'paragraph',
      title: 'Multi-line Comments',
      content:
        'Multi-line comments begin with /* and end with */. They are useful when writing longer explanations or documenting multiple lines of code.',
    },

    {
      type: 'code',
      title: 'Multi-line Comment Example',
      language: 'javascript',
      code: `/*
This program prints
a welcome message
to the console.
*/

console.log("Hello World");`,
    },

    {
      type: 'paragraph',
      title: 'Commenting Out Code',
      content:
        'During development, developers often comment out code temporarily instead of deleting it. This helps while testing different approaches.',
    },

    {
      type: 'code',
      title: 'Temporarily Disable Code',
      language: 'javascript',
      code: `console.log("Program Started");

// console.log("This line will not execute");

console.log("Program Finished");`,
    },

    {
      type: 'table',
      title: 'Single-line vs Multi-line Comments',
      headers: ['Feature', 'Single-line (//)', 'Multi-line (/* */)'],
      rows: [
        ['Syntax', '//', '/* */'],
        ['Lines', 'One Line', 'Multiple Lines'],
        ['Best For', 'Short Notes', 'Long Descriptions'],
      ],
    },

    {
      type: 'tip',
      title: 'Best Practices',
      content:
        'Write comments only when they add value. Avoid explaining obvious code. Instead, explain why the code exists or why a specific approach was chosen.',
    },

    {
      type: 'warning',
      title: 'Common Mistake',
      content:
        'Do not write unnecessary comments for simple code. Poor comments can make code harder to read and maintain.',
    },

    {
      type: 'code',
      title: 'Bad vs Good Comments',
      language: 'javascript',
      code: `// ❌ Bad
// Increment i
i++;

// ✅ Good
// Move to the next available user
i++;`,
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        'Comments are an essential part of writing clean code. Use single-line comments for short explanations and multi-line comments for detailed documentation. Always keep comments meaningful and up to date.',
    },
  ],

  quiz: [
    {
      question: 'Which symbol is used for a single-line comment?',
      options: ['//', '/*', '#', '<!--'],
      answer: 0,
    },
    {
      question: 'Which syntax is used for multi-line comments?',
      options: ['//', '/* */', '#', '--'],
      answer: 1,
    },
    {
      question: 'Comments are...',
      options: [
        'Executed by JavaScript',
        'Ignored by the JavaScript engine',
        'Converted into HTML',
        'Required in every program',
      ],
      answer: 1,
    },
  ],

  previous: 'setup',

  next: 'variables',
};
