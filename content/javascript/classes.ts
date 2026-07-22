export const classes = {
  slug: 'classes',

  title: 'Classes',

  description:
    'Learn how to define classes in JavaScript, write constructors and instance methods, create objects with new, and understand that classes are really just syntactic sugar over prototypes.',

  level: 'Intermediate',

  readingTime: '20 min',

  lesson: 'Lesson 31 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'What is a Class?',
      content:
        "A class is a template for creating objects that share the same shape — the same properties and the same methods. Instead of writing out an object literal from scratch every time you need a new user, product, or task, you define a class once, describing what every instance should have, and then create as many instances as you need with the new keyword. Classes were introduced in ES6 as a cleaner, more familiar syntax for something JavaScript could already do with functions and prototypes — they don't add a new capability to the language, they add a nicer way of expressing an existing one.",
    },

    {
      type: 'paragraph',
      title: 'Class Declaration Syntax',
      content:
        'A class is declared with the class keyword followed by a name, written in PascalCase by convention (capitalized, like User or Product), and a body wrapped in curly braces. Inside that body you can define a constructor, instance methods, and instance properties — notice there are no commas between members, unlike an object literal.',
    },

    {
      type: 'code',
      title: 'A Minimal Class',
      language: 'javascript',
      code: `class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  describe() {
    return this.name + " (" + this.email + ")";
  }
}

const alice = new User("Alice", "alice@example.com");
console.log(alice.describe());
// "Alice (alice@example.com)"`,
    },

    {
      type: 'paragraph',
      title: 'The Constructor Method',
      content:
        "The constructor is a special method that runs automatically whenever a new instance is created with new. It's where you typically set up the instance's initial properties, usually based on arguments passed in when the object is created. A class can have at most one constructor — defining a second one is a syntax error. If you omit the constructor entirely, JavaScript provides an empty default one for you.",
    },

    {
      type: 'code',
      title: 'Constructor Receiving Arguments',
      language: 'javascript',
      code: `class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
    this.inStock = true; // a default that doesn't come from an argument
  }
}

const laptop = new Product("Laptop", 55000);
console.log(laptop.title);   // "Laptop"
console.log(laptop.price);   // 55000
console.log(laptop.inStock); // true`,
    },

    {
      type: 'paragraph',
      title: 'Instance Methods',
      content:
        'Any function defined inside the class body (other than the constructor) becomes an instance method — a function every object created from the class can call. Instance methods are defined once on the class and shared by all instances, rather than being recreated for every single object, which makes them memory-efficient compared to assigning a function directly inside the constructor.',
    },

    {
      type: 'code',
      title: 'Multiple Instance Methods',
      language: 'javascript',
      code: `class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  applyDiscount(percent) {
    this.price = this.price - (this.price * percent) / 100;
  }

  describe() {
    return this.title + " costs ₹" + this.price;
  }
}

const laptop = new Product("Laptop", 50000);

laptop.applyDiscount(10);
console.log(laptop.describe());
// "Laptop costs ₹45000"`,
    },

    {
      type: 'paragraph',
      title: 'Instance Properties',
      content:
        "Instance properties are the data that belongs to each individual object — things like name, email, or price above. They're usually assigned inside the constructor using this, but modern JavaScript also lets you declare them directly in the class body as class fields, with or without a default value, which get set on every instance before the constructor body runs.",
    },

    {
      type: 'code',
      title: 'Class Fields as an Alternative to Constructor Assignment',
      language: 'javascript',
      code: `class Counter {
  count = 0; // class field — every instance starts with count = 0

  increment() {
    this.count += 1;
    return this.count;
  }
}

const counter = new Counter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2`,
    },

    {
      type: 'paragraph',
      title: 'Creating Instances with new',
      content:
        "Calling a class with the new keyword does several things at once: it creates a brand-new empty object, sets that object's internal prototype to the class's prototype, runs the constructor with this bound to the new object, and returns the object (unless the constructor explicitly returns a different object). Forgetting new is a common mistake — calling User(...) without new throws an error, because classes cannot be called as plain functions.",
    },

    {
      type: 'code',
      title: 'What Happens Without new',
      language: 'javascript',
      code: `class User {
  constructor(name) {
    this.name = name;
  }
}

const bob = new User("Bob");
console.log(bob.name); // "Bob"

const broken = User("Bob");
// TypeError: Class constructor User cannot be invoked without 'new'`,
    },

    {
      type: 'paragraph',
      title: 'Classes are Syntactic Sugar Over Prototypes',
      content:
        "Under the hood, a class is still using JavaScript's original prototype-based inheritance model — class methods are placed on the class's prototype object, exactly the way they would be if you'd built them manually. Writing class User { ... } and writing a constructor function with methods attached to User.prototype produce objects that behave almost identically. The class syntax doesn't change what's possible, it just makes the intent clearer and catches a few mistakes (like calling without new) that plain functions wouldn't.",
    },

    {
      type: 'code',
      title: 'A Class vs. the Equivalent Constructor Function',
      language: 'javascript',
      code: `// Using a class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " makes a sound.";
  }
}

// The equivalent, written with a constructor function + prototype
function AnimalFn(name) {
  this.name = name;
}

AnimalFn.prototype.speak = function () {
  return this.name + " makes a sound.";
};

const a = new Animal("Rex");
const b = new AnimalFn("Rex");

console.log(a.speak()); // "Rex makes a sound."
console.log(b.speak()); // "Rex makes a sound."

console.log(Object.getPrototypeOf(a) === Animal.prototype); // true
console.log(Object.getPrototypeOf(b) === AnimalFn.prototype); // true`,
    },

    {
      type: 'table',
      title: 'Class Syntax vs. Constructor Function + Prototype',
      headers: ['Aspect', 'Class', 'Constructor Function'],
      rows: [
        [
          'Method storage',
          'Automatically placed on Class.prototype',
          'Must be manually assigned to Fn.prototype',
        ],
        [
          'Calling without new',
          'Throws a TypeError',
          'Silently runs with this as the global object (sloppy mode)',
        ],
        [
          'Hoisting',
          'Not initialized until the class definition runs',
          'Fully hoisted, like any function declaration',
        ],
        [
          'Strict mode',
          'Class bodies are always strict mode',
          'Depends on surrounding code',
        ],
      ],
    },

    {
      type: 'warning',
      title: 'Classes Are Not Hoisted the Same Way',
      content:
        "Function declarations are hoisted and can be called before their definition appears in the file. Classes are hoisted too, but they land in a 'temporal dead zone' — trying to use a class before its declaration throws a ReferenceError instead of quietly working. Always declare a class before you construct instances of it.",
    },

    {
      type: 'tip',
      title: 'Keep Constructors Focused on Setup',
      content:
        'A good habit is to keep the constructor limited to assigning initial properties, and put any real logic into instance methods instead. If a constructor starts making network calls or running heavy computations, it becomes hard to control when that work actually happens, since it fires the instant new is called.',
    },
  ],

  quiz: [
    {
      question: 'Which keyword is used to create an instance of a class?',
      options: ['create', 'new', 'instance', 'make'],
      answer: 1,
    },
    {
      question: 'What is the main purpose of the constructor method?',
      options: [
        'To delete instance properties',
        'To initialize a new instance, usually setting its starting properties',
        'To define static-only behavior',
        'To convert the class into a function',
      ],
      answer: 1,
    },
    {
      question:
        'Where are instance methods defined inside a class actually stored?',
      options: [
        'Directly on every individual instance',
        'On the class’s prototype object, shared by all instances',
        'In the global scope',
        'They are not stored anywhere until called',
      ],
      answer: 1,
    },
    {
      question: 'What happens if you call a class without the new keyword?',
      options: [
        'It runs normally, treating this as the global object',
        'It throws a TypeError',
        'It silently returns undefined',
        'It automatically adds new for you',
      ],
      answer: 1,
    },
    {
      question: 'How many constructor methods can a single class have?',
      options: [
        'As many as needed',
        'Exactly one',
        'Zero, always',
        'Two — one public, one private',
      ],
      answer: 1,
    },
  ],

  previous: 'this-keyword',
  next: 'class-inheritance',
};
