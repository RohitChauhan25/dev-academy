import { Tutorial } from '@/app/types/tutorial';

export const dataTypes: Tutorial = {
  slug: 'data-types-in-javascript',

  title: 'JavaScript Data Types',

  description:
    'Learn about JavaScript data types, understand the difference between primitive and non-primitive types, and see how they are used in real-world applications.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 5 of 20',

  sections: [
    {
      type: 'paragraph',
      title: 'What are Data Types?',
      content:
        'A data type defines the kind of value a variable can store. JavaScript supports different types of data such as numbers, strings, booleans, objects, and more. Understanding data types is essential because every operation in JavaScript depends on the type of data being used.',
    },

    {
      type: 'paragraph',
      title: 'Why are Data Types Important?',
      content:
        'Data types help JavaScript determine what operations can be performed on a value. For example, numbers can be added, while strings can be concatenated. Choosing the correct data type makes your programs more reliable and easier to understand.',
    },

    {
      type: 'list',
      title: 'JavaScript Data Types',
      items: ['String', 'Number', 'Boolean', 'Undefined', 'Null', 'BigInt', 'Symbol', 'Object'],
    },

    {
      type: 'table',
      title: 'Primitive vs Non-Primitive',
      headers: ['Primitive', 'Non-Primitive'],
      rows: [
        ['String', 'Object'],
        ['Number', 'Array'],
        ['Boolean', 'Function'],
        ['Undefined', 'Date'],
        ['Null', 'Map / Set'],
        ['BigInt', 'Custom Objects'],
        ['Symbol', '-'],
      ],
    },

    {
      type: 'paragraph',
      title: '1. String',
      content:
        'A string is a sequence of characters enclosed in single quotes, double quotes, or backticks. Strings are commonly used to store names, messages, and text.',
    },

    {
      type: 'code',
      title: 'String Example',
      language: 'javascript',
      code: `let firstName = "Rohit";
let city = 'Delhi';
let message = \`Welcome to DevAcademy\`;

console.log(firstName);
console.log(message);`,
    },

    {
      type: 'paragraph',
      title: '2. Number',
      content:
        'The Number type represents both integers and decimal values. JavaScript does not have separate types for int and float.',
    },

    {
      type: 'code',
      title: 'Number Example',
      language: 'javascript',
      code: `let age = 25;
let price = 499.99;

console.log(age);
console.log(price);`,
    },

    {
      type: 'paragraph',
      title: '3. Boolean',
      content:
        'A Boolean represents one of two values: true or false. It is mainly used in conditions and decision-making.',
    },

    {
      type: 'code',
      title: 'Boolean Example',
      language: 'javascript',
      code: `let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn);`,
    },

    {
      type: 'paragraph',
      title: '4. Undefined',
      content:
        'A variable that has been declared but not assigned a value has the value undefined.',
    },

    {
      type: 'code',
      title: 'Undefined Example',
      language: 'javascript',
      code: `let user;

console.log(user); // undefined`,
    },

    {
      type: 'paragraph',
      title: '5. Null',
      content:
        'Null represents the intentional absence of a value. It is assigned explicitly by the developer.',
    },

    {
      type: 'code',
      title: 'Null Example',
      language: 'javascript',
      code: `let selectedUser = null;

console.log(selectedUser);`,
    },

    {
      type: 'paragraph',
      title: '6. BigInt',
      content:
        'BigInt is used for very large integers that cannot be represented safely by the Number type.',
    },

    {
      type: 'code',
      title: 'BigInt Example',
      language: 'javascript',
      code: `const population = 9876543210123456789n;

console.log(population);`,
    },

    {
      type: 'paragraph',
      title: '7. Symbol',
      content:
        'A Symbol is a unique and immutable value. It is commonly used as object property keys to avoid conflicts.',
    },

    {
      type: 'code',
      title: 'Symbol Example',
      language: 'javascript',
      code: `const id = Symbol("id");

console.log(id);`,
    },

    {
      type: 'paragraph',
      title: '8. Object',
      content:
        'Objects are collections of key-value pairs. Arrays, functions, and dates are all special types of objects in JavaScript.',
    },

    {
      type: 'code',
      title: 'Object Example',
      language: 'javascript',
      code: `const user = {
  name: "Rohit",
  age: 28,
  isAdmin: false,
};

console.log(user);`,
    },

    {
      type: 'table',
      title: 'typeof Operator',
      headers: ['Value', 'Result'],
      rows: [
        ['"Hello"', '"string"'],
        ['100', '"number"'],
        ['true', '"boolean"'],
        ['undefined', '"undefined"'],
        ['null', '"object" (historical bug)'],
        ['{}', '"object"'],
        ['[]', '"object"'],
        ['Symbol()', '"symbol"'],
      ],
    },

    {
      type: 'code',
      title: 'Using typeof',
      language: 'javascript',
      code: `console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});`,
    },

    {
      type: 'warning',
      title: 'Common Interview Question',
      content:
        'Many developers expect typeof null to return "null". However, it returns "object". This is a well-known historical bug in JavaScript and is frequently asked in interviews.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Choose the correct data type for the data you want to store. Use null intentionally when a value is absent, and avoid relying only on typeof for complex type checking.',
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        'JavaScript provides seven primitive data types and one non-primitive type (Object). Understanding data types is essential because every variable, function, and expression in JavaScript works with them.',
    },
  ],

  interviewQuestions: [
    'What are data types in JavaScript?',
    'How many primitive data types does JavaScript have?',
    'What is the difference between null and undefined?',
    'Why does typeof null return "object"?',
    'What is the difference between primitive and non-primitive data types?',
    'What is BigInt?',
    'What is Symbol?',
    'What does the typeof operator do?',
  ],

  quiz: [
    {
      question: 'Which of the following is NOT a primitive data type?',
      options: ['String', 'Number', 'Object', 'Boolean'],
      answer: 2,
    },
    {
      question: 'What is the output of typeof null?',
      options: ['null', 'undefined', 'object', 'string'],
      answer: 2,
    },
    {
      question: 'Which data type is used to store very large integers?',
      options: ['Number', 'BigInt', 'Float', 'Long'],
      answer: 1,
    },
  ],

  previous: 'variables',

  next: 'type-conversion',
};
