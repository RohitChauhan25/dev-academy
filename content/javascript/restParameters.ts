export const restParameters = {
  slug: 'rest-parameters',

  title: 'Rest Parameters',

  description:
    'Learn how rest parameters collect the remaining arguments passed to a function into a real array, how they compare to the old arguments object, and how they contrast with the spread operator.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 19 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'Introduction',
      content:
        "In the previous lesson, the spread operator used ... to expand a collection out into individual values. Rest parameters use the exact same three dots, but for the opposite purpose: instead of expanding values outward, rest gathers many individual values back together into a single array. When ... appears in a function's parameter list, it collects every remaining argument the function was called with into one real array.",
    },

    {
      type: 'code',
      title: 'Basic Rest Parameters Example',
      language: 'javascript',
      code: `function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));
// 6

console.log(sum(10, 20, 30, 40));
// 100

console.log(sum());
// 0 — "numbers" is just an empty array when called with no arguments

console.log(Array.isArray(sum(1, 2, 3) && [1, 2, 3]));
// true — the point being, "numbers" inside sum() is a genuine array`,
    },

    {
      type: 'paragraph',
      title: 'Contrast with the Old arguments Object',
      content:
        'Before rest parameters existed, every regular function had access to an implicit, array-like object called arguments, which held every argument passed to the call. It worked, but it had real downsides: arguments is not a true array, so methods like .map(), .filter(), and .reduce() aren\'t available on it directly without first converting it (for example with Array.from(arguments)). It also doesn\'t exist at all inside arrow functions, and it always contains every argument, with no way to grab "just the extra ones" the way rest parameters can.',
    },

    {
      type: 'code',
      title: 'arguments vs. Rest Parameters Example',
      language: 'javascript',
      code: `function oldSum() {
  console.log(Array.isArray(arguments));
  // false — arguments is array-like, not a real array

  const argsArray = Array.from(arguments);
  return argsArray.reduce((total, n) => total + n, 0);
}

console.log(oldSum(1, 2, 3));
// 6

function newSum(...numbers) {
  console.log(Array.isArray(numbers));
  // true — rest parameters give you a real array immediately
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(newSum(1, 2, 3));
// 6

const arrowFn = () => {
  // console.log(arguments); // Error in most environments — arrow functions have no "arguments"
};`,
    },

    {
      type: 'paragraph',
      title: 'Rest Parameters Must Come Last',
      content:
        "A rest parameter collects everything remaining, so by definition it can only make sense as the very last parameter in a function's parameter list. JavaScript enforces this with a SyntaxError if you try to place anything after it — there's nothing left for another named parameter to receive once the rest parameter has claimed the remainder of the arguments.",
    },

    {
      type: 'code',
      title: 'Rest Must Be Last Example',
      language: 'javascript',
      code: `function valid(first, ...rest) {
  return { first, rest };
}

console.log(valid(1, 2, 3, 4));
// { first: 1, rest: [2, 3, 4] }

// function invalid(...rest, last) {} // SyntaxError: Rest parameter must be last formal parameter`,
    },

    {
      type: 'paragraph',
      title: 'Combining Rest with Named Parameters',
      content:
        'Rest parameters are frequently combined with one or more regular named parameters that come before them. The named parameters capture specific, expected values, while the rest parameter scoops up whatever is left — however many extra arguments that turns out to be, including zero.',
    },

    {
      type: 'code',
      title: 'Combining with Named Parameters Example',
      language: 'javascript',
      code: `function announceWinners(event, ...winners) {
  return \`\${event}: \${winners.join(", ")}\`;
}

console.log(announceWinners("Hackathon", "Team Alpha", "Team Beta", "Team Gamma"));
// "Hackathon: Team Alpha, Team Beta, Team Gamma"

console.log(announceWinners("Quiz Night", "Rohit"));
// "Quiz Night: Rohit"

console.log(announceWinners("Empty Contest"));
// "Empty Contest: " — winners is [] when there are no extra arguments`,
    },

    {
      type: 'paragraph',
      title: 'Rest in Destructuring: Arrays and Objects',
      content:
        "The rest pattern also appears in destructuring, which you covered in the last two lessons — a rest element in an array destructuring pattern collects the remaining elements into a new array, and a rest property in an object destructuring pattern collects the remaining properties into a new object. This is a different context from rest parameters in a function signature, but the same underlying idea: collect what's left over.",
    },

    {
      type: 'code',
      title: 'Rest in Destructuring Example',
      language: 'javascript',
      code: `// Rest in array destructuring
const [gold, ...otherMedals] = ["Alice", "Bob", "Carla", "Deepak"];

console.log(gold);
// "Alice"

console.log(otherMedals);
// ["Bob", "Carla", "Deepak"]

// Rest in object destructuring
const { id, ...otherFields } = { id: 1, name: "Widget", price: 20 };

console.log(id);
// 1

console.log(otherFields);
// { name: "Widget", price: 20 }`,
    },

    {
      type: 'paragraph',
      title: 'Rest vs. Spread: Opposite Operations, Same Syntax',
      content:
        "It's worth stating this plainly, since it trips up a lot of learners: rest and spread look identical — both are written as ... — but they do opposite things, and which one you're looking at depends entirely on where the ... appears. In a destructuring pattern or a function's parameter list, ... gathers values together (rest). In an array literal, object literal, or function call's argument list, ... expands a collection outward into individual values (spread). Same punctuation, opposite direction.",
    },

    {
      type: 'code',
      title: 'Rest vs. Spread Side by Side',
      language: 'javascript',
      code: `// SPREAD: expanding an array into individual arguments at a call site
const numbers = [1, 2, 3];
console.log(Math.max(...numbers));
// 3 — spread expands the array OUT into separate arguments

// REST: gathering individual arguments into an array in a function definition
function logAll(...args) {
  console.log(args);
}
logAll(1, 2, 3);
// [1, 2, 3] — rest gathers the arguments IN as a single array

// The direction depends on context, not the dots themselves:
// - Left side of an assignment / in a parameter list => rest (gathers)
// - Right side of an assignment / inside a call or literal => spread (expands)`,
    },

    {
      type: 'table',
      title: 'Rest vs. Spread at a Glance',
      headers: ['', 'Rest (...)', 'Spread (...)'],
      rows: [
        ['Direction', 'Gathers values together', 'Expands values apart'],
        [
          'Where it appears',
          'Function parameters, destructuring patterns',
          'Array/object literals, function call arguments',
        ],
        [
          'Result',
          'A single new array or object',
          'Individual elements or properties',
        ],
        ['Example', 'function f(...args) {}', 'f(...argsArray)'],
      ],
    },

    {
      type: 'tip',
      title: 'A Quick Way to Tell Them Apart',
      content:
        "If the ... appears where a value is being defined or declared (a parameter list, or the left side of a destructuring assignment), it's rest — it's collecting things. If it appears where a value is being used or passed (inside [], {}, or a function call's parentheses), it's spread — it's expanding things.",
    },

    {
      type: 'warning',
      title: 'Only One Rest Parameter Per Function',
      content:
        "A function can have only a single rest parameter, and again, it must be the last one. You also can't give a rest parameter a default value the way you can with a regular parameter, since it's already guaranteed to be an array (possibly empty) rather than possibly undefined — there's nothing for a default to protect against.",
    },
  ],

  quiz: [
    {
      question:
        'What does function f(...args) { return args; } return when called as f(1, 2, 3)?',
      options: ['1', 'undefined', '[1, 2, 3]', 'An arguments-like object'],
      answer: 2,
    },
    {
      question: 'Which of these is a valid rest parameter declaration?',
      options: [
        'function f(...rest, last) {}',
        'function f(a, ...rest) {}',
        'function f(...a, ...b) {}',
        'function f(...rest = []) {}',
      ],
      answer: 1,
    },
    {
      question:
        'What is a key limitation of the old arguments object compared to rest parameters?',
      options: [
        'It cannot be used at all inside regular functions',
        'It is a true array but cannot be logged',
        'It is only array-like and lacks array methods like .map() directly',
        'It only works with arrow functions',
      ],
      answer: 2,
    },
    {
      question:
        'In const [a, ...rest] = [1, 2, 3], what role does ...rest play?',
      options: [
        'It spreads the array into separate arguments',
        'It gathers the remaining elements into a new array',
        'It duplicates the array',
        'It causes a SyntaxError since rest only works in function parameters',
      ],
      answer: 1,
    },
    {
      question:
        'How can you distinguish rest from spread when you see ... in code?',
      options: [
        'Rest always uses square brackets, spread always uses curly braces',
        'They are actually the same operation with no difference',
        'It depends on context: gathering in a parameter list or destructuring pattern is rest, expanding in a literal or call is spread',
        'Rest can only be used with numbers, spread only with strings',
      ],
      answer: 2,
    },
  ],

  previous: 'spread-operator',
  next: 'template-literals',
};
