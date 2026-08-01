import { Tutorial } from '@/app/types/tutorial';

export const fragmentsAndPortals: Tutorial = {
  slug: 'fragments-and-portals',

  title: 'Fragments & Portals',

  description:
    'Learn how to group elements without adding extra DOM nodes using Fragments, and render content outside the normal component tree with Portals.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 12 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Fragments Exist',
      content:
        'Every component must return a single root element. Wrapping everything in an extra <div> just to satisfy that rule adds meaningless nodes to the DOM, which can break CSS layouts (like Flexbox or Grid) that expect specific direct children.',
    },

    {
      type: 'code',
      title: 'The Problem Fragments Solve',
      language: 'jsx',
      code: `// Without a Fragment, this <div> becomes an unwanted extra
// wrapper in the DOM, which can interfere with a Flexbox/Grid parent.
function TableRow() {
  return (
    <div>
      <td>Alice</td>
      <td>alice@example.com</td>
    </div>
  );
}`,
    },

    {
      type: 'code',
      title: 'Using a Fragment Instead',
      language: 'jsx',
      code: `function TableRow() {
  return (
    <>
      <td>Alice</td>
      <td>alice@example.com</td>
    </>
  );
}
// No extra DOM node is added at all`,
    },

    {
      type: 'paragraph',
      title: 'The Full Fragment Syntax',
      content:
        'The shorthand <>...</> is the most common form, but Fragment also has a full-name form (<React.Fragment>) required whenever you need to add a key — for example, when a Fragment appears inside a list.',
    },

    {
      type: 'code',
      title: 'A Fragment with a key',
      language: 'jsx',
      code: `import { Fragment } from "react";

function List({ items }) {
  return items.map((item) => (
    <Fragment key={item.id}>
      <dt>{item.term}</dt>
      <dd>{item.definition}</dd>
    </Fragment>
  ));
}`,
    },

    {
      type: 'paragraph',
      title: 'What is a Portal?',
      content:
        'A portal renders a component’s children into a different DOM node than its parent — useful for UI that needs to visually "break out" of its container, like modals, tooltips, and toasts, while still behaving like a normal part of the React tree for events and context.',
    },

    {
      type: 'code',
      title: 'A Basic Portal',
      language: 'jsx',
      code: `import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div className="modal-overlay">
      <div className="modal">{children}</div>
    </div>,
    document.getElementById("modal-root")
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'Why Portals Matter for Modals',
      content:
        'Rendering a modal deep inside a normal component tree can cause it to be visually clipped by an ancestor’s overflow: hidden or z-index stacking context. A portal renders it directly into a top-level DOM node (often right before </body>), sidestepping those layout constraints entirely.',
    },

    {
      type: 'note',
      title: 'Events Still Bubble Through the React Tree',
      content:
        'Even though a portal’s DOM node lives elsewhere in the document, events fired inside it still bubble up through the React component tree as if it were rendered in its original location — event handling stays predictable.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use Fragments by default whenever a component needs to return multiple sibling elements. Reach for a portal specifically when a component’s visual position needs to escape its parent’s layout or stacking context, like modals and dropdown menus.',
    },
  ],

  quiz: [
    {
      question: 'What problem does a Fragment solve?',
      options: [
        'It improves performance',
        'It lets a component return multiple sibling elements without adding an extra wrapping DOM node',
        'It adds animations',
        'It fetches data',
      ],
      answer: 1,
    },
    {
      question: 'When do you need the full <Fragment key={...}> form instead of the <>...</> shorthand?',
      options: [
        'Never, they are identical',
        'When the Fragment needs a key, e.g. inside a list',
        'Only in class components',
        'When styling the Fragment',
      ],
      answer: 1,
    },
    {
      question: 'Why are portals commonly used for modals?',
      options: [
        'They render faster than regular components',
        'They let content escape an ancestor’s overflow/z-index constraints while staying part of the React tree',
        'They are required for any pop-up UI',
        'They automatically add animations',
      ],
      answer: 1,
    },
  ],

  previous: 'styling',
  next: 'use-effect',
};
