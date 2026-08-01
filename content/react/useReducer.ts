import { Tutorial } from '@/app/types/tutorial';

export const useReducer: Tutorial = {
  slug: 'use-reducer',

  title: 'useReducer',

  description:
    'Learn how to manage complex state transitions predictably using useReducer, an alternative to useState.',

  level: 'Intermediate',

  readingTime: '18 min',

  lesson: 'Lesson 31 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'When useState Starts to Strain',
      content:
        'A component with several related pieces of state, updated by many different event handlers, can become hard to follow — related updates get scattered across the component, and keeping them in sync involves multiple setState calls.',
    },

    {
      type: 'paragraph',
      title: 'The Reducer Pattern',
      content:
        'useReducer centralizes state updates into a single function called a reducer, which takes the current state and an "action" describing what happened, and returns the new state.',
    },

    {
      type: 'code',
      title: 'A Basic Counter with useReducer',
      language: 'jsx',
      code: `import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}`,
    },

    {
      type: 'table',
      title: 'useReducer Return Value',
      headers: ['Item', 'Purpose'],
      rows: [
        ['state', 'The current state value'],
        ['dispatch', 'A function to send an action describing what happened'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Actions with a Payload',
      content:
        'An action can carry extra data beyond just its type, letting the reducer make decisions based on the specifics of what happened.',
    },

    {
      type: 'code',
      title: 'An Action with a Payload',
      language: 'jsx',
      code: `function reducer(state, action) {
  switch (action.type) {
    case "add_todo":
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case "toggle_todo":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);

  function addTodo(text) {
    dispatch({ type: "add_todo", payload: text });
  }

  // ...
}`,
    },

    {
      type: 'table',
      title: 'useState vs useReducer',
      headers: ['', 'useState', 'useReducer'],
      rows: [
        ['Best for', 'Simple, independent values', 'Complex state with several related sub-values or transitions'],
        ['Update logic location', 'Scattered across event handlers', 'Centralized in one reducer function'],
        ['Testability', 'Harder to isolate', 'Easy — a reducer is a pure function you can test directly'],
      ],
    },

    {
      type: 'note',
      title: 'Reducers Must Be Pure',
      content:
        'A reducer should never mutate the existing state or cause side effects — given the same state and action, it must always return the same new state, computed as a new object/array rather than an in-place mutation.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for useReducer once a component’s state updates start depending on each other, or when the next state depends on several parts of the previous state at once — it keeps that logic testable and in one place instead of scattered across handlers.',
    },
  ],

  quiz: [
    {
      question: 'What are the two values returned by useReducer?',
      options: ['value and setValue', 'state and dispatch', 'data and error', 'current and previous'],
      answer: 1,
    },
    {
      question: 'What does a reducer function receive as arguments?',
      options: ['Only the action', 'The current state and an action describing what happened', 'Only props', 'Nothing'],
      answer: 1,
    },
    {
      question: 'When is useReducer generally preferred over useState?',
      options: [
        'For every component, always',
        'When state updates are complex and depend on several related sub-values',
        'Only for boolean values',
        'Never, useState should always be used',
      ],
      answer: 1,
    },
  ],

  previous: 'use-form-status',
  next: 'memoization',
};
