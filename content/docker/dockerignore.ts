import { Tutorial } from '@/app/types/tutorial';

export const dockerignore: Tutorial = {
  slug: 'dockerignore',

  title: '.dockerignore',

  description: 'Keep unnecessary files out of the build context to speed up builds and shrink images.',

  level: 'Intermediate',

  readingTime: '8 min',

  lesson: 'Lesson 15 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'What .dockerignore Does',
      content:
        'A .dockerignore file, placed next to the Dockerfile, tells Docker which files and folders to exclude from the build context. Anything listed is invisible to COPY and ADD instructions — the same syntax and idea as .gitignore.',
    },

    {
      type: 'code',
      title: 'A Typical .dockerignore',
      language: 'bash',
      code: `node_modules
.git
.env
*.log
dist
Dockerfile
.dockerignore
README.md`,
    },

    {
      type: 'paragraph',
      title: 'Why It Matters',
      content:
        'Without it, a COPY . . instruction sends everything in your project folder — including a potentially huge node_modules folder or the entire .git history — to the Docker daemon as build context, slowing down every single build.',
    },

    {
      type: 'table',
      title: 'What to Always Ignore',
      headers: ['Pattern', 'Reason'],
      rows: [
        ['node_modules', 'Reinstalled fresh inside the image anyway — copying it wastes time and risks OS mismatches'],
        ['.git', 'Irrelevant to the running app, often huge'],
        ['.env', 'Should never be baked into an image — pass secrets at runtime instead'],
        ['*.log', 'Local debug output, not needed in the image'],
      ],
    },

    {
      type: 'warning',
      title: 'A Bloated Context Slows Every Build',
      content:
        'Even instructions that come before a COPY . . in the Dockerfile are affected — Docker has to send the entire build context to the daemon before the build even starts, regardless of which layer eventually uses it.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Add a .dockerignore file to every project that has a Dockerfile, from day one — treat it as equally essential as .gitignore.',
    },
  ],

  quiz: [
    {
      question: 'What does .dockerignore control?',
      options: [
        'Which containers can run',
        'Which files are excluded from the build context',
        'Which ports are exposed',
        'Which environment variables are set',
      ],
      answer: 1,
    },
    {
      question: 'Why should node_modules typically be in .dockerignore?',
      options: [
        'It is required by Docker',
        'It gets reinstalled fresh inside the image, and copying it wastes time',
        'It contains secrets',
        'It has no effect either way',
      ],
      answer: 1,
    },
    {
      question: 'What happens to the entire build context, regardless of which Dockerfile instruction uses it?',
      options: [
        'Only the used files are sent',
        'The whole context is sent to the daemon before the build starts',
        'It is compressed automatically',
        'Nothing, .dockerignore has no real effect',
      ],
      answer: 1,
    },
  ],

  previous: 'docker-networking',
  next: 'docker-hub',
};
