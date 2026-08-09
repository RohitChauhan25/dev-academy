import { Tutorial } from '@/app/types/tutorial';

export const dockerNetworking: Tutorial = {
  slug: 'docker-networking',

  title: 'Docker Networking',

  description: 'Understand how containers communicate with each other and the outside world.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 14 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'Default Networking',
      content:
        'By default, Docker connects every container to a "bridge" network, giving it its own internal IP address. Containers on the same bridge network can reach each other, but nothing outside can reach into them unless a port is explicitly published.',
    },

    {
      type: 'table',
      title: 'Common Network Drivers',
      headers: ['Driver', 'Use Case'],
      rows: [
        ['bridge', 'Default — isolated network for containers on a single host'],
        ['host', 'Container shares the host\'s network directly, no isolation'],
        ['none', 'No networking at all'],
        ['overlay', 'Connects containers across multiple Docker hosts (used with Swarm)'],
      ],
    },

    {
      type: 'code',
      title: 'Creating a Custom Network',
      language: 'bash',
      code: `docker network create my-app-network

docker run -d --network my-app-network --name db postgres
docker run -d --network my-app-network --name api my-api-image`,
    },

    {
      type: 'paragraph',
      title: 'Containers Can Reach Each Other by Name',
      content:
        'On a custom user-defined network, Docker provides automatic DNS resolution — the api container can connect to postgres://db:5432 and Docker resolves "db" to the correct container\'s internal IP address. This is why Docker Compose services reference each other by service name.',
    },

    {
      type: 'code',
      title: 'Inspecting Networks',
      language: 'bash',
      code: `docker network ls
docker network inspect my-app-network`,
    },

    {
      type: 'note',
      title: 'The Default Bridge Has No DNS',
      content:
        'The automatically created "bridge" network (the default) does not provide name-based DNS resolution between containers — only custom, user-defined bridge networks do. This is one reason to always create a dedicated network for multi-container apps rather than relying on the default.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always create a dedicated network for a multi-container application rather than using the default bridge — it gives you name-based service discovery and keeps unrelated containers isolated from each other.',
    },
  ],

  quiz: [
    {
      question: 'What network driver does Docker use by default?',
      options: ['host', 'overlay', 'bridge', 'none'],
      answer: 2,
    },
    {
      question: 'How can containers on a custom network reach each other?',
      options: [
        'Only by IP address',
        'By container/service name, using Docker\'s built-in DNS',
        'They cannot communicate at all',
        'Only through the host machine',
      ],
      answer: 1,
    },
    {
      question: 'Does the default "bridge" network provide name-based DNS between containers?',
      options: ['Yes, always', 'No, only custom user-defined networks do', 'Only for two containers', 'Only in Swarm mode'],
      answer: 1,
    },
  ],

  previous: 'volumes-and-bind-mounts',
  next: 'dockerignore',
};
