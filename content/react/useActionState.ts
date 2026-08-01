import { Tutorial } from '@/app/types/tutorial';

export const useActionState: Tutorial = {
  slug: 'use-action-state',

  title: 'useActionState',

  description:
    'Learn how useActionState tracks a form Action’s pending state and result without manually wiring up separate state variables.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 29 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'What is an Action?',
      content:
        'An Action is an async function passed to a form’s action prop, or triggered via startTransition. React automatically tracks its pending state and handles the surrounding form submission, without you needing to call event.preventDefault() or manage a loading flag by hand.',
    },

    {
      type: 'code',
      title: 'A Plain Action (No Extra State Tracking)',
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
      title: 'What useActionState Adds',
      content:
        'useActionState wraps an Action and gives back its current result (like a validation error or success message) and a pending flag — both updated automatically as the Action runs, without separate useState calls for each.',
    },

    {
      type: 'code',
      title: 'useActionState with Validation',
      language: 'jsx',
      code: `import { useActionState } from "react";

function ChangeNameForm() {
  const [error, submitAction, isPending] = useActionState(
    async (previousError, formData) => {
      const name = formData.get("name");
      if (!name) {
        return "Name is required";
      }
      await saveName(name);
      return null; // no error
    },
    null // initial state
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button disabled={isPending}>{isPending ? "Saving..." : "Save"}</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}`,
    },

    {
      type: 'table',
      title: 'useActionState Arguments and Return Value',
      headers: ['Item', 'Purpose'],
      rows: [
        ['fn(previousState, formData)', 'The action function; receives the previous state and the submitted form data'],
        ['initialState', 'The state value used before the action has run for the first time'],
        ['state', 'The current state — whatever the action function last returned'],
        ['formAction', 'Pass this to the form’s action prop (or a button’s formAction prop)'],
        ['isPending', 'true while the action is in flight'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Comparing to Manual State Management',
      content:
        'Before useActionState, the same behavior required separate useState calls for the error/result and the pending flag, plus manually setting and resetting both around the async call — useActionState consolidates all of that into one hook tied directly to the action.',
    },

    {
      type: 'code',
      title: 'The Manual Equivalent (More Boilerplate)',
      language: 'jsx',
      code: `function ChangeNameForm() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsPending(true);
    const name = new FormData(event.target).get("name");
    if (!name) {
      setError("Name is required");
      setIsPending(false);
      return;
    }
    await saveName(name);
    setError(null);
    setIsPending(false);
  }

  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for useActionState for form submissions that need to track a pending state and a result (success message or validation error) — it removes a very common cluster of boilerplate state management.',
    },
  ],

  quiz: [
    {
      question: 'What does useActionState track automatically?',
      options: [
        'Only the pending state',
        'Both the action’s current state/result and a pending flag',
        'Only form field values',
        'Route navigation'
      ],
      answer: 1,
    },
    {
      question: 'What arguments does the function passed to useActionState receive?',
      options: [
        'Only the form data',
        'The previous state and the submitted form data',
        'The DOM event only',
        'Nothing',
      ],
      answer: 1,
    },
    {
      question: 'What is the main benefit of useActionState over manually wiring useState for pending/error?',
      options: [
        'It’s the only way to submit a form in React',
        'It consolidates a common cluster of boilerplate state management into one hook',
        'It removes the need for a <form> element',
        'It automatically validates all inputs',
      ],
      answer: 1,
    },
  ],

  previous: 'use-optimistic',
  next: 'use-form-status',
};
