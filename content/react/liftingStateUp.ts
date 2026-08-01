import { Tutorial } from '@/app/types/tutorial';

export const liftingStateUp: Tutorial = {
  slug: 'lifting-state-up',

  title: 'Lifting State Up',

  description:
    'Learn how to share state between sibling components by moving it to their closest common parent.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 15 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem: Two Components Need the Same State',
      content:
        'If two sibling components both need access to the same piece of state, keeping that state inside just one of them means the other has no way to read or update it — since props only flow downward.',
    },

    {
      type: 'code',
      title: 'Two Components That Should Share State',
      language: 'jsx',
      code: `// These need to stay in sync, but each holds its own separate state:
function TemperatureInput() {
  const [celsius, setCelsius] = useState("");
  return <input value={celsius} onChange={(e) => setCelsius(e.target.value)} />;
}

function TemperatureDisplay() {
  // Has no way to know what TemperatureInput's value is
}`,
    },

    {
      type: 'paragraph',
      title: 'The Solution: Move State to the Common Parent',
      content:
        '"Lifting state up" means moving the shared state to the closest common ancestor of the components that need it, then passing it back down as props — along with a callback for children to request changes.',
    },

    {
      type: 'code',
      title: 'State Lifted to the Parent',
      language: 'jsx',
      code: `function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");

  return (
    <>
      <TemperatureInput value={celsius} onChange={setCelsius} />
      <TemperatureDisplay celsius={celsius} />
    </>
  );
}

function TemperatureInput({ value, onChange }) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />;
}

function TemperatureDisplay({ celsius }) {
  const fahrenheit = celsius ? (celsius * 9) / 5 + 32 : "";
  return <p>{fahrenheit}°F</p>;
}`,
    },

    {
      type: 'paragraph',
      title: 'The General Pattern',
      content:
        'This is one of the most common patterns in React: data flows down as props, and a callback prop lets a child request a change, which the parent handles by updating its own state — triggering a re-render that flows the new value back down.',
    },

    {
      type: 'list',
      title: 'Steps to Lift State Up',
      items: [
        'Identify which components need to share the same state.',
        'Find their closest common parent component.',
        'Move the state (useState) into that parent.',
        'Pass the state value down as a prop to each child that reads it.',
        'Pass a callback function down as a prop to each child that needs to update it.',
      ],
    },

    {
      type: 'note',
      title: 'When Lifting Gets Awkward',
      content:
        'If the shared state needs to reach components many levels apart, lifting it all the way up can mean threading props through several components that don’t use it — a sign it might be time to reach for the Context API instead, covered next.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Keep state as close as possible to where it’s used — only lift it up to the smallest common ancestor actually needed, not all the way to the top of the app "just in case."',
    },
  ],

  quiz: [
    {
      question: 'What does "lifting state up" mean?',
      options: [
        'Moving state into a child component',
        'Moving shared state to the closest common ancestor of the components that need it',
        'Deleting unused state',
        'A CSS animation technique',
      ],
      answer: 1,
    },
    {
      question: 'How does a child component request a change to state that now lives in its parent?',
      options: [
        'It mutates the prop directly',
        'Through a callback function passed down as a prop',
        'It cannot request changes',
        'By dispatching a global event',
      ],
      answer: 1,
    },
    {
      question: 'What is a sign that lifting state up might not be the best solution anymore?',
      options: [
        'The state is a boolean',
        'The state needs to reach components many levels apart, requiring props to thread through unrelated components',
        'The component has no children',
        'The parent component is small',
      ],
      answer: 1,
    },
  ],

  previous: 'lifecycle',
  next: 'context-api',
};
