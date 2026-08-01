import { Tutorial } from '@/app/types/tutorial';

export const bestPractices: Tutorial = {
  slug: 'best-practices',

  title: 'React Best Practices',

  description:
    'Learn conventions and habits for writing maintainable, scalable React applications.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 42 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'Keep Components Small and Focused',
      content:
        'A component that renders a huge block of JSX and manages many unrelated pieces of state is hard to reason about and reuse. Splitting it into smaller components — each with a clear, single responsibility — keeps the codebase easier to navigate as it grows.',
    },

    {
      type: 'list',
      title: 'General Guidelines',
      items: [
        'Keep state as close as possible to where it’s used; lift it up only as far as necessary.',
        'Prefer composition (children, named slots) over deeply configurable, prop-heavy components.',
        'Derive values during render instead of storing them in extra state.',
        'Follow the Rules of Hooks — only call hooks at the top level, only from components or custom hooks.',
        'Extract a custom hook as soon as stateful logic is duplicated across components.',
        'Always provide a stable, unique key when rendering a list.',
      ],
    },

    {
      type: 'paragraph',
      title: 'Don’t Store Derivable Values in State',
      content:
        'If a value can be computed directly from existing props or state during render, storing it in its own state variable just creates another thing that can get out of sync.',
    },

    {
      type: 'code',
      title: 'Derived Value vs Redundant State',
      language: 'jsx',
      code: `// Avoid: fullName can silently get out of sync with firstName/lastName
const [fullName, setFullName] = useState("");

// Prefer: always correct, computed fresh every render
const fullName = \`\${firstName} \${lastName}\`;`,
    },

    {
      type: 'paragraph',
      title: 'Colocate Related Files',
      content:
        'Grouping a component with its styles, tests, and any component-specific hooks in the same folder (rather than splitting every project into global components/, hooks/, and styles/ folders) usually makes it easier to find and safely change everything related to one piece of UI.',
    },

    {
      type: 'paragraph',
      title: 'Handle Loading, Error, and Empty States Explicitly',
      content:
        'Every component that depends on async data has at least three states beyond "happy path with data": loading, error, and empty. Skipping any of them tends to produce confusing UI (a blank screen, or a crash) in real-world conditions like a slow network or failed request.',
    },

    {
      type: 'code',
      title: 'Handling All the States',
      language: 'jsx',
      code: `function UserList({ users, loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <ul>
      {users.map((u) => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}`,
    },

    {
      type: 'warning',
      title: 'Avoid Overusing useEffect',
      content:
        'A very common source of bugs is using useEffect to synchronize state that could instead be computed directly during render, or updated directly inside the event handler that caused the change. If an effect exists just to react to a state change you caused yourself, it usually doesn’t need to be an effect at all.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for the simplest tool that solves the problem: plain JavaScript expressions before conditional rendering helpers, useState before useReducer, local state before Context, Context before an external library. Add complexity only once a real, felt need justifies it.',
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        'Great React code isn’t about knowing every advanced hook — it’s about small, focused components, state that lives at the right level, and reaching for more powerful tools (Context, reducers, external libraries) only once simpler ones genuinely stop being enough.',
    },
  ],

  quiz: [
    {
      question: 'Why avoid storing a value in state if it can be computed from existing props/state?',
      options: [
        'It’s slower to compute',
        'A derived value stored separately in state can get out of sync with the values it depends on',
        'React doesn’t allow it',
        'It uses more memory than any other approach',
      ],
      answer: 1,
    },
    {
      question: 'What three states should most components fetching async data handle explicitly?',
      options: [
        'Mounted, updated, unmounted',
        'Loading, error, and empty',
        'Red, green, blue',
        'Client, server, shared',
      ],
      answer: 1,
    },
    {
      question: 'What is a common sign that a useEffect might be unnecessary?',
      options: [
        'It has a dependency array',
        'It exists only to react to a state change that was caused by your own event handler',
        'It fetches data',
        'It has a cleanup function',
      ],
      answer: 1,
    },
  ],

  previous: 'state-management',
};
