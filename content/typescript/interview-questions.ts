import type { InterviewQuestionTopic } from '@/content/javascript/interview-questions';

export const typescriptInterviewQuestions: InterviewQuestionTopic[] = [
  {
    slug: 'introduction',
    title: 'TypeScript Introduction',
    questions: [
      {
        question: 'What is TypeScript, in relation to JavaScript?',
        answer:
          'TypeScript is a typed superset of JavaScript — every valid JavaScript program is also valid TypeScript. It adds optional static types, which are checked at compile time and then compiled away into plain JavaScript.',
        difficulty: 'beginner',
      },
      {
        question: 'Do browsers run TypeScript directly?',
        answer:
          'No. TypeScript must be compiled to JavaScript first (by tsc or a bundler’s TypeScript integration) before it can run in a browser or Node.js.',
        difficulty: 'beginner',
      },
      {
        question: 'What happens to TypeScript types at runtime?',
        answer:
          'They are completely erased during compilation. The compiled JavaScript output contains no type information at all, so TypeScript adds zero runtime performance overhead.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'setup',
    title: 'TypeScript Setup',
    questions: [
      {
        question: 'What command compiles a .ts file into JavaScript?',
        answer:
          'tsc (the TypeScript compiler), e.g. npx tsc file.ts, or simply npx tsc to compile an entire project based on its tsconfig.json.',
        difficulty: 'beginner',
      },
      {
        question: 'What is the purpose of tsconfig.json?',
        answer:
          'It configures how the compiler behaves for a project — which files to include, which JavaScript version to target, and which strictness rules to enforce.',
        difficulty: 'beginner',
      },
      {
        question: 'How does an editor show type errors before you even run the compiler?',
        answer:
          'Editors like VS Code run the TypeScript language service in the background, which continuously type-checks your code and reports errors live as you type.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'basic-types',
    title: 'Basic Types',
    questions: [
      {
        question: 'Does TypeScript have separate types for integers and floating-point numbers?',
        answer:
          'No — TypeScript has a single number type that covers all numeric values, whether whole numbers or decimals.',
        difficulty: 'beginner',
      },
      {
        question: 'What does strictNullChecks do?',
        answer:
          'It makes null and undefined distinct types that are not automatically assignable to other types unless explicitly included, e.g. string | null — preventing a large class of "cannot read property of undefined" runtime errors.',
        difficulty: 'intermediate',
      },
      {
        question: 'How do you type an array of numbers?',
        answer:
          'Either number[] or the equivalent generic form Array<number>.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'arrays-and-tuples',
    title: 'Arrays & Tuples',
    questions: [
      {
        question: 'What is the key difference between an array type and a tuple type?',
        answer:
          'An array type describes a list of elements all sharing the same type, of any length. A tuple has a fixed length, with each position given its own specific type.',
        difficulty: 'beginner',
      },
      {
        question: 'How do you write a tuple type for a coordinate pair?',
        answer:
          '[number, number] — the first and second elements are each typed individually, and the tuple must have exactly two elements.',
        difficulty: 'beginner',
      },
      {
        question: 'What does a rest element in a tuple type allow?',
        answer:
          'It allows a variable number of trailing elements of a given type after the fixed positions, e.g. [name: string, ...scores: number[]].',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'enums',
    title: 'Enums',
    questions: [
      {
        question: 'What value do numeric enum members receive by default?',
        answer:
          'They auto-increment starting from 0, unless a custom starting value is given, in which case subsequent members increment from there.',
        difficulty: 'beginner',
      },
      {
        question: 'Do string enum members get automatic default values?',
        answer:
          'No — every member of a string enum must be given an explicit value.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is a common alternative to enum, and why might a team prefer it?',
        answer:
          'A union of string literal types, e.g. type Status = "PENDING" | "ACTIVE". It requires no extra runtime code (unlike a regular enum, which compiles into a real object) and integrates more naturally with plain JSON.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'any-unknown-never',
    title: 'any, unknown, never & void',
    questions: [
      {
        question: 'What is the key difference between any and unknown?',
        answer:
          'Both accept any value, but unknown requires you to narrow it to a specific type before you can use it, while any bypasses type checking entirely with no such requirement.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does the never type represent?',
        answer:
          'A value that can never occur — used for functions that always throw or never return, and for exhaustiveness checks over union types in a switch statement.',
        difficulty: 'intermediate',
      },
      {
        question: 'When would a function’s return type be void?',
        answer:
          'When the function doesn’t return a meaningful value and exists purely for its side effects, like logging a message.',
        difficulty: 'beginner',
      },
    ],
  },
  {
    slug: 'type-inference',
    title: 'Type Inference',
    questions: [
      {
        question: 'Do you need to annotate every variable explicitly in TypeScript?',
        answer:
          'No — TypeScript infers types automatically from initial values, return statements, and surrounding context (contextual typing) in most cases.',
        difficulty: 'beginner',
      },
      {
        question: 'What type would TypeScript infer for the array [1, "two", 3]?',
        answer:
          '(string | number)[] — TypeScript infers a union covering every element type present in the array.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does noImplicitAny protect against?',
        answer:
          'It turns what would otherwise be a silent, implicit any type (for example, an uninitialized variable with no type context) into a compile error instead, preserving type safety.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'type-aliases',
    title: 'Type Aliases',
    questions: [
      {
        question: 'What does the type keyword do?',
        answer:
          'It creates a reusable, named alias for any type — a primitive, object shape, union, function type, or anything else.',
        difficulty: 'beginner',
      },
      {
        question: 'Does a type alias create a genuinely new, distinct type?',
        answer:
          'No — it’s just another name for an existing type. Two aliases pointing at the same underlying shape are fully interchangeable.',
        difficulty: 'intermediate',
      },
      {
        question: 'Can a type alias describe a function’s signature?',
        answer:
          'Yes, e.g. type MathOperation = (a: number, b: number) => number, useful for typing callbacks consistently.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'interfaces',
    title: 'Interfaces',
    questions: [
      {
        question: 'What is structural typing, and how does it relate to interfaces?',
        answer:
          'Structural typing means an object satisfies an interface if it has the required shape, regardless of how it was created or declared — TypeScript checks shape compatibility, not explicit type names.',
        difficulty: 'intermediate',
      },
      {
        question: 'How does one interface extend another?',
        answer:
          'With the extends keyword, e.g. interface Dog extends Animal { ... }, inheriting all members of the parent interface.',
        difficulty: 'beginner',
      },
      {
        question: 'How does a class formally satisfy an interface?',
        answer:
          'With the implements keyword, e.g. class Circle implements Shape, which guarantees the class provides every member the interface requires.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'functions',
    title: 'Function Types',
    questions: [
      {
        question: 'What happens to a parameter when it’s given a default value?',
        answer:
          'It automatically becomes optional — callers may omit it, in which case the default value is used.',
        difficulty: 'beginner',
      },
      {
        question: 'What does a rest parameter like ...numbers: number[] collect?',
        answer:
          'Any number of remaining arguments passed to the function, gathered into a typed array.',
        difficulty: 'beginner',
      },
      {
        question: 'What are function overloads used for?',
        answer:
          'They let a single function accept different combinations of parameter types, each with its own precise return type, by declaring multiple call signatures above one shared implementation.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'union-and-intersection-types',
    title: 'Union & Intersection Types',
    questions: [
      {
        question: 'What does a union type like string | number mean?',
        answer:
          'The value can be either a string or a number — but you can only use operations valid for both until the value is narrowed to one specific type.',
        difficulty: 'beginner',
      },
      {
        question: 'What does an intersection type like A & B require?',
        answer:
          'The value must satisfy both A and B simultaneously — it has all the members of every combined type.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is a discriminated union?',
        answer:
          'A union of object types that share a common literal "tag" property (like kind: "circle"), which TypeScript can check in a conditional to automatically and safely narrow to the exact matching shape.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'literal-types',
    title: 'Literal Types',
    questions: [
      {
        question: 'What does the literal type "success" allow as a valid value?',
        answer:
          'Only the exact string "success" — not any arbitrary string.',
        difficulty: 'beginner',
      },
      {
        question: 'Why is a const variable typically inferred more narrowly than a let variable with the same value?',
        answer:
          'Since a const can never be reassigned, TypeScript infers its most specific literal type. A let variable is inferred more broadly (e.g. string) since it might be reassigned to a different value of the same general type later.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does the as const assertion do?',
        answer:
          'It locks an object or array to its most specific literal types and makes it deeply readonly, commonly used for defining fixed configuration values.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'objects',
    title: 'Object Types',
    questions: [
      {
        question: 'What is an index signature used for?',
        answer:
          'Typing an object whose exact keys aren’t known ahead of time, but whose values all share a common type, like a dictionary — e.g. { [key: string]: number }.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does Record<string, number> describe?',
        answer:
          'An object type with string keys and number values — a more concise, commonly preferred alternative to writing an index signature by hand.',
        difficulty: 'intermediate',
      },
      {
        question: 'When does TypeScript perform excess property checks?',
        answer:
          'When an object literal is passed directly to a typed parameter or variable — it flags properties on the literal that don’t exist on the target type, catching likely typos.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'optional-and-readonly',
    title: 'Optional & Readonly Properties',
    questions: [
      {
        question: 'What type does an optional property (name?: string) implicitly include?',
        answer:
          'undefined — its type becomes string | undefined.',
        difficulty: 'beginner',
      },
      {
        question: 'What happens if you try to reassign a readonly property after an object is created?',
        answer:
          'TypeScript reports a compile-time error — readonly properties can be set once, typically during initialization, but never reassigned afterward.',
        difficulty: 'beginner',
      },
      {
        question: 'Does readonly provide true runtime immutability, like Object.freeze()?',
        answer:
          'No — like all TypeScript type features, readonly is a compile-time-only check. It’s erased during compilation and provides no runtime enforcement on its own.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'type-assertions',
    title: 'Type Assertions',
    questions: [
      {
        question: 'Does a type assertion (as) convert a value at runtime?',
        answer:
          'No — it only changes how the compiler treats the value’s type. No actual conversion or validation happens.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does the non-null assertion operator (!) do?',
        answer:
          'It tells the compiler a value is definitely not null or undefined, even though its declared type says it might be — a narrower, more targeted form of assertion.',
        difficulty: 'intermediate',
      },
      {
        question: 'What happens if a type assertion turns out to be incorrect?',
        answer:
          'TypeScript won’t catch the mistake, since the safety check was intentionally skipped — it surfaces as a runtime error instead, exactly the kind of bug TypeScript is normally meant to prevent.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'classes',
    title: 'Classes',
    questions: [
      {
        question: 'What does the constructor parameter property shorthand do?',
        answer:
          'Writing constructor(public name: string) both declares the class property and assigns it from the constructor argument in one step, removing repetitive boilerplate.',
        difficulty: 'intermediate',
      },
      {
        question: 'What must a subclass constructor call before using this, if the parent has its own constructor?',
        answer:
          'super() — it must be called first, before this can be accessed, to properly initialize the parent class.',
        difficulty: 'beginner',
      },
      {
        question: 'Can an abstract class be instantiated directly?',
        answer:
          'No — an abstract class exists only to be extended. It can declare abstract methods that concrete subclasses are required to implement.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'access-modifiers',
    title: 'Access Modifiers',
    questions: [
      {
        question: 'What is the default access modifier if none is specified?',
        answer:
          'public — accessible from anywhere, including outside the class.',
        difficulty: 'beginner',
      },
      {
        question: 'What is the difference between private and protected?',
        answer:
          'private members are accessible only within the declaring class itself. protected members are also accessible from subclasses, but not from outside code.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is the key difference between TypeScript’s private and native # private fields?',
        answer:
          'TypeScript’s private is a compile-time-only check that’s erased during compilation, with no runtime enforcement. Native # fields are truly private and enforced by the JavaScript runtime itself.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'interfaces-vs-types',
    title: 'Interfaces vs Type Aliases',
    questions: [
      {
        question: 'What is declaration merging, and which one supports it?',
        answer:
          'Declaration merging automatically combines multiple declarations with the same name into one. Only interface supports this — declaring the same type alias twice is a compile error.',
        difficulty: 'advanced',
      },
      {
        question: 'What can type describe that interface cannot?',
        answer:
          'Unions, intersections, tuples, and primitive aliases directly — an interface can only describe object/class shapes.',
        difficulty: 'intermediate',
      },
      {
        question: 'Can a class implement a type alias the same way it implements an interface?',
        answer:
          'Yes, as long as the type alias describes an object shape — both interface and a compatible type alias can be used with implements.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'generics',
    title: 'Generics',
    questions: [
      {
        question: 'What problem do generics solve?',
        answer:
          'They let a function, interface, or class stay reusable across many types while remaining fully type-safe, avoiding the alternative of using any (losing safety) or duplicating code per type.',
        difficulty: 'intermediate',
      },
      {
        question: 'In function identity<T>(value: T): T, how is T determined at a call site?',
        answer:
          'TypeScript infers it automatically from the argument passed in — it doesn’t need to be specified manually in most cases.',
        difficulty: 'intermediate',
      },
      {
        question: 'Can interfaces and classes be generic, not just functions?',
        answer:
          'Yes — both interfaces (e.g. interface ApiResponse<T>) and classes (e.g. class Box<T>) can accept type parameters, just like functions.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'generic-constraints',
    title: 'Generic Constraints',
    questions: [
      {
        question: 'Why can’t you access value.length on an unconstrained generic <T>?',
        answer:
          'Because T could be any type, and TypeScript can’t guarantee every possible type has a length property — accessing it would be unsafe.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does <T extends HasLength> do?',
        answer:
          'It restricts T to only types that satisfy the HasLength shape, which then safely unlocks access to the properties that shape guarantees.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does the pattern <T, K extends keyof T> typically guarantee?',
        answer:
          'That K is restricted to one of the actual property keys of T, enabling safe, precisely-typed property access like obj[key] without risking an invalid key.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'narrowing',
    title: 'Type Narrowing',
    questions: [
      {
        question: 'What does "narrowing" mean in TypeScript?',
        answer:
          'Deducing a more specific type for a value within a certain block of code, based on a runtime check you’ve already performed, like typeof or instanceof.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does the in operator narrow based on?',
        answer:
          'Whether an object has a particular property — useful for narrowing unions of plain object shapes that don’t share a class hierarchy.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why are discriminated unions considered the most robust narrowing pattern?',
        answer:
          'Because every member shares a common literal "tag" property, checking that single property narrows the entire object safely and exhaustively, with strong editor support and compile-time exhaustiveness checks.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'utility-types',
    title: 'Utility Types',
    questions: [
      {
        question: 'What does Partial<T> do?',
        answer:
          'It creates a new type where every property of T becomes optional — commonly used for typing partial update payloads.',
        difficulty: 'beginner',
      },
      {
        question: 'What is the difference between Pick<T, K> and Omit<T, K>?',
        answer:
          'Pick keeps only the listed keys K from T, while Omit keeps everything except the listed keys K.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does ReturnType<typeof someFunction> give you?',
        answer:
          'The type of the value that function returns, extracted automatically without needing to write it out manually.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'mapped-types',
    title: 'Mapped Types',
    questions: [
      {
        question: 'What does a mapped type do, conceptually?',
        answer:
          'It builds a new type by iterating over the keys of an existing type (or a union of literals) and applying the same transformation to each one — essentially a "map()" for types.',
        difficulty: 'intermediate',
      },
      {
        question: 'How are the built-in Partial<T> and Readonly<T> implemented?',
        answer:
          'They are themselves just mapped types under the hood, e.g. { [K in keyof T]?: T[K] } for Partial.',
        difficulty: 'advanced',
      },
      {
        question: 'What does the as clause inside a mapped type allow?',
        answer:
          'Renaming each key as the type maps over it — for example, prefixing every key with "get" to build a set of getter method names.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'conditional-types',
    title: 'Conditional Types',
    questions: [
      {
        question: 'What does T extends U ? X : Y mean in a conditional type?',
        answer:
          'If T is assignable to U, the type resolves to X; otherwise it resolves to Y — the type-level equivalent of a ternary expression.',
        difficulty: 'advanced',
      },
      {
        question: 'What does the infer keyword do?',
        answer:
          'It introduces a new type variable inside an extends clause, letting TypeScript extract and capture part of a matched type, like a function’s return type or an array’s element type.',
        difficulty: 'advanced',
      },
      {
        question: 'What happens when a conditional type is applied to a union type?',
        answer:
          'It automatically distributes over each member of the union individually, then combines the results back into a union — this is called a distributive conditional type.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'type-guards',
    title: 'Custom Type Guards',
    questions: [
      {
        question: 'What does a function return type like value is User indicate?',
        answer:
          'It’s a type predicate — if the function returns true, TypeScript narrows the checked value to the User type for the rest of that code path.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why are custom type guards especially useful for data typed as unknown?',
        answer:
          'They let you safely validate and narrow unknown values — like a parsed API response — before trusting their shape, centralizing that validation logic in one reusable place.',
        difficulty: 'advanced',
      },
      {
        question: 'Does TypeScript verify that a type guard’s implementation is logically correct?',
        answer:
          'No — it trusts the declared "is Type" return type. An incorrectly implemented guard will still compile fine, but can silently narrow to the wrong type.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'modules',
    title: 'Modules',
    questions: [
      {
        question: 'Does TypeScript use a different import/export syntax from JavaScript?',
        answer:
          'No — it uses the same ES module syntax, with the addition of an optional type-only import form (import type).',
        difficulty: 'beginner',
      },
      {
        question: 'What does import type guarantee?',
        answer:
          'That the import is completely erased from the compiled JavaScript output, since it’s only ever used for type checking, never at runtime.',
        difficulty: 'intermediate',
      },
      {
        question: 'Should new TypeScript projects use namespaces or ES modules?',
        answer:
          'ES modules — namespaces are a legacy feature that predates ES modules and don’t integrate well with modern bundlers and tree-shaking.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'declaration-files',
    title: 'Declaration Files',
    questions: [
      {
        question: 'What does a .d.ts file contain?',
        answer:
          'Only type information — no runtime implementation code. It describes the shape of existing JavaScript so TypeScript can type-check code that uses it.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is the @types npm scope used for?',
        answer:
          'It hosts community-maintained type definitions (from the DefinitelyTyped project) for popular JavaScript packages that don’t ship their own built-in types.',
        difficulty: 'intermediate',
      },
      {
        question: 'What does declare const APP_VERSION: string tell the compiler?',
        answer:
          'That a value named APP_VERSION exists at runtime (perhaps injected by a build tool), without TypeScript needing to see where it was actually defined.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'decorators',
    title: 'Decorators',
    questions: [
      {
        question: 'What does a decorator let you do?',
        answer:
          'Observe, modify, or replace a class, method, property, or accessor at the point it’s defined, using concise @ syntax — commonly used for logging, validation, and dependency injection.',
        difficulty: 'intermediate',
      },
      {
        question: 'What is a decorator factory?',
        answer:
          'A function that returns a decorator, allowing configuration options to be passed in, e.g. @MinLength(8) instead of a fixed, unconfigurable decorator.',
        difficulty: 'advanced',
      },
      {
        question: 'Which frameworks make heavy use of decorators?',
        answer:
          'Angular (@Component, @Injectable) and NestJS (@Controller, @Get), among others — most developers encounter decorators as consumers of these frameworks even if they rarely write custom ones.',
        difficulty: 'intermediate',
      },
    ],
  },
  {
    slug: 'tsconfig-deep-dive',
    title: 'tsconfig Deep Dive',
    questions: [
      {
        question: 'What is the difference between the target and lib compiler options?',
        answer:
          'target controls what JavaScript syntax the compiled output uses. lib controls which built-in type definitions (like DOM or ES2020 APIs) are available to your code — they are independent settings.',
        difficulty: 'advanced',
      },
      {
        question: 'What individual flags does strict enable?',
        answer:
          'Several flags at once, including noImplicitAny, strictNullChecks, strictFunctionTypes, and strictPropertyInitialization — each catching a different category of type mistake.',
        difficulty: 'advanced',
      },
      {
        question: 'What does noUncheckedIndexedAccess change?',
        answer:
          'It makes indexing into an object or array with an index signature return T | undefined instead of just T, correctly reflecting that the key might not actually exist — it is not included in strict by default.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    slug: 'best-practices',
    title: 'TypeScript Best Practices',
    questions: [
      {
        question: 'Why is it easier to start a project with strict mode than to enable it later?',
        answer:
          'Enabling strict mode on a large, loosely-typed codebase later surfaces a large batch of newly-flagged errors all at once, whereas starting strict spreads that cost out naturally as each file is written.',
        difficulty: 'intermediate',
      },
      {
        question: 'Why should data from an external API be validated with a type guard, not just typed?',
        answer:
          'TypeScript types are erased at runtime and don’t verify that real data actually matches — response.json() is typed as any by default, so trusting an assumed shape without validation can silently let mismatched data flow through your program.',
        difficulty: 'advanced',
      },
      {
        question: 'What is the benefit of modeling application state as a discriminated union instead of many optional fields?',
        answer:
          'It makes invalid or contradictory states (like "loading" and "data present" at the same time) genuinely unrepresentable in the type system, rather than merely discouraged by convention.',
        difficulty: 'advanced',
      },
    ],
  },
];
