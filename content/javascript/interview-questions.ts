import type { InterviewQuestion } from '@/app/types/tutorial';

export const javascriptInterviewQuestions: Record<string, InterviewQuestion[]> =
  {
    'adding-removing-methods': [
      {
        question:
          'What is the difference between push() and unshift(), both in behavior and performance?',
        answer:
          "push() adds one or more elements to the end of the array and returns the new length; unshift() adds one or more elements to the beginning and also returns the new length. Behaviorally they're mirror images of each other, but performance differs: push() is O(1) because it just appends after the last element, while unshift() is O(n) because every existing element has to be shifted one position to the right to make room at the front.",
      },
      {
        question:
          'What is the return value of pop(), and what happens if you call it on an empty array?',
        answer:
          'pop() returns the element that was removed from the end of the array. If the array is empty, pop() does not throw an error — it simply returns undefined and the array remains an empty array.',
      },
      {
        question:
          'How is shift() different from pop() in terms of which element is removed and how fast each is?',
        answer:
          'pop() removes the last element of the array and runs in O(1) time since no re-indexing is needed. shift() removes the first element and runs in O(n) time, because every remaining element must be shifted one position to the left to fill the gap left at index 0.',
      },
      {
        question:
          'What does splice() return, and how do its start/deleteCount/items arguments work together?',
        answer:
          'splice() returns an array containing the elements that were removed (an empty array if none were removed). Its signature is array.splice(start, deleteCount, item1, item2, ...): "start" is the index to begin at (negative values count from the end), "deleteCount" is how many elements to remove from that index, and any additional arguments are new elements inserted at that same position — so splice() can remove, insert, or replace depending on which of these you use.',
      },
      {
        question:
          'Which array methods mutate the original array, and how would you achieve the same result without mutation?',
        answer:
          'push(), pop(), shift(), unshift(), and splice() all mutate the original array in place. To get an equivalent result without mutating, use non-mutating alternatives instead: slice() to copy out a portion, concat() or the spread operator [...arr] to add elements into a new array, filter() to remove elements into a new array, or the newer ES2023 methods like toSpliced(), toSorted(), and toReversed(), which return a new array and leave the original untouched.',
      },
      {
        question:
          'Why is unshift() considered slower than push() on large arrays?',
        answer:
          "Arrays in JavaScript are typically stored so that elements can be appended at the end cheaply. push() takes advantage of this by just adding to the end — O(1). unshift() has to insert at index 0, which means every other element's index shifts up by one, so the engine must move all n existing elements — O(n). The larger the array, the more noticeable this cost becomes.",
      },
    ],

    'array-destructuring': [
      {
        question: 'What is array destructuring and why was it introduced?',
        answer:
          'Array destructuring is ES6 syntax that lets you unpack values from an array into individual variables in a single statement, using a pattern that mirrors array literal syntax on the left side of an assignment. It was introduced to replace verbose index-based access like const first = arr[0], making code that extracts multiple values shorter and more readable.',
      },
      {
        question: 'How do you skip elements while destructuring an array?',
        answer:
          'You leave an empty slot in the destructuring pattern by using a comma with nothing between it and the next comma, such as const [a, , c] = arr, which skips the second element entirely without assigning it to any variable.',
      },
      {
        question: 'How would you swap two variables using array destructuring?',
        answer:
          'You can write [a, b] = [b, a], which builds a temporary array [b, a] on the right-hand side and then destructures it back into a and b, swapping their values without needing a separate temporary variable.',
      },
      {
        question: 'When do default values apply during array destructuring?',
        answer:
          'A default value specified with = only applies when the corresponding position in the array is undefined, either because the array is too short to have a value there or because that element is explicitly set to undefined. Any other falsy value, like 0 or an empty string, does not trigger the default.',
      },
      {
        question:
          'Can destructuring patterns be used in function parameters, and why is that useful?',
        answer:
          'Yes, a function parameter list can contain a destructuring pattern directly, such as function formatName([first, last]) {}. This is useful because it unpacks an array argument into named variables immediately at the point of declaration, avoiding an extra line inside the function body to do the same unpacking manually.',
      },
    ],

    'array-methods': [
      {
        question: 'What are array methods in JavaScript?',
        answer:
          'Array methods are built-in functions on the Array prototype that let you add, remove, search, iterate, or transform array elements without writing manual loops.',
      },
      {
        question: 'Why are array methods preferred over loops?',
        answer:
          'They are more readable, less error-prone, and communicate intent directly (e.g., map() for transforming, filter() for selecting) instead of managing loop counters manually.',
      },
      {
        question: 'Name five commonly used array methods.',
        answer:
          'push(), pop(), map(), filter(), and reduce() are five of the most commonly used array methods.',
      },
      {
        question: 'Which array methods modify the original array?',
        answer:
          'Mutating methods like push(), pop(), shift(), unshift(), splice(), sort(), and reverse() change the original array in place.',
      },
      {
        question: 'Which array methods return a new array?',
        answer:
          'Non-mutating methods like map(), filter(), slice(), and concat() return a new array and leave the original untouched.',
      },
    ],

    arrays: [
      {
        question: 'What is the difference between map, forEach, and filter?',
        answer:
          'All three iterate over an array, but they differ in purpose and return value. forEach runs a function for each element and returns undefined — it is for side effects, not building a new array. map returns a new array of the same length containing the transformed result of each element. filter returns a new array containing only the elements for which the callback returns true. map and filter are non-mutating and chainable, while forEach is typically used when you just need to do something per element.',
      },
      {
        question: 'How does reduce work, and what is a real use case for it?',
        answer:
          'reduce boils an array down to a single accumulated value by running a reducer callback for each element, passing along an accumulator. The callback receives the accumulator and the current element and returns the updated accumulator, and you can supply an initial value as the second argument. Common uses include summing numbers, counting occurrences into an object, grouping items by a key, or flattening arrays — anywhere you need to fold a list into one result.',
      },
      {
        question: 'What is the difference between slice and splice?',
        answer:
          'slice(start, end) returns a shallow copy of a portion of the array without changing the original, making it safe for extracting sub-arrays. splice(start, deleteCount, ...items) mutates the original array in place, removing and/or inserting elements, and returns the removed elements. A quick way to remember it: slice is a non-destructive read, while splice is a destructive edit.',
      },
      {
        question: 'How do you remove duplicate values from an array?',
        answer:
          'The most concise modern way is to pass the array to a Set, which stores only unique values, then spread it back into an array: [...new Set(arr)]. This works for primitives because Set compares them by identity. For arrays of objects, where each object is a distinct reference, you instead deduplicate by a chosen key, for example by tracking seen keys in a Set while filtering, or by building a Map keyed on the property that defines uniqueness.',
      },
      {
        question: 'What is an array in JavaScript?',
        answer:
          'An array is an ordered collection of values stored in a single variable.',
      },
      {
        question: 'What is the index of the first element?',
        answer: '0',
      },
      {
        question: 'What is the difference between push() and pop()?',
        answer:
          'push() adds an element to the end, while pop() removes the last element.',
      },
      {
        question: 'How do you find the length of an array?',
        answer: 'Using the length property.',
      },
      {
        question: 'Can an array contain different data types?',
        answer: 'Yes, JavaScript arrays can contain mixed data types.',
      },
    ],

    'async-await': [
      {
        question:
          "Why doesn't await work as expected inside array.forEach, and how do you fix it?",
        answer:
          'forEach does not await the async callback you pass it — it calls each callback and moves on without waiting for the returned promise, so surrounding code continues before the async work finishes and errors inside the callback are not caught by an outer try/catch. To process items sequentially, use a plain for...of loop where await genuinely pauses each iteration. To run them in parallel and wait for all, map the array to an array of promises and await Promise.all on it.',
      },
      {
        question:
          'Is await blocking? What happens to the rest of the program while an async function is paused?',
        answer:
          'await is non-blocking to the overall program even though it pauses its own async function. When execution hits await, the async function is suspended and control returns to the caller and the event loop, so other code, timers, and events keep running on the single thread. Once the awaited promise settles, the rest of the async function is scheduled as a microtask to resume. So await pauses one function without freezing the thread, unlike a synchronous blocking loop.',
      },
      {
        question:
          'How do you run multiple async operations concurrently and still handle partial failures?',
        answer:
          'You start all the operations first so they run concurrently, collect their promises into an array, then await Promise.allSettled on that array. Unlike Promise.all, which rejects as soon as any single promise rejects, allSettled waits for every promise and returns an array describing each outcome as either fulfilled with a value or rejected with a reason. You then iterate the results and handle successes and failures individually, which is ideal when one failure should not discard the other successful results.',
      },
      {
        question:
          'What does an async function return, even if you write a plain return statement inside it?',
        answer:
          'An async function always returns a Promise. If the function returns a plain value, JavaScript automatically wraps that value in a resolved promise, and if the function throws an error, that becomes a rejected promise rather than an uncaught synchronous exception.',
      },
      {
        question: 'What does the await keyword do, and where can it be used?',
        answer:
          'The await keyword pauses execution of the enclosing async function until the given promise settles, then returns its fulfilled value or throws its rejection as a catchable error. It can only be used inside an async function, with the exception of top-level await inside ES modules.',
      },
      {
        question: 'How do you handle errors when using async/await?',
        answer:
          'You wrap the await expressions in a try/catch block, just as you would for synchronous code. If the awaited promise rejects, execution jumps to the catch block, letting you handle the error in the same familiar shape used for regular thrown errors.',
      },
      {
        question:
          'What is the risk of awaiting several independent promises one after another instead of together?',
        answer:
          'Awaiting each promise individually forces the operations to run in sequence, even when they do not depend on each other, which makes the total time roughly the sum of each individual operation. Starting all the promises first and then awaiting them together with Promise.all() lets them run in parallel, which is usually much faster.',
      },
      {
        question: 'What is top-level await, and where is it allowed?',
        answer:
          'Top-level await lets you use the await keyword directly in the top-level code of a file, without wrapping it in an async function. It is only supported inside ES modules, not in regular, non-module scripts.',
      },
    ],

    'class-features': [
      {
        question:
          'What is the difference between a static member and an instance member in a class?',
        answer:
          'A static member belongs to the class itself and is accessed as ClassName.member, while an instance member belongs to each individual object created from the class and is accessed as instance.member. Static members are typically used for class-wide utilities or shared data that is not tied to any single instance.',
      },
      {
        question:
          'How do you declare a truly private field in a JavaScript class, and how is it different from just using a leading underscore?',
        answer:
          'You declare a private field by prefixing its name with #, such as #balance, declared in the class body. Unlike a leading-underscore convention, which is purely a naming signal that JavaScript does not enforce, a # field is enforced by the language itself — accessing it from outside the class throws a SyntaxError, making it genuinely inaccessible rather than just discouraged.',
      },
      {
        question:
          'What do get and set do inside a class, and why would you use them instead of a plain property?',
        answer:
          'get and set define a getter and setter, which let a property be read or written through custom method logic while still using simple property syntax from the outside, like obj.value. You would use them instead of a plain property when you need to validate an incoming value, compute a derived value on read, or control access to an underlying private field.',
      },
      {
        question:
          'Why might you combine a private field with a getter and setter rather than exposing the field directly?',
        answer:
          'Combining a private field with a getter/setter pair lets you keep the real data inaccessible from outside the class while still offering a clean, property-like interface to interact with it. The setter can validate or transform incoming values before storing them in the private field, and the getter can compute or format the value on the way out, all while callers simply use obj.property as if it were a plain field.',
      },
      {
        question:
          'What happens if you try to access a private field from outside its class?',
        answer:
          'JavaScript throws a SyntaxError indicating the private field must be declared in an enclosing class, because private fields are only visible and accessible within the body of the class that declares them, never from outside code or even from subclasses.',
      },
    ],

    'class-inheritance': [
      {
        question: 'What does the extends keyword do in a class declaration?',
        answer:
          'extends sets up inheritance between two classes, linking the subclass’s prototype to the parent class’s prototype so that instances of the subclass automatically gain access to the parent’s instance methods without having to redefine them.',
      },
      {
        question:
          'Why must super() be called before using this in a subclass constructor?',
        answer:
          "In a derived class, this is not initialized until the parent class's constructor, called via super(), actually runs and creates the instance. Trying to access this before that point throws a ReferenceError, because there is technically no initialized instance yet to refer to.",
      },
      {
        question:
          'How do you override a method from a parent class, and how can you still access the parent’s original version?',
        answer:
          'You override a method by defining a method with the same name in the subclass; calls on subclass instances will use that version instead of the parent’s. To still access the parent’s original implementation from within the override, call super.methodName(), which explicitly invokes the version defined on the parent class.',
      },
      {
        question:
          'What is the prototype chain, and how does extends relate to it?',
        answer:
          "The prototype chain is the series of linked prototype objects that JavaScript walks through when looking up a property or method that isn't found directly on an object. Writing class Dog extends Animal sets Animal.prototype as the prototype of Dog.prototype, so looking up a method on a Dog instance that isn't defined on Dog falls back to searching Animal.prototype next.",
      },
      {
        question:
          'What does the instanceof operator check, and what would rex instanceof Animal return if Dog extends Animal?',
        answer:
          'instanceof checks whether a given object exists anywhere along a constructor’s prototype chain, returning true or false accordingly. Since Dog extends Animal links Dog.prototype to Animal.prototype, an instance of Dog is also an instanceof Animal, so rex instanceof Animal would return true.',
      },
    ],

    classes: [
      {
        question:
          'What is a class in JavaScript, and what problem does it solve?',
        answer:
          'A class is a template for creating multiple objects that share the same structure — the same properties and methods — without repeating that structure by hand for every object. It solves the problem of duplicating object-creation logic by letting you define the shape once and instantiate it with new as many times as needed.',
      },
      {
        question: 'What is the purpose of the constructor method in a class?',
        answer:
          "The constructor is a special method that runs automatically when a new instance is created with new, and it is typically used to initialize the instance's properties based on arguments passed in. A class can only have one constructor, and if none is defined, JavaScript supplies an empty default one.",
      },
      {
        question:
          'What actually happens when you call a class with the new keyword?',
        answer:
          "Calling new ClassName() creates a new empty object, links that object's prototype to ClassName.prototype, runs the constructor with this bound to the new object so it can be initialized, and then returns that object automatically.",
      },
      {
        question:
          'Are JavaScript classes a completely new feature, or are they built on something that already existed?',
        answer:
          "JavaScript classes are syntactic sugar over the language's existing prototype-based inheritance model. Methods defined in a class body are placed on the class's prototype object just as they would be if manually assigned to a constructor function's prototype — classes make that pattern easier to write and add safeguards like requiring new, but they do not introduce a new object model.",
      },
      {
        question:
          'What happens if you try to call a class as a regular function without new?',
        answer:
          "JavaScript throws a TypeError stating that the class constructor cannot be invoked without 'new'. This is one of the concrete differences between classes and ordinary constructor functions, which would instead run silently with the wrong this in non-strict mode.",
      },
    ],

    closures: [
      {
        question:
          'How would you implement a function that can only run once, no matter how many times it is called?',
        answer:
          'You create an outer function that declares a boolean flag and a stored result in its scope, then returns an inner function that closes over them. The first call sets the flag to true, runs the real work, and caches the result; every later call sees the flag is already true and simply returns the cached result without re-running the work. This once() pattern is common for one-time initialization or making sure a handler like a payment submit cannot fire twice, and it works purely because the inner function keeps a live reference to the flag between calls.',
      },
      {
        question:
          'How would you build a counter with closures, and why can outside code not tamper with the count directly?',
        answer:
          'You write a makeCounter function that declares let count = 0 and returns an object of functions such as increment, decrement, and value, each closing over the same count variable. Because count is a local variable of makeCounter and is never assigned as a property on the returned object, nothing outside has a reference to it — callers can only change it through the exposed methods. This gives true data privacy: the count is encapsulated inside the closure and can only be mutated in the controlled ways the returned methods allow.',
      },
      {
        question:
          'What is a common memory leak caused by closures, and how do you prevent it?',
        answer:
          'Because a closure keeps its entire surrounding scope alive as long as the closure itself is reachable, holding on to a closure can unintentionally keep large objects or DOM nodes in memory that would otherwise be garbage-collected. A classic case is attaching an event listener whose callback closes over a big object and never removing the listener, so the object can never be freed. You prevent it by removing listeners when they are no longer needed, avoiding capturing large variables you do not actually use, and nulling out references once you are done with them.',
      },
      {
        question: 'How do closures make currying possible?',
        answer:
          'Currying transforms a function that takes several arguments into a sequence of functions that each take one argument. Each returned function closes over the arguments supplied so far and waits for the next one, only running the real computation once all arguments have been collected. Closures are what let each stage remember the earlier arguments, so a curried add(a)(b)(c) works because the innermost function still has access to a and b through the closures formed at each step. Currying is useful for creating specialized, reusable functions and for partial application.',
      },
      {
        question: 'What is a closure in JavaScript?',
        answer:
          'A closure is the combination of a function together with references to its surrounding lexical scope, allowing that function to access variables from an outer scope even after the outer function has finished executing. Every function in JavaScript forms a closure automatically at the moment it is created.',
      },
      {
        question:
          'Why does using var in a loop with setTimeout produce unexpected results, and how does let fix it?',
        answer:
          'var is function-scoped, so a for loop declared with var creates only one shared variable across all iterations; by the time any setTimeout callback runs, the loop has finished and every callback sees the same final value. let is block-scoped, so each iteration gets its own fresh binding, and each callback closes over its own separate variable, producing the expected sequence of values.',
      },
      {
        question:
          'How can closures be used to create private variables in JavaScript?',
        answer:
          'By declaring a variable inside an outer function and only exposing access to it through inner functions that are returned from that outer function, the variable itself is never attached to the returned object and cannot be accessed or modified directly from outside — it can only be read or changed through the exposed functions, which is exactly how the createAccount() example hides its balance.',
      },
      {
        question:
          'Do closures capture the value of a variable or a reference to it?',
        answer:
          'Closures capture a live reference to the variable, not a copy of its value at creation time. If the variable changes after the closure is formed but before the inner function runs, the inner function will see the updated value, which is the root cause of the classic var loop bug.',
      },
      {
        question:
          'What is a function factory and how does it rely on closures?',
        answer:
          'A function factory is a function that returns other functions, each customized using arguments passed to the factory. It relies on closures because each returned function keeps access to the specific arguments the factory was called with, letting you generate a family of related functions, like multiplyBy(2) and multiplyBy(3), that behave differently without duplicating logic.',
      },
    ],

    comments: [
      {
        question: 'What are comments in JavaScript?',
        answer:
          'Comments are lines of text in code that the JavaScript engine ignores; they are used to explain or document code for humans.',
      },
      {
        question: 'Why do we use comments?',
        answer:
          'To explain why code exists, document intent, leave notes for other developers, or temporarily disable code during debugging.',
      },
      {
        question:
          'What is the difference between single-line and multi-line comments?',
        answer:
          'Single-line comments start with // and cover the rest of the line, while multi-line comments are wrapped in /* */ and can span multiple lines.',
      },
      {
        question: 'Can comments be executed by JavaScript?',
        answer:
          'No, the JavaScript engine skips comments entirely — they have no effect on how the code runs.',
      },
      {
        question: 'When should comments be avoided?',
        answer:
          'Comments should be avoided when they simply restate what clear, well-named code already says, since they add noise and can go stale.',
      },
    ],

    conditionals: [
      {
        question: 'What are conditional statements in JavaScript?',
        answer:
          'Conditional statements let a program execute different blocks of code depending on whether a condition evaluates to true or false.',
      },
      {
        question: 'What is the difference between if and switch?',
        answer:
          'if evaluates boolean conditions and is flexible for ranges or complex logic, while switch compares a single value against multiple fixed cases and is often cleaner for many discrete options.',
      },
      {
        question: 'What is the difference between == and ===?',
        answer:
          '== compares values after converting them to a common type (loose equality), while === compares both value and type without conversion (strict equality).',
      },
      {
        question: 'What are truthy and falsy values?',
        answer:
          'Truthy values behave like true in a boolean context, and falsy values (false, 0, "", null, undefined, NaN) behave like false.',
      },
      {
        question: 'What is a nested if statement?',
        answer:
          'An if statement placed inside another if (or else) block, used to check an additional condition once the outer condition is true.',
      },
      {
        question: 'What is the ternary operator?',
        answer:
          'A shorthand conditional operator, condition ? valueIfTrue : valueIfFalse, that returns one of two values based on a condition.',
      },
      {
        question: 'When should you use switch instead of if?',
        answer:
          'Use switch when comparing one value against several fixed, known cases — it is often more readable than a long if...else if chain.',
      },
    ],

    'data-types-in-javascript': [
      {
        question:
          'How do you reliably check whether a value is an array, is null, or is a specific object type?',
        answer:
          'typeof is not enough because typeof [] and typeof null both return object. To detect arrays, use Array.isArray(value). To check specifically for null, compare with value === null. For a precise type tag on any value, use Object.prototype.toString.call(value), which returns strings like [object Array], [object Date], or [object Null], giving you a dependable way to distinguish object subtypes that typeof cannot.',
      },
      {
        question:
          'What is the difference between pass-by-value and pass-by-reference in JavaScript?',
        answer:
          "Primitives such as numbers, strings, and booleans are passed by value: the function receives a copy, so reassigning the parameter does not affect the caller's variable. Objects and arrays are passed by what is often called reference, but more precisely the reference itself is passed by value: the function gets a copy of the reference pointing to the same object, so mutating the object's properties is visible to the caller, yet reassigning the parameter to a brand-new object does not change the caller's variable.",
      },
      {
        question:
          'How do you deep-copy an object, and why does the spread operator fall short?',
        answer:
          'The spread operator and Object.assign only make a shallow copy: top-level properties are copied, but nested objects and arrays are still shared by reference, so mutating a nested value affects both copies. For a true deep copy you can use the modern structuredClone(value), which handles nested structures and many built-in types, or, for plain JSON-safe data, JSON.parse(JSON.stringify(value)) — though the latter drops functions, undefined, and symbols and mishandles dates.',
      },
      {
        question: 'What are data types in JavaScript?',
        answer:
          'Data types classify the kind of value a variable holds, such as string, number, boolean, object, or undefined, and determine what operations can be performed on it.',
      },
      {
        question: 'How many primitive data types does JavaScript have?',
        answer:
          'Seven: string, number, boolean, undefined, null, bigint, and symbol.',
      },
      {
        question: 'What is the difference between null and undefined?',
        answer:
          'undefined means a variable has been declared but not assigned a value, while null is an explicit assignment representing "no value."',
      },
      {
        question: 'Why does typeof null return "object"?',
        answer:
          "It's a long-standing bug in JavaScript's original implementation that was never fixed to avoid breaking existing code.",
      },
      {
        question:
          'What is the difference between primitive and non-primitive data types?',
        answer:
          'Primitive types store a single immutable value directly, while non-primitive types (objects, arrays, functions) store a reference to a mutable value in memory.',
      },
      {
        question: 'What is BigInt?',
        answer:
          'BigInt is a primitive type for representing integers larger than Number.MAX_SAFE_INTEGER, created by appending n to an integer literal.',
      },
      {
        question: 'What is Symbol?',
        answer:
          'Symbol is a primitive type that creates unique, immutable identifiers, often used as non-colliding object property keys.',
      },
      {
        question: 'What does the typeof operator do?',
        answer:
          'It returns a string indicating the data type of a given value, e.g. typeof "hi" returns "string".',
      },
    ],

    'date-and-time': [
      {
        question:
          'What are the different ways to create a Date object in JavaScript?',
        answer:
          'You can create a Date with no arguments to capture the current moment, from a date string like new Date("2024-03-15"), from individual components such as new Date(year, month, day, hours, minutes, seconds), or from a timestamp representing milliseconds since the Unix epoch, like new Date(1710500000000).',
      },
      {
        question: 'Why does getMonth() return 2 for March instead of 3?',
        answer:
          "JavaScript's Date object treats months as zero-indexed, so January is 0 and December is 11. This means March, the third month, is represented internally as 2. It's a frequent source of off-by-one bugs, so it's important to add 1 when displaying a human-readable month number.",
      },
      {
        question: 'What is the difference between getTime() and Date.now()?',
        answer:
          'getTime() is an instance method called on an existing Date object that returns its timestamp in milliseconds since the epoch. Date.now() is a static method on the Date constructor that returns the current timestamp directly, without needing to construct a Date object first.',
      },
      {
        question:
          'Why does comparing two Date objects with === return false even if they represent the same moment?',
        answer:
          '=== between objects compares reference identity, not their underlying values, so two distinct Date instances are never === equal even if they represent the exact same point in time. To compare the actual moments they represent, you should compare their getTime() values instead.',
      },
      {
        question: 'How can you add a number of days to a Date object?',
        answer:
          'You can either add the equivalent number of milliseconds to the timestamp and construct a new Date from the result (days * 24 * 60 * 60 * 1000), or mutate an existing Date in place by calling setDate(date.getDate() + days), which correctly rolls over into the next month or year when needed.',
      },
    ],

    dom: [
      {
        question:
          'What is the difference between event bubbling and event capturing?',
        answer:
          'When an event fires on an element, it travels through the DOM in two phases. In the capturing phase it descends from the document down to the target, and in the bubbling phase it rises back up from the target to the document. By default, listeners run during the bubbling phase; you opt into the capturing phase by passing true or { capture: true } as the third argument to addEventListener. Bubbling is what makes event delegation possible, since a parent can handle events that originated on its children.',
      },
      {
        question: 'What is event delegation and why is it useful?',
        answer:
          'Event delegation is the practice of attaching a single event listener to a common ancestor instead of to many individual child elements, then using event.target to determine which child was actually interacted with. It relies on event bubbling. It is useful because it reduces the number of listeners, improving memory and performance, and it automatically handles elements added to the DOM later, which a directly bound listener would miss.',
      },
      {
        question:
          'What is the difference between event.preventDefault and event.stopPropagation?',
        answer:
          "They control different things. event.preventDefault stops the browser's default action for an event — for example, preventing a form from submitting and reloading the page, or a link from navigating. event.stopPropagation stops the event from continuing to travel through the DOM to listeners on other elements, but it does not affect the default action. They are independent, and you sometimes use both together.",
      },
      {
        question:
          'What is the difference between the load and DOMContentLoaded events?',
        answer:
          'DOMContentLoaded fires as soon as the HTML has been fully parsed and the DOM tree is built, without waiting for stylesheets, images, and other sub-resources. The load event fires later, only once the entire page including all dependent resources has loaded. For most script initialization that only needs the DOM to exist, DOMContentLoaded is the right and faster choice, while load is used when you genuinely need images or other assets to be ready.',
      },
      {
        question:
          'What is the DOM, and how is it different from the HTML source file?',
        answer:
          "The DOM is the browser's live, in-memory tree of objects built from parsing the HTML, representing the current state of the page. The HTML source is just the original text sent by the server; the DOM can diverge from it immediately after load because JavaScript, browser corrections, and user interaction can all modify the tree without changing the original file.",
      },
      {
        question: 'What is the difference between textContent and innerHTML?',
        answer:
          'textContent treats whatever you assign to it as plain text, inserting it literally without parsing any HTML tags, while innerHTML parses the assigned string as markup and creates real elements from it. This makes innerHTML risky for untrusted input, since a malicious string can inject a script or an event-handler attribute that then executes — a cross-site scripting vulnerability — whereas textContent always displays the string safely as text.',
      },
      {
        question:
          'What does querySelectorAll() return, and how is it different from a real array?',
        answer:
          'querySelectorAll() returns a NodeList, which supports forEach() but lacks most other array methods like map(), filter(), and reduce(). To use those, you need to convert it into a real array first, typically with Array.from(nodeList) or the spread syntax [...nodeList].',
      },
      {
        question:
          'How would you add a new list item to the page using JavaScript?',
        answer:
          'You create the element with document.createElement("li"), set its content with textContent (or classes with classList.add()), and then insert it into the visible DOM with a method like appendChild() or append() on the parent element — the element does not appear on the page until that insertion step happens.',
      },
      {
        question:
          'Why is classList generally preferred over manipulating the className string directly?',
        answer:
          'classList exposes dedicated methods like add(), remove(), toggle(), and contains() that let you manage a single class without disturbing the others already present on the element. Manipulating className directly means working with one long string and manually splitting or joining it, which is more error-prone.',
      },
    ],

    'error-handling': [
      {
        question:
          'What is the difference between a synchronous try/catch and handling errors in async code?',
        answer:
          'A synchronous try/catch only catches errors thrown during the synchronous execution of the try block. Errors from asynchronous callbacks scheduled later, such as inside setTimeout, are not caught because that code runs after the try/catch has already finished. For promise-based async work, you either chain a .catch on the promise or, with async/await, wrap the await expressions in try/catch — which works because await turns a rejected promise back into a thrown error at that point in the async function.',
      },
      {
        question:
          'What happens to an unhandled promise rejection, and how do you catch them globally?',
        answer:
          "If a rejected promise has no rejection handler, it becomes an unhandled rejection: in browsers it fires a window unhandledrejection event and logs a warning, and in Node.js it emits an unhandledRejection event and, in modern versions, can terminate the process. You handle them globally by listening for that event — window.addEventListener('unhandledrejection', ...) in the browser or process.on('unhandledRejection', ...) in Node — which is useful as a safety net for logging, though per-operation catch handlers remain the proper fix.",
      },
      {
        question:
          'Why is it bad practice to catch an error and do nothing with it?',
        answer:
          'Swallowing an error with an empty catch block hides failures: the program keeps running as if nothing went wrong, but in a broken state, which makes bugs far harder to diagnose because the original cause is silently discarded. At minimum you should log the error, and ideally handle it meaningfully — retrying, showing the user a message, or rethrowing so a higher layer can decide. If you truly must ignore it, a comment explaining why keeps the intent clear.',
      },
      {
        question:
          'When should you throw an error versus return a special value like null or false?',
        answer:
          'Throw when something has gone genuinely wrong and the current operation cannot sensibly continue — invalid input that violates a contract, a failed network request, or a broken invariant — so callers are forced to deal with it rather than accidentally proceeding. Return a normal value like null or an empty result when the absence of a result is an expected, ordinary outcome, such as a lookup that found no match. Overusing exceptions for routine control flow makes code harder to follow and slower.',
      },
      {
        question:
          'What is the purpose of the finally block, and when does it run?',
        answer:
          'The finally block contains cleanup code that should run no matter what happens in the try and catch blocks. It always runs — whether the try block completes successfully, the catch block handles an error, or the try block returns a value early — making it the right place for logic like closing connections or hiding loading indicators.',
      },
      {
        question: 'How do you create a custom error type in JavaScript?',
        answer:
          'You create a class that extends the built-in Error class, call super(message) inside the constructor to properly set up the message and stack trace, and then set this.name to a descriptive string. Instances of this class remain instanceof Error while also being instanceof your custom class, so you can catch and distinguish them.',
      },
      {
        question:
          'What properties does a caught Error object typically expose?',
        answer:
          'An Error object exposes a message property describing what went wrong, a name property identifying the error type (such as "TypeError" or a custom name), and a stack property containing a string trace of the call stack at the point the error was thrown, which is useful for debugging.',
      },
      {
        question:
          'Why does a try/catch block fail to catch an error thrown inside a setTimeout callback?',
        answer:
          'The try block finishes executing and is considered complete before the setTimeout callback ever runs, since setTimeout schedules the callback to run later on the event loop. Because the throw happens outside the lifetime of the try block, JavaScript has no surrounding catch to hand the error to, and it becomes an uncaught exception.',
      },
      {
        question:
          'How can you catch multiple different types of errors differently in one try/catch?',
        answer:
          'Since JavaScript only supports a single catch clause per try block, you check the type of the caught error inside that one block using the instanceof operator against your different custom error classes, and branch your handling logic based on which type matched.',
      },
    ],

    'event-delegation': [
      {
        question:
          'What is event delegation, and what browser behavior does it rely on?',
        answer:
          "Event delegation is the pattern of attaching a single event listener to a shared ancestor element instead of separate listeners to each of its children, and using the event object inside that one listener to determine which child the event actually came from. It relies entirely on event bubbling, since that's what carries an event fired on a descendant up to the ancestor where the listener lives.",
      },
      {
        question:
          'Why is event delegation particularly useful for dynamically added elements?',
        answer:
          "A listener attached directly to a specific element only covers that element, so any element added to the page later has no listener of its own unless one is explicitly attached to it. A delegated listener lives on an ancestor that already exists and doesn't change, so any new descendant added underneath it is automatically covered by the same listener, with no extra setup required.",
      },
      {
        question:
          'What role does closest() typically play inside a delegated event listener?',
        answer:
          'event.target is the exact, possibly deeply nested element the user interacted with, which may not be the element you actually care about. closest(selector) walks upward from event.target (including itself) to find the nearest ancestor matching a given CSS selector, which is how a delegated listener reliably identifies which logical child — such as which <li> — the event happened inside of.',
      },
      {
        question:
          'Why can delegation improve performance on a page with many similar child elements?',
        answer:
          'Every attached listener carries some memory and setup overhead, so attaching one to each of hundreds or thousands of similar elements adds up. Delegation replaces all of those with a single listener on a shared ancestor, keeping the cost constant regardless of how many children exist or how frequently they are added or removed.',
      },
      {
        question:
          'Why does event delegation fail for focus and blur events, and what is the workaround?',
        answer:
          'focus and blur do not bubble, so an event listener on an ancestor never receives them regardless of which descendant gained or lost focus. The workaround is to use the bubbling equivalents focusin and focusout, or to attach the listener during the capturing phase (by passing true as the third argument to addEventListener()), since capturing does reach every descendant on its way down to the target.',
      },
    ],

    'event-loop': [
      {
        question:
          'Predict the output order of console.log(1); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3)); console.log(4);',
        answer:
          'The output is 1, 4, 3, 2. The synchronous logs 1 and 4 run first because they execute directly on the call stack. When the stack empties, the event loop drains the entire microtask queue before any macrotask, so the promise callback logging 3 runs next. Only then does the setTimeout macrotask logging 2 run. The key rule is that all microtasks run before the next macrotask.',
      },
      {
        question:
          'What is the difference between process.nextTick and setImmediate in Node.js?',
        answer:
          'Both schedule callbacks for later, but at different points in the event loop. process.nextTick callbacks run immediately after the current operation completes and before the loop continues to the next phase, effectively ahead of the Promise microtask queue and well before any timers. setImmediate callbacks run in the check phase, after I/O callbacks of the current iteration. So process.nextTick fires sooner, and overusing it can starve the event loop by preventing it from moving on, whereas setImmediate yields back to the loop first.',
      },
      {
        question:
          'Why can a long synchronous loop freeze the UI, and how does this relate to the event loop?',
        answer:
          'JavaScript in the browser runs on a single thread that also handles rendering and user input. While a long synchronous loop runs, it occupies the call stack, so the event loop cannot pick up rendering work, click handlers, or any queued callbacks until the loop finishes, making the page appear frozen. The fix is to break long work into smaller chunks scheduled with setTimeout or requestAnimationFrame, or move heavy computation into a Web Worker so the main thread stays free to keep the UI responsive.',
      },
      {
        question:
          'Why can JavaScript run asynchronous operations if it only has one call stack?',
        answer:
          'JavaScript itself does not execute the asynchronous operation on the call stack at all — it hands work like timers, network requests, or DOM listeners off to the surrounding environment (Web APIs in a browser, or similar facilities in Node.js), which runs that work outside the call stack and later places the corresponding callback into a queue for the event loop to pick up once the stack is empty.',
      },
      {
        question:
          'What is the difference between the microtask queue and the macrotask (callback) queue?',
        answer:
          'The microtask queue holds callbacks from Promises (.then, .catch, .finally) and queueMicrotask(), while the macrotask queue holds things like setTimeout/setInterval callbacks and DOM events. The event loop always drains the entire microtask queue before running even a single task from the macrotask queue, and it drains the microtask queue again after each individual macrotask completes.',
      },
      {
        question: 'What is the job of the event loop?',
        answer:
          'The event loop continuously checks whether the call stack is empty, and once it is, moves the next pending task onto the stack for execution, always fully draining the microtask queue before taking a single task from the macrotask queue.',
      },
      {
        question:
          'Why does a setTimeout callback with a 0ms delay not run immediately?',
        answer:
          "A 0ms delay only means the timer is ready to queue its callback as soon as possible; the callback still has to wait as a macrotask until the current synchronous code finishes running and the entire microtask queue has fully drained, so a Promise's .then() callback scheduled at the same time will always run first.",
      },
      {
        question:
          'What can happen if a chain of Promise callbacks keeps scheduling more microtasks?',
        answer:
          'Because the event loop fully drains the microtask queue before ever touching the macrotask queue, a microtask that keeps scheduling further microtasks can cause the macrotask queue to be starved indefinitely, delaying things like setTimeout callbacks or rendering updates that are waiting their turn.',
      },
    ],

    events: [
      {
        question:
          'Why is addEventListener() generally preferred over assigning a function to an onclick property?',
        answer:
          'addEventListener() allows multiple independent listeners to be attached to the same event on the same element without any of them overwriting each other, while assigning to the onclick property can only ever hold one handler at a time — each new assignment silently replaces the previous one.',
      },
      {
        question:
          'What is the difference between event.target and event.currentTarget?',
        answer:
          'event.target is the specific element where the event actually originated, such as the exact child element the user clicked, while event.currentTarget is always the element the listener function is attached to. These can be different elements whenever the event bubbles up from a descendant to an ancestor that has its own listener.',
      },
      {
        question:
          'Why can removeEventListener() sometimes fail to remove a listener that was clearly added?',
        answer:
          'removeEventListener() only detaches a listener if it is passed the exact same function reference that was originally passed to addEventListener(). If the original listener was an anonymous or inline arrow function, there is no way to reference it again afterward, so it can never be removed — the fix is to use a named function or a function stored in a variable.',
      },
      {
        question:
          'What is the difference between the input and change events on a text field?',
        answer:
          'The input event fires immediately on every change to the value, including every keystroke, making it suitable for live feedback like search-as-you-type. The change event fires only once, typically when the field loses focus after its value has been modified, making it better suited for reacting to a finalized value.',
      },
      {
        question:
          'What are the two phases an event travels through in the DOM, and which one does addEventListener() use by default?',
        answer:
          'An event travels through a capturing phase, moving from the document down to the target element, followed by a bubbling phase, moving back up from the target through its ancestors. addEventListener() listens during the bubbling phase by default, unless the capture option is explicitly set to true.',
      },
    ],

    'fetch-api': [
      {
        question:
          'What does fetch() return, and what does that value resolve to?',
        answer:
          'fetch() returns a Promise that resolves to a Response object representing the HTTP response, including its status code, headers, and body. Reading the actual body content requires an additional step, such as calling response.json() or response.text(), which themselves return further Promises.',
      },
      {
        question:
          'Does fetch() reject its promise when the server responds with a 404 or 500 status?',
        answer:
          "No. fetch()'s promise only rejects on a genuine network failure, such as a DNS error or the request never completing. An HTTP error status like 404 or 500 is still treated as a completed request, so the promise resolves normally with a Response object whose .ok property is false and whose .status reflects the error — you must check this yourself.",
      },
      {
        question:
          'How do you send a POST request with a JSON body using fetch()?',
        answer:
          'You pass a second argument to fetch(): an options object with method set to "POST", a headers object typically including "Content-Type: application/json", and a body containing the payload serialized with JSON.stringify(), since the body must be a string rather than a raw JavaScript object.',
      },
      {
        question:
          'How would you write a fetch() call using async/await with proper error handling?',
        answer:
          "You await the fetch() call inside a try/catch block, then manually check response.ok immediately afterward and throw an error if it's false, since fetch() itself won't reject for HTTP error statuses. The catch block then handles both real network failures and the error you threw yourself for a bad status.",
      },
      {
        question: 'How can you cancel an in-flight fetch() request?',
        answer:
          'You create an AbortController, pass its .signal property into the fetch() options object, and call controller.abort() whenever you want to cancel the request. The pending fetch() promise then rejects with an error whose name is "AbortError", which you can catch and handle separately from other failures.',
      },
    ],

    functions: [
      {
        question:
          'What is the difference between rest parameters and the arguments object?',
        answer:
          'Rest parameters, written as ...args, collect the remaining arguments into a real array, so array methods like map and filter work directly on them, and they only capture arguments beyond the named ones. The arguments object is an older, array-like object available in regular (non-arrow) functions that holds all passed arguments but is not a true array and lacks array methods. Arrow functions do not have their own arguments object at all, which is another reason rest parameters are preferred in modern code.',
      },
      {
        question:
          'What is a pure function and why are pure functions desirable?',
        answer:
          "A pure function always returns the same output for the same inputs and produces no side effects — it does not modify external state, mutate its arguments, or perform I/O. Purity makes functions predictable, easy to test in isolation, safe to cache or memoize, and simple to reason about, since their behavior depends only on their inputs. This is a core principle of functional programming and underpins patterns like React's rendering model and state reducers.",
      },
      {
        question:
          'What is the difference between a higher-order function and a callback?',
        answer:
          "A higher-order function is a function that either takes one or more functions as arguments or returns a function. A callback is the function that gets passed into another function to be invoked later. They are two sides of the same relationship: map, filter, and addEventListener are higher-order functions, and the functions you hand them are callbacks. This pattern is what enables much of JavaScript's flexibility, from array iteration to asynchronous APIs.",
      },
      {
        question:
          'How do default parameters work, and when does the default actually apply?',
        answer:
          "If an argument is not provided, the corresponding parameter is undefined. Default parameters let you specify a fallback with syntax like function greet(name = 'Guest'), so when name is undefined the default is used. The default only applies when the argument is undefined specifically — passing null does not trigger it. Defaults are evaluated at call time and can even reference earlier parameters, making them more flexible than the older pattern of checking and reassigning inside the body.",
      },
      {
        question: 'What is a function in JavaScript?',
        answer:
          'A function is a reusable block of code designed to perform a specific task, which can accept inputs (parameters) and return a value.',
      },
      {
        question: 'What is the difference between parameters and arguments?',
        answer:
          "Parameters are the named variables listed in a function's definition, while arguments are the actual values passed in when the function is called.",
      },
      {
        question:
          'What is the difference between function declaration and function expression?',
        answer:
          'A function declaration is hoisted and can be called before it appears in the code, while a function expression is assigned to a variable and is only available after that assignment runs.',
      },
      {
        question: 'What are arrow functions?',
        answer:
          "A concise function syntax introduced in ES6 that doesn't have its own this binding, arguments object, or prototype — it inherits this from the surrounding scope.",
      },
      {
        question: 'What is a callback function?',
        answer:
          'A function passed as an argument to another function, to be invoked later, often used for asynchronous operations or array methods like map and forEach.',
      },
      {
        question: 'What is function scope?',
        answer:
          'Function scope means variables declared inside a function (with var, let, or const) are only accessible within that function.',
      },
      {
        question: 'What is the return statement?',
        answer:
          "The return statement ends a function's execution and specifies the value that should be sent back to the caller.",
      },
    ],

    'generators-iterators': [
      {
        question: 'What is the iterator protocol?',
        answer:
          'The iterator protocol defines that an object is an iterator if it has a next() method, and each call to that method returns an object of the shape { value, done }, where value is the next item produced and done is true once the sequence is exhausted.',
      },
      {
        question:
          'How is the iterable protocol different from the iterator protocol?',
        answer:
          'An iterable is an object with a method at the key Symbol.iterator that, when called, returns an iterator. Being iterable is what allows an object to be used directly with constructs like for...of, the spread operator, and Array.from(), whereas an iterator on its own is only usable by manually calling next().',
      },
      {
        question:
          'What does the function* syntax do, and how is calling a generator function different from calling a regular function?',
        answer:
          'function* declares a generator function. Calling it does not run its body immediately — instead it returns a generator object (an iterator and iterable) without executing any code yet. The body only runs, up to the next yield, when .next() is called on that generator object.',
      },
      {
        question:
          'How can you pass a value into a generator, and where does that value end up?',
        answer:
          'You pass a value as the argument to .next(value). That value becomes the result of the yield expression that the generator was paused on, letting the generator receive input each time it resumes rather than only producing output.',
      },
      {
        question:
          'Why are generators well suited for representing infinite sequences?',
        answer:
          'Because a generator only computes the next value when .next() is actually called, it can represent a logically infinite sequence — like all natural numbers — without ever computing more values than are actually consumed, avoiding the need to build the entire sequence in memory up front.',
      },
    ],

    hoisting: [
      {
        question:
          'What is the difference between calling a function declaration versus a function expression before its definition?',
        answer:
          'A function declaration such as function greet() {} is fully hoisted with its body, so calling greet() on a line above its definition works and runs normally. A function expression such as const greet = function() {} only hoists the variable binding, not the assignment, so calling greet() beforehand throws — a ReferenceError for const/let due to the Temporal Dead Zone, or a TypeError (greet is not a function) if declared with var, because var greet is hoisted as undefined.',
      },
      {
        question: 'Are class declarations hoisted?',
        answer:
          'Yes, but like let and const they are hoisted into the Temporal Dead Zone, so they are not usable before their declaration line. Referring to a class before it is declared throws a ReferenceError rather than returning undefined. This differs from function declarations, which are fully hoisted and callable beforehand, and it is a deliberate design choice to make class usage more predictable and less error-prone.',
      },
      {
        question: 'What is hoisting in JavaScript?',
        answer:
          "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during the compile phase, before code executes.",
      },
      {
        question:
          'What is the difference between hoisting in var, let, and const?',
        answer:
          'var declarations are hoisted and initialized as undefined, while let and const are hoisted but left uninitialized in the Temporal Dead Zone until their declaration line runs.',
      },
      {
        question: 'What is the Temporal Dead Zone?',
        answer:
          'The Temporal Dead Zone is the period between entering a scope and the point where a let or const variable is declared, during which accessing it throws a ReferenceError.',
      },
      {
        question: 'Why does var return undefined before declaration?',
        answer:
          "Because var declarations are hoisted and automatically initialized with the value undefined, so accessing them before the assignment line doesn't throw an error.",
      },
      {
        question: 'Are arrow functions hoisted?',
        answer:
          "The variable holding an arrow function is hoisted like any let/const/var, but the function itself isn't usable until the assignment line executes.",
      },
      {
        question:
          'What is the difference between function declaration and function expression during hoisting?',
        answer:
          "Function declarations are fully hoisted, including their body, so they can be called before their definition; function expressions are only hoisted as an uninitialized variable and can't be called beforehand.",
      },
      {
        question: 'Why should you avoid using var?',
        answer:
          'var is function-scoped instead of block-scoped and gets hoisted with an undefined default, which can lead to confusing bugs — let and const provide safer, more predictable scoping.',
      },
    ],

    introduction: [
      {
        question: 'What is JavaScript?',
        answer:
          'JavaScript is a lightweight, interpreted programming language primarily used to make web pages interactive, running in browsers and, via engines like Node.js, on servers.',
      },
      {
        question: 'Who created JavaScript?',
        answer:
          'Brendan Eich created JavaScript in 1995 while working at Netscape.',
      },
      {
        question: 'What is ECMAScript?',
        answer:
          "ECMAScript is the standardized specification that JavaScript is based on; it defines the language's syntax and core features.",
      },
      {
        question: 'Can JavaScript run outside the browser?',
        answer:
          'Yes, using runtimes like Node.js or Deno, JavaScript can run on servers, in command-line tools, and in desktop applications.',
      },
      {
        question: 'What is the difference between Java and JavaScript?',
        answer:
          'Despite the similar name, Java and JavaScript are unrelated languages with different syntax, use cases, and execution models — Java is compiled and statically typed, while JavaScript is interpreted and dynamically typed.',
      },
      {
        question: 'Which browsers use the V8 Engine?',
        answer:
          'Google Chrome and other Chromium-based browsers (like Microsoft Edge and Opera) use the V8 JavaScript engine; it also powers Node.js.',
      },
      {
        question: 'What can JavaScript do inside a browser?',
        answer:
          'It can manipulate the DOM, respond to user events, validate forms, make network requests, and dynamically update page content without reloading.',
      },
      {
        question: 'Why is JavaScript considered the language of the web?',
        answer:
          "It's the only language natively supported by all web browsers for client-side scripting, making it essential for interactive websites.",
      },
    ],

    'iteration-methods': [
      {
        question: 'What is the key difference between forEach() and map()?',
        answer:
          "forEach() runs a callback for every element purely for its side effects and always returns undefined, so it should never be used when you need a new array back. map() also runs a callback for every element, but it collects each callback's return value into a brand new array of the same length as the original, making it the right choice when you want to transform data rather than just act on it.",
      },
      {
        question:
          'Why is it recommended to always pass an initialValue to reduce()?',
        answer:
          "If you omit initialValue, reduce() uses the array's first element as the starting accumulator and begins iterating from the second element. This can cause confusing bugs — most notably, calling reduce() without an initialValue on an empty array throws a TypeError, since there's no element to use as a starting point. Passing an explicit initialValue makes the behavior predictable and safe for empty arrays.",
      },
      {
        question:
          'How would you use filter() and map() together, and why chain them in that order?',
        answer:
          'You can chain them as array.filter(condition).map(transform) to first narrow the array down to only the elements you care about, then transform just those elements. Filtering first is generally more efficient because map() then only has to run its transformation on the smaller, already-filtered set rather than on every original element.',
      },
      {
        question: 'What is the difference between reduce() and reduceRight()?',
        answer:
          "Both combine every element of an array into a single accumulated value using a callback, but reduce() processes elements from left to right (start to end), while reduceRight() processes them from right to left (end to start). For operations like summing numbers, the direction doesn't change the result, but for order-sensitive operations — like building a string or composing functions — the direction changes the outcome.",
      },
      {
        question:
          'Can you stop forEach() early, and if not, what should you use instead?',
        answer:
          'No — forEach() has no built-in way to break out early; return inside the callback only skips to the next iteration, it does not stop the loop. If you need to exit early once a condition is met, use a traditional for loop or a for...of loop (both support break), or reach for a method designed to short-circuit, such as some(), every(), or find().',
      },
      {
        question:
          "If a callback inside map() or filter() mutates an object from the original array, is that still a problem even though these methods don't mutate the array itself?",
        answer:
          "Yes. map() and filter() don't mutate the array structure (its length or which elements are at which index), but they don't protect you from mutating the contents of the elements themselves. If an array holds objects and your callback changes a property on one of those objects, that change persists on the original object — and on the original array too, since arrays of objects store references, not copies.",
      },
    ],

    json: [
      {
        question:
          'What is JSON and how does it relate to JavaScript object literals?',
        answer:
          "JSON (JavaScript Object Notation) is a text-based data interchange format derived from JavaScript's object literal syntax, but it's stricter and language-independent. Keys must be double-quoted strings, and values are limited to strings, numbers, booleans, null, arrays, and objects — functions, undefined, and comments are not valid JSON.",
      },
      {
        question:
          'What does JSON.stringify() do, and what are its three possible arguments?',
        answer:
          'JSON.stringify() converts a JavaScript value into a JSON-formatted string. Its first argument is the value to convert, the second is an optional replacer (an array of keys to include, or a function to transform/filter values), and the third is an optional space value that controls indentation for pretty-printing.',
      },
      {
        question:
          'Why do properties with undefined values disappear when you stringify an object?',
        answer:
          'JSON has no representation for undefined, so JSON.stringify() simply omits any property whose value is undefined from the resulting string, rather than including it as null or throwing an error. The same happens with function-valued properties.',
      },
      {
        question:
          'Why do Date objects come back as strings after a JSON.stringify()/JSON.parse() round trip?',
        answer:
          'JSON.stringify() converts Date objects to their ISO string representation because JSON has no native date type. JSON.parse() has no way of knowing a string was originally a date, so it leaves it as a plain string unless you supply a reviver function that explicitly converts specific fields back into Date objects.',
      },
      {
        question:
          'What happens if you try to JSON.stringify() an object with a circular reference?',
        answer:
          'JSON.stringify() throws a TypeError, because a circular reference would require the resulting JSON string to be infinitely long — JSON has no syntax for representing a reference back to a containing object.',
      },
    ],

    loops: [
      {
        question: 'What are loops in JavaScript?',
        answer:
          'Loops are control structures that repeat a block of code multiple times until a specified condition is no longer true.',
      },
      {
        question: 'What is the difference between for and while loops?',
        answer:
          'A for loop is typically used when the number of iterations is known upfront, combining initialization, condition, and increment in one line, while a while loop repeats as long as a condition is true and suits cases where the iteration count is unknown.',
      },
      {
        question: 'What is the difference between for...of and for...in?',
        answer:
          'for...of iterates over the values of an iterable (like arrays and strings), while for...in iterates over the enumerable property keys of an object.',
      },
      {
        question: 'When should you use a do...while loop?',
        answer:
          'Use a do...while loop when the code block must run at least once before the condition is checked.',
      },
      {
        question: 'What is an infinite loop?',
        answer:
          'An infinite loop is a loop whose condition never becomes false, causing it to run forever (or until the program crashes or is stopped).',
      },
      {
        question: 'What do break and continue do?',
        answer:
          'break exits a loop entirely, while continue skips the rest of the current iteration and moves to the next one.',
      },
      {
        question: 'Which loop is best for arrays?',
        answer:
          'for...of and array methods like forEach or map are usually preferred for arrays because they are more readable than a traditional index-based for loop.',
      },
    ],

    'map-and-set': [
      {
        question:
          'What is the key difference between a Map and a plain object for storing key-value pairs?',
        answer:
          'A Map allows keys of any type, including objects, functions, and numbers, while a plain object coerces all keys to strings (or uses symbols). A Map also reliably preserves insertion order during iteration and provides a size property, whereas checking the number of properties on an object requires something like Object.keys(obj).length.',
      },
      {
        question:
          'What does the size property on a Map or Set do, and how is it different from calling a method?',
        answer:
          'The size property returns the number of entries in a Map or the number of unique values in a Set. It is accessed as a plain property without parentheses, unlike methods such as get() or has() which must be called as functions.',
      },
      {
        question:
          'How would you remove duplicate values from an array using a Set?',
        answer:
          'You pass the array into the Set constructor, which automatically discards duplicate values while preserving the order of first appearance, and then spread the Set back into a new array, such as [...new Set(someArray)], or equivalently pass it to Array.from().',
      },
      {
        question:
          'Why might you choose a Set instead of an array when checking whether a value exists in a collection?',
        answer:
          'A Set guarantees unique values and its has() method is generally much faster for membership checks than repeatedly calling includes() or indexOf() on a large array, since a Set is optimized specifically for lookups rather than ordered indexed access.',
      },
      {
        question:
          'What happens if you try to JSON.stringify() a Map or a Set directly?',
        answer:
          'JSON.stringify() does not know how to serialize Map or Set instances, so it produces an empty object, {}, silently discarding all the data they contain. To serialize them properly, you need to first convert them into a plain array or object, such as spreading the entries or values, before calling JSON.stringify().',
      },
    ],

    'memory-management': [
      {
        question:
          'What are the three steps of the memory lifecycle, and which one does JavaScript automate?',
        answer:
          'The memory lifecycle is allocate, use, and release. JavaScript automates the release step through garbage collection, so you never need to manually free memory the way you would in a language like C.',
      },
      {
        question:
          'What does it mean for a value to be "reachable," and why does it matter for garbage collection?',
        answer:
          'A value is reachable if it can be reached by following references, directly or through any number of steps, starting from a root such as the global object or a variable currently on the call stack. The garbage collector only reclaims memory from values that are unreachable, since a reachable value might still be used by the program.',
      },
      {
        question:
          'How does the mark-and-sweep algorithm work, and what problem does it solve compared to reference counting?',
        answer:
          'Mark-and-sweep starts at the roots, walks every reachable reference and marks each value it finds as in use, then sweeps through memory and reclaims everything left unmarked. Unlike naive reference counting, it correctly collects circular references — two objects that reference only each other but are unreachable from any root — because reachability, not reference count, determines what survives.',
      },
      {
        question:
          'Give an example of how a forgotten setInterval() can cause a memory leak.',
        answer:
          'If setInterval() is never cleared with clearInterval(), its callback keeps running forever, and because that callback is a closure, it keeps every variable it references alive for as long as the interval keeps running — even large data structures that are otherwise no longer needed become permanently unreachable-to-collect.',
      },
      {
        question:
          'How does a WeakMap differ from a Map in terms of memory behavior?',
        answer:
          'A Map holds strong references to its keys, so a key stored in a Map cannot be garbage collected as long as the Map exists and holds that entry. A WeakMap holds weak references to its keys, so if nothing else in the program references a key, it can still be garbage collected, and its entry is automatically removed from the WeakMap.',
      },
    ],

    modules: [
      {
        question:
          'What is the difference between a named export and a default export?',
        answer:
          'A module can have many named exports, each imported using curly braces and the exact exported name (or a renamed version using as). A module can have only one default export, which is imported without curly braces and can be given any name the importing file chooses, since there is no specific exported name to match.',
      },
      {
        question: 'Why are ES modules automatically in strict mode?',
        answer:
          'The ES module specification enforces strict mode for every module by design, so you never need to add "use strict" manually. This is one of several built-in safety improvements modules provide over traditional scripts, alongside automatic file-level scoping of top-level variables.',
      },
      {
        question:
          'What is the difference between static import and dynamic import()?',
        answer:
          'Static import statements are hoisted and resolved at load time, and must appear at the top level of a file outside of any conditional or function. Dynamic import() is a function-like expression that can be called anywhere in your code, including conditionally, and it returns a Promise that resolves to the requested module, making it useful for lazy-loading code.',
      },
      {
        question: 'How do you import every named export from a module at once?',
        answer:
          'You use the namespace import syntax, import * as someName from "./module.js", which gathers all of that module\'s named exports into a single object, with each export accessible as a property on it.',
      },
      {
        question: 'How does CommonJS differ from ES modules?',
        answer:
          'CommonJS uses require() to import and module.exports (or exports.name) to export, and it resolves modules synchronously at runtime. ES modules use the import and export keywords, are statically analyzable and resolved at parse time (with dynamic import() available for runtime loading), and are automatically strict mode and scoped per file.',
      },
    ],

    'object-destructuring': [
      {
        question:
          'How does object destructuring differ from array destructuring in terms of matching?',
        answer:
          'Array destructuring matches values by position, so the order of variables in the pattern must line up with the order of elements in the array. Object destructuring matches values by property name instead, so the order in which properties are listed in the pattern does not matter, as long as the variable names correspond to actual keys on the object.',
      },
      {
        question: 'How do you rename a variable while destructuring an object?',
        answer:
          'You use a colon inside the destructuring pattern, in the form { originalKey: newVariableName }. The name before the colon must match the actual property key on the object, while the name after the colon is the new local variable name that will hold the value.',
      },
      {
        question: 'When is a default value used during object destructuring?',
        answer:
          'A default value specified with = is only used when the corresponding property is missing from the object entirely or when its value is explicitly undefined. It does not apply to other falsy values such as 0, false, or an empty string, since those are not undefined.',
      },
      {
        question:
          'How would you extract one property from an object while collecting the rest into a new object?',
        answer:
          'You combine destructuring with the rest pattern, for example const { id, ...details } = order, which pulls out id into its own variable and gathers every remaining property of order into a brand-new object called details.',
      },
      {
        question:
          'What happens if you try to destructure properties from undefined, and how do you guard against it?',
        answer:
          'Destructuring properties from null or undefined throws a TypeError because there is no object to read from. A common guard is to give the whole parameter a default empty object, such as function greet({ name } = {}) {}, so that calling greet() without an argument destructures from {} instead of undefined.',
      },
    ],

    objects: [
      {
        question:
          'What is the difference between a shallow copy and a deep copy of an object?',
        answer:
          'A shallow copy, made with the spread operator or Object.assign, duplicates only the top-level properties; nested objects and arrays are still shared by reference, so changing a nested value affects both copies. A deep copy duplicates every level so the two objects share nothing, which you can achieve with structuredClone for most data or JSON.parse(JSON.stringify(obj)) for plain JSON-safe data. Choosing the right one matters whenever an object contains nested structures you intend to modify independently.',
      },
      {
        question: 'How do you prevent an object from being modified?',
        answer:
          'Object.freeze(obj) makes an object immutable at the top level — you cannot add, remove, or change its properties, and attempts fail silently or throw in strict mode. Object.seal(obj) is less strict: it prevents adding or removing properties but still allows changing existing ones. Both are shallow, so nested objects remain mutable unless you recursively freeze them. To check the state, use Object.isFrozen or Object.isSealed.',
      },
      {
        question:
          'What is the difference between Object.keys, Object.values, and Object.entries?',
        answer:
          'All three take an object and return an array based on its own enumerable properties. Object.keys returns the property names, Object.values returns the corresponding values, and Object.entries returns an array of [key, value] pairs. Object.entries is especially useful for iterating with for...of and destructuring, or for converting an object into a Map, and all three ignore inherited and non-enumerable properties.',
      },
      {
        question:
          'How do optional chaining and nullish coalescing help when working with objects?',
        answer:
          "Optional chaining, written with ?., lets you safely access deeply nested properties: if any link in the chain is null or undefined, the expression short-circuits to undefined instead of throwing a TypeError. Nullish coalescing, written with ??, provides a fallback only when the left side is null or undefined, unlike || which also falls back on other falsy values like 0 or the empty string. Together, user?.profile?.name ?? 'Anonymous' reads a nested value safely and supplies a default only when it is truly missing.",
      },
      {
        question: 'What is an object in JavaScript?',
        answer:
          'An object is a collection of key-value pairs used to store related data.',
      },
      {
        question:
          'What is the difference between dot notation and bracket notation?',
        answer:
          'Dot notation accesses properties directly, while bracket notation is useful for dynamic property names.',
      },
      {
        question: 'How do you delete a property from an object?',
        answer: 'Using the delete operator.',
      },
      {
        question: 'What does Object.keys() return?',
        answer: 'An array containing all property names.',
      },
      {
        question:
          'What is the purpose of the this keyword inside an object method?',
        answer: 'It refers to the current object that owns the method.',
      },
    ],

    operators: [
      {
        question: 'What are operators in JavaScript?',
        answer:
          'Operators are special symbols or keywords used to perform operations on values and variables, such as arithmetic, comparison, logical, and assignment operations.',
      },
      {
        question: 'What is the difference between == and ===?',
        answer:
          '== performs type coercion before comparing values, while === compares both value and type strictly without conversion.',
      },
      {
        question: 'What is the difference between ++i and i++?',
        answer:
          '++i (prefix) increments the value first and then returns it, while i++ (postfix) returns the current value first and then increments it.',
      },
      {
        question: 'What is the modulus operator?',
        answer:
          'The modulus operator (%) returns the remainder of a division between two numbers.',
      },
      {
        question: 'Which operator is used for exponentiation?',
        answer: 'The ** operator, e.g. 2 ** 3 evaluates to 8.',
      },
      {
        question: 'What are logical operators?',
        answer:
          'Logical operators (&&, ||, !) combine or invert boolean expressions to build more complex conditions.',
      },
      {
        question: 'How does the + operator behave with strings?',
        answer:
          'When either operand is a string, + performs concatenation instead of addition, joining the values together as text.',
      },
    ],

    'optional-chaining-nullish-coalescing': [
      {
        question: 'What problem does optional chaining (?.) solve?',
        answer:
          'It lets you safely access a property, array index, or method deep in a chain without manually checking every intermediate value for null or undefined first. If any link in the chain evaluates to null or undefined, the whole expression short-circuits to undefined instead of throwing a TypeError.',
      },
      {
        question: 'What is the key difference between ?? and ||?',
        answer:
          '?? only falls back to its right-hand side when the left-hand side is specifically null or undefined. || falls back for any falsy value, which also includes 0, an empty string, NaN, and false — values that might be perfectly valid and intentional, making ?? the safer choice for defaulting.',
      },
      {
        question:
          'How do you use optional chaining with a function call that might not exist?',
        answer:
          'You add ?. before the call parentheses, like options.onComplete?.(). If onComplete is null or undefined, the call is skipped entirely and the expression evaluates to undefined, rather than throwing an error for trying to call something that is not a function.',
      },
      {
        question:
          'What happens if a value in the middle of an optional chain is null?',
        answer:
          'The chain short-circuits at that point and the entire expression immediately evaluates to undefined. Any further property accesses, index lookups, or function calls later in the chain are skipped and never evaluated.',
      },
      {
        question:
          'Why does JavaScript disallow mixing ?? directly with && or || without parentheses?',
        answer:
          'Because the relative precedence between ?? and the logical operators would be ambiguous and error-prone to reason about, JavaScript requires you to make the grouping explicit with parentheses, such as (a && b) ?? c, rather than allowing an implicit and potentially confusing interpretation.',
      },
    ],

    promises: [
      {
        question:
          'What is the difference between Promise.all, Promise.race, Promise.any, and Promise.allSettled?',
        answer:
          'All four take an iterable of promises but resolve differently. Promise.all waits for every promise to fulfill and rejects immediately if any one rejects, giving you an array of all results. Promise.allSettled waits for every promise to settle and never rejects, returning a status plus value or reason for each. Promise.race settles as soon as the first promise settles, whether it fulfills or rejects, adopting that outcome. Promise.any resolves with the first promise that fulfills and only rejects, with an AggregateError, if every promise rejects. Use all when everything must succeed, allSettled when you want every outcome regardless of failures, race for timeouts, and any for the first successful result.',
      },
      {
        question:
          'How do you convert a callback-based function into one that returns a promise?',
        answer:
          'You wrap it in a new Promise and call resolve or reject from inside the original callback. For a Node-style callback of the form (error, data), you call reject(error) when the error argument is truthy and resolve(data) otherwise. This technique, called promisification, lets older callback APIs be used with then/catch and async/await. Node.js even ships a util.promisify helper that does exactly this for functions following the error-first callback convention.',
      },
      {
        question:
          'What is the difference between throwing an error and returning a rejected promise inside a .then callback?',
        answer:
          'For the rest of the chain they behave the same — both cause the next .catch to run rather than the next .then. Whether you write throw new Error(...) or return Promise.reject(...) inside a then callback, the promise for that step becomes rejected and the chain skips ahead to the nearest rejection handler. The throw form is usually cleaner for synchronous error conditions, while returning a rejected promise is handy when the rejection value is itself produced asynchronously.',
      },
      {
        question:
          'How would you implement a delay or sleep function using promises?',
        answer:
          'You return a new Promise whose executor calls setTimeout, and inside that timeout you call resolve after the desired number of milliseconds. Because the promise only resolves once the timer fires, awaiting it pauses an async function for that duration without blocking the main thread. A minimal version is a function that takes ms and returns new Promise(resolve => setTimeout(resolve, ms)), which you can then use as await sleep(1000) to wait one second.',
      },
      {
        question: 'What are the three possible states of a Promise?',
        answer:
          'A Promise starts in the pending state, meaning the operation has not finished yet. It then transitions to either fulfilled, meaning it completed successfully and has a resulting value, or rejected, meaning it failed and has a reason. Once a promise settles into fulfilled or rejected, its state cannot change again.',
      },
      {
        question: 'What is the difference between .then() and .catch()?',
        answer:
          '.then() can take up to two callbacks, one for when the promise fulfills and an optional second one for when it rejects. .catch() is shorthand for only handling the rejection case, and is typically placed at the end of a chain so it catches errors from any preceding .then() call, which reads more cleanly than passing a rejection handler to every .then().',
      },
      {
        question:
          'What happens if you forget to return a promise from inside a .then() callback?',
        answer:
          'The chain stops waiting for that inner operation to complete. The next .then() in the chain runs immediately with undefined as its value instead of the eventual result of the un-returned promise, which is a common source of bugs where asynchronous work appears to be skipped.',
      },
      {
        question:
          'How does Promise.all() behave if one of the promises passed to it rejects?',
        answer:
          'Promise.all() immediately rejects with that same error as soon as any one of the input promises rejects, without waiting for the remaining promises to settle. This makes it suitable only when you need every operation to succeed together.',
      },
      {
        question:
          'When would you use Promise.allSettled() instead of Promise.all()?',
        answer:
          'You would use Promise.allSettled() when you want to know the outcome of every promise regardless of whether some of them fail, since it waits for all promises to settle and returns a status and value or reason for each one, rather than short-circuiting on the first rejection like Promise.all() does.',
      },
    ],

    prototype: [
      {
        question:
          'What is the difference between __proto__, prototype, and Object.getPrototypeOf?',
        answer:
          "prototype is a property that exists only on functions and holds the object that will become the prototype of instances created with new. __proto__ is a legacy but widely supported accessor present on objects that exposes that object's actual internal [[Prototype]] link. Object.getPrototypeOf(obj) is the standard, recommended way to read that same internal link. In short, a function's prototype becomes the __proto__ of its instances, and Object.getPrototypeOf is the clean API for reading it.",
      },
      {
        question: 'How does the instanceof operator work under the hood?',
        answer:
          "instanceof checks whether the prototype object of the constructor on the right-hand side appears anywhere in the prototype chain of the object on the left. It walks up the object's chain via its [[Prototype]] links, comparing each one against Constructor.prototype, and returns true if it finds a match before reaching null. This is why instanceof reflects the prototype chain rather than the exact constructor used, and why it can behave unexpectedly across different execution contexts like iframes that each have their own constructors.",
      },
      {
        question:
          'What is prototypal inheritance and how does it differ from classical inheritance?',
        answer:
          'Prototypal inheritance means objects inherit directly from other objects through a live prototype chain: when a property is not found on an object, the engine looks it up on its prototype, and so on up the chain. Classical inheritance, found in languages like Java, is based on classes acting as blueprints from which instances are stamped out, with inheritance defined between classes. JavaScript only truly has prototypal inheritance; its class syntax is sugar that sets up prototype links behind the scenes rather than introducing a separate class-based object model.',
      },
      {
        question:
          "What is the difference between an object's [[Prototype]] and a function's .prototype property?",
        answer:
          "[[Prototype]] is an internal, hidden link that every object has, pointing to another object (or null) that lookups fall back to when a property isn't found directly. Fn.prototype is an ordinary, visible property that only functions have, holding the object that becomes the [[Prototype]] of every instance created from that function with new — they're related but distinct concepts, one becoming the value of the other at instance-creation time.",
      },
      {
        question:
          'How does JavaScript resolve obj.someProperty when someProperty is not an own property of obj?',
        answer:
          "The engine checks whether obj has an own property called someProperty; if not, it follows obj's [[Prototype]] link to its prototype and checks there, repeating this walk up the chain of linked objects until it either finds a matching property or reaches an object whose prototype is null, at which point it returns undefined.",
      },
      {
        question:
          "Why is it more memory-efficient to define a method on a constructor function's .prototype rather than inside the constructor itself?",
        answer:
          'A method assigned inside the constructor with this.method = function(){} creates a brand-new function for every single instance, multiplying memory use as more instances are created. A method placed on Fn.prototype exists exactly once in memory, and every instance reaches it through the prototype chain when called, sharing the same function object rather than duplicating it.',
      },
      {
        question:
          'How does Object.create() differ from using a constructor function with new?',
        answer:
          'Object.create(proto) directly creates a new object whose [[Prototype]] is set to whatever object you pass in, with no constructor logic and no new keyword involved. Using new Fn() instead creates the object, runs the constructor function to initialize it, and sets its [[Prototype]] to Fn.prototype — Object.create() is the more explicit, lower-level tool for setting up a prototype link.',
      },
      {
        question:
          'In what sense is JavaScript\'s class syntax "just" syntactic sugar over prototypes?',
        answer:
          "Writing a method inside a class body places that method on ClassName.prototype, exactly as if it had been manually assigned to a constructor function's .prototype property, and calling new ClassName() creates an object, links its [[Prototype]] to ClassName.prototype, and runs the constructor — identical steps to the older constructor-function pattern. class doesn't add a new object model to the language; it adds cleaner syntax and stricter rules (like requiring new) around the prototype chain that already existed.",
      },
    ],

    'regular-expressions': [
      {
        question:
          'What are the two ways to create a regular expression in JavaScript, and when would you use each?',
        answer:
          "You can use the literal syntax, /pattern/flags, or the RegExp constructor, new RegExp('pattern', 'flags'). The literal form is the common choice for fixed, known-in-advance patterns. The constructor form is necessary when the pattern needs to be built dynamically at runtime, for example from a variable holding user input.",
      },
      {
        question: 'What is the difference between test() and exec()?',
        answer:
          'test() simply returns a boolean indicating whether the pattern matches anywhere in the string. exec() returns an array with the full match, any capture groups, and the index of the match (or null if there is no match), and when used with the g flag it advances to the next match on each successive call.',
      },
      {
        question:
          'What does the g flag do, and what happens if you forget it with replace() or match()?',
        answer:
          'The g (global) flag makes the regex find every match in the string instead of stopping at the first one. Without it, replace() only replaces the first occurrence, and match() returns detailed information about just the first match instead of an array of every match found.',
      },
      {
        question:
          'What is a capture group, and how do named groups improve on numbered ones?',
        answer:
          'A capture group is a parenthesized part of a pattern that lets you extract that specific piece of the matched text. Numbered groups are accessed by position, like match[1], which becomes hard to track once there are several groups. Named groups, written as (?<name>...), let you access the same captured text by a descriptive name via match.groups.name instead.',
      },
      {
        question:
          'Why is fully validating an email address with a single regex considered impractical?',
        answer:
          'The full email specification (RFC 5322) allows for an enormous range of valid but unusual formats, and encoding all of those rules into one regex produces a pattern that is huge and hard to maintain. In practice, most applications use a loose regex to catch obvious formatting mistakes and rely on sending a confirmation email to verify the address actually works.',
      },
    ],

    'rest-parameters': [
      {
        question: 'What do rest parameters do, and how do you write them?',
        answer:
          "Rest parameters, written as ...name at the end of a function's parameter list, collect every remaining argument passed to the function call into a single real array. For example, function sum(...numbers) {} lets you call sum(1, 2, 3) with numbers becoming the array [1, 2, 3] inside the function body.",
      },
      {
        question: 'How do rest parameters improve on the old arguments object?',
        answer:
          'The arguments object is only array-like, not a true array, so array methods like map, filter, and reduce cannot be called on it directly without first converting it with something like Array.from(). Rest parameters give you a genuine array immediately, and unlike arguments, they also work inside arrow functions and can be combined with named parameters to capture just the extra, unnamed arguments.',
      },
      {
        question:
          'Why must a rest parameter always be the last parameter in a function signature?',
        answer:
          'A rest parameter collects all remaining arguments, so it only makes sense as the final parameter — there would be no arguments left over for any parameter placed after it. JavaScript enforces this rule and throws a SyntaxError if a rest parameter is followed by another parameter.',
      },
      {
        question:
          'What is the difference between rest and spread, given they share the same ... syntax?',
        answer:
          'Rest and spread use identical syntax but perform opposite operations depending on where they appear. Rest appears in a function parameter list or a destructuring pattern and gathers multiple individual values into a single array or object. Spread appears inside an array literal, object literal, or function call and expands a single array, object, or iterable out into its individual elements or properties.',
      },
      {
        question:
          'Can a rest element be used in destructuring, and how does that differ from a rest parameter?',
        answer:
          'Yes, rest can appear in both array destructuring, such as const [first, ...rest] = arr, and object destructuring, such as const { id, ...rest } = obj, where it collects whatever elements or properties were not explicitly named. A rest parameter refers specifically to the same gathering behavior applied to a function\'s parameter list rather than to a destructuring assignment, but the underlying "collect what is left" behavior is the same in both cases.',
      },
    ],

    scope: [
      {
        question: 'What is the scope chain and how does variable lookup work?',
        answer:
          'The scope chain is the ordered set of scopes the engine searches when resolving a variable name. When code references a variable, the engine first looks in the current innermost scope; if it is not found there, it looks in the enclosing scope, then the next one out, continuing until it reaches the global scope. If the variable is found nowhere, it throws a ReferenceError, or in non-strict mode an assignment creates an accidental global. This chain is fixed by where functions are written, which is what lexical scoping means.',
      },
      {
        question:
          'What is an IIFE and why was it commonly used before ES6 modules?',
        answer:
          'An IIFE, or Immediately Invoked Function Expression, is a function that is defined and called at once, typically written as (function(){ ... })(). Before block-scoped let/const and ES6 modules existed, developers used IIFEs to create a private scope so their variables would not leak into or collide with the global scope, and to emulate module-style encapsulation. Any variables declared inside the IIFE stayed local to it, exposing only what the function chose to return.',
      },
      {
        question: 'What is scope in JavaScript?',
        answer:
          'Scope determines where in your code a variable is accessible — it defines the visibility and lifetime of variables.',
      },
      {
        question:
          'What is the difference between global scope and local scope?',
        answer:
          'Global scope variables are accessible anywhere in the program, while local scope variables are only accessible within the function or block where they are declared.',
      },
      {
        question: 'What is block scope?',
        answer:
          'Block scope means a variable declared with let or const inside {} (like an if block or loop) is only accessible within that block.',
      },
      {
        question: 'Why is let preferred over var?',
        answer:
          "let is block-scoped and doesn't allow accidental redeclaration, avoiding the scoping bugs that var's function-scoped, hoisted behavior can cause.",
      },
      {
        question: 'What is lexical scope?',
        answer:
          "Lexical scope means a variable's accessibility is determined by where it is physically written in the code, based on nested function or block structure.",
      },
      {
        question: 'What is variable shadowing?',
        answer:
          'Variable shadowing occurs when a variable declared in an inner scope has the same name as one in an outer scope, temporarily hiding the outer variable within that inner scope.',
      },
      {
        question: 'What is function scope?',
        answer:
          'Function scope means a variable declared with var inside a function is accessible anywhere within that function, but not outside it.',
      },
    ],

    'searching-methods': [
      {
        question: 'What is the difference between indexOf() and includes()?',
        answer:
          "indexOf() returns the index of the first matching element, or -1 if it isn't found, so it's useful when you need the position. includes() returns a boolean (true/false) indicating whether the value exists, which is more readable when you only care about presence. includes() also has an edge-case advantage: it can correctly detect NaN in an array using the SameValueZero algorithm, while indexOf() cannot, because NaN !== NaN under strict equality.",
      },
      {
        question:
          'How does find() differ from filter(), and what does find() return if nothing matches?',
        answer:
          'find() returns only the first element that satisfies the callback and stops iterating as soon as it finds one, whereas filter() checks every element and returns a new array containing all matches. If no element satisfies the condition, find() returns undefined, while filter() would return an empty array.',
      },
      {
        question: 'What is the difference between find() and findIndex()?',
        answer:
          'find() returns the actual matching element (or undefined if none matches), while findIndex() returns the index of that matching element (or -1 if none matches). Use findIndex() when you need the position — for example, to later remove or replace that element with splice().',
      },
      {
        question:
          'What does every() return when called on an empty array, and why?',
        answer:
          "every() returns true on an empty array. This is because every() is only false if it finds an element that fails the condition; with no elements to check, there's nothing to fail, so the check is vacuously true. This is a common source of confusion and worth testing explicitly.",
      },
      {
        question:
          'Why might indexOf() fail to find an object in an array even if an "identical" object exists in that array?',
        answer:
          'indexOf() uses strict equality (===) to compare values. For objects, strict equality checks whether two variables reference the exact same object in memory, not whether their properties are equal. So searching for a newly created object like { id: 1 } will return -1 even if the array contains another object with the same shape and values, because they are different references. To search by property value, use find() or findIndex() with a callback instead.',
      },
      {
        question: 'When would you choose some() over every(), or vice versa?',
        answer:
          'Choose some() when you need to confirm that at least one element in the array meets a condition — for example, checking if a cart contains any out-of-stock item. Choose every() when you need to confirm that all elements meet a condition — for example, validating that every field in a form has been filled in. some() short-circuits on the first true result, and every() short-circuits on the first false result, so both can be efficient even on large arrays.',
      },
    ],

    setup: [
      {
        question: 'Do we need to install JavaScript?',
        answer:
          'No, JavaScript comes built into every modern web browser, so you can start running it immediately without installing anything.',
      },
      {
        question: 'How do you run JavaScript in a browser?',
        answer:
          "You can run it by linking a <script> tag in an HTML file, or by typing code directly into the browser's Developer Console.",
      },
      {
        question: 'What is the purpose of the <script> tag?',
        answer:
          'The <script> tag is used to embed or link JavaScript code within an HTML document so the browser can execute it.',
      },
      {
        question: 'Why should we use external JavaScript files?',
        answer:
          'External files keep HTML and JavaScript separated for better organization, allow the browser to cache the script, and make code easier to reuse across pages.',
      },
      {
        question: 'How do you open the browser Developer Console?',
        answer:
          "By pressing F12 or Ctrl+Shift+J (Cmd+Option+J on Mac) in most browsers, or via the browser's menu under Developer Tools.",
      },
    ],

    'spread-operator': [
      {
        question:
          'What does the spread operator do, and how is it different from the rest pattern?',
        answer:
          'The spread operator expands an iterable, such as an array, string, or object, into its individual elements or properties wherever it is used, for example inside a new array literal, object literal, or function call. The rest pattern uses the identical ... syntax but does the opposite job — it gathers multiple individual values back together into a single array or object, rather than expanding a collection outward.',
      },
      {
        question:
          'How would you merge two arrays into one using spread, and how does that compare to concat()?',
        answer:
          'You place both arrays inside a new array literal with spread in front of each, such as [...arrayA, ...arrayB], which reads more naturally than arrayA.concat(arrayB) and lets you freely interleave extra standalone values or more than two arrays in the same expression.',
      },
      {
        question:
          'When merging two objects with overlapping keys using spread, which value wins?',
        answer:
          'The value from whichever object was spread later in the object literal wins, since later properties overwrite earlier ones with the same key. This means you should spread your base or default values first and spread any overrides after them so the overrides take priority.',
      },
      {
        question: 'What is the shallow-copy caveat with the spread operator?',
        answer:
          'Spread only copies one level deep — top-level properties or elements get fresh copies, but if a value is itself a nested object or array, only its reference is copied, not its contents. This means mutating a nested object inside a spread copy will also mutate the same nested object inside the original, since both still point to the exact same object in memory.',
      },
      {
        question:
          'How can spread be used to pass array elements as separate arguments to a function?',
        answer:
          'By writing fn(...argsArray), which expands each element of argsArray into its own positional argument in the function call, for example Math.max(...numbers) to find the largest value in an array. This replaces the older pattern of using Function.prototype.apply() to achieve the same result.',
      },
    ],

    'static-array-methods': [
      {
        question:
          'Why is Array.isArray() preferred over typeof for checking if something is an array?',
        answer:
          'typeof returns "object" for arrays, plain objects, and null alike, so it cannot distinguish an array from other object types. Array.isArray() specifically checks whether the value is an array and returns a proper boolean, making it the reliable way to perform this check.',
      },
      {
        question: 'What two kinds of input can Array.from() accept?',
        answer:
          'Array.from() accepts either an iterable (such as a string, Set, or Map) or an array-like object (an object with a length property and indexed elements, such as the arguments object or a NodeList). In both cases it returns a real array built from that input.',
      },
      {
        question: 'What is the difference between Array(7) and Array.of(7)?',
        answer:
          'Array(7) creates an empty array with a length of 7 (no actual elements), because the single-argument form of the Array constructor is interpreted as a length. Array.of(7), by contrast, creates an array containing the single element 7. Array.of() exists specifically to avoid this inconsistency.',
      },
      {
        question:
          'How would you generate an array of numbers from 0 to 4 using Array.from()?',
        answer:
          'You can call Array.from({ length: 5 }, (_, index) => index), which passes an array-like object with a length of 5 as the first argument and a map function that returns the index itself for each position, producing [0, 1, 2, 3, 4].',
      },
      {
        question:
          'Can you use Array.from() to remove duplicate values from an array?',
        answer:
          'Yes — by first converting the array into a Set (which automatically discards duplicates) and then passing that Set into Array.from(), such as Array.from(new Set(someArray)). The result is a new array containing only the unique values, in their original insertion order.',
      },
    ],

    strings: [
      {
        question: 'What is a string in JavaScript?',
        answer:
          'A string is a sequence of characters used to represent textual data.',
      },
      {
        question: 'How do you find the length of a string?',
        answer: 'Using the length property.',
      },
      {
        question: 'What is the difference between slice() and split()?',
        answer:
          'slice() extracts a portion of a string, whereas split() converts a string into an array.',
      },
      {
        question: 'What are template literals?',
        answer:
          'Template literals are strings enclosed in backticks that support interpolation and multi-line strings.',
      },
      {
        question: 'How do you check if a string contains a specific word?',
        answer: 'Using the includes() method.',
      },
    ],

    'template-literals': [
      {
        question: 'What are template literals and how do you write one?',
        answer:
          'Template literals are strings delimited by backticks (`) instead of single or double quotes. On their own they behave like any other string, but they additionally support embedding expressions with ${} and spanning multiple lines with real line breaks, neither of which regular quoted strings support.',
      },
      {
        question:
          'How does string interpolation with ${} improve on string concatenation?',
        answer:
          'With concatenation, you have to break out of the string repeatedly with + to splice in each variable, which becomes hard to read and easy to get wrong as more variables are involved. With ${}, you write the variable or expression directly inside the string where it belongs, and JavaScript evaluates it and inserts the result automatically, keeping the whole string in one readable piece.',
      },
      {
        question:
          'Can you put more than a simple variable name inside ${}? Give an example.',
        answer:
          'Yes, ${} accepts any valid JavaScript expression, not just a bare variable — arithmetic like ${price * quantity}, function calls like ${shout("hi")}, ternaries like ${stock > 0 ? "In Stock" : "Out of Stock"}, and property access all work, since the expression is evaluated first and only its final result is inserted into the string.',
      },
      {
        question:
          'How do multi-line strings work with template literals compared to regular strings?',
        answer:
          'Regular single- or double-quoted strings need an escape sequence like \\n, or several strings joined together, to represent multiple lines. Template literals can contain an actual line break typed directly inside the backticks, and that line break becomes part of the resulting string with no escaping needed.',
      },
      {
        question:
          'What is a tagged template, and what does the tag function receive?',
        answer:
          'A tagged template is created by placing a function name immediately before a template literal, with no parentheses, such as highlight`The ${item} costs ${price}`. The tag function receives an array of the literal string segments as its first argument, followed by the evaluated value of each ${} expression as the remaining arguments, letting the function reconstruct or transform the string however it needs to.',
      },
    ],

    'this-keyword': [
      {
        question:
          'What does obj.method() log versus const m = obj.method; m() — and why?',
        answer:
          'obj.method() sees the object as this because this is bound by the call site: the part before the dot becomes this. But const m = obj.method; m() calls the same function as a plain, standalone function, so there is no object before a dot and this defaults to undefined in strict mode or the global object otherwise. This detaching of a method from its receiver is the single most common source of this bugs, and it is why methods passed as callbacks lose their intended this.',
      },
      {
        question:
          'What is the value of this in the global scope, inside a module, and inside a DOM event handler?',
        answer:
          'In the global scope of a normal script, this is the global object — window in the browser. Inside an ES module, top-level this is undefined because modules run in strict mode. Inside a regular-function DOM event handler added with addEventListener, this refers to the element the listener is attached to. However, if you use an arrow function as the handler, this is inherited from the surrounding lexical scope instead of the element, which is a common gotcha.',
      },
      {
        question:
          'How do arrow functions solve the lost-this problem in nested callbacks?',
        answer:
          'Because an arrow function has no this of its own and captures this lexically from where it is defined, using an arrow function for an inner callback lets it keep the this of the enclosing method rather than getting its own. Before arrow functions, developers worked around this by saving const self = this at the top of a method and referencing self inside the callback, or by calling .bind(this). An arrow function makes that boilerplate unnecessary because it permanently inherits the outer this.',
      },
      {
        question:
          'What determines the value of this in a regular JavaScript function?',
        answer:
          'The value of this is determined by how the function is called — its call site — not by where the function is defined. The same function can have a different this each time it is invoked, depending on whether it is called standalone, as an object method, with new, or with call()/apply()/bind().',
      },
      {
        question:
          'How does this behave differently inside an arrow function compared to a regular function?',
        answer:
          'A regular function gets its own this determined fresh at call time based on how it was invoked. An arrow function has no this of its own; instead it lexically inherits this from the scope in which it was defined, and that value never changes regardless of how the arrow function is later called.',
      },
      {
        question:
          'Why does this become undefined or incorrect when a method is passed as a callback?',
        answer:
          'When a method is extracted from its object and passed elsewhere, such as to setTimeout() or an event listener, it is no longer being called in the form obj.method(). It is called as a plain function instead, so this no longer refers to the original object and defaults to undefined in strict mode or the global object otherwise.',
      },
      {
        question: 'What is the difference between call(), apply(), and bind()?',
        answer:
          'call() and apply() both invoke the function immediately with a specified this value, differing only in how additional arguments are passed — individually for call() and as an array for apply(). bind() does not invoke the function at all; it returns a new function with this permanently set, which is useful for passing a method somewhere to be called later.',
      },
      {
        question:
          'How can you prevent a class method from losing its this when passed as a callback?',
        answer:
          "You can bind the method to the instance inside the constructor, for example this.method = this.method.bind(this), or define the method as an arrow function class field, since arrow functions capture this lexically from the constructor's scope and keep it locked to the instance no matter how the method is later called.",
      },
    ],

    'transforming-methods': [
      {
        question:
          'Why does numbers.sort() sometimes produce unexpected results with numeric arrays?',
        answer:
          'By default, sort() converts every element to a string and compares them based on their UTF-16 code unit values, not their numeric value. This means numbers are sorted lexicographically (as text) rather than numerically, so an array like [40, 1, 5, 200] can come out in an order that looks wrong at first glance. To sort numbers correctly, you must pass a comparator function such as (a, b) => a - b for ascending order.',
      },
      {
        question:
          'Do sort() and reverse() mutate the original array? How would you avoid that if needed?',
        answer:
          'Yes, both sort() and reverse() mutate the array in place and also return a reference to that same (now-modified) array. To avoid mutating the original — for example when working with immutable state — make a shallow copy first, such as with the spread operator ([...array].sort(...)) or array.slice(), and call the method on the copy instead.',
      },
      {
        question: 'What is the difference between flat() and flatMap()?',
        answer:
          "flat() simply flattens an existing array by a given depth (one level by default, or more if you pass a number, or fully with Infinity) — it doesn't transform the elements themselves. flatMap() first maps each element through a callback function and then flattens the result by exactly one level, combining both operations into a single, slightly more efficient call. Use flatMap() when your mapping callback returns arrays that need to be flattened afterward.",
      },
      {
        question:
          'How would you flatten a deeply, arbitrarily nested array in one call?',
        answer:
          'Call flat(Infinity) — passing Infinity as the depth argument tells flat() to keep flattening no matter how many levels of nesting exist, rather than being limited to a specific number of levels.',
      },
      {
        question: 'What does join() return, and how is it related to split()?',
        answer:
          "join() returns a single string made by concatenating every element of the array together, separated by whatever separator you provide (a comma by default). It's effectively the reverse operation of String.prototype.split(), which takes a string and breaks it into an array — join() takes an array and combines it back into a string.",
      },
      {
        question:
          'If you need to sort an array of objects by a numeric property in descending order, how would you write the comparator?',
        answer:
          "You'd pass a comparator like (a, b) => b.property - a.property, where \"property\" is the numeric field you're sorting by. Subtracting a's value from b's value (rather than the other way around) produces descending order, since it returns a positive number whenever a's value is smaller than b's, telling sort() to place b first.",
      },
    ],

    'type-conversion': [
      {
        question:
          'Explain the surprising results of [] + [] and [] + {}, and how JavaScript arrives at them.',
        answer:
          'With the + operator, if either operand is not a primitive JavaScript first converts it to a primitive, and for arrays and plain objects that means converting to a string. An empty array becomes the empty string, so [] + [] produces the empty string. An empty object becomes the string [object Object], so [] + {} produces [object Object]. These outcomes follow directly from + preferring string concatenation once an operand stringifies, and they are a favorite interview question for probing understanding of coercion rules.',
      },
      {
        question: 'Why is 0.1 + 0.2 not exactly equal to 0.3 in JavaScript?',
        answer:
          'JavaScript numbers are IEEE 754 double-precision floating point, which stores values in binary. Fractions like 0.1 and 0.2 cannot be represented exactly in binary, so they are stored as tiny approximations, and adding them yields 0.30000000000000004 rather than exactly 0.3. This is not a JavaScript-specific flaw but a property of binary floating point. To compare such values you check that the absolute difference is smaller than a tiny epsilon, or work in integers such as cents instead of dollars.',
      },
      {
        question:
          'What are the rules when comparing with == against null and undefined?',
        answer:
          'With loose equality, null and undefined are equal to each other and to nothing else — null == undefined is true, but null == 0 and undefined == 0 are false, and neither is loosely equal to the empty string or false. This makes value == null a handy shorthand to check for either null or undefined in one comparison. Strict equality, by contrast, treats them as distinct, so null === undefined is false.',
      },
      {
        question: 'What is type conversion in JavaScript?',
        answer:
          'Type conversion is the process of converting a value from one data type to another, such as a string to a number.',
      },
      {
        question:
          'What is the difference between implicit and explicit conversion?',
        answer:
          'Implicit conversion (coercion) happens automatically, e.g. during an operation like "5" + 1, while explicit conversion is done deliberately using functions like Number() or String().',
      },
      {
        question: 'What is type coercion?',
        answer:
          "Type coercion is JavaScript automatically converting a value's type behind the scenes, usually during operators like + or comparisons like ==.",
      },
      {
        question: 'What is the difference between == and ===?',
        answer:
          '== compares values after coercing them to the same type, while === compares both value and type without any conversion.',
      },
      {
        question: 'What are truthy and falsy values?',
        answer:
          'Truthy values are treated as true and falsy values (false, 0, "", null, undefined, NaN) are treated as false when evaluated in a boolean context.',
      },
      {
        question: 'What does Number("abc") return?',
        answer:
          'It returns NaN (Not a Number), since "abc" can\'t be converted into a valid number.',
      },
      {
        question: 'How do you convert a number into a string?',
        answer:
          'By using String(number), number.toString(), or template literals like `${number}`.',
      },
    ],

    variables: [
      {
        question: 'What is a variable?',
        answer:
          'A variable is a named container used to store a value in memory that can be referenced and manipulated later in the code.',
      },
      {
        question: 'Difference between var, let and const?',
        answer:
          'var is function-scoped and hoisted with an undefined default, let is block-scoped and can be reassigned, and const is block-scoped but cannot be reassigned after initialization.',
      },
      {
        question: 'Why should we avoid var?',
        answer:
          "var's function-scoping and hoisting behavior can lead to unexpected bugs, such as variables leaking outside blocks or being used before they're logically declared.",
      },
      {
        question: 'Can we change the value of a const object?',
        answer:
          'Yes, const only prevents reassigning the variable itself — the properties of an object or elements of an array it points to can still be changed.',
      },
      {
        question: 'What are block scope and function scope?',
        answer:
          'Block scope (let/const) restricts a variable to the nearest {} block, while function scope (var) makes a variable accessible anywhere within the enclosing function.',
      },
    ],
  };
