import type { InterviewQuestionTopic } from '@/content/javascript/interview-questions';

export const reactInterviewQuestions: InterviewQuestionTopic[] = [
  {
    slug: 'introduction',
    title: 'React Introduction',
    questions: [
      {
        question: 'What is React?',
        answer:
          'A JavaScript library, created by Meta, for building user interfaces declaratively out of reusable components. You describe what the UI should look like for a given state, and React handles updating the actual DOM to match.',
        difficulty: 'beginner',
      },
      {
        question: 'What is the difference between declarative and imperative UI programming?',
        answer:
          'Imperative code describes the exact steps to reach a result (manually manipulating the DOM). Declarative code describes the desired end result for a given state, and lets the framework figure out how to get there — the approach React embraces.',
        difficulty: 'beginner',
      },
      {
        question: 'Is React a full framework?',
        answer:
          'No — React is a UI library. Routing, data-fetching conventions, and build tooling come from separate libraries or frameworks (like React Router or Next.js) built around it.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'setup',
    title: 'React Setup',
    questions: [
      {
        question: 'What tool is commonly recommended to quickly start a new plain React project?',
        answer:
          'Vite — it offers a fast dev server and build setup with minimal configuration for client-only React apps.',
        difficulty: 'beginner',
      },
      {
        question: 'What does createRoot(...).render(<App />) do?',
        answer:
          'It attaches React to a DOM node (typically a single root <div>) and renders the given component tree into it — the entry point that starts a React app.',
        difficulty: 'beginner',
      },
      {
        question: 'What is <StrictMode> used for?',
        answer:
          'A development-only wrapper that helps surface common mistakes, by intentionally double-invoking certain functions and warning about deprecated patterns. It has no effect on production builds.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'jsx',
    title: 'JSX',
    questions: [
      {
        question: 'What does JSX compile down to?',
        answer:
          'Regular JavaScript function calls, like React.createElement(type, props, children) — browsers never see JSX directly; a build tool transforms it before the code runs.',
        difficulty: 'beginner',
      },
      {
        question: 'Why is className used instead of class in JSX?',
        answer:
          'Because JSX attributes ultimately become JavaScript object properties passed to createElement, and class is a reserved word in JavaScript, so React uses className instead.',
        difficulty: 'beginner',
      },
      {
        question: 'Why must a component return a single root element (or a Fragment)?',
        answer:
          'JSX compiles to a single function call tree, so a component can only return one root node. A Fragment (<>...</>) lets you return multiple sibling elements without adding an extra, meaningless DOM node.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'components-and-props',
    title: 'Components & Props',
    questions: [
      {
        question: 'What must every component’s name start with, and why?',
        answer:
          'A capital letter — this is how React (and JSX) distinguishes a custom component (<MyComponent />) from a built-in HTML tag (<div />).',
        difficulty: 'beginner',
      },
      {
        question: 'Can a component modify the props it receives?',
        answer:
          'No — props are read-only. Data flows one way, from parent to child; a child that needs to trigger a change should call a callback function passed down as a prop instead.',
        difficulty: 'beginner',
      },
      {
        question: 'What is the special children prop?',
        answer:
          'It automatically contains whatever JSX is nested between a component’s opening and closing tags, letting a component wrap and render arbitrary content passed by its parent.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'rendering-lists',
    title: 'Rendering Lists & Keys',
    questions: [
      {
        question: 'What is the purpose of the key prop when rendering a list?',
        answer:
          'It helps React identify which items changed, were added, or were removed between renders, so it can update the DOM and preserve state correctly for the right items.',
        difficulty: 'beginner',
      },
      {
        question: 'Why is using the array index as a key considered risky?',
        answer:
          'If the list is reordered, filtered, or has items inserted/removed, index-based keys can cause React to associate state with the wrong item, since the index no longer reliably identifies the same logical item across renders.',
        difficulty: 'intermediate',
      },
      {
        question: 'Is a key passed down to the child component as a regular prop?',
        answer:
          'No — key is a special value used internally by React for reconciliation, and is never accessible as props.key inside the component.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'conditional-rendering',
    title: 'Conditional Rendering',
    questions: [
      {
        question: 'How does React handle conditional rendering?',
        answer:
          'Through plain JavaScript — if statements, ternary expressions, and logical operators — since JSX is just an expression returned from a function, not a special templating syntax.',
        difficulty: 'beginner',
      },
      {
        question: 'What is a common bug with {count && <Component />} when count is 0?',
        answer:
          'Since 0 is falsy but still a valid, renderable value, React renders the literal "0" on screen instead of nothing. Using a comparison like count > 0 avoids this.',
        difficulty: 'intermediate',
      },
      {
        question: 'What happens when a component returns null?',
        answer:
          'Nothing is rendered for that component — it’s a valid way to conditionally render "no UI" at all.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'event-handling',
    title: 'Handling Events',
    questions: [
      {
        question: 'What is wrong with writing onClick={handleClick()} instead of onClick={handleClick}?',
        answer:
          'The version with parentheses calls handleClick immediately during render and passes its return value as the handler, instead of passing a reference to the function to be called later on click.',
        difficulty: 'beginner',
      },
      {
        question: 'How do you pass an argument to an event handler?',
        answer:
          'By wrapping the call in an inline arrow function, e.g. onClick={() => handleClick(id)}, so the function is only invoked when the event actually fires.',
        difficulty: 'beginner',
      },
      {
        question: 'What does event.preventDefault() commonly stop?',
        answer:
          'A browser’s default action for that event — most commonly, preventing a form submission from triggering a full page reload.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'state',
    title: 'useState & State',
    questions: [
      {
        question: 'What does useState(initialValue) return?',
        answer:
          'An array with exactly two items: the current state value, and a setter function used to update it and trigger a re-render.',
        difficulty: 'beginner',
      },
      {
        question: 'Does calling a state setter update the variable immediately?',
        answer:
          'No — it schedules a re-render for the next render cycle. Reading the state variable immediately after calling its setter still shows the old value from the current render.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why should you use the functional update form, setCount(prev => prev + 1), for sequential updates?',
        answer:
          'It guarantees each update reads the latest state value, even when several updates are queued together — using the plain value form (setCount(count + 1)) repeatedly can incorrectly reuse the same stale value.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'forms',
    title: 'Forms & Controlled Inputs',
    questions: [
      {
        question: 'What makes an input "controlled"?',
        answer:
          'Its value is driven entirely by React state rather than the DOM’s own internal state — the value comes from a state variable, and onChange updates that state on every keystroke.',
        difficulty: 'beginner',
      },
      {
        question: 'Which attribute does a controlled checkbox use instead of value?',
        answer:
          'checked, paired with an onChange handler reading event.target.checked.',
        difficulty: 'beginner',
      },
      {
        question: 'What is the advantage of managing multiple form fields with a single state object instead of one useState call per field?',
        answer:
          'It reduces boilerplate for forms with many fields, and each change handler can update just the changed key using the input’s name attribute and a spread update.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'component-composition',
    title: 'Component Composition',
    questions: [
      {
        question: 'What is "prop drilling"?',
        answer:
          'Passing a prop down through several intermediate components that don’t use it themselves, purely to reach a deeply nested child that does.',
        difficulty: 'intermediate',
      },
      {
        question: 'How can a component accept more than one distinct content area, beyond just children?',
        answer:
          'By accepting JSX through regular named props (like left and right), effectively creating multiple "slots" a parent can fill.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is one benefit of favoring composition over one large, heavily-configured component?',
        answer:
          'It avoids threading props through components that don’t actually need them, and keeps each component focused on a single responsibility.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'styling',
    title: 'Styling in React',
    questions: [
      {
        question: 'What is the main advantage of CSS Modules over a plain imported CSS file?',
        answer:
          'Class names are automatically scoped to the component that imports them, avoiding naming collisions with identically-named classes used elsewhere in the app.',
        difficulty: 'intermediate',
      },
      {
        question: 'What type of value does the style prop expect?',
        answer:
          'A JavaScript object with camelCase property names (e.g. { backgroundColor: "red" }), not a CSS string.',
        difficulty: 'beginner',
      },
      {
        question: 'Why are inline styles a poor fit for hover effects and media queries?',
        answer:
          'The style prop only sets static inline CSS properties and has no way to express pseudo-classes (:hover) or @media rules.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'fragments-and-portals',
    title: 'Fragments & Portals',
    questions: [
      {
        question: 'What problem does a Fragment solve?',
        answer:
          'It lets a component return multiple sibling elements without adding an extra, meaningless wrapping DOM node — useful when an extra <div> would break CSS layouts like Flexbox or Grid.',
        difficulty: 'beginner',
      },
      {
        question: 'When do you need the full <Fragment key={...}> form instead of the <>...</> shorthand?',
        answer:
          'Whenever the Fragment needs a key — for example, when a Fragment is returned inside a .map() over a list — since the shorthand syntax cannot accept attributes.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why are portals commonly used for modals?',
        answer:
          'They render content into a different DOM node (often near the end of <body>), letting it visually escape an ancestor’s overflow: hidden or z-index stacking context, while events still bubble through the React tree normally.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'use-effect',
    title: 'useEffect & Side Effects',
    questions: [
      {
        question: 'What does an empty dependency array [] mean for useEffect?',
        answer:
          'The effect runs exactly once, after the component’s first render — equivalent in spirit to componentDidMount in class components.',
        difficulty: 'beginner',
      },
      {
        question: 'What does a function returned from useEffect do?',
        answer:
          'It acts as a cleanup function, called by React right before the effect runs again (if dependencies changed) and once more when the component unmounts.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why is omitting a used value from the dependency array risky?',
        answer:
          'The effect can end up reading a stale, outdated value captured from an earlier render instead of the current one, since the effect only re-runs when a listed dependency changes.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'lifecycle',
    title: 'Component Lifecycle',
    questions: [
      {
        question: 'What are the three phases of a component’s lifecycle?',
        answer:
          'Mounting (first render), updating (re-rendering due to new props/state/context), and unmounting (removed from the DOM).',
        difficulty: 'beginner',
      },
      {
        question: 'Which useEffect pattern corresponds to componentDidMount?',
        answer:
          'useEffect(() => { ... }, []) — an effect with an empty dependency array runs only once, after the first render.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is one advantage of useEffect over separate class lifecycle methods?',
        answer:
          'Setup and cleanup logic for the same concern can live together in one function, instead of being split across componentDidMount and componentWillUnmount.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'lifting-state-up',
    title: 'Lifting State Up',
    questions: [
      {
        question: 'What does "lifting state up" mean?',
        answer:
          'Moving shared state to the closest common ancestor of the components that need it, then passing it back down as props to each of them.',
        difficulty: 'beginner',
      },
      {
        question: 'How does a child request a change to state that now lives in its parent?',
        answer:
          'Through a callback function passed down as a prop, which the child calls — the parent then updates its own state, and the new value flows back down through props.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is a sign that lifting state up is no longer the best solution?',
        answer:
          'When the shared state needs to reach components many levels apart, forcing props to thread through several unrelated intermediate components — often a sign to reach for Context instead.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'context-api',
    title: 'Context API',
    questions: [
      {
        question: 'What problem does the Context API solve?',
        answer:
          'Sharing data across a component tree — like theme, locale, or the logged-in user — without manually threading props through every intermediate component (prop drilling).',
        difficulty: 'beginner',
      },
      {
        question: 'Which hook reads a context’s current value inside a component?',
        answer:
          'useContext(SomeContext).',
        difficulty: 'beginner',
      },
      {
        question: 'What happens to a context’s consumers when its Provider value changes?',
        answer:
          'Every component consuming that context re-renders, even if it only uses part of the value — a key limitation to keep in mind for frequently-changing, performance-sensitive state.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'refs',
    title: 'useRef & Refs',
    questions: [
      {
        question: 'Does updating a ref’s .current value trigger a re-render?',
        answer:
          'No — unlike state, mutating a ref does not cause the component to re-render.',
        difficulty: 'beginner',
      },
      {
        question: 'What is the most common use of a ref attached to a JSX element?',
        answer:
          'Getting direct access to the underlying DOM node — for example, to call .focus() on an input, something not achievable purely declaratively through props.',
        difficulty: 'beginner',
      },
      {
        question: 'When should you avoid reading or writing a ref?',
        answer:
          'During the component’s render body — refs should only be read or written inside event handlers or effects, since accessing them during rendering makes the render unpredictable.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'custom-hooks',
    title: 'Custom Hooks',
    questions: [
      {
        question: 'What naming convention must a custom hook follow?',
        answer:
          'Its name must start with "use" — this tells React and linting tools (like eslint-plugin-react-hooks) that it follows the Rules of Hooks.',
        difficulty: 'beginner',
      },
      {
        question: 'Do two components calling the same custom hook share state?',
        answer:
          'No — each call to the hook creates its own completely independent copy of the internal state. Only the logic is reused, not the data.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is the difference between reusing logic with a custom hook and reusing UI with a component?',
        answer:
          'A custom hook shares stateful behavior (state and side effects), while a component shares rendered JSX markup — they solve different problems and are frequently combined.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'hooks-overview',
    title: 'Hooks Overview',
    questions: [
      {
        question: 'What must every hook’s name start with?',
        answer:
          '"use" — this convention is how React and linters (eslint-plugin-react-hooks) recognize a function as a hook subject to the Rules of Hooks.',
        difficulty: 'beginner',
      },
      {
        question: 'What are the two Rules of Hooks?',
        answer:
          'Only call hooks at the top level (never inside loops, conditions, or nested functions), and only call hooks from React function components or other custom hooks.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why must hooks be called in the same order on every render?',
        answer:
          'React matches each hook call to its internal state by the order it was called in, not by name — calling hooks conditionally would shift that order between renders and corrupt the association between hook calls and their state.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'use-layout-effect',
    title: 'useLayoutEffect',
    questions: [
      {
        question: 'What is the key timing difference between useEffect and useLayoutEffect?',
        answer:
          'useLayoutEffect fires synchronously immediately after DOM mutations but before the browser paints, while useEffect fires asynchronously after the paint has already happened.',
        difficulty: 'intermediate',
      },
      {
        question: 'What problem does useLayoutEffect solve that useEffect cannot?',
        answer:
          'It prevents visible flicker when a component needs to measure the DOM and synchronously adjust layout based on that measurement, since the correction happens before anything is painted.',
        difficulty: 'advanced',
      },
      {
        question: 'Why should useLayoutEffect be used sparingly?',
        answer:
          'Because it runs synchronously and blocks the browser from painting until it finishes, a slow useLayoutEffect can make the whole page feel less responsive.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'use-imperative-handle',
    title: 'useImperativeHandle',
    questions: [
      {
        question: 'What does useImperativeHandle let a component do?',
        answer:
          'Customize exactly what value is exposed when a parent component attaches a ref to it, instead of exposing the entire underlying DOM node.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why expose a small custom API instead of the raw DOM node?',
        answer:
          'It keeps a clean boundary between the component and its parent, avoiding tight coupling to internal implementation details the parent shouldn’t need to know about.',
        difficulty: 'advanced',
      },
      {
        question: 'As of React 19, is forwardRef still required to accept a ref prop?',
        answer:
          'No — function components can accept ref directly as a regular prop, though useImperativeHandle itself still works the same way regardless.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'use-transition',
    title: 'useTransition',
    questions: [
      {
        question: 'What does startTransition let you do?',
        answer:
          'Mark a state update as low-priority, so React can keep the rest of the UI responsive and interrupt the transition if something more urgent (like further typing) comes in.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does the isPending value returned by useTransition indicate?',
        answer:
          'That the transition is still being processed in the background, useful for showing a subtle loading indicator without blocking the rest of the UI.',
        difficulty: 'beginner',
      },
      {
        question: 'What happens if a new transition starts while an older one is still processing?',
        answer:
          'React abandons the stale, in-progress transition and starts fresh with the latest value, so the UI never shows outdated results from an interrupted update.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'use-deferred-value',
    title: 'useDeferredValue',
    questions: [
      {
        question: 'What does useDeferredValue return?',
        answer:
          'A version of the given value that lags behind during urgent updates and catches up once React has spare rendering capacity.',
        difficulty: 'intermediate',
      },
      {
        question: 'How does useDeferredValue differ from a fixed-delay debounce?',
        answer:
          'It adapts to the actual device and current workload instead of waiting a fixed amount of time, which can be faster or slower than any hardcoded delay.',
        difficulty: 'advanced',
      },
      {
        question: 'When is useDeferredValue generally preferred over useTransition?',
        answer:
          'When you don’t directly control the update that changes a value — for example, when an expensive component is fed by a fast-changing prop rather than a state update you trigger yourself.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'use-id',
    title: 'useId',
    questions: [
      {
        question: 'What problem does useId solve?',
        answer:
          'Generating unique, SSR-safe IDs for accessibility attributes (like label/input pairs) that stay consistent across multiple instances of the same component on a page.',
        difficulty: 'beginner',
      },
      {
        question: 'Why is Math.random() unsafe for generating an element’s id?',
        answer:
          'It produces a different value on the server than on the client, causing a hydration mismatch — exactly the class of bug useId is designed to avoid.',
        difficulty: 'intermediate',
      },
      {
        question: 'Should useId be used to generate keys for a rendered list?',
        answer:
          'No — list keys should come from the data itself; useId is meant for generating a component instance’s own accessibility-related IDs.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'use-sync-external-store',
    title: 'useSyncExternalStore',
    questions: [
      {
        question: 'What kind of data source is useSyncExternalStore designed for?',
        answer:
          'State that lives outside of React entirely — a browser API, a custom event emitter, or a third-party store — rather than state already managed with useState or useReducer.',
        difficulty: 'advanced',
      },
      {
        question: 'What do the subscribe and getSnapshot arguments do?',
        answer:
          'subscribe registers a callback to be notified of store changes (returning an unsubscribe function), and getSnapshot returns the store’s current value.',
        difficulty: 'advanced',
      },
      {
        question: 'Why is useSyncExternalStore preferred over a manual useEffect + useState subscription?',
        answer:
          'It guarantees a consistent, non-stale value even under React’s concurrent rendering, which a manual effect-based subscription can’t fully guarantee.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'use-debug-value',
    title: 'useDebugValue',
    questions: [
      {
        question: 'What does useDebugValue affect?',
        answer:
          'Only how a custom hook’s value is labeled in React DevTools — it has no effect on the component’s actual behavior or rendered output.',
        difficulty: 'beginner',
      },
      {
        question: 'Why is useDebugValue mainly useful for custom hooks specifically?',
        answer:
          'Built-in hooks like useState already display their value in DevTools, while a custom hook’s internal state would otherwise appear unlabeled and opaque.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does the optional formatting function argument to useDebugValue do?',
        answer:
          'It defers expensive formatting so it only runs when DevTools is actively inspecting that hook, avoiding wasted work during normal rendering.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'use',
    title: 'The use() Hook',
    questions: [
      {
        question: 'What is unique about use() compared to hooks like useState?',
        answer:
          'It can be called conditionally and inside loops, unlike every other hook, which must always be called unconditionally at the top level.',
        difficulty: 'advanced',
      },
      {
        question: 'What happens when use() is passed a Promise?',
        answer:
          'It suspends the component until the Promise resolves, integrating directly with Suspense without needing manually-managed loading state.',
        difficulty: 'advanced',
      },
      {
        question: 'Can use() read a Context value?',
        answer:
          'Yes — it can read Context similarly to useContext, but with the added ability to do so conditionally, which useContext cannot.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'use-optimistic',
    title: 'useOptimistic',
    questions: [
      {
        question: 'What does useOptimistic let you do?',
        answer:
          'Show an expected result immediately in the UI before an async action actually finishes, making interactions like likes or sending a message feel instant.',
        difficulty: 'intermediate',
      },
      {
        question: 'What happens automatically if the underlying async action fails?',
        answer:
          'React reverts to the real state that was passed into useOptimistic, with no manual rollback code required.',
        difficulty: 'advanced',
      },
      {
        question: 'What kind of actions are the best fit for useOptimistic?',
        answer:
          'Actions that succeed the vast majority of the time — for actions with a meaningfully high failure rate, a visible loading state may communicate uncertainty more honestly.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'use-action-state',
    title: 'useActionState',
    questions: [
      {
        question: 'What does useActionState track automatically for a form Action?',
        answer:
          'Both the action’s current result/state (like a validation error or success message) and a pending flag, without separate useState calls for each.',
        difficulty: 'intermediate',
      },
      {
        question: 'What arguments does the function passed to useActionState receive?',
        answer:
          'The previous state and the submitted form data.',
        difficulty: 'advanced',
      },
      {
        question: 'What is the main benefit of useActionState over manually wiring useState for pending/result state?',
        answer:
          'It consolidates a very common cluster of form-handling boilerplate — pending tracking and result/error state — into a single hook tied directly to the action.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'use-form-status',
    title: 'useFormStatus',
    questions: [
      {
        question: 'What does useFormStatus let a component read?',
        answer:
          'The submission status of the nearest parent <form>, from a component rendered inside it — with no props needed.',
        difficulty: 'intermediate',
      },
      {
        question: 'What happens if useFormStatus is called in the same component that renders the form itself?',
        answer:
          'It always returns the default, non-pending status — a form cannot read its own status through this hook; it must be called from a component nested inside the form.',
        difficulty: 'advanced',
      },
      {
        question: 'What problem does useFormStatus solve compared to manually passing a pending prop down?',
        answer:
          'It avoids prop drilling an isPending value down to nested components like a reusable submit button, which can instead read the form’s status directly.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'use-reducer',
    title: 'useReducer',
    questions: [
      {
        question: 'What two values does useReducer return?',
        answer:
          'The current state and a dispatch function used to send actions describing what happened.',
        difficulty: 'beginner',
      },
      {
        question: 'What does a reducer function receive as arguments?',
        answer:
          'The current state and an action object (typically with a type and optional payload) describing the update that should happen.',
        difficulty: 'intermediate',
      },
      {
        question: 'When is useReducer generally preferred over useState?',
        answer:
          'When state updates are complex and depend on several related sub-values at once — centralizing the update logic in one reducer function keeps it easier to follow and test than scattering it across many event handlers.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'memoization',
    title: 'useMemo & useCallback',
    questions: [
      {
        question: 'What does useMemo do?',
        answer:
          'It re-runs an expensive calculation only when one of its listed dependencies changes, reusing the cached result on every other render.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does useCallback memoize?',
        answer:
          'A function reference — returning the same function instance across renders as long as its dependencies haven’t changed, instead of creating a brand-new function every render.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why is useCallback often paired with React.memo?',
        answer:
          'Without a stable function reference, a newly-created function prop on every parent render defeats React.memo’s shallow prop comparison, causing the memoized child to re-render anyway.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'error-boundaries',
    title: 'Error Boundaries',
    questions: [
      {
        question: 'What does an error boundary do?',
        answer:
          'It catches JavaScript errors thrown during rendering in its child component tree, and shows a fallback UI instead of letting the error crash the entire app.',
        difficulty: 'intermediate',
      },
      {
        question: 'Can an error boundary currently be written as a function component?',
        answer:
          'No — it must be a class component, since getDerivedStateFromError and componentDidCatch have no direct function-component/hook equivalent yet.',
        difficulty: 'advanced',
      },
      {
        question: 'Does an error boundary catch an error thrown inside an onClick handler?',
        answer:
          'No — error boundaries only catch errors during rendering, in lifecycle methods, and in constructors. Errors in event handlers or async code need to be handled separately, typically with try/catch.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'react-router',
    title: 'React Router',
    questions: [
      {
        question: 'What does the Link component do differently from a regular <a> tag?',
        answer:
          'It navigates client-side, updating the URL and swapping the rendered route without triggering a full page reload.',
        difficulty: 'beginner',
      },
      {
        question: 'Which hook reads a dynamic route parameter like :userId?',
        answer:
          'useParams(), which returns an object of the current route’s parameters.',
        difficulty: 'intermediate',
      },
      {
        question: 'How does file-based routing (used by frameworks like Next.js) differ from React Router’s declarative <Route> elements?',
        answer:
          'File-based routing derives the URL structure automatically from the folder/file structure of the project, rather than requiring routes to be explicitly declared with <Route> components.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'performance-optimization',
    title: 'Performance Optimization',
    questions: [
      {
        question: 'What does React.memo do?',
        answer:
          'It wraps a component so it skips re-rendering when its props haven’t changed (via a shallow comparison), even if its parent re-renders.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why can React.memo fail to prevent a re-render even when the "real" data hasn’t changed?',
        answer:
          'If a prop is a newly-created object, array, or function on every parent render, the shallow comparison always sees it as different — which is why React.memo is often paired with useMemo/useCallback.',
        difficulty: 'advanced',
      },
      {
        question: 'What is the purpose of list virtualization?',
        answer:
          'To render only the items currently visible in the viewport for a very long list, recycling DOM nodes as the user scrolls, instead of rendering every item at once.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'suspense-and-lazy',
    title: 'Suspense & Lazy Loading',
    questions: [
      {
        question: 'What does the fallback prop on <Suspense> do?',
        answer:
          'It renders temporary UI shown while the content wrapped inside the Suspense boundary is still loading (e.g. a lazy component still downloading, or data still resolving).',
        difficulty: 'beginner',
      },
      {
        question: 'What must a component created with React.lazy be rendered inside?',
        answer:
          'A Suspense boundary, which shows its fallback while the component’s code chunk is downloading.',
        difficulty: 'intermediate',
      },
      {
        question: 'Does Suspense handle errors, like a failed lazy import?',
        answer:
          'No — Suspense only handles the "still loading" state. Errors need to be handled by an error boundary, which is commonly used alongside Suspense.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'server-vs-client-components',
    title: 'Server vs Client Components',
    questions: [
      {
        question: 'Where does a Server Component run?',
        answer:
          'On the server only — its code never ships to the browser, and it cannot use hooks like useState or useEffect.',
        difficulty: 'intermediate',
      },
      {
        question: 'What directive marks a file as containing Client Components?',
        answer:
          '"use client" at the top of the file.',
        difficulty: 'beginner',
      },
      {
        question: 'Can a Client Component directly import and render a Server Component?',
        answer:
          'No — data and rendered output flow from server to client, not the reverse. A Server Component can render a Client Component as a child, passing serializable props, but not vice versa.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'data-fetching',
    title: 'Data Fetching Patterns',
    questions: [
      {
        question: 'Why does a manual useEffect-based fetch often track a "cancelled" flag?',
        answer:
          'To prevent a race condition — if a dependency (like an id) changes quickly, an older, slower request could resolve after a newer one and incorrectly overwrite fresh data with stale data.',
        difficulty: 'advanced',
      },
      {
        question: 'What does a library like TanStack Query add over manual fetching with useEffect?',
        answer:
          'Automatic caching by key, request deduplication, background refetching, and built-in race condition handling — removing the need to hand-write that logic in every component.',
        difficulty: 'intermediate',
      },
      {
        question: 'How can a Server Component fetch data differently from a Client Component?',
        answer:
          'It can fetch data directly with async/await during rendering, with no client-side request or loading state needed for that initial render.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'testing-react',
    title: 'Testing React Components',
    questions: [
      {
        question: 'What does React Testing Library encourage testing?',
        answer:
          'Behavior from the user’s perspective — what’s rendered on screen and how it responds to interaction — rather than internal implementation details like component state.',
        difficulty: 'beginner',
      },
      {
        question: 'Which query is generally preferred for finding elements in a test?',
        answer:
          'getByRole, since it also verifies the element is genuinely accessible (a real button, heading, etc.), unlike getByTestId which relies on an artificial attribute.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why use findByRole instead of getByRole for content that appears asynchronously?',
        answer:
          'findBy* queries return a promise and wait for the element to appear, while getBy* throws immediately if the element isn’t present yet — essential for testing components that fetch data or update after a delay.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'react-19-features',
    title: 'React 19 Features',
    questions: [
      {
        question: 'What is unique about the use() hook compared to other hooks?',
        answer:
          'It can be called conditionally, unlike other hooks which must always run unconditionally at the top level — and it can read a Promise, suspending the component until it resolves.',
        difficulty: 'advanced',
      },
      {
        question: 'What does useActionState provide beyond a plain async function?',
        answer:
          'Built-in tracking of pending state and the action’s result/error, without manually wiring separate useState calls for each of those concerns.',
        difficulty: 'advanced',
      },
      {
        question: 'What does useOptimistic do?',
        answer:
          'It shows an expected result immediately in the UI before an async action actually finishes, automatically reverting to the real value if the action fails.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'state-management',
    title: 'State Management Libraries',
    questions: [
      {
        question: 'What problem does a dedicated state management library like Redux or Zustand typically solve?',
        answer:
          'Managing large, frequently-updated, widely-shared application state more efficiently than Context alone, which re-renders every consumer on any change.',
        difficulty: 'intermediate',
      },
      {
        question: 'How does server state (API data) differ from client UI state?',
        answer:
          'Server state needs caching, refetching, and staleness handling — concerns that libraries like TanStack Query specialize in, separately from tools focused on purely client-side UI state.',
        difficulty: 'advanced',
      },
      {
        question: 'Should every new React project start with a state management library like Redux?',
        answer:
          'No — many apps are well served by useState, useReducer, and Context alone; a dedicated library is worth adding once prop drilling or Context re-renders become an actual, measured problem.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'best-practices',
    title: 'React Best Practices',
    questions: [
      {
        question: 'Why avoid storing a value in state if it can be computed from existing props/state?',
        answer:
          'A separately-stored derived value can get out of sync with the values it depends on. Computing it fresh during render guarantees it’s always correct.',
        difficulty: 'intermediate',
      },
      {
        question: 'What three states should most components that depend on async data handle explicitly?',
        answer:
          'Loading, error, and empty — beyond the "happy path with data," these are the states real-world conditions (slow networks, failed requests, no results) actually produce.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is a common sign that a useEffect is unnecessary?',
        answer:
          'When it exists only to react to a state change that was already caused by your own event handler — that logic usually belongs directly in the event handler instead of a separate effect.',
        difficulty: 'advanced',
      },
    ],
  },
];
