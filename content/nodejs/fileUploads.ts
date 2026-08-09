import { Tutorial } from '@/app/types/tutorial';

export const fileUploads: Tutorial = {
  slug: 'file-uploads',

  title: 'File Uploads',

  description: 'Handle file uploads in Express with multer, a middleware for parsing multipart form data.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 26 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Why express.json() Doesn\'t Handle Files',
      content:
        'File uploads use a different request encoding — multipart/form-data — not JSON. express.json() only parses JSON bodies, so a separate middleware like multer is needed to parse file uploads.',
    },

    {
      type: 'code',
      title: 'Installing and Setting Up multer',
      language: 'bash',
      code: `npm install multer`,
    },

    {
      type: 'code',
      title: 'Handling a Single File Upload',
      language: 'javascript',
      code: `import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

app.post('/api/avatar', upload.single('avatar'), (req, res) => {
  console.log(req.file); // { filename, path, size, mimetype, ... }
  res.json({ uploaded: req.file.filename });
});`,
    },

    {
      type: 'code',
      title: 'Handling Multiple Files',
      language: 'javascript',
      code: `app.post('/api/gallery', upload.array('photos', 10), (req, res) => {
  const filenames = req.files.map((f) => f.filename);
  res.json({ uploaded: filenames });
});`,
    },

    {
      type: 'table',
      title: 'Common multer Options',
      headers: ['Option', 'Purpose'],
      rows: [
        ['dest', 'Local folder to save uploaded files'],
        ['limits: { fileSize }', 'Reject files above a size limit'],
        ['fileFilter', 'Reject files based on type (e.g. only images)'],
        ['storage: multer.memoryStorage()', 'Keep files in memory instead of disk, e.g. to upload directly to cloud storage'],
      ],
    },

    {
      type: 'warning',
      title: 'Always Set a File Size Limit',
      content:
        'Without an explicit limits.fileSize, a malicious or accidental upload of an enormous file can exhaust server disk space or memory — always cap the size, and validate the file type server-side, not just on the frontend.',
    },

    {
      type: 'code',
      title: 'Restricting File Size and Type',
      language: 'javascript',
      code: `const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Only image files are allowed'));
    }
    cb(null, true);
  },
});`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'For production apps, upload files directly to object storage (like S3 or Cloudinary) instead of the local disk — a local uploads folder doesn\'t survive redeploys or scale across multiple server instances.',
    },
  ],

  quiz: [
    {
      question: 'Why can\'t express.json() parse file uploads?',
      options: [
        'It can, no extra middleware is needed',
        'File uploads use multipart/form-data encoding, not JSON',
        'Express does not support file uploads at all',
        'Files must be base64-encoded first',
      ],
      answer: 1,
    },
    {
      question: 'Why is setting a file size limit important?',
      options: [
        'It is not important',
        'Without one, large uploads can exhaust server disk space or memory',
        'It only affects upload speed',
        'It is required by multer syntax',
      ],
      answer: 1,
    },
    {
      question: 'Why prefer uploading files to object storage (like S3) over local disk in production?',
      options: [
        'Local disk is always faster',
        'A local uploads folder does not survive redeploys or scale across multiple server instances',
        'Object storage is required by Express',
        'There is no real reason',
      ],
      answer: 1,
    },
  ],

  previous: 'rest-api-design',
  next: 'connecting-to-mongodb',
};
