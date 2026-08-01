import { Tutorial } from '@/app/types/tutorial';

export const renderingLists: Tutorial = {
  slug: 'rendering-lists',

  title: 'Rendering Lists & Keys',

  description:
    'Learn how to render arrays of data as JSX elements, and why the key prop matters.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 5 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'Rendering an Array',
      content:
        'React can render an array of JSX elements directly. The most common way to build that array is with .map(), transforming each piece of data into a corresponding element.',
    },

    {
      type: 'code',
      title: 'Rendering a List with .map()',
      language: 'jsx',
      code: `const fruits = ["Apple", "Banana", "Cherry"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'Why the key Prop is Required',
      content:
        'The key prop helps React identify which items have changed, been added, or been removed between renders. Without stable keys, React may re-render or reorder list items incorrectly, causing subtle bugs — especially with state inside list items.',
    },

    {
      type: 'code',
      title: 'Rendering Objects with a Unique id',
      language: 'jsx',
      code: `const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`,
    },

    {
      type: 'warning',
      title: 'Avoid Using the Array Index as a Key',
      content:
        'Using the array index as a key works for static lists that never reorder, but breaks down as soon as items are inserted, removed, or reordered — React can end up matching state to the wrong item. Prefer a stable, unique id from your data instead.',
    },

    {
      type: 'code',
      title: 'The Problem with Index Keys',
      language: 'jsx',
      code: `// Risky: if the list is reordered or filtered, index-based keys
// can cause React to reuse the wrong DOM node/state for an item.
{items.map((item, index) => (
  <ListItem key={index} item={item} />
))}`,
    },

    {
      type: 'paragraph',
      title: 'Keys Are Not Passed as Props',
      content:
        'key is a special attribute used internally by React for reconciliation — it’s never passed down to the component as a regular prop, so if the child needs the same value, pass it again under a different prop name.',
    },

    {
      type: 'note',
      title: 'Keys Only Need to Be Unique Among Siblings',
      content:
        'A key only needs to be unique among the elements in the same list, not globally unique across the entire app.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use a stable, unique identifier from your actual data (like a database id) as the key whenever possible. Reach for the array index only as a last resort, for lists that are never reordered, filtered, or have items inserted/removed.',
    },
  ],

  quiz: [
    {
      question: 'What is the purpose of the key prop in a list?',
      options: [
        'It styles the list item',
        'It helps React identify which items changed, were added, or were removed between renders',
        'It sorts the list alphabetically',
        'It’s required for CSS to apply',
      ],
      answer: 1,
    },
    {
      question: 'Why is using the array index as a key risky?',
      options: [
        'It’s slower to compute',
        'It can cause React to mismatch state to the wrong item if the list is reordered or filtered',
        'Indexes are not valid JavaScript values',
        'It only works with strings',
      ],
      answer: 1,
    },
    {
      question: 'Does a key value get passed down to the child component as a regular prop?',
      options: ['Yes, always', 'No — key is used internally by React and not passed as a prop', 'Only in class components', 'Only if named "key"'],
      answer: 1,
    },
  ],

  previous: 'components-and-props',
  next: 'conditional-rendering',
};
