import { Tutorial } from '@/app/types/tutorial';

export const environmentVariables: Tutorial = {
  slug: 'environment-variables',

  title: 'Environment Variables',

  description: 'Keep configuration and secrets out of your code using environment variables and .env files.',

  level: 'Intermediate',

  readingTime: '10 min',

  lesson: 'Lesson 23 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Not Hardcode Config?',
      content:
        'A database URL or API key hardcoded directly in your source code means every environment (local, staging, production) needs a different copy of the code — and worse, secrets end up committed to version control. Environment variables solve both problems.',
    },

    {
      type: 'code',
      title: 'Reading Environment Variables',
      language: 'javascript',
      code: `const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error('DATABASE_URL is required');
}`,
    },

    {
      type: 'code',
      title: 'Using dotenv for Local Development',
      language: 'bash',
      code: `npm install dotenv`,
    },

    {
      type: 'code',
      title: 'Loading a .env File',
      language: 'javascript',
      code: `// .env
PORT=4000
DATABASE_URL=postgres://user:pass@localhost:5432/app

// server.js
import 'dotenv/config';

console.log(process.env.PORT); // "4000"`,
    },

    {
      type: 'table',
      title: 'Where Variables Come From, by Environment',
      headers: ['Environment', 'Typical Source'],
      rows: [
        ['Local development', 'A .env file, loaded by dotenv'],
        ['CI/CD pipeline', 'Secrets configured in the CI provider\'s settings'],
        ['Production (containers)', 'Injected by the orchestrator (Docker, Kubernetes) at runtime'],
      ],
    },

    {
      type: 'warning',
      title: 'Never Commit .env to Version Control',
      content:
        'A .env file containing real secrets should always be listed in .gitignore. Commit a .env.example instead, listing the variable names (with placeholder or no values) so teammates know what to configure.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Validate required environment variables at startup (throw early if something critical is missing) rather than discovering a missing DATABASE_URL only when the first database query fails at runtime.',
    },
  ],

  quiz: [
    {
      question: 'Why avoid hardcoding secrets directly in source code?',
      options: [
        'It has no downside',
        'It ties code to one environment and risks committing secrets to version control',
        'It makes the code run faster',
        'JavaScript does not support string literals',
      ],
      answer: 1,
    },
    {
      question: 'What does the dotenv package do?',
      options: [
        'Encrypts environment variables',
        'Loads variables from a .env file into process.env for local development',
        'Deploys the app to production',
        'Replaces npm',
      ],
      answer: 1,
    },
    {
      question: 'Should a .env file containing real secrets be committed to version control?',
      options: ['Yes, always', 'No, it should be in .gitignore', 'Only in private repos', 'Only for small projects'],
      answer: 1,
    },
  ],

  previous: 'query-params-and-body-parsing',
  next: 'error-handling-in-express',
};
