import { Tutorial } from '@/app/types/tutorial';

export const setup: Tutorial = {
  slug: 'setup',

  title: 'CSS Setup',

  description:
    'Learn the three ways to add CSS to a page: inline styles, internal stylesheets, and external stylesheets.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 2 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Three Ways to Add CSS',
      content:
        'CSS can be applied to HTML in three ways: inline (directly on an element), internal (inside a <style> tag), or external (in a separate .css file linked to the page).',
    },

    {
      type: 'code',
      title: 'Inline Styles',
      language: 'html',
      code: `<p style="color: red; font-weight: bold;">
  This paragraph uses an inline style.
</p>`,
    },

    {
      type: 'code',
      title: 'Internal Stylesheet',
      language: 'html',
      code: `<style>
  p {
    color: green;
    font-weight: bold;
  }
</style>

<p>This paragraph is styled by an internal stylesheet.</p>`,
    },

    {
      type: 'code',
      title: 'External Stylesheet',
      language: 'html',
      code: `<!-- In a real project, this rule would live in styles.css -->
<!-- and be linked with: <link rel="stylesheet" href="styles.css" /> -->
<!-- It's inlined below only so this preview can render it. -->
<style>
  p {
    color: blue;
    font-weight: bold;
  }
</style>

<p>This paragraph is styled as if from an external stylesheet.</p>`,
    },

    {
      type: 'note',
      title: 'Why This Preview Uses an Inline <style>',
      content:
        'Live previews on this site render a single self-contained snippet, so they can’t fetch a separate styles.css file. The CSS above is shown inline purely to demonstrate the result — in a real project it would live in its own .css file and be linked with <link rel="stylesheet" href="styles.css" />.',
    },

    {
      type: 'table',
      title: 'Comparing the Three Methods',
      headers: ['Method', 'Scope', 'Typical Use'],
      rows: [
        ['Inline', 'A single element', 'Quick one-off overrides, rarely recommended'],
        ['Internal', 'The current page only', 'Small demos or single-page prototypes'],
        ['External', 'Every page that links the file', 'Real projects — reusable and cacheable'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Which Should You Use?',
      content:
        'External stylesheets are the standard for real projects: the browser caches the file, styles stay consistent across many pages, and HTML and CSS remain cleanly separated.',
    },

    {
      type: 'warning',
      title: 'Avoid Inline Styles',
      content:
        'Inline styles are hard to maintain and override, and they mix content with presentation. Reserve them for cases where styles are generated dynamically by JavaScript.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Start every real project with a single external stylesheet linked in the <head>. Split it into multiple files as the project grows, if needed.',
    },
  ],

  quiz: [
    {
      question: 'Which method loads CSS from a separate .css file?',
      options: ['Inline', 'Internal', 'External', 'Embedded'],
      answer: 2,
    },
    {
      question: 'Where is an internal stylesheet written?',
      options: [
        'In a style attribute on the element',
        'Inside a <style> tag in the document',
        'In a separate .css file',
        'In the URL',
      ],
      answer: 1,
    },
    {
      question: 'Why are inline styles generally discouraged?',
      options: [
        'They load slower than external CSS',
        'They mix content with presentation and are hard to maintain/override',
        'Browsers do not support them',
        'They only work in Chrome',
      ],
      answer: 1,
    },
  ],

  previous: 'introduction',
  next: 'syntax',
};
