import { Tutorial } from '@/app/types/tutorial';

export const connectingToMongodb: Tutorial = {
  slug: 'connecting-to-mongodb',

  title: 'Connecting to MongoDB',

  description: 'Connect a Node.js/Express app to MongoDB using Mongoose.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 27 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Setting Up the Connection',
      content:
        'Mongoose manages the connection to MongoDB and provides schemas and models on top of it (covered in the MongoDB course). In an Express app, the connection is typically established once, when the server starts.',
    },

    {
      type: 'code',
      title: 'Connecting on Server Startup',
      language: 'javascript',
      code: `import mongoose from 'mongoose';
import app from './app.js';

async function start() {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log('Connected to MongoDB');

  app.listen(process.env.PORT || 3000, () => {
    console.log('Server running');
  });
}

start();`,
    },

    {
      type: 'code',
      title: 'A User Model',
      language: 'javascript',
      code: `import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export const User = mongoose.model('User', userSchema);`,
    },

    {
      type: 'code',
      title: 'Using the Model in a Route',
      language: 'javascript',
      code: `app.post('/api/users', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

app.get('/api/users/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json(user);
  } catch (err) {
    next(err);
  }
});`,
    },

    {
      type: 'warning',
      title: 'Start the Server Only After Connecting',
      content:
        'Calling app.listen() before the database connection resolves means your server could accept requests before it can actually query data — awaiting the connection first avoids a window of broken early requests.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Listen for mongoose connection error events (mongoose.connection.on(\'error\', ...)) even after the initial connection succeeds — a database can become temporarily unreachable at any point during the server\'s lifetime, not just at startup.',
    },
  ],

  quiz: [
    {
      question: 'Why start app.listen() only after the database connection succeeds?',
      options: [
        'It is not necessary, order does not matter',
        'To avoid accepting requests before the app can actually query the database',
        'Express requires it syntactically',
        'It has no real benefit',
      ],
      answer: 1,
    },
    {
      question: 'What does mongoose.model() create?',
      options: ['A raw database connection', 'A model class used to query and create documents matching a schema', 'An Express route', 'An environment variable'],
      answer: 1,
    },
    {
      question: 'Why listen for connection error events even after the initial connection succeeds?',
      options: [
        'It is unnecessary once connected',
        'A database connection can become unreachable at any later point during the server\'s lifetime',
        'It only matters during testing',
        'Mongoose requires it for schema validation',
      ],
      answer: 1,
    },
  ],

  previous: 'file-uploads',
  next: 'connecting-to-sql',
};
