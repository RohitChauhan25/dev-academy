import { Tutorial } from '@/app/types/tutorial';

export const accessModifiers: Tutorial = {
  slug: 'access-modifiers',

  title: 'Access Modifiers',

  description:
    'Learn how public, private, protected, and readonly control the visibility of class members.',

  level: 'Intermediate',

  readingTime: '14 min',

  lesson: 'Lesson 17 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'What Are Access Modifiers?',
      content:
        'Access modifiers control where a class member can be accessed from — the class itself, its subclasses, or anywhere. TypeScript enforces them at compile time.',
    },

    {
      type: 'table',
      title: 'Access Modifiers',
      headers: ['Modifier', 'Accessible From'],
      rows: [
        ['public (default)', 'Anywhere — the class, subclasses, and outside code'],
        ['private', 'Only within the declaring class itself'],
        ['protected', 'The declaring class and its subclasses, but not outside code'],
        ['readonly', 'Can be combined with any of the above; prevents reassignment after construction'],
      ],
    },

    {
      type: 'code',
      title: 'public, private, and protected',
      language: 'typescript',
      code: `class BankAccount {
  public accountHolder: string;
  private balance: number;
  protected accountNumber: string;

  constructor(accountHolder: string, balance: number, accountNumber: string) {
    this.accountHolder = accountHolder;
    this.balance = balance;
    this.accountNumber = accountNumber;
  }

  deposit(amount: number): void {
    this.balance += amount; // OK: inside the class
  }
}

const account = new BankAccount("Alice", 1000, "ACC-001");
account.balance; // Error: 'balance' is private`,
    },

    {
      type: 'paragraph',
      title: 'protected in Subclasses',
      content:
        'A protected member is hidden from outside code but remains accessible to any class that extends the declaring class, useful for internal details that subclasses still need.',
    },

    {
      type: 'code',
      title: 'protected Accessible in a Subclass',
      language: 'typescript',
      code: `class SavingsAccount extends BankAccount {
  showAccountNumber(): string {
    return this.accountNumber; // OK: protected, accessible in a subclass
  }
}`,
    },

    {
      type: 'paragraph',
      title: 'Native JavaScript Private Fields',
      content:
        'JavaScript itself now supports true private fields with a # prefix, which are enforced at runtime, not just compile time — unlike TypeScript’s private keyword, which is erased when compiled.',
    },

    {
      type: 'code',
      title: 'Native # Private Fields',
      language: 'typescript',
      code: `class Counter {
  #count = 0;

  increment(): void {
    this.#count++;
  }

  get value(): number {
    return this.#count;
  }
}

const counter = new Counter();
counter.#count; // Error, and also fails at runtime — truly inaccessible`,
    },

    {
      type: 'warning',
      title: 'TypeScript private is Compile-Time Only',
      content:
        'Because TypeScript’s private is erased during compilation, the compiled JavaScript output has no real enforcement — code that bypasses the type checker (or plain JavaScript consumers) can still access it at runtime.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Reach for native # private fields when you need genuine runtime privacy (like a library’s internal state), and TypeScript’s private/protected for everyday encapsulation within your own typed codebase.',
    },
  ],

  quiz: [
    {
      question: 'Which access modifier is the default when none is specified?',
      options: ['private', 'protected', 'public', 'readonly'],
      answer: 2,
    },
    {
      question: 'Can a protected member be accessed from a subclass?',
      options: ['No, never', 'Yes, from the class and its subclasses', 'Only from outside code', 'Only if also public'],
      answer: 1,
    },
    {
      question: 'What is the key difference between TypeScript’s private and native # private fields?',
      options: [
        'There is no difference',
        'Native # fields are enforced at runtime; TypeScript’s private is compile-time only',
        'private is faster',
        '# fields only work in interfaces',
      ],
      answer: 1,
    },
  ],

  previous: 'classes',
  next: 'interfaces-vs-types',
};
