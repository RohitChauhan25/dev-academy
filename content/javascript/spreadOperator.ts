export const spreadOperator = {
  slug: 'spread-operator',

  title: 'The Spread Operator',

  description:
    'Learn how the spread operator (...) expands arrays, objects, and iterables in place — for copying, merging, passing arguments, and more — along with its shallow-copy caveat.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 18 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'Introduction',
      content:
        "The spread operator, written as three dots (...), takes an iterable — an array, a string, or an object with the spread syntax support — and expands it into its individual elements wherever it's used. It looks identical to the rest pattern you'll meet in the next lesson, but the two do opposite jobs: spread expands a collection into individual values, while rest gathers individual values back into a collection. Spread shows up constantly in modern JavaScript for copying, merging, and passing data around without mutating the original.",
    },

    {
      type: 'paragraph',
      title: 'Spreading Arrays: Copying',
      content:
        'Spreading an array into a new array literal creates a shallow copy — a brand-new array containing the same elements, but a completely different array in memory. This matters because arrays are reference types in JavaScript: assigning one array variable to another just copies the reference, so mutating one would affect the other. Spread avoids that by building an actual new array.',
    },

    {
      type: 'code',
      title: 'Copying Arrays Example',
      language: 'javascript',
      code: `const original = [1, 2, 3];

const copy = [...original];

copy.push(4);

console.log(original);
// [1, 2, 3] — unchanged

console.log(copy);
// [1, 2, 3, 4]

console.log(original === copy);
// false — two different arrays in memory`,
    },

    {
      type: 'paragraph',
      title: 'Spreading Arrays: Merging',
      content:
        "Because spread expands an array's elements in place, you can interleave multiple arrays — and even extra individual values — into a single new array literal. This replaces the older approach of using .concat() and reads more naturally, especially when combining more than two arrays or mixing in standalone values.",
    },

    {
      type: 'code',
      title: 'Merging Arrays Example',
      language: 'javascript',
      code: `const fruits = ["apple", "banana"];
const vegetables = ["carrot", "potato"];

const groceries = [...fruits, ...vegetables];

console.log(groceries);
// ["apple", "banana", "carrot", "potato"]

const groceriesWithExtra = [...fruits, "milk", ...vegetables];

console.log(groceriesWithExtra);
// ["apple", "banana", "milk", "carrot", "potato"]`,
    },

    {
      type: 'paragraph',
      title: 'Spreading Objects',
      content:
        'Since ES2018, the same ... syntax works on objects too. Spreading an object into a new object literal copies its own enumerable properties into that new object, again producing a genuinely separate object rather than a shared reference. Just like with arrays, this is the standard modern way to copy and merge objects immutably.',
    },

    {
      type: 'code',
      title: 'Copying and Merging Objects Example',
      language: 'javascript',
      code: `const user = { name: "Ishaan", age: 24 };

const userCopy = { ...user };

console.log(userCopy);
// { name: "Ishaan", age: 24 }

console.log(user === userCopy);
// false — a new object

const address = { city: "Pune", pincode: 411001 };

const fullProfile = { ...user, ...address };

console.log(fullProfile);
// { name: "Ishaan", age: 24, city: "Pune", pincode: 411001 }`,
    },

    {
      type: 'paragraph',
      title: 'Overriding Keys While Merging',
      content:
        'When two spread objects share a property name, the one that appears later in the object literal wins — its value overwrites the earlier one. This makes spread a convenient way to apply overrides or updates on top of a base object: spread the defaults first, then spread the overrides after them so the overrides take priority.',
    },

    {
      type: 'code',
      title: 'Overriding Keys Example',
      language: 'javascript',
      code: `const defaults = { theme: "light", fontSize: 14, showSidebar: true };

const userPreferences = { fontSize: 18 };

const finalSettings = { ...defaults, ...userPreferences };

console.log(finalSettings);
// { theme: "light", fontSize: 18, showSidebar: true }
// fontSize was overridden because userPreferences was spread LAST

const wrongOrder = { ...userPreferences, ...defaults };

console.log(wrongOrder);
// { fontSize: 14, theme: "light", showSidebar: true }
// here defaults overwrote fontSize back to 14, since it came last`,
    },

    {
      type: 'paragraph',
      title: 'Spreading into Function Calls',
      content:
        "Spread can also expand an array directly into a function call's argument list, passing each element as a separate positional argument. This replaces the old Function.prototype.apply() trick that was previously needed to call a function with an array of arguments, and it works with any function, including built-ins like Math.max() that don't natively accept an array.",
    },

    {
      type: 'code',
      title: 'Spreading into Function Calls Example',
      language: 'javascript',
      code: `const numbers = [4, 8, 15, 16, 23, 42];

console.log(Math.max(...numbers));
// 42

function introduce(first, last, city) {
  return \`\${first} \${last} from \${city}\`;
}

const details = ["Kavya", "Rao", "Chennai"];

console.log(introduce(...details));
// "Kavya Rao from Chennai"

// Old way, before spread existed:
// console.log(Math.max.apply(null, numbers));`,
    },

    {
      type: 'paragraph',
      title: 'Spreading Strings',
      content:
        'Strings are iterable, so spreading a string expands it into an array of its individual characters. This is a quick way to turn a string into a character array without calling .split(""), and — unlike some legacy string-to-array tricks — it correctly handles multi-byte Unicode characters, such as emoji, as single elements.',
    },

    {
      type: 'code',
      title: 'Spreading Strings Example',
      language: 'javascript',
      code: `const word = "hello";

const letters = [...word];

console.log(letters);
// ["h", "e", "l", "l", "o"]

const greeting = "hi 👋";

console.log([...greeting]);
// ["h", "i", " ", "👋"] — the emoji stays intact as one element`,
    },

    {
      type: 'table',
      title: 'Common Spread Use Cases',
      headers: ['Use Case', 'Example'],
      rows: [
        ['Copy an array', '[...originalArray]'],
        ['Merge arrays', '[...arrayA, ...arrayB]'],
        ['Copy an object', '{ ...originalObject }'],
        ['Merge/override objects', '{ ...defaults, ...overrides }'],
        ['Pass array elements as arguments', 'fn(...argsArray)'],
        ['Convert a string to characters', '[...someString]'],
      ],
    },

    {
      type: 'tip',
      title: 'Spread Works with Any Iterable',
      content:
        "Spread isn't limited to arrays and objects — anything iterable works, including Sets and Maps. [...new Set([1, 1, 2, 2, 3])] is a common one-liner for deduplicating an array, since converting to a Set first removes duplicates and spreading converts it straight back into an array.",
    },

    {
      type: 'warning',
      title: 'Spread Only Copies One Level Deep',
      content:
        'Spread performs a shallow copy: it copies top-level values, but if a property or element is itself an object or array, only the reference to that nested structure is copied — not a fresh copy of its contents. Mutating a nested object inside the "copy" will also change it inside the original, because both point to the very same nested object in memory. For deeply nested data, you need a deep clone (such as structuredClone()) instead of spread.',
    },

    {
      type: 'code',
      title: 'Shallow Copy Caveat Example',
      language: 'javascript',
      code: `const original = { name: "Dev", address: { city: "Jaipur" } };

const copy = { ...original };

copy.address.city = "Udaipur";

console.log(original.address.city);
// "Udaipur" — changed! Both objects share the same nested "address" object

console.log(original.address === copy.address);
// true — same reference, spread never touched it`,
    },
  ],

  quiz: [
    {
      question: 'What does [...[1, 2], ...[3, 4]] evaluate to?',
      options: [
        '[1, 2, 3, 4]',
        '[[1, 2], [3, 4]]',
        '[1, 2, [3, 4]]',
        'An error is thrown',
      ],
      answer: 0,
    },
    {
      question:
        "In { ...defaults, ...overrides }, which object's value wins for a shared key?",
      options: [
        'defaults, because it is spread first',
        'overrides, because it is spread last',
        'Neither — a shared key throws an error',
        'The key with the alphabetically first name',
      ],
      answer: 1,
    },
    {
      question: 'What does [...\"hi\"] evaluate to?',
      options: ['"hi"', '["hi"]', '["h", "i"]', 'undefined'],
      answer: 2,
    },
    {
      question:
        'Given const b = { ...a }; b.nested.value = 99;, what happens to a.nested.value if "nested" is an object?',
      options: [
        'It stays unchanged, since spread makes a full deep copy',
        'It also becomes 99, because spread only copies references to nested objects',
        'It throws a TypeError',
        'It becomes undefined',
      ],
      answer: 1,
    },
    {
      question:
        'What is the old, pre-spread way to call Math.max() with an array of numbers?',
      options: [
        'Math.max.apply(null, numbers)',
        'Math.max(numbers)',
        'Math.max.call(numbers)',
        'There was no way to do this before spread',
      ],
      answer: 0,
    },
  ],

  previous: 'object-destructuring',
  next: 'rest-parameters',
};
