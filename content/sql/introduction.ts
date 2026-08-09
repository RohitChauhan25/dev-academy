import { Tutorial } from '@/app/types/tutorial';

export const introduction: Tutorial = {
  slug: 'introduction',

  title: 'Introduction to SQL',

  description: 'Understand what SQL is, what it is used for, and the different categories of SQL statements.',

  level: 'Beginner',

  readingTime: '10 min',

  lesson: 'Lesson 1 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is SQL?',
      content:
        'SQL (Structured Query Language) is the standard language for creating, reading, updating, and deleting data in a relational database. It is declarative — you describe what data you want, and the database engine figures out how to retrieve it.',
    },

    {
      type: 'code',
      title: 'A First Query',
      language: 'sql',
      code: `SELECT name, email FROM users WHERE active = true;`,
    },

    {
      type: 'table',
      title: 'Categories of SQL Statements',
      headers: ['Category', 'Purpose', 'Examples'],
      rows: [
        ['DQL — Data Query Language', 'Reading data', 'SELECT'],
        ['DML — Data Manipulation Language', 'Modifying data', 'INSERT, UPDATE, DELETE'],
        ['DDL — Data Definition Language', 'Defining structure', 'CREATE TABLE, ALTER TABLE, DROP TABLE'],
        ['DCL — Data Control Language', 'Permissions', 'GRANT, REVOKE'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Where SQL is Used',
      content:
        'SQL is used across virtually every major relational database — PostgreSQL, MySQL, SQL Server, SQLite, and Oracle all speak SQL, with minor dialect differences. Learning core SQL transfers almost entirely between them.',
    },

    {
      type: 'note',
      title: 'SQL is Case-Insensitive for Keywords',
      content:
        'SELECT, select, and Select all work identically. The convention of writing SQL keywords in uppercase (SELECT, FROM, WHERE) is purely a readability convention, not a requirement.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Get comfortable reading a query as a sentence: "SELECT these columns, FROM this table, WHERE this condition is true" — most SQL, however complex, builds on that same basic shape.',
    },
  ],

  quiz: [
    {
      question: 'What does SQL stand for?',
      options: ['Structured Query Language', 'Simple Query Logic', 'Sequential Query Language', 'Standard Query Layer'],
      answer: 0,
    },
    {
      question: 'Which category of SQL statements includes SELECT?',
      options: ['DDL', 'DML', 'DQL', 'DCL'],
      answer: 2,
    },
    {
      question: 'Is SQL case-sensitive for its keywords like SELECT and WHERE?',
      options: ['Yes, always', 'No, keywords are case-insensitive', 'Only in PostgreSQL', 'Only for table names'],
      answer: 1,
    },
  ],

  next: 'relational-databases',
};
