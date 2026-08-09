import { Tutorial } from '@/app/types/tutorial';

export const dockerHub: Tutorial = {
  slug: 'docker-hub',

  title: 'Docker Hub',

  description: 'Understand Docker\'s default public registry and how images are pulled from it.',

  level: 'Intermediate',

  readingTime: '8 min',

  lesson: 'Lesson 16 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Registry?',
      content:
        'A registry is a server that stores and distributes Docker images. Docker Hub is the default public registry — when you run docker run nginx and don\'t have the image locally, Docker automatically pulls it from Docker Hub.',
    },

    {
      type: 'code',
      title: 'Pulling an Image Explicitly',
      language: 'bash',
      code: `docker pull node:20-alpine

# Pull a specific, pinned version instead of "latest"
docker pull postgres:16.2`,
    },

    {
      type: 'table',
      title: 'Types of Images on Docker Hub',
      headers: ['Type', 'Example'],
      rows: [
        ['Official images', 'node, nginx, postgres, redis — maintained by Docker or the project itself'],
        ['Verified publisher images', 'Published by known companies'],
        ['Community images', 'Published by individual users, e.g. username/my-app'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Image Tags',
      content:
        'A tag identifies a specific version of an image, written as name:tag. If no tag is given, Docker defaults to :latest — which, despite the name, is just a convention and not guaranteed to be the newest or most stable version.',
    },

    {
      type: 'code',
      title: 'Searching and Logging In',
      language: 'bash',
      code: `docker search postgres

docker login
# Required before pushing your own images`,
    },

    {
      type: 'warning',
      title: 'Avoid :latest in Production',
      content:
        'Using image:latest means the exact image content can silently change between deployments — you have no guarantee two "latest" pulls, days apart, are actually identical. Pin an explicit version tag for anything running in production.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Prefer official images as a base whenever one exists for your language or database — they are actively maintained, security-patched, and widely trusted.',
    },
  ],

  quiz: [
    {
      question: 'What is Docker Hub?',
      options: [
        'A container runtime',
        'The default public registry for storing and distributing Docker images',
        'A Dockerfile linter',
        'A monitoring dashboard',
      ],
      answer: 1,
    },
    {
      question: 'What does the :latest tag guarantee?',
      options: [
        'It is always the newest, most stable version',
        'Nothing specific — it is just a convention, and its content can change over time',
        'It is always security-patched',
        'It only works locally',
      ],
      answer: 1,
    },
    {
      question: 'Why avoid :latest in production?',
      options: [
        'It is slower to pull',
        'The exact image content can silently change between deployments',
        'It cannot be used with docker run',
        'It is not real, it does not exist',
      ],
      answer: 1,
    },
  ],

  previous: 'dockerignore',
  next: 'tagging-and-pushing-images',
};
