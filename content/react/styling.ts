import { Tutorial } from '@/app/types/tutorial';

export const styling: Tutorial = {
  slug: 'styling',

  title: 'Styling in React',

  description:
    'Learn the main approaches to styling React components: plain CSS files, CSS Modules, and inline styles.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 11 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'React Doesn’t Prescribe a Styling Method',
      content:
        'Unlike some frameworks, React has no built-in styling system — you’re free to use plain CSS, CSS Modules, CSS-in-JS libraries, or utility frameworks like Tailwind CSS.',
    },

    {
      type: 'paragraph',
      title: 'Plain CSS Files',
      content:
        'The simplest approach: write a regular .css file, import it into your component, and use className to apply classes — exactly like styling any other HTML page.',
    },

    {
      type: 'code',
      title: 'Importing a Plain CSS File',
      language: 'jsx',
      code: `// Button.css
// .btn { padding: 8px 16px; border-radius: 6px; }

import "./Button.css";

function Button({ label }) {
  return <button className="btn">{label}</button>;
}`,
    },

    {
      type: 'warning',
      title: 'Plain CSS Has No Scoping',
      content:
        'A plain imported CSS file is global — a class name like .card can accidentally collide with the same class name used in a completely different component elsewhere in the app.',
    },

    {
      type: 'paragraph',
      title: 'CSS Modules',
      content:
        'A CSS Module (a file named *.module.css) scopes class names automatically to the component that imports it, avoiding naming collisions entirely.',
    },

    {
      type: 'code',
      title: 'Using a CSS Module',
      language: 'jsx',
      code: `// Button.module.css
// .btn { padding: 8px 16px; border-radius: 6px; }

import styles from "./Button.module.css";

function Button({ label }) {
  return <button className={styles.btn}>{label}</button>;
}
// The class name is compiled to something unique, like "Button_btn__a1b2c"`,
    },

    {
      type: 'paragraph',
      title: 'Inline Styles',
      content:
        'The style prop accepts a JavaScript object, not a CSS string — property names are camelCase, and numeric values are treated as pixels by default.',
    },

    {
      type: 'code',
      title: 'Inline Styles Example',
      language: 'jsx',
      code: `function Box() {
  return (
    <div
      style={{
        padding: 16,
        backgroundColor: "steelblue",
        borderRadius: 8,
      }}
    >
      Styled inline
    </div>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'Conditional Class Names',
      content:
        'Template literals or a small helper (like the popular clsx library) make it easy to apply classes conditionally based on props or state.',
    },

    {
      type: 'code',
      title: 'Conditional Classes',
      language: 'jsx',
      code: `function Alert({ type, message }) {
  return (
    <div className={\`alert alert-\${type}\`}>
      {message}
    </div>
  );
}

<Alert type="error" message="Something went wrong" />;
// renders className="alert alert-error"`,
    },

    {
      type: 'table',
      title: 'Comparing Approaches',
      headers: ['Approach', 'Scoped?', 'Notes'],
      rows: [
        ['Plain CSS', 'No', 'Simplest, but risk of naming collisions'],
        ['CSS Modules', 'Yes', 'Scoped automatically, still real CSS'],
        ['Inline styles', 'Per-element', 'No pseudo-classes/media queries; useful for dynamic values'],
        ['Tailwind CSS', 'N/A', 'Utility classes composed directly in JSX'],
      ],
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for inline styles only for values that must be computed dynamically at runtime (like a progress bar’s width). For everything else, prefer CSS Modules or a utility framework — they support pseudo-classes and media queries that inline styles cannot.',
    },
  ],

  quiz: [
    {
      question: 'What is the main advantage of CSS Modules over plain imported CSS?',
      options: [
        'They load faster',
        'Class names are automatically scoped to the component, avoiding naming collisions',
        'They support animations, unlike plain CSS',
        'They remove the need for a build tool',
      ],
      answer: 1,
    },
    {
      question: 'What type of value does the style prop expect?',
      options: ['A CSS string', 'A JavaScript object with camelCase property names', 'A class name', 'An array of strings'],
      answer: 1,
    },
    {
      question: 'Why are inline styles a poor fit for hover effects and media queries?',
      options: [
        'They are not supported by React at all',
        'The style prop cannot express pseudo-classes or media queries',
        'Inline styles are slower to render',
        'They can only accept numbers',
      ],
      answer: 1,
    },
  ],

  previous: 'component-composition',
  next: 'fragments-and-portals',
};
