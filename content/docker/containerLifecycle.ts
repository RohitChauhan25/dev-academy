import { Tutorial } from '@/app/types/tutorial';

export const containerLifecycle: Tutorial = {
  slug: 'container-lifecycle',

  title: 'Container Lifecycle',

  description: 'Learn the states a container moves through — created, running, paused, stopped, and removed.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 8 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'Container States',
      content:
        'A container moves through a small set of well-defined states over its life. Understanding them clears up a common beginner confusion: a stopped container still exists and still takes up disk space until it is explicitly removed.',
    },

    {
      type: 'table',
      title: 'Lifecycle States',
      headers: ['State', 'Meaning'],
      rows: [
        ['Created', 'Container exists but has not started running yet'],
        ['Running', 'Container is actively executing its process'],
        ['Paused', 'Execution is temporarily frozen'],
        ['Stopped (Exited)', 'The process ended, but the container and its filesystem still exist'],
        ['Removed', 'The container is permanently deleted'],
      ],
    },

    {
      type: 'code',
      title: 'Moving Through the Lifecycle',
      language: 'bash',
      code: `docker create --name c1 nginx   # Created, not running
docker start c1                 # Running
docker pause c1                 # Paused
docker unpause c1               # Running again
docker stop c1                  # Stopped
docker start c1                 # Running again
docker rm c1                    # Fails — must stop first if running
docker stop c1 && docker rm c1  # Removed`,
    },

    {
      type: 'paragraph',
      title: 'run vs start',
      content:
        'docker run always creates a brand-new container from an image. docker start restarts an existing, stopped container by name or ID, reusing its existing filesystem state rather than starting fresh.',
    },

    {
      type: 'code',
      title: 'Cleaning Up Stopped Containers',
      language: 'bash',
      code: `# Remove one stopped container
docker rm c1

# Remove every stopped container at once
docker container prune`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Run docker ps -a periodically during development — it is easy to accumulate dozens of stopped containers from repeated docker run commands, quietly consuming disk space.',
    },
  ],

  quiz: [
    {
      question: 'Does a stopped container still exist on disk?',
      options: ['No, it is deleted automatically', 'Yes, until it is explicitly removed', 'Only for 24 hours', 'Only if named'],
      answer: 1,
    },
    {
      question: 'What is the difference between docker run and docker start?',
      options: [
        'They are identical',
        'run creates a new container from an image; start restarts an existing stopped container',
        'start only works on images',
        'run cannot be used with names',
      ],
      answer: 1,
    },
    {
      question: 'Which command removes every stopped container at once?',
      options: ['docker rm -a', 'docker container prune', 'docker clean', 'docker stop --all'],
      answer: 1,
    },
  ],

  previous: 'docker-run',
  next: 'docker-ps-and-logs',
};
