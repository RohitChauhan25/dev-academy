import type { InterviewQuestionTopic } from '@/content/javascript/interview-questions';

export const dockerInterviewQuestions: InterviewQuestionTopic[] = [
  {
    slug: 'introduction',
    title: 'Docker Introduction',
    questions: [
      {
        question: 'What is the main difference between a container and a virtual machine?',
        answer:
          'A VM virtualizes an entire operating system, which is heavy and slow to start. A container shares the host machine\'s kernel and only isolates the application layer, making it far lighter and faster to start.',
        difficulty: 'beginner',
      },
      {
        question: 'What problem does Docker solve that made it so widely adopted?',
        answer:
          '"Works on my machine" environment inconsistency — Docker packages an app with its entire runtime environment so it behaves identically everywhere Docker runs.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'docker-architecture',
    title: 'Docker Architecture',
    questions: [
      {
        question: 'What is the Docker daemon, and how does the CLI relate to it?',
        answer:
          'The daemon (dockerd) is the background process that does the actual work of building images and running containers. The docker CLI is a client that sends commands to the daemon over a REST API — they can even run on different machines.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'images-vs-containers',
    title: 'Images vs Containers',
    questions: [
      {
        question: 'What is the relationship between an image and a container?',
        answer:
          'An image is a read-only template. A container is a running instance created from that image, with a thin writable layer added on top — you can create many independent containers from the same image.',
        difficulty: 'beginner',
      },
      {
        question: 'If you delete a container, does that affect the image it was created from?',
        answer: 'No — the image is completely unaffected, since it is read-only and separate from any containers made from it.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'dockerfile-basics',
    title: 'Dockerfile Basics',
    questions: [
      {
        question: 'What is the difference between RUN and CMD in a Dockerfile?',
        answer:
          'RUN executes during the image build and its result becomes part of the image (e.g. installing packages). CMD specifies the default command that runs when a container starts from the finished image.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why is COPY package.json ./ followed by RUN npm install usually done before COPY . . ?',
        answer:
          'To take advantage of Docker\'s layer caching — if only application code changes and dependencies stay the same, the npm install layer is reused from cache instead of re-running.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'docker-build',
    title: 'Building Images',
    questions: [
      {
        question: 'What is the "build context" in docker build . ?',
        answer:
          'The set of files sent to the Docker daemon that COPY and ADD instructions in the Dockerfile can access — it is everything in the specified directory, minus anything excluded by .dockerignore.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'docker-run',
    title: 'Running Containers',
    questions: [
      {
        question: 'What does the --rm flag do when running a container, and why use it?',
        answer:
          'It automatically removes the container once it stops, which is useful for one-off or throwaway containers so they don\'t accumulate on disk.',
        difficulty: 'beginner',
      },
      {
        question: 'What is the difference between docker stop and docker rm?',
        answer:
          'docker stop halts a running container but leaves it on disk so it can be restarted later with docker start. docker rm permanently deletes the container.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'container-lifecycle',
    title: 'Container Lifecycle',
    questions: [
      {
        question: 'Does a stopped container still exist and consume disk space?',
        answer: 'Yes — it stays on disk with its filesystem state until it is explicitly removed with docker rm.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'environment-variables',
    title: 'Environment Variables',
    questions: [
      {
        question: 'Why is it risky to set a secret using ENV in a Dockerfile instead of passing it at runtime?',
        answer:
          'ENV in the Dockerfile bakes the value permanently into the image layers, visible to anyone who can inspect the image — even if the "current" value later changes. Secrets should be passed at runtime with -e or --env-file instead.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'docker-exec',
    title: 'Docker Exec & Debugging',
    questions: [
      {
        question: 'What is the difference between docker run and docker exec?',
        answer:
          'docker run creates and starts a brand-new container from an image. docker exec runs an additional command inside a container that is already running.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'port-mapping',
    title: 'Port Mapping',
    questions: [
      {
        question: 'Why is a container\'s port unreachable from the host unless explicitly published?',
        answer:
          'Containers run in their own isolated network namespace by default. The -p flag (or "ports" in Compose) explicitly maps a host port to a container port to make it reachable.',
        difficulty: 'intermediate',
      },
      {
        question: 'Does EXPOSE in a Dockerfile actually publish a port?',
        answer: 'No — it only documents which port the app listens on. Publishing still requires -p at container run time.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'volumes-and-bind-mounts',
    title: 'Volumes & Bind Mounts',
    questions: [
      {
        question: 'What is the difference between a Docker volume and a bind mount?',
        answer:
          'A volume is storage entirely managed by Docker, stored outside any specific host path. A bind mount maps a specific folder on the host machine directly into the container, commonly used for local development.',
        difficulty: 'intermediate',
      },
      {
        question: 'Does removing a container also delete its attached volumes?',
        answer: 'No, volumes persist independently and must be removed explicitly, which is what allows you to recreate a database container without losing its data.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'docker-networking',
    title: 'Docker Networking',
    questions: [
      {
        question: 'How do containers on a custom Docker network reach each other?',
        answer:
          'By service/container name — Docker provides automatic DNS resolution on user-defined networks, resolving a name like "db" to the correct container\'s internal IP address.',
        difficulty: 'intermediate',
      },
      {
        question: 'Does the default "bridge" network provide the same name-based DNS as a custom network?',
        answer: 'No — only custom, user-defined bridge networks provide automatic DNS resolution between containers.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'dockerignore',
    title: '.dockerignore',
    questions: [
      {
        question: 'What does a .dockerignore file do, and why does it matter for build speed?',
        answer:
          'It excludes files and folders (like node_modules or .git) from the build context sent to the Docker daemon. Without it, the entire project folder is sent on every build, slowing things down significantly.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'docker-hub',
    title: 'Docker Hub',
    questions: [
      {
        question: 'What does the :latest tag actually guarantee?',
        answer:
          'Nothing specific — it is just a naming convention Docker defaults to when no tag is given, not a guarantee of being the newest or most stable version. Its content can change between pulls.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'tagging-and-pushing-images',
    title: 'Tagging & Pushing Images',
    questions: [
      {
        question: 'Does docker tag duplicate the underlying image data?',
        answer: 'No — it just adds a new name/label pointing to the same existing image, without creating a copy.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'multi-stage-builds',
    title: 'Multi-Stage Builds',
    questions: [
      {
        question: 'What problem do multi-stage builds solve?',
        answer:
          'They let you use build tools and dev dependencies in an early stage without those tools ending up in the final production image — only what is explicitly copied via COPY --from into the last stage is included.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'image-layers-and-caching',
    title: 'Image Layers & Caching',
    questions: [
      {
        question: 'What happens to Docker\'s build cache once one instruction\'s inputs change?',
        answer: 'That layer, and every layer after it in the Dockerfile, must be rebuilt — the cache is only valid up to the first changed instruction.',
        difficulty: 'advanced',
      },
      {
        question: 'Why does Dockerfile instruction order matter for build speed?',
        answer:
          'Placing rarely-changing instructions (like dependency installation) before frequently-changing ones (like copying source code) maximizes how much of a rebuild can be served from cache.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'docker-compose-yml',
    title: 'docker-compose.yml',
    questions: [
      {
        question: 'How does depends_on differ from actually waiting for a dependency to be ready?',
        answer:
          'depends_on only controls startup order — it waits for the dependency container to start, not for the process inside it (like a database) to finish initializing. Applications should retry connections rather than assume instant readiness.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'multi-container-apps',
    title: 'Multi-Container Apps',
    questions: [
      {
        question: 'What does docker compose down -v remove that docker compose down alone does not?',
        answer: 'Named volumes — meaning any persistent data (like a database\'s files) is deleted as well.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'docker-in-cicd',
    title: 'Docker in CI/CD',
    questions: [
      {
        question: 'What does "build once, deploy everywhere" mean in a Docker-based CI/CD pipeline?',
        answer:
          'Build a single image once and promote that exact same image through staging and production, rather than rebuilding at each stage — this guarantees what was tested is exactly what gets deployed.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'best-practices',
    title: 'Docker Best Practices',
    questions: [
      {
        question: 'Why should containers generally avoid running as the root user?',
        answer:
          'If an attacker manages to break out of the application, they inherit whatever privileges the container process had — running as a non-root user limits that blast radius.',
        difficulty: 'advanced',
      },
      {
        question: 'What does it mean to keep a container "stateless"?',
        answer:
          'Any persistent data the app needs should live in a volume or an external service (like a database), not solely in the container\'s own writable layer — so the container can be stopped and replaced at any time without losing anything important.',
        difficulty: 'advanced',
      },
    ],
  },
];
