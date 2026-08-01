import { Tutorial } from '@/app/types/tutorial';

export const specificityAndCascade: Tutorial = {
  slug: 'specificity-and-cascade',

  title: 'Specificity & the Cascade',

  description:
    'Understand how CSS decides which rule wins when multiple rules target the same element.',

  level: 'Intermediate',

  readingTime: '16 min',

  lesson: 'Lesson 20 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Specificity Matters',
      content:
        'When more than one CSS rule matches the same element and sets the same property, the browser must decide which one to apply. This decision is based on specificity, source order, and importance.',
    },

    {
      type: 'code',
      title: 'A Specificity Conflict',
      language: 'html',
      code: `<style>
  p { color: blue; }
  .note { color: green; }
  #warning { color: red; }
</style>

<p id="warning" class="note">
  This text is red — the ID selector wins.
</p>`,
    },

    {
      type: 'paragraph',
      title: 'How Specificity is Calculated',
      content:
        'Specificity is often represented as three numbers, from most to least powerful: ID selectors, class/attribute/pseudo-class selectors, and type/pseudo-element selectors. More of a stronger category always beats any amount of a weaker one.',
    },

    {
      type: 'table',
      title: 'Specificity Categories (Strongest to Weakest)',
      headers: ['Category', 'Examples', 'Weight'],
      rows: [
        ['Inline style', 'style="color: red"', 'Highest (beats all selectors)'],
        ['ID selectors', '#header', '1-0-0'],
        ['Classes, attributes, pseudo-classes', '.btn, [type="text"], :hover', '0-1-0'],
        ['Type selectors, pseudo-elements', 'div, ::before', '0-0-1'],
      ],
    },

    {
      type: 'code',
      title: 'Comparing Specificity',
      language: 'css',
      code: `/* 0-0-1 */
p { color: black; }

/* 0-1-0 — wins over the type selector above */
.highlight { color: orange; }

/* 1-0-0 — wins over both rules above */
#unique { color: purple; }`,
    },

    {
      type: 'paragraph',
      title: 'Source Order',
      content:
        'When two rules have equal specificity, the one that appears later in the stylesheet wins. This is the "cascading" part of Cascading Style Sheets.',
    },

    {
      type: 'code',
      title: 'Equal Specificity, Order Decides',
      language: 'html',
      code: `<style>
  .box { color: blue; }
  .box { color: green; } /* wins — same specificity, comes later */
</style>

<p class="box">This text is green.</p>`,
    },

    {
      type: 'warning',
      title: 'The !important Escape Hatch',
      content:
        'Adding !important to a declaration overrides normal specificity rules almost entirely. It should be used sparingly — overusing it makes styles unpredictable and hard to override later, often forcing more !important rules to fix.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Keep selectors as low-specificity as possible (favor classes over IDs and deep nesting) so later overrides stay easy, and avoid !important except as a last resort.',
    },
  ],

  quiz: [
    {
      question: 'Which of these has the highest specificity?',
      options: ['A type selector like div', 'A class selector like .card', 'An ID selector like #header', 'A pseudo-element like ::before'],
      answer: 2,
    },
    {
      question: 'When two rules have equal specificity, which one wins?',
      options: ['The shorter one', 'The one that appears later in the stylesheet', 'The one with more declarations', 'Neither applies'],
      answer: 1,
    },
    {
      question: 'Why should !important be used sparingly?',
      options: [
        'It is deprecated and ignored by browsers',
        'It overrides normal specificity and makes future overrides harder',
        'It only works on class selectors',
        'It slows down page rendering significantly',
      ],
      answer: 1,
    },
  ],

  previous: 'pseudo-elements',
  next: 'combinators',
};
