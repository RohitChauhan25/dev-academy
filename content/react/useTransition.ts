import { Tutorial } from '@/app/types/tutorial';

export const useTransition: Tutorial = {
  slug: 'use-transition',

  title: 'useTransition',

  description:
    'Learn how to mark a state update as a low-priority transition, keeping the UI responsive during expensive re-renders.',

  level: 'Intermediate',

  readingTime: '16 min',

  lesson: 'Lesson 22 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem: Slow Updates Block the UI',
      content:
        'By default, every state update is treated as urgent — React tries to apply it right away. If that update triggers an expensive re-render (like re-filtering a huge list), the UI can feel like it’s freezing, since React doesn’t interrupt that work to keep something else (like a text input) feeling responsive.',
    },

    {
      type: 'paragraph',
      title: 'What useTransition Does',
      content:
        'useTransition lets you mark a state update as a "transition" — lower priority than urgent updates like typing — so React can keep the UI responsive and interrupt the transition’s work if something more urgent comes in.',
    },

    {
      type: 'code',
      title: 'A Search Box That Stays Responsive',
      language: 'jsx',
      code: `import { useState, useTransition } from "react";

function SearchPage({ allItems }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(allItems);
  const [isPending, startTransition] = useTransition();

  function handleChange(event) {
    const value = event.target.value;
    setQuery(value); // urgent: keeps the input feeling instant

    startTransition(() => {
      // low-priority: filtering a huge list won't block typing
      setResults(allItems.filter((item) => item.includes(value)));
    });
  }

  return (
    <>
      <input value={query} onChange={handleChange} />
      {isPending && <p>Updating results...</p>}
      <ResultsList items={results} />
    </>
  );
}`,
    },

    {
      type: 'table',
      title: 'useTransition Return Value',
      headers: ['Item', 'Purpose'],
      rows: [
        ['isPending', 'true while the transition is still processing in the background'],
        ['startTransition', 'Wraps a state update, marking it as low-priority'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Transitions Can Be Interrupted',
      content:
        'If the user keeps typing while a transition is still processing an older value, React abandons the stale, in-progress transition and starts a new one with the latest value — the UI never falls behind or shows outdated results from an interrupted update.',
    },

    {
      type: 'warning',
      title: 'startTransition Only Wraps State Updates',
      content:
        'Only the state updates called synchronously inside the function passed to startTransition are treated as a transition. An async operation like a fetch call inside it is not itself part of the transition — only the setState calls that happen after it resolves.',
    },

    {
      type: 'note',
      title: 'useTransition vs useDeferredValue',
      content:
        'useTransition marks the *update itself* as low priority (used when you control the event that triggers the update, like an onChange). useDeferredValue instead takes an already-changing value and lazily defers using it (useful when you don’t control where the value comes from, like a prop).',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for useTransition when a specific state update you control (in an event handler) triggers an expensive re-render, and you want the rest of the UI to stay interactive while it processes.',
    },
  ],

  quiz: [
    {
      question: 'What does startTransition let you do?',
      options: [
        'Delay a component from mounting',
        'Mark a state update as low-priority, so React can keep the UI responsive and interrupt it if needed',
        'Fetch data automatically',
        'Prevent a component from ever re-rendering',
      ],
      answer: 1,
    },
    {
      question: 'What does the isPending flag from useTransition indicate?',
      options: [
        'That an error occurred',
        'That the transition is still processing in the background',
        'That the component has unmounted',
        'That the network is offline',
      ],
      answer: 1,
    },
    {
      question: 'What happens if the user triggers a new transition while an older one is still processing?',
      options: [
        'Both run and race unpredictably',
        'React abandons the stale, in-progress transition and starts fresh with the latest value',
        'The app throws an error',
        'The second transition is queued and runs after the first fully completes',
      ],
      answer: 1,
    },
  ],

  previous: 'use-imperative-handle',
  next: 'use-deferred-value',
};
