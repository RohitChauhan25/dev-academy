import { Tutorial } from '@/app/types/tutorial';

export const accessibility: Tutorial = {
  slug: 'accessibility',

  title: 'Accessibility',

  description:
    'Learn how to build inclusive HTML pages using semantic markup, alt text, labels, and ARIA attributes.',

  level: 'Advanced',

  readingTime: '18 min',

  lesson: 'Lesson 27 of 27',

  sections: [
    {
      type: 'paragraph',
      title: 'What is Web Accessibility?',
      content:
        'Accessibility (often abbreviated a11y) means building pages that people with disabilities — visual, auditory, motor, or cognitive — can use effectively, often with the help of assistive technology like screen readers.',
    },

    {
      type: 'paragraph',
      title: 'Semantic HTML is the Foundation',
      content:
        'The single biggest accessibility win is using the right semantic element for the job. Native elements like <button>, <a>, and <nav> come with built-in keyboard support and screen reader behavior for free.',
    },

    {
      type: 'code',
      title: 'Semantic vs Non-Semantic Buttons',
      language: 'html',
      code: `<!-- Accessible: keyboard focusable, announced as a button -->
<button onclick="submitForm()">Submit</button>

<!-- Inaccessible: no keyboard support, no button semantics -->
<div onclick="submitForm()">Submit</div>`,
    },

    {
      type: 'list',
      title: 'Accessibility Fundamentals',
      items: [
        'Every image has meaningful alt text (or alt="" if decorative).',
        'Every form input has an associated <label>.',
        'Heading levels follow a logical order (h1 → h2 → h3).',
        'Interactive elements are reachable and usable with a keyboard alone.',
        'Color is never the only way information is conveyed.',
        'Sufficient color contrast between text and background.',
      ],
    },

    {
      type: 'paragraph',
      title: 'ARIA Attributes',
      content:
        'ARIA (Accessible Rich Internet Applications) attributes add extra information for assistive technology when semantic HTML alone isn’t enough — typically for custom, JavaScript-driven widgets.',
    },

    {
      type: 'code',
      title: 'Common ARIA Attributes',
      language: 'html',
      code: `<button aria-label="Close dialog">&times;</button>

<div role="alert">Your changes have been saved.</div>

<input type="text" aria-describedby="password-hint" />
<p id="password-hint">Must be at least 8 characters.</p>`,
    },

    {
      type: 'table',
      title: 'Useful ARIA Attributes',
      headers: ['Attribute', 'Purpose'],
      rows: [
        ['aria-label', 'Provides an accessible name when there is no visible text'],
        ['aria-labelledby', 'Points to another element that labels this one'],
        ['aria-describedby', 'Points to an element with additional descriptive text'],
        ['aria-hidden', 'Hides purely decorative content from assistive technology'],
        ['role', 'Overrides or clarifies the semantic role of an element'],
      ],
    },

    {
      type: 'warning',
      title: 'The First Rule of ARIA',
      content:
        'No ARIA is better than bad ARIA. Always prefer a native semantic element over adding ARIA attributes to a generic <div> — ARIA should fill gaps, not replace semantics you could get for free.',
    },

    {
      type: 'paragraph',
      title: 'Keyboard Navigation',
      content:
        'Many users navigate exclusively with a keyboard. Every interactive element must be reachable with Tab and operable with Enter or Space, in a logical order that matches the visual layout.',
    },

    {
      type: 'note',
      title: 'Skip Links',
      content:
        'A "skip to main content" link, hidden until focused, lets keyboard users bypass repetitive navigation and jump straight to the page’s main content.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Build with semantic HTML first, test your pages using only a keyboard, and run an automated checker (like Lighthouse or axe) to catch common accessibility issues early.',
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        'Accessibility is not an afterthought — it starts with the semantic HTML choices you make on day one. Combined with proper labels, alt text, and ARIA where needed, it ensures your pages work for everyone.',
    },
  ],

  quiz: [
    {
      question: 'What is the biggest accessibility win you can make?',
      options: [
        'Adding ARIA attributes to every element',
        'Using semantic HTML elements correctly',
        'Increasing font size',
        'Removing all images',
      ],
      answer: 1,
    },
    {
      question: 'What is the "first rule of ARIA"?',
      options: [
        'Always add role to every element',
        'No ARIA is better than bad ARIA — prefer native semantics first',
        'ARIA replaces the need for alt text',
        'ARIA is only needed on forms',
      ],
      answer: 1,
    },
    {
      question: 'Why must interactive elements be operable with a keyboard alone?',
      options: [
        'It is only a legal requirement in some countries',
        'Many users navigate exclusively via keyboard or assistive technology',
        'It improves SEO rankings only',
        'It is required for CSS animations to work',
      ],
      answer: 1,
    },
  ],

  previous: 'svg-basics',
};
