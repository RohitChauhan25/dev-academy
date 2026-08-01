import { Tutorial } from '@/app/types/tutorial';

export const lifecycle: Tutorial = {
  slug: 'lifecycle',

  title: 'Component Lifecycle',

  description:
    'Understand the three phases every component goes through — mounting, updating, and unmounting — and how hooks map onto them.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 14 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'The Three Lifecycle Phases',
      content:
        'Every component goes through the same three phases: mounting (created and inserted into the DOM for the first time), updating (re-rendered due to new props or state), and unmounting (removed from the DOM).',
    },

    {
      type: 'table',
      title: 'Lifecycle Phases',
      headers: ['Phase', 'When It Happens'],
      rows: [
        ['Mounting', 'The component is rendered for the first time'],
        ['Updating', 'The component re-renders due to new props, state, or context'],
        ['Unmounting', 'The component is removed from the DOM entirely'],
      ],
    },

    {
      type: 'paragraph',
      title: 'How useEffect Maps to the Lifecycle',
      content:
        'Rather than separate lifecycle methods (as in older class components), useEffect covers all three phases through its dependency array and cleanup function.',
    },

    {
      type: 'code',
      title: 'Simulating Lifecycle Phases with useEffect',
      language: 'jsx',
      code: `useEffect(() => {
  console.log("Mounted, or a dependency changed");

  return () => {
    console.log("Cleaning up before the next run, or before unmounting");
  };
}, [dependency]);`,
    },

    {
      type: 'table',
      title: 'Mapping useEffect to Lifecycle Events',
      headers: ['Class Component Method', 'useEffect Equivalent'],
      rows: [
        ['componentDidMount', 'useEffect(() => {...}, [])'],
        ['componentDidUpdate', 'useEffect(() => {...}, [dep])'],
        ['componentWillUnmount', 'The cleanup function returned from useEffect'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Class Components Had Explicit Lifecycle Methods',
      content:
        'Before hooks, class components used named methods for each phase — componentDidMount, componentDidUpdate, componentWillUnmount — spreading related logic (like subscribing and unsubscribing) across different methods instead of together in one place.',
    },

    {
      type: 'code',
      title: 'The Old Class Component Approach (For Reference)',
      language: 'jsx',
      code: `class Timer extends React.Component {
  componentDidMount() {
    this.id = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  tick() {
    // ...
  }

  render() {
    return <p>Timer running</p>;
  }
}`,
    },

    {
      type: 'note',
      title: 'Hooks Group Related Logic Together',
      content:
        'A key advantage of useEffect over class lifecycle methods is that setup and cleanup for the same concern live next to each other in one function, instead of being split across componentDidMount and componentWillUnmount.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Think in terms of "synchronizing with a dependency" rather than "running code at a lifecycle moment" — it’s a more accurate mental model for how useEffect actually behaves, and helps avoid common effect-related bugs.',
    },
  ],

  quiz: [
    {
      question: 'What are the three phases of a component’s lifecycle?',
      options: [
        'Loading, Rendering, Error',
        'Mounting, Updating, Unmounting',
        'Init, Render, Destroy',
        'Create, Read, Delete',
      ],
      answer: 1,
    },
    {
      question: 'Which useEffect pattern corresponds to componentDidMount?',
      options: [
        'useEffect(() => {...}) with no dependency array',
        'useEffect(() => {...}, [])',
        'useEffect(() => {...}, [dep])',
        'The cleanup function'
      ],
      answer: 1,
    },
    {
      question: 'What is an advantage of useEffect over separate class lifecycle methods?',
      options: [
        'It runs faster',
        'Setup and cleanup for the same concern can live together in one function',
        'It doesn’t need a dependency array',
        'It only works with class components',
      ],
      answer: 1,
    },
  ],

  previous: 'use-effect',
  next: 'lifting-state-up',
};
