export const javascriptSidebar = [
  {
    title: 'Getting Started',
    lessons: [
      { slug: 'introduction', title: 'Introduction' },
      { slug: 'setup', title: 'Setup' },
      { slug: 'comments', title: 'Comments' },
      { slug: 'variables', title: 'Variables' },
      { slug: 'data-types', title: 'Data Types' },
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
            slug: 'sorting-methods',
            title: 'Sorting',
          },
          {
            slug: 'conversion-methods',
            title: 'Conversion',
          },
          {
            slug: 'modern-array-methods',
            title: 'Modern Methods',
          },
        ],
      },
    ],
  },

  {
    title: 'Modern JavaScript',
    lessons: [
      { slug: 'destructuring', title: 'Destructuring' },
      { slug: 'spread-rest', title: 'Spread & Rest' },
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
      { slug: 'event-loop', title: 'Event Loop' },
      { slug: 'memory-management', title: 'Memory Management' },
    ],
  },
];
