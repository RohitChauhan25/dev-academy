import { Tutorial } from '@/app/types/tutorial';

export const serverVsClientComponents: Tutorial = {
  slug: 'server-vs-client-components',

  title: 'Server vs Client Components',

  description:
    'Understand the React Server Component model — what runs on the server, what runs in the browser, and how the two work together.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 37 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'Two Kinds of Components Now Exist',
      content:
        'Modern React (used through frameworks like Next.js) distinguishes between Server Components, which render on the server and send only the resulting HTML/data to the browser, and Client Components, which render in the browser and can use state, effects, and browser APIs.',
    },

    {
      type: 'table',
      title: 'Server vs Client Components',
      headers: ['', 'Server Component', 'Client Component'],
      rows: [
        ['Runs where', 'On the server only', 'In the browser (and initially on the server for SSR)'],
        ['Can use useState/useEffect', 'No', 'Yes'],
        ['Can access the filesystem/database directly', 'Yes', 'No'],
        ['Ships JavaScript to the browser', 'No (zero JS for this component)', 'Yes'],
        ['Declared with', 'The default — no directive needed', '"use client" at the top of the file'],
      ],
    },

    {
      type: 'code',
      title: 'A Server Component (Default)',
      language: 'jsx',
      code: `// This runs only on the server — its code never ships to the browser.
async function ProductList() {
  const products = await db.query("SELECT * FROM products");

  return (
    <ul>
      {products.map((p) => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}`,
    },

    {
      type: 'code',
      title: 'A Client Component',
      language: 'jsx',
      code: `"use client";

import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'Why This Split Exists',
      content:
        'Server Components can fetch data directly (no client-side API round trip needed) and never add to the JavaScript bundle sent to the browser. Client Components are still necessary for anything interactive — state, event handlers, effects, browser-only APIs.',
    },

    {
      type: 'paragraph',
      title: 'Composing Server and Client Components',
      content:
        'A Server Component can render a Client Component as a child, passing serializable data as props. A Client Component, however, cannot import and directly render a Server Component — data flows from server to client, not the other way around.',
    },

    {
      type: 'code',
      title: 'A Server Component Rendering a Client Component',
      language: 'jsx',
      code: `// page.jsx — Server Component (no "use client")
import LikeButton from "./LikeButton"; // Client Component

async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  return (
    <div>
      <h1>{product.name}</h1>
      <LikeButton /> {/* interactive island inside a server-rendered page */}
    </div>
  );
}`,
    },

    {
      type: 'warning',
      title: 'Props Must Be Serializable',
      content:
        'Since Server Components pass data to Client Components across the server/client boundary, props must be serializable (plain objects, strings, numbers, arrays) — you can’t pass a function or a class instance from a Server Component down to a Client Component.',
    },

    {
      type: 'note',
      title: 'This is a Framework Feature',
      content:
        'Server Components require a framework with the right build/runtime support — Next.js’s App Router is the most common way to use them today. Plain React (via Vite, for example) doesn’t have Server Components without such a framework.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Default to Server Components, and mark a component "use client" only when it actually needs interactivity (state, effects, event handlers) or browser-only APIs — pushing "use client" as far down the tree as possible keeps the client JavaScript bundle smaller.',
    },
  ],

  quiz: [
    {
      question: 'Where does a Server Component run?',
      options: ['In the browser only', 'On the server only', 'Both, always', 'It depends on screen size'],
      answer: 1,
    },
    {
      question: 'What directive marks a component as a Client Component?',
      options: ['"use server"', '"use client"', '"use effect"', '"use state"'],
      answer: 1,
    },
    {
      question: 'Can a Client Component directly import and render a Server Component?',
      options: [
        'Yes, freely',
        'No — data and rendered output flow from server to client, not the reverse',
        'Only with "use client" removed',
        'Only in Next.js Pages Router',
      ],
      answer: 1,
    },
  ],

  previous: 'suspense-and-lazy',
  next: 'data-fetching',
};
