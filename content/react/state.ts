import { Tutorial } from '@/app/types/tutorial';

export const state: Tutorial = {
  slug: 'state',

  title: 'useState & State',

  description:
    'Learn how to give a component memory that persists across renders using the useState hook.',

  level: 'Beginner',

  readingTime: '18 min',

  lesson: 'Lesson 8 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Not Just Use a Regular Variable?',
      content:
        'A regular variable inside a component resets every time the component re-renders, and changing it doesn’t trigger a re-render at all. State solves both problems: it persists between renders, and updating it tells React to re-render the component.',
    },

    {
      type: 'code',
      title: 'A Basic Counter with useState',
      language: 'jsx',
      code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'Reading the useState Return Value',
      content:
        'useState(initialValue) returns an array with exactly two items: the current value, and a function to update it. Array destructuring is used to name them however you like.',
    },

    {
      type: 'table',
      title: 'useState Return Value',
      headers: ['Item', 'Purpose'],
      rows: [
        ['count', 'The current state value for this render'],
        ['setCount', 'A function that updates the state and schedules a re-render'],
      ],
    },

    {
      type: 'paragraph',
      title: 'State Updates Trigger Re-Renders',
      content:
        'Calling the setter function tells React: "the state changed, please re-render this component (and its children) with the new value." The component function runs again from the top, returning new JSX based on the updated state.',
    },

    {
      type: 'paragraph',
      title: 'Functional Updates',
      content:
        'When a new state value depends on the previous one, pass a function to the setter instead of a plain value — this guarantees you’re always updating from the latest state, even if multiple updates are queued together.',
    },

    {
      type: 'code',
      title: 'Functional Update Form',
      language: 'jsx',
      code: `function Counter() {
  const [count, setCount] = useState(0);

  function handleTripleIncrement() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return <button onClick={handleTripleIncrement}>Count: {count}</button>;
  // Correctly increments by 3, since each update reads the latest prev value
}`,
    },

    {
      type: 'warning',
      title: 'State Updates Are Asynchronous (Batched)',
      content:
        'setCount(count + 1) doesn’t update count immediately — it schedules an update for the next render. Reading count right after calling the setter still shows the old value, which is why the functional update form matters for sequential updates.',
    },

    {
      type: 'paragraph',
      title: 'Never Mutate State Directly',
      content:
        'State must always be updated by calling its setter with a new value — mutating an object or array in place and expecting a re-render will not work, since React compares references to detect changes.',
    },

    {
      type: 'code',
      title: 'Updating Object State Immutably',
      language: 'jsx',
      code: `function Profile() {
  const [user, setUser] = useState({ name: "Alice", age: 30 });

  function birthday() {
    // Wrong: user.age++; setUser(user); — mutates in place, won't trigger a re-render
    setUser({ ...user, age: user.age + 1 }); // Correct: a new object
  }

  return <button onClick={birthday}>{user.name} is {user.age}</button>;
}`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Keep state as minimal as possible — don’t store anything in state that can be derived from other state or props during render. Fewer state variables means fewer places for state to get out of sync.',
    },
  ],

  quiz: [
    {
      question: 'What does useState(0) return?',
      options: [
        'Just the current value',
        'An array with the current value and a setter function',
        'An object with a .value property',
        'A promise',
      ],
      answer: 1,
    },
    {
      question: 'Does calling the state setter update the variable immediately?',
      options: ['Yes, instantly', 'No — it schedules a re-render for the next render cycle', 'Only for numbers', 'Only in class components'],
      answer: 1,
    },
    {
      question: 'Why is setUser({ ...user, age: user.age + 1 }) correct, but mutating user.age directly is not?',
      options: [
        'Mutating numbers is not allowed in JavaScript',
        'React detects state changes by comparing references, so a new object is required to trigger a re-render',
        'Spread syntax is required by useState',
        'There is no real difference',
      ],
      answer: 1,
    },
  ],

  previous: 'event-handling',
  next: 'forms',
};
