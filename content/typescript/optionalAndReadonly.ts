import { Tutorial } from '@/app/types/tutorial';

export const optionalAndReadonly: Tutorial = {
  slug: 'optional-and-readonly',

  title: 'Optional & Readonly Properties',

  description:
    'Learn how to mark object and interface properties as optional or immutable.',

  level: 'Intermediate',

  readingTime: '12 min',

  lesson: 'Lesson 14 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Optional Properties',
      content:
        'A property marked with ? may be omitted entirely. Its type automatically includes undefined as a possible value.',
    },

    {
      type: 'code',
      title: 'Optional Properties Example',
      language: 'typescript',
      code: `interface Profile {
  username: string;
  bio?: string;
}

const profile1: Profile = { username: "alice" };
const profile2: Profile = { username: "bob", bio: "Loves TypeScript" };`,
    },

    {
      type: 'paragraph',
      title: 'Checking Optional Properties Before Use',
      content:
        'Because an optional property might be undefined, TypeScript requires you to check for its presence before using it in a way that would fail on undefined.',
    },

    {
      type: 'code',
      title: 'Safely Using an Optional Property',
      language: 'typescript',
      code: `function printBio(profile: Profile) {
  if (profile.bio) {
    console.log(profile.bio.toUpperCase());
  }

  // or with optional chaining:
  console.log(profile.bio?.toUpperCase() ?? "No bio provided");
}`,
    },

    {
      type: 'paragraph',
      title: 'Readonly Properties',
      content:
        'A property marked readonly can be set once, typically at creation, but can never be reassigned afterward.',
    },

    {
      type: 'code',
      title: 'Readonly Properties Example',
      language: 'typescript',
      code: `interface Point {
  readonly x: number;
  readonly y: number;
}

const origin: Point = { x: 0, y: 0 };
origin.x = 10; // Error: Cannot assign to 'x' because it is a read-only property`,
    },

    {
      type: 'paragraph',
      title: 'readonly Arrays',
      content:
        'Arrays can be made readonly too, preventing mutating methods like push() or sort() from being called, while still allowing you to read from them.',
    },

    {
      type: 'code',
      title: 'Readonly Arrays',
      language: 'typescript',
      code: `const tags: readonly string[] = ["typescript", "javascript"];

tags.push("react"); // Error: Property 'push' does not exist on type 'readonly string[]'
console.log(tags[0]); // OK — reading is fine`,
    },

    {
      type: 'note',
      title: 'readonly is a Compile-Time Guarantee Only',
      content:
        'Like all TypeScript types, readonly is erased at compile time. It prevents mistakes in your own TypeScript code, but doesn’t truly freeze the object at runtime the way Object.freeze() does.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Mark properties readonly whenever they represent identity or configuration that should never change after creation — it communicates intent clearly and catches accidental mutation early.',
    },
  ],

  quiz: [
    {
      question: 'What type does an optional property implicitly include?',
      options: ['null', 'undefined', 'never', 'any'],
      answer: 1,
    },
    {
      question: 'What happens if you try to reassign a readonly property after creation?',
      options: ['It silently succeeds', 'TypeScript reports a compile error', 'It throws at runtime automatically', 'Nothing, readonly has no effect'],
      answer: 1,
    },
    {
      question: 'Does readonly provide true runtime immutability like Object.freeze()?',
      options: ['Yes, identical behavior', 'No — it is a compile-time-only check', 'Only for arrays', 'Only for primitives'],
      answer: 1,
    },
  ],

  previous: 'objects',
  next: 'type-assertions',
};
