import { Tutorial } from '@/app/types/tutorial';

export const dockerInCicd: Tutorial = {
  slug: 'docker-in-cicd',

  title: 'Docker in CI/CD',

  description: 'Use Docker to build, test, and ship consistent images as part of an automated pipeline.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 23 of 24',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Docker Fits CI/CD Well',
      content:
        'A CI/CD pipeline needs to build, test, and deploy code reliably and repeatably. Because a Docker image bundles the exact runtime environment, the same image built and tested in CI is the exact image deployed to production — eliminating "it passed CI but fails in prod" surprises.',
    },

    {
      type: 'code',
      title: 'A Typical CI Pipeline (GitHub Actions Example)',
      language: 'yaml',
      code: `name: Build and Push

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Build image
        run: docker build -t myusername/my-app:\${{ github.sha }} .

      - name: Log in to Docker Hub
        run: echo "\${{ secrets.DOCKER_PASSWORD }}" | docker login -u myusername --password-stdin

      - name: Push image
        run: docker push myusername/my-app:\${{ github.sha }}`,
    },

    {
      type: 'table',
      title: 'A Typical Docker-Based Pipeline',
      headers: ['Step', 'Purpose'],
      rows: [
        ['Build', 'docker build produces a fresh image from the latest commit'],
        ['Test', 'Run the test suite inside a container built from that same image'],
        ['Tag', 'Tag the image with the commit SHA for traceability'],
        ['Push', 'Push the image to a registry'],
        ['Deploy', 'Pull that exact image on the production server or cluster'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Build Once, Deploy Everywhere',
      content:
        'A key CI/CD principle: build the image once, then promote that identical image through staging and production, rather than rebuilding at each stage. This guarantees what was actually tested is exactly what gets deployed.',
    },

    {
      type: 'note',
      title: 'Layer Caching Speeds Up CI',
      content:
        'Most CI providers support caching Docker layers between runs, so an unrelated code change doesn\'t force a full reinstall of dependencies every single build — the same caching principles from earlier in this course apply directly here.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Never bake CI secrets (like a Docker Hub password) directly into a Dockerfile or image — pass them as CI pipeline secrets at build/push time, exactly as you would environment variables at runtime.',
    },
  ],

  quiz: [
    {
      question: 'Why does Docker help avoid "it passed CI but fails in production" issues?',
      options: [
        'It doesn\'t, that problem is unrelated to Docker',
        'The exact same image built and tested in CI is the one deployed to production',
        'Docker automatically fixes bugs',
        'CI does not use containers',
      ],
      answer: 1,
    },
    {
      question: 'What does "build once, deploy everywhere" mean?',
      options: [
        'Rebuild the image at every stage of the pipeline',
        'Build a single image and promote that identical image through each environment',
        'Only build in production',
        'Use a different image for staging and production',
      ],
      answer: 1,
    },
    {
      question: 'Where should CI secrets like a registry password be provided?',
      options: [
        'Hardcoded in the Dockerfile',
        'As CI pipeline secrets, injected at build/push time',
        'Committed in a .env file',
        'They are not needed',
      ],
      answer: 1,
    },
  ],

  previous: 'multi-container-apps',
  next: 'best-practices',
};
