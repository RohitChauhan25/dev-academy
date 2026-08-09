import { Tutorial } from '@/app/types/tutorial';

export const mongooseOdmBasics: Tutorial = {
  slug: 'mongoose-odm-basics',

  title: 'Mongoose ODM Basics',

  description: 'Use Mongoose to define schemas and models for working with MongoDB from a Node.js application.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 24 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'What Mongoose Adds',
      content:
        'Mongoose is an Object Document Mapper (ODM) for MongoDB in Node.js. It sits on top of the official MongoDB driver, adding schema definitions, validation, type casting, and convenient query and model methods — bringing some of the structure of a schema back to MongoDB\'s flexibility.',
    },

    {
      type: 'code',
      title: 'Defining a Schema and Model',
      language: 'javascript',
      code: `import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0 },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);`,
    },

    {
      type: 'code',
      title: 'Connecting and Using the Model',
      language: 'javascript',
      code: `await mongoose.connect('mongodb://localhost:27017/myapp');

const user = await User.create({ name: 'Ada Lovelace', email: 'ada@example.com' });

const users = await User.find({ age: { $gte: 18 } });

const found = await User.findById(user._id);`,
    },

    {
      type: 'table',
      title: 'What Mongoose Gives You',
      headers: ['Feature', 'Benefit'],
      rows: [
        ['Schemas', 'Define expected fields and types for a collection'],
        ['Validation', 'Reject invalid documents before they ever reach the database'],
        ['Type casting', 'Automatically converts values to the schema type, e.g. "28" → 28'],
        ['Middleware (hooks)', 'Run logic before/after save, validate, remove, etc.'],
        ['Virtuals', 'Computed properties that aren\'t stored, only derived'],
      ],
    },

    {
      type: 'code',
      title: 'A pre-save Hook (Middleware)',
      language: 'javascript',
      code: `userSchema.pre('save', function (next) {
  this.email = this.email.toLowerCase();
  next();
});`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use Mongoose schemas even though MongoDB itself doesn\'t require them — the validation and type safety they add catches a huge class of bugs before bad data ever reaches the database.',
    },
  ],

  quiz: [
    {
      question: 'What is Mongoose?',
      options: ['A MongoDB hosting provider', 'An Object Document Mapper (ODM) that adds schemas and validation on top of MongoDB', 'A GUI tool', 'A replacement for MongoDB itself'],
      answer: 1,
    },
    {
      question: 'What does required: true in a Mongoose schema field do?',
      options: [
        'Automatically generates the value',
        'Rejects the document if that field is missing when saving',
        'Makes the field an index',
        'Has no real effect',
      ],
      answer: 1,
    },
    {
      question: 'What is a Mongoose "virtual"?',
      options: [
        'A field stored encrypted in the database',
        'A computed property that is derived, not actually stored',
        'A type of index',
        'A shard key',
      ],
      answer: 1,
    },
  ],

  previous: 'sharding',
  next: 'schema-validation',
};
