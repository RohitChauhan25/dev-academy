import { Tutorial } from '@/app/types/tutorial';

export const pathModule: Tutorial = {
  slug: 'path-module',

  title: 'The path Module',

  description: 'Build and manipulate file paths correctly across operating systems.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 8 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Not Just Use Strings?',
      content:
        'Windows uses backslashes (C:\\Users\\...) while macOS/Linux use forward slashes (/home/user/...). Manually concatenating path strings with + breaks the moment your code runs on a different OS — the path module abstracts this away.',
    },

    {
      type: 'code',
      title: 'Joining Paths Safely',
      language: 'javascript',
      code: `import path from 'node:path';

const filePath = path.join('uploads', 'images', 'photo.jpg');
// "uploads/images/photo.jpg" on macOS/Linux
// "uploads\\images\\photo.jpg" on Windows`,
    },

    {
      type: 'table',
      title: 'Common path Methods',
      headers: ['Method', 'Purpose'],
      rows: [
        ['path.join(...)', 'Combine path segments using the correct OS separator'],
        ['path.resolve(...)', 'Resolve segments into an absolute path'],
        ['path.basename(p)', 'The final segment (filename) of a path'],
        ['path.extname(p)', 'The file extension'],
        ['path.dirname(p)', 'The containing directory'],
      ],
    },

    {
      type: 'code',
      title: 'Extracting Path Information',
      language: 'javascript',
      code: `import path from 'node:path';

const filePath = '/app/uploads/photo.jpg';

path.basename(filePath); // "photo.jpg"
path.extname(filePath);  // ".jpg"
path.dirname(filePath);  // "/app/uploads"`,
    },

    {
      type: 'code',
      title: '__dirname Equivalent in ES Modules',
      language: 'javascript',
      code: `import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// __dirname and __filename exist automatically in CommonJS,
// but must be derived manually in ES Modules`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Never manually concatenate path segments with + or template literals — always use path.join() or path.resolve(), which handle separators and normalization correctly on every operating system.',
    },
  ],

  quiz: [
    {
      question: 'Why does the path module exist instead of manually building paths with string concatenation?',
      options: [
        'It is faster only',
        'Different operating systems use different path separators, and path handles this correctly',
        'It has no real purpose',
        'It only matters for URLs',
      ],
      answer: 1,
    },
    {
      question: 'What does path.extname("photo.jpg") return?',
      options: ['"photo"', '".jpg"', '"jpg"', '"photo.jpg"'],
      answer: 1,
    },
    {
      question: 'Are __dirname and __filename automatically available in ES Modules the same way as CommonJS?',
      options: ['Yes, identically', 'No, they must be derived manually using import.meta.url', 'Only on Linux', 'Only in TypeScript'],
      answer: 1,
    },
  ],

  previous: 'file-system',
  next: 'os-module',
};
