import { Tutorial } from '@/app/types/tutorial';

export const classesAndIds: Tutorial = {
  slug: 'classes-and-ids',

  title: 'Classes & IDs',

  description:
    'Learn how to target elements for CSS styling and JavaScript using the class and id attributes.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 19 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'Why We Need Selectors',
      content:
        'To style or manipulate specific elements with CSS or JavaScript, you first need a way to target them. The class and id attributes are the two most common hooks for this.',
    },

    {
      type: 'code',
      title: 'class and id',
      language: 'html',
      code: `<div id="main-banner" class="banner highlight">
  Welcome to DevAcademy!
</div>`,
    },

    {
      type: 'table',
      title: 'class vs id',
      headers: ['', 'class', 'id'],
      rows: [
        ['Uniqueness', 'Can be reused on many elements', 'Must be unique on the page'],
        ['Multiple values', 'Yes, space-separated', 'No, only one value'],
        ['CSS selector', '.classname', '#idname'],
        ['Typical use', 'Reusable styling', 'Unique anchors, JS hooks, ARIA references'],
      ],
    },

    {
      type: 'code',
      title: 'Selecting in CSS',
      language: 'html',
      code: `<style>
  .highlight {
    background: yellow;
  }
  #main-banner {
    font-size: 1.5rem;
  }
</style>`,
    },

    {
      type: 'paragraph',
      title: 'Multiple Classes',
      content:
        'An element can have several classes separated by spaces. This lets you compose small, reusable style rules instead of writing one large class per component.',
    },

    {
      type: 'code',
      title: 'Multiple Classes',
      language: 'html',
      code: `<button class="btn btn-primary btn-large">Sign Up</button>`,
    },

    {
      type: 'paragraph',
      title: 'Using id as an Anchor',
      content:
        'Besides styling, id is commonly used as a target for same-page links (<a href="#section">) and as a hook for JavaScript’s document.getElementById().',
    },

    {
      type: 'warning',
      title: 'Duplicate IDs Are Invalid',
      content:
        'Using the same id value on more than one element in a page is invalid HTML. It can cause CSS to apply inconsistently and break JavaScript methods that expect a single match.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Default to class for styling since it’s reusable across many elements. Use id sparingly — only when you need a guaranteed single, unique reference.',
    },
  ],

  quiz: [
    {
      question: 'Which attribute must be unique across the entire page?',
      options: ['class', 'id', 'name', 'style'],
      answer: 1,
    },
    {
      question: 'How do you write a CSS selector that targets a class named "card"?',
      options: ['#card', '.card', '*card', '@card'],
      answer: 1,
    },
    {
      question: 'Can a single element have more than one class?',
      options: ['No, only one', 'Yes, separated by spaces', 'Yes, but only two max', 'Only in HTML5'],
      answer: 1,
    },
  ],

  previous: 'block-vs-inline',
  next: 'html-entities',
};
