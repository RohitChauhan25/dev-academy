import { Tutorial } from '@/app/types/tutorial';

export const introduction: Tutorial = {
  slug: 'introduction',

  title: 'Docker Introduction',

  description: 'Understand what Docker is, what containers are, and why they changed how software ships.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 1 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'What is Docker?',
      content:
        'Docker is a platform for building, running, and sharing applications using containers — lightweight, isolated environments that package an application together with everything it needs to run: code, runtime, system libraries, and configuration.',
    },

    {
      type: 'paragraph',
      title: 'The Problem It Solves',
      content:
        '"It works on my machine" is the classic software problem — an app runs fine for one developer but fails elsewhere because of a different OS version, a missing library, or a different Node version. Docker packages the entire environment, so the app runs identically everywhere Docker runs.',
    },

    {
      type: 'table',
      title: 'Core Docker Concepts',
      headers: ['Term', 'Meaning'],
      rows: [
        ['Image', 'A read-only template with everything needed to run an app'],
        ['Container', 'A running instance of an image'],
        ['Dockerfile', 'A script of instructions for building an image'],
        ['Registry', 'A place to store and share images, like Docker Hub'],
      ],
    },

    {
      type: 'code',
      title: 'Your First Container',
      language: 'bash',
      code: `docker run hello-world`,
    },

    {
      type: 'paragraph',
      title: 'Containers vs Virtual Machines',
      content:
        'A virtual machine virtualizes an entire operating system, which is heavy and slow to start. A container shares the host machine\'s kernel and only isolates the application layer, making containers dramatically lighter and faster to start — often in under a second.',
    },

    {
      type: 'note',
      title: 'Docker is Not the Only Container Runtime',
      content:
        'Docker popularized containers, but the underlying concepts (namespaces, cgroups) are Linux kernel features. Other tools like Podman and containerd implement the same ideas — Docker is simply the most widely used developer-facing tool.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Think of Docker images as recipes and containers as the dish made from that recipe — you can make many identical containers from the same image, and each one runs independently.',
    },
  ],

  quiz: [
    {
      question: 'What is a Docker container?',
      options: [
        'A virtual machine',
        'A running instance of an image',
        'A programming language',
        'A type of database',
      ],
      answer: 1,
    },
    {
      question: 'What problem does Docker primarily solve?',
      options: [
        'Slow internet connections',
        'Environment inconsistency between machines ("works on my machine")',
        'Writing code faster',
        'Password management',
      ],
      answer: 1,
    },
    {
      question: 'Why are containers lighter than virtual machines?',
      options: [
        'They use less code',
        'They share the host\'s kernel instead of virtualizing a full OS',
        'They do not run real applications',
        'They are compressed with zip',
      ],
      answer: 1,
    },
  ],

  next: 'installation',
};
