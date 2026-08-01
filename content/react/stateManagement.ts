import { Tutorial } from '@/app/types/tutorial';

export const stateManagement: Tutorial = {
  slug: 'state-management',

  title: 'State Management Libraries',

  description:
    'Understand when and why a dedicated state management library like Redux or Zustand might be worth reaching for.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 41 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'Start with What React Already Gives You',
      content:
        'useState, useReducer, and Context cover a large share of real applications. A dedicated state management library solves problems that appear once an app’s shared state becomes large, frequently updated, and needed across many unrelated parts of the tree.',
    },

    {
      type: 'paragraph',
      title: 'The Problem: Context Re-Renders Everything',
      content:
        'As covered earlier, every consumer of a Context re-renders whenever its value changes — fine for infrequently-changing data like theme or auth, but potentially costly for state that updates often and is read widely across the app.',
    },

    {
      type: 'paragraph',
      title: 'Redux: Centralized, Predictable State',
      content:
        'Redux centralizes all application state in a single store, updated only through dispatched actions and pure reducer functions — similar in spirit to useReducer, but app-wide, with excellent debugging tools (time-travel debugging, action logs) for complex state.',
    },

    {
      type: 'code',
      title: 'A Minimal Redux Toolkit Slice',
      language: 'jsx',
      code: `import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    incremented: (state) => { state.value += 1; },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });`,
    },

    {
      type: 'paragraph',
      title: 'Zustand: A Lightweight Alternative',
      content:
        'Zustand offers a much smaller API surface than Redux — a store is just a hook, with no Provider wrapping required and far less boilerplate for common cases.',
    },

    {
      type: 'code',
      title: 'A Zustand Store',
      language: 'jsx',
      code: `import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, increment } = useCounterStore();
  return <button onClick={increment}>{count}</button>;
}`,
    },

    {
      type: 'table',
      title: 'Comparing Options',
      headers: ['Tool', 'Boilerplate', 'Best For'],
      rows: [
        ['useState / useReducer', 'Minimal', 'Local or lifted state within a subtree'],
        ['Context', 'Low', 'Infrequently-changing, widely-shared data (theme, auth)'],
        ['Zustand', 'Low', 'App-wide state with minimal setup'],
        ['Redux Toolkit', 'Moderate', 'Large apps needing strict structure and powerful debugging tools'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Server State is a Different Problem',
      content:
        'Data that originates from a server (API responses) has different needs — caching, refetching, staleness — than purely client-side UI state. Libraries like TanStack Query (covered in the data fetching lesson) specialize in exactly that, and are often used alongside a separate client-state tool for UI-only state.',
    },

    {
      type: 'note',
      title: 'Don’t Reach for a Library Prematurely',
      content:
        'Many apps never actually need Redux or Zustand — Context plus a bit of careful component structuring is enough. Adding a state management library too early adds complexity and boilerplate the app doesn’t yet need.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for a dedicated library once you notice prop drilling becoming unmanageable or Context re-renders becoming a measured performance problem — not by default at the start of every project.',
    },
  ],

  quiz: [
    {
      question: 'What problem does a state management library like Redux or Zustand typically solve?',
      options: [
        'Styling components',
        'Managing large, frequently-updated, widely-shared state more efficiently than Context alone',
        'Routing between pages',
        'Compiling JSX',
      ],
      answer: 1,
    },
    {
      question: 'What is a key difference between server state (API data) and client UI state?',
      options: [
        'There is no difference',
        'Server state needs caching, refetching, and staleness handling that libraries like TanStack Query specialize in',
        'Server state never changes',
        'Client state cannot use hooks',
      ],
      answer: 1,
    },
    {
      question: 'Should every new React project start with Redux or Zustand?',
      options: [
        'Yes, always',
        'No — many apps are fine with useState/useReducer/Context; a library is added once a real need appears',
        'Only Redux should ever be used',
        'Only if using TypeScript',
      ],
      answer: 1,
    },
  ],

  previous: 'react-19-features',
  next: 'best-practices',
};
