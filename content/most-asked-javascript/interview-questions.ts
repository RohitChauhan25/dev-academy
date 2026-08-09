import type { InterviewQuestionTopic } from "@/content/javascript/interview-questions";

export const mostAskedJavascriptInterviewQuestions: InterviewQuestionTopic[] = [
  {
    slug: "most-frequently-asked-javascript-questions",
    title: "Most Frequently Asked JavaScript Interview Questions",
    questions: [
      {
        question: "What is hoisting in JavaScript?",

        answer: `
Hoisting is JavaScript's behavior of processing declarations before executing the code. During the **Creation Phase** of the Execution Context, JavaScript allocates memory for variables and functions before any line of code runs. It is important to note that JavaScript does **not** physically move the code; hoisting is an internal behavior of the JavaScript engine.

There are two phases of JavaScript execution:

1. **Creation Phase**
   - Memory is allocated for variables and functions.
   - Function declarations are stored completely in memory.
   - Variables declared with \`var\` are initialized with \`undefined\`.
   - Variables declared with \`let\` and \`const\` are hoisted but remain uninitialized.

2. **Execution Phase**
   - JavaScript executes the code line by line.
   - Variable assignments happen during this phase.

### Hoisting with \`var\`

\`\`\`js
console.log(a); // undefined

var a = 10;

console.log(a); // 10
\`\`\`

The declaration is hoisted, but the assignment remains in its original place. Internally, JavaScript behaves like:

\`\`\`js
var a = undefined;

console.log(a);

a = 10;

console.log(a);
\`\`\`

### Hoisting with \`let\`

\`\`\`js
console.log(age);

let age = 25;
\`\`\`

Output:

\`\`\`
ReferenceError: Cannot access 'age' before initialization
\`\`\`

Although \`let\` is hoisted, it stays uninitialized until its declaration is reached.

### Hoisting with \`const\`

\`\`\`js
console.log(PI);

const PI = 3.14;
\`\`\`

Output:

\`\`\`
ReferenceError: Cannot access 'PI' before initialization
\`\`\`

### Temporal Dead Zone (TDZ)

The **Temporal Dead Zone (TDZ)** is the period between entering a scope and the execution of a \`let\` or \`const\` declaration. Accessing the variable during this period results in a **ReferenceError**.

### Function Declaration Hoisting

Function declarations are fully hoisted.

\`\`\`js
greet();

function greet() {
  console.log("Hello");
}
\`\`\`

Output:

\`\`\`
Hello
\`\`\`

### Function Expression Hoisting

Function expressions follow the hoisting behavior of the variable used to store them.

Using \`var\`:

\`\`\`js
greet();

var greet = function () {
  console.log("Hello");
};
\`\`\`

Output:

\`\`\`
TypeError: greet is not a function
\`\`\`

Because:

\`\`\`js
var greet = undefined;

greet();

greet = function () {
  console.log("Hello");
};
\`\`\`

Using \`let\` or \`const\`:

\`\`\`js
greet();

let greet = function () {
  console.log("Hello");
};
\`\`\`

Output:

\`\`\`
ReferenceError
\`\`\`

### Summary

- **var** → Hoisted and initialized with \`undefined\`.
- **let** → Hoisted but remains in the Temporal Dead Zone until initialized.
- **const** → Hoisted but remains in the Temporal Dead Zone until initialized.
- **Function Declarations** → Fully hoisted and can be called before their declaration.
- **Function Expressions** → Hoisted according to the variable (\`var\`, \`let\`, or \`const\`) used to store them.
`,

        difficulty: "beginner",
      },

      {
        question: "What is the difference between var, let, and const?",

        answer: `
\`var\`, \`let\`, and \`const\` are used to declare variables in JavaScript, but they differ mainly in **scope, hoisting, redeclaration, and reassignment**.

- **var** — Function-scoped, hoisted and initialized with \`undefined\`. It can be redeclared and reassigned.
- **let** — Block-scoped and hoisted, but remains in the **Temporal Dead Zone (TDZ)** until initialized. It can be reassigned but cannot be redeclared in the same scope.
- **const** — Block-scoped and also remains in the **TDZ** until initialized. It cannot be redeclared or reassigned and must be initialized when declared.

\`\`\`js
var a = 10;
var a = 20; // ✅ Redeclaration allowed

let b = 10;
b = 20;     // ✅ Reassignment allowed

const c = 10;
// c = 20;  // ❌ Reassignment not allowed
\`\`\`

In modern JavaScript, prefer **\`const\` by default**, use **\`let\`** when reassignment is required, and generally avoid **\`var\`** because of its function-scoping behavior.
`,

        difficulty: "beginner",
      },
      {
        question: "What is the difference between null and undefined?",
        answer:
          '`undefined` means a variable has been declared but never assigned a value — it is also what a missing function argument or a nonexistent object property evaluates to. `null` is an explicit value a developer assigns to represent "intentionally empty" or "no value here." They are similar but distinct: `typeof undefined` is `"undefined"`, while `typeof null` is `"object"` (a long-standing language quirk), and `null == undefined` is `true` under loose equality even though `null === undefined` is `false`.',
        difficulty: "beginner",
      },
      {
        question: "What is a closure? Can you give a practical example?",

        answer:
          "A closure is a function that remembers and can access variables from its surrounding (lexical) scope, even after the outer function has finished executing.\n\n" +
          "A practical example is a counter:\n\n" +
          "```js\n" +
          "function createCounter() {\n" +
          "  let count = 0;\n\n" +
          "  return () => ++count;\n" +
          "}\n\n" +
          "const counter = createCounter();\n\n" +
          "console.log(counter()); // 1\n" +
          "console.log(counter()); // 2\n" +
          "console.log(counter()); // 3\n" +
          "```\n\n" +
          "When `createCounter()` runs, it creates the `count` variable and returns an inner function. Even after `createCounter()` has finished executing, the returned function still has access to `count` because of the closure. Each time `counter()` is called, it accesses and updates the same `count` variable.\n\n" +
          "### Benefits of Closures\n\n" +
          "- **Data privacy:** Variables can be kept private and accessed only through specific functions.\n" +
          "- **State preservation:** A closure can remember and maintain data between function calls.\n" +
          "- **Reusability:** Closures can be used to create reusable function factories.\n" +
          "- **Useful for callbacks:** They allow functions such as event handlers and callbacks to remember required variables.\n\n" +
          "Closures are commonly used for private state, counters, function factories, callbacks, and maintaining data between function calls.",

        difficulty: "intermediate",
      },
      {
        question: "What is a callback function in JavaScript?",

        answer: `
A **callback function** is a function that is passed as an argument to another function and is executed later when needed.

Callbacks are commonly used for **asynchronous operations**, event handling, and array methods.

\`\`\`js
function greet(name, callback) {
  console.log(\`Hello, \${name}\`);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("John", sayBye);
\`\`\`

Here, \`sayBye\` is passed to \`greet()\` as a callback. The \`greet()\` function calls it after completing its own task.

Callbacks are also commonly used with asynchronous operations:

\`\`\`js
setTimeout(() => {
  console.log("Data received");
}, 2000);
\`\`\`

The function passed to \`setTimeout()\` is a callback that runs after the timer finishes.

Callbacks are useful for:
- Handling asynchronous operations
- Event handling
- Array methods such as \`map()\`, \`filter()\`, and \`forEach()\`
- Executing a function after another function completes

When many asynchronous callbacks are nested inside each other, the code can become difficult to read and maintain. This is known as **callback hell**, which is one reason Promises and \`async/await\` are commonly used.

The key idea is: **A callback is a function passed to another function so that it can be executed later.**
`,

        difficulty: "intermediate",
      },

      {
        question:
          "What does the this keyword refer to, and how is its value determined?",

        answer:
          "`this` refers to the object associated with the current function call. Its value is mainly determined by **how the function is called**, not where it is defined.\n\n" +
          "- Called as `obj.method()` → `this` refers to `obj`.\n" +
          "- Called as a plain function → `this` is `undefined` in strict mode (or the global object otherwise).\n" +
          "- Called with `new` → `this` refers to the newly created object.\n" +
          "- Called with `.call()`, `.apply()`, or `.bind()` → `this` can be explicitly set.\n" +
          "- Arrow functions do not have their own `this`; they inherit `this` from their surrounding lexical scope.\n\n" +
          "### Normal Function\n\n" +
          "```js\n" +
          "const user = {\n" +
          '  name: "John",\n\n' +
          "  greet: function () {\n" +
          "    console.log(this.name);\n" +
          "  }\n" +
          "};\n\n" +
          "user.greet(); // John\n" +
          "```\n\n" +
          "Here, `greet()` is called as `user.greet()`, so `this` refers to the `user` object.\n\n" +
          "### Arrow Function\n\n" +
          "```js\n" +
          "const user = {\n" +
          '  name: "John",\n\n' +
          "  greet: () => {\n" +
          "    console.log(this.name);\n" +
          "  }\n" +
          "};\n\n" +
          "user.greet(); // undefined\n" +
          "```\n\n" +
          "The arrow function does not create its own `this`. It inherits `this` from its surrounding scope, so `user.greet()` does not make `this` refer to `user`.\n\n" +
          "A common practical use of arrow functions is inside callbacks:\n\n" +
          "```js\n" +
          "const user = {\n" +
          '  name: "John",\n\n' +
          "  greet: function () {\n" +
          "    setTimeout(() => {\n" +
          "      console.log(this.name);\n" +
          "    }, 1000);\n" +
          "  }\n" +
          "};\n\n" +
          "user.greet(); // John\n" +
          "```\n\n" +
          "Here, the normal `greet` function gets `this` from `user`, and the arrow function inside `setTimeout` inherits that same `this`.\n\n" +
          "The key difference is: **normal functions get `this` based on how they are called, while arrow functions inherit `this` from their surrounding scope.**",

        difficulty: "intermediate",
      },
      {
        question:
          "What is the event loop, and how does JavaScript handle asynchronous operations on a single thread?",

        answer:
          "JavaScript is **single-threaded**, which means it can execute one piece of JavaScript code at a time through the **Call Stack**. However, it can handle asynchronous operations such as timers, API requests, and DOM events using the **Web APIs, Task Queues, and Event Loop** provided by the surrounding environment.\n\n" +
          "The Event Loop continuously monitors the Call Stack and the task queues. When an asynchronous operation is completed, its callback is placed into the appropriate queue. When the Call Stack becomes empty, the Event Loop moves the callback back to the Call Stack so it can be executed.\n\n" +
          "![JavaScript Event Loop Workflow](/images/event-loop-diagram.svg)\n\n" +
          "### How the Event Loop Works\n\n" +
          "**1. Call Stack** — Synchronous JavaScript code is executed here, one operation at a time.\n\n" +
          "**2. Web APIs** — When an asynchronous operation such as `setTimeout()`, `fetch()`, or a DOM event starts, the browser or Node.js environment handles that operation outside the Call Stack.\n\n" +
          "**3. Microtask Queue** — When a Promise is resolved, its callback is placed in the Microtask Queue. Microtasks have higher priority and are processed before the next macrotask.\n\n" +
          "**4. Macrotask Queue** — Callbacks from operations such as `setTimeout()`, `setInterval()`, and many DOM events are placed in the task/macrotask queue.\n\n" +
          "**5. Event Loop** — The Event Loop continuously checks whether the Call Stack is empty. If it is empty, it takes the next available callback from the queues and pushes it onto the Call Stack for execution.\n\n" +
          "For example:\n\n" +
          "```js\n" +
          'console.log("Start");\n\n' +
          "setTimeout(() => {\n" +
          '  console.log("Timeout");\n' +
          "}, 0);\n\n" +
          "Promise.resolve().then(() => {\n" +
          '  console.log("Promise");\n' +
          "});\n\n" +
          'console.log("End");\n' +
          "```\n\n" +
          "The output is:\n\n" +
          "```text\n" +
          "Start\n" +
          "End\n" +
          "Promise\n" +
          "Timeout\n" +
          "```\n\n" +
          "Here, `Start` and `End` execute immediately on the Call Stack. The `setTimeout()` callback goes to the Macrotask Queue, while the Promise callback goes to the Microtask Queue. Once the Call Stack becomes empty, the Event Loop processes the Microtask Queue first, so `Promise` runs before `Timeout`.\n\n" +
          "The important flow to remember is: **Call Stack → Web APIs → Queues → Event Loop → Call Stack**. This mechanism allows JavaScript to handle asynchronous operations without blocking its single execution thread.",

        difficulty: "intermediate",
      },
      {
        question: "What is prototypal inheritance?",

        answer:
          "Prototypal inheritance is a mechanism in JavaScript where an object can inherit properties and methods from another object through its **prototype**.\n\n" +
          "Every JavaScript object has an internal link to another object called its **prototype**. When JavaScript tries to access a property or method, it first looks on the object itself. If it is not found, JavaScript searches the object's prototype, then the prototype's prototype, and so on until it finds the property or reaches `null`. This is called the **prototype chain**.\n\n" +
          "For example:\n\n" +
          "```js\n" +
          "const animal = {\n" +
          "  speak() {\n" +
          '    return "Animal speaks";\n' +
          "  }\n" +
          "};\n\n" +
          "const dog = Object.create(animal);\n\n" +
          "console.log(dog.speak()); // Animal speaks\n" +
          "```\n\n" +
          "Here, `dog` does not have its own `speak()` method. JavaScript cannot find it on `dog`, so it looks at `dog`'s prototype, which is `animal`, and finds the method there.\n\n" +
          "This is also how built-in objects work. For example, an array can use methods such as `map()`, `filter()`, and `push()` because those methods are available through `Array.prototype` rather than being copied into every individual array.\n\n" +
          "Prototypal inheritance can be created using `Object.create()`, constructor functions with `.prototype`, or modern `class` syntax. Classes provide a cleaner syntax, but internally JavaScript still uses the prototype system.\n\n" +
          "The key idea is: **If a property is not found on an object, JavaScript looks for it in its prototype chain.**",

        difficulty: "intermediate",
      },
      {
        question: "What are Promises in JavaScript?",

        answer:
          "A **Promise** is an object that represents the eventual result of an asynchronous operation. It allows JavaScript to handle asynchronous operations such as API requests, timers, and file operations without blocking the main thread.\n\n" +
          "A Promise has three states:\n\n" +
          "- **Pending** — The operation is still in progress.\n" +
          "- **Fulfilled** — The operation completed successfully.\n" +
          "- **Rejected** — The operation failed.\n\n" +
          "You can handle a Promise using `.then()` for a successful result and `.catch()` for errors:\n\n" +
          "```js\n" +
          "const promise = new Promise((resolve, reject) => {\n" +
          "  const success = true;\n\n" +
          "  if (success) {\n" +
          '    resolve("Data received");\n' +
          "  } else {\n" +
          '    reject("Something went wrong");\n' +
          "  }\n" +
          "});\n\n" +
          "promise\n" +
          "  .then((result) => console.log(result))\n" +
          "  .catch((error) => console.log(error));\n" +
          "```\n\n" +
          "Promises make asynchronous code easier to read and manage compared to deeply nested callbacks (callback hell). They also support chaining and can be combined using methods such as `Promise.all()`, `Promise.race()`, and `Promise.allSettled()`. Promises are also the foundation of `async/await`.",

        difficulty: "intermediate",
      },
      {
        question: "What is the difference between shallow copy and deep copy?",

        answer:
          "A **shallow copy** creates a new object but does not create copies of nested objects or arrays. Instead, nested reference values are still shared between the original and copied object. A **deep copy** creates a completely independent copy, including all nested objects and arrays, so changes to the copy do not affect the original.\n\n" +
          "### Shallow Copy\n\n" +
          "A shallow copy copies the top-level properties, but nested objects still point to the same reference.\n\n" +
          "```js\n" +
          "const user = {\n" +
          '  name: "John",\n' +
          "  address: {\n" +
          '    city: "Delhi"\n' +
          "  }\n" +
          "};\n\n" +
          "const copy = { ...user };\n\n" +
          'copy.address.city = "Mumbai";\n\n' +
          "console.log(user.address.city); // Mumbai\n" +
          "```\n\n" +
          "Here, `copy` is a new object, but `user.address` and `copy.address` refer to the same nested object. Therefore, changing the nested property affects both objects.\n\n" +
          "### Deep Copy\n\n" +
          "A deep copy creates new references for nested objects and arrays as well.\n\n" +
          "```js\n" +
          "const user = {\n" +
          '  name: "John",\n' +
          "  address: {\n" +
          '    city: "Delhi"\n' +
          "  }\n" +
          "};\n\n" +
          "const copy = structuredClone(user);\n\n" +
          'copy.address.city = "Mumbai";\n\n' +
          "console.log(user.address.city); // Delhi\n" +
          "```\n\n" +
          "Here, `copy` and `user` have completely separate nested objects, so changing the copy does not affect the original.\n\n" +
          "### Common Ways to Create Copies\n\n" +
          "- **Shallow copy:** Spread syntax (`{ ...obj }`), `Object.assign()`, `slice()`, and similar methods.\n" +
          "- **Deep copy:** `structuredClone()` is the modern built-in option for many data types. JSON serialization (`JSON.parse(JSON.stringify(obj))`) can also create a deep copy for simple JSON-compatible data, but it has limitations with values such as functions, `undefined`, `Date`, `Map`, and `Set`.\n\n" +
          "The key difference is: **A shallow copy shares nested references with the original, while a deep copy creates independent nested values.**",

        difficulty: "intermediate",
      },

      {
        question: "What is the difference between debouncing and throttling?",

        answer:
          "Both **debouncing** and **throttling** are techniques used to control how frequently a function executes when an event occurs repeatedly. They are commonly used with events such as typing, scrolling, resizing, mouse movement, and API requests.\n\n" +
          "### Debouncing\n\n" +
          "**Debouncing** delays the execution of a function until a specified amount of time has passed without the event occurring again. Every new event resets the timer.\n\n" +
          "In simple terms: **wait until the user stops doing something, then execute the function.**\n\n" +
          "For example, consider a search box. If a user types `JavaScript` quickly, we don't want to make an API request for every character. Debouncing waits until the user stops typing for a certain amount of time and then makes one API request.\n\n" +
          "```text\n" +
          "Typing:  J → Ja → Jav → Java → JavaS → JavaScript\n" +
          "                                     ↓\n" +
          "                              User stops typing\n" +
          "                                     ↓\n" +
          "                                  Execute\n" +
          "```\n\n" +
          "**Use debouncing when you only need the final result after a burst of activity.** Common use cases include search suggestions, autocomplete, form validation, and API calls triggered by user input.\n\n" +
          "### Throttling\n\n" +
          "**Throttling** limits a function so that it can execute at most once within a specified time interval, even if the event continues to occur.\n\n" +
          "In simple terms: **keep executing, but only at a controlled frequency.**\n\n" +
          "For example, while scrolling a page, the scroll event can fire many times per second. Instead of running the handler for every event, throttling can allow it to run once every 200ms.\n\n" +
          "```text\n" +
          "Scrolling:  ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓\n" +
          "           │     │     │     │\n" +
          "           ↓     ↓     ↓     ↓\n" +
          "        Execute Execute Execute Execute\n" +
          "```\n\n" +
          "**Use throttling when you need regular updates while an activity is continuously happening.** Common use cases include scroll handlers, mouse movement, window resizing, drag events, and tracking user interactions.\n\n" +
          "### Main Difference\n\n" +
          "| Debouncing | Throttling |\n" +
          "|---|---|\n" +
          "| Waits for activity to stop | Runs at controlled intervals |\n" +
          "| Executes after the final event | Executes periodically during the activity |\n" +
          "| Best for search and input events | Best for scroll and mouse events |\n" +
          "| Useful when only the final result matters | Useful when continuous updates are needed |\n\n" +
          "### Easy Way to Remember\n\n" +
          "**Debounce:** `Wait → Wait → Wait → Execute`\n\n" +
          "**Throttle:** `Execute → Wait → Execute → Wait → Execute`\n\n" +
          "The key difference is that **debouncing waits for a pause in activity, while throttling limits execution to a fixed interval during continuous activity.**",

        difficulty: "intermediate",
      },
    ],
  },
];
