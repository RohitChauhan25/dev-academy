export const javascriptSidebar = [
  {
    title: 'Getting Started',
    lessons: [
      { slug: 'introduction', title: 'Introduction' },
      { slug: 'setup', title: 'Setup' },
      { slug: 'comments', title: 'Comments' },
      { slug: 'variables', title: 'Variables' },
      { slug: 'data-types-in-javascript', title: 'Data Types' },
      { slug: 'type-conversion', title: 'Type Conversion' },
    ],
  },

  {
    title: 'Core JavaScript',
    lessons: [
      { slug: 'operators', title: 'Operators' },
      { slug: 'conditionals', title: 'Conditionals' },
      { slug: 'loops', title: 'Loops' },
      { slug: 'functions', title: 'Functions' },
      { slug: 'scope', title: 'Scope' },
      { slug: 'hoisting', title: 'Hoisting' },
      { slug: 'arrays', title: 'Arrays' },
      { slug: 'objects', title: 'Objects' },
      { slug: 'strings', title: 'Strings' },

      {
        slug: 'array-methods',
        title: 'Array Methods',
        children: [
          {
            slug: 'adding-removing-methods',
            title: 'Adding & Removing',
          },
          {
            slug: 'searching-methods',
            title: 'Searching',
          },
          {
            slug: 'iteration-methods',
            title: 'Iteration',
          },
          {
            slug: 'transformation-methods',
            title: 'Transformation',
          },
          {
            slug: 'static-array-methods',
            title: 'Static Methods',
          },
        ],
      },
    ],
  },

  {
    title: 'Modern JavaScript',
    lessons: [
      { slug: 'array-destructuring', title: 'Array Destructuring' },
      { slug: 'object-destructuring', title: 'Object Destructuring' },
      { slug: 'spread-operator', title: 'Spread Operator' },
      { slug: 'rest-parameters', title: 'Rest Parameters' },
      { slug: 'template-literals', title: 'Template Literals' },
      {
        slug: 'optional-chaining-nullish-coalescing',
        title: 'Optional Chaining & Nullish Coalescing',
      },
      { slug: 'modules', title: 'Modules' },
      { slug: 'error-handling', title: 'Error Handling' },
      { slug: 'promises', title: 'Promises' },
      { slug: 'async-await', title: 'Async / Await' },
      { slug: 'fetch-api', title: 'Fetch API' },
    ],
  },

  {
    title: 'Advanced JavaScript',
    lessons: [
      { slug: 'dom', title: 'DOM' },
      { slug: 'events', title: 'Events' },
      { slug: 'event-delegation', title: 'Event Delegation' },
      { slug: 'closures', title: 'Closures' },
      { slug: 'this-keyword', title: 'this Keyword' },
      { slug: 'prototype', title: 'Prototype' },
      { slug: 'classes', title: 'Classes' },
      { slug: 'class-inheritance', title: 'Class Inheritance' },
      {
        slug: 'class-features',
        title: 'Static, Private & Getters/Setters',
      },
      { slug: 'generators-iterators', title: 'Generators & Iterators' },
      { slug: 'regular-expressions', title: 'Regular Expressions' },
      { slug: 'map-and-set', title: 'Map & Set' },
      { slug: 'json', title: 'JSON' },
      { slug: 'date-and-time', title: 'Date & Time' },
      { slug: 'event-loop', title: 'Event Loop' },
      { slug: 'memory-management', title: 'Memory Management' },
    ],
  },
];
