import { Tutorial } from '@/app/types/tutorial';

export const react19Features: Tutorial = {
  slug: 'react-19-features',

  title: 'React 19 Features',

  description:
    'An overview of newer React APIs — Actions, the use() hook, and simplified form handling.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 40 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'The use() Hook',
      content:
        'use() reads the value of a resource — like a Promise or a Context — and can be called conditionally, unlike other hooks. When passed a Promise, it suspends the component until the Promise resolves, integrating naturally with Suspense.',
    },

    {
      type: 'code',
      title: 'Reading a Promise with use()',
      language: 'jsx',
      code: `import { use, Suspense } from "react";

function UserProfile({ userPromise }) {
  const user = use(userPromise); // suspends until resolved
  return <h1>{user.name}</h1>;
}

function App({ userPromise }) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <UserProfile userPromise={userPromise} />
    </Suspense>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'Actions',
      content:
        'An Action is an async function passed to a form’s action prop (or used with useTransition), which React handles automatically — managing pending state, errors, and optimistic updates without manually wiring up useState for each of those concerns.',
    },

    {
      type: 'code',
      title: 'A Form Using an Action',
      language: 'jsx',
      code: `function UpdateNameForm() {
  async function updateName(formData) {
    const name = formData.get("name");
    await saveName(name);
  }

  return (
    <form action={updateName}>
      <input type="text" name="name" />
      <button type="submit">Save</button>
    </form>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'useActionState',
      content:
        'useActionState wraps an Action and gives you back its current state (like a success message or validation error) along with a pending flag, without manually tracking either with separate useState calls.',
    },

    {
      type: 'code',
      title: 'useActionState Example',
      language: 'jsx',
      code: `import { useActionState } from "react";

function ChangeNameForm() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const name = formData.get("name");
      if (!name) return "Name is required";
      await saveName(name);
      return null;
    },
    null
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button disabled={isPending}>Save</button>
      {error && <p>{error}</p>}
    </form>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'useOptimistic',
      content:
        'useOptimistic lets the UI show an expected result immediately, before an async Action actually finishes — automatically reverting if the action fails, giving a snappier feel for actions like liking a post or sending a message.',
    },

    {
      type: 'code',
      title: 'Optimistic UI Update',
      language: 'jsx',
      code: `import { useOptimistic } from "react";

function LikeButton({ likes, onLike }) {
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (state) => state + 1
  );

  async function handleLike() {
    addOptimisticLike();
    await onLike(); // if this fails, optimisticLikes reverts automatically
  }

  return <button onClick={handleLike}>❤️ {optimisticLikes}</button>;
}`,
    },

    {
      type: 'note',
      title: 'The ref Prop No Longer Needs forwardRef',
      content:
        'As of React 19, function components can accept ref directly as a regular prop, removing the need for forwardRef() in most cases where a component just needs to expose an underlying DOM node.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for Actions and useActionState for form submissions instead of manually wiring useState for pending/error/success — they cover the most common form-handling boilerplate with far less code.',
    },
  ],

  quiz: [
    {
      question: 'What is unique about the use() hook compared to other hooks?',
      options: [
        'It can only be used in class components',
        'It can be called conditionally, unlike other hooks',
        'It never suspends',
        'It replaces useState entirely',
      ],
      answer: 1,
    },
    {
      question: 'What does useActionState provide beyond a plain async function?',
      options: [
        'Nothing extra',
        'Built-in pending and result/error state, without manually wiring separate useState calls',
        'Automatic routing',
        'CSS styling',
      ],
      answer: 1,
    },
    {
      question: 'What does useOptimistic do?',
      options: [
        'Caches API responses',
        'Shows an expected result immediately before an async action finishes, reverting automatically on failure',
        'Prevents all errors',
        'Replaces useReducer',
      ],
      answer: 1,
    },
  ],

  previous: 'testing-react',
  next: 'state-management',
};
