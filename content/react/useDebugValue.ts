import { Tutorial } from '@/app/types/tutorial';

export const useDebugValue: Tutorial = {
  slug: 'use-debug-value',

  title: 'useDebugValue',

  description:
    'Learn how to label a custom hook’s internal value so it’s readable in React DevTools.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 26 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'What useDebugValue Does',
      content:
        'useDebugValue(value) adds a label to a custom hook, shown next to the component in React DevTools’ component tree — purely a developer-experience aid with zero effect on the component’s actual behavior or output.',
    },

    {
      type: 'code',
      title: 'Labeling a Custom Hook',
      language: 'jsx',
      code: `import { useState, useEffect, useDebugValue } from "react";

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleChange = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  useDebugValue(isOnline ? "Online" : "Offline"); // shown in React DevTools

  return isOnline;
}`,
    },

    {
      type: 'paragraph',
      title: 'Why It’s Only Useful for Custom Hooks',
      content:
        'Built-in hooks like useState already show their current value directly in DevTools. useDebugValue matters specifically for your own custom hooks, whose internal state would otherwise appear as an opaque, unlabeled entry in the component tree.',
    },

    {
      type: 'paragraph',
      title: 'Deferring Expensive Formatting with a Function',
      content:
        'If formatting the debug value is itself expensive, useDebugValue accepts an optional second argument — a formatting function — that only runs when DevTools is actually open and inspecting that component, avoiding wasted work during normal rendering.',
    },

    {
      type: 'code',
      title: 'Deferred Formatting',
      language: 'jsx',
      code: `useDebugValue(date, (d) => d.toLocaleDateString());
// The formatting function only runs when DevTools inspects this hook`,
    },

    {
      type: 'note',
      title: 'Has No Effect Outside of Development',
      content:
        'useDebugValue does nothing observable to end users — it exists purely to make custom hooks easier to inspect while developing, and has no impact on production behavior.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Add useDebugValue to custom hooks that are shared across a team or published as a library, where the extra clarity in DevTools helps other developers debug faster. It’s rarely necessary for simple, one-off hooks used only within a single component.',
    },
  ],

  quiz: [
    {
      question: 'What does useDebugValue affect?',
      options: [
        'The component’s rendered output',
        'Only how a custom hook’s value is labeled in React DevTools',
        'The component’s performance in production',
        'The order hooks are called in',
      ],
      answer: 1,
    },
    {
      question: 'Why is useDebugValue mainly useful for custom hooks specifically?',
      options: [
        'It only works with custom hooks technically',
        'Built-in hooks like useState already show their value in DevTools, while custom hooks otherwise appear opaque',
        'It replaces the need for useState',
        'It only works with useEffect',
      ],
      answer: 1,
    },
    {
      question: 'What is the purpose of the optional second argument to useDebugValue?',
      options: [
        'It sets a default value',
        'A formatting function that only runs when DevTools is actively inspecting the hook',
        'It enables the hook conditionally',
        'It sets the hook’s dependency array',
      ],
      answer: 1,
    },
  ],

  previous: 'use-sync-external-store',
  next: 'use',
};
