import { Tutorial } from '@/app/types/tutorial';

export const volumesAndBindMounts: Tutorial = {
  slug: 'volumes-and-bind-mounts',

  title: 'Volumes & Bind Mounts',

  description: 'Persist data beyond a container\'s lifetime and share files between the host and a container.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 13 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem: Containers Are Ephemeral',
      content:
        'A container\'s writable layer is deleted along with the container. For anything that needs to survive — a database\'s data files, uploaded images — that data must live somewhere outside the container\'s own filesystem.',
    },

    {
      type: 'table',
      title: 'Volumes vs Bind Mounts',
      headers: ['Type', 'Description'],
      rows: [
        ['Volume', 'Storage managed entirely by Docker, stored outside any specific host path'],
        ['Bind Mount', 'Maps a specific folder on your host machine directly into the container'],
      ],
    },

    {
      type: 'code',
      title: 'Using a Volume',
      language: 'bash',
      code: `# Docker creates and manages this volume for you
docker run -d -v my-data:/var/lib/mysql mysql

# List volumes
docker volume ls`,
    },

    {
      type: 'code',
      title: 'Using a Bind Mount',
      language: 'bash',
      code: `# Maps your current directory into /app inside the container
docker run -it -v $(pwd):/app node:20 bash`,
    },

    {
      type: 'paragraph',
      title: 'When to Use Which',
      content:
        'Bind mounts are ideal for local development — edit code on your host and see changes reflected instantly inside a running container, with no rebuild needed. Volumes are the better fit for production data like databases, since Docker manages their lifecycle and location.',
    },

    {
      type: 'code',
      title: 'Removing a Volume',
      language: 'bash',
      code: `docker volume rm my-data

# Remove all unused volumes
docker volume prune`,
    },

    {
      type: 'warning',
      title: 'Volumes Persist After the Container is Removed',
      content:
        'Removing a container with docker rm does not delete the volumes attached to it. This is intentional — it means you can remove and recreate a database container without losing its data — but it also means volumes accumulate over time unless cleaned up.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'For local development with a framework that supports hot reload, bind-mount your source code into the container so edits on your host reflect immediately without a rebuild.',
    },
  ],

  quiz: [
    {
      question: 'What happens to data in a container\'s writable layer when the container is removed?',
      options: ['It is backed up automatically', 'It is permanently lost', 'It moves to a volume automatically', 'Nothing changes'],
      answer: 1,
    },
    {
      question: 'What is a bind mount best suited for?',
      options: [
        'Production database storage',
        'Local development, mapping host code directly into a container',
        'Encrypting secrets',
        'Networking between containers',
      ],
      answer: 1,
    },
    {
      question: 'Does removing a container also delete its attached volumes?',
      options: ['Yes, always', 'No, volumes persist until explicitly removed', 'Only bind mounts are deleted', 'Only on Windows'],
      answer: 1,
    },
  ],

  previous: 'port-mapping',
  next: 'docker-networking',
};
