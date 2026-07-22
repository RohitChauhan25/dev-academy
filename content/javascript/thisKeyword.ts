export const thisKeyword = {
  slug: 'this-keyword',

  title: 'The "this" Keyword',

  description:
    'Learn how JavaScript decides what "this" refers to based on how a function is called, why arrow functions behave differently, and how to fix a "this" that gets lost in a callback.',

  level: 'Intermediate',

  readingTime: '18 min',

  lesson: 'Lesson 30 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'this Depends on How a Function is Called',
      content:
        "The single most important rule about this is that its value is determined by how a function is called, not by where the function is defined. The same function can produce a completely different this depending on whether you call it as a standalone function, as a method on an object, with .call()/.apply(), or with the new keyword. This trips up a lot of developers coming from languages where a method's receiver is fixed at definition time — in JavaScript, this is decided fresh at call time.",
    },

    {
      type: 'paragraph',
      title: 'this in the Global Context',
      content:
        "When this is used outside of any function, it refers to the global object — window in a browser, or global in Node. Inside a regular function called on its own (not as a method), this is undefined in strict mode (which includes the top level of ES modules and class bodies), or falls back to the global object in non-strict, 'sloppy' mode.",
    },

    {
      type: 'code',
      title: 'this Outside of Any Object',
      language: 'javascript',
      code: `console.log(this);
// In a module: {} or undefined depending on environment
// In a plain, non-module browser script: the window object

function showThis() {
  "use strict";
  console.log(this);
}

showThis();
// undefined — strict mode does not default "this" to the global object`,
    },

    {
      type: 'paragraph',
      title: 'this Inside an Object Method',
      content:
        'When a function is called as a method — that is, accessed off an object right before being invoked, like obj.method() — this inside that function refers to the object it was called on. This is the most common and intuitive use of this: it lets a method read and update the data that belongs to its own object.',
    },

    {
      type: 'code',
      title: 'this Inside a Method Call',
      language: 'javascript',
      code: `const user = {
  name: "Priya",
  greet() {
    console.log("Hello, I'm " + this.name);
  },
};

user.greet();
// "Hello, I'm Priya" — this === user, because user.greet() called it`,
    },

    {
      type: 'paragraph',
      title: 'Regular Functions vs. Arrow Functions',
      content:
        "Regular functions get their own this, freshly determined every time they're called. Arrow functions do not have their own this at all — instead, they capture this lexically from the scope in which they were defined, exactly the way closures capture variables. That means an arrow function's this is whatever this was in the surrounding code where the arrow function was written, and it never changes no matter how the arrow function is later called.",
    },

    {
      type: 'code',
      title: 'Arrow Functions Inherit this Lexically',
      language: 'javascript',
      code: `const team = {
  name: "Dev Team",
  membersRegular: function () {
    return function () {
      console.log(this === undefined || this === globalThis);
    };
  },
  membersArrow: function () {
    return () => {
      console.log(this.name);
    };
  },
};

team.membersRegular()();
// true — the inner regular function has its own "this", not team

team.membersArrow()();
// "Dev Team" — the arrow function inherited "this" from membersArrow's call`,
    },

    {
      type: 'paragraph',
      title: 'Losing this in a Callback',
      content:
        'A very common bug happens when a method is passed around as a plain reference — for example, to setTimeout(), an event listener, or as a callback argument. Once a method is detached from the object it was defined on, calling it no longer counts as obj.method(), so this is no longer bound to obj. The function is called on its own, and this reverts to undefined (in strict mode) or the global object.',
    },

    {
      type: 'code',
      title: 'this Getting Lost',
      language: 'javascript',
      code: `const user = {
  name: "Priya",
  greet() {
    console.log("Hello, I'm " + this.name);
  },
};

const greetFn = user.greet;

greetFn();
// TypeError or "Hello, I'm undefined" — this is no longer "user"

setTimeout(user.greet, 100);
// Same problem — the method reference lost its connection to "user"`,
    },

    {
      type: 'paragraph',
      title: 'Fixing it with bind(), call(), and apply()',
      content:
        "JavaScript gives you three built-in tools to explicitly control what this refers to. .call(thisArg, ...args) and .apply(thisArg, argsArray) both invoke a function immediately with this set to whatever you pass as the first argument — they differ only in how they accept the remaining arguments. .bind(thisArg) is different: it doesn't call the function, it returns a brand-new function with this permanently locked to thisArg, which is exactly what you want when passing a method somewhere else to be called later.",
    },

    {
      type: 'code',
      title: 'Fixing a Lost this',
      language: 'javascript',
      code: `const user = {
  name: "Priya",
  greet() {
    console.log("Hello, I'm " + this.name);
  },
};

const boundGreet = user.greet.bind(user);
setTimeout(boundGreet, 100);
// "Hello, I'm Priya" — this is now locked to "user" forever

function introduce(greeting) {
  console.log(greeting + ", I'm " + this.name);
}

introduce.call(user, "Hi");   // "Hi, I'm Priya"
introduce.apply(user, ["Hey"]); // "Hey, I'm Priya"`,
    },

    {
      type: 'table',
      title: 'call() vs. apply() vs. bind()',
      headers: [
        'Method',
        'Invokes Immediately?',
        'How Extra Args Are Passed',
        'Returns',
      ],
      rows: [
        ['call()', 'Yes', 'Listed one by one', 'The function’s return value'],
        ['apply()', 'Yes', 'As a single array', 'The function’s return value'],
        [
          'bind()',
          'No',
          'Listed one by one (optional, preset)',
          'A new function with this locked',
        ],
      ],
    },

    {
      type: 'paragraph',
      title: 'this Inside a Class',
      content:
        'Inside a class, this behaves like it does in a regular object method: within an instance method, this refers to the specific instance the method was called on. But the same danger applies — if you pass a class method as a callback without binding it, this will be lost. This is why you often see this.method = this.method.bind(this) inside class constructors, or class fields defined as arrow functions, which lexically capture the instance this and never lose it.',
    },

    {
      type: 'code',
      title: 'this Inside a Class, and How to Protect It',
      language: 'javascript',
      code: `class Timer {
  seconds = 0;

  constructor() {
    // Arrow function class field: "this" is locked to the instance
    this.tick = () => {
      this.seconds += 1;
      console.log(this.seconds);
    };
  }

  // Regular method: loses "this" if detached and called on its own
  tickUnsafe() {
    this.seconds += 1;
    console.log(this.seconds);
  }
}

const timer = new Timer();

setTimeout(timer.tick, 100);       // 1 — safe, arrow field kept "this"
setTimeout(timer.tickUnsafe, 100); // TypeError — "this" is lost`,
    },

    {
      type: 'list',
      title: 'Quick Rules for Figuring Out this',
      items: [
        'Called as obj.method() → this is obj',
        'Called as a plain function() → this is undefined (strict mode) or the global object',
        'Called with new Constructor() → this is the newly created instance',
        'Called with .call()/.apply() → this is whatever you passed in',
        'Defined as an arrow function → this is inherited from the enclosing scope, always',
      ],
    },

    {
      type: 'warning',
      title: 'Watch Out When Passing Methods Around',
      content:
        "Any time you extract a method off an object and hand it somewhere else — a callback, an event listener, a setTimeout() — you are at risk of losing this. Always ask: 'is this function still being called as obj.method(), or has it been detached?' If it's detached, either bind it first, wrap it in an arrow function at the call site, or convert it to an arrow function class field.",
    },

    {
      type: 'tip',
      title: 'When in Doubt, console.log(this)',
      content:
        "If you're ever unsure what this will be inside a particular function, the fastest way to find out is to log it right there and run the code — this depends entirely on the call site, so reasoning about the source code alone can be misleading, especially with callbacks.",
    },
  ],

  quiz: [
    {
      question:
        'What primarily determines the value of this inside a function?',
      options: [
        'The location where the function is defined in the file',
        'The name of the function',
        'How the function is called (its call site)',
        'Whether the function has parameters',
      ],
      answer: 2,
    },
    {
      question: 'How does an arrow function determine its this value?',
      options: [
        'It always refers to the global object',
        'It creates its own new this at call time',
        'It inherits this lexically from its surrounding scope at the time it was defined',
        'It is always undefined',
      ],
      answer: 2,
    },
    {
      question:
        'What happens when you pass user.greet (a method) to setTimeout() without binding it?',
      options: [
        'this inside greet still refers to user',
        'this inside greet is lost because it is now called as a plain function',
        'JavaScript automatically binds it for you',
        'It throws a SyntaxError',
      ],
      answer: 1,
    },
    {
      question:
        'Which method returns a new function with this permanently set, rather than invoking the function immediately?',
      options: ['call()', 'apply()', 'bind()', 'this()'],
      answer: 2,
    },
    {
      question:
        'Inside a class constructor, why might you write this.method = this.method.bind(this)?',
      options: [
        'To make the method run faster',
        'To ensure this stays locked to the instance even if the method is later passed as a callback',
        'To convert the method into a static method',
        'To delete the method from the prototype',
      ],
      answer: 1,
    },
    {
      question: 'What does this code log?',
      code: `const obj = {
  name: "Asha",
  regular: function () {
    return this.name;
  },
  arrow: () => {
    return this.name;
  },
};

console.log(obj.regular());
console.log(obj.arrow());`,
      options: [
        'Asha, Asha',
        'Asha, undefined',
        'undefined, Asha',
        'undefined, undefined',
      ],
      answer: 1,
    },
    {
      question: 'What does this code log?',
      code: `function Person(name) {
  this.name = name;
  setTimeout(function () {
    console.log(this.name);
  }, 0);
}

new Person("Rahul");`,
      options: ['Rahul', 'undefined', 'ReferenceError', 'TypeError'],
      answer: 1,
    },
  ],

  previous: 'closures',
  next: 'classes',
};
