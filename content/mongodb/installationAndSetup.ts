import { Tutorial } from '@/app/types/tutorial';

export const installationAndSetup: Tutorial = {
  slug: 'installation-and-setup',

  title: 'Installation & Setup',

  description: 'Get MongoDB running locally, or set up a free cloud cluster with MongoDB Atlas.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 2 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'Two Ways to Get Started',
      content:
        'You can install MongoDB Community Server locally, or use MongoDB Atlas — a free, fully managed cloud database. Atlas is often the fastest way to start, since there is nothing to install locally and it is production-ready from day one.',
    },

    {
      type: 'table',
      title: 'Local vs Atlas',
      headers: ['Option', 'Best For'],
      rows: [
        ['Local install', 'Offline development, full control'],
        ['MongoDB Atlas (cloud)', 'Quick setup, no local install, easy to share with a team'],
      ],
    },

    {
      type: 'code',
      title: 'Installing Locally (macOS example)',
      language: 'bash',
      code: `brew tap mongodb/brew
brew install mongodb-community

# Start the MongoDB service
brew services start mongodb-community`,
    },

    {
      type: 'code',
      title: 'Connection String Formats',
      language: 'bash',
      code: `# Local MongoDB
mongodb://localhost:27017/mydatabase

# Atlas (cloud) — includes credentials and cluster address
mongodb+srv://user:password@cluster0.mongodb.net/mydatabase`,
    },

    {
      type: 'note',
      title: 'The Default Port',
      content:
        'A local MongoDB server listens on port 27017 by default. This is worth memorizing — it shows up constantly in connection strings and documentation.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'For learning and small projects, MongoDB Atlas\'s free tier is usually the easiest path — you avoid local install issues entirely and get a database reachable from anywhere.',
    },
  ],

  quiz: [
    {
      question: 'What is MongoDB Atlas?',
      options: ['A local-only database', 'A fully managed cloud version of MongoDB', 'A GUI tool only', 'A query language'],
      answer: 1,
    },
    {
      question: 'What port does a local MongoDB server listen on by default?',
      options: ['3306', '5432', '27017', '8080'],
      answer: 2,
    },
    {
      question: 'What does the mongodb+srv:// prefix typically indicate?',
      options: ['A local connection', 'An Atlas (cloud) connection string', 'An encrypted file', 'A deprecated protocol'],
      answer: 1,
    },
  ],

  previous: 'introduction',
  next: 'mongodb-shell-and-compass',
};
