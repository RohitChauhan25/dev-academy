import { Tutorial } from '@/app/types/tutorial';

export const setup: Tutorial = {
  slug: 'setup',

  title: 'HTML Setup',

  description:
    'Set up your development environment and create, save, and open your first HTML file in a browser.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 2 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'What You Need',
      content:
        'Writing HTML requires no installation, compiler, or server. You only need a text editor and a web browser — both of which you likely already have.',
    },

    {
      type: 'list',
      title: 'Recommended Tools',
      items: [
        'A code editor — Visual Studio Code is the most popular choice.',
        'A modern browser — Chrome, Firefox, or Edge.',
        'Optional: a Live Server extension to auto-refresh the page on save.',
      ],
    },

    {
      type: 'paragraph',
      title: 'Creating Your First File',
      content:
        'Create a new file named index.html. The .html extension tells your operating system and browser to treat the file as a web page.',
    },

    {
      type: 'code',
      title: 'index.html',
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>`,
    },

    {
      type: 'paragraph',
      title: 'Opening the File',
      content:
        'Double-click the file to open it in your default browser, or right-click it and choose "Open with" to pick a specific browser. You can also drag the file directly into an open browser window.',
    },

    {
      type: 'tip',
      title: 'Use a Live Server',
      content:
        'Install the "Live Server" extension in VS Code. It runs a local development server and automatically refreshes the browser every time you save a file — a huge time saver.',
    },

    {
      type: 'note',
      title: 'File Naming',
      content:
        'The homepage of most websites is conventionally named index.html because web servers automatically load that file when a folder is requested.',
    },

    {
      type: 'warning',
      title: 'Save With the Right Extension',
      content:
        'Make sure your editor saves the file as .html and not .txt. Some editors add a hidden .txt extension by default — enable "show file extensions" in your operating system to verify.',
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        'All you need to start writing HTML is a text editor and a browser. Create an .html file, add some markup, and open it in your browser to see the result instantly.',
    },
  ],

  quiz: [
    {
      question: 'What file extension is used for HTML files?',
      options: ['.htm only', '.html or .htm', '.markup', '.web'],
      answer: 1,
    },
    {
      question: 'Do you need to install a compiler to run HTML?',
      options: ['Yes, always', 'No, browsers render HTML directly', 'Only on Windows', 'Only for HTML5'],
      answer: 1,
    },
    {
      question: 'What is the conventional name for a website homepage file?',
      options: ['home.html', 'main.html', 'index.html', 'default.html'],
      answer: 2,
    },
  ],

  previous: 'introduction',
  next: 'basic-structure',
};
