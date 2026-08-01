import { Tutorial } from '@/app/types/tutorial';

export const suspenseAndLazy: Tutorial = {
  slug: 'suspense-and-lazy',

  title: 'Suspense & Lazy Loading',

  description:
    'Learn how Suspense lets components "wait" for something before rendering, and how to lazily load components with React.lazy.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 36 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'What is Suspense?',
      content:
        'Suspense lets a component "suspend" rendering while it’s waiting for something — like code still downloading, or data still loading — and shows a fallback UI in the meantime, without you needing to manually track a loading boolean.',
    },

    {
      type: 'code',
      title: 'Basic Suspense Usage',
      language: 'jsx',
      code: `import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProfilePage />
    </Suspense>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'React.lazy: Loading Components on Demand',
      content:
        'React.lazy(() => import(...)) defers loading a component’s code until it’s actually needed, splitting it into a separate chunk. It must be rendered inside a Suspense boundary, which shows the fallback while the chunk downloads.',
    },

    {
      type: 'code',
      title: 'Lazy Loading a Component',
      language: 'jsx',
      code: `import { lazy, Suspense } from "react";

const Chart = lazy(() => import("./Chart"));

function Dashboard() {
  return (
    <Suspense fallback={<p>Loading chart...</p>}>
      <Chart />
    </Suspense>
  );
}
// Chart's code only downloads when Dashboard actually renders it`,
    },

    {
      type: 'paragraph',
      title: 'Multiple Suspense Boundaries',
      content:
        'Different parts of a page can suspend independently by wrapping them in separate Suspense boundaries — one slow section shows its own fallback while the rest of the page renders normally.',
    },

    {
      type: 'code',
      title: 'Independent Suspense Boundaries',
      language: 'jsx',
      code: `function Dashboard() {
  return (
    <div>
      <Header /> {/* renders immediately */}

      <Suspense fallback={<Spinner />}>
        <SlowWidget /> {/* only this section shows a fallback while loading */}
      </Suspense>

      <Footer /> {/* also renders immediately */}
    </div>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'Suspense for Data Fetching',
      content:
        'Beyond lazy-loaded components, Suspense also integrates with data-fetching libraries (like React Query or frameworks with built-in Suspense support) and the use() hook, letting a component suspend while data is still loading rather than manually rendering a loading state.',
    },

    {
      type: 'note',
      title: 'Suspense Doesn’t Catch Errors',
      content:
        'Suspense only handles the "still loading" case. If the lazy import or data fetch actually fails, that’s a job for an error boundary — the two are commonly used together, wrapping Suspense inside an ErrorBoundary.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use React.lazy for genuinely large, rarely-needed parts of the UI — a settings modal, a chart library, a rich text editor — not for every small component, where the extra network request outweighs any benefit.',
    },
  ],

  quiz: [
    {
      question: 'What does the fallback prop on <Suspense> render?',
      options: [
        'An error message',
        'A temporary UI shown while the wrapped content is still loading',
        'A 404 page',
        'The previous render'
      ],
      answer: 1,
    },
    {
      question: 'What must a component created with React.lazy be rendered inside of?',
      options: ['An ErrorBoundary only', 'A Suspense boundary', 'A Context Provider', 'A Fragment'],
      answer: 1,
    },
    {
      question: 'Does Suspense handle errors, like a failed lazy import?',
      options: [
        'Yes, it shows an error automatically',
        'No — that’s the job of an error boundary, often used alongside Suspense',
        'Only in development mode',
        'Only for data fetching, not lazy components',
      ],
      answer: 1,
    },
  ],

  previous: 'performance-optimization',
  next: 'server-vs-client-components',
};
