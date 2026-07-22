export const objectDestructuring = {
  slug: 'object-destructuring',

  title: 'Object Destructuring',

  description:
    'Learn how to unpack properties from objects into variables using destructuring, including renaming, default values, nested patterns, and combining destructuring with the rest pattern.',

  level: 'Beginner',

  readingTime: '15 min',

  lesson: 'Lesson 17 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'Introduction',
      content:
        "Object destructuring is the sibling of array destructuring you just learned — same underlying idea, different syntax. Instead of pulling values out of an array by position, object destructuring pulls values out of an object by property name, using curly braces instead of square brackets. It's one of the most frequently used features in modern JavaScript, especially for reading data out of API responses, configuration objects, and React props.",
    },

    {
      type: 'code',
      title: 'Basic Object Destructuring',
      language: 'javascript',
      code: `const user = { name: "Rohit", age: 28, city: "Delhi" };

const { name, age, city } = user;

console.log(name);
// "Rohit"

console.log(age);
// 28

console.log(city);
// "Delhi"

// Equivalent to, but far shorter than:
// const name = user.name;
// const age = user.age;
// const city = user.city;`,
    },

    {
      type: 'paragraph',
      title: 'Property Order Does Not Matter',
      content:
        'Unlike array destructuring, object destructuring matches by property name rather than position, so the order in which you list variables in the pattern makes no difference. As long as the variable name matches a key on the object, it will be pulled out correctly, no matter where it appears in the pattern or in the object itself.',
    },

    {
      type: 'code',
      title: 'Order Independence Example',
      language: 'javascript',
      code: `const product = { id: 101, price: 499, title: "Keyboard" };

const { title, price, id } = product;

console.log(title, price, id);
// "Keyboard" 499 101 — matched by name, not by the order written above`,
    },

    {
      type: 'paragraph',
      title: 'Renaming Variables',
      content:
        "Sometimes the property name on the object clashes with a variable you already have, or simply isn't the name you'd like to use in your code. You can rename a destructured property using a colon: { propertyName: newVariableName }. The left side of the colon must match the object's actual key; the right side is the local variable name you get to choose.",
    },

    {
      type: 'code',
      title: 'Renaming Example',
      language: 'javascript',
      code: `const response = { id: 1, name: "Wireless Mouse", qty: 3 };

const { name: productName, qty: quantity } = response;

console.log(productName);
// "Wireless Mouse"

console.log(quantity);
// 3

// console.log(name); // Error — "name" was never declared, only "productName" was`,
    },

    {
      type: 'paragraph',
      title: 'Default Values',
      content:
        "Just like with arrays, you can supply a default value for a property that might be missing or undefined on the object. The default is only used when the property doesn't exist at all, or when its value is explicitly undefined — it will not override a value like 0, false, or an empty string, since those are not undefined. Defaults can also be combined with renaming.",
    },

    {
      type: 'code',
      title: 'Default Values Example',
      language: 'javascript',
      code: `const config = { theme: "dark" };

const { theme, fontSize = 16 } = config;

console.log(theme, fontSize);
// "dark" 16 — fontSize was missing, so the default was used

const { retries: attempts = 3 } = { retries: 0 };

console.log(attempts);
// 0 — an explicit 0 is not undefined, so the default is NOT used`,
    },

    {
      type: 'paragraph',
      title: 'Nested Object Destructuring',
      content:
        'Objects often contain other objects, and destructuring patterns can dig straight into that nested structure. Each level of curly braces in the pattern mirrors a level of nesting in the data, letting you reach directly into deeply nested properties without creating an intermediate variable for every level along the way.',
    },

    {
      type: 'code',
      title: 'Nested Destructuring Example',
      language: 'javascript',
      code: `const employee = {
  name: "Meera",
  address: {
    city: "Bengaluru",
    pincode: 560001,
  },
};

const {
  name,
  address: { city, pincode },
} = employee;

console.log(name, city, pincode);
// "Meera" "Bengaluru" 560001

// Note: "address" itself is NOT created as a variable here —
// only "city" and "pincode", the properties destructured from it, are`,
    },

    {
      type: 'paragraph',
      title: 'Destructuring in Function Parameters',
      content:
        'Object destructuring shines in function parameter lists, especially for functions that accept a single options object instead of a long list of positional arguments. This makes the call site self-documenting, because every argument is passed as a named property, and it makes the function signature self-documenting, because every expected property is spelled out up front.',
    },

    {
      type: 'code',
      title: 'Destructuring in Parameters Example',
      language: 'javascript',
      code: `function createUser({ name, age = 18, role = "member" }) {
  return \`\${name} (\${age}) — \${role}\`;
}

console.log(createUser({ name: "Aman" }));
// "Aman (18) — member"

console.log(createUser({ name: "Priya", age: 25, role: "admin" }));
// "Priya (25) — admin"

// Compare this to needing three separate positional arguments,
// where the caller has to remember the correct order every time`,
    },

    {
      type: 'paragraph',
      title: 'Combining with the Rest Pattern',
      content:
        'Object destructuring can grab a few named properties while collecting everything else into a new object using the rest pattern (...). This is especially useful for separating a couple of properties you want to handle specially from the rest of the object, which you might want to pass along unchanged or log for debugging.',
    },

    {
      type: 'code',
      title: 'Rest Pattern Example',
      language: 'javascript',
      code: `const order = {
  id: 5521,
  item: "Monitor",
  price: 12999,
  quantity: 1,
  currency: "INR",
};

const { id, ...details } = order;

console.log(id);
// 5521

console.log(details);
// { item: "Monitor", price: 12999, quantity: 1, currency: "INR" }

// "details" is a brand-new object containing every property except "id"`,
    },

    {
      type: 'table',
      title: 'Array vs. Object Destructuring',
      headers: ['Aspect', 'Array Destructuring', 'Object Destructuring'],
      rows: [
        ['Syntax', 'Square brackets []', 'Curly braces {}'],
        ['Matching', 'By position', 'By property name'],
        ['Renaming', 'Not applicable', 'Use { key: newName }'],
        ['Skipping', 'Empty comma slot', 'Simply omit the key'],
        [
          'Rest pattern',
          '...rest collects remaining elements',
          '...rest collects remaining properties',
        ],
      ],
    },

    {
      type: 'tip',
      title: 'Destructuring Props in React',
      content:
        "If you've seen React components, you've almost certainly seen object destructuring already: function Button({ label, onClick }) { ... } destructures the label and onClick props directly out of the props object in the function signature — the exact same pattern covered above, just applied to component props.",
    },

    {
      type: 'warning',
      title: 'Destructuring null or undefined Throws',
      content:
        "Attempting to destructure properties from null or undefined throws a TypeError, because there's no object to read properties from. This commonly happens when a function parameter is destructured but called without any argument at all — const { name } = undefined; fails, so if a parameter might be omitted, give the whole parameter a default empty object: function greet({ name } = {}) { ... }.",
    },
  ],

  quiz: [
    {
      question:
        'What determines which value a variable receives during object destructuring?',
      options: [
        'The position of the variable in the pattern',
        'The name of the property on the object',
        'The order properties were added to the object',
        'Alphabetical order of the keys',
      ],
      answer: 1,
    },
    {
      question: 'How do you rename "name" to "userName" while destructuring?',
      options: [
        'const { userName: name } = obj',
        'const { name -> userName } = obj',
        'const { name: userName } = obj',
        'const { name as userName } = obj',
      ],
      answer: 2,
    },
    {
      question:
        'Given const { retries = 5 } = { retries: 0 }, what is the value of retries?',
      options: ['5', '0', 'undefined', 'An error is thrown'],
      answer: 1,
    },
    {
      question:
        'What does const { a, ...rest } = { a: 1, b: 2, c: 3 } assign to rest?',
      options: ['{ a: 1 }', '{ b: 2, c: 3 }', '[2, 3]', 'undefined'],
      answer: 1,
    },
    {
      question: 'What happens when you run const { name } = undefined;?',
      options: [
        'name becomes undefined',
        'name becomes null',
        'A TypeError is thrown',
        'It silently does nothing',
      ],
      answer: 2,
    },
  ],

  previous: 'array-destructuring',
  next: 'spread-operator',
};
