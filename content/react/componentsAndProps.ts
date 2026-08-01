import { Tutorial } from '@/app/types/tutorial';

export const componentsAndProps: Tutorial = {
  slug: 'components-and-props',

  title: 'Components & Props',

  description:
    'Learn how to build reusable components and pass data into them using props.',

  level: 'Beginner',

  readingTime: '16 min',

  lesson: 'Lesson 4 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Component?',
      content:
        'A React component is a JavaScript function that returns JSX. Component names always start with a capital letter, which is how React tells them apart from regular HTML tags.',
    },

    {
      type: 'code',
      title: 'A Basic Component',
      language: 'jsx',
      code: `function Welcome() {
  return <h1>Welcome to DevAcademy!</h1>;
}

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'What Are Props?',
      content:
        'Props (short for "properties") are how data flows from a parent component into a child component — passed the same way HTML attributes are written, and received as a single object argument.',
    },

    {
      type: 'code',
      title: 'Passing and Receiving Props',
      language: 'jsx',
      code: `function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}`,
    },

    {
      type: 'paragraph',
      title: 'Destructuring Props',
      content:
        'Since props is just an object, it’s common to destructure the values you need directly in the function parameter for cleaner code.',
    },

    {
      type: 'code',
      title: 'Destructured Props',
      language: 'jsx',
      code: `function Greeting({ name, role }) {
  return (
    <h1>
      Hello, {name}! You are logged in as {role}.
    </h1>
  );
}

<Greeting name="Alice" role="Admin" />;`,
    },

    {
      type: 'paragraph',
      title: 'Props Are Read-Only',
      content:
        'A component must never modify the props it receives. React data flows in one direction — from parent to child — so a child that needs to change something should ask its parent to do so (typically via a callback prop), not mutate props directly.',
    },

    {
      type: 'code',
      title: 'Default Prop Values',
      language: 'jsx',
      code: `function Button({ label, variant = "primary" }) {
  return <button className={variant}>{label}</button>;
}

<Button label="Save" />;         // uses default variant: "primary"
<Button label="Delete" variant="danger" />;`,
    },

    {
      type: 'paragraph',
      title: 'The children Prop',
      content:
        'Any JSX nested between a component’s opening and closing tags is automatically passed to it as a special prop called children.',
    },

    {
      type: 'code',
      title: 'Using children',
      language: 'jsx',
      code: `function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card>
  <h2>Title</h2>
  <p>Some card content.</p>
</Card>;`,
    },

    {
      type: 'note',
      title: 'One-Way Data Flow',
      content:
        'This top-down flow of props — parent to child, never the reverse — is what makes React apps predictable: at any point, you can trace exactly where a piece of data came from by following props upward through the tree.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Keep components small and focused on one responsibility, and pass only the specific props a component actually needs — resist the urge to pass an entire large object "just in case."',
    },
  ],

  quiz: [
    {
      question: 'What must a component’s name always start with?',
      options: ['A lowercase letter', 'A capital letter', 'An underscore', 'A number'],
      answer: 1,
    },
    {
      question: 'Can a component modify the props it receives?',
      options: ['Yes, freely', 'No — props are read-only', 'Only numbers can be changed', 'Only in class components'],
      answer: 1,
    },
    {
      question: 'What does the special children prop contain?',
      options: [
        'An array of a component’s own state values',
        'Whatever JSX is nested between a component’s opening and closing tags',
        'A list of a component’s child components’ names',
        'CSS class names',
      ],
      answer: 1,
    },
  ],

  previous: 'jsx',
  next: 'rendering-lists',
};
