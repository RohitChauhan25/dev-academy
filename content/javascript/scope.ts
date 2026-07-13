export const scope = {
  slug: 'scope',

  title: 'JavaScript Scope',

  description:
    'Learn how variable scope works in JavaScript, including global scope, function scope, block scope, lexical scope, and best practices.',

  level: 'Beginner',

  readingTime: '18 min',

  lesson: 'Lesson 11 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is Scope?',
      content:
        'Scope determines where a variable can be accessed in your program. It controls the visibility and lifetime of variables. Understanding scope helps you avoid bugs and write clean, maintainable code.',
    },

    {
      type: 'list',
      title: 'Why Learn Scope?',
      items: [
        'Avoid variable conflicts',
        'Write cleaner code',
        'Understand function behavior',
        'Debug applications easily',
        'Master closures later',
      ],
    },

    {
      type: 'paragraph',
      title: 'Global Scope',
      content:
        'A variable declared outside any function or block belongs to the global scope. It can be accessed from anywhere in the program.',
    },

    {
      type: 'code',
      title: 'Global Scope Example',
      language: 'javascript',
      code: `let website = "DevAcademy";

function showWebsite() {
  console.log(website);
}

showWebsite();

console.log(website);`,
    },

    {
      type: 'paragraph',
      title: 'Function Scope',
      content:
        'Variables declared inside a function can only be accessed within that function. They are not available outside the function.',
    },

    {
      type: 'code',
      title: 'Function Scope Example',
      language: 'javascript',
      code: `function greet() {
  let message = "Hello";

  console.log(message);
}

greet();

// console.log(message); // Error`,
    },

    {
      type: 'paragraph',
      title: 'Block Scope',
      content:
        'Variables declared using let and const are block-scoped. They exist only inside the block where they are declared.',
    },

    {
      type: 'code',
      title: 'Block Scope Example',
      language: 'javascript',
      code: `if (true) {
  let age = 25;
  const city = "Delhi";

  console.log(age);
  console.log(city);
}

// console.log(age); // Error
// console.log(city); // Error`,
    },

    {
      type: 'paragraph',
      title: 'var is Not Block Scoped',
      content:
        'Unlike let and const, variables declared using var ignore block scope and remain accessible outside the block.',
    },

    {
      type: 'code',
      title: 'var Example',
      language: 'javascript',
      code: `if (true) {
  var username = "Rohit";
}

console.log(username);`,
    },

    {
      type: 'paragraph',
      title: 'Lexical Scope',
      content:
        'Lexical scope means that inner functions can access variables declared in their parent functions.',
    },

    {
      type: 'code',
      title: 'Lexical Scope Example',
      language: 'javascript',
      code: `function outer() {
  let language = "JavaScript";

  function inner() {
    console.log(language);
  }

  inner();
}

outer();`,
    },

    {
      type: 'paragraph',
      title: 'Variable Shadowing',
      content:
        'Variable shadowing happens when a variable declared inside a function or block has the same name as an outer variable.',
    },

    {
      type: 'code',
      title: 'Variable Shadowing Example',
      language: 'javascript',
      code: `let language = "JavaScript";

function showLanguage() {
  let language = "TypeScript";

  console.log(language);
}

showLanguage();

console.log(language);`,
    },

    {
      type: 'table',
      title: 'Types of Scope',
      headers: ['Scope', 'Accessible From'],
      rows: [
        ['Global Scope', 'Entire Program'],
        ['Function Scope', 'Inside Function Only'],
        ['Block Scope', 'Inside Block Only'],
        ['Lexical Scope', 'Parent Scope'],
      ],
    },

    {
      type: 'warning',
      title: 'Common Mistake',
      content:
        'Avoid using var in modern JavaScript because it ignores block scope and can introduce unexpected bugs. Prefer let and const.',
    },

    {
      type: 'tip',
      title: 'Best Practices',
      content:
        'Always declare variables with const by default. Use let only when reassignment is required. Avoid global variables whenever possible.',
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        'JavaScript provides global scope, function scope, block scope, and lexical scope. Understanding scope is essential for writing reliable JavaScript applications.',
    },
  ],

  interviewQuestions: [
    'What is scope in JavaScript?',
    'What is the difference between global scope and local scope?',
    'What is block scope?',
    'Why is let preferred over var?',
    'What is lexical scope?',
    'What is variable shadowing?',
    'What is function scope?',
  ],

  quiz: [
    {
      question: 'Which keyword creates a block-scoped variable?',
      options: ['var', 'let', 'function', 'return'],
      answer: 1,
    },
    {
      question: 'Which keyword is NOT block scoped?',
      options: ['let', 'const', 'var', 'class'],
      answer: 2,
    },
    {
      question: 'Which scope allows inner functions to access parent variables?',
      options: ['Global Scope', 'Function Scope', 'Lexical Scope', 'Module Scope'],
      answer: 2,
    },
  ],

  previous: 'functions',

  next: 'hoisting',
};
