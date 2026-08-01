import { Tutorial } from '@/app/types/tutorial';

export const use: Tutorial = {
  slug: 'use',

  title: 'The use() Hook',

  description:
    'Learn how the use() hook reads Promises and Context values, and how it differs from every other hook.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 27 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'What Makes use() Different',
      content:
        'use() reads the value of a resource — currently a Promise or a Context — and unlike every other hook, it can be called conditionally, inside loops, and after early returns. It’s technically not bound by the Rules of Hooks the way useState or useEffect are.',
    },

    {
      type: 'paragraph',
      title: 'Reading Context with use()',
      content:
        'use() can read a Context the same way useContext does, but conditionally — something useContext itself cannot do.',
    },

    {
      type: 'code',
      title: 'Conditionally Reading Context',
      language: 'jsx',
      code: `import { use } from "react";

function Panel({ showTheme }) {
  if (showTheme) {
    const theme = use(ThemeContext); // allowed — use() can be called conditionally
    return <div className={theme}>Themed panel</div>;
  }
  return <div>Plain panel</div>;
}`,
    },

    {
      type: 'paragraph',
      title: 'Reading a Promise with use()',
      content:
        'When passed a Promise, use() suspends the component until it resolves — integrating directly with Suspense, without needing useEffect, useState, or a loading flag written by hand.',
    },

    {
      type: 'code',
      title: 'Suspending on a Promise',
      language: 'jsx',
      code: `import { use, Suspense } from "react";

function UserProfile({ userPromise }) {
  const user = use(userPromise); // suspends until the promise resolves
  return <h1>{user.name}</h1>;
}

function App({ userPromise }) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <UserProfile userPromise={userPromise} />
    </Suspense>
  );
}`,
    },

    {
      type: 'warning',
      title: 'The Promise Usually Comes from a Server Component',
      content:
        'A Client Component using use() on a Promise typically receives that Promise as a prop from a Server Component that started the fetch — the Client Component doesn’t create the Promise itself on every render, which would refetch endlessly.',
    },

    {
      type: 'table',
      title: 'use() vs Other Hooks',
      headers: ['', 'Regular Hooks (useState, etc.)', 'use()'],
      rows: [
        ['Can be called conditionally', 'No', 'Yes'],
        ['Can be called in a loop', 'No', 'Yes'],
        ['What it reads', 'Its own internal state', 'A Promise or a Context passed as its argument'],
      ],
    },

    {
      type: 'note',
      title: 'use() Is Not a Replacement for useEffect',
      content:
        'use() reads an already-created resource (a Promise, a Context) — it doesn’t start effects, subscribe to anything, or run cleanup logic. useEffect and other hooks remain necessary for those cases.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use use() to read a Promise passed down from a Server Component (in frameworks that support it) or to conditionally read Context — for everything else, the classic hooks (useState, useEffect, useContext) remain the right tool.',
    },
  ],

  quiz: [
    {
      question: 'What is unique about use() compared to hooks like useState?',
      options: [
        'It only works in class components',
        'It can be called conditionally and inside loops, unlike other hooks',
        'It cannot be used with Suspense',
        'It replaces JSX entirely',
      ],
      answer: 1,
    },
    {
      question: 'What happens when use() is passed a Promise?',
      options: [
        'It throws an error immediately',
        'It suspends the component until the Promise resolves, integrating with Suspense',
        'It returns undefined immediately',
        'It converts the Promise to a string',
      ],
      answer: 1,
    },
    {
      question: 'Where does a Promise passed to use() in a Client Component typically come from?',
      options: [
        'It’s always created fresh inside the Client Component on every render',
        'A Server Component that started the fetch and passed the Promise down as a prop',
        'It must be hardcoded',
        'From a CSS file',
      ],
      answer: 1,
    },
  ],

  previous: 'use-debug-value',
  next: 'use-optimistic',
};
