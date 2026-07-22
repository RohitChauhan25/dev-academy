export const optionalChainingNullishCoalescing = {
  slug: 'optional-chaining-nullish-coalescing',

  title: 'Optional Chaining & Nullish Coalescing',

  description:
    'Learn how the ?. and ?? operators make it safe and concise to access deeply nested properties and provide sensible defaults, without the clutter of manual null checks.',

  level: 'Beginner',

  readingTime: '13 min',

  lesson: 'Lesson 22 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem: Accessing Nested Properties Safely',
      content:
        'Real-world data is often deeply nested, and any level of that nesting might be missing — a user object without an address, or an address without a zip code. Trying to read user.address.zip directly throws a TypeError the moment address is null or undefined, crashing your code instead of just giving you an empty result.',
    },

    {
      type: 'code',
      title: 'The Old && Chaining Approach',
      language: 'javascript',
      code: `const user = { name: 'Aman' }; // no address property

// Throws: Cannot read properties of undefined (reading 'zip')
// console.log(user.address.zip);

// The old workaround — check every level manually
const zip = user && user.address && user.address.zip;
console.log(zip);
// undefined — safe, but verbose and easy to get wrong

// It only gets worse with method calls and arrays involved
const firstSkill =
  user && user.skills && user.skills[0] && user.skills[0].name;
console.log(firstSkill);
// undefined`,
    },

    {
      type: 'paragraph',
      title: 'Optional Chaining: ?.',
      content:
        'Optional chaining (?.) lets you access a property, and if the value right before the ?. is null or undefined, the entire expression short-circuits to undefined instead of throwing. It reads almost identically to normal property access, just with a ? added before each dot you want to guard.',
    },

    {
      type: 'code',
      title: 'Optional Chaining for Property Access',
      language: 'javascript',
      code: `const user = { name: 'Aman' };

console.log(user.address?.zip);
// undefined — no error, even though address doesn't exist

const userWithAddress = { name: 'Rohit', address: { zip: '110001' } };
console.log(userWithAddress.address?.zip);
// "110001"

console.log(userWithAddress?.address?.city?.name);
// undefined — safely stops at the first missing link`,
    },

    {
      type: 'paragraph',
      title: 'Optional Chaining with Arrays and Function Calls',
      content:
        "Optional chaining isn't limited to plain properties. Use ?.[index] for array or bracket access, and ?.() to call a function only if it actually exists — extremely useful for optional callbacks that a caller may or may not have provided.",
    },

    {
      type: 'code',
      title: 'Array Access and Optional Method Calls',
      language: 'javascript',
      code: `const data = { users: [{ name: 'Aman' }] };

console.log(data.users?.[0]?.name);
// "Aman"

console.log(data.users?.[5]?.name);
// undefined — index 5 doesn't exist, but no error

function runTask(options) {
  // Only call onComplete if it was actually passed in
  options.onComplete?.();
  console.log('Task finished');
}

runTask({}); // no error, even without onComplete
runTask({ onComplete: () => console.log('Callback ran!') });`,
    },

    {
      type: 'paragraph',
      title: 'Nullish Coalescing: ??',
      content:
        "The nullish coalescing operator (??) returns its right-hand side only when the left-hand side is null or undefined — nothing else. This is the key difference from the || operator, which also falls through to its right-hand side for any falsy value, including 0, '', NaN, and false. When you want to default a value only when it's truly missing, ?? is almost always what you actually mean.",
    },

    {
      type: 'code',
      title: '?? vs. || — The Critical Difference',
      language: 'javascript',
      code: `const settings = { volume: 0, name: '', notifications: false };

// || treats 0, "", and false as "missing" too — often not what you want
console.log(settings.volume || 50);
// 50 — WRONG if 0 is a valid, intentional volume level

console.log(settings.name || 'Guest');
// "Guest" — WRONG if an empty string was deliberately set

// ?? only defaults when the value is null or undefined
console.log(settings.volume ?? 50);
// 0 — correctly preserves the real value

console.log(settings.name ?? 'Guest');
// "" — correctly preserves the real value

console.log(settings.notifications ?? true);
// false — correctly preserves the real value

console.log(settings.theme ?? 'light');
// "light" — settings.theme is genuinely undefined, so the default applies`,
    },

    {
      type: 'paragraph',
      title: 'Combining ?. and ??',
      content:
        'Optional chaining and nullish coalescing are frequently used together: ?. safely reaches into a nested structure, and ?? supplies a fallback for the case where that structure (or the final value) turns out to be missing.',
    },

    {
      type: 'code',
      title: 'Using ?. and ?? Together',
      language: 'javascript',
      code: `function getCity(user) {
  return user?.address?.city ?? 'Unknown city';
}

console.log(getCity({ address: { city: 'Delhi' } }));
// "Delhi"

console.log(getCity({ address: {} }));
// "Unknown city"

console.log(getCity(undefined));
// "Unknown city" — no error, even though user itself is missing`,
    },

    {
      type: 'paragraph',
      title: 'Short-Circuiting Behavior',
      content:
        'Once ?. hits a null or undefined value, it stops evaluating immediately — it does not attempt to read further properties or call further methods in the chain. This matters if a later part of the chain includes a function call: that function simply never runs if an earlier link is missing, which can be a useful guard against unnecessary work or side effects.',
    },

    {
      type: 'code',
      title: 'Short-Circuiting in Practice',
      language: 'javascript',
      code: `const api = null;

function logCall() {
  console.log('This should not run');
  return 'result';
}

console.log(api?.fetchData(logCall()));
// undefined — logCall() is never invoked because api is null,
// short-circuiting happens before its arguments are evaluated`,
    },

    {
      type: 'list',
      title: 'When to Reach for Each Operator',
      items: [
        'Use ?. whenever you access a property, index, or call a method that might not exist at any point in the chain.',
        'Use ?? when defaulting a value that could legitimately be 0, an empty string, or false — anything where || would give the wrong answer.',
        'Use || only when any falsy value truly should be treated as "use the default."',
        'Combine ?. and ?? to safely read a nested value and supply a fallback in one expression.',
      ],
    },

    {
      type: 'tip',
      title: 'Prefer ?? by Default for Defaults',
      content:
        "Unless you specifically want 0, '', or false to trigger a fallback, reach for ?? instead of || when providing default values. It's a safer default habit that avoids a whole class of subtle bugs around falsy-but-valid data.",
    },

    {
      type: 'warning',
      title: "You Can't Mix ?? with && or || Directly",
      content:
        'JavaScript disallows combining ?? directly with && or || in the same expression without parentheses, because the intended precedence would be ambiguous — writing a && b ?? c throws a SyntaxError. Wrap one side in parentheses, like (a && b) ?? c, to make the grouping explicit.',
    },
  ],

  quiz: [
    {
      question:
        'What does user?.address?.zip evaluate to if user.address is undefined?',
      options: ['null', 'undefined', 'Throws a TypeError', '""'],
      answer: 1,
    },
    {
      question: 'What does 0 || 50 evaluate to?',
      options: ['0', '50', 'undefined', 'NaN'],
      answer: 1,
    },
    {
      question: 'What does 0 ?? 50 evaluate to?',
      options: ['0', '50', 'undefined', 'NaN'],
      answer: 0,
    },
    {
      question: 'Which syntax safely calls a function only if it exists?',
      options: ['fn??()', 'fn?.()', 'fn!()', 'fn&&()'],
      answer: 1,
    },
    {
      question:
        'What is required to combine ?? with || in the same expression?',
      options: [
        'Nothing, they combine freely',
        'Parentheses to make the grouping explicit',
        'The nullish operator must come first',
        'It is never allowed under any circumstances',
      ],
      answer: 1,
    },
  ],

  previous: 'regular-expressions',
  next: 'generators-iterators',
};
