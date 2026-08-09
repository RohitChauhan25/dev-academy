import { Tutorial } from '@/app/types/tutorial';

export const generics: Tutorial = {
  slug: 'generics',

  title: 'Generics',

  description:
    'Learn how to write reusable, type-safe functions, interfaces, and classes using generics.',

  level: 'Intermediate',

  readingTime: '20 min',

  lesson: 'Lesson 19 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'The Problem Generics Solve',
      content:
        'Without generics, a reusable function either loses type safety (typing a parameter as any) or has to be duplicated for every type it needs to support. Generics let a function stay both reusable and fully type-safe.',
    },

    {
      type: 'code',
      title: 'Without Generics: Losing Type Safety',
      language: 'typescript',
      code: `function firstElement(arr: any[]): any {
  return arr[0];
}

const num = firstElement([1, 2, 3]); // typed as 'any' — no safety at all`,
    },

    {
      type: 'code',
      title: 'With Generics: Type Safety Preserved',
      language: 'typescript',
      code: `function firstElement<T>(arr: T[]): T {
  return arr[0];
}

const num = firstElement([1, 2, 3]);       // inferred as number
const str = firstElement(["a", "b", "c"]); // inferred as string`,
    },

    {
      type: 'paragraph',
      title: 'How Generic Type Parameters Work',
      content:
        '<T> declares a placeholder type parameter. When the function is called, TypeScript infers T from the arguments passed in, and uses that specific type everywhere T appears in the signature.',
    },

    {
      type: 'paragraph',
      title: 'Multiple Type Parameters',
      content:
        'A function can accept more than one type parameter, each inferred independently from the arguments.',
    },

    {
      type: 'code',
      title: 'Multiple Type Parameters Example',
      language: 'typescript',
      code: `function pair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}

const result = pair("age", 25); // inferred as [string, number]`,
    },

    {
      type: 'paragraph',
      title: 'Generic Interfaces',
      content:
        'Interfaces can be generic too, letting you describe a reusable shape — like an API response wrapper — that works with any inner data type.',
    },

    {
      type: 'code',
      title: 'A Generic Interface',
      language: 'typescript',
      code: `interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const userResponse: ApiResponse<{ name: string }> = {
  data: { name: "Alice" },
  success: true,
};`,
    },

    {
      type: 'paragraph',
      title: 'Generic Classes',
      content:
        'Classes can be generic as well, useful for building reusable data structures like a typed stack, queue, or cache.',
    },

    {
      type: 'code',
      title: 'A Generic Class',
      language: 'typescript',
      code: `class Box<T> {
  constructor(private value: T) {}

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(42);
const stringBox = new Box("hello"); // T inferred as string`,
    },

    {
      type: 'note',
      title: 'T is Just a Convention',
      content:
        'T, K, V, and U are naming conventions, not special syntax — you can name a type parameter anything, though single, capitalized letters are the common style for generic code.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for generics as soon as you notice a function or class working identically across multiple types, but with any or type duplication as the only alternatives. Let TypeScript infer the type parameter from arguments whenever possible instead of specifying it explicitly.',
    },
  ],

  quiz: [
    {
      question: 'What problem do generics solve?',
      options: [
        'They make code run faster',
        'They let reusable code stay type-safe instead of using any or duplicating logic per type',
        'They remove the need for interfaces',
        'They only work with arrays',
      ],
      answer: 1,
    },
    {
      question: 'In function firstElement<T>(arr: T[]): T, how is T determined?',
      options: [
        'It must always be manually specified',
        'TypeScript infers it from the argument passed at the call site',
        'It is always "any"',
        'It is fixed at "string"',
      ],
      answer: 1,
    },
    {
      question: 'Can interfaces and classes be generic, not just functions?',
      options: ['No, only functions', 'Yes, both interfaces and classes can be generic', 'Only classes can', 'Only interfaces can'],
      answer: 1,
    },
  ],

  previous: 'interfaces-vs-types',
  next: 'generic-constraints',
};
