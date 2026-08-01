import { Tutorial } from '@/app/types/tutorial';

export const performanceOptimization: Tutorial = {
  slug: 'performance-optimization',

  title: 'Performance Optimization',

  description:
    'Learn practical techniques for avoiding unnecessary re-renders and reducing bundle size in React apps.',

  level: 'Advanced',

  readingTime: '18 min',

  lesson: 'Lesson 35 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'Why a Component Re-Renders',
      content:
        'A component re-renders when its own state changes, when its parent re-renders (by default, all children re-render too), or when a context it consumes changes — most performance problems come from one of these three triggers firing more often than necessary.',
    },

    {
      type: 'paragraph',
      title: 'React.memo',
      content:
        'React.memo wraps a component so it skips re-rendering when its props haven’t changed (compared shallowly), even if its parent re-renders.',
    },

    {
      type: 'code',
      title: 'Skipping Re-Renders with React.memo',
      language: 'jsx',
      code: `const ExpensiveRow = React.memo(function ExpensiveRow({ item }) {
  console.log("Rendering row:", item.id);
  return <li>{item.name}</li>;
});

// If the parent re-renders but 'item' didn't change,
// ExpensiveRow skips re-rendering entirely.`,
    },

    {
      type: 'warning',
      title: 'React.memo Only Helps with Stable Props',
      content:
        'If a prop is a new object, array, or function created fresh on every render, React.memo’s shallow comparison always sees it as "different," defeating the optimization. This is why React.memo is often paired with useMemo/useCallback on the parent’s side.',
    },

    {
      type: 'paragraph',
      title: 'Code Splitting',
      content:
        'Rather than shipping the entire app as one large JavaScript bundle, code splitting breaks it into smaller chunks that load on demand — reducing the amount of code the browser needs to download and parse before the first meaningful render.',
    },

    {
      type: 'code',
      title: 'Code Splitting a Route',
      language: 'jsx',
      code: `import { lazy, Suspense } from "react";

const SettingsPage = lazy(() => import("./SettingsPage"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SettingsPage />
    </Suspense>
  );
}
// SettingsPage's code is only downloaded when this component actually renders`,
    },

    {
      type: 'paragraph',
      title: 'Virtualizing Long Lists',
      content:
        'Rendering thousands of DOM nodes at once (like a long table or feed) is expensive regardless of memoization. A virtualization library (like react-window or TanStack Virtual) renders only the items currently visible in the viewport, recycling DOM nodes as the user scrolls.',
    },

    {
      type: 'table',
      title: 'Common Optimization Techniques',
      headers: ['Technique', 'Solves'],
      rows: [
        ['React.memo', 'A child re-rendering when its own props haven’t changed'],
        ['useMemo / useCallback', 'Recreating expensive values/functions on every render'],
        ['Code splitting (lazy + Suspense)', 'Shipping too much JavaScript up front'],
        ['List virtualization', 'Rendering huge numbers of DOM nodes at once'],
        ['Keying/structuring state well', 'Avoiding unnecessary re-renders from state changes higher than needed'],
      ],
    },

    {
      type: 'note',
      title: 'Measure Before You Optimize',
      content:
        'The React DevTools Profiler shows exactly which components re-rendered, how long they took, and why. Optimizing without profiling first often targets the wrong component, or adds complexity for no measurable benefit.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Structure state so that changes only affect the smallest part of the tree that actually needs to update — many performance problems disappear once state lives at the right level, before any memoization is even needed.',
    },
  ],

  quiz: [
    {
      question: 'What does React.memo do?',
      options: [
        'Deletes unused state',
        'Skips re-rendering a component if its props haven’t changed',
        'Speeds up the initial page load only',
        'Prevents all state updates',
      ],
      answer: 1,
    },
    {
      question: 'Why can React.memo fail to prevent a re-render even when data hasn’t "really" changed?',
      options: [
        'React.memo is broken by design',
        'A prop that’s a newly created object/array/function on every render always looks "different" to a shallow comparison',
        'It only works with primitive props',
        'It requires useState to work',
      ],
      answer: 1,
    },
    {
      question: 'What is the purpose of list virtualization?',
      options: [
        'To sort a list automatically',
        'To render only the currently visible items in a long list, recycling DOM nodes while scrolling',
        'To animate list items',
        'To fetch list data faster',
      ],
      answer: 1,
    },
  ],

  previous: 'react-router',
  next: 'suspense-and-lazy',
};
