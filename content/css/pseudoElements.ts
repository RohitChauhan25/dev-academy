import { Tutorial } from '@/app/types/tutorial';

export const pseudoElements: Tutorial = {
  slug: 'pseudo-elements',

  title: 'Pseudo-elements',

  description:
    'Learn how to style a specific part of an element, or insert generated content, using ::before, ::after, and other pseudo-elements.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 19 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Pseudo-elements vs Pseudo-classes',
      content:
        'While a pseudo-class targets an existing element in a certain state, a pseudo-element targets a specific part of an element, or inserts content that doesn’t exist in the HTML at all. Pseudo-elements use a double colon, e.g. ::before.',
    },

    {
      type: 'code',
      title: '::before and ::after',
      language: 'html',
      code: `<style>
  .quote::before {
    content: "\\201C"; /* opening curly quote */
    font-size: 24px;
    color: steelblue;
  }
  .quote::after {
    content: "\\201D"; /* closing curly quote */
    font-size: 24px;
    color: steelblue;
  }
</style>

<p class="quote">This text is wrapped in generated quote marks.</p>`,
    },

    {
      type: 'paragraph',
      title: 'The content Property',
      content:
        '::before and ::after require a content property to appear at all — even content: "" (an empty string) is valid and commonly used just to insert a styled shape, like a decorative line or icon.',
    },

    {
      type: 'code',
      title: 'Decorative Underline with ::after',
      language: 'html',
      code: `<style>
  .heading {
    position: relative;
    display: inline-block;
    padding-bottom: 6px;
  }
  .heading::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: crimson;
  }
</style>

<h2 class="heading">Section Title</h2>`,
    },

    {
      type: 'table',
      title: 'Other Common Pseudo-elements',
      headers: ['Pseudo-element', 'Targets'],
      rows: [
        ['::before', 'Inserted content just before an element’s content'],
        ['::after', 'Inserted content just after an element’s content'],
        ['::first-letter', 'The first letter of a block of text'],
        ['::first-line', 'The first line of a block of text'],
        ['::selection', 'The portion of text currently highlighted by the user'],
      ],
    },

    {
      type: 'code',
      title: '::first-letter',
      language: 'html',
      code: `<style>
  .drop-cap::first-letter {
    font-size: 2.5em;
    font-weight: bold;
    color: steelblue;
    float: left;
    margin-right: 4px;
  }
</style>

<p class="drop-cap">This paragraph starts with a large drop-cap letter, a classic print-style effect built with pure CSS.</p>`,
    },

    {
      type: 'note',
      title: 'Not Real DOM Elements',
      content:
        '::before and ::after content is purely visual — it doesn’t exist in the DOM and can’t be selected as text or read reliably by all assistive technology, so avoid putting essential information inside it.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use ::before and ::after for purely decorative content — icons, shapes, and visual flourishes — never for content that conveys meaning users need to read.',
    },
  ],

  quiz: [
    {
      question: 'How many colons do pseudo-elements use, unlike pseudo-classes?',
      options: ['One', 'Two', 'Three', 'Zero'],
      answer: 1,
    },
    {
      question: 'Which property is required for ::before or ::after to render anything?',
      options: ['display', 'content', 'position', 'color'],
      answer: 1,
    },
    {
      question: 'Why should ::before/::after avoid holding essential information?',
      options: [
        'They are slower to render',
        'The content isn’t part of the real DOM and may not be reliably read by assistive technology',
        'They only work on headings',
        'Browsers block their content by default',
      ],
      answer: 1,
    },
  ],

  previous: 'pseudo-classes',
  next: 'specificity-and-cascade',
};
