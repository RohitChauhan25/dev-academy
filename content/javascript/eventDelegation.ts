export const eventDelegation = {
  slug: 'event-delegation',

  title: 'Event Delegation',

  description:
    'Learn the event delegation pattern — attaching one listener to a common ancestor instead of many listeners to individual children — and when bubbling makes it work and when it does not.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 45 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'A Quick Recap of Bubbling',
      content:
        "The previous lesson introduced event bubbling: when an event fires on an element, it doesn't just fire there — it travels back up through every ancestor of that element, all the way to the document. A click on a <button> inside a <li> inside a <ul> triggers click listeners on the button, then the <li>, then the <ul>, and so on upward. Event delegation is the pattern that puts this behavior to deliberate use, rather than treating it as a side effect to be aware of.",
    },

    {
      type: 'paragraph',
      title: 'The Delegation Pattern',
      content:
        "Instead of attaching a separate listener to every individual child element, event delegation attaches a single listener to a shared ancestor, and lets bubbling carry every descendant's events up to it. Inside that one listener, you inspect event.target to figure out which specific child the event actually originated from, and respond accordingly. Because the browser walks the DOM for you via bubbling, one listener on a parent can effectively handle events for dozens, hundreds, or even elements that don't exist yet at the time the listener was attached.",
    },

    {
      type: 'code',
      title: 'Without Delegation: One Listener Per Child',
      language: 'javascript',
      code: `// <ul id="todo-list">
//   <li>Buy milk</li>
//   <li>Walk the dog</li>
//   <li>Write code</li>
// </ul>

const items = document.querySelectorAll('#todo-list li');

items.forEach((item) => {
  item.addEventListener('click', () => {
    console.log('Clicked:', item.textContent);
  });
});
// works, but requires re-running this setup every time a new <li> is added,
// and attaches one listener per item — wasteful with a long list`,
    },

    {
      type: 'code',
      title: 'With Delegation: One Listener on the Parent',
      language: 'javascript',
      code: `const list = document.getElementById('todo-list');

list.addEventListener('click', function (event) {
  const item = event.target.closest('li');

  if (!item) return; // click landed on the <ul> itself, not an <li>

  console.log('Clicked:', item.textContent);
});
// one listener, attached once, handles every <li> — including ones
// added to the list AFTER this listener was set up`,
    },

    {
      type: 'paragraph',
      title: 'Why closest() Matters',
      content:
        'event.target is the exact element the user interacted with, which might be a nested element inside the one you actually care about — a click on the text inside an <li>, or on an icon inside a button. element.closest(selector) walks up from that element (including itself) and returns the nearest ancestor matching the given CSS selector, or null if none matches. This makes it reliable for finding "which <li> was this click inside of", regardless of how deeply nested the actual clicked element was.',
    },

    {
      type: 'paragraph',
      title: 'Why Delegation is Useful: Dynamic Elements',
      content:
        "Listeners attached directly to specific elements only work for elements that already existed in the DOM at the moment addEventListener() ran. If new elements are added later — items appended after an API call, rows inserted after a user action — those new elements have no listener of their own, and clicking them does nothing unless you remember to re-attach a listener every time. Delegation sidesteps this entirely: since the listener lives on the ancestor and the ancestor doesn't change, every new descendant is automatically covered, with zero extra setup.",
    },

    {
      type: 'paragraph',
      title: 'Why Delegation is Useful: Performance',
      content:
        'Every listener the browser attaches costs a small amount of memory and setup work. For a handful of elements this is irrelevant, but for a list with hundreds or thousands of rows — a data table, a chat log, a product grid — attaching a listener to every single row can measurably add up. One listener on the shared container achieves the same behavior with a single attachment, regardless of how many children exist or how often they change.',
    },

    {
      type: 'code',
      title: 'Practical Example: A Todo List with a Delete Button per Item',
      language: 'javascript',
      code: `// <ul id="todo-list">
//   <li>Buy milk <button class="delete">x</button></li>
//   <li>Walk the dog <button class="delete">x</button></li>
// </ul>

const list = document.getElementById('todo-list');

list.addEventListener('click', function (event) {
  const deleteBtn = event.target.closest('.delete');

  if (deleteBtn) {
    const item = deleteBtn.closest('li');
    item.remove();
    console.log('Deleted:', item.textContent);
    return;
  }

  const item = event.target.closest('li');
  if (item) {
    console.log('Selected:', item.textContent);
  }
});

// Adding a brand-new item with its own delete button — no extra
// listener setup is needed, the existing delegated listener covers it
const newItem = document.createElement('li');
newItem.innerHTML = 'Read a book <button class="delete">x</button>';
list.appendChild(newItem);`,
    },

    {
      type: 'table',
      title: 'Delegation vs. Direct Listeners',
      headers: [
        'Aspect',
        'Direct Listener per Child',
        'Delegated Listener on Parent',
      ],
      rows: [
        [
          'Setup cost',
          'One listener per element',
          'A single listener, regardless of child count',
        ],
        [
          'New children added later',
          'Need a new listener attached manually',
          'Automatically covered — no extra work',
        ],
        [
          'Memory usage',
          'Grows with the number of elements',
          'Constant, no matter how many children exist',
        ],
        [
          'Code to find the source element',
          'Not needed — "this" is already the element',
          'Needed — use event.target.closest()',
        ],
      ],
    },

    {
      type: 'paragraph',
      title: 'When NOT to Use Delegation',
      content:
        "Delegation depends entirely on bubbling, so it doesn't work for events that don't bubble. focus and blur are the classic example — they fire only on the exact element that gained or lost focus and never travel upward, so a listener on an ancestor container will simply never see them. (The related focusin and focusout events do bubble and can be delegated normally.) The workaround, if you specifically need focus or blur with a single ancestor listener, is to attach the listener during the capturing phase instead of the default bubbling phase, since capturing does reach every descendant on the way down — though at that point it's often simpler to just attach direct listeners to the few elements involved.",
    },

    {
      type: 'code',
      title: 'focus Does Not Bubble — the Capturing Workaround',
      language: 'javascript',
      code: `const form = document.getElementById('signup-form');

// This NEVER fires — focus does not bubble up to the form
form.addEventListener('focus', () => console.log('a field was focused'));

// This DOES fire — capturing phase intercepts the event on the way down
form.addEventListener(
  'focus',
  (event) => console.log('focused:', event.target),
  true // capture: true
);

// Simpler alternative for most cases: use focusin, which bubbles
form.addEventListener('focusin', (event) => {
  console.log('focusin bubbled up from:', event.target);
});`,
    },

    {
      type: 'list',
      title: 'When Delegation Makes Sense',
      items: [
        'A list, table, or grid where children are added or removed dynamically',
        'A large number of similar interactive children (rows, cards, list items)',
        'Handling clicks on multiple kinds of nested controls within each child (e.g. a delete button and a select button)',
        'Reducing the number of listeners attached for memory or setup-cost reasons',
      ],
    },

    {
      type: 'warning',
      title: "Delegation Doesn't Work for Non-Bubbling Events",
      content:
        'focus, blur, and a handful of other events fire only on their exact target and never bubble. Attaching a delegated listener for these on an ancestor will silently do nothing — no error, the callback simply never runs. Use focusin/focusout (which do bubble), or attach the listener with the capturing option, or fall back to direct listeners on those specific elements.',
    },

    {
      type: 'tip',
      title: 'Always Guard for a Missed Match',
      content:
        "Inside a delegated listener, event.target might be the container itself, or an element that doesn't match what you're looking for at all — a click on empty padding inside a <ul>, for instance. Always check that closest() actually returned an element (rather than null) before acting on it, exactly like the `if (!item) return;` guard in the todo-list example.",
    },
  ],

  quiz: [
    {
      question: 'Event delegation relies on which DOM behavior?',
      options: [
        'Hoisting',
        'Event bubbling',
        'Garbage collection',
        'The event loop',
      ],
      answer: 1,
    },
    {
      question:
        'In a delegated click listener attached to a <ul>, which property tells you the exact element that was clicked?',
      options: [
        'event.currentTarget',
        'event.target',
        'event.type',
        'event.bubbles',
      ],
      answer: 1,
    },
    {
      question: 'What does element.closest(".item") do?',
      options: [
        'Finds the nearest descendant matching the selector',
        'Finds the nearest ancestor (including the element itself) matching the selector',
        'Returns the element closest to the top of the viewport',
        'Removes the closest matching element from the DOM',
      ],
      answer: 1,
    },
    {
      question:
        'Why does a delegated listener automatically handle elements added to the list after the listener was attached?',
      options: [
        'Because the browser re-runs addEventListener() automatically',
        "Because the listener lives on the parent and bubbling carries new children's events up to it",
        'Because new elements inherit listeners from their siblings',
        'It does not — new elements always require a new listener',
      ],
      answer: 1,
    },
    {
      question:
        'Which of these events would NOT be reliably handled by a delegated listener on an ancestor?',
      options: ['click', 'input', 'focus', 'keydown'],
      answer: 2,
    },
  ],

  previous: 'events',
  next: 'prototype',
};
