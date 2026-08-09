import { Tutorial } from '@/app/types/tutorial';

export const dockerRun: Tutorial = {
  slug: 'docker-run',

  title: 'Running Containers',

  description: 'Start containers from an image with docker run and its most important flags.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 7 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'docker run',
      content:
        'docker run creates and starts a new container from an image in one step. If the image is not already present locally, Docker pulls it from a registry first.',
    },

    {
      type: 'code',
      title: 'Running a Container',
      language: 'bash',
      code: `docker run nginx

# Runs in the foreground, printing nginx logs to your terminal
# Press Ctrl+C to stop it`,
    },

    {
      type: 'table',
      title: 'Essential Flags',
      headers: ['Flag', 'Effect'],
      rows: [
        ['-d', 'Detached mode — run in the background'],
        ['--name <name>', 'Give the container a memorable name'],
        ['-p host:container', 'Map a port on your machine to a port in the container'],
        ['-e KEY=value', 'Set an environment variable'],
        ['--rm', 'Automatically remove the container when it stops'],
        ['-it', 'Interactive mode with a terminal attached, useful for shells'],
      ],
    },

    {
      type: 'code',
      title: 'A Realistic Run Command',
      language: 'bash',
      code: `docker run -d --name my-web -p 8080:80 --rm nginx

# -d: run in background
# --name: call it "my-web"
# -p 8080:80: visit localhost:8080 to reach port 80 inside the container
# --rm: clean it up automatically once stopped`,
    },

    {
      type: 'code',
      title: 'Getting a Shell Inside a Container',
      language: 'bash',
      code: `docker run -it ubuntu bash
# Drops you into an interactive bash shell inside a fresh Ubuntu container`,
    },

    {
      type: 'note',
      title: 'Stopping vs Removing',
      content:
        'docker stop <container> stops a running container but leaves it on disk, so it can be started again with docker start. docker rm <container> deletes it permanently. --rm at run time combines "stop" and "remove" automatically when the container exits.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use --name for anything you will reference again — it is much easier to type docker logs my-web than to look up a randomly generated container ID every time.',
    },
  ],

  quiz: [
    {
      question: 'What does the -d flag do in docker run -d nginx?',
      options: ['Deletes the image after running', 'Runs the container in detached (background) mode', 'Enables debugging', 'Downloads the image only'],
      answer: 1,
    },
    {
      question: 'What does -p 8080:80 mean?',
      options: [
        'Limit the container to 8080MB of memory',
        'Map port 8080 on the host to port 80 inside the container',
        'Set the container\'s process ID',
        'Set a timeout of 8080 seconds',
      ],
      answer: 1,
    },
    {
      question: 'What does the --rm flag do?',
      options: [
        'Removes the image immediately',
        'Automatically removes the container once it stops',
        'Runs the container as root',
        'Disables networking',
      ],
      answer: 1,
    },
  ],

  previous: 'docker-build',
  next: 'container-lifecycle',
};
