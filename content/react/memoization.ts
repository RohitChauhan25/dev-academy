import { Tutorial } from '@/app/types/tutorial';

export const memoization: Tutorial = {
  slug: 'memoization',

  title: 'useMemo & useCallback',

  description:
    'Learn how to avoid unnecessary recalculations and re-renders using the useMemo and useCallback hooks.',

  level: 'Intermediate',

  readingTime: '18 min',

  lesson: 'Lesson 32 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem: Repeated Work on Every Render',
      content:
        'A component re-runs its entire function body on every render. Any expensive calculation inside it re-runs too — even if none of the values it depends on actually changed.',
    },

    {
      type: 'paragraph',
      title: 'useMemo: Memoizing a Value',
      content:
        'useMemo(calculateValue, dependencies) re-runs an expensive calculation only when one of its dependencies actually changes, reusing the cached result otherwise.',
    },

    {
      type: 'code',
      title: 'Memoizing an Expensive Calculation',
      language: 'jsx',
      code: `import { useMemo } from "react";

function ProductList({ products, filter }) {
  const filteredProducts = useMemo(() => {
    console.log("Filtering...");
    return products.filter((p) => p.category === filter);
  }, [products, filter]);

  return (
    <ul>
      {filteredProducts.map((p) => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'useCallback: Memoizing a Function',
      content:
        'Every render creates brand new function instances for anything defined inside a component — including event handlers. useCallback(fn, dependencies) returns the same function reference between renders as long as its dependencies haven’t changed.',
    },

    {
      type: 'code',
      title: 'Memoizing a Callback',
      language: 'jsx',
      code: `import { useCallback } from "react";

function TodoList({ todos }) {
  const handleToggle = useCallback((id) => {
    console.log("Toggled:", id);
  }, []); // same function reference across every render

  return todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
  ));
}`,
    },

    {
      type: 'paragraph',
      title: 'Why Function Identity Matters',
      content:
        'useCallback is most useful when a function is passed as a prop to a child wrapped in React.memo — without it, a new function reference on every render defeats React.memo’s comparison, causing the child to re-render anyway even though nothing meaningful changed.',
    },

    {
      type: 'code',
      title: 'useCallback Paired with React.memo',
      language: 'jsx',
      code: `const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  console.log("Rendering:", todo.text);
  return <li onClick={() => onToggle(todo.id)}>{todo.text}</li>;
});
// Without useCallback on onToggle, TodoItem re-renders every time
// the parent renders, even if 'todo' itself hasn't changed.`,
    },

    {
      type: 'warning',
      title: 'Memoization is a Performance Tool, Not a Default',
      content:
        'useMemo and useCallback have their own small cost (comparing dependencies on every render) and add code complexity. Reach for them when you’ve identified an actual performance problem — usually via the React DevTools Profiler — not preemptively on every value and function.',
    },

    {
      type: 'note',
      title: 'React Compiler Reduces the Need for Manual Memoization',
      content:
        'Newer versions of React ship with a compiler that can automatically add memoization where it’s beneficial, reducing how often useMemo and useCallback need to be written by hand.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Don’t reach for useMemo/useCallback by default. Profile first, then memoize specifically where a measured re-render or slow calculation is causing a real, noticeable problem.',
    },
  ],

  quiz: [
    {
      question: 'What does useMemo do?',
      options: [
        'Memoizes an entire component',
        'Re-runs an expensive calculation only when its dependencies change, caching the result otherwise',
        'Prevents all re-renders',
        'Replaces useState',
      ],
      answer: 1,
    },
    {
      question: 'What does useCallback memoize?',
      options: ['A value', 'A function reference', 'A component', 'A CSS class'],
      answer: 1,
    },
    {
      question: 'Why is useCallback often paired with React.memo?',
      options: [
        'They are unrelated and never used together',
        'Without a stable function reference, React.memo’s comparison fails and the child re-renders anyway',
        'useCallback is required for React.memo to work at all',
        'It improves CSS performance',
      ],
      answer: 1,
    },
  ],

  previous: 'use-reducer',
  next: 'error-boundaries',
};
