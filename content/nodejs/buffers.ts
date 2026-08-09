import { Tutorial } from '@/app/types/tutorial';

export const buffers: Tutorial = {
  slug: 'buffers',

  title: 'Buffers',

  description: 'Work with raw binary data directly — the type streams and the file system deal in under the hood.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 12 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'What a Buffer Is',
      content:
        'A Buffer represents a fixed-length chunk of raw binary data, similar to an array of bytes. It exists because JavaScript strings are built for text, not binary data — reading an image file or a network packet needs something else.',
    },

    {
      type: 'code',
      title: 'Creating Buffers',
      language: 'javascript',
      code: `// From a string
const buf1 = Buffer.from('Hello', 'utf-8');

// A pre-allocated, zero-filled buffer of 10 bytes
const buf2 = Buffer.alloc(10);

console.log(buf1);
// <Buffer 48 65 6c 6c 6f>  (hex byte values)`,
    },

    {
      type: 'code',
      title: 'Converting Between Buffers and Strings',
      language: 'javascript',
      code: `const buf = Buffer.from('café', 'utf-8');

console.log(buf.length);          // 5 (é takes 2 bytes in UTF-8)
console.log(buf.toString('utf-8')); // "café"`,
    },

    {
      type: 'table',
      title: 'Where Buffers Show Up',
      headers: ['Context', 'Example'],
      rows: [
        ['File system', 'fs.readFile() without an encoding returns a Buffer'],
        ['Streams', 'Readable streams emit Buffer chunks by default'],
        ['Networking', 'Raw TCP/HTTP data arrives as Buffers'],
        ['Cryptography', 'Hashes and encrypted data are commonly Buffers'],
      ],
    },

    {
      type: 'note',
      title: 'Buffer Length is Bytes, Not Characters',
      content:
        'buf.length reports the number of bytes, not characters — a string with multi-byte UTF-8 characters (like emoji or accented letters) will have a buffer length larger than the visible character count.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'You rarely need to create Buffers manually in everyday application code — most high-level APIs (fs.readFile with an encoding, HTTP body parsers) hand you a string or parsed object already. Reach for Buffer directly when working with genuinely binary data.',
    },
  ],

  quiz: [
    {
      question: 'What does a Buffer represent?',
      options: ['A JavaScript object', 'A fixed-length chunk of raw binary data', 'A type of Promise', 'A CSS style'],
      answer: 1,
    },
    {
      question: 'Does Buffer.length measure bytes or characters?',
      options: ['Characters', 'Bytes', 'Always the same thing', 'Neither'],
      answer: 1,
    },
    {
      question: 'What type of data do readable streams emit by default?',
      options: ['Strings', 'Buffer chunks', 'Arrays', 'JSON objects'],
      answer: 1,
    },
  ],

  previous: 'streams',
  next: 'event-loop-in-node',
};
