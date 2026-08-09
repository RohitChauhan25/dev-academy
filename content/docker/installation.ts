import { Tutorial } from '@/app/types/tutorial';

export const installation: Tutorial = {
  slug: 'installation',

  title: 'Installing Docker',

  description: 'Install Docker Desktop or Docker Engine and confirm it is running.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 2 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'Docker Desktop vs Docker Engine',
      content:
        'On Windows and macOS, Docker Desktop is the standard installation — it bundles the Docker Engine, a GUI, and Kubernetes support into one app. On Linux, you typically install Docker Engine directly through your distribution\'s package manager, with no GUI required.',
    },

    {
      type: 'table',
      title: 'Installation by Platform',
      headers: ['Platform', 'Method'],
      rows: [
        ['Windows / macOS', 'Download Docker Desktop from docker.com'],
        ['Ubuntu / Debian', 'sudo apt install docker.io, or the official Docker repository'],
        ['Fedora', 'sudo dnf install docker-ce'],
      ],
    },

    {
      type: 'code',
      title: 'Verify the Installation',
      language: 'bash',
      code: `docker --version
# Docker version 27.0.0, build abcdef1

docker run hello-world
# Confirms Docker can pull an image and run a container`,
    },

    {
      type: 'paragraph',
      title: 'The Docker Daemon',
      content:
        'Docker has a client/server architecture. The Docker CLI (the docker command) is the client; the actual work of building and running containers happens in a background service called the Docker daemon (dockerd). Docker Desktop runs this daemon for you automatically.',
    },

    {
      type: 'warning',
      title: 'Linux Requires the User in the docker Group',
      content:
        'On Linux, running docker commands normally requires sudo unless your user is added to the docker group: sudo usermod -aG docker $USER, followed by logging out and back in.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'After installing, run docker info to see a full summary of your Docker setup — it is a good way to confirm everything, including available disk space and the number of running containers, is healthy.',
    },
  ],

  quiz: [
    {
      question: 'What does docker run hello-world confirm?',
      options: [
        'That your internet is working',
        'That Docker can pull an image and run a container successfully',
        'That your GPU is configured',
        'That Kubernetes is installed',
      ],
      answer: 1,
    },
    {
      question: 'What is the Docker daemon?',
      options: [
        'The command-line tool you type',
        'A background service that does the actual work of building and running containers',
        'A type of container image',
        'A cloud hosting provider',
      ],
      answer: 1,
    },
    {
      question: 'On Linux, why might you need to add your user to the docker group?',
      options: [
        'To install Docker Desktop',
        'To run docker commands without sudo',
        'To enable Kubernetes',
        'To use Docker Hub',
      ],
      answer: 1,
    },
  ],

  previous: 'introduction',
  next: 'docker-architecture',
};
