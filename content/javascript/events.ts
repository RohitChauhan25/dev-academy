export const events = {
  slug: 'events',

  title: 'DOM Events',

  description:
    'Learn how to listen for user interactions with addEventListener(), what information the event object carries, the most common event types, and how bubbling and capturing work.',

  level: 'Intermediate',

  readingTime: '16 min',

  lesson: 'Lesson 38 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'What is an Event?',
      content:
        'An event is a signal that something has happened — the user clicked a button, typed into a field, submitted a form, or the page finished loading. The browser fires these events continuously as the user interacts with the page, and JavaScript can "listen" for specific ones and run code in response. This is the mechanism that makes web pages interactive rather than static documents: without events, a button click would just be a click, with nothing listening or reacting to it.',
    },

    {
      type: 'paragraph',
      title: 'addEventListener()',
      content:
        'addEventListener() is the standard way to react to events. It\'s called on the element you care about, takes the event type as a string (like "click") and a callback function to run when that event fires. It\'s preferred over the older approaches — an inline onclick="..." attribute in the HTML, or assigning a function directly to element.onclick — for a simple but important reason: addEventListener() lets you attach multiple listeners for the same event on the same element without one overwriting another. Assigning to .onclick, by contrast, replaces whatever handler was there before, since there can only ever be one.',
    },

    {
      type: 'code',
      title: 'addEventListener vs. the onclick Property',
      language: 'javascript',
      code: `const button = document.getElementById('save-btn');

// The older way — only one handler can ever be assigned
button.onclick = function () {
  console.log('Handler A');
};
button.onclick = function () {
  console.log('Handler B');
};
// clicking now only logs "Handler B" — Handler A was overwritten

// The preferred way — both handlers run
button.addEventListener('click', function () {
  console.log('Listener A');
});
button.addEventListener('click', function () {
  console.log('Listener B');
});
// clicking logs both "Listener A" and "Listener B"`,
    },

    {
      type: 'paragraph',
      title: 'The Event Object',
      content:
        'Every listener callback automatically receives an event object as its first argument, carrying details about what just happened. event.type tells you the event\'s name (like "click"), event.target is the actual element the event originated from (the element the user clicked, for instance), and event.currentTarget is the element the listener is attached to — these two can differ when the event bubbles up from a descendant. event.preventDefault() stops the browser\'s default behavior for that event (like a link navigating, or a form submitting), and event.stopPropagation() stops the event from continuing to bubble up to ancestor elements.',
    },

    {
      type: 'code',
      title: 'target, currentTarget, preventDefault, stopPropagation',
      language: 'javascript',
      code: `const form = document.getElementById('signup-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  // stops the browser from doing a full page reload / navigation
  console.log('Form submission handled with JavaScript instead');
});

const list = document.getElementById('menu');

list.addEventListener('click', function (event) {
  console.log('target:', event.target);
  // the specific <li> (or nested element) that was actually clicked

  console.log('currentTarget:', event.currentTarget);
  // always the <ul id="menu"> — where the listener is attached

  event.stopPropagation();
  // the click will not continue bubbling up past this listener
});`,
    },

    {
      type: 'table',
      title: 'Common Event Types',
      headers: ['Event', 'Fires When...'],
      rows: [
        ['click', 'An element is clicked'],
        [
          'input',
          'The value of an <input>, <textarea>, or <select> changes, as it happens',
        ],
        [
          'change',
          'A form control loses focus (or is toggled) after its value changed',
        ],
        ['submit', 'A <form> is submitted'],
        ['keydown', 'A key is pressed down'],
        ['keyup', 'A key is released'],
        ['mouseover / mouseout', 'The pointer enters or leaves an element'],
        ['focus / blur', 'An element gains or loses keyboard focus'],
        ['load', 'A resource (page, image, script) finishes loading'],
      ],
    },

    {
      type: 'code',
      title: 'input vs. change, and keydown',
      language: 'javascript',
      code: `const search = document.getElementById('search-box');

search.addEventListener('input', function (event) {
  console.log('Typing:', event.target.value);
  // fires on every keystroke — great for live search/filtering
});

search.addEventListener('change', function (event) {
  console.log('Committed value:', event.target.value);
  // fires once the field loses focus after being edited
});

search.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    console.log('User pressed Enter, submitting search for:', event.target.value);
  }
});`,
    },

    {
      type: 'paragraph',
      title: 'Removing Listeners with removeEventListener()',
      content:
        "removeEventListener() detaches a previously attached listener, but only if you pass it the exact same function reference that was originally added — an anonymous inline function can never be removed, because there's no way to refer back to it afterward. This is the main reason to write listener callbacks as named functions (or store the function in a variable) whenever you might need to remove them later, such as when a component is unmounted or a temporary interaction ends.",
    },

    {
      type: 'code',
      title: 'A Removable Listener Needs a Named Reference',
      language: 'javascript',
      code: `function handleResize() {
  console.log('Window resized to', window.innerWidth);
}

window.addEventListener('resize', handleResize);

// later, when you no longer need it:
window.removeEventListener('resize', handleResize);

// This does NOT work — a fresh anonymous function is a different reference,
// so removeEventListener() has nothing matching to remove:
window.addEventListener('resize', () => console.log('resized'));
window.removeEventListener('resize', () => console.log('resized'));
// the listener from the line above is still attached and still fires`,
    },

    {
      type: 'paragraph',
      title: 'Bubbling and Capturing, Briefly',
      content:
        "When an event happens on a nested element, it doesn't just fire on that element — it travels through the DOM tree in two phases. The capturing phase runs first, traveling from the document down to the target element; the bubbling phase runs second, traveling back up from the target through each of its ancestors. By default, addEventListener() listens during the bubbling phase; passing true (or { capture: true }) as a third argument listens during the capturing phase instead. This matters because a click on a deeply nested <span> will also trigger click listeners on its parent, grandparent, and so on, all the way up — a behavior the next lesson on event delegation puts to direct, practical use.",
    },

    {
      type: 'code',
      title: 'A Click Bubbling Up Through Ancestors',
      language: 'javascript',
      code: `// <div id="outer">
//   <div id="inner">
//     <button id="btn">Click me</button>
//   </div>
// </div>

document.getElementById('outer').addEventListener('click', () => console.log('outer'));
document.getElementById('inner').addEventListener('click', () => console.log('inner'));
document.getElementById('btn').addEventListener('click', () => console.log('button'));

// clicking the button logs, in order:
// "button"
// "inner"
// "outer"
// — the event bubbles upward through each ancestor after firing on the target`,
    },

    {
      type: 'list',
      title: 'Key Takeaways',
      items: [
        'addEventListener() supports multiple listeners per event and is safer than assigning .onclick directly',
        'The event object carries target, currentTarget, type, and the methods preventDefault() and stopPropagation()',
        'input fires on every keystroke; change fires once, after the value is committed',
        'removeEventListener() requires the exact same function reference used in addEventListener()',
        'Events bubble upward through ancestors by default; capturing runs the other direction, first',
      ],
    },

    {
      type: 'warning',
      title: "Arrow Functions Can't Be Removed Easily",
      content:
        'Every time an inline arrow function or anonymous function expression is evaluated, it creates a brand-new function value, even if the code looks identical to one written elsewhere. Passing one directly to addEventListener() means you have no reference to pass to removeEventListener() later. If a listener may ever need to be removed, assign the function to a named variable or declare it with function name() { ... } first.',
    },

    {
      type: 'tip',
      title: 'Use preventDefault() Deliberately',
      content:
        "Calling event.preventDefault() on a submit event is extremely common when handling forms with JavaScript (to send data via fetch instead of a full page reload), but it's easy to overuse. Only call it when you genuinely intend to override the browser's default behavior — calling it unnecessarily on things like links or checkboxes can make a page feel broken to users who expect standard behavior.",
    },
  ],

  quiz: [
    {
      question:
        'What is a key advantage of addEventListener() over setting element.onclick directly?',
      options: [
        'It runs faster in every browser',
        'It allows multiple listeners to be attached to the same event without overwriting each other',
        'It automatically calls preventDefault()',
        'It only works with click events',
      ],
      answer: 1,
    },
    {
      question:
        'Which event object method stops the browser from performing its default action, such as a form submitting?',
      options: [
        'stopPropagation()',
        'stopDefault()',
        'preventDefault()',
        'cancelEvent()',
      ],
      answer: 2,
    },
    {
      question: 'Which event fires on every keystroke inside a text input?',
      options: ['change', 'input', 'keypress only', 'submit'],
      answer: 1,
    },
    {
      question:
        'What is required in order for removeEventListener() to successfully remove a listener?',
      options: [
        'The exact same function reference must be passed that was used with addEventListener()',
        'The event type must be "click"',
        'The listener must have been added less than a second ago',
        'preventDefault() must have been called inside it',
      ],
      answer: 0,
    },
    {
      question:
        'By default, during which phase does a listener added with addEventListener() run?',
      options: [
        'The capturing phase',
        'The bubbling phase',
        'Both phases simultaneously',
        'Neither — it runs immediately',
      ],
      answer: 1,
    },
  ],

  previous: 'dom',
  next: 'event-delegation',
};
