export const arrayDestructuring = {
  slug: 'array-destructuring',

  title: 'Array Destructuring',

  description:
    'Learn how to unpack values from arrays into distinct variables using destructuring syntax, including skipping elements, default values, swapping, and nested patterns.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 16 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'Introduction',
      content:
        'Before destructuring existed, pulling values out of an array meant reaching for each one by its index — const first = arr[0]; const second = arr[1]; and so on. Array destructuring, introduced in ES6, lets you unpack multiple values from an array into separate variables in a single, readable statement. The syntax mirrors the array literal syntax you already know, except it appears on the left-hand side of an assignment instead of the right.',
    },

    {
      type: 'code',
      title: 'Basic Destructuring',
      language: 'javascript',
      code: `const colors = ["red", "green", "blue"];

const [first, second, third] = colors;

console.log(first);
// "red"

console.log(second);
// "green"

console.log(third);
// "blue"

// Equivalent to, but far shorter than:
// const first = colors[0];
// const second = colors[1];
// const third = colors[2];`,
    },

    {
      type: 'paragraph',
      title: 'Skipping Elements',
      content:
        "You don't have to capture every element. Leaving a slot empty — just a comma with nothing between the commas — skips over that position in the array entirely. This is handy when you only care about certain values and want to ignore the rest without inventing throwaway variable names for them.",
    },

    {
      type: 'code',
      title: 'Skipping Elements Example',
      language: 'javascript',
      code: `const numbers = [10, 20, 30, 40];

const [firstNumber, , thirdNumber] = numbers;

console.log(firstNumber);
// 10

console.log(thirdNumber);
// 30

// The second element, 20, was skipped entirely and was never assigned`,
    },

    {
      type: 'paragraph',
      title: 'Default Values',
      content:
        "If the array doesn't have enough elements to fill every variable, the missing ones are undefined by default — unless you supply a default value using =. The default only kicks in when the corresponding value is undefined (either because the array is too short, or because the element itself is explicitly undefined), so it's a great safety net for optional data.",
    },

    {
      type: 'code',
      title: 'Default Values Example',
      language: 'javascript',
      code: `const settings = ["dark"];

const [theme, fontSize = 16] = settings;

console.log(theme);
// "dark"

console.log(fontSize);
// 16 — there was no second element, so the default was used

const partial = [undefined, "en"];

const [region = "US", locale = "en-GB"] = partial;

console.log(region);
// "US" — undefined triggers the default

console.log(locale);
// "en" — the actual value overrides the default`,
    },

    {
      type: 'paragraph',
      title: 'Swapping Variables',
      content:
        'One of the most satisfying uses of array destructuring is swapping the values of two variables without a temporary holding variable. Before destructuring, swapping required a third variable to avoid overwriting one of the values before it was copied. Destructuring builds a temporary array behind the scenes, so you no longer need to manage that yourself.',
    },

    {
      type: 'code',
      title: 'Swapping Example',
      language: 'javascript',
      code: `let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
// 2

console.log(b);
// 1

// The old way required a temporary variable:
// let temp = a;
// a = b;
// b = temp;`,
    },

    {
      type: 'paragraph',
      title: 'Nested Array Destructuring',
      content:
        'Arrays can contain other arrays, and destructuring patterns can be nested to match that shape. Each level of square brackets in the pattern corresponds to a level of nesting in the data, so you can reach directly into inner arrays without first pulling out the outer one and destructuring it separately.',
    },

    {
      type: 'code',
      title: 'Nested Destructuring Example',
      language: 'javascript',
      code: `const coordinates = [10, [20, 30], 40];

const [x, [y, z], w] = coordinates;

console.log(x, y, z, w);
// 10 20 30 40

const matrix = [
  [1, 2],
  [3, 4],
];

const [[topLeft, topRight], [bottomLeft, bottomRight]] = matrix;

console.log(topLeft, topRight, bottomLeft, bottomRight);
// 1 2 3 4`,
    },

    {
      type: 'paragraph',
      title: 'Destructuring Function Return Values',
      content:
        'Functions can only return a single value, but that value is often an array bundling multiple pieces of related data. Destructuring lets the caller unpack that returned array immediately, giving each piece of data a meaningful name right at the call site instead of accessing it by index afterward.',
    },

    {
      type: 'code',
      title: 'Destructuring a Return Value',
      language: 'javascript',
      code: `function getMinMax(numbers) {
  return [Math.min(...numbers), Math.max(...numbers)];
}

const [min, max] = getMinMax([4, 8, 15, 16, 23, 42]);

console.log(min);
// 4

console.log(max);
// 42

// React's useState hook is a well-known real-world example of this pattern:
// const [count, setCount] = useState(0);`,
    },

    {
      type: 'paragraph',
      title: 'Destructuring in Function Parameters',
      content:
        "Destructuring patterns aren't limited to variable declarations — they can appear directly in a function's parameter list. When an array is passed as an argument, the function can destructure it right there, unpacking the values without an extra line inside the function body.",
    },

    {
      type: 'code',
      title: 'Destructuring in Parameters Example',
      language: 'javascript',
      code: `function formatName([first, last]) {
  return \`\${last}, \${first}\`;
}

console.log(formatName(["Ada", "Lovelace"]));
// "Lovelace, Ada"

function movePoint([x, y], [dx, dy]) {
  return [x + dx, y + dy];
}

console.log(movePoint([0, 0], [5, 10]));
// [5, 10]`,
    },

    {
      type: 'list',
      title: 'Where You Will See This in the Wild',
      items: [
        "Unpacking [value, setValue] from React's useState()",
        'Iterating Object.entries(obj) with for (const [key, value] of ...)',
        'Swapping two variables without a temp variable',
        'Reading only the pieces you need from a function that returns an array',
        'Splitting a string like "2026-07-14".split("-") into [year, month, day]',
      ],
    },

    {
      type: 'tip',
      title: 'Combine with the Rest Pattern',
      content:
        "Array destructuring pairs naturally with the rest pattern, letting you capture the first few elements individually while gathering everything else into a new array: const [first, ...others] = [1, 2, 3, 4] gives you first === 1 and others === [2, 3, 4]. You'll cover this rest pattern in more depth in the Rest Parameters lesson.",
    },

    {
      type: 'warning',
      title: 'Order Matters',
      content:
        'Unlike object destructuring, array destructuring is positional — the order of the variables in your pattern must match the order of the values in the array, not their names. Reordering [a, b] = [b, a] performs a swap because position, not name, decides which value goes where. If you reorder the array itself, every variable downstream shifts to a different value.',
    },
  ],

  quiz: [
    {
      question: 'What does const [a, b] = [1, 2, 3] result in?',
      options: [
        'a is 1, b is 2, and the 3 is discarded',
        'a is [1, 2, 3], b is undefined',
        'An error is thrown because of the extra element',
        'a is 1, b is [2, 3]',
      ],
      answer: 0,
    },
    {
      question:
        'How do you skip the first element when destructuring an array?',
      options: [
        'const [skip, second] = arr',
        'const [, second] = arr',
        'const [!first, second] = arr',
        'You cannot skip elements in array destructuring',
      ],
      answer: 1,
    },
    {
      question: 'What is the result of let [x, y] = [1, 2]; [x, y] = [y, x];?',
      options: [
        'x is 1, y is 2',
        'x is 2, y is 1',
        'An error is thrown',
        'x and y are both undefined',
      ],
      answer: 1,
    },
    {
      question:
        'When does a default value in const [a = 5] = [undefined] get used?',
      options: [
        'Never, because the array has one element',
        'Only if the array is empty',
        'Because the element at that position is undefined',
        'Default values are not allowed in array destructuring',
      ],
      answer: 2,
    },
    {
      question: 'What does const [[a, b]] = [[1, 2]] destructure a and b to?',
      options: [
        'a is [1, 2], b is undefined',
        'a is 1, b is 2',
        'An error, because nested arrays cannot be destructured',
        'a is undefined, b is undefined',
      ],
      answer: 1,
    },
  ],

  previous: 'static-array-methods',
  next: 'object-destructuring',
};
