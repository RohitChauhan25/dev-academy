import { Tutorial } from '@/app/types/tutorial';

export const contextApi: Tutorial = {
  slug: 'context-api',

  title: 'Context API',

  description:
    'Learn how to share data across a component tree without threading props through every level, using React Context.',

  level: 'Intermediate',

  readingTime: '18 min',

  lesson: 'Lesson 16 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem: Deep Prop Drilling',
      content:
        'Some data — like the current theme, logged-in user, or language — is needed by many components at very different depths in the tree. Passing it down as props through every intermediate component (prop drilling) becomes tedious and fragile as the app grows.',
    },

    {
      type: 'paragraph',
      title: 'Creating a Context',
      content:
        'createContext() creates a Context object. A Provider component makes a value available to every component nested inside it, no matter how deep.',
    },

    {
      type: 'code',
      title: 'Creating and Providing a Context',
      language: 'jsx',
      code: `import { createContext } from "react";

const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'Reading a Context Value',
      content:
        'Any component nested inside the Provider can read the current value with the useContext hook, regardless of how many components sit between it and the Provider.',
    },

    {
      type: 'code',
      title: 'Consuming Context with useContext',
      language: 'jsx',
      code: `import { useContext } from "react";

function Toolbar() {
  return <ThemedButton />; // doesn't need to know about ThemeContext at all
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click me</button>;
}`,
    },

    {
      type: 'paragraph',
      title: 'Combining Context with useState',
      content:
        'Context is most useful when combined with state — the Provider’s value can include both the current data and a function to update it, giving any nested component read and write access.',
    },

    {
      type: 'code',
      title: 'A Context with Updatable State',
      language: 'jsx',
      code: `const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState({ name: "Alice" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Dashboard />
    </UserContext.Provider>
  );
}

function Dashboard() {
  const { user, setUser } = useContext(UserContext);
  return <button onClick={() => setUser({ name: "Bob" })}>{user.name}</button>;
}`,
    },

    {
      type: 'warning',
      title: 'Every Consumer Re-Renders on Change',
      content:
        'When a Provider’s value changes, every component consuming that context re-renders, even if it only cares about part of the value. For frequently-changing, performance-sensitive state, a dedicated state management library or splitting into smaller contexts may be a better fit.',
    },

    {
      type: 'note',
      title: 'Context is Not a Replacement for All Props',
      content:
        'Context works best for data considered "global" to a whole subtree — theme, auth, locale. For data that only a couple of nearby components need, regular props (or lifting state up) is usually simpler and easier to trace.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Wrap the Provider and its useContext logic in a small custom hook (e.g. useTheme()) so consuming components import one clean function instead of dealing with useContext(ThemeContext) directly everywhere.',
    },
  ],

  quiz: [
    {
      question: 'What problem does the Context API solve?',
      options: [
        'Improving rendering performance',
        'Sharing data across a component tree without manually passing props through every level',
        'Managing CSS styles',
        'Handling form validation',
      ],
      answer: 1,
    },
    {
      question: 'Which hook is used to read a context value inside a component?',
      options: ['useState', 'useContext', 'useReducer', 'useRef'],
      answer: 1,
    },
    {
      question: 'What happens to a context’s consumers when its Provider value changes?',
      options: [
        'Only the Provider re-renders',
        'Every component consuming that context re-renders',
        'Nothing happens automatically',
        'Only the deepest consumer re-renders',
      ],
      answer: 1,
    },
  ],

  previous: 'lifting-state-up',
  next: 'refs',
};
