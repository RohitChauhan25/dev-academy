export const mapAndSet = {
  slug: 'map-and-set',

  title: 'Map and Set',

  description:
    'Learn how the Map and Set data structures work in JavaScript — storing key-value pairs with any type of key, and storing collections of guaranteed-unique values.',

  level: 'Intermediate',

  readingTime: '16 min',

  lesson: 'Lesson 35 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'Beyond Objects and Arrays',
      content:
        "Plain objects and arrays cover most everyday needs, but they each have limitations. Object keys are always coerced to strings (or symbols), so you can't use an object or a number as a truly distinct key. Arrays can hold duplicate values freely, even when you specifically want a collection where every value only appears once. Map and Set are built-in data structures designed to solve exactly these two problems.",
    },

    {
      type: 'paragraph',
      title: 'What Is a Map?',
      content:
        "A Map stores key-value pairs, just like a plain object — but unlike an object, a Map's keys can be any value at all: a string, a number, a function, another object, even NaN. Keys also keep their original type instead of being converted to strings, and a Map remembers the order in which entries were inserted, which it reliably preserves during iteration.",
    },

    {
      type: 'code',
      title: 'Creating a Map',
      language: 'javascript',
      code: `const userRoles = new Map();

const rohit = { name: "Rohit" };
const aman = { name: "Aman" };

userRoles.set(rohit, "admin");
userRoles.set(aman, "editor");
userRoles.set(1, "numeric key");
userRoles.set("1", "string key");

console.log(userRoles.get(rohit));
// "admin"

console.log(userRoles.get(1));
// "numeric key"

console.log(userRoles.get("1"));
// "string key" — a totally separate entry from the number key 1`,
    },

    {
      type: 'paragraph',
      title: 'Core Map Methods',
      content:
        "A Map's essential operations are small and consistent: set(key, value) adds or updates an entry (and returns the Map itself, so calls can be chained), get(key) retrieves a value, has(key) checks whether a key exists, delete(key) removes an entry, and the size property (not a method — no parentheses) tells you how many entries the Map holds.",
    },

    {
      type: 'code',
      title: 'set / get / has / delete / size',
      language: 'javascript',
      code: `const scores = new Map();

scores.set("Rohit", 90).set("Aman", 85);
// .set() returns the Map, so calls can be chained

console.log(scores.size);
// 2

console.log(scores.has("Rohit"));
// true

console.log(scores.get("Aman"));
// 85

scores.delete("Aman");

console.log(scores.has("Aman"));
// false

console.log(scores.size);
// 1`,
    },

    {
      type: 'paragraph',
      title: 'Iterating a Map',
      content:
        'Maps are iterable, so you can use a for...of loop directly, which yields [key, value] pairs you can destructure. Map also exposes .keys(), .values(), and .entries() if you only need one part of each pair, and .forEach() as a callback-based alternative — entries are always visited in the order they were inserted.',
    },

    {
      type: 'code',
      title: 'Looping Over a Map',
      language: 'javascript',
      code: `const scores = new Map([
  ["Rohit", 90],
  ["Aman", 85],
  ["Priya", 95],
]);

for (const [name, score] of scores) {
  console.log(name, score);
}
// Rohit 90
// Aman 85
// Priya 95

console.log([...scores.keys()]);
// ["Rohit", "Aman", "Priya"]

console.log([...scores.values()]);
// [90, 85, 95]

scores.forEach((score, name) => {
  console.log(\`\${name}: \${score}\`);
});
// Rohit: 90
// Aman: 85
// Priya: 95`,
    },

    {
      type: 'paragraph',
      title: 'What Is a Set?',
      content:
        "A Set is a collection of values where every value is guaranteed to be unique — adding a value that's already present has no effect. Like a Map, a Set can hold any type of value, preserves insertion order during iteration, and checks for equality using the same rules as strict equality (with the one exception that NaN is treated as equal to itself inside a Set).",
    },

    {
      type: 'code',
      title: 'Creating a Set',
      language: 'javascript',
      code: `const tags = new Set();

tags.add("javascript");
tags.add("react");
tags.add("javascript"); // ignored, already present

console.log(tags);
// Set(2) { "javascript", "react" }

console.log(tags.size);
// 2`,
    },

    {
      type: 'paragraph',
      title: 'Core Set Methods',
      content:
        "A Set's API mirrors a Map's closely: add(value) inserts a value (and returns the Set, so calls can be chained), has(value) checks membership, delete(value) removes a value, and size reports how many unique values the Set currently holds.",
    },

    {
      type: 'code',
      title: 'add / has / delete / size',
      language: 'javascript',
      code: `const favoriteNumbers = new Set();

favoriteNumbers.add(7).add(3).add(7).add(11);
// .add() returns the Set, so calls can be chained; the second 7 is ignored

console.log(favoriteNumbers.size);
// 3

console.log(favoriteNumbers.has(3));
// true

favoriteNumbers.delete(3);

console.log(favoriteNumbers.has(3));
// false

console.log([...favoriteNumbers]);
// [7, 11]`,
    },

    {
      type: 'paragraph',
      title: 'Using a Set to Dedupe an Array',
      content:
        'Because a Set automatically discards duplicate values, converting an array to a Set and back is a short, common way to remove duplicates while preserving the original order of first appearance. Spreading a Set into a new array (or passing it to Array.from()) turns it back into a regular array you can use every array method on.',
    },

    {
      type: 'code',
      title: 'Deduping an Array with a Set',
      language: 'javascript',
      code: `const numbers = [1, 2, 2, 3, 4, 4, 4, 5];

const unique = [...new Set(numbers)];

console.log(unique);
// [1, 2, 3, 4, 5]

// Equivalent using Array.from()
console.log(Array.from(new Set(numbers)));
// [1, 2, 3, 4, 5]`,
    },

    {
      type: 'table',
      title: 'Map / Set vs. Object / Array',
      headers: ['Structure', 'Reach for it when...'],
      rows: [
        [
          'Map',
          'You need keys that are not strings, frequent additions/removals, or guaranteed insertion order',
        ],
        [
          'Object',
          'You have a fixed, known set of string-keyed properties and want simple dot-notation access',
        ],
        [
          'Set',
          'You need a collection where every value must be unique, and fast membership checks',
        ],
        [
          'Array',
          'You need an ordered list that may contain duplicates, with rich built-in iteration methods',
        ],
      ],
    },

    {
      type: 'tip',
      title: 'When to Reach for Map/Set Over Object/Array',
      content:
        "Prefer a Map over a plain object when keys aren't simple strings, when keys are decided at runtime and could accidentally collide with built-in object properties (like \"toString\"), or when you'll be adding and removing entries frequently and want a reliable size property. Prefer a Set over an array when uniqueness matters and you'll be checking membership often — has() on a Set is much faster than repeatedly calling includes() on a large array.",
    },

    {
      type: 'warning',
      title: 'Maps and Sets Are Not JSON-Friendly by Default',
      content:
        'JSON.stringify() does not know how to serialize a Map or a Set — it will produce an empty object {} for a Map and an empty object {} for a Set, silently losing your data. If you need to persist or transmit one, convert it to a plain array or object first (for example, [...someMap.entries()] or [...someSet]) before stringifying.',
    },
  ],

  quiz: [
    {
      question:
        'Which of the following can be used as a Map key, but not as a plain object key without coercion?',
      options: [
        'A string',
        'A number literal like 42',
        'An object reference',
        'All of the above are coerced the same way in an object',
      ],
      answer: 2,
    },
    {
      question: 'Which method adds a value to a Set?',
      options: ['.push()', '.add()', '.set()', '.insert()'],
      answer: 1,
    },
    {
      question: 'What does new Set([1, 2, 2, 3, 3, 3]) contain?',
      options: [
        '[1, 2, 2, 3, 3, 3]',
        'A Set with values 1, 2, 3',
        'An error is thrown',
        'An empty Set',
      ],
      answer: 1,
    },
    {
      question: 'What is the correct way to check how many entries a Map has?',
      options: ['myMap.length', 'myMap.size', 'myMap.count()', 'myMap.size()'],
      answer: 1,
    },
    {
      question:
        'What is a concise way to remove duplicates from an array called numbers?',
      options: [
        'numbers.unique()',
        '[...new Set(numbers)]',
        'Object.keys(numbers)',
        'numbers.dedupe()',
      ],
      answer: 1,
    },
  ],

  previous: 'modules',
  next: 'json',
};
