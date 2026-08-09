import { Tutorial } from '@/app/types/tutorial';

export const eventsAndEventemitter: Tutorial = {
  slug: 'events-and-eventemitter',

  title: 'Events & EventEmitter',

  description: 'The pattern behind much of Node.js\'s core API: emitting and listening for named events.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 10 of 34',

  sections: [
    {
      type: 'paragraph',
      title: 'The EventEmitter Pattern',
      content:
        'Many Node.js core objects (HTTP servers, streams, child processes) are EventEmitters — they emit named events that other code can subscribe to. It is the foundation of Node.js\'s event-driven design.',
    },

    {
      type: 'code',
      title: 'A Basic EventEmitter',
      language: 'javascript',
      code: `import { EventEmitter } from 'node:events';

const emitter = new EventEmitter();

emitter.on('greet', (name) => {
  console.log(\`Hello, \${name}!\`);
});

emitter.emit('greet', 'Ada');
// Hello, Ada!`,
    },

    {
      type: 'table',
      title: 'Core EventEmitter Methods',
      headers: ['Method', 'Purpose'],
      rows: [
        ['on(event, listener)', 'Subscribe to an event, every time it fires'],
        ['once(event, listener)', 'Subscribe to an event, but only for the first occurrence'],
        ['emit(event, ...args)', 'Fire an event, running all subscribed listeners synchronously'],
        ['off(event, listener)', 'Unsubscribe a specific listener'],
      ],
    },

    {
      type: 'code',
      title: 'Building a Custom EventEmitter',
      language: 'javascript',
      code: `import { EventEmitter } from 'node:events';

class OrderProcessor extends EventEmitter {
  process(order) {
    // ... do work ...
    this.emit('completed', order);
  }
}

const processor = new OrderProcessor();
processor.on('completed', (order) => console.log('Order done:', order.id));
processor.process({ id: 42 });`,
    },

    {
      type: 'note',
      title: 'Listeners Run Synchronously',
      content:
        'emit() calls every subscribed listener synchronously, in the order they were registered, before emit() itself returns — it does not wait for asynchronous work inside a listener to finish.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Always add an error listener (emitter.on(\'error\', ...)) to any EventEmitter you expect might emit one — an unhandled \'error\' event on an EventEmitter throws and can crash the process.',
    },
  ],

  quiz: [
    {
      question: 'What does emitter.once() do differently from emitter.on()?',
      options: [
        'It runs the listener every time',
        'It runs the listener only for the first occurrence of the event, then removes it',
        'It removes all listeners immediately',
        'It only works with the "error" event',
      ],
      answer: 1,
    },
    {
      question: 'Do EventEmitter listeners run synchronously or asynchronously when emit() is called?',
      options: ['Asynchronously, always', 'Synchronously, in registration order', 'Randomly ordered', 'Only one listener runs per emit'],
      answer: 1,
    },
    {
      question: 'What happens if an EventEmitter emits an "error" event with no listener attached?',
      options: ['Nothing happens', 'It throws and can crash the process', 'It is silently logged', 'It is automatically retried'],
      answer: 1,
    },
  ],

  previous: 'os-module',
  next: 'streams',
};
