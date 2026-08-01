import { Tutorial } from '@/app/types/tutorial';

export const introduction: Tutorial = {
  slug: 'introduction',

  title: 'HTML Introduction',

  description:
    'Understand what HTML is, why every website depends on it, and how it works together with CSS and JavaScript to build the web.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 1 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'What is HTML?',
      content:
        'HTML (HyperText Markup Language) is the standard markup language used to structure content on the web. It describes the meaning of content — headings, paragraphs, links, images, forms — using elements, so browsers know how to display it.',
    },

    {
      type: 'paragraph',
      title: 'A Brief History',
      content:
        'HTML was created by Tim Berners-Lee in 1991 as a way to share documents over the internet. It has evolved through several versions since then, with HTML5 (released in 2014) being the current standard, adding native support for audio, video, semantic elements, and more.',
    },

    {
      type: 'table',
      title: 'Quick Facts',
      headers: ['Feature', 'Value'],
      rows: [
        ['Created By', 'Tim Berners-Lee'],
        ['First Released', '1991'],
        ['Current Version', 'HTML5'],
        ['Maintained By', 'WHATWG / W3C'],
        ['File Extension', '.html or .htm'],
      ],
    },

    {
      type: 'paragraph',
      title: 'HTML, CSS, and JavaScript',
      content:
        'Every website is built from three core technologies. HTML provides structure and meaning, CSS controls presentation and layout, and JavaScript adds interactivity and behavior. HTML is always the starting point.',
    },

    {
      type: 'list',
      title: 'The Three Layers of the Web',
      items: [
        'HTML — Structure and content ("what")',
        'CSS — Styling and layout ("how it looks")',
        'JavaScript — Behavior and interactivity ("how it acts")',
      ],
    },

    {
      type: 'code',
      title: 'Your First HTML Page',
      language: 'html',
      code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, DevAcademy!</h1>
  </body>
</html>`,
    },

    {
      type: 'paragraph',
      title: 'How Browsers Read HTML',
      content:
        'When you open an HTML file, the browser parses the markup from top to bottom, builds a tree of elements called the DOM (Document Object Model), and renders it visually on screen.',
    },

    {
      type: 'note',
      title: 'HTML is Not a Programming Language',
      content:
        'HTML is a markup language, not a programming language — it has no logic, loops, or conditions. It only describes structure. Logic and behavior come from JavaScript.',
    },

    {
      type: 'list',
      title: 'Why Learn HTML?',
      items: [
        'It is the foundation of every website.',
        'Required before learning CSS or JavaScript.',
        'Used by every frontend framework (React, Vue, Angular).',
        'Essential for SEO and accessibility.',
        'Simple to start, but powerful when combined with CSS and JS.',
      ],
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Write semantic, well-structured HTML from the start. It makes your pages easier to style, more accessible, and better understood by search engines.',
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        'HTML is the backbone of every web page. It defines structure and meaning, works alongside CSS and JavaScript, and is the very first thing you need to learn to become a web developer.',
    },
  ],

  quiz: [
    {
      question: 'What does HTML stand for?',
      options: [
        'Hyper Transfer Markup Language',
        'HyperText Markup Language',
        'High Text Modern Language',
        'Home Tool Markup Language',
      ],
      answer: 1,
    },
    {
      question: 'Who created HTML?',
      options: ['Brendan Eich', 'Dennis Ritchie', 'Tim Berners-Lee', 'Guido van Rossum'],
      answer: 2,
    },
    {
      question: 'Which technology is responsible for styling a web page?',
      options: ['HTML', 'CSS', 'JavaScript', 'JSON'],
      answer: 1,
    },
  ],

  next: 'setup',
};
