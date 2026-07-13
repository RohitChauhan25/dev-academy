import { Tutorial } from '@/app/types/tutorial';

export const functions: Tutorial = {
  slug: 'functions',

  title: 'JavaScript Functions',

  description:
    'Learn how to create reusable blocks of code using functions, parameters, return values, function expressions, arrow functions, and best practices.',

  level: 'Beginner',

  readingTime: '24 min',

  lesson: 'Lesson 10 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What are Functions?',
      content:
        'A function is a reusable block of code that performs a specific task. Instead of writing the same code multiple times, you can define it once and call it whenever needed.',
    },

    {
      type: 'list',
      title: 'Why Use Functions?',
      items: [
        'Avoid duplicate code',
        'Improve code readability',
        'Make code reusable',
        'Simplify debugging',
        'Organize large applications',
      ],
    },

    {
      type: 'paragraph',
      title: 'Function Declaration',
      content: 'A function declaration defines a named function using the function keyword.',
    },

    {
      type: 'code',
      title: 'Function Declaration Example',
      language: 'javascript',
      code: `function greet() {
  console.log("Hello, DevAcademy!");
}

greet();`,
    },

    {
      type: 'paragraph',
      title: 'Function Parameters',
      content:
        'Parameters are variables listed in the function definition. They receive values when the function is called.',
    },

    {
      type: 'code',
      title: 'Parameters Example',
      language: 'javascript',
      code: `function greet(name) {
  console.log("Hello " + name);
}

greet("Rohit");
greet("Aman");`,
    },

    {
      type: 'paragraph',
      title: 'Return Statement',
      content:
        'The return statement sends a value back to the caller and immediately exits the function.',
    },

    {
      type: 'code',
      title: 'Return Example',
      language: 'javascript',
      code: `function add(a, b) {
  return a + b;
}

const result = add(10, 20);

console.log(result);`,
    },

    {
      type: 'paragraph',
      title: 'Default Parameters',
      content:
        'Default parameters allow you to provide fallback values when no argument is passed.',
    },

    {
      type: 'code',
      title: 'Default Parameter Example',
      language: 'javascript',
      code: `function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();
greet("Rohit");`,
    },

    {
      type: 'paragraph',
      title: 'Function Expressions',
      content:
        'A function can also be assigned to a variable. This is called a function expression.',
    },

    {
      type: 'code',
      title: 'Function Expression Example',
      language: 'javascript',
      code: `const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(5, 4));`,
    },

    {
      type: 'paragraph',
      title: 'Arrow Functions',
      content:
        'Arrow functions provide a shorter syntax for writing functions and are commonly used in modern JavaScript.',
    },

    {
      type: 'code',
      title: 'Arrow Function Example',
      language: 'javascript',
      code: `const add = (a, b) => {
  return a + b;
};

console.log(add(5, 7));`,
    },

    {
      type: 'paragraph',
      title: 'Implicit Return',
      content:
        'When an arrow function contains only one expression, the return keyword can be omitted.',
    },

    {
      type: 'code',
      title: 'Implicit Return Example',
      language: 'javascript',
      code: `const square = number => number * number;

console.log(square(6));`,
    },

    {
      type: 'paragraph',
      title: 'Function Scope',
      content: 'Variables declared inside a function are accessible only within that function.',
    },

    {
      type: 'code',
      title: 'Scope Example',
      language: 'javascript',
      code: `function test() {
  let message = "Hello";
  console.log(message);
}

test();

// console.log(message); // Error`,
    },

    {
      type: 'paragraph',
      title: 'Callback Functions',
      content:
        'A callback is a function passed as an argument to another function. It executes after a specific task is completed.',
    },

    {
      type: 'code',
      title: 'Callback Example',
      language: 'javascript',
      code: `function greet(name, callback) {
  console.log("Hello " + name);

  callback();
}

function welcome() {
  console.log("Welcome to DevAcademy");
}

greet("Rohit", welcome);`,
    },

    {
      type: 'table',
      title: 'Function Types',
      headers: ['Type', 'Description'],
      rows: [
        ['Function Declaration', 'Named function using function keyword'],
        ['Function Expression', 'Function stored in a variable'],
        ['Arrow Function', 'Short syntax introduced in ES6'],
        ['Callback Function', 'Function passed to another function'],
      ],
    },

    {
      type: 'warning',
      title: 'Common Mistake',
      content:
        'Calling a function before it is defined works only for function declarations. Function expressions and arrow functions are not hoisted in the same way.',
    },

    {
      type: 'code',
      title: 'Hoisting Example',
      language: 'javascript',
      code: `sayHello();

function sayHello() {
  console.log("Hello");
}

// Works successfully`,
    },

    {
      type: 'tip',
      title: 'Best Practices',
      content:
        'Keep functions small, give meaningful names, avoid duplicate logic, use parameters instead of global variables, and return values instead of printing whenever possible.',
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        'Functions are one of the core building blocks of JavaScript. They make code reusable, modular, and easier to maintain.',
    },
  ],

  interviewQuestions: [
    'What is a function in JavaScript?',
    'What is the difference between parameters and arguments?',
    'What is the difference between function declaration and function expression?',
    'What are arrow functions?',
    'What is a callback function?',
    'What is function scope?',
    'What is the return statement?',
  ],

  quiz: [
    {
      question: 'Which keyword is used to declare a function?',
      options: ['function', 'func', 'define', 'method'],
      answer: 0,
    },
    {
      question: 'Which statement sends a value back from a function?',
      options: ['break', 'return', 'continue', 'yield'],
      answer: 1,
    },
    {
      question: 'Which syntax represents an arrow function?',
      options: ['=>', '->', '==>', '<='],
      answer: 0,
    },
  ],

  previous: 'loops',

  next: 'scope',
};
