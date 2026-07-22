export const strings = {
  slug: 'strings',

  title: 'JavaScript Strings',

  description:
    'Learn how to work with strings in JavaScript, create them, access characters, use common string methods, and perform everyday text manipulation.',

  level: 'Beginner',

  readingTime: '18 min',

  lesson: 'Lesson 15 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a String?',
      content:
        'A string is a sequence of characters used to represent text. Strings can contain letters, numbers, symbols, and spaces. In JavaScript, strings are enclosed in single quotes, double quotes, or backticks.',
    },

    {
      type: 'code',
      title: 'Creating Strings',
      language: 'javascript',
      code: `const firstName = "John";
const lastName = 'Doe';
const message = \`Welcome to DevAcademy\`;

console.log(firstName);
console.log(lastName);
console.log(message);`,
    },

    {
      type: 'paragraph',
      title: 'Accessing Characters',
      content:
        'Each character in a string has an index starting from 0. You can access characters using square brackets or the charAt() method.',
    },

    {
      type: 'code',
      title: 'Access Characters',
      language: 'javascript',
      code: `const language = "JavaScript";

console.log(language[0]);
console.log(language[4]);
console.log(language.charAt(2));`,
    },

    {
      type: 'paragraph',
      title: 'String Length',
      content:
        'The length property returns the total number of characters in a string.',
    },

    {
      type: 'code',
      title: 'Finding String Length',
      language: 'javascript',
      code: `const text = "JavaScript";

console.log(text.length);`,
    },

    {
      type: 'paragraph',
      title: 'Common String Methods',
      content:
        'JavaScript provides many built-in methods for searching, modifying, and extracting text.',
    },

    {
      type: 'table',
      title: 'Popular String Methods',
      headers: ['Method', 'Description'],
      rows: [
        ['toUpperCase()', 'Converts string to uppercase'],
        ['toLowerCase()', 'Converts string to lowercase'],
        ['trim()', 'Removes whitespace from both ends'],
        ['includes()', 'Checks if text exists'],
        ['startsWith()', 'Checks beginning of string'],
        ['endsWith()', 'Checks end of string'],
        ['slice()', 'Extracts part of a string'],
        ['replace()', 'Replaces text'],
        ['split()', 'Converts string into an array'],
      ],
    },

    {
      type: 'code',
      title: 'Using String Methods',
      language: 'javascript',
      code: `const course = " JavaScript ";

console.log(course.trim());
console.log(course.toUpperCase());
console.log(course.includes("Script"));
console.log(course.replace("Java", "Type"));`,
    },

    {
      type: 'paragraph',
      title: 'Template Literals',
      content:
        'Template literals use backticks and allow variables and expressions to be embedded using ${}. They also support multi-line strings.',
    },

    {
      type: 'code',
      title: 'Template Literal Example',
      language: 'javascript',
      code: `const name = "Rohit";
const technology = "JavaScript";

console.log(\`Hello \${name}, welcome to \${technology}!\`);`,
    },

    {
      type: 'paragraph',
      title: 'Splitting a String',
      content:
        'The split() method divides a string into an array using a specified separator.',
    },

    {
      type: 'code',
      title: 'split() Example',
      language: 'javascript',
      code: `const colors = "Red,Green,Blue";

const result = colors.split(",");

console.log(result);`,
    },

    {
      type: 'paragraph',
      title: 'Joining Strings',
      content:
        'Strings can be combined using the + operator or template literals. Template literals are preferred because they are more readable.',
    },

    {
      type: 'code',
      title: 'Concatenation',
      language: 'javascript',
      code: `const firstName = "John";
const lastName = "Doe";

console.log(firstName + " " + lastName);

console.log(\`\${firstName} \${lastName}\`);`,
    },

    {
      type: 'note',
      variant: 'tip',
      title: 'Best Practice',
      content:
        'Prefer template literals over string concatenation because they are easier to read and maintain, especially when working with variables.',
    },
  ],

  quiz: [
    {
      question: 'Which property returns the number of characters in a string?',
      options: ['size', 'count', 'length', 'index'],
      answer: 2,
    },
    {
      question: 'Which method converts a string to uppercase?',
      options: ['uppercase()', 'toUpperCase()', 'upper()', 'capitalize()'],
      answer: 1,
    },
    {
      question: 'Which method converts a string into an array?',
      options: ['slice()', 'split()', 'replace()', 'join()'],
      answer: 1,
    },
  ],

  previous: 'objects',

  next: 'array-methods',
};
