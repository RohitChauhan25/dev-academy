import { Tutorial } from '@/app/types/tutorial';

export const dataFetching: Tutorial = {
  slug: 'data-fetching',

  title: 'Data Fetching Patterns',

  description:
    'Learn the common ways to fetch, cache, and manage server data in a React application.',

  level: 'Advanced',

  readingTime: '18 min',

  lesson: 'Lesson 38 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'Fetching in useEffect: The Basic Approach',
      content:
        'The most direct approach fetches data in a useEffect on mount, tracking loading and error state manually. It works, but every component re-implements the same loading/error/caching logic from scratch.',
    },

    {
      type: 'code',
      title: 'Manual Fetching with useEffect',
      language: 'jsx',
      code: `function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    fetch(\`/api/users/\${userId}\`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          setUser(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err);
          setLoading(false);
        }
      });

    return () => { cancelled = true; }; // avoid setting state after unmount
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;
  return <h2>{user.name}</h2>;
}`,
    },

    {
      type: 'paragraph',
      title: 'Why the "cancelled" Flag Matters',
      content:
        'If userId changes quickly (like a user clicking through several profiles fast), an older, slower request could resolve after a newer one, overwriting fresh data with stale data. Tracking whether the effect has been cleaned up prevents that race condition.',
    },

    {
      type: 'paragraph',
      title: 'Data-Fetching Libraries',
      content:
        'Libraries like TanStack Query (React Query) and SWR handle caching, deduplication, background refetching, and race conditions out of the box, removing the need to hand-write the pattern above in every component.',
    },

    {
      type: 'code',
      title: 'Fetching with TanStack Query',
      language: 'jsx',
      code: `import { useQuery } from "@tanstack/react-query";

function UserProfile({ userId }) {
  const { data: user, isLoading, error } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetch(\`/api/users/\${userId}\`).then((res) => res.json()),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;
  return <h2>{user.name}</h2>;
}`,
    },

    {
      type: 'table',
      title: 'What These Libraries Add',
      headers: ['Feature', 'Benefit'],
      rows: [
        ['Caching by key', 'Avoids re-fetching the same data across components'],
        ['Automatic deduplication', 'Multiple components requesting the same data trigger one request'],
        ['Background refetching', 'Keeps data fresh without a full loading state'],
        ['Built-in race condition handling', 'No manual "cancelled" flag needed'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Framework-Level Data Fetching',
      content:
        'In frameworks with Server Components (like Next.js’s App Router), Server Components can fetch data directly with async/await during rendering — no useEffect, loading state, or client-side request needed at all for that initial data.',
    },

    {
      type: 'code',
      title: 'Fetching Directly in a Server Component',
      language: 'jsx',
      code: `async function ProductPage({ params }) {
  const product = await fetch(\`https://api.example.com/products/\${params.id}\`).then(
    (res) => res.json()
  );

  return <h1>{product.name}</h1>;
}
// No loading state needed — the page isn't sent to the browser until this resolves`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'For a plain client-side React app, reach for a data-fetching library (TanStack Query or SWR) over hand-rolled useEffect fetching as soon as the app has more than a couple of data-dependent components — the caching and race-condition handling alone are worth it.',
    },
  ],

  quiz: [
    {
      question: 'Why does the manual useEffect fetch example track a "cancelled" flag?',
      options: [
        'To stop the component from rendering',
        'To prevent a slower, outdated request from overwriting fresher data (a race condition)',
        'It’s required syntax for fetch()',
        'To improve styling',
      ],
      answer: 1,
    },
    {
      question: 'What is one benefit of a library like TanStack Query over manual fetching?',
      options: [
        'It makes the API respond faster',
        'It handles caching, deduplication, and race conditions automatically',
        'It removes the need for a backend',
        'It only works with GraphQL',
      ],
      answer: 1,
    },
    {
      question: 'How can a Server Component fetch data, compared to a Client Component?',
      options: [
        'The same way, always via useEffect',
        'Directly with async/await during rendering, with no client-side request needed',
        'Server Components cannot fetch data at all',
        'Only through a Client Component'
      ],
      answer: 1,
    },
  ],

  previous: 'server-vs-client-components',
  next: 'testing-react',
};
