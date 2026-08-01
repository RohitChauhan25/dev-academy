import { Tutorial } from '@/app/types/tutorial';

export const componentComposition: Tutorial = {
  slug: 'component-composition',

  title: 'Component Composition',

  description:
    'Learn how to compose components together using children and slot-like patterns, instead of deep prop chains.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 10 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'Composition Over Configuration',
      content:
        'Instead of building one component with dozens of props to handle every possible variation, React favors composing smaller components together — nesting them the way you’d nest HTML elements.',
    },

    {
      type: 'code',
      title: 'A Reusable Layout Component',
      language: 'jsx',
      code: `function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h2>Card Title</h2>
      <p>Any content can go here.</p>
    </Card>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'Multiple "Slots" with Named Props',
      content:
        'When a component needs more than one distinct content area, pass JSX through regular props (not just children) to create multiple "slots."',
    },

    {
      type: 'code',
      title: 'Multiple Content Slots',
      language: 'jsx',
      code: `function SplitPanel({ left, right }) {
  return (
    <div style={{ display: "flex" }}>
      <div className="left">{left}</div>
      <div className="right">{right}</div>
    </div>
  );
}

function App() {
  return (
    <SplitPanel
      left={<Sidebar />}
      right={<MainContent />}
    />
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'Avoiding "Prop Drilling"',
      content:
        'Composition also helps avoid prop drilling — passing a prop through several intermediate components that don’t use it themselves, just to reach a deeply nested child. Passing already-rendered JSX as children skips the layers that don’t need the data at all.',
    },

    {
      type: 'code',
      title: 'Composition Avoids an Unnecessary Prop Chain',
      language: 'jsx',
      code: `// Instead of threading 'user' through Layout and Sidebar just to reach Profile:
function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

function App({ user }) {
  return (
    <Layout>
      <Profile user={user} />
    </Layout>
  );
}
// Layout never needs to know about 'user' at all`,
    },

    {
      type: 'paragraph',
      title: 'Building Specialized Components from Generic Ones',
      content:
        'A generic, flexible component can be wrapped to create a more specialized version with sensible defaults, without duplicating its implementation.',
    },

    {
      type: 'code',
      title: 'A Specialized Button Built from a Generic One',
      language: 'jsx',
      code: `function Button({ variant = "default", ...props }) {
  return <button className={\`btn btn-\${variant}\`} {...props} />;
}

function DangerButton(props) {
  return <Button variant="danger" {...props} />;
}`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'When you notice a prop being passed through several components that never use it themselves, look for a way to restructure with composition (children or named JSX slots) before reaching for Context — composition often solves the problem more simply.',
    },
  ],

  quiz: [
    {
      question: 'What is "prop drilling"?',
      options: [
        'A performance optimization technique',
        'Passing a prop through several intermediate components that don’t use it, just to reach a deeply nested child',
        'A way to validate props',
        'A CSS technique',
      ],
      answer: 1,
    },
    {
      question: 'How can a component accept more than one distinct content area, beyond just children?',
      options: [
        'It’s not possible',
        'By accepting JSX through regular named props, creating multiple "slots"',
        'Only by using Context',
        'By using two separate return statements',
      ],
      answer: 1,
    },
    {
      question: 'What is one benefit of favoring composition over one large, heavily-configured component?',
      options: [
        'It always uses less code',
        'It avoids threading props through components that don’t actually need them',
        'It removes the need for props entirely',
        'It automatically improves performance',
      ],
      answer: 1,
    },
  ],

  previous: 'forms',
  next: 'styling',
};
