import { Tutorial } from '@/app/types/tutorial';

export const manyToManyRelationships: Tutorial = {
  slug: 'many-to-many-relationships',

  title: 'Many-to-Many Relationships',

  description: 'Model relationships where many documents relate to many others, like students and courses.',

  level: 'Advanced',

  readingTime: '12 min',

  lesson: 'Lesson 20 of 26',

  sections: [
    {
      type: 'paragraph',
      title: 'A Classic Example',
      content:
        'A student can enroll in many courses, and a course can have many students — neither side "owns" the relationship. This is a many-to-many relationship, and MongoDB models it differently from a relational database, which would use a separate join table.',
    },

    {
      type: 'code',
      title: 'Two-Way Array of References',
      language: 'json',
      code: `// students collection
{ "_id": "student1", "name": "Ada Lovelace", "courseIds": ["course1", "course2"] }

// courses collection
{ "_id": "course1", "title": "Intro to Algorithms", "studentIds": ["student1", "student3"] }`,
    },

    {
      type: 'paragraph',
      title: 'Storing References on Both Sides',
      content:
        'Storing an array of IDs on each side makes both directions of the query fast (a student\'s courses, or a course\'s students) without a join — at the cost of needing to update two documents whenever the relationship changes (a student enrolling means updating both the student and the course).',
    },

    {
      type: 'code',
      title: 'A Separate Join Collection (Alternative)',
      language: 'json',
      code: `// enrollments collection
{ "_id": "e1", "studentId": "student1", "courseId": "course1", "enrolledAt": "2026-01-10" }
{ "_id": "e2", "studentId": "student1", "courseId": "course2", "enrolledAt": "2026-02-01" }`,
    },

    {
      type: 'table',
      title: 'Two-Way Arrays vs a Join Collection',
      headers: ['Approach', 'Best For'],
      rows: [
        ['Arrays on both sides', 'Simple relationships, moderate scale, no extra data about the relationship itself'],
        ['Separate join collection', 'The relationship itself needs its own data (like enrolledAt or a grade), or either side could grow very large'],
      ],
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'If the relationship itself carries meaningful data — an enrollment date, an order status, a role — model it as its own collection, exactly like a SQL join table with extra columns, rather than cramming that data into an array of plain IDs.',
    },
  ],

  quiz: [
    {
      question: 'What is a many-to-many relationship?',
      options: [
        'One document related to exactly one other',
        'Many documents on each side can relate to many documents on the other side',
        'A relationship that only exists in embedded documents',
        'A relationship enforced automatically by MongoDB',
      ],
      answer: 1,
    },
    {
      question: 'What is a downside of storing arrays of references on both sides of a many-to-many relationship?',
      options: [
        'It is impossible in MongoDB',
        'Both documents must be updated whenever the relationship changes',
        'It prevents any querying',
        'It requires SQL',
      ],
      answer: 1,
    },
    {
      question: 'When should a many-to-many relationship use a separate join collection?',
      options: [
        'Never, arrays are always sufficient',
        'When the relationship itself needs its own data, like an enrollment date',
        'Only for one-to-one relationships',
        'Only when using Mongoose',
      ],
      answer: 1,
    },
  ],

  previous: 'one-to-many-relationships',
  next: 'transactions',
};
