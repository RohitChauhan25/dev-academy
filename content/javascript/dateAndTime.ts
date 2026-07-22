export const dateAndTime = {
  slug: 'date-and-time',

  title: 'Date and Time',

  description:
    'Learn how to create and work with JavaScript Date objects — reading and setting date components, working with timestamps, formatting, and performing basic date arithmetic and comparisons.',

  level: 'Intermediate',

  readingTime: '16 min',

  lesson: 'Lesson 36 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'Creating Date Objects',
      content:
        'The Date object represents a single point in time, internally stored as the number of milliseconds since January 1, 1970 (the Unix epoch). You can create one in several ways: with no arguments to get the current moment, from a date string, from individual year/month/day/etc. components, or from a timestamp (a raw number of milliseconds).',
    },

    {
      type: 'code',
      title: 'Four Ways to Create a Date',
      language: 'javascript',
      code: `// 1. The current date and time
const now = new Date();
console.log(now);
// e.g. 2026-07-14T10:30:00.000Z

// 2. From a date string
const fromString = new Date('2024-03-15T10:00:00Z');
console.log(fromString);
// 2024-03-15T10:00:00.000Z

// 3. From individual components (year, month, day, hours, minutes, seconds)
const fromParts = new Date(2024, 2, 15, 10, 0, 0);
// Note: month is 0-indexed, so 2 means March
console.log(fromParts);
// 2024-03-15T10:00:00 (in local time)

// 4. From a timestamp (milliseconds since the epoch)
const fromTimestamp = new Date(1710500000000);
console.log(fromTimestamp);
// A specific moment corresponding to that millisecond count`,
    },

    {
      type: 'paragraph',
      title: 'Getter Methods',
      content:
        "Once you have a Date object, a family of getter methods lets you pull out individual components: getFullYear(), getMonth(), getDate() (the day of the month), getDay() (the day of the week), getHours(), getMinutes(), getSeconds(), and getMilliseconds(). The single most common mistake with these is getMonth() — it's zero-indexed, so January is 0 and December is 11.",
    },

    {
      type: 'code',
      title: 'Getter Methods in Action',
      language: 'javascript',
      code: `const date = new Date(2024, 2, 15); // March 15, 2024

console.log(date.getFullYear());
// 2024

console.log(date.getMonth());
// 2 — March, but zero-indexed! Not 3.

console.log(date.getDate());
// 15 — the day of the month

console.log(date.getDay());
// 5 — the day of the week (0 = Sunday, so 5 = Friday)

console.log(date.getHours(), date.getMinutes(), date.getSeconds());
// 0 0 0 — no time components were given, so they default to midnight`,
    },

    {
      type: 'warning',
      title: 'The Zero-Indexed Month Gotcha',
      content:
        "getMonth() (and the month argument to the Date constructor) treats January as 0 and December as 11. This trips up almost everyone at least once — if you need to display a human-readable month number, remember to add 1, and if you're constructing a date for a specific calendar month, subtract 1 from what you'd normally expect.",
    },

    {
      type: 'paragraph',
      title: 'Timestamps: getTime() and Date.now()',
      content:
        'getTime() returns the number of milliseconds since the epoch for a specific Date object, while Date.now() is a static method that returns the current timestamp directly, without needing to create a Date object first. Timestamps are plain numbers, which makes them convenient for storing, comparing, and doing arithmetic on dates.',
    },

    {
      type: 'code',
      title: 'Working with Timestamps',
      language: 'javascript',
      code: `const date = new Date(2024, 2, 15);
console.log(date.getTime());
// e.g. 1710460800000 (exact value depends on timezone)

console.log(Date.now());
// The current timestamp, e.g. 1783xxxxxxxxx

// Measuring elapsed time
const start = Date.now();
for (let i = 0; i < 1e6; i++) {} // some work
const elapsed = Date.now() - start;
console.log(\`Took \${elapsed}ms\`);`,
    },

    {
      type: 'paragraph',
      title: 'Formatting Dates',
      content:
        'For quick, locale-aware formatting, toLocaleDateString() and toLocaleString() are built in and handle a lot of the work for you — they can take a locale string and an options object to control exactly which parts show up and in what style. For anything more involved (custom formats, relative time like "3 days ago", timezone conversions), most real-world projects reach for a dedicated library like date-fns or dayjs rather than hand-rolling the formatting logic.',
    },

    {
      type: 'code',
      title: 'toLocaleDateString() and toLocaleString()',
      language: 'javascript',
      code: `const date = new Date(2024, 2, 15, 14, 30);

console.log(date.toLocaleDateString());
// e.g. "3/15/2024" (format depends on locale/environment)

console.log(date.toLocaleDateString('en-GB'));
// e.g. "15/03/2024"

console.log(date.toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
}));
// e.g. "March 15, 2024, 02:30 PM"`,
    },

    {
      type: 'paragraph',
      title: 'Basic Date Arithmetic',
      content:
        'Dates can be shifted forward or backward either by working with raw milliseconds and constructing a new Date, or by mutating an existing Date object with its "set" methods (like setDate()), which correctly roll over into the next month or year when needed.',
    },

    {
      type: 'code',
      title: 'Adding Days Two Ways',
      language: 'javascript',
      code: `const today = new Date(2024, 2, 15);

// Approach 1: add milliseconds
const msPerDay = 24 * 60 * 60 * 1000;
const inFiveDaysMs = new Date(today.getTime() + 5 * msPerDay);
console.log(inFiveDaysMs.getDate());
// 20

// Approach 2: mutate the date component directly
const inFiveDaysSet = new Date(today);
inFiveDaysSet.setDate(inFiveDaysSet.getDate() + 5);
console.log(inFiveDaysSet.getDate());
// 20

// setDate() correctly rolls over into the next month
const endOfMonth = new Date(2024, 2, 30);
endOfMonth.setDate(endOfMonth.getDate() + 5);
console.log(endOfMonth.getMonth(), endOfMonth.getDate());
// 3 4 — rolled over from March 30 + 5 days into April 4`,
    },

    {
      type: 'paragraph',
      title: 'Comparing Dates',
      content:
        'Date objects can be compared directly with <, >, <=, and >= — JavaScript converts them to their timestamp value for the comparison. Checking for exact equality is different, though: two separate Date objects representing the same moment are not === equal, since that compares object identity, not the values they hold. Compare their getTime() results instead.',
    },

    {
      type: 'code',
      title: 'Comparing Two Dates',
      language: 'javascript',
      code: `const earlier = new Date(2024, 0, 1);
const later = new Date(2024, 5, 1);

console.log(earlier < later);
// true

console.log(earlier > later);
// false

const sameMomentA = new Date(2024, 0, 1);
const sameMomentB = new Date(2024, 0, 1);

console.log(sameMomentA === sameMomentB);
// false — different object references

console.log(sameMomentA.getTime() === sameMomentB.getTime());
// true — same underlying timestamp`,
    },

    {
      type: 'table',
      title: 'Common Date Methods',
      headers: ['Method', 'Returns'],
      rows: [
        ['getFullYear()', 'The four-digit year'],
        ['getMonth()', 'The month, 0 (January) through 11 (December)'],
        ['getDate()', 'The day of the month, 1 through 31'],
        ['getDay()', 'The day of the week, 0 (Sunday) through 6 (Saturday)'],
        [
          'getHours() / getMinutes() / getSeconds()',
          'The time-of-day components',
        ],
        ['getTime() / Date.now()', 'Milliseconds since the epoch'],
      ],
    },

    {
      type: 'tip',
      title: 'Reach for a Library for Real Formatting Needs',
      content:
        'Native Date methods are fine for basic cases, but formatting edge cases, timezone handling, relative time ("2 hours ago"), and date arithmetic across months and years get tricky fast. Libraries like date-fns and dayjs handle these details well and are the standard choice in most production codebases.',
    },

    {
      type: 'note',
      title: 'Summary',
      content:
        'A Date object is built from a string, individual components, a timestamp, or the current moment. Getter methods read out its parts (watch out for the zero-indexed month), getTime() and Date.now() give you raw millisecond timestamps for comparison and arithmetic, and mutating methods like setDate() handle calendar rollovers correctly when you shift a date forward or backward.',
    },
  ],

  quiz: [
    {
      question: 'What does getMonth() return for a date in March?',
      options: ['3', '2', '"March"', '03'],
      answer: 1,
    },
    {
      question: 'What does Date.now() return?',
      options: [
        'A formatted date string',
        'The current timestamp in milliseconds since the epoch',
        'A new Date object',
        'The current year only',
      ],
      answer: 1,
    },
    {
      question:
        'Why might sameMomentA === sameMomentB be false for two Date objects representing the same time?',
      options: [
        '=== always returns false for dates',
        '=== compares object references, not values',
        'Dates cannot be compared with ===',
        'The timestamps are actually different',
      ],
      answer: 1,
    },
    {
      question:
        'Which method correctly handles rolling over into the next month when adding days?',
      options: ['getDate()', 'getMonth()', 'setDate()', 'getTime()'],
      answer: 2,
    },
    {
      question:
        'What is commonly recommended for complex date formatting needs?',
      options: [
        'Always use toLocaleDateString() with no arguments',
        'Manually build format strings with getMonth() and getDate()',
        'Use a dedicated library like date-fns or dayjs',
        'Avoid formatting dates altogether',
      ],
      answer: 2,
    },
  ],

  previous: 'generators-iterators',
  next: 'dom',
};
