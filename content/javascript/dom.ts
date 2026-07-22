export const dom = {
  slug: 'dom',

  title: 'The DOM (Document Object Model)',

  description:
    'Learn what the DOM actually is, how to select elements with getElementById, querySelector and querySelectorAll, and how to read, write, and create HTML content from JavaScript.',

  level: 'Intermediate',

  readingTime: '18 min',

  lesson: 'Lesson 37 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'What is the DOM?',
      content:
        "The DOM, short for Document Object Model, is the browser's live, in-memory representation of the HTML page as a tree of objects. When the browser loads an HTML file, it doesn't just display the text — it parses that text into a tree of nodes, where each element, attribute, and piece of text becomes an object you can inspect and manipulate with JavaScript. This is why the DOM matters so much: it's the bridge between the static HTML you write and the dynamic, interactive page the user actually sees. Change the DOM, and the browser repaints the page to match, immediately.",
    },

    {
      type: 'paragraph',
      title: 'The DOM is Not HTML',
      content:
        'It\'s easy to think of the DOM as just "the HTML", but they\'re different things. HTML is the text file the server sends down; the DOM is the object structure the browser builds from that text after parsing it. The DOM can also be changed after the page loads — by JavaScript, by browser extensions, even by the browser itself correcting malformed markup — so at any given moment, the DOM might look very different from the original HTML source. The document object is your entry point into this tree; everything else is reached by starting there.',
    },

    {
      type: 'code',
      title: 'The document Object',
      language: 'javascript',
      code: `console.log(document);
// the entire HTML document, as a tree of nodes

console.log(document.title);
// the contents of <title> in the <head>

console.log(document.body);
// the <body> element node

console.log(document.documentElement);
// the <html> element node — the root of the whole tree`,
    },

    {
      type: 'paragraph',
      title: 'Selecting Elements',
      content:
        "Before you can read or change anything on the page, you need to select the element (or elements) you're interested in. getElementById() finds a single element by its id attribute and is the fastest lookup, since ids are supposed to be unique. querySelector() is more flexible — it accepts any CSS selector and returns the first matching element, or null if nothing matches. querySelectorAll() also accepts a CSS selector, but returns every match, not just the first one.",
    },

    {
      type: 'code',
      title: 'getElementById, querySelector, querySelectorAll',
      language: 'javascript',
      code: `// <div id="app">
//   <p class="greeting">Hello</p>
//   <p class="greeting">World</p>
// </div>

const app = document.getElementById('app');
console.log(app);
// the <div id="app"> element

const firstGreeting = document.querySelector('.greeting');
console.log(firstGreeting.textContent);
// "Hello" — only the FIRST match

const allGreetings = document.querySelectorAll('.greeting');
console.log(allGreetings.length);
// 2

allGreetings.forEach((el) => console.log(el.textContent));
// "Hello"
// "World"`,
    },

    {
      type: 'note',
      title: 'NodeList is Not an Array',
      content:
        "querySelectorAll() returns a NodeList, not a real array. A NodeList does support forEach(), which covers most everyday needs, but it doesn't have map(), filter(), reduce(), or the other array methods you might reach for. If you need those, convert it first with Array.from(nodeList) or [...nodeList]. getElementsByClassName() and getElementsByTagName() are older alternatives that return a live HTMLCollection instead, which updates automatically as the DOM changes — a subtle difference from the static NodeList that querySelectorAll() returns.",
    },

    {
      type: 'paragraph',
      title: 'Reading and Writing Content: textContent vs. innerHTML',
      content:
        "Once you have an element, textContent lets you read or write its text, treating everything as plain text — any HTML-looking string you assign to it is inserted literally, tags and all, rather than being parsed. innerHTML, by contrast, reads or writes the actual HTML markup inside an element, parsing whatever string you assign into real elements. That parsing is exactly what makes innerHTML risky: if the string ever comes from user input rather than a value you fully control, an attacker can inject a <script> or an event-handler attribute that runs in your page's context — a classic cross-site scripting (XSS) vulnerability. Assigning untrusted text should almost always go through textContent instead.",
    },

    {
      type: 'code',
      title: 'textContent vs. innerHTML',
      language: 'javascript',
      code: `const box = document.getElementById('box');

box.textContent = '<strong>Hi</strong>';
console.log(box.innerHTML);
// "&lt;strong&gt;Hi&lt;/strong&gt;" — inserted as literal text, safely escaped

box.innerHTML = '<strong>Hi</strong>';
console.log(box.textContent);
// "Hi" — the <strong> tag was parsed into a real element

// Danger: never do this with untrusted input
const userComment = '<img src="x" onerror="alert(\\'hacked\\')">';
box.innerHTML = userComment;
// the onerror handler executes — this is exactly how XSS attacks work

// Safe alternative
box.textContent = userComment;
// the string is displayed as plain text, and nothing executes`,
    },

    {
      type: 'paragraph',
      title: 'Attributes and Classes',
      content:
        'HTML attributes — like src, href, or data-* custom attributes — are read and written with getAttribute() and setAttribute(). For the class attribute specifically, the classList property is usually more convenient than working with the raw string: it exposes add(), remove(), toggle(), and contains() methods that let you manage individual classes without accidentally clobbering the others already on the element.',
    },

    {
      type: 'code',
      title: 'Attributes and classList',
      language: 'javascript',
      code: `const link = document.querySelector('a');

console.log(link.getAttribute('href'));
// "https://example.com"

link.setAttribute('target', '_blank');
console.log(link.outerHTML);
// <a href="https://example.com" target="_blank">...</a>

const panel = document.getElementById('panel');

panel.classList.add('active');
console.log(panel.className);
// "panel active"

panel.classList.remove('active');
panel.classList.toggle('hidden');
// adds "hidden" if it's not there, removes it if it is

console.log(panel.classList.contains('hidden'));
// true`,
    },

    {
      type: 'paragraph',
      title: 'Creating and Inserting Elements',
      content:
        'To add brand-new content to the page, you first build the element in memory with document.createElement(), configure it (set its text, attributes, classes), and then attach it to the visible tree with a method like appendChild() or the newer append(). Nothing appears on screen until that last insertion step — creating an element on its own just produces a detached object floating in memory. remove() takes an element back out of the DOM entirely.',
    },

    {
      type: 'code',
      title: 'createElement, appendChild, append, remove',
      language: 'javascript',
      code: `const list = document.getElementById('list');

const item = document.createElement('li');
item.textContent = 'New item';
item.classList.add('list-item');

list.appendChild(item);
// the <li> is now visible inside <ul id="list">

const secondItem = document.createElement('li');
secondItem.textContent = 'Another item';
list.append(secondItem, 'plain text is fine too');
// append() can take multiple nodes AND plain strings, appendChild() can't

item.remove();
// the first <li> is gone from the page`,
    },

    {
      type: 'code',
      title: 'Practical Example: Rendering a List of Items',
      language: 'javascript',
      code: `const fruits = ['Apple', 'Banana', 'Cherry'];
const container = document.getElementById('fruit-list');

function renderFruits(items) {
  container.innerHTML = ''; // clear whatever was there before

  items.forEach((fruit) => {
    const li = document.createElement('li');
    li.textContent = fruit; // safe — textContent, not innerHTML
    li.classList.add('fruit-item');
    container.appendChild(li);
  });
}

renderFruits(fruits);
// <ul id="fruit-list">
//   <li class="fruit-item">Apple</li>
//   <li class="fruit-item">Banana</li>
//   <li class="fruit-item">Cherry</li>
// </ul>`,
    },

    {
      type: 'list',
      title: 'Core DOM Operations at a Glance',
      items: [
        'Select: getElementById(), querySelector(), querySelectorAll()',
        'Read/write text: textContent (safe), innerHTML (parses markup, risky with untrusted input)',
        'Attributes: getAttribute(), setAttribute()',
        'Classes: classList.add(), remove(), toggle(), contains()',
        'Create and insert: createElement(), appendChild(), append()',
        'Remove: element.remove()',
      ],
    },

    {
      type: 'warning',
      title: 'Never Pipe Untrusted Input into innerHTML',
      content:
        'Any time the string you assign to innerHTML could contain user-supplied content — a comment, a search query, a profile bio — you are opening the door to XSS unless that content is sanitized first. Prefer textContent for plain text, or a trusted sanitization library if you genuinely need to render user-supplied HTML.',
    },

    {
      type: 'tip',
      title: 'Batch Your DOM Changes',
      content:
        "Every insertion into the live DOM can trigger the browser to recalculate layout and repaint the page, which is comparatively expensive. When building up a list like the fruit example above, it's often faster to build the elements first and append them all at once (or use a DocumentFragment) rather than touching the live DOM inside a tight loop, especially for large lists.",
    },
  ],

  quiz: [
    {
      question: 'What does the DOM represent?',
      options: [
        'The raw HTML text file sent by the server',
        "The browser's live, in-memory tree of objects representing the page",
        'A CSS stylesheet applied to the page',
        'A database used to store form submissions',
      ],
      answer: 1,
    },
    {
      question:
        'Which method should you prefer when inserting untrusted, user-supplied text into an element?',
      options: ['innerHTML', 'outerHTML', 'textContent', 'insertAdjacentHTML'],
      answer: 2,
    },
    {
      question: 'What is returned by document.querySelectorAll(".item")?',
      options: [
        'A single element',
        'An array of elements',
        'A NodeList of every matching element',
        'undefined, unless exactly one element matches',
      ],
      answer: 2,
    },
    {
      question:
        'Which classList method adds a class if it is missing and removes it if it is already present?',
      options: ['add()', 'remove()', 'toggle()', 'contains()'],
      answer: 2,
    },
    {
      question:
        'What must happen before an element created with document.createElement() appears on the page?',
      options: [
        'Nothing — it appears automatically once created',
        'It must be inserted into the DOM with a method like appendChild() or append()',
        'It must be assigned an id attribute',
        'The page must be reloaded',
      ],
      answer: 1,
    },
  ],

  previous: 'date-and-time',
  next: 'events',
};
