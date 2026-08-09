import { Tutorial } from '@/app/types/tutorial';

export const dockerPsAndLogs: Tutorial = {
  slug: 'docker-ps-and-logs',

  title: 'docker ps & docker logs',

  description: 'Inspect running containers and read their output.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 9 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'docker ps',
      content:
        'docker ps lists running containers — their ID, image, status, ports, and name. It is the container equivalent of a process list, and usually the first command you run to see what is currently active.',
    },

    {
      type: 'code',
      title: 'Listing Containers',
      language: 'bash',
      code: `docker ps
# CONTAINER ID   IMAGE   STATUS         PORTS                  NAMES
# a1b2c3d4e5f6   nginx   Up 2 minutes   0.0.0.0:8080->80/tcp   my-web

# Include stopped containers too
docker ps -a`,
    },

    {
      type: 'paragraph',
      title: 'docker logs',
      content:
        'docker logs shows the output a container has written to stdout/stderr since it started — essential for debugging a container that crashed or is behaving unexpectedly.',
    },

    {
      type: 'code',
      title: 'Reading Logs',
      language: 'bash',
      code: `docker logs my-web

# Follow logs live, like tail -f
docker logs -f my-web

# Show only the last 50 lines
docker logs --tail 50 my-web`,
    },

    {
      type: 'table',
      title: 'Useful ps and logs Flags',
      headers: ['Command', 'Effect'],
      rows: [
        ['docker ps -q', 'Print only container IDs'],
        ['docker ps -a', 'Include stopped containers'],
        ['docker logs -f', 'Stream logs continuously'],
        ['docker logs --since 10m', 'Only logs from the last 10 minutes'],
      ],
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Combine docker ps -q with other commands for quick cleanup, e.g. docker stop $(docker ps -q) stops every running container at once — useful during local development resets.',
    },
  ],

  quiz: [
    {
      question: 'What does docker ps show by default?',
      options: ['Every container ever created', 'Only currently running containers', 'Only images', 'Only stopped containers'],
      answer: 1,
    },
    {
      question: 'What does docker logs -f do?',
      options: ['Deletes old logs', 'Streams logs continuously as new output arrives', 'Formats logs as JSON', 'Filters logs by container name'],
      answer: 1,
    },
    {
      question: 'Which flag makes docker ps include stopped containers?',
      options: ['-s', '-a', '-all', '--stopped'],
      answer: 1,
    },
  ],

  previous: 'container-lifecycle',
  next: 'environment-variables',
};
