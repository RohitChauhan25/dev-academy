import { Tutorial } from '@/app/types/tutorial';

export const taggingAndPushingImages: Tutorial = {
  slug: 'tagging-and-pushing-images',

  title: 'Tagging & Pushing Images',

  description: 'Tag your images correctly and push them to a registry so others (or your deployment pipeline) can use them.',

  level: 'Advanced',

  readingTime: '10 min',

  lesson: 'Lesson 17 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'Image Names Include a Registry Path',
      content:
        'To push an image, its name must match the format the registry expects: username/image-name:tag for Docker Hub, or registry-host/username/image-name:tag for other registries.',
    },

    {
      type: 'code',
      title: 'Tagging an Existing Image',
      language: 'bash',
      code: `# Give an already-built image a new, registry-ready name
docker tag my-app:1.0 myusername/my-app:1.0

# You can add multiple tags to the same image
docker tag my-app:1.0 myusername/my-app:latest`,
    },

    {
      type: 'code',
      title: 'Pushing to Docker Hub',
      language: 'bash',
      code: `docker login
docker push myusername/my-app:1.0`,
    },

    {
      type: 'table',
      title: 'Tag Naming Conventions',
      headers: ['Tag Style', 'Example'],
      rows: [
        ['Semantic version', 'my-app:1.4.2'],
        ['Git commit SHA', 'my-app:a6f92e1'],
        ['Environment', 'my-app:staging'],
        ['Mutable "latest"', 'my-app:latest (use for convenience, not for pinning deployments)'],
      ],
    },

    {
      type: 'code',
      title: 'Building Directly with the Final Tag',
      language: 'bash',
      code: `docker build -t myusername/my-app:1.0 .
docker push myusername/my-app:1.0`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Tag images with something traceable, like the Git commit SHA, in addition to a version — it makes it trivial to answer "exactly which code is running in production right now?"',
    },
  ],

  quiz: [
    {
      question: 'What format does an image name need for Docker Hub?',
      options: ['name-only', 'username/image-name:tag', 'image-name.tag.docker', 'image::tag'],
      answer: 1,
    },
    {
      question: 'What does docker tag do to the underlying image?',
      options: [
        'Creates a full copy, doubling disk usage',
        'Adds a new name/label to the same image, without duplicating it',
        'Deletes the old tag',
        'Pushes it automatically',
      ],
      answer: 1,
    },
    {
      question: 'Why tag an image with a Git commit SHA in addition to a version number?',
      options: [
        'It is required by Docker',
        'It makes it easy to trace exactly which code is running',
        'It makes the image smaller',
        'It disables caching',
      ],
      answer: 1,
    },
  ],

  previous: 'docker-hub',
  next: 'multi-stage-builds',
};
