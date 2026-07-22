export const classFeatures = {
  slug: 'class-features',

  title: 'Static, Private, and Getter/Setter Members',

  description:
    'Go beyond basic classes with static methods and properties, true private fields using #, and getter/setter methods that let you control how a property is read and written.',

  level: 'Advanced',

  readingTime: '18 min',

  lesson: 'Lesson 40 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'Beyond the Basics',
      content:
        'A basic class with a constructor and instance methods covers most everyday needs, but JavaScript classes support a few more advanced members that solve specific, common problems: static members for behavior that belongs to the class itself rather than any one instance, private fields for genuine encapsulation, and getters/setters for controlling how a property is read or written. Each of these earns its place by making certain patterns much cleaner to express.',
    },

    {
      type: 'paragraph',
      title: 'Static Methods and Properties',
      content:
        "A member marked with the static keyword belongs to the class itself, not to any individual instance — you call it as ClassName.member() rather than instance.member(). Static members are useful for utility functions related to the class's purpose (like a factory that builds instances in a special way) or for shared data that all instances should be aware of, but that doesn't belong to any single one of them.",
    },

    {
      type: 'code',
      title: 'A Static Method and a Static Property',
      language: 'javascript',
      code: `class User {
  static totalUsers = 0; // static property

  constructor(name) {
    this.name = name;
    User.totalUsers += 1;
  }

  static createGuest() {
    // static method — a factory that returns a special instance
    return new User("Guest");
  }
}

const alice = new User("Alice");
const bob = new User("Bob");
const guest = User.createGuest();

console.log(User.totalUsers); // 3
console.log(alice.totalUsers); // undefined — not available on instances`,
    },

    {
      type: 'note',
      title: 'Static Members Are Not Inherited to Instances',
      content:
        'Static properties and methods live only on the class itself. Trying to access them through an instance, like alice.totalUsers, will not work — you must always go through the class name, or through this inside another static method.',
    },

    {
      type: 'paragraph',
      title: 'Private Fields and Methods with #',
      content:
        'Before the # syntax, JavaScript had no true way to make a class member private — properties assigned with this were always accessible from outside the class, just by convention or a leading underscore that anyone could ignore. Prefixing a field or method name with # makes it genuinely private: it can only be accessed from inside the class body, and even attempting to read it from outside throws a SyntaxError rather than quietly returning undefined.',
    },

    {
      type: 'code',
      title: 'A Truly Private Field',
      language: 'javascript',
      code: `class BankAccount {
  #balance; // private field, declared up front

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  #logTransaction(type, amount) {
    // private method — internal bookkeeping only
    console.log(type + ": " + amount);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient funds");
      return this.#balance;
    }
    this.#balance -= amount;
    this.#logTransaction("withdraw", amount);
    return this.#balance;
  }
}

const account = new BankAccount(100);
console.log(account.deposit(50)); // 150
console.log(account.withdraw(30)); // logs "withdraw: 30", returns 120

console.log(account.#balance);
// SyntaxError: Private field '#balance' must be declared in an enclosing class`,
    },

    {
      type: 'warning',
      title: 'Private Fields Must Be Declared in the Class Body',
      content:
        "Unlike regular instance properties, you can't create a private field on the fly by just assigning this.#something inside a method — every private field must first be declared directly in the class body (even if only as #balance; with no initial value), or JavaScript throws a SyntaxError.",
    },

    {
      type: 'paragraph',
      title: 'Getters and Setters',
      content:
        "The get and set keywords let you define a property that looks like a plain field from the outside, but is actually backed by a method. A getter runs custom code whenever the property is read; a setter runs custom code whenever it's assigned. This is how you validate incoming values, compute a derived value on the fly, or expose a controlled view onto a private field, all while keeping the calling code as simple as account.balance rather than account.getBalance().",
    },

    {
      type: 'code',
      title: 'Getters and Setters on Their Own',
      language: 'javascript',
      code: `class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    console.log("Cannot set area directly — adjust width or height instead");
  }
}

const rect = new Rectangle(4, 5);

console.log(rect.area); // 20 — called like a property, runs like a method
rect.area = 100;        // logs the warning message, does not change area
console.log(rect.area); // still 20`,
    },

    {
      type: 'paragraph',
      title: 'Combining Them: a Private Field Behind a Getter/Setter',
      content:
        'The most practical pattern combines all three features: a private field holds the real data, and a public getter/setter pair controls how that data is read and written — including validation. Outside code interacts with a clean property name and never touches the private field directly, but every read and write can be checked or transformed.',
    },

    {
      type: 'code',
      title: 'A Validated Property Backed by a Private Field',
      language: 'javascript',
      code: `class Temperature {
  #celsius;

  constructor(celsius) {
    this.#celsius = celsius;
  }

  get fahrenheit() {
    return (this.#celsius * 9) / 5 + 32;
  }

  set fahrenheit(value) {
    this.#celsius = ((value - 32) * 5) / 9;
  }

  get celsius() {
    return this.#celsius;
  }

  set celsius(value) {
    if (typeof value !== "number") {
      throw new Error("Temperature must be a number");
    }
    this.#celsius = value;
  }
}

const temp = new Temperature(25);

console.log(temp.fahrenheit); // 77
temp.fahrenheit = 98.6;
console.log(temp.celsius);    // 37

temp.celsius = "hot"; // Error: Temperature must be a number`,
    },

    {
      type: 'table',
      title: 'Class Feature Cheat Sheet',
      headers: ['Feature', 'Syntax', 'Called On', 'Purpose'],
      rows: [
        [
          'Static method/property',
          'static name() / static name = value',
          'The class itself',
          'Shared behavior/data not tied to one instance',
        ],
        [
          'Private field/method',
          '#name',
          'this, inside the class only',
          'True encapsulation — inaccessible from outside',
        ],
        [
          'Getter',
          'get name()',
          'Read like a property: obj.name',
          'Compute or expose a value on read',
        ],
        [
          'Setter',
          'set name(value)',
          'Assign like a property: obj.name = x',
          'Validate or transform a value on write',
        ],
      ],
    },

    {
      type: 'list',
      title: 'When to Reach for Each Feature',
      items: [
        'Use static members for factory methods or class-wide counters/configuration',
        'Use private fields whenever internal state should never be touched from outside the class',
        'Use a getter when you want a computed, read-only-feeling property',
        'Use a setter alongside a private field when you need to validate incoming values',
        'Combine private fields with getters/setters for controlled, safe access to internal data',
      ],
    },

    {
      type: 'tip',
      title: 'Private Fields Are Also useful for Preventing Naming Collisions',
      content:
        'Because # fields are scoped to the class body, a subclass and a parent class can each safely use a private field with the same name without any conflict — they are completely separate. This is one more advantage private fields have over plain this properties, which live in one shared namespace on the instance.',
    },

    {
      type: 'warning',
      title: 'Getters/Setters Can Hide Expensive Work',
      content:
        "Because a getter is called with simple property syntax (obj.value), it's easy to forget that it might be doing real computation behind the scenes, unlike a plain property lookup. Avoid putting slow or side-effect-heavy logic inside a getter — callers reasonably expect reading a property to be fast and safe to do repeatedly.",
    },
  ],

  quiz: [
    {
      question:
        'How do you call a static method named createGuest() defined on a class named User?',
      options: [
        'new User().createGuest()',
        'User.createGuest()',
        'User.prototype.createGuest()',
        'createGuest(User)',
      ],
      answer: 1,
    },
    {
      question: 'What symbol is used to declare a private field in a class?',
      options: ['_ (underscore)', '$ (dollar sign)', '# (hash)', '@ (at sign)'],
      answer: 2,
    },
    {
      question:
        'What happens if you try to access a private field from outside the class that declares it?',
      options: [
        'It returns undefined',
        'It returns the value normally',
        'It throws a SyntaxError',
        'It automatically converts it to a public field',
      ],
      answer: 2,
    },
    {
      question: 'What is the purpose of a getter in a class?',
      options: [
        'To permanently delete a property',
        'To let a property be read using simple property syntax while running custom logic behind the scenes',
        'To make a property static',
        'To rename a property',
      ],
      answer: 1,
    },
    {
      question:
        'In the Temperature class example, why does temp.celsius = "hot" throw an error?',
      options: [
        'Because strings cannot be assigned to any variable in JavaScript',
        'Because the celsius setter explicitly checks the type and throws when it is not a number',
        'Because #celsius is read-only and can never be reassigned',
        'Because get and set cannot be used together in the same class',
      ],
      answer: 1,
    },
  ],

  previous: 'class-inheritance',
  next: 'error-handling',
};
