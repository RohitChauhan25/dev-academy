export const react = {
  slug: 'react',

  title: 'React',

  description:
    'Learn React from beginner to advanced with step-by-step tutorials covering components, hooks, state management, routing, and performance.',

  level: 'Beginner to Advanced',

  duration: '14+ Hours',

  tutorials: [
    {
      level: 'Beginner',
      items: [
        {
          title: 'Introduction',
          slug: 'introduction',
          duration: '10 min',
          description: 'Learn what React is and why it’s used to build UIs.',
        },
        {
          title: 'Setup',
          slug: 'setup',
          duration: '12 min',
          description: 'Create a new React project with Vite.',
        },
        {
          title: 'JSX',
          slug: 'jsx',
          duration: '14 min',
          description: 'Write UI markup directly in JavaScript with JSX.',
        },
        {
          title: 'Components & Props',
          slug: 'components-and-props',
          duration: '16 min',
          description: 'Build reusable components and pass data with props.',
        },
        {
          title: 'Rendering Lists & Keys',
          slug: 'rendering-lists',
          duration: '14 min',
          description: 'Render arrays of data and understand the key prop.',
        },
        {
          title: 'Conditional Rendering',
          slug: 'conditional-rendering',
          duration: '12 min',
          description: 'Show or hide UI based on conditions.',
        },
        {
          title: 'Handling Events',
          slug: 'event-handling',
          duration: '14 min',
          description: 'Respond to clicks, input, and other user interactions.',
        },
        {
          title: 'useState & State',
          slug: 'state',
          duration: '18 min',
          description: 'Give components memory with the useState hook.',
        },
        {
          title: 'Forms & Controlled Inputs',
          slug: 'forms',
          duration: '16 min',
          description: 'Build forms with controlled input elements.',
        },
        {
          title: 'Component Composition',
          slug: 'component-composition',
          duration: '14 min',
          description: 'Compose components together using children.',
        },
        {
          title: 'Styling in React',
          slug: 'styling',
          duration: '14 min',
          description: 'CSS files, CSS Modules, and inline styles.',
        },
        {
          title: 'Fragments & Portals',
          slug: 'fragments-and-portals',
          duration: '12 min',
          description: 'Group elements without extra DOM nodes, and render outside the tree.',
        },
      ],
    },
    {
      level: 'Intermediate',
      items: [
        {
          title: 'useEffect & Side Effects',
          slug: 'use-effect',
          duration: '20 min',
          description: 'Synchronize components with external systems.',
        },
        {
          title: 'Component Lifecycle',
          slug: 'lifecycle',
          duration: '14 min',
          description: 'Understand mounting, updating, and unmounting.',
        },
        {
          title: 'Lifting State Up',
          slug: 'lifting-state-up',
          duration: '14 min',
          description: 'Share state between sibling components.',
        },
        {
          title: 'Context API',
          slug: 'context-api',
          duration: '18 min',
          description: 'Avoid prop drilling with React Context.',
        },
        {
          title: 'useRef & Refs',
          slug: 'refs',
          duration: '14 min',
          description: 'Access DOM nodes and persist mutable values.',
        },
        {
          title: 'Custom Hooks',
          slug: 'custom-hooks',
          duration: '16 min',
          description: 'Extract and reuse stateful logic across components.',
        },
        {
          title: 'Hooks Overview',
          slug: 'hooks-overview',
          duration: '14 min',
          description: 'The Rules of Hooks and a map of every hook covered here.',
        },
        {
          title: 'useLayoutEffect',
          slug: 'use-layout-effect',
          duration: '14 min',
          description: 'Fire an effect synchronously before the browser paints.',
        },
        {
          title: 'useImperativeHandle',
          slug: 'use-imperative-handle',
          duration: '14 min',
          description: 'Customize the ref instance value exposed by a component.',
        },
        {
          title: 'useReducer',
          slug: 'use-reducer',
          duration: '18 min',
          description: 'Manage complex state transitions predictably.',
        },
        {
          title: 'useMemo & useCallback',
          slug: 'memoization',
          duration: '18 min',
          description: 'Avoid unnecessary recalculations and re-renders.',
        },
        {
          title: 'useTransition',
          slug: 'use-transition',
          duration: '16 min',
          description: 'Mark a state update as low-priority to stay responsive.',
        },
        {
          title: 'useDeferredValue',
          slug: 'use-deferred-value',
          duration: '14 min',
          description: 'Defer re-rendering a non-urgent part of the UI.',
        },
        {
          title: 'useId',
          slug: 'use-id',
          duration: '12 min',
          description: 'Generate unique, SSR-safe IDs for accessibility.',
        },
        {
          title: 'useSyncExternalStore',
          slug: 'use-sync-external-store',
          duration: '16 min',
          description: 'Safely subscribe to a store outside of React.',
        },
        {
          title: 'useDebugValue',
          slug: 'use-debug-value',
          duration: '10 min',
          description: 'Label a custom hook’s value in React DevTools.',
        },
        {
          title: 'Error Boundaries',
          slug: 'error-boundaries',
          duration: '14 min',
          description: 'Catch rendering errors gracefully.',
        },
      ],
    },
    {
      level: 'Advanced',
      items: [
        {
          title: 'The use() Hook',
          slug: 'use',
          duration: '16 min',
          description: 'Read Promises and Context conditionally with use().',
        },
        {
          title: 'useOptimistic',
          slug: 'use-optimistic',
          duration: '14 min',
          description: 'Show an expected result before an async action finishes.',
        },
        {
          title: 'useActionState',
          slug: 'use-action-state',
          duration: '16 min',
          description: 'Track a form Action’s pending state and result.',
        },
        {
          title: 'useFormStatus',
          slug: 'use-form-status',
          duration: '14 min',
          description: 'Read the pending status of the nearest parent form.',
        },
        {
          title: 'React Router',
          slug: 'react-router',
          duration: '20 min',
          description: 'Add client-side routing to a React app.',
        },
        {
          title: 'Performance Optimization',
          slug: 'performance-optimization',
          duration: '18 min',
          description: 'React.memo, code splitting, and avoiding re-renders.',
        },
        {
          title: 'Suspense & Lazy Loading',
          slug: 'suspense-and-lazy',
          duration: '16 min',
          description: 'Load components and data with Suspense.',
        },
        {
          title: 'Server vs Client Components',
          slug: 'server-vs-client-components',
          duration: '16 min',
          description: 'Understand the React Server Component model.',
        },
        {
          title: 'Data Fetching Patterns',
          slug: 'data-fetching',
          duration: '18 min',
          description: 'Fetch, cache, and manage server data.',
        },
        {
          title: 'Testing React Components',
          slug: 'testing-react',
          duration: '18 min',
          description: 'Test components with React Testing Library.',
        },
        {
          title: 'React 19 Features',
          slug: 'react-19-features',
          duration: '16 min',
          description: 'Actions, the use() hook, and other new APIs.',
        },
        {
          title: 'State Management Libraries',
          slug: 'state-management',
          duration: '16 min',
          description: 'When and why to reach for Redux, Zustand, or similar.',
        },
        {
          title: 'Best Practices',
          slug: 'best-practices',
          duration: '16 min',
          description: 'Write maintainable, scalable React applications.',
        },
      ],
    },
  ],
};
