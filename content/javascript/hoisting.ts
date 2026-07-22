import { Tutorial } from '@/app/types/tutorial';

export const hoisting: Tutorial = {
  slug: 'hoisting',

  title: 'JavaScript Hoisting',

  description:
    'Learn what hoisting is in JavaScript, how variables and functions are hoisted, the difference between var, let, and const, and common interview questions.',

  level: 'Beginner',

  readingTime: '20 min',

  lesson: 'Lesson 14 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'What is Hoisting?',
      content:
        "Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution. Only declarations are hoisted, not initializations.",
    },

    {
      type: 'list',
      title: 'In This Lesson You Will Learn',
      items: [
        'What is Hoisting?',
        'Variable Hoisting',
        'Function Hoisting',
        'var vs let vs const',
        'Temporal Dead Zone (TDZ)',
        'Best Practices',
      ],
    },

    {
      type: 'paragraph',
      title: 'Variable Hoisting with var',
      content:
        'Variables declared with var are hoisted and initialized with undefined. Accessing them before declaration does not throw an error.',
    },

    {
      type: 'code',
      title: 'var Hoisting Example',
      language: 'javascript',
      code: `console.log(name);

var name = "Rohit";

// Output:
// undefined`,
    },

    {
      type: 'paragraph',
      title: 'What Actually Happens?',
      content:
        'JavaScript internally moves the declaration to the top, but not the assignment.',
    },

    {
      type: 'code',
      title: 'Behind the Scenes',
      language: 'javascript',
      code: `var name;

console.log(name);

name = "Rohit";`,
    },

    {
      type: 'paragraph',
      title: 'Hoisting with let',
      content:
        'Variables declared using let are hoisted but remain inaccessible until their declaration is reached. This period is called the Temporal Dead Zone (TDZ).',
    },

    {
      type: 'code',
      title: 'let Example',
      language: 'javascript',
      code: `console.log(age);

let age = 25;

// ReferenceError`,
    },

    {
      type: 'paragraph',
      title: 'Hoisting with const',
      content:
        'const behaves similarly to let. It is hoisted but cannot be accessed before declaration.',
    },

    {
      type: 'code',
      title: 'const Example',
      language: 'javascript',
      code: `console.log(country);

const country = "India";

// ReferenceError`,
    },

    {
      type: 'paragraph',
      title: 'Function Declaration Hoisting',
      content:
        'Function declarations are completely hoisted. They can be called before their declaration.',
    },

    {
      type: 'code',
      title: 'Function Declaration Example',
      language: 'javascript',
      code: `greet();

function greet() {
  console.log("Welcome to DevAcademy");
}`,
    },

    {
      type: 'paragraph',
      title: 'Function Expression Hoisting',
      content:
        'Function expressions behave like variables. If declared with var, only the variable is hoisted, not the function itself.',
    },

    {
      type: 'code',
      title: 'Function Expression Example',
      language: 'javascript',
      code: `sayHello();

var sayHello = function () {
  console.log("Hello");
};

// TypeError:
 // sayHello is not a function`,
    },

    {
      type: 'paragraph',
      title: 'Arrow Function Hoisting',
      content:
        'Arrow functions are also treated as variables. They cannot be called before declaration.',
    },

    {
      type: 'code',
      title: 'Arrow Function Example',
      language: 'javascript',
      code: `add();

const add = () => {
  console.log("Addition");
};

// ReferenceError`,
    },

    {
      type: 'table',
      title: 'Hoisting Comparison',
      headers: ['Declaration', 'Hoisted', 'Accessible Before Declaration'],
      rows: [
        ['var', 'Yes', 'Yes (undefined)'],
        ['let', 'Yes', 'No'],
        ['const', 'Yes', 'No'],
        ['Function Declaration', 'Yes', 'Yes'],
        ['Function Expression', 'Variable Only', 'No'],
        ['Arrow Function', 'Variable Only', 'No'],
      ],
    },

    {
      type: 'note',
      title: 'Temporal Dead Zone (TDZ)',
      content:
        'The Temporal Dead Zone is the time between entering a scope and declaring a let or const variable. Accessing the variable during this period throws a ReferenceError.',
    },

    {
      type: 'warning',
      title: 'Common Mistake',
      content:
        'Many beginners think JavaScript moves the entire variable or function to the top. In reality, only declarations are hoisted—not the assigned values.',
    },

    {
      type: 'tip',
      title: 'Best Practices',
      content:
        'Always declare variables before using them. Prefer let and const over var to avoid hoisting-related bugs and improve code readability.',
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        "Hoisting is JavaScript's behavior of processing declarations before execution. Function declarations are fully hoisted, while var is initialized as undefined. let and const are hoisted but remain in the Temporal Dead Zone until their declaration.",
    },
  ],

  quiz: [
    {
      question: 'Which keyword is initialized as undefined during hoisting?',
      options: ['let', 'const', 'var', 'class'],
      answer: 2,
    },
    {
      question: 'Which variables remain in the Temporal Dead Zone?',
      options: ['var', 'let and const', 'function', 'none'],
      answer: 1,
    },
    {
      question: 'Which function type can be called before its declaration?',
      options: [
        'Arrow Function',
        'Function Expression',
        'Function Declaration',
        'Anonymous Function',
      ],
      answer: 2,
    },
    {
      question: 'What does this code log?',
      code: `console.log(a);
var a = 5;`,
      options: ['5', 'undefined', 'ReferenceError', 'null'],
      answer: 1,
    },
    {
      question: 'What does this code log?',
      code: `console.log(b);
let b = 10;`,
      options: ['10', 'undefined', 'ReferenceError', 'null'],
      answer: 2,
    },
  ],

  previous: 'scope',

  next: 'strict-mode',
};
