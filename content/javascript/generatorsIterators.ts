export const generatorsIterators = {
  slug: 'generators-iterators',

  title: 'Generators and Iterators',

  description:
    'Learn the iterator and iterable protocols that power for...of loops, and how generator functions with function* and yield let you build custom, pausable sequences with ease.',

  level: 'Advanced',

  readingTime: '20 min',

  lesson: 'Lesson 44 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'The Iterator Protocol',
      content:
        "The iterator protocol is a simple contract: an object is an iterator if it has a next() method, and calling that method returns an object shaped like { value, done }. value is the next item in the sequence, and done is a boolean that becomes true once there's nothing left to produce. That's the entire contract — no special class or built-in type is required, just an object with the right method shape.",
    },

    {
      type: 'code',
      title: 'A Manual Iterator',
      language: 'javascript',
      code: `function createCounterIterator(max) {
  let count = 0;

  return {
    next() {
      if (count < max) {
        return { value: count++, done: false };
      }
      return { value: undefined, done: true };
    },
  };
}

const iterator = createCounterIterator(3);
console.log(iterator.next());
// { value: 0, done: false }
console.log(iterator.next());
// { value: 1, done: false }
console.log(iterator.next());
// { value: 2, done: false }
console.log(iterator.next());
// { value: undefined, done: true }`,
    },

    {
      type: 'paragraph',
      title: 'The Iterable Protocol',
      content:
        'The iterable protocol builds on top of the iterator protocol: an object is iterable if it has a method at the special key Symbol.iterator, and calling that method returns an iterator (an object matching the shape above). Being iterable is what makes an object usable with for...of, the spread operator (...), destructuring, and Array.from().',
    },

    {
      type: 'code',
      title: "What's Iterable Out of the Box",
      language: 'javascript',
      code: `// Arrays, strings, Maps, and Sets are all built-in iterables
for (const char of 'abc') {
  console.log(char);
}
// "a" "b" "c"

const set = new Set([10, 20, 30]);
for (const value of set) {
  console.log(value);
}
// 10 20 30

const map = new Map([['a', 1], ['b', 2]]);
for (const [key, value] of map) {
  console.log(key, value);
}
// "a" 1
// "b" 2

// Plain objects are NOT iterable by default
const plainObject = { x: 1, y: 2 };
// for (const item of plainObject) {} // TypeError: plainObject is not iterable`,
    },

    {
      type: 'paragraph',
      title: 'Making Your Own Object Iterable',
      content:
        'You can make any object work with for...of by giving it a Symbol.iterator method that returns an iterator. This is exactly how you would implement a custom collection type — a linked list, a range, or a queue — that you want to feel like a first-class part of the language.',
    },

    {
      type: 'code',
      title: 'A Custom Iterable Object',
      language: 'javascript',
      code: `const range = {
  start: 1,
  end: 5,
  [Symbol.iterator]() {
    let current = this.start;
    const last = this.end;
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const num of range) {
  console.log(num);
}
// 1 2 3 4 5

console.log([...range]);
// [1, 2, 3, 4, 5] — the spread operator works too, since range is iterable`,
    },

    {
      type: 'paragraph',
      title: 'Generator Functions',
      content:
        'Writing the iterator protocol by hand every time is tedious. A generator function — declared with function* and using yield inside — does the same job with far less boilerplate. Calling a generator function does not run its body immediately; instead it returns a generator object, which is both an iterator and an iterable. Each call to .next() runs the function until it hits a yield, pauses there, and returns that yielded value.',
    },

    {
      type: 'code',
      title: 'A Basic Generator',
      language: 'javascript',
      code: `function* countUpTo(max) {
  let count = 0;
  while (count < max) {
    yield count;
    count++;
  }
}

const gen = countUpTo(3);
console.log(gen.next());
// { value: 0, done: false }
console.log(gen.next());
// { value: 1, done: false }
console.log(gen.next());
// { value: 2, done: false }
console.log(gen.next());
// { value: undefined, done: true }

// Generators are iterable, so for...of just works
for (const value of countUpTo(3)) {
  console.log(value);
}
// 0 1 2`,
    },

    {
      type: 'paragraph',
      title: 'Pausing and Resuming Execution',
      content:
        'The defining feature of a generator is that execution truly pauses at each yield and picks back up exactly where it left off on the next call to .next() — including any local variables and loop state. This makes generators well suited for representing sequences that are computed lazily, one step at a time, rather than all at once.',
    },

    {
      type: 'code',
      title: 'Execution Order with Multiple Yields',
      language: 'javascript',
      code: `function* logSteps() {
  console.log('Starting');
  yield 'step 1';
  console.log('Resumed after step 1');
  yield 'step 2';
  console.log('Resumed after step 2');
  return 'done';
}

const steps = logSteps();
console.log(steps.next());
// "Starting" is logged, then { value: "step 1", done: false }

console.log(steps.next());
// "Resumed after step 1" is logged, then { value: "step 2", done: false }

console.log(steps.next());
// "Resumed after step 2" is logged, then { value: "done", done: true }`,
    },

    {
      type: 'paragraph',
      title: 'Passing Values Into a Generator',
      content:
        'yield is a two-way street: not only does it produce a value out of the generator, but whatever you pass to the next .next() call becomes the result of that yield expression inside the generator body. This lets a generator receive input from the outside world at each pause point, not just emit values.',
    },

    {
      type: 'code',
      title: 'Sending Values Back Into a Generator',
      language: 'javascript',
      code: `function* chat() {
  const name = yield 'What is your name?';
  const mood = yield \`Hello, \${name}! How are you feeling?\`;
  return \`\${name} is feeling \${mood}.\`;
}

const conversation = chat();
console.log(conversation.next().value);
// "What is your name?"

console.log(conversation.next('Aman').value);
// "Hello, Aman! How are you feeling?" — "Aman" became the value of the first yield

console.log(conversation.next('great').value);
// "Aman is feeling great." — "great" became the value of the second yield`,
    },

    {
      type: 'paragraph',
      title: 'Practical Example: An Infinite Sequence',
      content:
        'Generators are a natural fit for infinite sequences, since values are only computed as they are requested. You can safely define a generator that never runs out, and simply stop pulling values from it whenever you have enough.',
    },

    {
      type: 'code',
      title: 'An Infinite Generator with a Manual Stopping Point',
      language: 'javascript',
      code: `function* naturalNumbers() {
  let n = 1;
  while (true) {
    yield n++;
  }
}

const numbers = naturalNumbers();
const firstFive = [];
for (let i = 0; i < 5; i++) {
  firstFive.push(numbers.next().value);
}
console.log(firstFive);
// [1, 2, 3, 4, 5]

// A for...of loop would never terminate on its own here —
// you'd need a break to stop consuming an infinite generator
for (const n of naturalNumbers()) {
  if (n > 3) break;
  console.log(n);
}
// 1 2 3`,
    },

    {
      type: 'table',
      title: 'Iterator vs. Iterable vs. Generator',
      headers: ['Concept', 'Definition'],
      rows: [
        [
          'Iterator',
          'An object with a next() method returning { value, done }',
        ],
        [
          'Iterable',
          'An object with a Symbol.iterator method that returns an iterator',
        ],
        [
          'Generator',
          'A function* whose calls return an object that is both an iterator and an iterable',
        ],
      ],
    },

    {
      type: 'tip',
      title: 'Generators Simplify Custom Iterables',
      content:
        'If you find yourself hand-writing a Symbol.iterator method with a manual next() implementation, consider replacing it with a generator function instead — the same for...of behavior, expressed with a plain loop and yield, is usually far easier to read and maintain.',
    },

    {
      type: 'warning',
      title: 'Be Careful with Infinite Generators',
      content:
        'An infinite generator used directly in a for...of loop without a break, or spread with the ... operator, or converted with Array.from(), will never finish and will hang or exhaust memory. Always pair an infinite generator with an explicit stopping condition.',
    },
  ],

  quiz: [
    {
      question: 'What must an object have to satisfy the iterator protocol?',
      options: [
        'A length property',
        'A next() method returning { value, done }',
        'A Symbol.iterator method',
        'A forEach() method',
      ],
      answer: 1,
    },
    {
      question: 'What makes an object usable with for...of?',
      options: [
        'Having a length property',
        'Having a Symbol.iterator method that returns an iterator',
        'Being an instance of Array',
        'Having a next() method directly on it',
      ],
      answer: 1,
    },
    {
      question: 'What keyword pauses execution inside a generator function?',
      options: ['return', 'await', 'yield', 'pause'],
      answer: 2,
    },
    {
      question: 'What happens when you call a generator function?',
      options: [
        'Its body runs immediately to completion',
        'It returns a generator object without running the body yet',
        'It throws unless awaited',
        'It returns undefined',
      ],
      answer: 1,
    },
    {
      question: 'What happens to the value passed to gen.next(value)?',
      options: [
        'It is ignored',
        'It becomes the return value of the generator',
        'It becomes the result of the yield expression the generator is paused on',
        "It replaces the generator's first yielded value",
      ],
      answer: 2,
    },
  ],

  previous: 'optional-chaining-nullish-coalescing',
  next: 'date-and-time',
};
