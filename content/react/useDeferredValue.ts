import { Tutorial } from '@/app/types/tutorial';

export const useDeferredValue: Tutorial = {
  slug: 'use-deferred-value',

  title: 'useDeferredValue',

  description:
    'Learn how to defer re-rendering a non-urgent part of the UI until more urgent updates have finished.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 23 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'What useDeferredValue Does',
      content:
        'useDeferredValue(value) returns a version of value that "lags behind" during urgent updates, catching up once the browser has spare capacity. It’s useful when a fast-changing value (like text being typed) feeds into an expensive part of the UI you don’t want to slow down typing itself.',
    },

    {
      type: 'code',
      title: 'Deferring an Expensive List',
      language: 'jsx',
      code: `import { useState, useDeferredValue } from "react";

function SearchPage({ allItems }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {/* This expensive list re-renders using the deferred, "lagging" value */}
      <ExpensiveResultsList query={deferredQuery} items={allItems} />
    </>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'The Input Stays Responsive',
      content:
        'Because query updates immediately (feeding the input’s own value), typing always feels instant. deferredQuery only catches up once React has time to re-render the expensive list — so a slow list render never blocks the input from updating on screen.',
    },

    {
      type: 'paragraph',
      title: 'Showing Stale Content is Visible, Deliberately',
      content:
        'While the deferred value is "catching up," the UI briefly shows results based on the previous query — you can detect this with a simple comparison and dim the outdated content to signal that it’s about to update.',
    },

    {
      type: 'code',
      title: 'Indicating Stale Content',
      language: 'jsx',
      code: `function SearchPage({ allItems }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <div style={{ opacity: isStale ? 0.6 : 1 }}>
        <ExpensiveResultsList query={deferredQuery} items={allItems} />
      </div>
    </>
  );
}`,
    },

    {
      type: 'table',
      title: 'useTransition vs useDeferredValue',
      headers: ['', 'useTransition', 'useDeferredValue'],
      rows: [
        ['What it wraps', 'A state update you trigger', 'A value you’ve already received (often a prop)'],
        ['Control', 'You call startTransition yourself', 'You just pass in a value — no event handler needed'],
        ['Typical use', 'An onChange handler that also updates expensive state', 'A slow child component fed by a fast-changing prop'],
      ],
    },

    {
      type: 'note',
      title: 'Not the Same as Debouncing',
      content:
        'A debounce waits a fixed delay before updating, regardless of how busy the browser is. useDeferredValue instead adapts to the actual device and workload — it catches up as soon as there’s spare rendering capacity, which can be faster or slower than any fixed delay.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for useDeferredValue when an expensive part of the UI is fed by a value you don’t directly control the update of (like a prop), and useTransition when you do control the triggering event yourself.',
    },
  ],

  quiz: [
    {
      question: 'What does useDeferredValue return?',
      options: [
        'A brand-new state variable',
        'A version of the given value that lags behind during urgent updates and catches up when idle',
        'A memoized function',
        'A boolean indicating loading state',
      ],
      answer: 1,
    },
    {
      question: 'How does useDeferredValue differ from a fixed-delay debounce?',
      options: [
        'They are identical',
        'It adapts to the actual device and workload instead of waiting a fixed delay',
        'It only works with strings',
        'It requires a server round-trip',
      ],
      answer: 1,
    },
    {
      question: 'When is useDeferredValue generally preferred over useTransition?',
      options: [
        'When you don’t directly control the update — the value just comes in, like through a prop',
        'They are used in identical situations, so it never matters',
        'Only inside class components',
        'Only for numeric values',
      ],
      answer: 0,
    },
  ],

  previous: 'use-transition',
  next: 'use-id',
};
