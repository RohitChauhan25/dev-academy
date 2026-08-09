import { Tutorial } from '@/app/types/tutorial';

export const testingNodeApps: Tutorial = {
  slug: 'testing-node-apps',

  title: 'Testing Node.js Apps',

  description: 'Write unit and integration tests for a Node.js/Express API.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 33 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'Unit vs Integration Tests',
      content:
        'A unit test verifies a single function in isolation, often with dependencies mocked out. An integration test verifies multiple pieces working together — like an actual HTTP request hitting a real route, middleware, and (often) a real or test database.',
    },

    {
      type: 'code',
      title: 'A Unit Test (Vitest)',
      language: 'javascript',
      code: `import { describe, it, expect } from 'vitest';
import { formatPrice } from './utils.js';

describe('formatPrice', () => {
  it('formats cents as a dollar string', () => {
    expect(formatPrice(1999)).toBe('$19.99');
  });
});`,
    },

    {
      type: 'code',
      title: 'An Integration Test with supertest',
      language: 'javascript',
      code: `import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../app.js';

describe('GET /api/health', () => {
  it('returns status ok', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});`,
    },

    {
      type: 'table',
      title: 'Common Testing Tools',
      headers: ['Tool', 'Purpose'],
      rows: [
        ['Vitest / Jest', 'Test runner and assertion library'],
        ['supertest', 'Send HTTP requests directly to an Express app in tests, no real server needed'],
        ['A test database', 'A separate database instance, reset between test runs, so tests never touch production data'],
      ],
    },

    {
      type: 'paragraph',
      title: 'Testing an Express App Without a Live Server',
      content:
        'supertest can send requests directly to your Express app object in memory, without actually binding to a port — this makes integration tests fast and avoids "is port 3000 already in use" conflicts in CI.',
    },

    {
      type: 'note',
      title: 'Structuring app.js vs server.js',
      content:
        'A common pattern: app.js exports the configured Express app (routes, middleware) without calling .listen(), while a separate server.js imports it and calls .listen(). This lets tests import the app directly, without starting a real server.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reset your test database between test runs (or use transactions that roll back) so tests remain independent and repeatable — a test that depends on data left behind by a previous test is fragile and hard to debug.',
    },
  ],

  quiz: [
    {
      question: 'What is the main difference between a unit test and an integration test?',
      options: [
        'Unit tests are always slower',
        'A unit test verifies one function in isolation; an integration test verifies multiple pieces working together',
        'Integration tests cannot use assertions',
        'There is no real difference',
      ],
      answer: 1,
    },
    {
      question: 'What does supertest let you do?',
      options: [
        'Mock a database',
        'Send HTTP requests directly to an Express app in tests, without a live server',
        'Generate test data automatically',
        'Replace Vitest entirely',
      ],
      answer: 1,
    },
    {
      question: 'Why is it common to keep app.listen() out of app.js and put it in a separate server.js?',
      options: [
        'It is required by Express',
        'So tests can import the configured app directly, without starting a real server',
        'It makes the app faster',
        'There is no real reason',
      ],
      answer: 1,
    },
  ],

  previous: 'cors-and-security-headers',
  next: 'best-practices',
};
