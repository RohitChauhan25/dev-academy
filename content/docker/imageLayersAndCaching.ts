import { Tutorial } from '@/app/types/tutorial';

export const imageLayersAndCaching: Tutorial = {
  slug: 'image-layers-and-caching',

  title: 'Image Layers & Caching',

  description: 'Understand how Docker caches build layers, and how to order a Dockerfile for the fastest rebuilds.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 19 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'Every Instruction Creates a Layer',
      content:
        'Each instruction in a Dockerfile (FROM, RUN, COPY, etc.) produces a read-only layer, stacked on top of the previous one. The final image is just those layers combined. Layers are content-addressed and can be shared between different images that happen to have identical layers.',
    },

    {
      type: 'paragraph',
      title: 'The Build Cache',
      content:
        'When rebuilding, Docker checks each instruction against the cache: if the instruction and its inputs haven\'t changed, Docker reuses the existing layer instead of re-executing it. The moment one instruction changes, every layer after it must be rebuilt — the cache "breaks" at that point.',
    },

    {
      type: 'code',
      title: 'Cache-Friendly Ordering',
      language: 'dockerfile',
      code: `FROM node:20-alpine
WORKDIR /app

# Changes rarely — cached most of the time
COPY package*.json ./
RUN npm install

# Changes often — only this layer (and below) rebuilds on a code edit
COPY . .

CMD ["node", "server.js"]`,
    },

    {
      type: 'table',
      title: 'Ordering Principle',
      headers: ['Rule', 'Why'],
      rows: [
        ['Put rarely-changing instructions first', 'Maximizes how much of the build is served from cache'],
        ['Put frequently-changing instructions last', 'A source code edit only invalidates the final layers'],
        ['Combine related RUN commands', 'Fewer layers, and avoids leftover cache from intermediate states'],
      ],
    },

    {
      type: 'code',
      title: 'Combining RUN Commands',
      language: 'dockerfile',
      code: `# Less ideal: three separate layers
RUN apt-get update
RUN apt-get install -y curl
RUN rm -rf /var/lib/apt/lists/*

# Better: one layer, and cleanup actually reduces image size
RUN apt-get update && \\
    apt-get install -y curl && \\
    rm -rf /var/lib/apt/lists/*`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Order your Dockerfile from least-frequently-changed to most-frequently-changed instructions — dependencies before application code — to get the fastest possible everyday rebuilds.',
    },
  ],

  quiz: [
    {
      question: 'What happens to the build cache once an instruction\'s inputs change?',
      options: [
        'Nothing, caching continues normally',
        'That layer and every layer after it must rebuild',
        'Only that single layer rebuilds, nothing after it',
        'The entire image is deleted',
      ],
      answer: 1,
    },
    {
      question: 'Why copy package.json and run npm install before copying the rest of the source code?',
      options: [
        'It is required syntax',
        'So dependency installation stays cached when only application code changes',
        'It has no effect on caching',
        'To reduce the number of stages',
      ],
      answer: 1,
    },
    {
      question: 'Why combine multiple RUN commands into one with && ?',
      options: [
        'It is faster to type',
        'It creates fewer layers and avoids leaving intermediate state in the image',
        'It disables the cache entirely',
        'It is required for multi-stage builds',
      ],
      answer: 1,
    },
  ],

  previous: 'multi-stage-builds',
  next: 'docker-compose-introduction',
};
