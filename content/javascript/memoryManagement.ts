export const memoryManagement = {
  slug: 'memory-management',

  title: 'Memory Management & Garbage Collection',

  description:
    'Learn how JavaScript allocates and releases memory automatically, how the mark-and-sweep garbage collector decides what to free, common memory leak patterns, and how WeakMap/WeakSet help avoid them.',

  level: 'Advanced',

  readingTime: '18 min',

  lesson: 'Lesson 48 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'The Memory Lifecycle',
      content:
        "Every value your program uses goes through the same three-step memory lifecycle: allocate the memory it needs, use that memory (reading and writing values), and eventually release it once it's no longer needed. In languages like C, the programmer is responsible for all three steps by hand, including explicitly calling something like free(). JavaScript automates the last step: you never call free() or delete on a value's underlying memory — instead, a background process called the garbage collector figures out when memory is safe to reclaim and does it for you.",
    },

    {
      type: 'paragraph',
      title: 'Allocation Happens Constantly, Automatically',
      content:
        "You allocate memory constantly without thinking about it: declaring a variable, creating an object literal or array, defining a function, all reserve memory behind the scenes. There's no explicit \"allocate\" step you write yourself — JavaScript's engine handles it the moment a value is created. The part worth understanding deeply is the release step, because that's the part JavaScript automates on your behalf, and automation only works well if you understand what it's doing.",
    },

    {
      type: 'paragraph',
      title: 'Reachability: The Core Idea',
      content:
        "Garbage collectors work on the concept of reachability. A set of values are always considered reachable and are never collected — these are the roots, which include the global object, and any variables currently on the call stack in functions that haven't returned yet. Any value reachable from a root, by following references (object properties, array elements, closures) however many steps deep, is also considered reachable and kept alive. A value becomes eligible for garbage collection only when it is no longer reachable from any root — that is, nothing in the program can get to it anymore.",
    },

    {
      type: 'paragraph',
      title: 'Mark-and-Sweep',
      content:
        'The algorithm modern JavaScript engines use is called mark-and-sweep. Periodically, the garbage collector starts at the roots and walks every reference it can find, marking every value it reaches along the way as "in use." Once that walk is finished, it sweeps through memory and reclaims everything that was not marked — those are, by definition, the values nothing in the program can reach anymore. This is a meaningful improvement over older approaches like reference counting, because mark-and-sweep correctly handles circular references (two objects that reference each other but that nothing else references) — since neither is reachable from a root, both get collected, whereas naive reference counting would keep them alive forever.',
    },

    {
      type: 'code',
      title: 'Reachability in Practice',
      language: 'javascript',
      code: `let user = { name: "Rohit" }; // reachable — referenced by the "user" variable (a root)

let sameUser = user; // now two references point to the same object

user = null; // the object is still reachable through "sameUser"

sameUser = null;
// Nothing references the { name: "Rohit" } object anymore.
// It is now unreachable and becomes eligible for garbage collection.

function createTemp() {
  const temp = { data: "only needed here" };
  return temp.data;
}

createTemp();
// The { data: ... } object was reachable only while createTemp() was
// running (via the local variable "temp"). Once the function returns,
// nothing references it, and it becomes eligible for collection.`,
    },

    {
      type: 'list',
      title: 'Common Memory Leak Patterns',
      items: [
        'Accidental globals — forgetting a variable declaration (e.g. `total = 0` instead of `let total = 0`) attaches the variable to the global object, so it lives for the entire lifetime of the program and is never collected.',
        "Forgotten timers and intervals — a setInterval() that's never cleared with clearInterval() keeps running forever, and keeps every variable its callback closes over reachable indefinitely.",
        "Detached DOM nodes — removing an element from the page with something like element.remove() doesn't free its memory if a JavaScript variable elsewhere still references it; the node is detached from the visible page but still fully reachable, and the garbage collector will not touch it.",
        'Closures retaining large scopes — a closure keeps its entire outer scope alive for as long as the closure itself is reachable, so if that outer scope happens to hold a large array or object that is no longer needed, the closure silently keeps it around.',
        'Event listeners never removed — attaching a listener to a long-lived object (like window) with a callback that closes over other data keeps that data reachable for as long as the listener is attached, even after the relevant UI is gone.',
      ],
    },

    {
      type: 'code',
      title: 'A Memory Leak: Forgotten Interval',
      language: 'javascript',
      code: `function startPolling() {
  const cache = new Array(1_000_000).fill("data"); // a large array

  const intervalId = setInterval(() => {
    // this callback closes over "cache", keeping the whole array reachable
    console.log(cache.length);
  }, 1000);

  // Bug: intervalId is never used to clear the interval.
  // The interval keeps firing forever, and "cache" can never be
  // garbage collected because the still-running callback references it.
}

startPolling();`,
    },

    {
      type: 'code',
      title: 'The Fix: Clear the Interval When Done',
      language: 'javascript',
      code: `function startPolling() {
  const cache = new Array(1_000_000).fill("data");

  const intervalId = setInterval(() => {
    console.log(cache.length);
  }, 1000);

  // Somewhere the polling is no longer needed:
  function stopPolling() {
    clearInterval(intervalId);
    // Once cleared, nothing keeps referencing the callback or "cache",
    // so both become eligible for garbage collection.
  }

  return stopPolling;
}

const stop = startPolling();
// ... later, once the data is no longer needed:
stop();`,
    },

    {
      type: 'paragraph',
      title: 'WeakMap and WeakSet',
      content:
        "The Map and Set objects from the earlier lesson hold strong references to everything stored in them — as long as a Map exists and has a key in it, that key (even if it's an object) stays reachable and cannot be garbage collected, no matter what else in the program still references it. WeakMap and WeakSet solve this by holding weak references to their keys (WeakMap) or values (WeakSet): if nothing other than the WeakMap or WeakSet references an object, the garbage collector is free to collect it, and the entry is automatically removed. This makes them a good fit for attaching extra data to an object — like caching or metadata — without accidentally keeping that object alive forever just because it's in your map.",
    },

    {
      type: 'code',
      title: 'WeakMap vs. Map',
      language: 'javascript',
      code: `const strongCache = new Map();
const weakCache = new WeakMap();

let element = { id: "button-1" };

strongCache.set(element, "some metadata");
weakCache.set(element, "some metadata");

element = null;
// The object { id: "button-1" } is still reachable through strongCache —
// Map holds a strong reference, so it will never be garbage collected
// as long as the Map itself exists and still has that entry.
//
// In weakCache, the same object is only weakly referenced. Once "element"
// is set to null and nothing else points to it, the garbage collector
// is free to collect it, and its entry is automatically removed from weakCache.`,
    },

    {
      type: 'table',
      title: 'Map/Set vs. WeakMap/WeakSet',
      headers: ['Feature', 'Map / Set', 'WeakMap / WeakSet'],
      rows: [
        [
          'Reference strength',
          'Strong — keeps keys/values alive',
          'Weak — does not prevent garbage collection',
        ],
        ['Keys allowed', 'Any value', 'Objects only (no primitives)'],
        ['Iterable / has size', 'Yes', 'No — cannot be iterated or measured'],
        [
          'Typical use',
          'General-purpose storage',
          'Attaching metadata to objects you don’t own the lifetime of',
        ],
      ],
    },

    {
      type: 'note',
      title: 'Why WeakMap and WeakSet Cannot Be Iterated',
      content:
        'Because entries can disappear at any moment as the garbage collector runs, WeakMap and WeakSet deliberately have no size property, no keys()/values()/entries(), and are not iterable — allowing iteration would expose the unpredictable timing of garbage collection to your code, which the spec avoids entirely.',
    },

    {
      type: 'tip',
      title: 'When to Reach for a WeakMap',
      content:
        "A good rule of thumb: if you find yourself attaching auxiliary data to an object (like caching a computed result keyed by that object, or storing private data associated with a class instance) and you don't want that association to prevent the object from being garbage collected once the rest of the program is done with it, use a WeakMap instead of a Map.",
    },

    {
      type: 'warning',
      title: 'Detached DOM Nodes Are a Silent Leak',
      content:
        'Removing an element from the page does not make it eligible for garbage collection if a variable, array, or closure elsewhere in your code still holds a reference to it. These "detached" nodes are invisible on the page but still fully alive in memory, and they\'re one of the most common sources of memory leaks in long-running single-page applications — always clean up references to removed elements alongside removing them from the DOM.',
    },
  ],

  quiz: [
    {
      question:
        'Which step of the memory lifecycle does JavaScript handle automatically?',
      options: ['Allocation', 'Use', 'Release', 'All three'],
      answer: 2,
    },
    {
      question: 'What makes a value eligible for garbage collection?',
      options: [
        'It has not been used in the last second',
        'It is no longer reachable from any root',
        'Its reference count reaches exactly zero',
        'The developer calls delete on it',
      ],
      answer: 1,
    },
    {
      question: 'Why does mark-and-sweep correctly handle circular references?',
      options: [
        'It counts references and ignores cycles',
        'It determines liveness by reachability from roots, not by reference count',
        'It refuses to collect any object involved in a cycle',
        'Circular references are not possible in JavaScript',
      ],
      answer: 1,
    },
    {
      question: 'Why can a detached DOM node still cause a memory leak?',
      options: [
        'Detached nodes are always automatically collected',
        'The DOM keeps its own reference forever',
        'A JavaScript variable elsewhere may still reference it, keeping it reachable even though it is removed from the page',
        'Detached nodes are stored in a special queue that never clears',
      ],
      answer: 2,
    },
    {
      question: 'What is a key difference between WeakMap and Map?',
      options: [
        'WeakMap can store primitive keys, Map cannot',
        'WeakMap holds weak references to its keys so they remain collectible, while Map holds strong references',
        'WeakMap is faster for all use cases',
        'There is no difference, WeakMap is just an alias for Map',
      ],
      answer: 1,
    },
  ],

  previous: 'event-loop',
  next: 'fetch-api',
};
