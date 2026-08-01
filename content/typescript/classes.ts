import { Tutorial } from '@/app/types/tutorial';

export const classes: Tutorial = {
  slug: 'classes',

  title: 'Classes',

  description:
    'Learn how TypeScript adds typed properties, constructors, and inheritance to JavaScript classes.',

  level: 'Intermediate',

  readingTime: '18 min',

  lesson: 'Lesson 16 of 30',

  sections: [
    {
      type: 'paragraph',
      title: 'Typed Class Properties',
      content:
        'TypeScript classes declare their properties with types up front, and the constructor is responsible for initializing them.',
    },

    {
      type: 'code',
      title: 'A Basic Typed Class',
      language: 'typescript',
      code: `class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  greet(): string {
    return \`Hello, \${this.name}!\`;
  }
}

const user = new User("Alice", "alice@example.com");`,
    },

    {
      type: 'paragraph',
      title: 'Constructor Parameter Properties',
      content:
        'TypeScript offers a shorthand that declares and initializes a property directly from a constructor parameter, removing repetitive boilerplate.',
    },

    {
      type: 'code',
      title: 'Parameter Properties Shorthand',
      language: 'typescript',
      code: `class User {
  constructor(
    public name: string,
    public email: string,
  ) {}
}

// Equivalent to manually declaring name/email and assigning them in the body`,
    },

    {
      type: 'paragraph',
      title: 'Inheritance',
      content:
        'A class extends another with extends, inheriting its members. The subclass constructor must call super() before accessing this if the parent has its own constructor.',
    },

    {
      type: 'code',
      title: 'Class Inheritance',
      language: 'typescript',
      code: `class Animal {
  constructor(public name: string) {}

  speak(): string {
    return \`\${this.name} makes a sound.\`;
  }
}

class Dog extends Animal {
  speak(): string {
    return \`\${this.name} barks.\`;
  }
}

const pet: Animal = new Dog("Rex");
console.log(pet.speak()); // "Rex barks."`,
    },

    {
      type: 'paragraph',
      title: 'Abstract Classes',
      content:
        'An abstract class can’t be instantiated directly — it exists to be extended, and can declare abstract methods that subclasses are required to implement.',
    },

    {
      type: 'code',
      title: 'Abstract Class',
      language: 'typescript',
      code: `abstract class Shape {
  abstract area(): number;

  describe(): string {
    return \`Area: \${this.area()}\`;
  }
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  area(): number {
    return this.side ** 2;
  }
}

new Shape(); // Error: Cannot create an instance of an abstract class`,
    },

    {
      type: 'note',
      title: 'Classes Implement, Interfaces Extend',
      content:
        'A class uses implements to satisfy an interface’s shape, while an interface uses extends to build on another interface — both describe the same idea of "has this shape," but with slightly different keywords depending on context.',
    },

    {
      type: 'tip',
      title: 'Best Practice',
      content:
        'Use the constructor parameter property shorthand for simple classes — it keeps declarations concise and puts each property’s type right next to where it’s assigned.',
    },
  ],

  quiz: [
    {
      question: 'What does the parameter property shorthand (constructor(public name: string))  do?',
      options: [
        'Nothing extra, it’s just a regular parameter',
        'Declares and initializes a class property from the constructor parameter automatically',
        'Makes the parameter optional',
        'Only works with private properties',
      ],
      answer: 1,
    },
    {
      question: 'What must a subclass constructor call before using this, if the parent has its own constructor?',
      options: ['this()', 'super()', 'extend()', 'init()'],
      answer: 1,
    },
    {
      question: 'Can an abstract class be instantiated directly with new?',
      options: ['Yes, always', 'No — it must be extended by a concrete subclass first', 'Only if it has no abstract methods', 'Only in strict mode'],
      answer: 1,
    },
  ],

  previous: 'type-assertions',
  next: 'access-modifiers',
};
