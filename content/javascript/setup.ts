import { Tutorial } from '@/app/types/tutorial';

export const setup: Tutorial = {
  slug: 'setup',

  title: 'Setup & Running JavaScript',

  description:
    'Learn how to set up your environment and run JavaScript using the browser, HTML files, and browser developer tools.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 2 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'Do You Need to Install JavaScript?',
      content:
        'No. JavaScript comes built into every modern web browser such as Chrome, Edge, Firefox, and Safari. You only need a browser and a code editor like Visual Studio Code to start learning.',
    },

    {
      type: 'list',
      title: 'Tools Required',
      items: [
        'Google Chrome (Recommended)',
        'Visual Studio Code',
        'Basic knowledge of HTML',
      ],
    },

    {
      type: 'paragraph',
      title: 'Method 1: Run JavaScript Using the Browser Console',
      content:
        'The fastest way to practice JavaScript is by using the browser Developer Console. It allows you to execute JavaScript instantly without creating any files.',
    },

    {
      type: 'code',
      title: 'Example',
      language: 'javascript',
      code: `console.log("Hello, DevAcademy!");`,
    },

    {
      type: 'note',
      title: 'How to Open the Console',
      content:
        'Press F12 or Ctrl + Shift + I (Windows/Linux) or Cmd + Option + I (Mac), then open the Console tab.',
    },

    {
      type: 'paragraph',
      title: 'Method 2: Run JavaScript Inside an HTML File',
      content:
        'JavaScript is commonly written inside HTML files using the <script> tag.',
    },

    {
      type: 'code',
      title: 'index.html',
      language: 'html',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Demo</title>
</head>
<body>

  <h1>Hello JavaScript</h1>

  <script >
    console.log("Welcome to DevAcademy");
  </script>

</body>
</html>`,
    },

    {
      type: 'paragraph',
      title: 'Method 3: External JavaScript File',
      content:
        'In real-world projects, JavaScript is usually written in separate .js files and linked to the HTML document.',
    },

    {
      type: 'code',
      title: 'index.html',
      language: 'html',
      code: `<script src="script.js"></script>`,
    },

    {
      type: 'code',
      title: 'script.js',
      language: 'javascript',
      code: `console.log("JavaScript Loaded Successfully");`,
    },

    {
      type: 'tip',
      title: 'Why Use External Files?',
      content:
        'Keeping JavaScript in separate files improves code organization, readability, and reusability. This is the standard practice in professional projects.',
    },

    {
      type: 'paragraph',
      title: 'Method 4: Using Visual Studio Code',
      content:
        'Visual Studio Code is one of the most popular code editors for JavaScript development. Create an HTML file and a JavaScript file, write your code, and open the HTML file in a browser to see the output.',
    },

    {
      type: 'list',
      title: 'Steps',
      items: [
        'Create a new folder.',
        'Create index.html.',
        'Create script.js.',
        'Link script.js using the script tag.',
        'Open index.html in your browser.',
        'Check the output in the browser console.',
      ],
    },

    {
      type: 'warning',
      title: 'Common Mistakes',
      content:
        'Many beginners forget to link the JavaScript file correctly or use the wrong file name. Always ensure the src attribute matches the actual file name.',
    },

    {
      type: 'table',
      title: 'Ways to Run JavaScript',
      headers: ['Method', 'Best For'],
      rows: [
        ['Browser Console', 'Quick Testing'],
        ['HTML Script Tag', 'Learning Basics'],
        ['External JS File', 'Real Projects'],
        ['Node.js', 'Backend Development'],
      ],
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use the browser console to experiment with small code snippets, but use external JavaScript files when building applications.',
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        'JavaScript can run directly in the browser without installation. During development, developers usually write JavaScript in external files and use browser developer tools for debugging.',
    },
  ],

  quiz: [
    {
      question: 'Which HTML tag is used to include JavaScript?',
      options: ['<javascript>', '<script>', '<js>', '<code>'],
      answer: 1,
    },
    {
      question: 'Which shortcut opens Developer Tools in Chrome (Windows)?',
      options: ['F12', 'Ctrl + C', 'Ctrl + Z', 'Alt + F4'],
      answer: 0,
    },
    {
      question: 'Which method is recommended for real-world projects?',
      options: [
        'Browser Console',
        'Inline JavaScript',
        'External JavaScript File',
        'Bookmark',
      ],
      answer: 2,
    },
  ],

  previous: 'introduction',

  next: 'comments',
};
