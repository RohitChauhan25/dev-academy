import { Tutorial } from '@/app/types/tutorial';

export const environmentVariables: Tutorial = {
  slug: 'environment-variables',

  title: 'Environment Variables',

  description: 'Configure containers at runtime with environment variables instead of baking config into the image.',

  level: 'Intermediate',

  readingTime: '8 min',

  lesson: 'Lesson 10 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Environment Variables?',
      content:
        'Baking configuration like a database URL directly into an image would mean rebuilding the image every time that value changes, and would mean the same image can\'t run in both staging and production. Environment variables let the same image behave differently depending on how it is run.',
    },

    {
      type: 'code',
      title: 'Setting Variables at Runtime',
      language: 'bash',
      code: `docker run -e NODE_ENV=production -e PORT=4000 my-app

# Multiple variables at once from a file
docker run --env-file .env my-app`,
    },

    {
      type: 'code',
      title: 'A Typical .env File',
      language: 'bash',
      code: `NODE_ENV=production
PORT=4000
DATABASE_URL=postgres://user:pass@db:5432/app`,
    },

    {
      type: 'table',
      title: 'Ways to Set Variables',
      headers: ['Method', 'Use Case'],
      rows: [
        ['-e KEY=value', 'A single, one-off variable'],
        ['--env-file .env', 'Many variables loaded from a file'],
        ['ENV in the Dockerfile', 'A default value baked into the image, overridable at runtime'],
      ],
    },

    {
      type: 'code',
      title: 'Setting a Default in the Dockerfile',
      language: 'dockerfile',
      code: `ENV NODE_ENV=production`,
    },

    {
      type: 'warning',
      title: 'Never Bake Secrets Into an Image',
      content:
        'Setting a secret with ENV in the Dockerfile bakes it permanently into the image layers, visible to anyone who can inspect the image — even after the value "changes". Pass secrets at runtime with -e or --env-file, and keep the .env file out of version control.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use ENV in the Dockerfile only for safe, non-sensitive defaults (like NODE_ENV=production), and inject secrets and environment-specific values at runtime instead.',
    },
  ],

  quiz: [
    {
      question: 'Why prefer environment variables over baking config into an image?',
      options: [
        'They make images smaller',
        'They let the same image behave differently across environments without rebuilding',
        'They are required by Docker',
        'They speed up builds',
      ],
      answer: 1,
    },
    {
      question: 'Which flag loads many environment variables from a file at once?',
      options: ['-e', '--env-file', '--vars', '-f'],
      answer: 1,
    },
    {
      question: 'Why is it risky to set a secret using ENV in the Dockerfile?',
      options: [
        'It is not risky at all',
        'It gets permanently baked into the image layers',
        'It only works on Linux',
        'It slows down the container',
      ],
      answer: 1,
    },
  ],

  previous: 'docker-ps-and-logs',
  next: 'docker-exec',
};
