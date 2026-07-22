export const loops = {
  slug: 'loops',

  title: 'JavaScript Loops',

  description:
    'Learn how to execute a block of code multiple times using for, while, do...while, for...of, and for...in loops with practical examples.',

  level: 'Beginner',

  readingTime: '20 min',

  lesson: 'Lesson 9 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'What are Loops?',
      content:
        'Loops allow you to execute the same block of code multiple times without writing duplicate code. They are commonly used to process arrays, repeat tasks, and automate repetitive operations.',
    },

    {
      type: 'list',
      title: 'Why Use Loops?',
      items: [
        'Avoid writing repetitive code',
        'Process arrays and objects',
        'Generate patterns',
        'Automate repetitive tasks',
        'Improve code readability',
      ],
    },

    {
      type: 'paragraph',
      title: 'The for Loop',
      content:
        'The for loop is the most commonly used loop. It consists of initialization, condition, and increment/decrement expressions.',
    },

    {
      type: 'code',
      title: 'for Loop Example',
      language: 'javascript',
      code: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,
    },

    {
      type: 'paragraph',
      title: 'The while Loop',
      content:
        'The while loop keeps executing as long as the specified condition is true. It is useful when the number of iterations is unknown.',
    },

    {
      type: 'code',
      title: 'while Loop Example',
      language: 'javascript',
      code: `let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}`,
    },

    {
      type: 'paragraph',
      title: 'The do...while Loop',
      content:
        'Unlike the while loop, the do...while loop executes the code block at least once before checking the condition.',
    },

    {
      type: 'code',
      title: 'do...while Example',
      language: 'javascript',
      code: `let number = 1;

do {
  console.log(number);
  number++;
} while (number <= 5);`,
    },

    {
      type: 'paragraph',
      title: 'The for...of Loop',
      content:
        'The for...of loop is used to iterate over iterable objects such as arrays and strings.',
    },

    {
      type: 'code',
      title: 'for...of Example',
      language: 'javascript',
      code: `const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}`,
    },

    {
      type: 'paragraph',
      title: 'The for...in Loop',
      content:
        'The for...in loop is used to iterate over the keys of an object.',
    },

    {
      type: 'code',
      title: 'for...in Example',
      language: 'javascript',
      code: `const user = {
  name: "Rohit",
  age: 25,
  city: "Delhi"
};

for (const key in user) {
  console.log(key, user[key]);
}`,
    },

    {
      type: 'paragraph',
      title: 'break Statement',
      content:
        'The break statement immediately terminates a loop when a specific condition is met.',
    },

    {
      type: 'code',
      title: 'break Example',
      language: 'javascript',
      code: `for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}`,
    },

    {
      type: 'paragraph',
      title: 'continue Statement',
      content:
        'The continue statement skips the current iteration and moves to the next iteration of the loop.',
    },

    {
      type: 'code',
      title: 'continue Example',
      language: 'javascript',
      code: `for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}`,
    },

    {
      type: 'table',
      title: 'Comparison of JavaScript Loops',
      headers: ['Loop', 'Best Used For'],
      rows: [
        ['for', 'Known number of iterations'],
        ['while', 'Unknown number of iterations'],
        ['do...while', 'Run at least once'],
        ['for...of', 'Arrays & Strings'],
        ['for...in', 'Objects'],
      ],
    },

    {
      type: 'tip',
      title: 'Best Practices',
      content:
        'Use for...of for arrays, for...in for objects, avoid infinite loops, and always ensure your loop condition eventually becomes false.',
    },

    {
      type: 'warning',
      title: 'Common Mistake',
      content:
        'Forgetting to update the loop variable can cause an infinite loop, making your program unresponsive.',
    },

    {
      type: 'code',
      title: 'Infinite Loop Example',
      language: 'javascript',
      code: `// ❌ Infinite Loop

let i = 1;

while (i <= 5) {
  console.log(i);
}`,
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        'JavaScript provides multiple looping statements including for, while, do...while, for...of, and for...in. Choosing the correct loop improves readability and performance.',
    },
  ],

  quiz: [
    {
      question:
        'Which loop is commonly used when the number of iterations is known?',
      options: ['for', 'while', 'do...while', 'switch'],
      answer: 0,
    },
    {
      question: 'Which loop is best for iterating over arrays?',
      options: ['for...of', 'for...in', 'while', 'switch'],
      answer: 0,
    },
    {
      question: 'Which statement skips the current iteration?',
      options: ['break', 'continue', 'return', 'exit'],
      answer: 1,
    },
  ],

  previous: 'conditionals',

  next: 'functions',
};
