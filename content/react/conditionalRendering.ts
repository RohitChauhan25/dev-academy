import { Tutorial } from '@/app/types/tutorial';

export const conditionalRendering: Tutorial = {
  slug: 'conditional-rendering',

  title: 'Conditional Rendering',

  description:
    'Learn how to show or hide parts of the UI based on conditions using plain JavaScript.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 6 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'It’s Just JavaScript',
      content:
        'React has no special conditional syntax — you reach for the same if statements, ternaries, and logical operators you already know from JavaScript, since JSX is just an expression inside a function.',
    },

    {
      type: 'code',
      title: 'Conditional Rendering with if',
      language: 'jsx',
      code: `function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign in.</h1>;
}`,
    },

    {
      type: 'paragraph',
      title: 'The Ternary Operator',
      content:
        'A ternary is the most common way to choose between two pieces of JSX inline, right inside a larger return statement.',
    },

    {
      type: 'code',
      title: 'Ternary Inside JSX',
      language: 'jsx',
      code: `function StatusBadge({ isOnline }) {
  return (
    <span>
      {isOnline ? "🟢 Online" : "⚪ Offline"}
    </span>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'The && Operator for "Render or Nothing"',
      content:
        'When there’s no alternative to render, the && operator is a concise way to show something only when a condition is true.',
    },

    {
      type: 'code',
      title: 'Logical && Rendering',
      language: 'jsx',
      code: `function Inbox({ unreadCount }) {
  return (
    <div>
      <h2>Inbox</h2>
      {unreadCount > 0 && <p>You have {unreadCount} unread messages.</p>}
    </div>
  );
}`,
    },

    {
      type: 'warning',
      title: 'A Common && Pitfall',
      content:
        'If the left side of && is 0 (a falsy number, not false), React will render the literal "0" instead of nothing — because 0 is a valid, renderable JSX child. Guard against this with a comparison like unreadCount > 0 instead of unreadCount alone.',
    },

    {
      type: 'code',
      title: 'The 0 Pitfall',
      language: 'jsx',
      code: `// Renders "0" on screen if unreadCount is 0 — a common bug!
{unreadCount && <p>You have {unreadCount} unread messages.</p>}

// Fixed: compares to produce an actual boolean
{unreadCount > 0 && <p>You have {unreadCount} unread messages.</p>}`,
    },

    {
      type: 'paragraph',
      title: 'Rendering nothing with null',
      content:
        'Returning null from a component (or as part of an expression) renders nothing at all — a valid way to conditionally render "no UI."',
    },

    {
      type: 'code',
      title: 'Returning null',
      language: 'jsx',
      code: `function Banner({ dismissed }) {
  if (dismissed) {
    return null;
  }
  return <div className="banner">Welcome!</div>;
}`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Extract complex conditional JSX into its own variable or small component when a ternary or && chain starts feeling hard to read — clarity beats cleverness in JSX.',
    },
  ],

  quiz: [
    {
      question: 'What does React use for conditional rendering?',
      options: ['A special v-if directive', 'Plain JavaScript — if statements, ternaries, and logical operators', 'A templating language', 'CSS media queries'],
      answer: 1,
    },
    {
      question: 'What can go wrong with {count && <Component />} if count is 0?',
      options: [
        'Nothing, it always works correctly',
        'React renders the literal "0" on screen, since 0 is a falsy but still-renderable value',
        'It throws an error',
        'The component always renders regardless'
      ],
      answer: 1,
    },
    {
      question: 'What happens when a component returns null?',
      options: [
        'It throws an error',
        'Nothing is rendered for that component',
        'It renders an empty <div>',
        'It renders the text "null"',
      ],
      answer: 1,
    },
  ],

  previous: 'rendering-lists',
  next: 'event-handling',
};
