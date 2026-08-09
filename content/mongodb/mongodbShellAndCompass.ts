import { Tutorial } from '@/app/types/tutorial';

export const mongodbShellAndCompass: Tutorial = {
  slug: 'mongodb-shell-and-compass',

  title: 'MongoDB Shell & Compass',

  description: 'Two ways to interact with MongoDB directly: the command-line shell and the Compass GUI.',

  level: 'Beginner',

  readingTime: '8 min',

  lesson: 'Lesson 3 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'mongosh',
      content:
        'mongosh (the MongoDB Shell) is the official command-line interface for connecting to and querying a MongoDB database. It runs JavaScript, so many query examples in MongoDB documentation are typed directly into it.',
    },

    {
      type: 'code',
      title: 'Connecting with mongosh',
      language: 'bash',
      code: `mongosh "mongodb://localhost:27017"

# Once connected:
show dbs
use myapp
show collections`,
    },

    {
      type: 'paragraph',
      title: 'MongoDB Compass',
      content:
        'Compass is MongoDB\'s official GUI application. It lets you browse databases and collections visually, build queries with a form-based builder, view schema statistics, and analyze query performance — useful for exploring data without writing shell commands.',
    },

    {
      type: 'table',
      title: 'Shell vs Compass',
      headers: ['Tool', 'Best For'],
      rows: [
        ['mongosh', 'Scripting, automation, quick one-off queries'],
        ['Compass', 'Visual exploration, schema analysis, building queries interactively'],
      ],
    },

    {
      type: 'code',
      title: 'A Few Everyday mongosh Commands',
      language: 'javascript',
      code: `db.users.find()               // list documents
db.users.countDocuments()     // count documents
db.users.insertOne({ name: "Ada" })
db.stats()                    // database statistics`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use Compass to explore an unfamiliar database and understand its shape, then switch to mongosh (or your application code) once you know exactly what query you need to write.',
    },
  ],

  quiz: [
    {
      question: 'What is mongosh?',
      options: ['A GUI application', 'The official command-line shell for MongoDB', 'A hosting provider', 'A backup tool'],
      answer: 1,
    },
    {
      question: 'What does the "use myapp" command do in mongosh?',
      options: ['Deletes the myapp database', 'Switches the current database context to myapp', 'Creates a new user', 'Lists all collections'],
      answer: 1,
    },
    {
      question: 'What is MongoDB Compass primarily used for?',
      options: ['Backend hosting', 'Visual, GUI-based database exploration and query building', 'Writing server code', 'Load balancing'],
      answer: 1,
    },
  ],

  previous: 'installation-and-setup',
  next: 'databases-and-collections',
};
