import { Tutorial } from '@/app/types/tutorial';

export const typeInference: Tutorial = {
  slug: 'type-inference',

  title: 'Type Inference',

  description:
    'Learn how TypeScript automatically infers types from context, reducing how often you need to write explicit annotations.',

  level: 'Beginner',

  readingTime: '12 min',

  lesson: 'Lesson 7 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is Type Inference?',
      content:
        'TypeScript can often figure out a value’s type automatically from how it’s initialized, without you writing an explicit annotation at all.',
    },

    {
      type: 'code',
      title: 'Inference from Initial Value',
      language: 'typescript',
      code: `let count = 10;       // inferred as number
let name = "Alice";   // inferred as string
let isDone = false;   // inferred as boolean

count = "ten"; // Error: Type 'string' is not assignable to type 'number'`,
    },

    {
      type: 'paragraph',
      title: 'Inference in Function Return Types',
      content:
        'TypeScript also infers a function’s return type from its return statements, so you often don’t need to annotate it explicitly.',
    },

    {
      type: 'code',
      title: 'Inferred Return Type',
      language: 'typescript',
      code: `function add(a: number, b: number) {
  return a + b; // return type inferred as number
}`,
    },

    {
      type: 'paragraph',
      title: 'Contextual Typing',
      content:
        'TypeScript can also infer types based on where a value is used — for example, callback parameters in array methods are typed automatically based on the array’s element type.',
    },

    {
      type: 'code',
      title: 'Contextual Typing in a Callback',
      language: 'typescript',
      code: `const numbers = [1, 2, 3];

numbers.forEach((n) => {
  // 'n' is automatically inferred as number, no annotation needed
  console.log(n.toFixed(2));
});`,
    },

    {
      type: 'paragraph',
      title: 'The best common type Algorithm',
      content:
        'When an array contains multiple types, TypeScript infers a union type that covers every element.',
    },

    {
      type: 'code',
      title: 'Inferred Union Type',
      language: 'typescript',
      code: `let mixed = [1, "two", 3]; // inferred as (string | number)[]`,
    },

    {
      type: 'warning',
      title: 'Uninitialized Variables Infer as any',
      content:
        'A variable declared without an initial value and without strict mode may be implicitly typed as any, silently losing type safety. noImplicitAny (included in strict mode) turns this into a compile error instead.',
    },

    {
      type: 'code',
      title: 'noImplicitAny Catches This',
      language: 'typescript',
      code: `let value; // implicitly 'any' without strict mode
value = 5;
value = "now a string too"; // allowed with implicit any, which defeats the purpose`,
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Let inference handle simple local variables and return types. Add explicit annotations at your codebase’s boundaries — function parameters, exported functions, and public APIs — where inference has nothing to infer from.',
    },
  ],

  quiz: [
    {
      question: 'Does TypeScript require an explicit annotation for every variable?',
      options: [
        'Yes, always',
        'No — it can infer types from initial values and context',
        'Only for numbers',
        'Only inside functions',
      ],
      answer: 1,
    },
    {
      question: 'What type is inferred for an array like [1, "two", 3]?',
      options: ['any[]', '(string | number)[]', 'number[]', 'It causes an error'],
      answer: 1,
    },
    {
      question: 'What does noImplicitAny do?',
      options: [
        'Disables all type checking',
        'Errors when a value would otherwise silently be inferred as any',
        'Forces every variable to be a union type',
        'Only applies to function return types',
      ],
      answer: 1,
    },
  ],

  previous: 'any-unknown-never',
  next: 'type-aliases',
};
