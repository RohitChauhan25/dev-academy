import { Tutorial } from '@/app/types/tutorial';

export const modules: Tutorial = {
  slug: 'modules',

  title: 'Modules',

  description:
    'Learn how to import and export types and values across files in TypeScript.',

  level: 'Advanced',

  readingTime: '14 min',

  lesson: 'Lesson 26 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'ES Modules Work the Same Way',
      content:
        'TypeScript uses the same import/export syntax as modern JavaScript — the only addition is the ability to import and export types alongside regular values.',
    },

    {
      type: 'code',
      title: 'Exporting Values and Types',
      language: 'typescript',
      code: `// user.ts
export interface User {
  id: number;
  name: string;
}

export function createUser(name: string): User {
  return { id: Date.now(), name };
}`,
    },

    {
      type: 'code',
      title: 'Importing Values and Types',
      language: 'typescript',
      code: `// main.ts
import { User, createUser } from "./user";

const user: User = createUser("Alice");`,
    },

    {
      type: 'paragraph',
      title: 'Type-Only Imports',
      content:
        'The import type syntax explicitly imports only a type, guaranteeing the import is completely erased from the compiled JavaScript — useful for keeping bundles clean and avoiding accidental circular runtime dependencies.',
    },

    {
      type: 'code',
      title: 'Type-Only Import',
      language: 'typescript',
      code: `import type { User } from "./user";
import { createUser } from "./user";

// 'User' is guaranteed to disappear entirely after compilation`,
    },

    {
      type: 'paragraph',
      title: 'Default Exports',
      content:
        'TypeScript also supports default exports, imported without curly braces and given any local name.',
    },

    {
      type: 'code',
      title: 'Default Export',
      language: 'typescript',
      code: `// logger.ts
export default function log(message: string): void {
  console.log(message);
}

// main.ts
import log from "./logger";
log("Hello");`,
    },

    {
      type: 'paragraph',
      title: 'Namespaces (Legacy)',
      content:
        'Before ES modules were standard, TypeScript had its own module system called namespaces. They still exist for backward compatibility, but modern TypeScript code should use ES modules instead.',
    },

    {
      type: 'code',
      title: 'A Namespace (Avoid in New Code)',
      language: 'typescript',
      code: `namespace MathUtils {
  export function square(n: number): number {
    return n * n;
  }
}

MathUtils.square(4); // 16`,
    },

    {
      type: 'warning',
      title: 'Avoid Namespaces in New Code',
      content:
        'Namespaces predate ES modules and don’t integrate well with modern bundlers and tree-shaking. Use standard import/export for all new TypeScript code.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use import type for imports that are only used as types, especially with isolatedModules enabled — it makes the type-only intent explicit and keeps compiled output as small as possible.',
    },
  ],

  quiz: [
    {
      question: 'Does TypeScript use a different import/export syntax from JavaScript?',
      options: [
        'Yes, completely different',
        'No — it uses the same ES module syntax, with the addition of type-only imports',
        'Only for default exports',
        'Only in .tsx files',
      ],
      answer: 1,
    },
    {
      question: 'What does import type guarantee?',
      options: [
        'The import runs before other code',
        'The import is completely erased from the compiled JavaScript output',
        'The imported value becomes readonly',
        'It imports a namespace instead of a module',
      ],
      answer: 1,
    },
    {
      question: 'Should new TypeScript projects use namespaces or ES modules?',
      options: ['Namespaces, they are faster', 'ES modules — namespaces are a legacy feature', 'Both equally', 'Neither, use CommonJS require only'],
      answer: 1,
    },
  ],

  previous: 'type-guards',
  next: 'declaration-files',
};
