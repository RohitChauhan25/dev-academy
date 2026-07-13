import { Tutorial } from '@/app/types/tutorial';

export const variables: Tutorial = {
  slug: 'variables',

  title: 'JavaScript Variables',

  description:
    'Learn how variables work in JavaScript, understand var, let, and const, and know when to use each with practical examples.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 2 of 20',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Variable?',
      content:
        'A variable is a named container used to store data. Instead of writing the same value multiple times, you store it inside a variable and reuse it whenever required.',
    },

    {
      type: 'code',
      title: 'Declaring Variables',
      language: 'javascript',
      code: `let name = "Rohit";

const country = "India";

var age = 25;

console.log(name);
console.log(country);
console.log(age);`,
    },

    {
      type: 'paragraph',
      title: 'var, let and const',
      content:
        'Modern JavaScript recommends using let and const. Avoid using var in new projects because it behaves differently due to function scope and hoisting.',
    },

    {
      type: 'table',
      title: 'Comparison',
      headers: ['Feature', 'var', 'let', 'const'],
      rows: [
        ['Scope', 'Function', 'Block', 'Block'],
        ['Redeclare', 'Yes', 'No', 'No'],
        ['Reassign', 'Yes', 'Yes', 'No'],
        ['Hoisted', 'Yes', 'Yes', 'Yes'],
      ],
    },

    {
      type: 'code',
      title: 'Example of let',
      language: 'javascript',
      code: `let age = 25;

age = 26;

console.log(age);`,
    },

    {
      type: 'code',
      title: 'Example of const',
      language: 'javascript',
      code: `const pi = 3.14;

// ❌ Error
// pi = 3.14159;`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use const by default. Only use let when the value needs to change. Avoid var in modern JavaScript development.',
    },

    {
      type: 'warning',
      title: 'Common Mistake',
      content:
        'Many beginners think const makes objects immutable. It only prevents reassignment of the variable reference. Object properties can still be modified.',
    },

    {
      type: 'note',
      title: 'Remember',
      content:
        'Variable names are case-sensitive. userName and username are considered different variables.',
    },
  ],

  interviewQuestions: [
    'What is a variable?',
    'Difference between var, let and const?',
    'Why should we avoid var?',
    'Can we change the value of a const object?',
    'What are block scope and function scope?',
  ],

  quiz: [
    {
      question: 'Which keyword should be preferred by default?',
      options: ['var', 'let', 'const', 'None'],
      answer: 2,
    },
    {
      question: 'Which keyword is block scoped?',
      options: ['var', 'let', 'Both let and const', 'None'],
      answer: 2,
    },
  ],

  previous: 'introduction',

  next: 'data-types-in-javascript',
};
