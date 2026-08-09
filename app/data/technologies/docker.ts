export const docker = {
  slug: 'docker',

  title: 'Docker',

  description:
    'Learn Docker from beginner to advanced with step-by-step tutorials covering images, containers, volumes, networking, and Docker Compose.',

  level: 'Beginner to Advanced',

  duration: '6+ Hours',

  tutorials: [
    {
      level: 'Beginner',
      items: [
        {
          title: 'Introduction',
          slug: 'introduction',
          duration: '10 min',
          description: 'What Docker is and why containers matter.',
        },
        {
          title: 'Installing Docker',
          slug: 'installation',
          duration: '8 min',
          description: 'Install Docker Desktop or Engine.',
        },
        {
          title: 'Docker Architecture',
          slug: 'docker-architecture',
          duration: '10 min',
          description: 'The client, daemon, and registry.',
        },
        {
          title: 'Images vs Containers',
          slug: 'images-vs-containers',
          duration: '8 min',
          description: 'The difference between a template and a running instance.',
        },
        {
          title: 'Dockerfile Basics',
          slug: 'dockerfile-basics',
          duration: '12 min',
          description: 'Write instructions to build a custom image.',
        },
        {
          title: 'Building Images',
          slug: 'docker-build',
          duration: '10 min',
          description: 'Turn a Dockerfile into a real image.',
        },
        {
          title: 'Running Containers',
          slug: 'docker-run',
          duration: '12 min',
          description: 'Start containers with docker run.',
        },
        {
          title: 'Container Lifecycle',
          slug: 'container-lifecycle',
          duration: '10 min',
          description: 'Created, running, paused, stopped, removed.',
        },
      ],
    },
    {
      level: 'Intermediate',
      items: [
        {
          title: 'docker ps & docker logs',
          slug: 'docker-ps-and-logs',
          duration: '10 min',
          description: 'Inspect running containers and their output.',
        },
        {
          title: 'Environment Variables',
          slug: 'environment-variables',
          duration: '8 min',
          description: 'Configure containers at runtime.',
        },
        {
          title: 'Docker Exec & Debugging',
          slug: 'docker-exec',
          duration: '10 min',
          description: 'Run commands inside a running container.',
        },
        {
          title: 'Port Mapping',
          slug: 'port-mapping',
          duration: '10 min',
          description: 'Expose a container\'s port to your host.',
        },
        {
          title: 'Volumes & Bind Mounts',
          slug: 'volumes-and-bind-mounts',
          duration: '12 min',
          description: 'Persist data beyond a container\'s lifetime.',
        },
        {
          title: 'Docker Networking',
          slug: 'docker-networking',
          duration: '12 min',
          description: 'How containers talk to each other.',
        },
        {
          title: '.dockerignore',
          slug: 'dockerignore',
          duration: '8 min',
          description: 'Keep unnecessary files out of the build context.',
        },
        {
          title: 'Docker Hub',
          slug: 'docker-hub',
          duration: '8 min',
          description: 'Docker\'s default public image registry.',
        },
      ],
    },
    {
      level: 'Advanced',
      items: [
        {
          title: 'Tagging & Pushing Images',
          slug: 'tagging-and-pushing-images',
          duration: '10 min',
          description: 'Publish images to a registry.',
        },
        {
          title: 'Multi-Stage Builds',
          slug: 'multi-stage-builds',
          duration: '14 min',
          description: 'Keep production images small.',
        },
        {
          title: 'Image Layers & Caching',
          slug: 'image-layers-and-caching',
          duration: '12 min',
          description: 'Order a Dockerfile for fast rebuilds.',
        },
        {
          title: 'Introduction to Docker Compose',
          slug: 'docker-compose-introduction',
          duration: '10 min',
          description: 'Manage multi-container apps declaratively.',
        },
        {
          title: 'docker-compose.yml',
          slug: 'docker-compose-yml',
          duration: '14 min',
          description: 'The structure of a Compose file.',
        },
        {
          title: 'Multi-Container Apps',
          slug: 'multi-container-apps',
          duration: '14 min',
          description: 'Build a frontend, API, and database together.',
        },
        {
          title: 'Docker in CI/CD',
          slug: 'docker-in-cicd',
          duration: '12 min',
          description: 'Build, test, and ship images in a pipeline.',
        },
        {
          title: 'Best Practices',
          slug: 'best-practices',
          duration: '10 min',
          description: 'Keep images small, secure, and reliable.',
        },
      ],
    },
  ],
};
