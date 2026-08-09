import { Tutorial } from '@/app/types/tutorial';

export const bestPractices: Tutorial = {
  slug: 'best-practices',

  title: 'Docker Best Practices',

  description: 'A checklist of habits that keep images small, secure, and reliable.',

  level: 'Advanced',

  readingTime: '10 min',

  lesson: 'Lesson 24 of 24',

  sections: [
    {
      type: 'list',
      title: 'Image Size',
      items: [
        'Use slim/alpine base images where possible',
        'Use multi-stage builds to exclude build tools from the final image',
        'Always add a .dockerignore file',
        'Combine related RUN commands to reduce layer count',
      ],
    },

    {
      type: 'list',
      title: 'Security',
      items: [
        'Never bake secrets into an image with ENV or COPY',
        'Run containers as a non-root user when possible',
        'Pin explicit image versions instead of :latest',
        'Regularly rebuild images to pick up base image security patches',
      ],
    },

    {
      type: 'code',
      title: 'Running as a Non-Root User',
      language: 'dockerfile',
      code: `FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install

# Switch to the built-in non-root "node" user
USER node

CMD ["node", "server.js"]`,
    },

    {
      type: 'table',
      title: 'A Quick Health Checklist',
      headers: ['Check', 'Why'],
      rows: [
        ['Does the Dockerfile order dependencies before app code?', 'Faster rebuilds via layer caching'],
        ['Is there a .dockerignore file?', 'Smaller, faster build context'],
        ['Are secrets kept out of the image?', 'Prevents leaking credentials via image layers'],
        ['Are images tagged with something traceable?', 'Makes deployed code identifiable'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Keep Containers Stateless',
      content:
        'A container should be able to be stopped and replaced with a fresh one at any time without losing anything important — all persistent state should live in a volume or an external database, never solely inside a container\'s writable layer.',
    },

    {
      type: 'warning',
      title: 'Don\'t Run Everything as root',
      content:
        'Many official base images run as root by default for convenience, but running your application as root inside a container is unnecessary risk — if an attacker breaks out of the app, they inherit whatever privileges the container process had.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Periodically run docker system prune to reclaim disk space from unused images, containers, networks, and build cache that accumulate during everyday development.',
    },
  ],

  quiz: [
    {
      question: 'Why use multi-stage builds as a best practice?',
      options: [
        'They are required by Docker',
        'They exclude build tools and dev dependencies from the final, smaller image',
        'They speed up networking',
        'They disable the cache',
      ],
      answer: 1,
    },
    {
      question: 'Why should containers generally avoid running as root?',
      options: [
        'Root is slower',
        'It reduces the security impact if an attacker breaks out of the application',
        'Root cannot access the network',
        'It is not actually a concern',
      ],
      answer: 1,
    },
    {
      question: 'What does "keep containers stateless" mean?',
      options: [
        'Containers should never store any data anywhere',
        'Persistent state should live in a volume or external service, not solely inside the container',
        'Containers cannot use environment variables',
        'Every container needs its own database',
      ],
      answer: 1,
    },
  ],

  previous: 'docker-in-cicd',
};
