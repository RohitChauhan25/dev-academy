import { Tutorial } from '@/app/types/tutorial';

export const refs: Tutorial = {
  slug: 'refs',

  title: 'useRef & Refs',

  description:
    'Learn how to access DOM nodes directly and persist mutable values across renders without triggering re-renders, using useRef.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 17 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Ref?',
      content:
        'A ref is a mutable value that persists across renders, similar to state — but unlike state, changing a ref does not trigger a re-render. useRef(initialValue) returns an object with a single .current property.',
    },

    {
      type: 'code',
      title: 'A Basic Ref',
      language: 'jsx',
      code: `import { useRef } from "react";

function Example() {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return <p>This component has rendered {renderCount.current} times.</p>;
}`,
    },

    {
      type: 'paragraph',
      title: 'Accessing DOM Elements',
      content:
        'The most common use of a ref is to get direct access to a DOM node — for example, to call .focus() on an input, which isn’t something you can do declaratively through props alone.',
    },

    {
      type: 'code',
      title: 'Focusing an Input on Mount',
      language: 'jsx',
      code: `import { useRef, useEffect } from "react";

function SearchInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="Search..." />;
}`,
    },

    {
      type: 'paragraph',
      title: 'Refs vs State',
      content:
        'State is for values that affect what’s rendered on screen — changing state re-renders the component. Refs are for values you need to keep around between renders, but that shouldn’t trigger a re-render when they change.',
    },

    {
      type: 'table',
      title: 'State vs Refs',
      headers: ['', 'State (useState)', 'Refs (useRef)'],
      rows: [
        ['Triggers a re-render on change', 'Yes', 'No'],
        ['Value persists between renders', 'Yes', 'Yes'],
        ['Typical use', 'Data shown in the UI', 'DOM access, timers, values that don’t affect rendering'],
      ],
    },

    {
      type: 'code',
      title: 'Storing a Timer ID in a Ref',
      language: 'jsx',
      code: `function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  function start() {
    intervalRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
  }

  function stop() {
    clearInterval(intervalRef.current);
  }

  return (
    <>
      <p>{seconds}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}`,
    },

    {
      type: 'warning',
      title: 'Don’t Read or Write Refs During Rendering',
      content:
        'Reading or writing ref.current while a component is rendering makes rendering unpredictable, since refs don’t follow React’s usual re-render rules. Only access refs inside event handlers or effects, not directly in the render body.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for a ref only when you specifically need to escape React’s declarative model — direct DOM access, storing a mutable value like a timer ID, or measuring an element’s size. If a value affects what’s rendered, it belongs in state instead.',
    },
  ],

  quiz: [
    {
      question: 'Does updating a ref’s .current value trigger a re-render?',
      options: ['Yes, always', 'No', 'Only for DOM refs', 'Only inside useEffect'],
      answer: 1,
    },
    {
      question: 'What is the most common use for a ref attached to a JSX element?',
      options: [
        'Styling the element',
        'Getting direct access to the underlying DOM node',
        'Passing props to the element',
        'Adding a key',
      ],
      answer: 1,
    },
    {
      question: 'Where should you read or write a ref’s value?',
      options: [
        'Directly in the render body',
        'Inside event handlers or effects, not during rendering',
        'Only inside JSX',
        'It doesn’t matter',
      ],
      answer: 1,
    },
  ],

  previous: 'context-api',
  next: 'custom-hooks',
};
