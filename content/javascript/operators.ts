export const operators = {
  slug: 'operators',

  title: 'JavaScript Operators',

  description:
    'Learn JavaScript operators with practical examples. Understand arithmetic, assignment, comparison, logical, and increment/decrement operators used in everyday JavaScript programming.',

  level: 'Beginner',

  readingTime: '18 min',

  lesson: 'Lesson 7 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'What are Operators?',
      content:
        'Operators are special symbols that perform operations on values and variables. They allow you to calculate values, compare data, assign variables, and evaluate logical conditions. Operators are one of the most commonly used features in JavaScript.',
    },

    {
      type: 'paragraph',
      title: 'Why are Operators Important?',
      content:
        "Without operators, JavaScript cannot perform calculations or make decisions. Whether you're creating a calculator, validating forms, or checking conditions, operators are used everywhere.",
    },

    {
      type: 'list',
      title: 'Types of JavaScript Operators',
      items: [
        'Arithmetic Operators',
        'Assignment Operators',
        'Comparison Operators',
        'Logical Operators',
        'Increment & Decrement Operators',
        'String Operators',
      ],
    },

    {
      type: 'paragraph',
      title: 'Arithmetic Operators',
      content:
        'Arithmetic operators are used to perform mathematical calculations.',
    },

    {
      type: 'table',
      title: 'Arithmetic Operators',
      headers: ['Operator', 'Description', 'Example'],
      rows: [
        ['+', 'Addition', '5 + 2'],
        ['-', 'Subtraction', '5 - 2'],
        ['*', 'Multiplication', '5 * 2'],
        ['/', 'Division', '10 / 2'],
        ['%', 'Remainder', '10 % 3'],
        ['**', 'Exponentiation', '2 ** 3'],
      ],
    },

    {
      type: 'code',
      title: 'Arithmetic Operators Example',
      language: 'javascript',
      code: `let a = 20;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);`,
    },

    {
      type: 'paragraph',
      title: 'Assignment Operators',
      content:
        'Assignment operators assign or update values stored in variables.',
    },

    {
      type: 'table',
      title: 'Assignment Operators',
      headers: ['Operator', 'Meaning'],
      rows: [
        ['=', 'Assign'],
        ['+=', 'Add and Assign'],
        ['-=', 'Subtract and Assign'],
        ['*=', 'Multiply and Assign'],
        ['/=', 'Divide and Assign'],
        ['%=', 'Modulus and Assign'],
      ],
    },

    {
      type: 'code',
      title: 'Assignment Operator Example',
      language: 'javascript',
      code: `let score = 100;

score += 20;
score -= 10;
score *= 2;

console.log(score);`,
    },

    {
      type: 'paragraph',
      title: 'Comparison Operators',
      content:
        'Comparison operators compare two values and always return either true or false.',
    },

    {
      type: 'table',
      title: 'Comparison Operators',
      headers: ['Operator', 'Description'],
      rows: [
        ['==', 'Equal'],
        ['===', 'Strict Equal'],
        ['!=', 'Not Equal'],
        ['!==', 'Strict Not Equal'],
        ['>', 'Greater Than'],
        ['<', 'Less Than'],
        ['>=', 'Greater Than or Equal'],
        ['<=', 'Less Than or Equal'],
      ],
    },

    {
      type: 'code',
      title: 'Comparison Example',
      language: 'javascript',
      code: `console.log(10 > 5);
console.log(10 < 5);

console.log(10 == "10");

console.log(10 === "10");`,
    },

    {
      type: 'note',
      title: 'Remember',
      content:
        'Always prefer === instead of == because === compares both value and data type.',
    },

    {
      type: 'paragraph',
      title: 'Logical Operators',
      content: 'Logical operators are used to combine multiple conditions.',
    },

    {
      type: 'table',
      title: 'Logical Operators',
      headers: ['Operator', 'Description'],
      rows: [
        ['&&', 'AND'],
        ['||', 'OR'],
        ['!', 'NOT'],
      ],
    },

    {
      type: 'code',
      title: 'Logical Operator Example',
      language: 'javascript',
      code: `let age = 20;
let hasLicense = true;

console.log(age >= 18 && hasLicense);

console.log(age >= 18 || hasLicense);

console.log(!hasLicense);`,
    },

    {
      type: 'paragraph',
      title: 'Increment & Decrement',
      content:
        'Increment (++) increases a value by one, while decrement (--) decreases a value by one.',
    },

    {
      type: 'code',
      title: 'Increment Example',
      language: 'javascript',
      code: `let count = 5;

console.log(++count);

console.log(count++);

console.log(count);

console.log(--count);

console.log(count--);

console.log(count);`,
    },

    {
      type: 'paragraph',
      title: 'Prefix vs Postfix',
      content:
        'The prefix operator (++value) increments the value before it is used, while the postfix operator (value++) uses the current value first and increments it afterward.',
    },

    {
      type: 'code',
      title: 'Prefix vs Postfix Example',
      language: 'javascript',
      code: `let a = 5;

console.log(++a);

a = 5;

console.log(a++);

console.log(a);`,
    },

    {
      type: 'paragraph',
      title: 'String Concatenation Operator',
      content: 'The + operator is also used to join strings together.',
    },

    {
      type: 'code',
      title: 'String Example',
      language: 'javascript',
      code: `const firstName = "Rohit";
const lastName = "Chauhan";

console.log(firstName + " " + lastName);`,
    },

    {
      type: 'warning',
      title: 'Common Mistake',
      content:
        'The + operator joins strings, while -, *, and / automatically convert strings into numbers when possible.',
    },

    {
      type: 'code',
      title: 'Example',
      language: 'javascript',
      code: `console.log("5" + 2); // "52"

console.log("5" - 2); // 3

console.log("5" * 2); // 10`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use strict equality (===) for comparisons and use parentheses to make complex expressions easier to read.',
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        'JavaScript provides different categories of operators for arithmetic calculations, assignments, comparisons, logical operations, and string concatenation. Mastering these operators is essential before learning conditionals and loops.',
    },
  ],

  quiz: [
    {
      question: 'Which operator compares both value and type?',
      options: ['==', '===', '!=', '='],
      answer: 1,
    },
    {
      question: 'What is the output of 10 % 3?',
      options: ['1', '3', '0', '2'],
      answer: 0,
    },
    {
      question: 'What is the output of "5" + 2?',
      options: ['7', '52', 'Error', 'NaN'],
      answer: 1,
    },
  ],

  previous: 'type-conversion',

  next: 'conditionals',
};
