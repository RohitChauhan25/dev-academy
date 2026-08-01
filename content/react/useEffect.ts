import { Tutorial } from '@/app/types/tutorial';

export const useEffect: Tutorial = {
  slug: 'use-effect',

  title: 'useEffect & Side Effects',

  description:
    'Learn how to synchronize a component with external systems — like APIs, timers, and subscriptions — using useEffect.',

  level: 'Intermediate',

  readingTime: '20 min',

  lesson: 'Lesson 13 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Side Effect?',
      content:
        'Rendering should be a pure calculation of JSX from props and state. A side effect is anything that reaches outside that calculation — fetching data, subscribing to an event, manually touching the DOM, or starting a timer.',
    },

    {
      type: 'code',
      title: 'A Basic useEffect',
      language: 'jsx',
      code: `import { useEffect, useState } from "react";

function DocumentTitle({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <h1>{title}</h1>;
}`,
    },

    {
      type: 'paragraph',
      title: 'The Dependency Array',
      content:
        'The second argument to useEffect tells React when to re-run the effect. It re-runs whenever any value in that array changes between renders.',
    },

    {
      type: 'table',
      title: 'Dependency Array Behavior',
      headers: ['Dependency Array', 'When the Effect Runs'],
      rows: [
        ['Omitted entirely', 'After every single render'],
        ['[] (empty array)', 'Only once, after the first render'],
        ['[a, b]', 'After the first render, and again whenever a or b changes'],
      ],
    },

    {
      type: 'code',
      title: 'Fetching Data on Mount',
      language: 'jsx',
      code: `function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]); // re-fetches whenever userId changes

  if (!user) return <p>Loading...</p>;
  return <h2>{user.name}</h2>;
}`,
    },

    {
      type: 'paragraph',
      title: 'Cleanup Functions',
      content:
        'If an effect returns a function, React calls it before the effect runs again, and once more when the component unmounts — the right place to cancel subscriptions, clear timers, or remove event listeners to avoid memory leaks.',
    },

    {
      type: 'code',
      title: 'Cleaning Up an Interval',
      language: 'jsx',
      code: `function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(id); // cleanup: runs on unmount
  }, []);

  return <p>{seconds}s elapsed</p>;
}`,
    },

    {
      type: 'warning',
      title: 'Missing Dependencies Cause Stale Values',
      content:
        'If an effect uses a prop or state value but omits it from the dependency array, the effect can keep using an outdated ("stale") value from an earlier render. Most editors with the eslint-plugin-react-hooks rule will warn about this automatically.',
    },

    {
      type: 'note',
      title: 'Not Every Side Effect Needs useEffect',
      content:
        'Event handlers (like a click handler making an API call) don’t need useEffect — they already run in response to a specific user action. useEffect is specifically for synchronizing with something external whenever the component renders with new values.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always include every value from component scope that your effect uses in the dependency array. If that causes the effect to re-run too often, that’s usually a sign the effect (or the surrounding state) needs restructuring, not that the dependency should be omitted.',
    },
  ],

  quiz: [
    {
      question: 'What does an empty dependency array [] mean for useEffect?',
      options: [
        'The effect never runs',
        'The effect runs once, after the first render',
        'The effect runs on every render',
        'The effect runs only when the component unmounts',
      ],
      answer: 1,
    },
    {
      question: 'What does a function returned from useEffect do?',
      options: [
        'It replaces the render output',
        'It runs as a cleanup function, before the next effect run and on unmount',
        'It’s called immediately, ignoring the effect body',
        'It has no special meaning',
      ],
      answer: 1,
    },
    {
      question: 'Why is a missing dependency in the dependency array risky?',
      options: [
        'It causes a syntax error',
        'The effect can keep using a stale, outdated value from an earlier render',
        'It disables the component entirely',
        'It has no consequence',
      ],
      answer: 1,
    },
  ],

  previous: 'fragments-and-portals',
  next: 'lifecycle',
};
