export const templateLiterals = {
  slug: 'template-literals',

  title: 'Template Literals',

  description:
    'Learn how template literals use backticks and ${} to make string interpolation, multi-line strings, and tagged templates far more readable than old-style string concatenation.',

  level: 'Beginner',

  readingTime: '13 min',

  lesson: 'Lesson 20 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'Introduction',
      content:
        "Template literals, introduced in ES6, are strings wrapped in backticks (`) instead of single or double quotes. On their own, a backtick string behaves just like any other string, but backticks unlock two features regular quotes don't support: embedding expressions directly inside the string with ${}, and writing strings that span multiple lines without any special escape characters. Together, these make template literals the default choice for building strings in modern JavaScript.",
    },

    {
      type: 'code',
      title: 'Backtick Syntax Basics',
      language: 'javascript',
      code: `const singleQuoted = 'Hello';
const doubleQuoted = "Hello";
const templateLiteral = \`Hello\`;

console.log(singleQuoted === templateLiteral);
// true — as plain strings, they're identical

console.log(typeof templateLiteral);
// "string" — template literals produce ordinary strings`,
    },

    {
      type: 'paragraph',
      title: 'String Interpolation with ${}',
      content:
        'The real power of template literals is ${}. Anything placed between the ${ and the matching } is evaluated and its result is converted to a string and inserted right there, in place. This replaces the old pattern of breaking a string apart with + to splice in variables, which was easy to get wrong and hard to read once more than one or two variables were involved.',
    },

    {
      type: 'code',
      title: 'String Interpolation Example',
      language: 'javascript',
      code: `const name = "Sanya";
const age = 27;

const oldWay = "Hello, my name is " + name + " and I am " + age + " years old.";
const newWay = \`Hello, my name is \${name} and I am \${age} years old.\`;

console.log(oldWay);
// "Hello, my name is Sanya and I am 27 years old."

console.log(newWay);
// "Hello, my name is Sanya and I am 27 years old."

console.log(oldWay === newWay);
// true — same resulting string, far easier to write and read on the right`,
    },

    {
      type: 'paragraph',
      title: 'Multi-line Strings',
      content:
        "Regular single- and double-quoted strings can't span multiple lines without an escape sequence like \\n or awkward string concatenation. Template literals can contain actual line breaks — pressing Enter inside the backticks and continuing on the next line produces a real newline in the resulting string, no escaping required.",
    },

    {
      type: 'code',
      title: 'Multi-line Strings Example',
      language: 'javascript',
      code: `const oldMultiLine = "Line one\\n" + "Line two\\n" + "Line three";

console.log(oldMultiLine);
// Line one
// Line two
// Line three

const newMultiLine = \`Line one
Line two
Line three\`;

console.log(newMultiLine);
// Line one
// Line two
// Line three

console.log(oldMultiLine === newMultiLine);
// true`,
    },

    {
      type: 'paragraph',
      title: 'Expressions Inside Interpolation',
      content:
        "The code inside ${} isn't limited to a bare variable name — it can be any valid JavaScript expression: arithmetic, function calls, ternaries, property access, or even method chains. The expression is evaluated first, and only its final result is inserted into the string.",
    },

    {
      type: 'code',
      title: 'Expressions Inside ${} Example',
      language: 'javascript',
      code: `const price = 250;
const quantity = 3;

console.log(\`Total: ₹\${price * quantity}\`);
// "Total: ₹750"

function shout(text) {
  return text.toUpperCase() + "!";
}

console.log(\`She said: \${shout("hello")}\`);
// "She said: HELLO!"

const stock = 0;
console.log(\`Status: \${stock > 0 ? "In Stock" : "Out of Stock"}\`);
// "Status: Out of Stock"`,
    },

    {
      type: 'paragraph',
      title: 'Nesting Template Literals',
      content:
        "Because ${} accepts any expression, and a template literal is itself an expression, you can nest one template literal inside the ${} of another. This is useful for conditional pieces of a larger string, though it's worth keeping an eye on readability — deeply nested template literals can get hard to follow, so a helper variable is often clearer once nesting gets more than one level deep.",
    },

    {
      type: 'code',
      title: 'Nested Template Literals Example',
      language: 'javascript',
      code: `const user = { name: "Karan", isPremium: true };

const message = \`Welcome \${user.name}\${user.isPremium ? \` (\${"Premium Member"})\` : ""}!\`;

console.log(message);
// "Welcome Karan (Premium Member)!"

const user2 = { name: "Meena", isPremium: false };
const message2 = \`Welcome \${user2.name}\${user2.isPremium ? \` (\${"Premium Member"})\` : ""}!\`;

console.log(message2);
// "Welcome Meena!"`,
    },

    {
      type: 'paragraph',
      title: 'Tagged Templates',
      content:
        "A less commonly used but powerful feature is tagged templates: placing a function name directly before a template literal, with no parentheses or space, calls that function with the template's pieces broken apart — an array of the literal string segments, followed by the evaluated values from each ${} as separate arguments. This lets the function process and reassemble the string however it wants, which is how libraries like styled-components parse CSS out of a template literal.",
    },

    {
      type: 'code',
      title: 'A Basic Tagged Template Example',
      language: 'javascript',
      code: `function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] !== undefined ? \`**\${values[i]}**\` : "";
    return result + str + value;
  }, "");
}

const item = "keyboard";
const price = 2499;

const output = highlight\`The \${item} costs ₹\${price} today.\`;

console.log(output);
// "The **keyboard** costs ₹**2499** today."

// "strings" here is ["The ", " costs ₹", " today."]
// "values" here is ["keyboard", 2499]`,
    },

    {
      type: 'table',
      title: 'Template Literals vs. String Concatenation',
      headers: ['Aspect', 'Old Concatenation (+)', 'Template Literals'],
      rows: [
        ['Inserting variables', '"Hi " + name + "!"', '`Hi ${name}!`'],
        [
          'Multi-line strings',
          'Requires \\n or joining lines',
          'Just press Enter inside backticks',
        ],
        [
          'Expressions',
          'Must break out of the string',
          'Write directly inside ${}',
        ],
        [
          'Readability with many variables',
          'Gets cluttered quickly',
          'Stays readable',
        ],
        [
          'Custom processing',
          'Not directly supported',
          'Supported via tagged templates',
        ],
      ],
    },

    {
      type: 'tip',
      title: 'Prefer Template Literals by Default',
      content:
        'In modern JavaScript codebases, template literals are generally preferred over string concatenation any time a string includes a variable, an expression, or spans multiple lines — even for something as simple as a single interpolated value. Plain quotes are still perfectly fine for strings with no interpolation or line breaks at all.',
    },

    {
      type: 'warning',
      title: 'Escaping Backticks and ${ Inside a Template Literal',
      content:
        'If you actually need a literal backtick or a literal ${ sequence inside a template literal, you must escape it with a backslash (\\` or \\${), otherwise JavaScript will try to interpret it as the end of the string or the start of an interpolation. This is easy to forget when generating template-literal-like output (for example, code samples) from inside another template literal.',
    },
  ],

  quiz: [
    {
      question: 'Which character is used to delimit a template literal?',
      options: [
        "Single quote (')",
        'Double quote (")',
        'Backtick (`)',
        'Backslash (\\)',
      ],
      answer: 2,
    },
    {
      question: 'What does `Total: ${2 + 3}` evaluate to?',
      options: [
        '"Total: 2 + 3"',
        '"Total: ${2 + 3}"',
        '"Total: 5"',
        'An error is thrown',
      ],
      answer: 2,
    },
    {
      question:
        'How do you create a multi-line string with a template literal?',
      options: [
        'Use the \\n escape sequence only',
        'Concatenate multiple strings with +',
        'Press Enter inside the backticks to include a real line break',
        'Template literals cannot span multiple lines',
      ],
      answer: 2,
    },
    {
      question:
        'In a tagged template like tag`Hi ${name}`, what is the first argument the tag function receives?',
      options: [
        'The value of name',
        'An array of the literal string segments',
        'The entire template literal as one string',
        'undefined',
      ],
      answer: 1,
    },
    {
      question:
        'What must you do to include a literal backtick character inside a template literal?',
      options: [
        'Nothing special, it works as-is',
        'Wrap it in ${}',
        'Escape it with a backslash, as \\`',
        'It is not possible to include a backtick in a template literal',
      ],
      answer: 2,
    },
  ],

  previous: 'rest-parameters',
  next: 'closures',
};
