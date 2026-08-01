import { Tutorial } from '@/app/types/tutorial';

export const forms: Tutorial = {
  slug: 'forms',

  title: 'Forms & Controlled Inputs',

  description:
    'Learn how to build forms in React using controlled input elements tied to state.',

  level: 'Beginner',

  readingTime: '16 min',

  lesson: 'Lesson 9 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Controlled Input?',
      content:
        'A controlled input’s value is driven entirely by React state, rather than the DOM’s own internal state. The input’s value comes from a state variable, and every keystroke updates that state via onChange.',
    },

    {
      type: 'code',
      title: 'A Controlled Text Input',
      language: 'jsx',
      code: `import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'Why Use Controlled Inputs?',
      content:
        'Since the input’s value always lives in state, it’s trivial to validate as the user types, format the value, disable submission until valid, or reset the form — all through normal state updates, with a single source of truth.',
    },

    {
      type: 'code',
      title: 'A Complete Controlled Form',
      language: 'jsx',
      code: `function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'Checkboxes and Select Elements',
      content:
        'Checkboxes use the checked attribute instead of value, and controlled selects work the same way as text inputs — their value is driven by state.',
    },

    {
      type: 'code',
      title: 'Controlled Checkbox and Select',
      language: 'jsx',
      code: `function Preferences() {
  const [subscribed, setSubscribed] = useState(false);
  const [plan, setPlan] = useState("free");

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={subscribed}
          onChange={(e) => setSubscribed(e.target.checked)}
        />
        Subscribe to newsletter
      </label>

      <select value={plan} onChange={(e) => setPlan(e.target.value)}>
        <option value="free">Free</option>
        <option value="pro">Pro</option>
      </select>
    </>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'Managing Multiple Fields with One State Object',
      content:
        'For forms with several fields, a single state object (instead of one useState call per field) can reduce boilerplate, updating just the changed key on each keystroke.',
    },

    {
      type: 'code',
      title: 'One State Object for the Whole Form',
      language: 'jsx',
      code: `function SignupForm() {
  const [form, setForm] = useState({ name: "", email: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
    </form>
  );
}`,
    },

    {
      type: 'note',
      title: 'Uncontrolled Inputs Exist Too',
      content:
        'An "uncontrolled" input lets the DOM manage its own value, read only when needed (usually via a ref) — simpler for very basic cases, but less flexible than the controlled approach for validation and dynamic UI.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Default to controlled inputs for anything beyond the simplest form — the ability to validate, format, and react to every keystroke is almost always worth the small amount of extra boilerplate.',
    },
  ],

  quiz: [
    {
      question: 'What makes an input "controlled" in React?',
      options: [
        'It has a required attribute',
        'Its value is driven by React state and updated via onChange',
        'It uses a ref',
        'It’s wrapped in a <form> tag',
      ],
      answer: 1,
    },
    {
      question: 'Which attribute does a controlled checkbox use instead of value?',
      options: ['selected', 'checked', 'active', 'toggled'],
      answer: 1,
    },
    {
      question: 'Why might you use one state object instead of separate useState calls for each form field?',
      options: [
        'It’s required by React',
        'It reduces boilerplate for forms with many fields',
        'It’s the only way to use onChange',
        'Separate useState calls are not allowed in the same component',
      ],
      answer: 1,
    },
  ],

  previous: 'state',
  next: 'component-composition',
};
