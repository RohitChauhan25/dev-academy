import { Tutorial } from '@/app/types/tutorial';

export const customHooks: Tutorial = {
  slug: 'custom-hooks',

  title: 'Custom Hooks',

  description:
    'Learn how to extract and reuse stateful logic across components by writing your own custom hooks.',

  level: 'Intermediate',

  readingTime: '16 min',

  lesson: 'Lesson 18 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Custom Hook?',
      content:
        'A custom hook is simply a JavaScript function whose name starts with "use" and that calls other hooks inside it. It lets you extract stateful logic out of a component so it can be reused across multiple components.',
    },

    {
      type: 'paragraph',
      title: 'The Problem: Duplicated Stateful Logic',
      content:
        'When the same pattern of useState and useEffect calls shows up in several components (like tracking window size, or fetching data), copy-pasting that logic everywhere becomes hard to maintain.',
    },

    {
      type: 'code',
      title: 'A Custom Hook: useWindowWidth',
      language: 'jsx',
      code: `import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}`,
    },

    {
      type: 'code',
      title: 'Using the Custom Hook',
      language: 'jsx',
      code: `function ResponsiveBanner() {
  const width = useWindowWidth();

  return <p>{width < 600 ? "Mobile view" : "Desktop view"}</p>;
}

function Sidebar() {
  const width = useWindowWidth(); // reused, with its own independent state
  return <aside style={{ display: width < 600 ? "none" : "block" }}>Sidebar</aside>;
}`,
    },

    {
      type: 'paragraph',
      title: 'Each Call Gets Its Own State',
      content:
        'Every component that calls a custom hook gets a completely independent copy of its internal state — calling useWindowWidth() in two components doesn’t share state between them, it just shares the logic.',
    },

    {
      type: 'code',
      title: 'A Custom Hook for Fetching Data',
      language: 'jsx',
      code: `function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

function UserProfile({ userId }) {
  const { data: user, loading } = useFetch(\`/api/users/\${userId}\`);

  if (loading) return <p>Loading...</p>;
  return <h2>{user.name}</h2>;
}`,
    },

    {
      type: 'table',
      title: 'Rules for Custom Hooks',
      headers: ['Rule', 'Why'],
      rows: [
        ['Name must start with "use"', 'Lets React (and linters) know it follows the Rules of Hooks'],
        ['Only call hooks at the top level', 'Not inside loops, conditions, or nested functions'],
        ['Only call hooks from React functions', 'Components or other custom hooks — never plain JavaScript functions'],
      ],
    },

    {
      type: 'note',
      title: 'Custom Hooks Are About Reusing Logic, Not UI',
      content:
        'A custom hook shares behavior (stateful logic and side effects) between components, not JSX markup. To reuse JSX, write a regular component instead — the two techniques solve different problems and are often combined.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Extract a custom hook as soon as you copy-paste the same useState/useEffect pattern into a second component — it’s one of the most effective ways to keep React components focused and DRY.',
    },
  ],

  quiz: [
    {
      question: 'What naming convention must a custom hook follow?',
      options: [
        'It must end in "Hook"',
        'Its name must start with "use"',
        'It must be all uppercase',
        'There is no convention',
      ],
      answer: 1,
    },
    {
      question: 'Do two components calling the same custom hook share the same state?',
      options: [
        'Yes, always',
        'No — each call gets its own independent state',
        'Only if they are siblings',
        'Only if wrapped in Context',
      ],
      answer: 1,
    },
    {
      question: 'What does a custom hook primarily let you reuse?',
      options: ['JSX markup', 'Stateful logic and side effects', 'CSS styles', 'Route definitions'],
      answer: 1,
    },
  ],

  previous: 'refs',
  next: 'hooks-overview',
};
