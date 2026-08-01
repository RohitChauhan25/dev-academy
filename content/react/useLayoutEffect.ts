import { Tutorial } from '@/app/types/tutorial';

export const useLayoutEffect: Tutorial = {
  slug: 'use-layout-effect',

  title: 'useLayoutEffect',

  description:
    'Learn when to reach for useLayoutEffect instead of useEffect, and why it can prevent visual flicker.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 20 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'useLayoutEffect vs useEffect',
      content:
        'useLayoutEffect has the exact same API as useEffect, but fires at a different time: synchronously, immediately after React updates the DOM, but before the browser paints anything on screen. useEffect, by contrast, fires asynchronously after the paint.',
    },

    {
      type: 'table',
      title: 'Timing Comparison',
      headers: ['Hook', 'Fires', 'Blocks Paint?'],
      rows: [
        ['useEffect', 'After the browser has painted the update', 'No'],
        ['useLayoutEffect', 'Synchronously, right after DOM mutations, before paint', 'Yes'],
      ],
    },

    {
      type: 'paragraph',
      title: 'The Problem It Solves: Visual Flicker',
      content:
        'If an effect needs to measure the DOM and then immediately adjust it (like positioning a tooltip based on its own rendered size), doing that in useEffect can cause a visible flash — the browser paints the "wrong" position first, then the effect runs and corrects it a moment later. useLayoutEffect runs before that first paint, so the correction is invisible.',
    },

    {
      type: 'code',
      title: 'Measuring and Adjusting Before Paint',
      language: 'jsx',
      code: `import { useLayoutEffect, useRef, useState } from "react";

function Tooltip({ text }) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    setWidth(rect.width); // measured and corrected before the browser paints
  }, [text]);

  return (
    <div ref={ref} style={{ marginLeft: -width / 2 }}>
      {text}
    </div>
  );
}`,
    },

    {
      type: 'warning',
      title: 'useLayoutEffect Blocks Visual Updates',
      content:
        'Because it runs synchronously before paint, a slow useLayoutEffect delays the browser from showing anything at all — overusing it can make an app feel less responsive than using useEffect would.',
    },

    {
      type: 'note',
      title: 'useLayoutEffect Doesn’t Run on the Server',
      content:
        'Like useEffect, useLayoutEffect never runs during server-side rendering — only in the browser. React logs a warning if it’s used in a server-rendered component tree without special handling, since there’s no DOM to measure on the server.',
    },

    {
      type: 'table',
      title: 'When to Use Which',
      headers: ['Situation', 'Hook'],
      rows: [
        ['Fetching data, subscriptions, logging, most side effects', 'useEffect'],
        ['Measuring a DOM node and synchronously adjusting layout to avoid flicker', 'useLayoutEffect'],
      ],
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Default to useEffect for almost everything. Reach for useLayoutEffect only when you’ve specifically noticed a visual flicker caused by a DOM measurement/adjustment happening after paint.',
    },
  ],

  quiz: [
    {
      question: 'What is the key timing difference between useEffect and useLayoutEffect?',
      options: [
        'There is no difference',
        'useLayoutEffect fires synchronously before the browser paints; useEffect fires after',
        'useEffect only runs once, useLayoutEffect runs every render',
        'useLayoutEffect only works with class components',
      ],
      answer: 1,
    },
    {
      question: 'What problem does useLayoutEffect solve that useEffect cannot?',
      options: [
        'Fetching data faster',
        'Preventing a visible flicker when measuring and adjusting the DOM based on its own layout',
        'Reducing bundle size',
        'Handling errors',
      ],
      answer: 1,
    },
    {
      question: 'Why should useLayoutEffect be used sparingly?',
      options: [
        'It is deprecated',
        'It runs synchronously and blocks the browser from painting until it finishes',
        'It cannot access refs',
        'It only works in production builds',
      ],
      answer: 1,
    },
  ],

  previous: 'hooks-overview',
  next: 'use-imperative-handle',
};
