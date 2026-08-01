export interface SidebarLesson {
  slug: string;
  title: string;
  children?: { slug: string; title: string }[];
}

export interface SidebarSection {
  title: string;
  lessons: SidebarLesson[];
}

const javascriptSidebar: SidebarSection[] = [
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

const htmlSidebar: SidebarSection[] = [
  {
    title: 'Getting Started',
    lessons: [
      { slug: 'introduction', title: 'Introduction' },
      { slug: 'setup', title: 'Setup' },
      { slug: 'basic-structure', title: 'Document Structure' },
      { slug: 'elements-and-tags', title: 'Elements & Tags' },
      { slug: 'attributes', title: 'Attributes' },
      { slug: 'comments', title: 'Comments' },
    ],
  },

  {
    title: 'Text & Content',
    lessons: [
      { slug: 'headings-and-paragraphs', title: 'Headings & Paragraphs' },
      { slug: 'text-formatting', title: 'Text Formatting' },
      { slug: 'links', title: 'Links' },
      { slug: 'images', title: 'Images' },
      { slug: 'lists', title: 'Lists' },
      { slug: 'div-and-span', title: 'Div & Span' },
    ],
  },

  {
    title: 'Structure & Forms',
    lessons: [
      { slug: 'tables', title: 'Tables' },
      {
        slug: 'forms',
        title: 'Forms',
        children: [
          { slug: 'form-input-types', title: 'Input Types' },
          { slug: 'form-validation', title: 'Form Validation' },
        ],
      },
      { slug: 'semantic-html', title: 'Semantic HTML' },
      { slug: 'block-vs-inline', title: 'Block vs Inline' },
      { slug: 'classes-and-ids', title: 'Classes & IDs' },
      { slug: 'html-entities', title: 'HTML Entities' },
      { slug: 'head-elements', title: 'Head Elements' },
    ],
  },

  {
    title: 'Advanced HTML',
    lessons: [
      { slug: 'iframes', title: 'IFrames' },
      { slug: 'audio-and-video', title: 'Audio & Video' },
      { slug: 'meta-tags', title: 'Meta Tags & SEO' },
      { slug: 'data-attributes', title: 'Data Attributes' },
      { slug: 'svg-basics', title: 'SVG Basics' },
      { slug: 'accessibility', title: 'Accessibility' },
    ],
  },
];

const cssSidebar: SidebarSection[] = [
  {
    title: 'Getting Started',
    lessons: [
      { slug: 'introduction', title: 'Introduction' },
      { slug: 'setup', title: 'Setup' },
      { slug: 'syntax', title: 'Syntax' },
      { slug: 'selectors', title: 'Selectors' },
      { slug: 'colors', title: 'Colors' },
      { slug: 'units', title: 'Units & Values' },
    ],
  },

  {
    title: 'Box Model & Basics',
    lessons: [
      { slug: 'box-model', title: 'The Box Model' },
      { slug: 'text-and-fonts', title: 'Text & Fonts' },
      { slug: 'backgrounds', title: 'Backgrounds' },
      { slug: 'borders', title: 'Borders & Border Radius' },
      { slug: 'margin-and-padding', title: 'Margin & Padding' },
      { slug: 'display', title: 'The display Property' },
    ],
  },

  {
    title: 'Layout & Cascade',
    lessons: [
      { slug: 'position', title: 'Positioning' },
      { slug: 'flexbox', title: 'Flexbox' },
      { slug: 'grid', title: 'CSS Grid' },
      { slug: 'overflow', title: 'Overflow & Visibility' },
      { slug: 'z-index-and-stacking', title: 'z-index & Stacking' },
      { slug: 'pseudo-classes', title: 'Pseudo-classes' },
      { slug: 'pseudo-elements', title: 'Pseudo-elements' },
      { slug: 'specificity-and-cascade', title: 'Specificity & Cascade' },
      { slug: 'combinators', title: 'Combinators' },
    ],
  },

  {
    title: 'Advanced CSS',
    lessons: [
      { slug: 'responsive-design', title: 'Responsive Design' },
      { slug: 'css-variables', title: 'CSS Variables' },
      { slug: 'transitions', title: 'Transitions' },
      { slug: 'animations', title: 'Animations' },
      { slug: 'transforms', title: 'Transforms' },
      { slug: 'shadows-and-filters', title: 'Shadows & Filters' },
      { slug: 'gradients', title: 'Gradients' },
      { slug: 'css-functions', title: 'CSS Functions' },
      { slug: 'best-practices', title: 'Best Practices' },
    ],
  },
];

const typescriptSidebar: SidebarSection[] = [
  {
    title: 'Getting Started',
    lessons: [
      { slug: 'introduction', title: 'Introduction' },
      { slug: 'setup', title: 'Setup' },
      { slug: 'basic-types', title: 'Basic Types' },
      { slug: 'arrays-and-tuples', title: 'Arrays & Tuples' },
      { slug: 'enums', title: 'Enums' },
      { slug: 'any-unknown-never', title: 'any, unknown, never & void' },
    ],
  },

  {
    title: 'Core Types',
    lessons: [
      { slug: 'type-inference', title: 'Type Inference' },
      { slug: 'type-aliases', title: 'Type Aliases' },
      { slug: 'interfaces', title: 'Interfaces' },
      { slug: 'functions', title: 'Function Types' },
      { slug: 'union-and-intersection-types', title: 'Union & Intersection Types' },
      { slug: 'literal-types', title: 'Literal Types' },
    ],
  },

  {
    title: 'Working with Types',
    lessons: [
      { slug: 'objects', title: 'Object Types' },
      { slug: 'optional-and-readonly', title: 'Optional & Readonly' },
      { slug: 'type-assertions', title: 'Type Assertions' },
      { slug: 'classes', title: 'Classes' },
      { slug: 'access-modifiers', title: 'Access Modifiers' },
      { slug: 'interfaces-vs-types', title: 'Interfaces vs Type Aliases' },
      { slug: 'generics', title: 'Generics' },
      { slug: 'generic-constraints', title: 'Generic Constraints' },
      { slug: 'narrowing', title: 'Type Narrowing' },
    ],
  },

  {
    title: 'Advanced TypeScript',
    lessons: [
      { slug: 'utility-types', title: 'Utility Types' },
      { slug: 'mapped-types', title: 'Mapped Types' },
      { slug: 'conditional-types', title: 'Conditional Types' },
      { slug: 'type-guards', title: 'Custom Type Guards' },
      { slug: 'modules', title: 'Modules' },
      { slug: 'declaration-files', title: 'Declaration Files' },
      { slug: 'decorators', title: 'Decorators' },
      { slug: 'tsconfig-deep-dive', title: 'tsconfig Deep Dive' },
      { slug: 'best-practices', title: 'Best Practices' },
    ],
  },
];

const reactSidebar: SidebarSection[] = [
  {
    title: 'Getting Started',
    lessons: [
      { slug: 'introduction', title: 'Introduction' },
      { slug: 'setup', title: 'Setup' },
      { slug: 'jsx', title: 'JSX' },
      { slug: 'components-and-props', title: 'Components & Props' },
      { slug: 'rendering-lists', title: 'Rendering Lists & Keys' },
      { slug: 'conditional-rendering', title: 'Conditional Rendering' },
    ],
  },

  {
    title: 'Interactivity',
    lessons: [
      { slug: 'event-handling', title: 'Handling Events' },
      { slug: 'forms', title: 'Forms & Controlled Inputs' },
      { slug: 'component-composition', title: 'Component Composition' },
      { slug: 'styling', title: 'Styling in React' },
      { slug: 'fragments-and-portals', title: 'Fragments & Portals' },
    ],
  },

  {
    title: 'Hooks & Data Flow',
    lessons: [
      { slug: 'lifecycle', title: 'Component Lifecycle' },
      { slug: 'lifting-state-up', title: 'Lifting State Up' },
      {
        slug: 'hooks-overview',
        title: 'Hooks',
        children: [
          { slug: 'state', title: 'useState' },
          { slug: 'use-effect', title: 'useEffect' },
          { slug: 'use-layout-effect', title: 'useLayoutEffect' },
          { slug: 'context-api', title: 'useContext (Context API)' },
          { slug: 'use-reducer', title: 'useReducer' },
          { slug: 'refs', title: 'useRef' },
          { slug: 'use-imperative-handle', title: 'useImperativeHandle' },
          { slug: 'memoization', title: 'useMemo & useCallback' },
          { slug: 'use-transition', title: 'useTransition' },
          { slug: 'use-deferred-value', title: 'useDeferredValue' },
          { slug: 'use-id', title: 'useId' },
          { slug: 'use-sync-external-store', title: 'useSyncExternalStore' },
          { slug: 'use-debug-value', title: 'useDebugValue' },
          { slug: 'use', title: 'use()' },
          { slug: 'use-optimistic', title: 'useOptimistic' },
          { slug: 'use-action-state', title: 'useActionState' },
          { slug: 'use-form-status', title: 'useFormStatus' },
          { slug: 'custom-hooks', title: 'Custom Hooks' },
        ],
      },
      { slug: 'error-boundaries', title: 'Error Boundaries' },
    ],
  },

  {
    title: 'Advanced React',
    lessons: [
      { slug: 'react-router', title: 'React Router' },
      { slug: 'performance-optimization', title: 'Performance Optimization' },
      { slug: 'suspense-and-lazy', title: 'Suspense & Lazy Loading' },
      { slug: 'server-vs-client-components', title: 'Server vs Client Components' },
      { slug: 'data-fetching', title: 'Data Fetching Patterns' },
      { slug: 'testing-react', title: 'Testing React Components' },
      { slug: 'react-19-features', title: 'React 19 Features' },
      { slug: 'state-management', title: 'State Management Libraries' },
      { slug: 'best-practices', title: 'Best Practices' },
    ],
  },
];

export const sidebars: Record<string, SidebarSection[]> = {
  javascript: javascriptSidebar,
  html: htmlSidebar,
  css: cssSidebar,
  typescript: typescriptSidebar,
  react: reactSidebar,
};
