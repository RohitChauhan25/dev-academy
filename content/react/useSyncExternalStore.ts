import { Tutorial } from '@/app/types/tutorial';

export const useSyncExternalStore: Tutorial = {
  slug: 'use-sync-external-store',

  title: 'useSyncExternalStore',

  description:
    'Learn how to safely subscribe a component to a data store that lives outside of React.',

  level: 'Intermediate',

  readingTime: '16 min',

  lesson: 'Lesson 25 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem: External State Sources',
      content:
        'Some data doesn’t live in React state at all — browser APIs like window.innerWidth, navigator.onLine, or a third-party state library’s store. Subscribing to these with a plain useEffect + useState pattern can produce subtly inconsistent UI under React’s concurrent rendering features.',
    },

    {
      type: 'paragraph',
      title: 'What useSyncExternalStore Does',
      content:
        'useSyncExternalStore(subscribe, getSnapshot) reads a value from an external store and automatically re-renders the component whenever that store changes, in a way that stays consistent even with concurrent rendering — this is the same mechanism state management libraries like Redux and Zustand use internally.',
    },

    {
      type: 'code',
      title: 'Subscribing to the Browser’s Online Status',
      language: 'jsx',
      code: `import { useSyncExternalStore } from "react";

function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function getSnapshot() {
  return navigator.onLine;
}

function useOnlineStatus() {
  return useSyncExternalStore(subscribe, getSnapshot);
}

function StatusBadge() {
  const isOnline = useOnlineStatus();
  return <span>{isOnline ? "🟢 Online" : "🔴 Offline"}</span>;
}`,
    },

    {
      type: 'table',
      title: 'useSyncExternalStore Arguments',
      headers: ['Argument', 'Purpose'],
      rows: [
        ['subscribe', 'A function that subscribes a callback to store changes, returning an unsubscribe function'],
        ['getSnapshot', 'A function that returns the store’s current value'],
        ['getServerSnapshot (optional)', 'A snapshot to use during server rendering, if the store doesn’t exist on the server'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Why Not Just useEffect + useState?',
      content:
        'A manual useEffect subscription can read a stale snapshot during React’s concurrent rendering, since the effect runs slightly after render. useSyncExternalStore is specifically designed to always return a value that’s torn-free and consistent with the rest of the render, even if the store changes mid-render.',
    },

    {
      type: 'code',
      title: 'Server Snapshot for SSR',
      language: 'jsx',
      code: `function useOnlineStatus() {
  return useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true // getServerSnapshot: assume "online" during server rendering
  );
}`,
    },

    {
      type: 'note',
      title: 'Mostly a Library-Author Tool',
      content:
        'Most application code never calls useSyncExternalStore directly — it’s primarily used inside state management libraries (Redux, Zustand, Jotai) to implement their own React bindings correctly. Recognizing it helps when reading those libraries’ source code.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for useSyncExternalStore only when subscribing directly to a genuinely external store outside of React’s own state (a browser API, a custom event emitter, or a non-React library) — for anything backed by React state itself, useState/useReducer/Context are the right tools.',
    },
  ],

  quiz: [
    {
      question: 'What kind of data source is useSyncExternalStore designed for?',
      options: [
        'React state managed with useState',
        'Data that lives outside of React, like a browser API or a third-party store',
        'CSS variables',
        'Route parameters',
      ],
      answer: 1,
    },
    {
      question: 'What does the getSnapshot function need to return?',
      options: [
        'A cleanup function',
        'The store’s current value',
        'A Promise',
        'A React element',
      ],
      answer: 1,
    },
    {
      question: 'Why is useSyncExternalStore preferred over a manual useEffect + useState subscription for external stores?',
      options: [
        'It’s shorter to type',
        'It guarantees a consistent, non-stale value even under concurrent rendering',
        'useEffect cannot subscribe to events at all',
        'It automatically formats the data',
      ],
      answer: 1,
    },
  ],

  previous: 'use-id',
  next: 'use-debug-value',
};
