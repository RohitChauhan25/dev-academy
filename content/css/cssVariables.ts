import { Tutorial } from '@/app/types/tutorial';

export const cssVariables: Tutorial = {
  slug: 'css-variables',

  title: 'CSS Variables',

  description:
    'Learn how to define and reuse values across a stylesheet with CSS custom properties (variables).',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 23 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What Are CSS Variables?',
      content:
        'CSS custom properties, commonly called CSS variables, let you define a reusable value once and reference it throughout your stylesheet using the var() function.',
    },

    {
      type: 'code',
      title: 'Defining and Using a Variable',
      language: 'html',
      code: `<style>
  :root {
    --brand-color: #764ba2;
    --spacing: 16px;
  }

  .box {
    background: var(--brand-color);
    padding: var(--spacing);
    color: white;
  }
</style>

<div class="box">Styled using CSS variables</div>`,
    },

    {
      type: 'paragraph',
      title: 'The :root Selector',
      content:
        ':root targets the highest-level element in the document (equivalent to <html>, but with slightly higher specificity), making it the conventional place to define variables meant to be used globally.',
    },

    {
      type: 'paragraph',
      title: 'Fallback Values',
      content:
        'var() accepts a second argument as a fallback, used if the variable is not defined: var(--spacing, 10px).',
    },

    {
      type: 'code',
      title: 'Fallback Value',
      language: 'css',
      code: `.box {
  /* Uses 10px if --spacing was never defined */
  padding: var(--spacing, 10px);
}`,
    },

    {
      type: 'paragraph',
      title: 'Scoped Variables',
      content:
        'Unlike Sass variables, CSS variables are live and scoped like normal CSS — redefining a variable inside a selector overrides it only for that element and its descendants.',
    },

    {
      type: 'code',
      title: 'Scoped Override',
      language: 'html',
      code: `<style>
  :root {
    --btn-color: steelblue;
  }
  .btn {
    background: var(--btn-color);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    margin-right: 8px;
  }
  .btn.danger {
    --btn-color: crimson;
  }
</style>

<button class="btn">Default</button>
<button class="btn danger">Danger</button>`,
    },

    {
      type: 'paragraph',
      title: 'Updating Variables with JavaScript',
      content:
        'Because CSS variables are live, JavaScript can update them at runtime with element.style.setProperty(\'--brand-color\', \'orange\') — a common technique for building theme switchers without reloading stylesheets.',
    },

    {
      type: 'note',
      title: 'Variables vs Preprocessor Variables',
      content:
        'Sass/Less variables are compiled away and fixed at build time. CSS variables exist in the browser at runtime, can be changed dynamically, and automatically cascade and inherit like any other CSS value.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Define your design tokens — colors, spacing, font sizes — as CSS variables on :root early in a project. It makes theming, dark mode, and consistent redesigns far easier down the line.',
    },
  ],

  quiz: [
    {
      question: 'How do you reference a CSS variable in a declaration?',
      options: ['$variable', 'var(--variable)', '@variable', '#variable'],
      answer: 1,
    },
    {
      question: 'Where are global CSS variables conventionally defined?',
      options: ['Inside every selector', 'On :root', 'In the <head> only', 'Inside @media'],
      answer: 1,
    },
    {
      question: 'What is a key advantage of CSS variables over Sass variables?',
      options: [
        'They compile to smaller file sizes',
        'They are live at runtime and can be changed dynamically, e.g. with JavaScript',
        'They work in older browsers that don’t support Sass',
        'They require no fallback values',
      ],
      answer: 1,
    },
  ],

  previous: 'responsive-design',
  next: 'transitions',
};
