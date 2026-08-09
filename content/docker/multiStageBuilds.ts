import { Tutorial } from '@/app/types/tutorial';

export const multiStageBuilds: Tutorial = {
  slug: 'multi-stage-builds',

  title: 'Multi-Stage Builds',

  description: 'Keep production images small by separating build tools from the final runtime image.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 18 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem',
      content:
        'Building a modern frontend or compiling a Go binary requires a lot of tooling — compilers, dev dependencies, source maps — none of which need to exist in the final running image. Without multi-stage builds, all of that ends up bundled into the production image anyway, bloating it.',
    },

    {
      type: 'code',
      title: 'A Multi-Stage Dockerfile',
      language: 'dockerfile',
      code: `# Stage 1: build
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: run
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm install --production
CMD ["node", "dist/server.js"]`,
    },

    {
      type: 'paragraph',
      title: 'How It Works',
      content:
        'Each FROM starts a new build stage. The final image only contains what the last stage explicitly copies in — using COPY --from=<stage>, you pull just the compiled output from an earlier stage, leaving the compiler and dev dependencies behind entirely.',
    },

    {
      type: 'table',
      title: 'Multi-Stage Benefits',
      headers: ['Benefit', 'Why'],
      rows: [
        ['Smaller final image', 'Build tools and dev dependencies never reach the last stage'],
        ['Better security', 'Fewer tools in production means a smaller attack surface'],
        ['One Dockerfile', 'No need for separate build scripts outside Docker'],
      ],
    },

    {
      type: 'note',
      title: 'Naming Stages',
      content:
        'AS builder names the first stage so it can be referenced later with --from=builder. Stages can also be referenced by their numeric index (--from=0), but named stages are far more readable.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use multi-stage builds for any compiled or bundled language — TypeScript, Go, Java, React builds — it is one of the highest-value habits for keeping production images lean.',
    },
  ],

  quiz: [
    {
      question: 'What does each FROM instruction in a Dockerfile represent?',
      options: ['A new container', 'A new build stage', 'A new volume', 'A new network'],
      answer: 1,
    },
    {
      question: 'What does COPY --from=builder do?',
      options: [
        'Copies files from your host machine',
        'Copies files from an earlier named build stage',
        'Copies environment variables only',
        'Downloads a new base image',
      ],
      answer: 1,
    },
    {
      question: 'What is the main benefit of multi-stage builds?',
      options: [
        'Faster internet downloads',
        'A smaller, leaner final image without build tools',
        'Automatic version bumping',
        'Free hosting',
      ],
      answer: 1,
    },
  ],

  previous: 'tagging-and-pushing-images',
  next: 'image-layers-and-caching',
};
