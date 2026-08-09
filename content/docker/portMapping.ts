import { Tutorial } from '@/app/types/tutorial';

export const portMapping: Tutorial = {
  slug: 'port-mapping',

  title: 'Port Mapping',

  description: 'Expose a container\'s internal port to your host machine so you can actually reach it.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 12 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Ports Need Mapping',
      content:
        'A container runs in its own isolated network namespace by default — a web server listening on port 80 inside the container is not reachable from your host machine until you explicitly publish that port with -p.',
    },

    {
      type: 'code',
      title: 'Publishing a Port',
      language: 'bash',
      code: `docker run -d -p 8080:80 nginx

# Format: -p <host port>:<container port>
# Now visit http://localhost:8080 on your machine`,
    },

    {
      type: 'table',
      title: 'Port Mapping Formats',
      headers: ['Syntax', 'Meaning'],
      rows: [
        ['-p 8080:80', 'Host port 8080 → container port 80'],
        ['-p 3000:3000', 'Same port number on both sides'],
        ['-p 127.0.0.1:8080:80', 'Only accessible from localhost, not the network'],
        ['-P (capital)', 'Publish all EXPOSEd ports to random available host ports'],
      ],
    },

    {
      type: 'code',
      title: 'Mapping Multiple Ports',
      language: 'bash',
      code: `docker run -d -p 8080:80 -p 8443:443 my-web-server`,
    },

    {
      type: 'note',
      title: 'EXPOSE is Just Documentation',
      content:
        'The EXPOSE instruction in a Dockerfile does not actually publish a port — it only documents which port the app listens on. You still need -p at run time to make that port reachable from outside the container.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use a different host port than the container port during local development (e.g. -p 3001:3000) when running multiple similar services, to avoid host port collisions.',
    },
  ],

  quiz: [
    {
      question: 'What does -p 8080:80 mean?',
      options: [
        'Limit the container to 8080MB',
        'Map host port 8080 to container port 80',
        'Set a build timeout',
        'Restrict to 80 connections',
      ],
      answer: 1,
    },
    {
      question: 'Does EXPOSE in a Dockerfile publish a port to the host?',
      options: ['Yes, automatically', 'No, it only documents the port; -p is still required', 'Only in production', 'Only with --network host'],
      answer: 1,
    },
    {
      question: 'What does -P (capital) do?',
      options: [
        'Pauses the container',
        'Publishes all EXPOSEd ports to random available host ports',
        'Sets a password',
        'Prints the container logs',
      ],
      answer: 1,
    },
  ],

  previous: 'docker-exec',
  next: 'volumes-and-bind-mounts',
};
