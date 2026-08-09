import { Tutorial } from '@/app/types/tutorial';

export const streams: Tutorial = {
  slug: 'streams',

  title: 'Streams',

  description: 'Process data piece by piece instead of loading it all into memory at once.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 11 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Streams Exist',
      content:
        'Reading a 2GB file with readFile() loads the entire file into memory before you can do anything with it. A stream instead processes data in small chunks as they arrive, keeping memory usage low regardless of the total size.',
    },

    {
      type: 'table',
      title: 'Four Types of Streams',
      headers: ['Type', 'Example'],
      rows: [
        ['Readable', 'Reading a file, an incoming HTTP request body'],
        ['Writable', 'Writing to a file, an HTTP response'],
        ['Duplex', 'Both readable and writable, like a TCP socket'],
        ['Transform', 'A duplex stream that modifies data as it passes through, like gzip compression'],
      ],
    },

    {
      type: 'code',
      title: 'Reading a File as a Stream',
      language: 'javascript',
      code: `import { createReadStream } from 'node:fs';

const stream = createReadStream('large-file.txt', { encoding: 'utf-8' });

stream.on('data', (chunk) => {
  console.log('Received chunk:', chunk.length, 'characters');
});

stream.on('end', () => console.log('Done reading'));`,
    },

    {
      type: 'code',
      title: 'Piping Streams Together',
      language: 'javascript',
      code: `import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

createReadStream('input.txt')
  .pipe(createGzip())
  .pipe(createWriteStream('output.txt.gz'));
// Reads, compresses, and writes — all in small chunks, streamed through`,
    },

    {
      type: 'paragraph',
      title: 'Backpressure',
      content:
        'If a writable stream can\'t keep up with an incoming readable stream (like a slow network connection receiving a fast file read), .pipe() automatically pauses the readable side until the writable side catches up — this is called backpressure, and it prevents memory from ballooning unbounded.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use streams (and .pipe()) for anything involving large files or network data — uploads, downloads, video, log processing — rather than loading everything into memory with the non-streaming fs methods.',
    },
  ],

  quiz: [
    {
      question: 'What advantage do streams have over reading an entire file into memory at once?',
      options: [
        'They are always faster for small files',
        'They process data in chunks, keeping memory usage low regardless of file size',
        'They automatically compress data',
        'They eliminate the need for error handling',
      ],
      answer: 1,
    },
    {
      question: 'What does .pipe() do?',
      options: ['Deletes a stream', 'Connects a readable stream\'s output directly into a writable stream\'s input', 'Converts a stream to a string', 'Pauses a stream forever'],
      answer: 1,
    },
    {
      question: 'What is backpressure in the context of streams?',
      options: [
        'An error state that always crashes the process',
        'An automatic mechanism that pauses a fast readable stream until a slower writable stream catches up',
        'A type of compression',
        'A way to skip chunks of data',
      ],
      answer: 1,
    },
  ],

  previous: 'events-and-eventemitter',
  next: 'buffers',
};
