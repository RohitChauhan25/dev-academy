export const classInheritance = {
  slug: 'class-inheritance',

  title: 'Class Inheritance',

  description:
    'Learn how to share behavior between classes using extends and super, override inherited methods, call a parent method from a child, and understand the prototype chain behind it all.',

  level: 'Intermediate',

  readingTime: '18 min',

  lesson: 'Lesson 32 of 48',

  sections: [
    {
      type: 'paragraph',
      title: 'Why Inheritance?',
      content:
        "Inheritance lets one class reuse the properties and methods of another, so you don't have to duplicate shared logic across multiple similar classes. If you have several kinds of things that are all fundamentally the same but with a few differences — say, different kinds of Animal, or different kinds of Employee — you can put the shared behavior in a base class and let more specific classes build on top of it, adding or overriding only what's different.",
    },

    {
      type: 'paragraph',
      title: 'The extends Keyword',
      content:
        'The extends keyword is placed after a class name to indicate it inherits from another class. The class doing the inheriting is usually called the child, subclass, or derived class; the class being inherited from is the parent, superclass, or base class. Every instance method and property defined on the parent becomes available to instances of the child, without having to be rewritten.',
    },

    {
      type: 'code',
      title: 'A Basic extends Example',
      language: 'javascript',
      code: `class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " makes a sound.";
  }
}

class Dog extends Animal {}

const rex = new Dog("Rex");
console.log(rex.speak());
// "Rex makes a sound." — Dog inherited speak() from Animal`,
    },

    {
      type: 'paragraph',
      title: 'super() in Constructors',
      content:
        "When a subclass defines its own constructor, it must call super(...) before it can use this — super() calls the parent class's constructor, which is what actually creates and initializes the instance. Skipping this call, or trying to use this before calling it, throws a ReferenceError. Whatever arguments the parent constructor expects should be passed through super(...).",
    },

    {
      type: 'code',
      title: 'Calling super() in a Subclass Constructor',
      language: 'javascript',
      code: `class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // must run before "this" can be used below
    this.breed = breed;
  }
}

const rex = new Dog("Rex", "Labrador");
console.log(rex.name);  // "Rex" — set by Animal's constructor via super()
console.log(rex.breed); // "Labrador" — set by Dog's own constructor`,
    },

    {
      type: 'warning',
      title: 'Forgetting super() Throws an Error',
      content:
        "If a subclass defines a constructor, JavaScript requires super() to be called before this is accessed anywhere inside that constructor. Forgetting it entirely — not just referencing this too early — produces: ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor.",
    },

    {
      type: 'paragraph',
      title: 'Overriding Methods',
      content:
        "A subclass can override an inherited method simply by defining a method with the same name. When that method is called on an instance of the subclass, JavaScript uses the subclass's version instead of the parent's — this is normal method overriding, and it's how different subclasses can customize shared behavior while keeping the same method name.",
    },

    {
      type: 'code',
      title: 'Overriding an Inherited Method',
      language: 'javascript',
      code: `class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " makes a sound.";
  }
}

class Cat extends Animal {
  speak() {
    return this.name + " says Meow!";
  }
}

const animal = new Animal("Generic Animal");
const cat = new Cat("Whiskers");

console.log(animal.speak()); // "Generic Animal makes a sound."
console.log(cat.speak());    // "Whiskers says Meow!" — overridden`,
    },

    {
      type: 'paragraph',
      title: "Calling the Parent's Version with super.methodName()",
      content:
        "Sometimes you don't want to fully replace a parent's method — you want to extend it, running the parent's original logic and then adding something extra. Inside an overriding method, super.methodName() calls the parent class's version of that same method, letting you build on top of it instead of duplicating its logic.",
    },

    {
      type: 'code',
      title: 'Extending a Method with super.speak()',
      language: 'javascript',
      code: `class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " makes a sound.";
  }
}

class Cat extends Animal {
  speak() {
    const base = super.speak(); // reuse the parent's version
    return base + " Specifically, a meow.";
  }
}

const cat = new Cat("Whiskers");
console.log(cat.speak());
// "Whiskers makes a sound. Specifically, a meow."`,
    },

    {
      type: 'paragraph',
      title: 'The Prototype Chain, Briefly',
      content:
        "When you write class Dog extends Animal, JavaScript links Dog.prototype's internal prototype to Animal.prototype. So when you call rex.speak() and Dog.prototype doesn't have a speak() method, the JavaScript engine walks up this chain — from rex, to Dog.prototype, to Animal.prototype — until it finds one. This chain of linked prototypes is exactly what makes inheritance work, and extends is simply a convenient way of wiring it up for you.",
    },

    {
      type: 'code',
      title: 'Inspecting the Prototype Chain',
      language: 'javascript',
      code: `class Animal {}
class Dog extends Animal {}

const rex = new Dog();

console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype);
// true — Dog.prototype's prototype is Animal.prototype

console.log(Object.getPrototypeOf(rex) === Dog.prototype);
// true — rex's prototype is Dog.prototype`,
    },

    {
      type: 'paragraph',
      title: 'Checking Inheritance with instanceof',
      content:
        'The instanceof operator checks whether an object exists anywhere along a particular constructor’s prototype chain, returning true or false. An instance of a subclass is an instanceof both the subclass and every class it inherits from, all the way up the chain.',
    },

    {
      type: 'code',
      title: 'instanceof Across the Chain',
      language: 'javascript',
      code: `class Animal {}
class Dog extends Animal {}

const rex = new Dog();

console.log(rex instanceof Dog);    // true
console.log(rex instanceof Animal); // true — Dog extends Animal
console.log(rex instanceof Object); // true — everything inherits from Object`,
    },

    {
      type: 'list',
      title: 'Rules to Remember About Inheritance',
      items: [
        'extends links a subclass to a parent class, inheriting its methods',
        'super() must be called in a subclass constructor before using this',
        'A method with the same name in a subclass overrides the parent’s version',
        'super.methodName() lets you call the parent’s version explicitly',
        'instanceof checks membership anywhere along the prototype chain',
      ],
    },

    {
      type: 'tip',
      title: 'Favor Composition When Inheritance Gets Deep',
      content:
        'A single level of inheritance (a subclass extending one parent) is usually easy to reason about. Long inheritance chains — subclasses of subclasses of subclasses — tend to become fragile and hard to trace. If you find yourself several levels deep, it’s often worth reconsidering whether composing smaller, focused objects together would be simpler than continuing to extend.',
    },
  ],

  quiz: [
    {
      question: 'What keyword is used to make one class inherit from another?',
      options: ['inherits', 'extends', 'implements', 'super'],
      answer: 1,
    },
    {
      question:
        'What must be called before this can be used in a subclass constructor?',
      options: ['this.init()', 'super()', 'parent()', 'extend()'],
      answer: 1,
    },
    {
      question:
        'How do you call a parent class’s version of an overridden method from inside the subclass method?',
      options: [
        'parent.methodName()',
        'this.super.methodName()',
        'super.methodName()',
        'Object.parent(methodName)',
      ],
      answer: 2,
    },
    {
      question:
        'If class Dog extends Animal, what does Object.getPrototypeOf(Dog.prototype) equal?',
      options: [
        'Dog.prototype itself',
        'Animal.prototype',
        'null',
        'Object.prototype',
      ],
      answer: 1,
    },
    {
      question:
        'If Dog extends Animal and rex is created with new Dog(), what does rex instanceof Animal return?',
      options: [
        'false, because rex was created from Dog, not Animal',
        'true, because Dog inherits from Animal',
        'undefined',
        'It throws an error',
      ],
      answer: 1,
    },
  ],

  previous: 'classes',
  next: 'class-features',
};
