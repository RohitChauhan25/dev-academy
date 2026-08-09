import { Tutorial } from '@/app/types/tutorial';

export const syntax: Tutorial = {
  slug: 'syntax',

  title: 'CSS Syntax',

  description:
    'Learn the anatomy of a CSS rule: selectors, declaration blocks, properties, values, and comments.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 3 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Anatomy of a Rule',
      content:
        'A CSS rule pairs a selector with a declaration block. The declaration block is wrapped in curly braces and contains one or more declarations, each made of a property and a value separated by a colon, ending with a semicolon.',
    },

    {
      type: 'code',
      title: 'Rule Structure',
      language: 'html',
      code: `<style>
  /* selector */
  h1 {
    /* declaration: property: value; */
    color: darkslateblue;
    font-size: 32px;
  }
</style>

<h1>Styled Heading</h1>`,
    },

    {
      type: 'table',
      title: 'Terminology',
      headers: ['Term', 'Meaning'],
      rows: [
        ['Selector', 'What element(s) the rule targets, e.g. h1'],
        ['Declaration Block', 'The { ... } containing all declarations'],
        ['Declaration', 'A single property: value; pair'],
        ['Property', 'The style aspect being changed, e.g. color'],
        ['Value', 'The setting applied to the property, e.g. darkslateblue'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Multiple Declarations',
      content:
        'A single rule can contain as many declarations as needed. Each one ends with a semicolon — while the last one technically doesn’t require it, it’s best practice to always include it.',
    },

    {
      type: 'code',
      title: 'Multiple Declarations Example',
      language: 'html',
      code: `<style>
  .card {
    background-color: #f4f4f4;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
</style>

<div class="card">A styled card</div>`,
    },

    {
      type: 'paragraph',
      title: 'Comments',
      content:
        'CSS comments are written between /* and */. They can span multiple lines and, like HTML comments, are ignored entirely by the browser.',
    },

    {
      type: 'code',
      title: 'CSS Comments',
      language: 'css',
      code: `/* This is a single-line comment */

/*
  This is a
  multi-line comment
*/
p {
  color: black; /* inline comment */
}`,
    },

    {
      type: 'warning',
      title: 'Missing Semicolons Break the Next Declaration',
      content:
        'Forgetting a semicolon merges the next declaration into the value of the previous one, silently breaking both. Always terminate every declaration with a semicolon.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Format one declaration per line and always end with a semicolon — it makes diffs cleaner and prevents subtle bugs when a new declaration is added later.',
    },
  ],

  quiz: [
    {
      question: 'What separates a property from its value in a declaration?',
      options: ['A semicolon', 'A colon', 'A comma', 'An equals sign'],
      answer: 1,
    },
    {
      question: 'What character ends a CSS declaration?',
      options: ['A period', 'A colon', 'A semicolon', 'A comma'],
      answer: 2,
    },
    {
      question: 'How are CSS comments written?',
      options: ['// comment', '<!-- comment -->', '/* comment */', '# comment'],
      answer: 2,
    },
  ],

  previous: 'setup',
  next: 'selectors',
};
