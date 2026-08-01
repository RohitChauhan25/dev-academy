import { Tutorial } from '@/app/types/tutorial';

export const useOptimistic: Tutorial = {
  slug: 'use-optimistic',

  title: 'useOptimistic',

  description:
    'Learn how to show an expected result immediately, before an async action actually finishes, using useOptimistic.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 28 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem: Waiting Feels Slow',
      content:
        'When a user likes a post, sends a message, or checks off a to-do, waiting for the server to confirm before updating the UI makes the app feel sluggish — even if the request only takes a few hundred milliseconds.',
    },

    {
      type: 'paragraph',
      title: 'What useOptimistic Does',
      content:
        'useOptimistic(state, updateFn) lets you show an "optimistic" version of state immediately, assuming the async action will succeed. If the action fails, React automatically reverts back to the real state — no manual rollback code needed.',
    },

    {
      type: 'code',
      title: 'An Optimistic Like Button',
      language: 'jsx',
      code: `import { useOptimistic } from "react";

function LikeButton({ likes, onLike }) {
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (currentLikes) => currentLikes + 1
  );

  async function handleLike() {
    addOptimisticLike(); // shown immediately
    await onLike();      // the real, slower update
  }

  return (
    <button onClick={handleLike}>
      ❤️ {optimisticLikes}
    </button>
  );
}`,
    },

    {
      type: 'table',
      title: 'useOptimistic Arguments and Return Value',
      headers: ['Item', 'Purpose'],
      rows: [
        ['state', 'The real, confirmed state (e.g. the actual like count from the server)'],
        ['updateFn(currentState, optimisticValue)', 'Computes the temporary optimistic state to show immediately'],
        ['optimisticState', 'The value to render — either the real state, or the optimistic one while pending'],
        ['addOptimisticUpdate', 'Call this to trigger the optimistic update'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Automatic Rollback on Failure',
      content:
        'If the underlying async action throws or rejects, React discards the optimistic value and re-renders using the real state passed to useOptimistic — the UI naturally "snaps back" to the accurate value without any explicit try/catch rollback logic.',
    },

    {
      type: 'code',
      title: 'A Chat Message That Reverts on Failure',
      language: 'jsx',
      code: `function MessageThread({ messages, sendMessage }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (currentMessages, newMessage) => [
      ...currentMessages,
      { ...newMessage, sending: true },
    ]
  );

  async function handleSend(text) {
    const message = { id: Date.now(), text };
    addOptimisticMessage(message);
    await sendMessage(message); // if this throws, the optimistic message disappears
  }

  return (
    <ul>
      {optimisticMessages.map((m) => (
        <li key={m.id}>
          {m.text} {m.sending && "(sending...)"}
        </li>
      ))}
    </ul>
  );
}`,
    },

    {
      type: 'note',
      title: 'Commonly Paired with Actions',
      content:
        'useOptimistic is frequently used together with React 19 Actions (async functions passed to a form’s action prop) — the Action performs the real mutation, while useOptimistic keeps the UI feeling instant while it’s in flight.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for useOptimistic for actions that succeed the vast majority of the time (likes, toggles, sending a message) — for actions with a meaningfully high failure rate, a visible loading state may communicate uncertainty more honestly than an optimistic update that often reverts.',
    },
  ],

  quiz: [
    {
      question: 'What does useOptimistic let you do?',
      options: [
        'Cache API responses permanently',
        'Show an expected result immediately, before an async action actually completes',
        'Prevent all network requests',
        'Replace useState entirely',
      ],
      answer: 1,
    },
    {
      question: 'What happens automatically if the underlying async action fails?',
      options: [
        'The app crashes',
        'React reverts to the real state passed to useOptimistic, with no manual rollback code needed',
        'The optimistic value becomes permanent',
        'Nothing — you must write rollback logic yourself',
      ],
      answer: 1,
    },
    {
      question: 'What kind of actions are the best fit for useOptimistic?',
      options: [
        'Actions that fail most of the time',
        'Actions that succeed the vast majority of the time, like likes or toggles',
        'Only actions with no async behavior at all',
        'Only actions inside Server Components',
      ],
      answer: 1,
    },
  ],

  previous: 'use',
  next: 'use-action-state',
};
