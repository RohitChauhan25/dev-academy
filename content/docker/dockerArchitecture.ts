import { Tutorial } from '@/app/types/tutorial';

export const dockerArchitecture: Tutorial = {
  slug: 'docker-architecture',

  title: 'Docker Architecture',

  description: 'Understand the client, daemon, and registry that make up the Docker system.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 3 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'Client-Server Architecture',
      content:
        'Docker uses a client-server model. The Docker client (the docker CLI) sends commands to the Docker daemon (dockerd), which does the actual work of building images and running containers. They can even run on different machines, communicating over a REST API.',
    },

    {
      type: 'table',
      title: 'Main Components',
      headers: ['Component', 'Role'],
      rows: [
        ['Docker Client', 'The CLI you type commands into'],
        ['Docker Daemon', 'Background process that builds images and runs containers'],
        ['Images', 'Read-only templates used to create containers'],
        ['Containers', 'Running instances of images'],
        ['Registry', 'Stores and distributes images (e.g. Docker Hub)'],
      ],
    },

    {
      type: 'code',
      title: 'A Typical Command Flow',
      language: 'bash',
      code: `docker run nginx

# 1. Client sends the command to the daemon
# 2. Daemon checks if the "nginx" image exists locally
# 3. If not, it pulls it from Docker Hub (the default registry)
# 4. Daemon creates and starts a container from that image`,
    },

    {
      type: 'paragraph',
      title: 'Namespaces and cgroups',
      content:
        'Underneath, Docker relies on two Linux kernel features: namespaces, which isolate what a container can see (its own filesystem, network, process list), and cgroups, which limit how much CPU and memory it can use. This is what makes containers lightweight compared to full virtual machines.',
    },

    {
      type: 'note',
      title: 'Images Are Layered',
      content:
        'A Docker image is built from stacked, read-only layers — each instruction in a Dockerfile typically creates one layer. Layers are cached and shared between images, which is why pulling a second image that shares a base with one you already have is much faster.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Understanding that images are read-only and containers are the writable layer on top explains a lot of Docker\'s behavior — like why deleting a container doesn\'t affect the image it came from.',
    },
  ],

  quiz: [
    {
      question: 'What architecture does Docker use?',
      options: ['Peer-to-peer', 'Client-server', 'Monolithic', 'Serverless-only'],
      answer: 1,
    },
    {
      question: 'What does the Docker daemon do?',
      options: [
        'Displays the CLI help text',
        'Does the actual work of building images and running containers',
        'Hosts images publicly',
        'Only stores logs',
      ],
      answer: 1,
    },
    {
      question: 'What Linux kernel feature isolates what a container can see?',
      options: ['cgroups', 'namespaces', 'systemd', 'iptables'],
      answer: 1,
    },
  ],

  previous: 'installation',
  next: 'images-vs-containers',
};
