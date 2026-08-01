import { Tutorial } from '@/app/types/tutorial';

export const setup: Tutorial = {
  slug: 'setup',

  title: 'React Setup',

  description:
    'Create a new React project using Vite and understand the basic project structure.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 2 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'Choosing a Starting Point',
      content:
        'React itself doesn’t dictate a build setup. For learning and most new projects, Vite is the fastest and most popular way to start a plain React app — for full-stack apps with routing and server rendering built in, Next.js is the standard choice.',
    },

    {
      type: 'code',
      title: 'Creating a Project with Vite',
      language: 'bash',
      code: `npm create vite@latest my-app -- --template react

cd my-app
npm install
npm run dev`,
    },

    {
      type: 'paragraph',
      title: 'Basic Project Structure',
      content:
        'A fresh Vite + React project includes a few key files worth knowing right away.',
    },

    {
      type: 'table',
      title: 'Key Files',
      headers: ['File', 'Purpose'],
      rows: [
        ['index.html', 'The single HTML page the app is mounted into'],
        ['src/main.jsx', 'The entry point that renders the root App component'],
        ['src/App.jsx', 'The top-level component of your application'],
        ['package.json', 'Project dependencies and npm scripts'],
      ],
    },

    {
      type: 'code',
      title: 'src/main.jsx',
      language: 'jsx',
      code: `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
    },

    {
      type: 'paragraph',
      title: 'How Rendering Gets Started',
      content:
        'createRoot() attaches React to a DOM node (usually a single <div id="root"> in index.html), and .render() tells React what component tree to display inside it.',
    },

    {
      type: 'note',
      title: 'StrictMode',
      content:
        '<StrictMode> is a development-only wrapper that helps catch common mistakes by intentionally rendering components twice and warning about deprecated patterns. It has no effect in production builds.',
    },

    {
      type: 'paragraph',
      title: '.jsx vs .js File Extensions',
      content:
        'Files containing JSX syntax are conventionally given a .jsx extension (or .tsx in TypeScript projects) so tooling and editors recognize them correctly, though some build setups also accept JSX in plain .js files.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use Vite for learning React itself or building a client-only app. Reach for Next.js once you need routing, server rendering, or a full-stack setup out of the box.',
    },
  ],

  quiz: [
    {
      question: 'Which tool is commonly recommended for quickly starting a new plain React project?',
      options: ['webpack alone', 'Vite', 'Babel', 'ESLint'],
      answer: 1,
    },
    {
      question: 'What does createRoot(...).render(<App />) do?',
      options: [
        'Installs React',
        'Attaches React to a DOM node and renders the given component tree into it',
        'Creates a new npm package',
        'Compiles JSX to HTML permanently',
      ],
      answer: 1,
    },
    {
      question: 'What is <StrictMode> used for?',
      options: [
        'Improving production performance',
        'A development-only wrapper that helps catch common mistakes',
        'Enforcing TypeScript types',
        'Adding CSS resets',
      ],
      answer: 1,
    },
  ],

  previous: 'introduction',
  next: 'jsx',
};
