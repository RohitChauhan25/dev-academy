export const objects = {
  slug: 'objects',

  title: 'JavaScript Objects',

  description:
    'Learn how JavaScript objects work, how to create them, access properties, add methods, and work with nested objects.',

  level: 'Beginner',

  readingTime: '18 min',

  lesson: 'Lesson 11 of 40',

  sections: [
    {
      type: 'paragraph',
      title: 'What is an Object?',
      content:
        'An object is a collection of related data stored as key-value pairs. Objects help represent real-world entities like a user, product, or car by grouping related information together.',
    },

    {
      type: 'code',
      title: 'Creating an Object',
      language: 'javascript',
      code: `const person = {
  name: "John",
  age: 25,
  city: "London"
};

console.log(person);`,
    },

    {
      type: 'paragraph',
      title: 'Accessing Object Properties',
      content: 'Object properties can be accessed using dot notation or bracket notation.',
    },

    {
      type: 'code',
      title: 'Dot vs Bracket Notation',
      language: 'javascript',
      code: `const person = {
  name: "John",
  age: 25
};

console.log(person.name);
console.log(person["age"]);`,
    },

    {
      type: 'paragraph',
      title: 'Updating Properties',
      content: 'You can update an existing property by assigning a new value to it.',
    },

    {
      type: 'code',
      title: 'Update Object Property',
      language: 'javascript',
      code: `const person = {
  name: "John",
  age: 25
};

person.age = 26;

console.log(person);`,
    },

    {
      type: 'paragraph',
      title: 'Adding New Properties',
      content: 'JavaScript objects are dynamic, meaning new properties can be added at any time.',
    },

    {
      type: 'code',
      title: 'Add New Property',
      language: 'javascript',
      code: `const person = {
  name: "John"
};

person.country = "India";

console.log(person);`,
    },

    {
      type: 'paragraph',
      title: 'Deleting Properties',
      content: 'Use the delete operator to remove a property from an object.',
    },

    {
      type: 'code',
      title: 'Delete Property',
      language: 'javascript',
      code: `const person = {
  name: "John",
  age: 25
};

delete person.age;

console.log(person);`,
    },

    {
      type: 'paragraph',
      title: 'Nested Objects',
      content:
        'Objects can contain other objects, allowing you to represent complex data structures.',
    },

    {
      type: 'code',
      title: 'Nested Object Example',
      language: 'javascript',
      code: `const student = {
  name: "Alice",
  address: {
    city: "Delhi",
    country: "India"
  }
};

console.log(student.address.city);`,
    },

    {
      type: 'paragraph',
      title: 'Object Methods',
      content:
        'Functions stored inside objects are called methods. They allow objects to perform actions.',
    },

    {
      type: 'code',
      title: 'Creating a Method',
      language: 'javascript',
      code: `const person = {
  name: "John",

  greet() {
    console.log("Hello " + this.name);
  }
};

person.greet();`,
    },

    {
      type: 'paragraph',
      title: 'Looping Through Objects',
      content: "Use the for...in loop to iterate through an object's properties.",
    },

    {
      type: 'code',
      title: 'for...in Loop',
      language: 'javascript',
      code: `const person = {
  name: "John",
  age: 25,
  city: "London"
};

for (const key in person) {
  console.log(key, person[key]);
}`,
    },

    {
      type: 'table',
      title: 'Useful Object Methods',
      headers: ['Method', 'Description'],
      rows: [
        ['Object.keys()', 'Returns an array of property names'],
        ['Object.values()', 'Returns an array of property values'],
        ['Object.entries()', 'Returns key-value pairs as arrays'],
        ['Object.assign()', 'Copies properties from one object to another'],
        ['hasOwnProperty()', 'Checks if a property exists'],
      ],
    },

    {
      type: 'note',
      variant: 'tip',
      title: 'Remember',
      content:
        'Objects are reference types. Assigning one object to another variable copies the reference, not the actual object.',
    },
  ],

  interviewQuestions: [
    {
      question: 'What is an object in JavaScript?',
      answer: 'An object is a collection of key-value pairs used to store related data.',
    },
    {
      question: 'What is the difference between dot notation and bracket notation?',
      answer:
        'Dot notation accesses properties directly, while bracket notation is useful for dynamic property names.',
    },
    {
      question: 'How do you delete a property from an object?',
      answer: 'Using the delete operator.',
    },
    {
      question: 'What does Object.keys() return?',
      answer: 'An array containing all property names.',
    },
    {
      question: 'What is the purpose of the this keyword inside an object method?',
      answer: 'It refers to the current object that owns the method.',
    },
  ],

  quiz: [
    {
      question: 'How are object properties stored?',
      options: ['As key-value pairs', 'As indexes', 'As arrays', 'As variables'],
      answer: 0,
    },
    {
      question: 'Which notation is useful for dynamic property names?',
      options: ['Dot notation', 'Bracket notation', 'Parentheses', 'Angle brackets'],
      answer: 1,
    },
    {
      question: 'Which method returns all property names?',
      options: ['Object.values()', 'Object.entries()', 'Object.keys()', 'Object.assign()'],
      answer: 2,
    },
  ],

  previous: 'arrays',

  next: 'strings',
};
