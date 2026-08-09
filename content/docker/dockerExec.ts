import { Tutorial } from '@/app/types/tutorial';

export const dockerExec: Tutorial = {
  slug: 'docker-exec',

  title: 'Docker Exec & Debugging',

  description: 'Run commands inside an already-running container to inspect or debug it.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 11 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'docker exec',
      content:
        'docker exec runs a new command inside a container that is already running — unlike docker run, which starts a fresh container. It is the primary tool for debugging a live container: checking files, running a shell, or inspecting environment variables.',
    },

    {
      type: 'code',
      title: 'Getting a Shell Into a Running Container',
      language: 'bash',
      code: `docker exec -it my-web bash

# If the image doesn't have bash, try sh
docker exec -it my-web sh`,
    },

    {
      type: 'code',
      title: 'Running a One-off Command',
      language: 'bash',
      code: `# Check environment variables inside the container
docker exec my-web env

# List files in the container's working directory
docker exec my-web ls -la`,
    },

    {
      type: 'table',
      title: 'exec vs run',
      headers: ['Command', 'Effect'],
      rows: [
        ['docker run <image>', 'Creates and starts a brand-new container'],
        ['docker exec <container>', 'Runs a command inside an existing, already-running container'],
      ],
    },

    {
      type: 'note',
      title: '-it Flags',
      content:
        '-i keeps stdin open so you can type input, and -t allocates a pseudo-terminal so the output looks like a normal interactive shell. Both are needed together for an interactive session like bash.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'docker exec is for debugging and inspection, not for making permanent changes — anything you install or edit inside a running container is lost once it is removed. Permanent changes belong in the Dockerfile.',
    },
  ],

  quiz: [
    {
      question: 'What does docker exec do?',
      options: [
        'Creates a new container',
        'Runs a command inside an already-running container',
        'Builds a new image',
        'Deletes a container',
      ],
      answer: 1,
    },
    {
      question: 'What do the -it flags together provide?',
      options: [
        'Faster network speed',
        'An interactive terminal session inside the container',
        'Read-only access',
        'Automatic image updates',
      ],
      answer: 1,
    },
    {
      question: 'Are changes made via docker exec inside a container permanent?',
      options: [
        'Yes, they update the image automatically',
        'No, they are lost once the container is removed unless added to the Dockerfile',
        'Only if you restart the container',
        'Only on Linux hosts',
      ],
      answer: 1,
    },
  ],

  previous: 'environment-variables',
  next: 'port-mapping',
};
