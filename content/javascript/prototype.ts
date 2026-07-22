export const prototype = {
  slug: 'prototype',

  title: 'The Prototype Chain',

  description:
    'Go beneath class syntax to understand how JavaScript really shares behavior between objects — the internal [[Prototype]] link, prototype-based method sharing, Object.create(), and how instanceof works.',

  level: 'Advanced',

  readingTime: '18 min',

  lesson: 'Lesson 46 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'Every Object Has a Hidden Link',
      content:
        "Every object in JavaScript carries an internal, hidden link to another object (or to null), called its [[Prototype]] — the double brackets signal that it's an internal slot, not a property you access directly with dot notation. This linked object is called the object's prototype. When you look up a property on an object and that property doesn't exist directly on the object itself, JavaScript doesn't just give up — it follows the [[Prototype]] link and looks there instead, and keeps following the chain of links until it either finds the property or reaches an object whose prototype is null, at which point the chain ends and the lookup returns undefined.",
    },

    {
      type: 'paragraph',
      title: 'Accessing the Prototype: getPrototypeOf and __proto__',
      content:
        "You can't reach [[Prototype]] directly, but you can inspect and change it. Object.getPrototypeOf(obj) is the standard, modern way to read an object's prototype, and Object.setPrototypeOf(obj, newProto) lets you change it (though doing so hurts performance and is rarely necessary). You may also encounter obj.__proto__, a legacy getter/setter that does the same thing — it works in every browser for compatibility reasons, but it was never part of the language's core design the way Object.getPrototypeOf() is, and modern code should prefer the function form.",
    },

    {
      type: 'code',
      title: 'Inspecting the Prototype Link',
      language: 'javascript',
      code: `const animal = {
  eats: true,
};

const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats);
// true — not found on rabbit directly, found via the prototype chain

console.log(Object.getPrototypeOf(rabbit) === animal);
// true

console.log(rabbit.__proto__ === animal);
// true — same thing, legacy syntax

console.log(Object.getPrototypeOf(animal));
// Object.prototype — the built-in root prototype almost everything inherits from

console.log(Object.getPrototypeOf(Object.prototype));
// null — the very end of the chain`,
    },

    {
      type: 'paragraph',
      title: 'How Property Lookup Walks the Chain',
      content:
        "When you write rabbit.eats, the JavaScript engine first checks whether rabbit itself has an own property called eats. It doesn't, so the engine moves to Object.getPrototypeOf(rabbit) — which is animal — and checks there instead. animal does have an eats property, so that value is returned. If animal hadn't had it either, the engine would have continued up to Object.getPrototypeOf(animal), which is Object.prototype, and checked there, and so on until it hit null. This walk happens on every property and method lookup, automatically and invisibly, which is exactly how objects appear to 'inherit' behavior from other objects without copying anything.",
    },

    {
      type: 'code',
      title: 'Own Properties vs. Inherited Properties',
      language: 'javascript',
      code: `const animal = { eats: true };
const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.hasOwnProperty('jumps'));
// true — jumps lives directly on rabbit

console.log(rabbit.hasOwnProperty('eats'));
// false — eats is inherited, not an own property

console.log('eats' in rabbit);
// true — the "in" operator checks the whole prototype chain

for (const key in rabbit) {
  console.log(key);
}
// "jumps"
// "eats" — for...in also walks the prototype chain (for enumerable properties)`,
    },

    {
      type: 'paragraph',
      title: 'Constructor Functions and .prototype',
      content:
        'Before class syntax existed — and still, underneath it — JavaScript shared methods between many objects using constructor functions together with a special property every function has: .prototype. Note the distinction: [[Prototype]] is the internal link an object has to another object, while .prototype is an ordinary, visible property that only functions have, holding the object that will become the [[Prototype]] of every instance created from that function with new. Placing a method on Fn.prototype means every instance shares that exact same function in memory, rather than each instance carrying its own separate copy.',
    },

    {
      type: 'code',
      title: 'Sharing Methods via .prototype',
      language: 'javascript',
      code: `function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  return 'Hi, I am ' + this.name;
};

const alice = new User('Alice');
const bob = new User('Bob');

console.log(alice.greet());
// "Hi, I am Alice"

console.log(bob.greet());
// "Hi, I am Bob"

console.log(alice.greet === bob.greet);
// true — both instances share the EXACT SAME function in memory

console.log(Object.getPrototypeOf(alice) === User.prototype);
// true — this is the link "new" set up automatically`,
    },

    {
      type: 'note',
      title: 'Memory Efficiency: Shared vs. Per-Instance Methods',
      content:
        'If greet() were instead assigned inside the constructor with this.greet = function () { ... }, every single instance would get its own separate copy of that function, wasting memory as the number of instances grows. Putting it on User.prototype means there is exactly one greet function in memory no matter how many users you create, and every instance simply finds it by walking the prototype chain when greet() is called.',
    },

    {
      type: 'paragraph',
      title: 'Object.create(): Building an Object with a Chosen Prototype',
      content:
        'Object.create(proto) creates a brand-new, empty object and directly sets its [[Prototype]] to whatever object you pass in — no constructor function, no new keyword required. This is the most explicit way to set up prototype-based sharing: you build one object holding the shared behavior, then use Object.create() to produce as many objects linked to it as you like. Passing null creates an object with no prototype at all — not even Object.prototype — which is occasionally useful for a plain data dictionary that should never accidentally inherit anything, not even built-ins like toString().',
    },

    {
      type: 'code',
      title: 'Object.create() in Practice',
      language: 'javascript',
      code: `const vehiclePrototype = {
  start() {
    return this.name + ' is starting...';
  },
};

const car = Object.create(vehiclePrototype);
car.name = 'Car';

const bike = Object.create(vehiclePrototype);
bike.name = 'Bike';

console.log(car.start());
// "Car is starting..."

console.log(bike.start());
// "Bike is starting..."

console.log(car.start === bike.start);
// true — shared via the prototype, never duplicated

const bareObject = Object.create(null);
console.log(bareObject.toString);
// undefined — no prototype chain at all, not even Object.prototype`,
    },

    {
      type: 'paragraph',
      title: 'class is Sugar Over This Same Mechanism',
      content:
        "The classes lesson mentioned that class syntax is just a friendlier way of writing the constructor-function-plus-prototype pattern — this is that mention, followed all the way through. When you write a method inside a class body, JavaScript places it on ClassName.prototype, exactly like manually assigning Fn.prototype.method = function () {...}. When you call new ClassName(), the engine creates a new object, sets its [[Prototype]] to ClassName.prototype, runs the constructor with this bound to that new object, and returns it — identical, step for step, to what new does with an ordinary constructor function. class doesn't introduce a new object model; it introduces stricter syntax (like throwing if you forget new) around the same prototype chain that's been there all along.",
    },

    {
      type: 'code',
      title: 'Proving class Uses the Same Prototype Mechanism',
      language: 'javascript',
      code: `class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + ' makes a sound.';
  }
}

const dog = new Animal('Rex');

console.log(typeof Animal);
// "function" — a class IS a function under the hood

console.log(Object.getPrototypeOf(dog) === Animal.prototype);
// true — new Animal(...) links the instance to Animal.prototype, same as always

console.log(Animal.prototype.speak === dog.speak);
// true — speak() lives once on the prototype, shared by every instance

console.log(Object.getOwnPropertyNames(Animal.prototype));
// ["constructor", "speak"] — methods really do live on .prototype`,
    },

    {
      type: 'paragraph',
      title: 'instanceof and the Prototype Chain',
      content:
        "The instanceof operator answers the question 'is Constructor.prototype anywhere in this object's prototype chain?' obj instanceof Constructor walks up obj's chain of [[Prototype]] links, comparing each one against Constructor.prototype, and returns true the moment it finds a match — or false if it reaches the end of the chain (null) without one. This is also why instanceof can give surprising answers if a prototype is reassigned after instances were already created, since it always checks the chain as it currently stands, not as it was at creation time.",
    },

    {
      type: 'code',
      title: 'instanceof in Action',
      language: 'javascript',
      code: `class Animal {}
class Dog extends Animal {}

const rex = new Dog();

console.log(rex instanceof Dog);
// true — Dog.prototype is directly in rex's chain

console.log(rex instanceof Animal);
// true — Animal.prototype is further up the SAME chain, via inheritance

console.log(rex instanceof Array);
// false — Array.prototype never appears in rex's chain

console.log([] instanceof Array);
// true

console.log([] instanceof Object);
// true — arrays inherit from Object.prototype too, further up their own chain`,
    },

    {
      type: 'table',
      title: 'Prototype Terminology at a Glance',
      headers: ['Term', 'What It Is'],
      rows: [
        [
          '[[Prototype]]',
          'An internal slot every object has, linking to another object or null',
        ],
        [
          'Object.getPrototypeOf(obj)',
          "The standard way to read an object's [[Prototype]] link",
        ],
        [
          'obj.__proto__',
          'A legacy getter/setter for the same link — works everywhere, but prefer the function form',
        ],
        [
          'Fn.prototype',
          "An ordinary property that only functions have — becomes new instances' [[Prototype]]",
        ],
        [
          'Object.create(proto)',
          'Creates a new object with its [[Prototype]] set directly to proto',
        ],
        [
          'instanceof',
          "Checks whether a constructor's .prototype appears anywhere in an object's chain",
        ],
      ],
    },

    {
      type: 'warning',
      title: "Don't Confuse .prototype with [[Prototype]]",
      content:
        "This is the single most common source of confusion on this topic. Fn.prototype is a plain, visible property that exists on functions, used as the template for instances created with new. [[Prototype]] is the internal, hidden link every object (including Fn.prototype itself) has to its own prototype. When you write new Fn(), the new instance's [[Prototype]] is set to Fn.prototype — two different things, one becoming the value of the other.",
    },

    {
      type: 'tip',
      title: 'Reach for Object.getPrototypeOf(), Not __proto__',
      content:
        '__proto__ works almost everywhere for historical reasons, but it was standardized late and only for web compatibility — it was never meant to be the primary API. Object.getPrototypeOf() and Object.setPrototypeOf() are the methods actually designed for this, and they read clearly as intentional prototype inspection rather than a mysterious double-underscore property.',
    },
  ],

  quiz: [
    {
      question:
        "What happens when you access a property on an object that doesn't have it as an own property?",
      options: [
        'JavaScript immediately returns undefined without checking anything else',
        'JavaScript throws a ReferenceError',
        "JavaScript follows the object's [[Prototype]] link and continues checking up the chain",
        'JavaScript creates the property automatically with a value of null',
      ],
      answer: 2,
    },
    {
      question:
        "Which of these is the standard, modern way to read an object's prototype?",
      options: [
        'obj.__proto__',
        'obj.prototype',
        'Object.getPrototypeOf(obj)',
        'obj.getPrototype()',
      ],
      answer: 2,
    },
    {
      question:
        'Why is placing a method on Constructor.prototype more memory-efficient than assigning it inside the constructor?',
      answer: 2,
      options: [
        'Prototype methods run faster than instance methods',
        'It avoids using the "this" keyword entirely',
        'The method exists once in memory and is shared by every instance, instead of being duplicated per instance',
        'It prevents the method from being overridden',
      ],
    },
    {
      question: 'What does Object.create(proto) do?',
      options: [
        'Copies all properties from proto onto a new object',
        'Creates a new object whose [[Prototype]] is set directly to proto',
        'Creates a subclass of proto',
        'Freezes proto so it cannot be modified',
      ],
      answer: 1,
    },
    {
      question: 'What does the instanceof operator actually check?',
      options: [
        "Whether an object's typeof matches a given string",
        "Whether a constructor's .prototype appears anywhere in the object's prototype chain",
        'Whether an object was created in the current file',
        "Whether an object has a property called 'instance'",
      ],
      answer: 1,
    },
    {
      question: 'What does this code log?',
      code: `function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return \`\${this.name} makes a noise.\`;
};

const dog = new Animal("Rex");
console.log(dog.speak());
console.log(dog.hasOwnProperty("speak"));`,
      options: [
        '"Rex makes a noise.", true',
        '"Rex makes a noise.", false',
        'undefined, false',
        'TypeError, false',
      ],
      answer: 1,
    },
  ],

  previous: 'event-delegation',
  next: 'event-loop',
};
