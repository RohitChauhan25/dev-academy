import { Tutorial } from '@/app/types/tutorial';

export const useFormStatus: Tutorial = {
  slug: 'use-form-status',

  title: 'useFormStatus',

  description:
    'Learn how to read the pending status of the nearest parent form from a child component, without prop drilling.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 30 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem: A Submit Button Needs to Know the Form’s Status',
      content:
        'A reusable submit button component often needs to show a pending state (disabling itself, showing a spinner) while its parent form is submitting — but that pending state usually lives in the parent, not the button itself.',
    },

    {
      type: 'paragraph',
      title: 'What useFormStatus Does',
      content:
        'useFormStatus() (imported from react-dom) reads the status of the nearest parent <form> from within a child component — with no props needed at all. It only works for a component rendered inside a form, reading that form’s live submission status.',
    },

    {
      type: 'code',
      title: 'A Reusable Submit Button',
      language: 'jsx',
      code: `import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </button>
  );
}

function ProfileForm({ updateProfile }) {
  return (
    <form action={updateProfile}>
      <input type="text" name="name" />
      <SubmitButton /> {/* knows the form's pending status automatically */}
    </form>
  );
}`,
    },

    {
      type: 'table',
      title: 'useFormStatus Return Value',
      headers: ['Property', 'Meaning'],
      rows: [
        ['pending', 'true while the parent form’s action is in flight'],
        ['data', 'The FormData currently being submitted'],
        ['method', 'The HTTP method used for the submission ("get" or "post")'],
        ['action', 'A reference to the action function the parent form is using'],
      ],
    },

    {
      type: 'warning',
      title: 'Must Be Called from a Component Inside the form',
      content:
        'useFormStatus only returns meaningful status when called from a component rendered as a descendant of a <form> — calling it in the same component that renders the <form> itself always returns the default, non-pending status, since a form cannot read its own status through this hook.',
    },

    {
      type: 'code',
      title: 'A Common Mistake',
      language: 'jsx',
      code: `function ProfileForm({ updateProfile }) {
  const { pending } = useFormStatus(); // Wrong: always returns pending: false here

  return (
    <form action={updateProfile}>
      <button disabled={pending}>Save</button>
    </form>
  );
}
// Fix: move the useFormStatus call into a child component rendered inside the <form>`,
    },

    {
      type: 'paragraph',
      title: 'Why This Avoids Prop Drilling',
      content:
        'Without useFormStatus, showing a pending state on a deeply nested submit button would require passing an isPending prop down manually. useFormStatus reads it directly from the surrounding form context instead, keeping the submit button fully self-contained and reusable across different forms.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use useFormStatus specifically inside small, reusable components meant to live within a form (submit buttons, inline validation messages) — for the top-level component that renders the form itself, useActionState is usually the better fit for tracking pending/result state.',
    },
  ],

  quiz: [
    {
      question: 'What does useFormStatus let a component read?',
      options: [
        'Any component’s state, anywhere in the app',
        'The status of the nearest parent form, from a component rendered inside it',
        'The browser’s online/offline status',
        'The current route',
      ],
      answer: 1,
    },
    {
      question: 'What happens if useFormStatus is called in the same component that renders the <form> itself?',
      options: [
        'It works exactly the same way',
        'It always returns the default, non-pending status — it can only read a parent form, not its own',
        'It throws an error',
        'It automatically finds a different form on the page',
      ],
      answer: 1,
    },
    {
      question: 'What problem does useFormStatus solve compared to manually passing a pending prop down?',
      options: [
        'It makes the form submit faster',
        'It avoids prop drilling an isPending value down to nested components like a submit button',
        'It validates form fields automatically',
        'It replaces the need for a <form> element',
      ],
      answer: 1,
    },
  ],

  previous: 'use-action-state',
  next: 'use-reducer',
};
