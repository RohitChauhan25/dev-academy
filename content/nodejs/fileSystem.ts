import { Tutorial } from '@/app/types/tutorial';

export const fileSystem: Tutorial = {
  slug: 'file-system',

  title: 'The File System (fs) Module',

  description: 'Read, write, and manage files with Node.js\'s built-in fs module.',

  level: 'Beginner',

  readingTime: '14 min',

  lesson: 'Lesson 7 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'What fs Provides',
      content:
        'The fs module gives Node.js scripts direct access to the file system — something browser JavaScript can\'t do for security reasons. It offers callback-based, promise-based, and synchronous versions of most operations.',
    },

    {
      type: 'code',
      title: 'Reading a File (Promises)',
      language: 'javascript',
      code: `import { readFile } from 'node:fs/promises';

const content = await readFile('notes.txt', 'utf-8');
console.log(content);`,
    },

    {
      type: 'code',
      title: 'Writing a File',
      language: 'javascript',
      code: `import { writeFile } from 'node:fs/promises';

await writeFile('output.txt', 'Hello, file system!');`,
    },

    {
      type: 'table',
      title: 'Three API Styles',
      headers: ['Style', 'Example', 'When to Use'],
      rows: [
        ['Promise-based', 'fs/promises → await readFile()', 'Preferred in modern async code'],
        ['Callback-based', 'fs.readFile(path, cb)', 'Older code, or APIs that require callbacks'],
        ['Synchronous', 'fs.readFileSync(path)', 'Startup scripts, CLIs — blocks the event loop, use sparingly'],
      ],
    },

    {
      type: 'code',
      title: 'Common File Operations',
      language: 'javascript',
      code: `import { mkdir, unlink, readdir, stat } from 'node:fs/promises';

await mkdir('uploads', { recursive: true });
const files = await readdir('uploads');
const info = await stat('uploads/photo.jpg');
await unlink('uploads/old-file.txt');`,
    },

    {
      type: 'warning',
      title: 'Avoid Synchronous fs Calls in a Server',
      content:
        'readFileSync() blocks the entire event loop until the disk read completes — fine for a one-off CLI script, but disastrous in a running web server, where it would freeze every other in-flight request.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Default to the fs/promises API with async/await in application code — it reads cleanly and never blocks the event loop, unlike the synchronous variants.',
    },
  ],

  quiz: [
    {
      question: 'Why can\'t browser JavaScript directly read arbitrary files from disk, but Node.js can?',
      options: [
        'Browsers do not support JavaScript file operations at all',
        'Browser JavaScript is sandboxed for security; Node.js runs with direct system access',
        'There is no real difference',
        'Only Chrome supports file access',
      ],
      answer: 1,
    },
    {
      question: 'Why should readFileSync() be avoided in a running web server?',
      options: [
        'It does not exist in Node.js',
        'It blocks the event loop, freezing every other in-flight request until it finishes',
        'It only works with .txt files',
        'It is deprecated',
      ],
      answer: 1,
    },
    {
      question: 'What does fs/promises provide?',
      options: ['A synchronous-only API', 'A promise-based API usable with async/await', 'Only directory operations', 'A replacement for npm'],
      answer: 1,
    },
  ],

  previous: 'modules-commonjs-vs-esm',
  next: 'path-module',
};
