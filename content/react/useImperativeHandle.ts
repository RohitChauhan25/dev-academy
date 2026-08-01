import { Tutorial } from '@/app/types/tutorial';

export const useImperativeHandle: Tutorial = {
  slug: 'use-imperative-handle',

  title: 'useImperativeHandle',

  description:
    'Learn how to customize the instance value a parent receives when it attaches a ref to your component.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 21 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem: Exposing Only What’s Needed',
      content:
        'By default, attaching a ref to a custom component doesn’t work at all — refs only attach to DOM elements unless the component explicitly forwards one. Even when forwarded, giving the parent direct access to the entire underlying DOM node exposes far more than it usually needs.',
    },

    {
      type: 'paragraph',
      title: 'What useImperativeHandle Does',
      content:
        'useImperativeHandle lets a component define exactly what value should be exposed when a parent attaches a ref to it — typically a small object with only a couple of specific methods, instead of the whole raw DOM node.',
    },

    {
      type: 'code',
      title: 'Exposing a Limited API from an Input',
      language: 'jsx',
      code: `import { useRef, useImperativeHandle } from "react";

function CustomInput({ ref, ...props }) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus();
    },
    clear() {
      inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} {...props} />;
}

function Form() {
  const inputRef = useRef(null);

  return (
    <>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <button onClick={() => inputRef.current.clear()}>Clear</button>
    </>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'Why Not Just Expose the Whole DOM Node?',
      content:
        'Exposing the raw input element would let a parent do anything to it directly — change its style, remove it, read arbitrary properties — tightly coupling the parent to the component’s internal implementation. Exposing only focus() and clear() keeps a clean, intentional boundary between the two.',
    },

    {
      type: 'note',
      title: 'Older React Versions Needed forwardRef',
      content:
        'Before React 19, a component had to be wrapped in forwardRef() to accept a ref prop at all. As of React 19, function components can accept ref directly as a regular prop, removing the need for forwardRef in most cases — useImperativeHandle still works the same way regardless.',
    },

    {
      type: 'warning',
      title: 'Use Sparingly',
      content:
        'Reaching for imperative APIs (focus(), clear(), scrollIntoView()) works against React’s declarative model. It’s appropriate for genuinely imperative browser behaviors, but state and rendering should still flow through props and state wherever possible.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Only expose the smallest possible imperative API a parent actually needs — a couple of named methods — rather than the whole underlying DOM node or component instance.',
    },
  ],

  quiz: [
    {
      question: 'What does useImperativeHandle let a component do?',
      options: [
        'Prevent all re-renders',
        'Customize exactly what value a parent receives when it attaches a ref to the component',
        'Replace useState',
        'Fetch data automatically',
      ],
      answer: 1,
    },
    {
      question: 'Why is exposing a small custom API often better than exposing the raw DOM node?',
      options: [
        'It’s faster',
        'It keeps a clean boundary and avoids tightly coupling the parent to internal implementation details',
        'The raw DOM node cannot be exposed at all',
        'It’s required by TypeScript',
      ],
      answer: 1,
    },
    {
      question: 'As of React 19, is forwardRef still required to accept a ref prop?',
      options: [
        'Yes, always',
        'No — function components can accept ref directly as a regular prop',
        'Only for class components',
        'Only when using useImperativeHandle',
      ],
      answer: 1,
    },
  ],

  previous: 'use-layout-effect',
  next: 'use-transition',
};
