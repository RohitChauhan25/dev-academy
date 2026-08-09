import { Tutorial } from '@/app/types/tutorial';

export const dockerComposeYml: Tutorial = {
  slug: 'docker-compose-yml',

  title: 'docker-compose.yml',

  description: 'Learn the structure of a Compose file: services, ports, volumes, environment, and dependencies.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 21 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'The File Structure',
      content:
        'A docker-compose.yml file defines a set of "services" — each one roughly corresponding to a container you would otherwise start with docker run — along with the image, ports, volumes, and environment each needs.',
    },

    {
      type: 'code',
      title: 'A Complete Example',
      language: 'yaml',
      code: `services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgres://user:pass@db:5432/app
    depends_on:
      - db

  db:
    image: postgres:16
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=app
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:`,
    },

    {
      type: 'table',
      title: 'Key Fields',
      headers: ['Field', 'Purpose'],
      rows: [
        ['build', 'Build an image from a local Dockerfile instead of pulling one'],
        ['image', 'Use an existing image from a registry'],
        ['ports', 'Same host:container mapping as docker run -p'],
        ['environment', 'Same as docker run -e, one entry per variable'],
        ['volumes', 'Attach named volumes or bind mounts'],
        ['depends_on', 'Control startup order between services'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Service Names Become Hostnames',
      content:
        'Because api and db in the example above share Compose\'s automatically created network, the api service can reach the database at the hostname db — exactly the string used in DATABASE_URL. No manual networking setup is required.',
    },

    {
      type: 'warning',
      title: 'depends_on Controls Order, Not Readiness',
      content:
        'depends_on only waits for the database container to start — not for Postgres inside it to finish initializing and start accepting connections. Applications should still retry their database connection on startup rather than assuming it is instantly ready.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use named volumes (like db-data above) for anything that needs to survive docker compose down — without one, a database\'s data lives only in the container\'s writable layer and is lost when it is removed.',
    },
  ],

  quiz: [
    {
      question: 'What does the "build" field do in a Compose service?',
      options: ['Pulls a prebuilt image', 'Builds an image from a local Dockerfile', 'Sets an environment variable', 'Publishes a port'],
      answer: 1,
    },
    {
      question: 'How does one Compose service reach another by name?',
      options: [
        'It cannot, IP addresses are required',
        'Through Compose\'s automatically created shared network, using the service name as hostname',
        'Only through the host machine',
        'Only if both use "network: host"',
      ],
      answer: 1,
    },
    {
      question: 'What does depends_on guarantee?',
      options: [
        'That the dependent service is fully ready to accept connections',
        'Only that the container has started, not that its process inside is ready',
        'Nothing at all',
        'That both services share the same image',
      ],
      answer: 1,
    },
  ],

  previous: 'docker-compose-introduction',
  next: 'multi-container-apps',
};
