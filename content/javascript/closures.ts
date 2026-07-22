export const closures = {
  slug: 'closures',

  title: 'Closures',

  description:
    'Understand what a closure actually is, why functions remember the scope they were created in, and how to use closures for data privacy, function factories, and memoization.',

  level: 'Intermediate',

  readingTime: '18 min',

  lesson: 'Lesson 29 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Closure?',
      content:
        "A closure is what you get when a function keeps access to the variables from its lexical scope, even after the outer function that created that scope has already finished running. In plain terms: a function remembers where it was born. Every function in JavaScript forms a closure over its surrounding scope the moment it's created — you don't have to do anything special to enable it. What makes closures interesting is what happens when the inner function outlives the outer one: normally you'd expect the outer function's variables to be thrown away once it returns, but if an inner function still references them, they stick around in memory instead of being garbage collected.",
    },

    {
      type: 'code',
      title: 'The Simplest Possible Closure',
      language: 'javascript',
      code: `function outer() {
  const message = "Hello from outer!";

  function inner() {
    console.log(message);
  }

  return inner;
}

const greet = outer();
// outer() has already finished running here — its scope should be gone

greet();
// "Hello from outer!" — but inner() still remembers "message"`,
    },

    {
      type: 'paragraph',
      title: 'The Classic Counter Example',
      content:
        'The most common way closures are introduced is with a counter. Each call to makeCounter() creates a brand-new count variable and a brand-new increment function that closes over it. Because the two counters returned below each close over their own separate count, incrementing one has zero effect on the other — they are not sharing any state, even though they were created by the exact same function.',
    },

    {
      type: 'code',
      title: 'A Counter Built with Closures',
      language: 'javascript',
      code: `function makeCounter() {
  let count = 0;

  return function increment() {
    count += 1;
    return count;
  };
}

const counterA = makeCounter();
const counterB = makeCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterA()); // 3

console.log(counterB()); // 1 — a fresh, independent "count"`,
    },

    {
      type: 'paragraph',
      title: 'Closures in Loops: the var vs. let Pitfall',
      content:
        "One of the most frequently asked interview questions about closures involves a loop with setTimeout(). If you declare the loop counter with var, every callback closes over the same single variable, because var is function-scoped — there's only one i for the entire loop, and by the time the timers fire, the loop has already finished and i holds its final value. Switching to let fixes this, because let is block-scoped: each iteration of the loop gets its own fresh binding of i, so each callback closes over a different variable.",
    },

    {
      type: 'code',
      title: 'var vs. let Inside a Loop',
      language: 'javascript',
      code: `// With var — all callbacks share ONE "i"
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log("var i:", i), 100);
}
// var i: 4
// var i: 4
// var i: 4

// With let — each callback gets its OWN "i"
for (let j = 1; j <= 3; j++) {
  setTimeout(() => console.log("let j:", j), 100);
}
// let j: 1
// let j: 2
// let j: 3`,
    },

    {
      type: 'note',
      title: 'Fixing the var Version Without let',
      content:
        'Before let existed, developers fixed this by wrapping the loop body in an immediately invoked function expression (IIFE) that took i as a parameter, creating a new function scope — and therefore a new closure — on every iteration. let simply does the same thing automatically at the language level.',
    },

    {
      type: 'paragraph',
      title: 'Practical Use: Data Privacy',
      content:
        'Because a closure keeps its variables inaccessible from the outside world, closures are one of the main ways JavaScript achieves private state. The balance variable below can only ever be read or changed through the functions returned by createAccount() — there is no way to reach in and set balance directly from outside, since it was never attached to the returned object itself.',
    },

    {
      type: 'code',
      title: 'Private State with a Closure',
      language: 'javascript',
      code: `function createAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds");
        return balance;
      }
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createAccount(100);

console.log(account.deposit(50)); // 150
console.log(account.withdraw(30)); // 120
console.log(account.balance); // undefined — there's no such property`,
    },

    {
      type: 'paragraph',
      title: 'Practical Use: Function Factories',
      content:
        'A function factory is a function that returns other, customized functions. Each returned function closes over the arguments the factory was called with, so you get a family of related functions without repeating logic. This is closures used for configuration rather than for hiding state.',
    },

    {
      type: 'code',
      title: 'Building Functions with a Factory',
      language: 'javascript',
      code: `function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15`,
    },

    {
      type: 'paragraph',
      title: 'Practical Use: Memoization and Currying',
      content:
        'Closures also power memoization — caching the result of an expensive calculation so repeated calls with the same input skip the work the second time around. The cache object below lives inside the closure created by memoize(), invisible to outside code, but remembered across every call to the returned function. The same idea underlies currying, where a function returns a chain of smaller functions, each one closing over the arguments collected so far.',
    },

    {
      type: 'code',
      title: 'A Simple Memoized Function',
      language: 'javascript',
      code: `function memoize(fn) {
  const cache = {};

  return function (n) {
    if (cache[n] !== undefined) {
      console.log("From cache");
      return cache[n];
    }

    console.log("Calculating");
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}

const slowSquare = (n) => n * n;
const fastSquare = memoize(slowSquare);

console.log(fastSquare(5)); // "Calculating" then 25
console.log(fastSquare(5)); // "From cache" then 25`,
    },

    {
      type: 'list',
      title: 'Where Closures Show Up in Real Code',
      items: [
        'Private variables and encapsulation (like the bank account example)',
        'Function factories that generate customized functions',
        'Memoization and caching layers',
        'Event handlers and callbacks that need to remember context',
        'The module pattern, used to avoid polluting the global scope',
      ],
    },

    {
      type: 'warning',
      title: 'Gotcha: Closures Capture Variables, Not Values',
      content:
        "A closure captures a reference to the variable itself, not a snapshot of its value at the time the inner function was created. If the outer variable changes after the closure is created but before it's called, the closure will see the updated value — this is exactly why the var loop example above logs 4 three times instead of 1, 2, 3. Closures are live links to their variables, not frozen copies.",
    },

    {
      type: 'tip',
      title: 'A Mental Model That Helps',
      content:
        'Think of a closure as a backpack a function carries around. Whenever a function is created, it packs a backpack with references to every variable it might need from its surrounding scope. Wherever that function is later called — even in a completely different part of the program — it still has that backpack with it.',
    },
  ],

  quiz: [
    {
      question: 'What is a closure?',
      options: [
        'A function that has no parameters',
        'A function that remembers the variables from its lexical scope even after the outer function has returned',
        'A method that closes a running program',
        'A block of code inside curly braces',
      ],
      answer: 1,
    },
    {
      question:
        'Why does a for loop using var with setTimeout() typically log the same final value multiple times?',
      answer: 0,
      options: [
        'Because var is function-scoped, so all the callbacks share the same variable',
        'Because setTimeout() always runs callbacks in reverse order',
        'Because var variables cannot be used inside closures',
        'Because arrow functions ignore var declarations',
      ],
    },
    {
      question:
        'How does using let instead of var fix the loop/setTimeout issue?',
      options: [
        'let makes setTimeout() run synchronously',
        'let automatically clears the call stack after each iteration',
        'let creates a new block-scoped binding for each iteration, so each closure captures its own variable',
        'let converts the loop into a recursive function',
      ],
      answer: 2,
    },
    {
      question: 'Which of these is NOT a typical practical use of closures?',
      options: [
        'Creating private variables that cannot be accessed from outside',
        'Building function factories that generate customized functions',
        'Memoizing expensive function calls',
        'Declaring a variable as a global constant',
      ],
      answer: 3,
    },
    {
      question:
        'In the createAccount() example, why does account.balance return undefined?',
      options: [
        'Because balance was never declared',
        'Because balance is a private variable captured by closure, not a property on the returned object',
        'Because JavaScript objects cannot store numbers',
        'Because deposit() deletes balance after each call',
      ],
      answer: 1,
    },
    {
      question: 'What does the following code log?',
      code: `function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());`,
      options: [
        '1, 2, 3',
        '1, 2, 1',
        '1, 1, 1',
        'undefined, undefined, undefined',
      ],
      answer: 1,
    },
    {
      question: 'What does this loop log?',
      code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}`,
      options: ['0 1 2', '3 3 3', '0 0 0', '1 2 3'],
      answer: 1,
    },
  ],

  previous: 'template-literals',
  next: 'this-keyword',
};
