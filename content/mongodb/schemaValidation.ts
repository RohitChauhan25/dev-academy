import { Tutorial } from '@/app/types/tutorial';

export const schemaValidation: Tutorial = {
  slug: 'schema-validation',

  title: 'Schema Validation',

  description: 'Enforce document structure directly at the database level with MongoDB\'s built-in JSON Schema validation.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 25 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'Validation at the Database Level',
      content:
        'While application-level validation (like Mongoose schemas) helps, it only protects data inserted through that one application. MongoDB\'s own schema validation, defined per collection, enforces rules no matter what inserts the data — a script, a different service, or a mistake.',
    },

    {
      type: 'code',
      title: 'Adding a Validator to a Collection',
      language: 'javascript',
      code: `db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email"],
      properties: {
        name: { bsonType: "string" },
        email: { bsonType: "string", pattern: "^.+@.+\\..+$" },
        age: { bsonType: "int", minimum: 0 },
      },
    },
  },
})`,
    },

    {
      type: 'code',
      title: 'Adding Validation to an Existing Collection',
      language: 'javascript',
      code: `db.runCommand({
  collMod: "users",
  validator: {
    $jsonSchema: {
      required: ["name", "email"],
      properties: {
        email: { bsonType: "string" },
      },
    },
  },
})`,
    },

    {
      type: 'table',
      title: 'Validation Levels',
      headers: ['Level', 'Effect'],
      rows: [
        ['strict (default)', 'Applies to all inserts and updates'],
        ['moderate', 'Applies to inserts and to updates on documents that already pass validation'],
        ['off', 'Validation disabled entirely'],
      ],
    },

    {
      type: 'note',
      title: 'validationAction Controls the Consequence',
      content:
        'By default (error), a document that fails validation is rejected. Setting validationAction: "warn" instead logs a warning but still allows the write — useful when rolling out validation on a collection that may already contain some non-conforming documents.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use application-level validation (like Mongoose) for fast feedback during development, and database-level schema validation as a safety net that protects data integrity no matter what inserts it.',
    },
  ],

  quiz: [
    {
      question: 'Why add schema validation at the database level, even if the application already validates?',
      options: [
        'It is faster than application validation',
        'It enforces rules regardless of what inserts the data — scripts, other services, or mistakes',
        'It replaces the need for indexes',
        'It is required by MongoDB',
      ],
      answer: 1,
    },
    {
      question: 'What does validationAction: "warn" do?',
      options: [
        'Rejects invalid documents silently',
        'Logs a warning but still allows the write to happen',
        'Deletes invalid documents automatically',
        'Disables validation entirely',
      ],
      answer: 1,
    },
    {
      question: 'What does validation level "moderate" do differently from "strict"?',
      options: [
        'It only applies to inserts and updates on documents that already passed validation',
        'It applies to everything, same as strict',
        'It disables validation for updates entirely',
        'It only checks the _id field',
      ],
      answer: 0,
    },
  ],

  previous: 'mongoose-odm-basics',
  next: 'best-practices',
};
