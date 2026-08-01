import { Tutorial } from '@/app/types/tutorial';

export const enums: Tutorial = {
  slug: 'enums',

  title: 'Enums',

  description:
    'Learn how to define a set of named constants using TypeScript enums, and when a union of literals might be a better fit.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 5 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is an Enum?',
      content:
        'An enum (enumeration) defines a set of named constants, making code more readable than scattering raw numbers or strings throughout a codebase.',
    },

    {
      type: 'code',
      title: 'A Numeric Enum',
      language: 'typescript',
      code: `enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
console.log(move); // 0 — members auto-increment from 0 by default`,
    },

    {
      type: 'paragraph',
      title: 'String Enums',
      content:
        'String enums require every member to have an explicit value, and are generally easier to debug since logging a member shows a meaningful string instead of a number.',
    },

    {
      type: 'code',
      title: 'A String Enum',
      language: 'typescript',
      code: `enum Status {
  Pending = "PENDING",
  Active = "ACTIVE",
  Completed = "COMPLETED",
}

function printStatus(status: Status) {
  console.log(status);
}

printStatus(Status.Active); // "ACTIVE"`,
    },

    {
      type: 'paragraph',
      title: 'Custom Numeric Values',
      content:
        'Numeric enum members can start at a custom value, with subsequent members auto-incrementing from there.',
    },

    {
      type: 'code',
      title: 'Custom Starting Value',
      language: 'typescript',
      code: `enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  NotFound = 404,
}`,
    },

    {
      type: 'table',
      title: 'Numeric vs String Enums',
      headers: ['', 'Numeric Enum', 'String Enum'],
      rows: [
        ['Default values', 'Auto-increment from 0', 'None — every member needs a value'],
        ['Debug readability', 'Logs as a number', 'Logs as a readable string'],
        ['Reverse mapping', 'Yes (number → name)', 'No'],
      ],
    },

    {
      type: 'paragraph',
      title: 'An Alternative: Union of String Literals',
      content:
        'Many teams prefer a union of string literals over an enum — it requires no extra runtime code, works naturally with plain objects and JSON, and is simpler to reason about.',
    },

    {
      type: 'code',
      title: 'Union of Literals as an Alternative',
      language: 'typescript',
      code: `type Status = "PENDING" | "ACTIVE" | "COMPLETED";

function printStatus(status: Status) {
  console.log(status);
}

printStatus("ACTIVE"); // valid
printStatus("DONE");   // Error: not assignable to type 'Status'`,
    },

    {
      type: 'note',
      title: 'Enums Exist at Runtime',
      content:
        'Unlike most TypeScript type constructs, a regular enum compiles into a real JavaScript object that exists at runtime — it isn’t erased like interfaces and type aliases are.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for a union of string literals for simple, closed sets of values — reserve enum for cases where you specifically want the extra runtime object or reverse lookup behavior.',
    },
  ],

  quiz: [
    {
      question: 'What value do numeric enum members get by default?',
      options: ['undefined', 'Auto-incrementing numbers starting at 0', 'Random numbers', 'null'],
      answer: 1,
    },
    {
      question: 'Do string enum members get default values?',
      options: ['Yes, auto-generated', 'No, every member must have an explicit value', 'Only the first one needs one', 'Yes, they default to their name'],
      answer: 1,
    },
    {
      question: 'Unlike interfaces, what happens to a regular enum at compile time?',
      options: [
        'It’s completely erased like an interface',
        'It compiles into a real JavaScript object that exists at runtime',
        'It becomes a comment',
        'It’s converted into a type alias',
      ],
      answer: 1,
    },
  ],

  previous: 'arrays-and-tuples',
  next: 'any-unknown-never',
};
