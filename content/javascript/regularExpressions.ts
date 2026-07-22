export const regularExpressions = {
  slug: 'regular-expressions',

  title: 'Regular Expressions',

  description:
    'Learn how to build and use regular expressions in JavaScript — patterns, flags, capture groups — and how to apply them with test(), exec(), match(), replace(), and split().',

  level: 'Advanced',

  readingTime: '20 min',

  lesson: 'Lesson 43 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Regular Expression?',
      content:
        'A regular expression (regex) is a pattern used to match, search, and manipulate text. Instead of manually checking characters one by one, you describe a pattern once — "a digit followed by three letters," for example — and let the regex engine find every place that pattern occurs. Regexes are indispensable for validating input, extracting pieces of a string, and doing search-and-replace far more powerful than a plain string match.',
    },

    {
      type: 'paragraph',
      title: 'Creating a Regular Expression',
      content:
        "There are two ways to create a regex: the literal syntax, /pattern/flags, and the RegExp constructor, new RegExp('pattern', 'flags'). The literal form is more common and slightly faster since it's compiled when the script loads, but the constructor form is necessary when you need to build a pattern dynamically from a string, such as one built from user input.",
    },

    {
      type: 'code',
      title: 'Two Ways to Create a Regex',
      language: 'javascript',
      code: `// Literal syntax
const literalRegex = /hello/i;

// Constructor syntax
const constructorRegex = new RegExp('hello', 'i');

console.log(literalRegex.test('Hello World'));
// true

console.log(constructorRegex.test('Hello World'));
// true

// Constructor form is useful when the pattern is dynamic
const word = 'world';
const dynamicRegex = new RegExp(word, 'i');
console.log(dynamicRegex.test('Hello World'));
// true`,
    },

    {
      type: 'paragraph',
      title: 'Flags',
      content:
        "Flags change how a regex behaves and go after the closing slash. The three you'll use most: g (global) finds all matches instead of stopping at the first one, i (case-insensitive) ignores letter casing, and m (multiline) makes ^ and $ match the start/end of each line rather than only the start/end of the whole string.",
    },

    {
      type: 'table',
      title: 'Common Flags',
      headers: ['Flag', 'Name', 'Effect'],
      rows: [
        ['g', 'global', 'Find all matches, not just the first'],
        ['i', 'case-insensitive', 'Ignore uppercase/lowercase differences'],
        ['m', 'multiline', '^ and $ match the start/end of each line'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Character Classes and Quantifiers',
      content:
        'Character classes match categories of characters: \\d matches any digit, \\w matches any word character (letters, digits, underscore), and \\s matches any whitespace character. Quantifiers control how many times something can repeat: * means zero or more, + means one or more, ? means zero or one, and {n,m} means between n and m times. Anchors ^ and $ pin a match to the start or end of the string.',
    },

    {
      type: 'code',
      title: 'Character Classes and Quantifiers',
      language: 'javascript',
      code: `console.log(/\\d+/.test('Order #482'));
// true — one or more digits found

console.log(/^\\w+$/.test('username123'));
// true — the entire string is word characters

console.log(/^\\s*$/.test('   '));
// true — the string is all whitespace (or empty)

console.log(/colou?r/.test('color'));
// true — the "u" is optional
console.log(/colou?r/.test('colour'));
// true

console.log(/^\\d{3}-\\d{4}$/.test('555-1234'));
// true — exactly 3 digits, a dash, exactly 4 digits`,
    },

    {
      type: 'paragraph',
      title: 'test() and exec() on RegExp',
      content:
        'test() returns a simple boolean — did the pattern match anywhere in the string? exec() goes further: it returns an array with details about the match (the matched text, capture groups, and the index it was found at), or null if there was no match. With the g flag, calling exec() repeatedly on the same regex advances through successive matches each time.',
    },

    {
      type: 'code',
      title: 'test() vs. exec()',
      language: 'javascript',
      code: `const pattern = /\\d+/;

console.log(pattern.test('I have 3 cats and 12 dogs'));
// true

const result = pattern.exec('I have 3 cats and 12 dogs');
console.log(result[0], result.index);
// "3" 7

// With the g flag, exec() advances on each call
const globalPattern = /\\d+/g;
let match;
while ((match = globalPattern.exec('3 cats, 12 dogs, 100 fish'))) {
  console.log(match[0]);
}
// "3"
// "12"
// "100"`,
    },

    {
      type: 'paragraph',
      title: 'String Methods That Take a Regex',
      content:
        'Strings have several methods that accept a regex: match() returns matches (all of them, as an array of strings, when the g flag is used), matchAll() returns an iterator of full match objects including capture groups, replace() swaps the first match (or all matches with the g flag) for a replacement, replaceAll() requires the g flag and replaces every match, and split() divides a string wherever the pattern matches.',
    },

    {
      type: 'code',
      title: 'match(), replace(), and split()',
      language: 'javascript',
      code: `const text = 'Contact: 555-1234 or 555-5678';

console.log(text.match(/\\d{3}-\\d{4}/g));
// ["555-1234", "555-5678"]

console.log(text.replace(/\\d{3}-\\d{4}/g, 'XXX-XXXX'));
// "Contact: XXX-XXXX or XXX-XXXX"

console.log('a1b2c3'.split(/\\d/));
// ["a", "b", "c", ""]

for (const match of text.matchAll(/\\d{3}-\\d{4}/g)) {
  console.log(match[0], match.index);
}
// "555-1234" 9
// "555-5678" 22`,
    },

    {
      type: 'paragraph',
      title: 'Capture Groups',
      content:
        'Parentheses inside a pattern create a capture group — a piece of the match you can pull out separately. Groups are numbered by their order of opening parenthesis, accessible on the result of exec() or match() by index. Named groups, written as (?<name>...), let you refer to a captured piece by name instead of a numeric index, which makes patterns with several groups much easier to read.',
    },

    {
      type: 'code',
      title: 'Capture Groups, Including Named Groups',
      language: 'javascript',
      code: `const dateRegex = /(\\d{4})-(\\d{2})-(\\d{2})/;
const dateMatch = '2024-03-15'.match(dateRegex);
console.log(dateMatch[1], dateMatch[2], dateMatch[3]);
// "2024" "03" "15"

// Named groups
const namedDateRegex = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;
const namedMatch = '2024-03-15'.match(namedDateRegex);
console.log(namedMatch.groups.year, namedMatch.groups.month, namedMatch.groups.day);
// "2024" "03" "15"

// Capture groups also work inside replace()
console.log('2024-03-15'.replace(namedDateRegex, '$<day>/$<month>/$<year>'));
// "15/03/2024"`,
    },

    {
      type: 'paragraph',
      title: 'Practical Example: Loose Email Validation',
      content:
        'Fully validating an email address with a regex is notoriously hard (and arguably not worth doing precisely), but a loose check is a common real-world need — enough to catch obvious typos before sending a request to the server.',
    },

    {
      type: 'code',
      title: 'A Loose Email Check',
      language: 'javascript',
      code: `const emailRegex = /^[\\w.+-]+@[\\w-]+\\.[a-zA-Z]{2,}$/;

console.log(emailRegex.test('nikhil.mishra@example.com'));
// true

console.log(emailRegex.test('not-an-email'));
// false

console.log(emailRegex.test('missing@dot'));
// false — no top-level domain`,
    },

    {
      type: 'list',
      title: 'Quick Reference',
      items: [
        '\\d — a digit, \\w — a word character, \\s — whitespace',
        '* — zero or more, + — one or more, ? — zero or one, {n,m} — between n and m',
        '^ — start of string (or line, with m), $ — end of string (or line, with m)',
        'test() → boolean, exec() → match details or null',
        'match()/matchAll()/replace()/replaceAll()/split() — string methods that accept a regex',
      ],
    },

    {
      type: 'tip',
      title: 'Use Named Groups for Readability',
      content:
        'When a pattern has more than one or two capture groups, named groups (?<name>...) make the code that reads them far easier to follow than tracking numeric indices like match[1], match[2], and match[3].',
    },

    {
      type: 'warning',
      title: "Don't Forget the g Flag",
      content:
        'Forgetting the g flag is a common source of bugs: match() without it returns only the first match (with extra details) instead of an array of all matches, and replace() without it only replaces the first occurrence. replaceAll() will throw a TypeError if you pass it a regex without the g flag.',
    },
  ],

  quiz: [
    {
      question:
        'Which flag makes a regex find all matches instead of stopping at the first one?',
      options: ['i', 'm', 'g', 's'],
      answer: 2,
    },
    {
      question: 'What does \\d match?',
      options: [
        'Any whitespace character',
        'Any digit',
        'Any word character',
        'A literal period',
      ],
      answer: 1,
    },
    {
      question: 'What does test() return?',
      options: [
        'An array of matches',
        'A boolean',
        'The matched string',
        'null or a match object',
      ],
      answer: 1,
    },
    {
      question:
        'How do you access a named capture group called "year" from a match result?',
      options: [
        'match.year',
        'match[0].year',
        'match.groups.year',
        'match.get("year")',
      ],
      answer: 2,
    },
    {
      question:
        'What happens if you call replaceAll() with a regex that lacks the g flag?',
      options: [
        'It replaces only the first match',
        'It replaces all matches anyway',
        'It throws a TypeError',
        'It returns the original string unchanged',
      ],
      answer: 2,
    },
  ],

  previous: 'json',
  next: 'optional-chaining-nullish-coalescing',
};
