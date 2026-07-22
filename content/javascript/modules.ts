export const modules = {
  slug: 'modules',

  title: 'ES Modules (import/export)',

  description:
    'Learn how to split JavaScript code across multiple files using ES modules — named exports, default exports, import syntax, and how ES modules compare to CommonJS.',

  level: 'Intermediate',

  readingTime: '16 min',

  lesson: 'Lesson 34 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Modules?',
      content:
        'As programs grow, keeping everything in one file becomes unmanageable — variable names collide, related code gets scattered, and reasoning about what depends on what becomes difficult. Modules let you split code across multiple files, each with its own private scope, and explicitly declare what it shares with the outside world using export, and what it needs from other files using import.',
    },

    {
      type: 'paragraph',
      title: 'Named Exports',
      content:
        'A named export lets a module share zero, one, or many values under specific names. You can export a value directly at its declaration with the export keyword, or declare everything first and export a group of names together in a single export statement at the bottom of the file. Named exports must be imported using the exact same name they were exported with (unless you rename them, shown shortly).',
    },

    {
      type: 'code',
      title: 'math.js — Named Exports',
      language: 'javascript',
      code: `// math.js
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

export { subtract };`,
    },

    {
      type: 'code',
      title: 'Importing Named Exports',
      language: 'javascript',
      code: `// app.js
import { PI, add, subtract } from "./math.js";

console.log(PI);
// 3.14159

console.log(add(2, 3));
// 5

console.log(subtract(5, 2));
// 3`,
    },

    {
      type: 'paragraph',
      title: 'Default Exports',
      content:
        'A module can also have one default export — the single "main" thing that module is considered to provide. Unlike named exports, a default export is imported without curly braces, and the importing file can call it whatever name it wants, since there\'s no exported name to match. A file can mix a default export with named exports, though it\'s common for small, focused modules to use only a default export.',
    },

    {
      type: 'code',
      title: 'user.js — Default Export',
      language: 'javascript',
      code: `// user.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

export const ROLE_ADMIN = "admin";`,
    },

    {
      type: 'code',
      title: 'Importing a Default Export',
      language: 'javascript',
      code: `// app.js
import User, { ROLE_ADMIN } from "./user.js";

const rohit = new User("Rohit");

console.log(rohit.name);
// Rohit

console.log(ROLE_ADMIN);
// admin`,
    },

    {
      type: 'paragraph',
      title: 'Renaming Imports and Namespace Imports',
      content:
        'If an imported name would clash with something already in scope, use the as keyword to rename it during import. If you want access to every named export from a module without listing each one, import * as someName gathers them all into a single object, with each export available as a property on it.',
    },

    {
      type: 'code',
      title: 'Renaming and Namespace Imports',
      language: 'javascript',
      code: `// Renaming a named import
import { add as addNumbers } from "./math.js";
console.log(addNumbers(4, 5));
// 9

// Importing everything as a namespace object
import * as MathUtils from "./math.js";
console.log(MathUtils.PI);
// 3.14159
console.log(MathUtils.add(1, 1));
// 2`,
    },

    {
      type: 'paragraph',
      title: 'Modules Are Automatically Strict and File-Scoped',
      content:
        'Every ES module runs in strict mode automatically — you never need to write "use strict" yourself. Modules also get their own top-level scope: a variable declared at the top of one module is NOT visible in another module unless it\'s explicitly exported and imported. This is a big improvement over plain scripts, where every top-level variable used to pollute one shared global scope.',
    },

    {
      type: 'paragraph',
      title: 'Static Import vs. Dynamic import()',
      content:
        "The import statement you've seen so far is static — it's hoisted, resolved at load time, and must appear at the top level of a file, not inside an if statement or function. Dynamic import(), by contrast, is a function-like expression you can call anywhere in your code. It returns a Promise that resolves to the module, making it useful for loading code lazily — for instance, only when a certain feature is actually used.",
    },

    {
      type: 'code',
      title: 'Dynamic import()',
      language: 'javascript',
      code: `button.addEventListener("click", async () => {
  const { generateReport } = await import("./reportGenerator.js");
  generateReport();
});
// The reportGenerator.js module is only fetched and evaluated
// once the button is actually clicked, not on initial page load`,
    },

    {
      type: 'table',
      title: 'ES Modules vs. CommonJS',
      headers: ['Feature', 'ES Modules', 'CommonJS'],
      rows: [
        [
          'Export syntax',
          'export / export default',
          'module.exports / exports.name',
        ],
        ['Import syntax', 'import ... from "..."', 'require("...")'],
        [
          'Loading',
          'Static, resolved at parse time (plus dynamic import())',
          'Dynamic, resolved at runtime',
        ],
        ['Strict mode', 'Automatic', 'Not automatic'],
        [
          'Where used',
          'Modern browsers and modern Node.js',
          'Older and current Node.js codebases',
        ],
      ],
    },

    {
      type: 'note',
      title: 'You Will See Both in the Wild',
      content:
        "Plenty of existing Node.js code, libraries, and tutorials still use CommonJS's require() and module.exports rather than import/export. The two systems solve the same problem — sharing code between files — with different syntax and different loading behavior (CommonJS is synchronous and dynamic, ES modules are primarily static). Modern JavaScript and modern Node.js favor ES modules, but recognizing CommonJS is still an essential, practical skill.",
    },

    {
      type: 'tip',
      title: 'One Default Export per Module',
      content:
        'A module can only have a single default export, but as many named exports as you like. A common convention is to default-export the one primary thing a file provides (a component, a class, a main function) and use named exports for smaller, secondary helpers that file also wants to share.',
    },

    {
      type: 'warning',
      title: 'Import Paths and File Extensions',
      content:
        'Relative import paths must start with ./ or ../ — a bare name like "math" is reserved for packages resolved from node_modules, not your own files. Depending on your build tooling, you may also need to include the file extension (like ./math.js) since not every environment resolves extensions automatically the way bundlers often do.',
    },
  ],

  quiz: [
    {
      question: 'How many default exports can a single module have?',
      options: ['Zero', 'Exactly one', 'Up to five', 'Unlimited'],
      answer: 1,
    },
    {
      question:
        'How do you import a default export named User from "./user.js"?',
      options: [
        'import { User } from "./user.js";',
        'import User from "./user.js";',
        'import * as User from "./user.js";',
        'const User = require("./user.js");',
      ],
      answer: 1,
    },
    {
      question: 'What keyword lets you rename an imported binding?',
      options: ['rename', 'as', 'alias', 'default'],
      answer: 1,
    },
    {
      question: 'What does dynamic import() return?',
      options: [
        'The module object directly',
        'undefined',
        'A Promise that resolves to the module',
        'A string',
      ],
      answer: 2,
    },
    {
      question: 'Which statement about ES modules is true?',
      options: [
        'They require "use strict" to be added manually',
        'Top-level variables are automatically shared across all modules',
        'Every module runs in strict mode automatically and has its own top-level scope',
        'They cannot be used in browsers',
      ],
      answer: 2,
    },
  ],

  previous: 'async-await',
  next: 'map-and-set',
};
