import { Tutorial } from '@/app/types/tutorial';

export const decorators: Tutorial = {
  slug: 'decorators',

  title: 'Decorators',

  description:
    'Learn how decorators let you annotate and modify classes, methods, and properties using a concise syntax.',

  level: 'Advanced',

  readingTime: '16 min',

  lesson: 'Lesson 28 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Decorator?',
      content:
        'A decorator is a function applied to a class, method, property, or accessor using @ syntax, letting you observe, modify, or replace it at definition time — commonly used for logging, validation, and dependency injection.',
    },

    {
      type: 'paragraph',
      title: 'Enabling Decorators',
      content:
        'Decorators are a relatively recent, standardized JavaScript proposal that TypeScript supports natively. Some frameworks (like older Angular versions) rely on the earlier experimental decorator implementation, enabled via a compiler flag.',
    },

    {
      type: 'code',
      title: 'Enabling the Legacy Experimental Decorators',
      language: 'json',
      code: `{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}`,
    },

    {
      type: 'code',
      title: 'A Class Decorator',
      language: 'typescript',
      code: `function Logger(constructor: Function) {
  console.log(\`Class created: \${constructor.name}\`);
}

@Logger
class UserService {
  // ...
}
// Logs "Class created: UserService" when the class is defined`,
    },

    {
      type: 'paragraph',
      title: 'A Method Decorator',
      content:
        'A method decorator can wrap a method’s behavior — for example, logging every call along with its arguments and result.',
    },

    {
      type: 'code',
      title: 'A Method Decorator (Log Calls)',
      language: 'typescript',
      code: `function LogCall(originalMethod: any, context: ClassMethodDecoratorContext) {
  return function (this: any, ...args: any[]) {
    console.log(\`Calling \${String(context.name)} with\`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @LogCall
  add(a: number, b: number): number {
    return a + b;
  }
}

new Calculator().add(2, 3); // logs the call, then returns 5`,
    },

    {
      type: 'paragraph',
      title: 'Decorator Factories',
      content:
        'A decorator factory is a function that returns a decorator, letting you pass configuration options into the decorator itself.',
    },

    {
      type: 'code',
      title: 'A Decorator Factory',
      language: 'typescript',
      code: `function MinLength(length: number) {
  return function (value: string): boolean {
    return value.length >= length;
  };
}

const isValidPassword = MinLength(8);
isValidPassword("short"); // false`,
    },

    {
      type: 'note',
      title: 'Where Decorators Are Commonly Used',
      content:
        'Decorators are most visible in frameworks like Angular (@Component, @Injectable) and NestJS (@Controller, @Get) — you’ll encounter them constantly as a consumer of these frameworks, even if you rarely write your own.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Decorators are powerful but add a layer of indirection that can be hard to follow. Use them where a framework expects them, but avoid inventing custom decorators in application code unless the abstraction genuinely simplifies things.',
    },
  ],

  quiz: [
    {
      question: 'What does a decorator let you do?',
      options: [
        'Only add comments to code',
        'Observe, modify, or replace a class, method, or property at definition time',
        'Compile TypeScript faster',
        'Convert TypeScript to JavaScript',
      ],
      answer: 1,
    },
    {
      question: 'What is a decorator factory?',
      options: [
        'A special kind of class',
        'A function that returns a decorator, allowing configuration options to be passed in',
        'A build tool for decorators',
        'A decorator that only works on factories',
      ],
      answer: 1,
    },
    {
      question: 'Which frameworks commonly use decorators as part of their API?',
      options: ['Only vanilla Node.js', 'Angular and NestJS, among others', 'Only testing frameworks', 'None, decorators are unused in practice'],
      answer: 1,
    },
  ],

  previous: 'declaration-files',
  next: 'tsconfig-deep-dive',
};
