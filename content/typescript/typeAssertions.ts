import { Tutorial } from '@/app/types/tutorial';

export const typeAssertions: Tutorial = {
  slug: 'type-assertions',

  title: 'Type Assertions',

  description:
    'Learn how to override TypeScript’s inferred type with the as keyword, and when it’s appropriate to do so.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 15 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Type Assertion?',
      content:
        'A type assertion tells the compiler "trust me, I know this value’s type better than you do" — it doesn’t perform any conversion or runtime check, it just changes how TypeScript treats the value at compile time.',
    },

    {
      type: 'code',
      title: 'A Basic Type Assertion',
      language: 'typescript',
      code: `const input = document.getElementById("email") as HTMLInputElement;
console.log(input.value); // .value only exists on HTMLInputElement, not the generic HTMLElement`,
    },

    {
      type: 'paragraph',
      title: 'Common Use Case: DOM APIs',
      content:
        'DOM methods like document.getElementById() return a broad type (HTMLElement | null) since TypeScript can’t know which specific element you meant — assertions are frequently used to narrow this to the actual element type.',
    },

    {
      type: 'code',
      title: 'Angle-Bracket Syntax (Non-JSX Files Only)',
      language: 'typescript',
      code: `// Equivalent to the 'as' syntax, but not usable in .tsx files
const input = <HTMLInputElement>document.getElementById("email");`,
    },

    {
      type: 'paragraph',
      title: 'Assertions Only Work Between Compatible Types',
      content:
        'TypeScript still checks that an assertion is at least plausible — you can’t assert directly between two unrelated types without first going through unknown.',
    },

    {
      type: 'code',
      title: 'An Invalid Assertion',
      language: 'typescript',
      code: `let value = "hello";
let num = value as number; // Error: Conversion may be a mistake

let num2 = value as unknown as number; // Allowed, but dangerous — you're overriding the safety net entirely`,
    },

    {
      type: 'paragraph',
      title: 'The Non-Null Assertion Operator',
      content:
        'A trailing ! tells the compiler a value is definitely not null or undefined, even though its type says it might be. It’s a narrower, more common form of assertion.',
    },

    {
      type: 'code',
      title: 'Non-Null Assertion',
      language: 'typescript',
      code: `function getElement(id: string): HTMLElement | null {
  return document.getElementById(id);
}

const el = getElement("app")!; // asserts the result is not null
el.textContent = "Loaded";`,
    },

    {
      type: 'warning',
      title: 'Assertions Are Not Runtime Checks',
      content:
        'A type assertion doesn’t validate anything — if you assert incorrectly, TypeScript won’t catch the mistake, and it will surface as a runtime error instead, exactly the kind of bug TypeScript is meant to prevent.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use assertions sparingly, and only when you genuinely know more than the compiler (like knowing which specific DOM element an id belongs to). Prefer proper narrowing (typeof, instanceof, custom type guards) whenever it’s possible instead.',
    },
  ],

  quiz: [
    {
      question: 'Does a type assertion convert a value at runtime?',
      options: ['Yes, it converts the value', 'No — it only changes how the compiler treats the type', 'Only for numbers', 'Only in strict mode'],
      answer: 1,
    },
    {
      question: 'What does the trailing ! (non-null assertion) tell the compiler?',
      options: [
        'The value is definitely an array',
        'The value is definitely not null or undefined',
        'The value should be logged',
        'The value is a constant',
      ],
      answer: 1,
    },
    {
      question: 'What happens if a type assertion turns out to be wrong?',
      options: [
        'TypeScript catches it at compile time regardless',
        'It surfaces as a runtime error instead, since the check was skipped',
        'The code simply won’t compile',
        'Nothing, TypeScript silently corrects it',
      ],
      answer: 1,
    },
  ],

  previous: 'optional-and-readonly',
  next: 'classes',
};
