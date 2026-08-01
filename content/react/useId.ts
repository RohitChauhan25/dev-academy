import { Tutorial } from '@/app/types/tutorial';

export const useId: Tutorial = {
  slug: 'use-id',

  title: 'useId',

  description:
    'Learn how to generate unique, SSR-safe IDs for accessibility attributes using useId.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 24 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem: Accessible Forms Need Unique IDs',
      content:
        'Associating a <label> with an <input> for accessibility requires a matching id/htmlFor pair. Hardcoding an id works for one instance of a component, but breaks the moment that component is rendered more than once on the same page — both instances would share the same id.',
    },

    {
      type: 'code',
      title: 'The Problem with a Hardcoded id',
      language: 'jsx',
      code: `function EmailField() {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />
    </>
  );
}

// Rendering <EmailField /> twice on the same page creates two elements
// with id="email" — invalid HTML, and labels no longer point correctly.`,
    },

    {
      type: 'paragraph',
      title: 'What useId Does',
      content:
        'useId() generates a unique ID string that stays stable across re-renders of the same component instance, safe to use in accessibility attributes — and critically, guaranteed to match between the server-rendered HTML and the client during hydration.',
    },

    {
      type: 'code',
      title: 'Using useId for a Label/Input Pair',
      language: 'jsx',
      code: `import { useId } from "react";

function EmailField() {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>Email</label>
      <input id={id} type="email" />
    </>
  );
}

// Every <EmailField /> instance now gets its own unique id automatically`,
    },

    {
      type: 'warning',
      title: 'Why Not Math.random() or a Counter?',
      content:
        'Generating an id with Math.random() or an incrementing counter produces a different value on the server versus the client during the first render, causing a hydration mismatch — exactly the kind of bug useId is specifically designed to prevent.',
    },

    {
      type: 'paragraph',
      title: 'Generating Multiple Related IDs',
      content:
        'A single useId() call can be reused as a prefix to build several related IDs within the same component instance, keeping them all guaranteed unique together.',
    },

    {
      type: 'code',
      title: 'Multiple Related IDs from One Call',
      language: 'jsx',
      code: `function PasswordField() {
  const id = useId();

  return (
    <>
      <label htmlFor={\`\${id}-input\`}>Password</label>
      <input id={\`\${id}-input\`} type="password" aria-describedby={\`\${id}-hint\`} />
      <p id={\`\${id}-hint\`}>Must be at least 8 characters.</p>
    </>
  );
}`,
    },

    {
      type: 'note',
      title: 'Not for List Keys',
      content:
        'useId generates one stable id per component instance — it’s not meant for generating keys when rendering a list of items, which should come from the data itself (see the Rendering Lists & Keys lesson).',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use useId anywhere a component needs to generate its own id for accessibility attributes (label/input pairs, aria-describedby), especially in any component or design system meant to be reused more than once per page.',
    },
  ],

  quiz: [
    {
      question: 'What problem does useId solve?',
      options: [
        'Generating random numbers for animations',
        'Generating unique, SSR-safe IDs for accessibility attributes across multiple instances of a component',
        'Creating unique keys for list items',
        'Improving rendering performance',
      ],
      answer: 1,
    },
    {
      question: 'Why is Math.random() unsafe for generating an element id?',
      options: [
        'It’s too slow',
        'It produces different values on the server and client, causing a hydration mismatch',
        'It only generates numbers, not strings',
        'It cannot be used inside JSX',
      ],
      answer: 1,
    },
    {
      question: 'Should useId be used to generate keys for a list of rendered items?',
      options: [
        'Yes, it’s the recommended approach',
        'No — list keys should come from the data itself, not useId',
        'Only for lists longer than 10 items',
        'Only in Server Components',
      ],
      answer: 1,
    },
  ],

  previous: 'use-deferred-value',
  next: 'use-sync-external-store',
};
