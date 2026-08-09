import { Tutorial } from '@/app/types/tutorial';

export const dockerComposeIntroduction: Tutorial = {
  slug: 'docker-compose-introduction',

  title: 'Introduction to Docker Compose',

  description: 'Manage multi-container applications with a single declarative configuration file.',

  level: 'Advanced',

  readingTime: '10 min',

  lesson: 'Lesson 20 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem With Long docker run Commands',
      content:
        'A real application usually needs several containers — an API, a database, maybe a cache — each with its own image, ports, volumes, and environment variables. Starting them all by hand with long docker run commands, in the right order, every time, does not scale.',
    },

    {
      type: 'paragraph',
      title: 'What Docker Compose Does',
      content:
        'Docker Compose lets you describe an entire multi-container application in a single YAML file, then start, stop, and rebuild the whole thing with one command each. It automatically creates a shared network so services can reach each other by name.',
    },

    {
      type: 'code',
      title: 'Basic Compose Commands',
      language: 'bash',
      code: `# Start every service defined in docker-compose.yml
docker compose up

# Start in the background
docker compose up -d

# Stop and remove everything
docker compose down`,
    },

    {
      type: 'table',
      title: 'Why Compose Over Raw docker run',
      headers: ['Benefit', 'Description'],
      rows: [
        ['One command to start everything', 'docker compose up instead of several docker run commands'],
        ['Declarative config', 'The whole setup lives in one version-controlled file'],
        ['Automatic networking', 'Services reach each other by name, with no manual setup'],
        ['Consistent environments', 'Every teammate runs the exact same setup'],
      ],
    },

    {
      type: 'note',
      title: 'Compose is for a Single Host',
      content:
        'Docker Compose is designed for running multi-container apps on one machine — typically local development or a small deployment. For running containers across a cluster of machines, tools like Kubernetes take over that role.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for Docker Compose as soon as a project needs more than one container to run locally — even a simple app + database pair benefits enormously from a single docker compose up.',
    },
  ],

  quiz: [
    {
      question: 'What problem does Docker Compose primarily solve?',
      options: [
        'Writing Dockerfiles faster',
        'Managing multi-container applications with one config file and command',
        'Compressing images',
        'Replacing Docker Hub',
      ],
      answer: 1,
    },
    {
      question: 'What command starts every service defined in docker-compose.yml?',
      options: ['docker compose start', 'docker compose up', 'docker compose run', 'docker compose build'],
      answer: 1,
    },
    {
      question: 'Is Docker Compose designed to run containers across multiple machines?',
      options: ['Yes, that is its main purpose', 'No, it is designed for a single host', 'Only with Swarm mode enabled', 'Only in production'],
      answer: 1,
    },
  ],

  previous: 'image-layers-and-caching',
  next: 'docker-compose-yml',
};
