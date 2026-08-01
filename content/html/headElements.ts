import { Tutorial } from '@/app/types/tutorial';

export const headElements: Tutorial = {
  slug: 'head-elements',

  title: 'Head Elements',

  description:
    'Explore what belongs inside the head element: title, meta, link, style, and script.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 21 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'What Goes in the head',
      content:
        'The <head> holds metadata about the document — information that configures the page but is not rendered directly in the body.',
    },

    {
      type: 'table',
      title: 'Common head Elements',
      headers: ['Element', 'Purpose'],
      rows: [
        ['<title>', 'The text shown in the browser tab and search results'],
        ['<meta>', 'Metadata like character encoding, viewport, and page description'],
        ['<link>', 'Links external resources, most commonly a CSS stylesheet or favicon'],
        ['<style>', 'Embeds CSS directly in the document'],
        ['<script>', 'Embeds or links JavaScript'],
        ['<base>', 'Sets a base URL for all relative links on the page'],
      ],
    },

    {
      type: 'code',
      title: 'A Typical head',
      language: 'html',
      code: `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DevAcademy — Learn to Code</title>
  <meta name="description" content="Free tutorials for HTML, CSS, and JavaScript." />
  <link rel="stylesheet" href="styles.css" />
  <link rel="icon" href="favicon.ico" />
  <script src="app.js" defer></script>
</head>`,
    },

    {
      type: 'paragraph',
      title: 'The Viewport Meta Tag',
      content:
        'The viewport meta tag controls how a page scales on mobile devices. Without it, mobile browsers render the page at a wide desktop width and zoom out, breaking responsive layouts.',
    },

    {
      type: 'code',
      title: 'Viewport Meta Tag',
      language: 'html',
      code: `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`,
    },

    {
      type: 'paragraph',
      title: 'Linking Stylesheets and Scripts',
      content:
        'Stylesheets are linked with <link rel="stylesheet">, while scripts can be linked with <script src="...">. Adding defer to a script tells the browser to run it only after the HTML has finished parsing.',
    },

    {
      type: 'code',
      title: 'defer vs async',
      language: 'html',
      code: `<!-- Runs after parsing completes, in order -->
<script src="app.js" defer></script>

<!-- Runs as soon as it downloads, order not guaranteed -->
<script src="analytics.js" async></script>`,
    },

    {
      type: 'note',
      title: 'style vs link',
      content:
        '<style> embeds CSS rules inline in the document, while <link rel="stylesheet"> loads CSS from a separate file. External stylesheets are cacheable and easier to maintain across multiple pages.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always include charset, viewport, and a meaningful title and description in the head — they directly affect rendering, mobile usability, and SEO.',
    },
  ],

  quiz: [
    {
      question: 'Which meta tag controls how a page scales on mobile devices?',
      options: ['charset', 'viewport', 'description', 'robots'],
      answer: 1,
    },
    {
      question: 'What is the difference between <style> and <link rel="stylesheet">?',
      options: [
        'There is no difference',
        '<style> embeds CSS inline, <link> loads CSS from an external file',
        '<link> only works with JavaScript',
        '<style> is deprecated',
      ],
      answer: 1,
    },
    {
      question: 'What does the defer attribute on a <script> tag do?',
      options: [
        'Prevents the script from ever running',
        'Runs the script before the HTML is parsed',
        'Delays execution until after HTML parsing completes',
        'Loads the script from a CDN',
      ],
      answer: 2,
    },
  ],

  previous: 'html-entities',
  next: 'iframes',
};
