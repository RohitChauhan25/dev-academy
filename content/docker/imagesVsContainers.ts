import { Tutorial } from '@/app/types/tutorial';

export const imagesVsContainers: Tutorial = {
  slug: 'images-vs-containers',

  title: 'Images vs Containers',

  description: 'Understand the difference between a Docker image and a container built from it.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 4 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'Image: The Template',
      content:
        'An image is a read-only template containing an application and everything it needs to run — the base OS layer, dependencies, code, and default configuration. Images never change once built; they are immutable snapshots.',
    },

    {
      type: 'paragraph',
      title: 'Container: The Running Instance',
      content:
        'A container is created from an image and adds a thin, writable layer on top. You can run many independent containers from the same image, and changes made inside one container (like a new file) do not affect the image or other containers.',
    },

    {
      type: 'table',
      title: 'Image vs Container',
      headers: ['Image', 'Container'],
      rows: [
        ['Read-only template', 'Running (or stopped) instance'],
        ['Exists on disk as layers', 'Exists as a running process plus a writable layer'],
        ['Built once, reused many times', 'Created, started, stopped, and removed independently'],
      ],
    },

    {
      type: 'code',
      title: 'One Image, Many Containers',
      language: 'bash',
      code: `# Same image, three independent containers
docker run -d --name web1 nginx
docker run -d --name web2 nginx
docker run -d --name web3 nginx

docker ps
# Three separate, independently running containers`,
    },

    {
      type: 'code',
      title: 'Listing Images vs Containers',
      language: 'bash',
      code: `# Images available locally
docker images

# Running containers
docker ps

# All containers, including stopped ones
docker ps -a`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Treat containers as disposable. If a container is in a bad state, it is almost always faster and safer to remove it and start a fresh one from the image than to try to fix it in place.',
    },
  ],

  quiz: [
    {
      question: 'Is a Docker image mutable or immutable?',
      options: ['Mutable — it changes as containers run', 'Immutable — it never changes once built', 'It depends on the OS', 'Neither, images do not really exist'],
      answer: 1,
    },
    {
      question: 'What happens to an image when you delete a container made from it?',
      options: ['The image is deleted too', 'The image is unaffected', 'The image is corrupted', 'A new image is created'],
      answer: 1,
    },
    {
      question: 'Which command lists images available locally?',
      options: ['docker ps', 'docker images', 'docker list', 'docker ls'],
      answer: 1,
    },
  ],

  previous: 'docker-architecture',
  next: 'dockerfile-basics',
};
