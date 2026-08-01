import { Tutorial } from '@/app/types/tutorial';

export const errorBoundaries: Tutorial = {
  slug: 'error-boundaries',

  title: 'Error Boundaries',

  description:
    'Learn how to catch rendering errors in a part of the UI and show a fallback instead of crashing the entire app.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 33 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem: One Error Crashes Everything',
      content:
        'By default, a JavaScript error thrown anywhere during rendering unmounts the entire React component tree, showing a blank page — even if the error came from one small, unrelated widget.',
    },

    {
      type: 'paragraph',
      title: 'What is an Error Boundary?',
      content:
        'An error boundary is a component that catches JavaScript errors thrown by its children during rendering, logs them, and displays a fallback UI instead of crashing the whole app.',
    },

    {
      type: 'code',
      title: 'A Basic Error Boundary',
      language: 'jsx',
      code: `import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}`,
    },

    {
      type: 'code',
      title: 'Wrapping Part of the UI',
      language: 'jsx',
      code: `function App() {
  return (
    <div>
      <Header />
      <ErrorBoundary>
        <Dashboard /> {/* if this throws, only this part is replaced */}
      </ErrorBoundary>
      <Footer />
    </div>
  );
}`,
    },

    {
      type: 'note',
      title: 'Error Boundaries Must Be Class Components',
      content:
        'As of current React versions, error boundaries can only be implemented as class components — there is no hook equivalent yet, since getDerivedStateFromError and componentDidCatch have no direct functional-component counterpart.',
    },

    {
      type: 'warning',
      title: 'What Error Boundaries Don’t Catch',
      content:
        'Error boundaries only catch errors during rendering, in lifecycle methods, and in constructors of the tree below them. They do not catch errors inside event handlers, asynchronous code (like a setTimeout callback), or server-side rendering.',
    },

    {
      type: 'code',
      title: 'Handling an Event Handler Error Separately',
      language: 'jsx',
      code: `function SaveButton() {
  function handleClick() {
    try {
      saveData();
    } catch (error) {
      console.error("Failed to save:", error);
      // handle it directly — an ErrorBoundary won't catch this
    }
  }

  return <button onClick={handleClick}>Save</button>;
}`,
    },

    {
      type: 'paragraph',
      title: 'Third-Party Libraries Simplify This',
      content:
        'Because writing a class-based error boundary from scratch is repetitive boilerplate, many teams use a small, well-tested library like react-error-boundary, which provides a ready-made <ErrorBoundary> component with a fallback prop.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Place error boundaries around independent sections of a page (a widget, a chart, a third-party embed) rather than one single boundary around the entire app — this way, one broken feature doesn’t take down the rest of the page.',
    },
  ],

  quiz: [
    {
      question: 'What does an error boundary do?',
      options: [
        'Prevents all errors from ever occurring',
        'Catches rendering errors in its children and shows a fallback UI instead of crashing the whole app',
        'Validates form input',
        'Handles network errors automatically',
      ],
      answer: 1,
    },
    {
      question: 'Can an error boundary currently be written as a function component with hooks?',
      options: [
        'Yes, using useErrorBoundary',
        'No — it must currently be a class component',
        'Only in React 19',
        'Only with TypeScript',
      ],
      answer: 1,
    },
    {
      question: 'Does an error boundary catch errors thrown inside an onClick event handler?',
      options: [
        'Yes, always',
        'No — it only catches errors during rendering, not inside event handlers',
        'Only if wrapped twice',
        'Only for async handlers',
      ],
      answer: 1,
    },
  ],

  previous: 'memoization',
  next: 'react-router',
};
