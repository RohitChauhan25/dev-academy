import { Tutorial } from '@/app/types/tutorial';

export const bestPractices: Tutorial = {
  slug: 'best-practices',

  title: 'CSS Best Practices',

  description:
    'Learn conventions for writing CSS that stays organized, predictable, and easy to maintain as a project grows.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 30 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Organization Matters',
      content:
        'Small projects can get away with messy CSS, but as a codebase grows, unclear naming and unpredictable specificity turn every change into a risk of breaking something else. A few conventions go a long way.',
    },

    {
      type: 'paragraph',
      title: 'Naming with BEM',
      content:
        'BEM (Block, Element, Modifier) is a popular naming convention that keeps class names descriptive and flat, avoiding deep selector nesting and specificity conflicts.',
    },

    {
      type: 'code',
      title: 'BEM Naming Example',
      language: 'html',
      code: `<style>
  .card { border: 1px solid #ddd; border-radius: 8px; padding: 16px; }
  .card__title { font-size: 18px; font-weight: bold; }
  .card__body { color: #555; }
  .card--featured { border-color: steelblue; background: #eef4fb; }
</style>

<div class="card card--featured">
  <div class="card__title">Featured Card</div>
  <div class="card__body">Block, Element, Modifier naming in action.</div>
</div>`,
    },

    {
      type: 'table',
      title: 'BEM Parts',
      headers: ['Part', 'Syntax', 'Meaning'],
      rows: [
        ['Block', '.card', 'A standalone, reusable component'],
        ['Element', '.card__title', 'A part that belongs to the block'],
        ['Modifier', '.card--featured', 'A variation of the block or element'],
      ],
    },

    {
      type: 'list',
      title: 'General Guidelines',
      items: [
        'Keep selectors flat and low-specificity — avoid deep nesting and IDs for styling.',
        'Group related styles together and order them consistently across files.',
        'Define shared values (colors, spacing, font sizes) once as CSS variables.',
        'Prefer Flexbox/Grid over floats or absolute positioning for layout.',
        'Avoid !important except as a rare, deliberate last resort.',
        'Write mobile-first, adding complexity with min-width media queries.',
      ],
    },

    {
      type: 'paragraph',
      title: 'A Simple Reset',
      content:
        'Most projects start with a small reset to remove inconsistent browser defaults, creating a predictable baseline to build on.',
    },

    {
      type: 'code',
      title: 'A Minimal CSS Reset',
      language: 'css',
      code: `*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

img, picture, video {
  max-width: 100%;
  display: block;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}`,
    },

    {
      type: 'paragraph',
      title: 'Organizing Files as Projects Grow',
      content:
        'Splitting one giant stylesheet into smaller files by responsibility — variables, resets, layout, components — keeps large projects navigable, whether using plain CSS with @import, Sass partials, or CSS Modules.',
    },

    {
      type: 'warning',
      title: 'Watch for Unused CSS',
      content:
        'As projects evolve, old selectors are often left behind after markup changes. Periodically audit for unused CSS using browser DevTools coverage tools to keep stylesheets lean.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Pick one naming convention (BEM or similar) and one organizational structure early, document it briefly, and apply it consistently — consistency matters more than which specific convention you choose.',
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        'Great CSS isn’t about clever tricks — it’s about consistency, low specificity, and clear naming that lets any developer predict what a class does without hunting through the whole stylesheet.',
    },
  ],

  quiz: [
    {
      question: 'In BEM, what does the double underscore (__) represent?',
      options: ['A modifier', 'An element belonging to a block', 'A new block', 'A media query'],
      answer: 1,
    },
    {
      question: 'Why is box-sizing: border-box commonly included in a CSS reset?',
      options: [
        'It removes all borders',
        'It makes width/height calculations include padding and border, avoiding surprises',
        'It disables margins',
        'It is required for Flexbox to work',
      ],
      answer: 1,
    },
    {
      question: 'What matters most when choosing a CSS naming convention?',
      options: [
        'Using the newest convention available',
        'Applying it consistently across the project',
        'Using as many classes as possible',
        'Avoiding classes entirely',
      ],
      answer: 1,
    },
  ],

  previous: 'css-functions',
};
