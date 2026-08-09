import { Tutorial } from '@/app/types/tutorial';

export const dockerfileBasics: Tutorial = {
  slug: 'dockerfile-basics',

  title: 'Dockerfile Basics',

  description: 'Write a Dockerfile — the instructions Docker uses to build a custom image.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 5 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Dockerfile?',
      content:
        'A Dockerfile is a plain text file containing step-by-step instructions for building an image — which base image to start from, what files to copy in, what dependencies to install, and what command to run when a container starts.',
    },

    {
      type: 'code',
      title: 'A Simple Node.js Dockerfile',
      language: 'dockerfile',
      code: `FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["node", "server.js"]`,
    },

    {
      type: 'table',
      title: 'Common Instructions',
      headers: ['Instruction', 'Purpose'],
      rows: [
        ['FROM', 'Sets the base image to build on top of'],
        ['WORKDIR', 'Sets the working directory for following instructions'],
        ['COPY', 'Copies files from your machine into the image'],
        ['RUN', 'Executes a command while building the image (e.g. installing dependencies)'],
        ['EXPOSE', 'Documents which port the container listens on'],
        ['CMD', 'The default command run when a container starts'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Why COPY package.json Before COPY . .',
      content:
        'Copying package.json and running npm install before copying the rest of the source code is a deliberate ordering — Docker caches each layer, so if only your application code changes (not your dependencies), the npm install layer is reused from cache instead of re-running, making rebuilds much faster.',
    },

    {
      type: 'note',
      title: 'RUN vs CMD',
      content:
        'RUN executes during the image build and its result becomes part of the image (like installing packages). CMD specifies what runs when a container starts from the finished image — it does not run during the build.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Pick a slim base image when possible, like node:20-alpine instead of node:20 — alpine-based images are dramatically smaller, which speeds up builds, pulls, and deployments.',
    },
  ],

  quiz: [
    {
      question: 'What does the FROM instruction do?',
      options: ['Runs a command', 'Sets the base image to build on top of', 'Copies files', 'Exposes a port'],
      answer: 1,
    },
    {
      question: 'When does the CMD instruction actually run?',
      options: [
        'During the image build',
        'When a container starts from the image',
        'Only when pushing to a registry',
        'It never runs automatically',
      ],
      answer: 1,
    },
    {
      question: 'Why is package.json typically copied and installed before the rest of the app code?',
      options: [
        'It is required by Docker syntax',
        'To take advantage of layer caching so dependency installs are skipped when only app code changes',
        'It has no real effect',
        'To reduce image size only',
      ],
      answer: 1,
    },
  ],

  previous: 'images-vs-containers',
  next: 'docker-build',
};
