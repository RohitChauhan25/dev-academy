import { Tutorial } from '@/app/types/tutorial';

export const dockerBuild: Tutorial = {
  slug: 'docker-build',

  title: 'Building Images',

  description: 'Turn a Dockerfile into a real image with docker build.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 6 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'docker build',
      content:
        'docker build reads a Dockerfile and executes its instructions one by one, producing a new image. Each instruction typically creates a new cached layer, so re-running the build after only a small change is usually fast.',
    },

    {
      type: 'code',
      title: 'Building an Image',
      language: 'bash',
      code: `docker build -t my-app:1.0 .

# -t tags the image with a name and version
# . tells Docker to use the current directory as the build context`,
    },

    {
      type: 'table',
      title: 'Useful Build Flags',
      headers: ['Flag', 'Effect'],
      rows: [
        ['-t name:tag', 'Names and tags the resulting image'],
        ['-f path/to/Dockerfile', 'Uses a Dockerfile at a custom path'],
        ['--no-cache', 'Ignores the build cache, rebuilding every layer from scratch'],
        ['--build-arg KEY=value', 'Passes a build-time variable into the Dockerfile'],
      ],
    },

    {
      type: 'paragraph',
      title: 'The Build Context',
      content:
        'The "." at the end of docker build . is the build context — the set of files sent to the Docker daemon that COPY and ADD instructions can access. A large build context (like an uncommitted node_modules folder) slows builds down significantly.',
    },

    {
      type: 'code',
      title: 'Watching the Layer-by-Layer Build',
      language: 'bash',
      code: `docker build -t my-app .

# => [1/5] FROM node:20-alpine
# => [2/5] WORKDIR /app
# => [3/5] COPY package*.json ./
# => [4/5] RUN npm install
# => [5/5] COPY . .
# => exporting to image`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always use a .dockerignore file (covered later in this course) to keep node_modules, .git, and other unnecessary files out of the build context — smaller context, faster builds.',
    },
  ],

  quiz: [
    {
      question: 'What does the -t flag do in docker build -t my-app .?',
      options: ['Sets a timeout', 'Names and tags the resulting image', 'Runs tests', 'Enables verbose logging'],
      answer: 1,
    },
    {
      question: 'What is the "build context" in docker build .?',
      options: [
        'The Dockerfile itself only',
        'The set of files sent to the daemon that COPY/ADD can access',
        'The container\'s environment variables',
        'The registry being used',
      ],
      answer: 1,
    },
    {
      question: 'What does --no-cache do?',
      options: [
        'Deletes the image after building',
        'Rebuilds every layer from scratch, ignoring the cache',
        'Disables networking during build',
        'Skips the Dockerfile entirely',
      ],
      answer: 1,
    },
  ],

  previous: 'dockerfile-basics',
  next: 'docker-run',
};
