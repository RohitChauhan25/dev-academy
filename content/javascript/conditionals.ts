export const conditionals = {
  slug: 'conditionals',

  title: 'JavaScript Conditionals',

  description:
    'Learn how to make decisions in JavaScript using if, else, else if, switch statements, and conditional logic with practical examples.',

  level: 'Beginner',

  readingTime: '18 min',

  lesson: 'Lesson 8 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'What are Conditional Statements?',
      content:
        'Conditional statements allow JavaScript programs to make decisions based on different conditions. Instead of executing every line of code, JavaScript chooses which block of code should run depending on whether a condition evaluates to true or false.',
    },

    {
      type: 'list',
      title: 'Why Use Conditional Statements?',
      items: [
        'Validate user input',
        'Show or hide content',
        'Check login status',
        'Grant or deny access',
        'Perform different actions based on user choices',
        'Build interactive applications',
      ],
    },

    {
      type: 'paragraph',
      title: 'The if Statement',
      content:
        'The if statement executes a block of code only when the specified condition is true.',
    },

    {
      type: 'code',
      title: 'if Statement Example',
      language: 'javascript',
      code: `let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote.");
}`,
    },

    {
      type: 'paragraph',
      title: 'The if...else Statement',
      content:
        'The else block executes when the condition inside the if statement is false.',
    },

    {
      type: 'code',
      title: 'if...else Example',
      language: 'javascript',
      code: `let age = 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`,
    },

    {
      type: 'paragraph',
      title: 'The else if Statement',
      content:
        'Use else if when multiple conditions need to be checked one after another.',
    },

    {
      type: 'code',
      title: 'else if Example',
      language: 'javascript',
      code: `let marks = 82;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}`,
    },

    {
      type: 'paragraph',
      title: 'Nested if Statement',
      content:
        'An if statement can contain another if statement inside it. This is known as a nested if statement.',
    },

    {
      type: 'code',
      title: 'Nested if Example',
      language: 'javascript',
      code: `let age = 22;
let hasLicense = true;

if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive.");
  }
}`,
    },

    {
      type: 'paragraph',
      title: 'The switch Statement',
      content:
        'The switch statement is useful when comparing a single value against multiple possible cases. It makes the code cleaner than writing many else if statements.',
    },

    {
      type: 'code',
      title: 'switch Statement Example',
      language: 'javascript',
      code: `let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid Day");
}`,
    },

    {
      type: 'table',
      title: 'if vs switch',
      headers: ['Feature', 'if', 'switch'],
      rows: [
        ['Multiple Conditions', '✅', '❌'],
        ['Range Checking', '✅', '❌'],
        ['Exact Value Matching', '✅', '✅'],
        ['Cleaner for Many Values', '❌', '✅'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Truthy and Falsy Values',
      content:
        'JavaScript evaluates values as either truthy or falsy inside conditions. Understanding these values helps write cleaner code.',
    },

    {
      type: 'list',
      title: 'Falsy Values',
      items: ['false', '0', '"" (Empty String)', 'null', 'undefined', 'NaN'],
    },

    {
      type: 'paragraph',
      title: 'Everything Else is Truthy',
      content:
        'Any value other than the falsy values is considered truthy. Examples include non-empty strings, arrays, objects, and non-zero numbers.',
    },

    {
      type: 'code',
      title: 'Truthy & Falsy Example',
      language: 'javascript',
      code: `let username = "";

if (username) {
  console.log("Logged In");
} else {
  console.log("Guest");
}`,
    },

    {
      type: 'paragraph',
      title: 'Logical Operators with Conditions',
      content:
        'Logical operators allow you to combine multiple conditions into a single expression.',
    },

    {
      type: 'code',
      title: 'Logical Condition Example',
      language: 'javascript',
      code: `let age = 25;
let citizen = true;

if (age >= 18 && citizen) {
  console.log("Eligible to Vote");
}`,
    },

    {
      type: 'paragraph',
      title: 'Ternary Operator',
      content:
        'The ternary operator is a shorthand version of an if...else statement. It is useful when choosing between two values.',
    },

    {
      type: 'code',
      title: 'Ternary Operator Example',
      language: 'javascript',
      code: `let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);`,
    },

    {
      type: 'warning',
      title: 'Common Mistake',
      content:
        'Do not confuse the assignment operator (=) with the comparison operator (===). Accidentally using = inside an if condition can introduce bugs.',
    },

    {
      type: 'code',
      title: 'Incorrect vs Correct Comparison',
      language: 'javascript',
      code: `// ❌ Wrong
if (age = 18) {
  console.log("Adult");
}

// ✅ Correct
if (age === 18) {
  console.log("Adult");
}`,
    },

    {
      type: 'tip',
      title: 'Best Practices',
      content:
        'Keep conditions simple, avoid deeply nested if statements, use switch for multiple fixed values, and always prefer strict equality (===) over loose equality (==).',
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        'Conditional statements allow JavaScript programs to make decisions. The main conditional structures are if, else, else if, switch, and the ternary operator.',
    },
  ],

  quiz: [
    {
      question: 'Which statement executes code when a condition is true?',
      options: ['if', 'for', 'while', 'switch'],
      answer: 0,
    },
    {
      question: 'Which keyword is used to check multiple conditions?',
      options: ['else if', 'break', 'continue', 'default'],
      answer: 0,
    },
    {
      question:
        'Which statement is best for comparing one variable against multiple fixed values?',
      options: ['if', 'switch', 'while', 'for'],
      answer: 1,
    },
  ],

  previous: 'operators',

  next: 'loops',
};
