import { Tutorial } from '@/app/types/tutorial';

export const eventHandling: Tutorial = {
  slug: 'event-handling',

  title: 'Handling Events',

  description:
    'Learn how to respond to clicks, input changes, and other user interactions in React.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 7 of 42',

  sections: [
    {
      type: 'paragraph',
      title: 'Attaching Event Handlers',
      content:
        'React event handlers are passed as camelCase props like onClick, and receive a function reference — not a string, and not a function call.',
    },

    {
      type: 'code',
      title: 'A Basic Click Handler',
      language: 'jsx',
      code: `function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click me</button>;
}`,
    },

    {
      type: 'warning',
      title: 'Passing a Function Reference, Not Calling It',
      content:
        'onClick={handleClick} passes the function itself, to be called later by React. onClick={handleClick()} calls it immediately during render instead — a very common beginner mistake.',
    },

    {
      type: 'code',
      title: 'Passing Arguments with an Inline Arrow Function',
      language: 'jsx',
      code: `function ItemList({ items, onRemove }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}`,
    },

    {
      type: 'paragraph',
      title: 'The Event Object',
      content:
        'React passes a synthetic event object to handlers, normalized to behave consistently across browsers, with the same familiar properties and methods as a native DOM event.',
    },

    {
      type: 'code',
      title: 'Reading the Event Object',
      language: 'jsx',
      code: `function SearchInput() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return <input onChange={handleChange} placeholder="Search..." />;
}`,
    },

    {
      type: 'table',
      title: 'Common Event Props',
      headers: ['Prop', 'Fires When'],
      rows: [
        ['onClick', 'An element is clicked'],
        ['onChange', 'A form input’s value changes'],
        ['onSubmit', 'A form is submitted'],
        ['onKeyDown', 'A key is pressed down'],
        ['onMouseEnter / onMouseLeave', 'The pointer enters/leaves an element'],
        ['onFocus / onBlur', 'An element gains or loses focus'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Preventing Default Behavior',
      content:
        'Just like native DOM events, event.preventDefault() stops a browser’s default action — most commonly used to stop a form submission from reloading the page.',
    },

    {
      type: 'code',
      title: 'preventDefault in a Form',
      language: 'jsx',
      code: `function SearchForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted without a page reload");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Search</button>
    </form>
  );
}`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Name event handler functions starting with "handle" (handleClick, handleSubmit) — it’s a widely followed convention that makes event-driven code easy to scan at a glance.',
    },
  ],

  quiz: [
    {
      question: 'What is wrong with onClick={handleClick()}?',
      options: [
        'Nothing, it works correctly',
        'It calls handleClick immediately during render instead of passing it as a reference to call later',
        'It’s missing a semicolon',
        'onClick doesn’t accept function calls'
      ],
      answer: 1,
    },
    {
      question: 'How do you pass an argument to an event handler in React?',
      options: [
        'onClick={handleClick(id)}',
        'onClick={() => handleClick(id)}',
        'It’s not possible',
        'onClick="handleClick(id)"',
      ],
      answer: 1,
    },
    {
      question: 'What does event.preventDefault() commonly stop?',
      options: [
        'All future events',
        'A browser’s default action, like a form submission reloading the page',
        'React re-rendering',
        'CSS transitions',
      ],
      answer: 1,
    },
  ],

  previous: 'conditional-rendering',
  next: 'state',
};
