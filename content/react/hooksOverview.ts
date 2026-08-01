import { Tutorial } from '@/app/types/tutorial';

export const hooksOverview: Tutorial = {
  slug: 'hooks-overview',

  title: 'Hooks Overview',

  description:
    'Understand what hooks are, why they exist, the Rules of Hooks, and get a map of every built-in hook covered in this section.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 19 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Hook?',
      content:
        'A hook is a special function, always starting with "use", that lets a function component tap into React features — state, side effects, refs, context, and more — without needing to write a class.',
    },

    {
      type: 'paragraph',
      title: 'Why Hooks Exist',
      content:
        'Before hooks (introduced in React 16.8), stateful logic could only live in class components, using lifecycle methods like componentDidMount. Hooks let that same logic live in plain functions, making it far easier to reuse (via custom hooks) and to keep related logic grouped together instead of split across lifecycle methods.',
    },

    {
      type: 'table',
      title: 'Every Hook Covered in This Section',
      headers: ['Hook', 'Purpose'],
      rows: [
        ['useState', 'Give a component memory that persists across renders'],
        ['useEffect', 'Synchronize with an external system after rendering'],
        ['useLayoutEffect', 'Like useEffect, but fires synchronously before the browser paints'],
        ['useContext', 'Read a value from a Context Provider, avoiding prop drilling'],
        ['useReducer', 'Manage complex, related state transitions with a reducer function'],
        ['useRef', 'Access a DOM node or persist a mutable value without re-rendering'],
        ['useImperativeHandle', 'Customize the ref instance value exposed by a component'],
        ['useMemo', 'Cache the result of an expensive calculation between renders'],
        ['useCallback', 'Cache a function reference between renders'],
        ['useTransition', 'Mark a state update as low-priority so the UI stays responsive'],
        ['useDeferredValue', 'Defer re-rendering a non-urgent part of the UI'],
        ['useId', 'Generate a unique, SSR-safe id for accessibility attributes'],
        ['useSyncExternalStore', 'Safely subscribe to a store outside of React'],
        ['useDebugValue', 'Label a custom hook’s value in React DevTools'],
        ['use', 'Read a Promise or Context value, callable conditionally'],
        ['useOptimistic', 'Show an expected result immediately before an async action finishes'],
        ['useActionState', 'Track a form Action’s pending state and result'],
        ['useFormStatus', 'Read the pending status of the nearest parent form'],
      ],
    },

    {
      type: 'paragraph',
      title: 'The Rules of Hooks',
      content:
        'Hooks rely on being called in the exact same order on every render, so React can correctly match each hook call to its internal state between renders. This leads to two strict rules.',
    },

    {
      type: 'list',
      title: 'The Two Rules',
      items: [
        'Only call hooks at the top level — never inside loops, conditions, or nested functions.',
        'Only call hooks from React function components or from other custom hooks — never from plain JavaScript functions.',
      ],
    },

    {
      type: 'code',
      title: 'Breaking the Rules (Don’t Do This)',
      language: 'jsx',
      code: `function Profile({ showBio }) {
  // Wrong: a hook call inside a condition changes the order between renders
  if (showBio) {
    const [bio, setBio] = useState("");
  }

  // Correct: call the hook unconditionally, then branch on the value
  const [bio, setBio] = useState("");
  if (showBio) {
    // use bio here
  }
}`,
    },

    {
      type: 'note',
      title: 'A Linter Catches Most Violations Automatically',
      content:
        'The eslint-plugin-react-hooks package (included by default in most React project templates) flags Rules of Hooks violations and missing effect dependencies as you type, so you rarely need to memorize every edge case manually.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use this section as a reference. You don’t need to memorize every hook up front — come back to a specific hook’s lesson whenever you hit a problem it solves (measuring layout, deferring a slow render, subscribing to an external store, and so on).',
    },
  ],

  quiz: [
    {
      question: 'What must every hook’s name start with?',
      options: ['"get"', '"use"', '"with"', '"on"'],
      answer: 1,
    },
    {
      question: 'Why can’t a hook be called conditionally, e.g. inside an if statement?',
      options: [
        'It causes a syntax error',
        'React matches hook calls to their internal state by call order, which must stay identical between renders',
        'Conditional hooks are slower',
        'It’s only a style preference, not a real rule',
      ],
      answer: 1,
    },
    {
      question: 'Where can hooks be called from?',
      options: [
        'Any JavaScript function',
        'Only React function components and other custom hooks',
        'Only class components',
        'Only top-level module code',
      ],
      answer: 1,
    },
  ],

  previous: 'custom-hooks',
  next: 'use-layout-effect',
};
