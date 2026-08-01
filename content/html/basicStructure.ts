import { Tutorial } from '@/app/types/tutorial';

export const basicStructure: Tutorial = {
  slug: 'basic-structure',

  title: 'HTML Document Structure',

  description:
    'Learn the required building blocks of every HTML document: the doctype, html, head, and body elements.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 3 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'The Skeleton of Every Page',
      content:
        'Every HTML document follows the same basic skeleton. Understanding each part is essential before writing any real content.',
    },

    {
      type: 'code',
      title: 'Basic Document Structure',
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page Title</title>
  </head>
  <body>
    <!-- Visible content goes here -->
  </body>
</html>`,
    },

    {
      type: 'table',
      title: 'Structure Elements',
      headers: ['Element', 'Purpose'],
      rows: [
        ['<!DOCTYPE html>', 'Tells the browser this is an HTML5 document'],
        ['<html>', 'The root element that wraps the entire page'],
        ['<head>', 'Contains metadata, not shown directly on the page'],
        ['<title>', 'Sets the text shown in the browser tab'],
        ['<body>', 'Contains all visible content of the page'],
      ],
    },

    {
      type: 'paragraph',
      title: 'The Doctype',
      content:
        '<!DOCTYPE html> must be the very first line of an HTML file. It tells the browser to render the page in standards mode using the HTML5 specification, avoiding inconsistent "quirks mode" rendering.',
    },

    {
      type: 'paragraph',
      title: 'The html Element',
      content:
        'The <html> element is the root of the document — every other element is nested inside it. The lang attribute (e.g. lang="en") declares the page language, which helps screen readers and search engines.',
    },

    {
      type: 'paragraph',
      title: 'The head Element',
      content:
        'The <head> holds information about the document that is not displayed directly: the title, character encoding, linked stylesheets, scripts, and meta tags for SEO.',
    },

    {
      type: 'paragraph',
      title: 'The body Element',
      content:
        'The <body> contains everything a visitor actually sees and interacts with: text, images, links, forms, and other elements.',
    },

    {
      type: 'note',
      title: 'Character Encoding',
      content:
        '<meta charset="UTF-8" /> should be the first element inside <head>. It ensures special characters, emojis, and text in different languages display correctly.',
    },

    {
      type: 'warning',
      title: 'Only One of Each',
      content:
        'A valid HTML document has exactly one <html>, one <head>, and one <body> element — never more than one of each.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always start new HTML files from this same skeleton. Most editors can generate it automatically — in VS Code, type an exclamation mark (!) and press Tab inside an empty .html file.',
    },
  ],

  quiz: [
    {
      question: 'Which line must appear first in every HTML5 document?',
      options: ['<html>', '<!DOCTYPE html>', '<head>', '<meta charset="UTF-8" />'],
      answer: 1,
    },
    {
      question: 'Where does the text shown in the browser tab come from?',
      options: ['<body>', '<header>', '<title>', '<meta>'],
      answer: 2,
    },
    {
      question: 'How many <body> elements should a valid HTML document have?',
      options: ['Zero', 'Exactly one', 'Two', 'As many as needed'],
      answer: 1,
    },
  ],

  previous: 'setup',
  next: 'elements-and-tags',
};
