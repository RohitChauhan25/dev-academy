import { Tutorial } from '@/app/types/tutorial';

export const typeConversion: Tutorial = {
  slug: 'type-conversion',

  title: 'JavaScript Type Conversion',

  description:
    'Learn how JavaScript converts values between different data types. Understand implicit and explicit conversion with practical examples and interview questions.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 6 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'What is Type Conversion?',
      content:
        'Type conversion is the process of converting a value from one data type to another. JavaScript automatically converts values in some situations (implicit conversion), and developers can also convert values manually (explicit conversion).',
    },

    {
      type: 'paragraph',
      title: 'Why is Type Conversion Important?',
      content:
        'JavaScript is a loosely typed language. Variables can hold values of different data types, so understanding how conversions work helps avoid unexpected bugs.',
    },

    {
      type: 'list',
      title: 'Types of Conversion',
      items: [
        'Implicit (Automatic) Conversion',
        'Explicit (Manual) Conversion',
      ],
    },

    {
      type: 'paragraph',
      title: 'Implicit Type Conversion',
      content:
        'JavaScript automatically converts one data type into another during operations when necessary.',
    },

    {
      type: 'code',
      title: 'Implicit Conversion Example',
      language: 'javascript',
      code: `console.log("5" + 2);   // "52"
console.log("5" - 2);   // 3
console.log("5" * 2);   // 10
console.log(true + 1);  // 2`,
    },

    {
      type: 'paragraph',
      title: 'Explicit Type Conversion',
      content:
        'Explicit conversion is performed manually using built-in JavaScript functions such as Number(), String(), and Boolean().',
    },

    {
      type: 'code',
      title: 'Convert to Number',
      language: 'javascript',
      code: `const age = "25";

const numberAge = Number(age);

console.log(numberAge);
console.log(typeof numberAge);`,
    },

    {
      type: 'code',
      title: 'Convert to String',
      language: 'javascript',
      code: `const price = 500;

const strPrice = String(price);

console.log(strPrice);
console.log(typeof strPrice);`,
    },

    {
      type: 'code',
      title: 'Convert to Boolean',
      language: 'javascript',
      code: `console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("Hello"));`,
    },

    {
      type: 'table',
      title: 'Common Type Conversions',
      headers: ['Expression', 'Result'],
      rows: [
        ['Number("10")', '10'],
        ['Number("abc")', 'NaN'],
        ['String(100)', '"100"'],
        ['Boolean(1)', 'true'],
        ['Boolean(0)', 'false'],
        ['Boolean("")', 'false'],
        ['Boolean("Hi")', 'true'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Truthy and Falsy Values',
      content:
        'In JavaScript, every value is either truthy or falsy when evaluated in a boolean context.',
    },

    {
      type: 'list',
      title: 'Falsy Values',
      items: [
        'false',
        '0',
        '-0',
        '0n',
        '"" (empty string)',
        'null',
        'undefined',
        'NaN',
      ],
    },

    {
      type: 'list',
      title: 'Truthy Values',
      items: ['"Hello"', '[]', '{}', '1', '-1', 'Infinity'],
    },

    {
      type: 'warning',
      title: 'Common Mistake',
      content:
        'Using == performs type conversion before comparison, while === compares both value and type. Prefer === in modern JavaScript.',
    },

    {
      type: 'code',
      title: '== vs ===',
      language: 'javascript',
      code: `console.log(5 == "5");   // true

console.log(5 === "5");  // false`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always perform explicit type conversion whenever possible. Avoid relying on JavaScript’s automatic coercion because it can produce unexpected results.',
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        'JavaScript supports both implicit and explicit type conversion. Understanding type coercion helps write predictable and bug-free code.',
    },
  ],

  quiz: [
    {
      question: 'Which function converts a value to a number?',
      options: ['String()', 'Number()', 'Boolean()', 'Parse()'],
      answer: 1,
    },
    {
      question: 'What is the output of Boolean("")?',
      options: ['true', 'false', 'undefined', 'null'],
      answer: 1,
    },
    {
      question: 'Which operator checks both value and data type?',
      options: ['==', '===', '=', '!='],
      answer: 1,
    },
    {
      question: 'What does this code log?',
      code: `console.log([] + []);
console.log([] + {});
console.log(1 + "1");`,
      options: [
        '"", "[object Object]", "11"',
        '0, NaN, "11"',
        '"[object Object]", "", 11',
        'TypeError for all three',
      ],
      answer: 0,
    },
  ],

  previous: 'data-types',

  next: 'operators',
};
