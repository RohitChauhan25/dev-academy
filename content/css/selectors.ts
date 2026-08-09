import { Tutorial } from '@/app/types/tutorial';

export const selectors: Tutorial = {
  slug: 'selectors',

  title: 'CSS Selectors',

  description:
    'Learn how to target elements using type, class, ID, universal, and attribute selectors.',

  level: 'Beginner',

  readingTime: '16 min',

  lesson: 'Lesson 4 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What Selectors Do',
      content:
        'A selector determines which HTML elements a rule applies to. CSS offers many kinds of selectors, from simple element names to precise attribute matching.',
    },

    {
      type: 'table',
      title: 'Basic Selector Types',
      headers: ['Selector', 'Example', 'Targets'],
      rows: [
        ['Type', 'p', 'Every <p> element'],
        ['Class', '.highlight', 'Every element with class="highlight"'],
        ['ID', '#header', 'The single element with id="header"'],
        ['Universal', '*', 'Every element on the page'],
        ['Attribute', '[type="email"]', 'Every element with a matching attribute'],
      ],
    },

    {
      type: 'code',
      title: 'Type, Class, and ID Selectors',
      language: 'html',
      code: `<style>
  p {
    color: #333;
  }
  .highlight {
    background: yellow;
  }
  #main-title {
    font-size: 28px;
  }
</style>

<h1 id="main-title">Main Title</h1>
<p>Regular paragraph.</p>
<p class="highlight">Highlighted paragraph.</p>`,
    },

    {
      type: 'paragraph',
      title: 'Attribute Selectors',
      content:
        'Attribute selectors target elements based on the presence or value of an HTML attribute, useful for styling form inputs by type without adding extra classes.',
    },

    {
      type: 'code',
      title: 'Attribute Selectors Example',
      language: 'html',
      code: `<style>
  input[type="email"] {
    border-color: steelblue;
  }
  a[target="_blank"] {
    color: darkorange;
  }
</style>

<input type="email" placeholder="you@example.com" />
<a href="https://example.com" target="_blank">External Link</a>`,
    },

    {
      type: 'paragraph',
      title: 'Grouping Selectors',
      content:
        'Multiple selectors can share the same declaration block by separating them with commas, avoiding repeated rules.',
    },

    {
      type: 'code',
      title: 'Grouped Selectors',
      language: 'html',
      code: `<style>
  h1, h2, h3 {
    font-family: Georgia, serif;
    color: #222;
  }
</style>

<h1>Heading 1</h1>
<h2>Heading 2</h2>`,
    },

    {
      type: 'note',
      title: 'Class vs ID Selectors',
      content:
        'Prefer class selectors for styling — they can be reused across many elements. Reserve ID selectors for unique, one-off cases, since an id must be unique per page and carries higher specificity that can be harder to override later.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Default to class selectors for anything reusable. Keep selectors as simple and flat as possible — deeply nested selectors become fragile and hard to override.',
    },
  ],

  quiz: [
    {
      question: 'Which selector targets every element with class="card"?',
      options: ['#card', '.card', '*card', 'card'],
      answer: 1,
    },
    {
      question: 'Which selector targets the single element with a given id?',
      options: ['.id-name', '#id-name', '[id-name]', '*id-name'],
      answer: 1,
    },
    {
      question: 'How do you apply the same styles to h1, h2, and h3 without repeating the rule?',
      options: [
        'h1 h2 h3 { ... }',
        'h1, h2, h3 { ... }',
        'h1 + h2 + h3 { ... }',
        'h1 > h2 > h3 { ... }',
      ],
      answer: 1,
    },
  ],

  previous: 'syntax',
  next: 'colors',
};
