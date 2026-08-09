import { Tutorial } from '@/app/types/tutorial';

export const multiContainerApps: Tutorial = {
  slug: 'multi-container-apps',

  title: 'Multi-Container Apps',

  description: 'Put it all together: build a realistic app with a frontend, an API, and a database using Compose.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 22 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'A Typical Three-Tier App',
      content:
        'Most real applications split into a few cooperating services: a frontend that serves the UI, a backend API that handles business logic, and a database that stores data. Compose lets you define and run all three together.',
    },

    {
      type: 'code',
      title: 'A Three-Service Compose File',
      language: 'yaml',
      code: `services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - api

  api:
    build: ./api
    ports:
      - "4000:4000"
    environment:
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
      type: 'code',
      title: 'Running and Managing the Stack',
      language: 'bash',
      code: `# Build and start everything
docker compose up --build

# Rebuild just one service after a code change
docker compose up --build api

# View logs from every service
docker compose logs -f

# View logs from just one service
docker compose logs -f api

# Run a one-off command in a service's container
docker compose exec api npm run migrate`,
    },

    {
      type: 'table',
      title: 'Common Multi-Service Commands',
      headers: ['Command', 'Effect'],
      rows: [
        ['docker compose ps', 'List running services and their status'],
        ['docker compose stop', 'Stop services without removing them'],
        ['docker compose down -v', 'Stop and remove everything, including volumes'],
        ['docker compose restart api', 'Restart just one service'],
      ],
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Give the frontend, api, and db their own Dockerfiles inside their own subfolders, and reference them from a single docker-compose.yml at the project root — this keeps each service\'s build process independent and easy to reason about.',
    },
  ],

  quiz: [
    {
      question: 'What does docker compose up --build do differently from docker compose up?',
      options: [
        'Nothing, they are identical',
        'It rebuilds images from their Dockerfiles before starting',
        'It only builds, without starting anything',
        'It deletes existing containers',
      ],
      answer: 1,
    },
    {
      question: 'How do you view logs from just one service in a multi-service Compose app?',
      options: ['docker compose logs', 'docker compose logs -f <service-name>', 'docker logs --all', 'docker compose ps -f'],
      answer: 1,
    },
    {
      question: 'What does docker compose down -v remove that a plain docker compose down does not?',
      options: ['Images', 'Named volumes', 'Networks', 'Nothing extra'],
      answer: 1,
    },
  ],

  previous: 'docker-compose-yml',
  next: 'docker-in-cicd',
};
