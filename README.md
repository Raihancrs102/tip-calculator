Answer for the PPT assigned tasks .

/*
    Ques: What is TypeScript and how is it different from JavaScript?

    Ans: TypeScript is a strongly typed programming language that builds upon JavaScript. It is a superset of JavaScript, meaning all valid JavaScript code is also valid TypeScript code. TypeScript adds optional static typing, interfaces, and other object-oriented features to JavaScript, which are then compiled or "transpiled" into plain JavaScript that can run in any environment where JavaScript run.

    TypeScript = JavaScript + static types + modern features

    JavaScript:
    function greet(name) {
    return "Hello, " + name.toUpperCase();
    }

    TypeScript:
    function greet(name: string): string {
    return "Hello, " + name.toUpperCase();
    }

*/


/*
    Ques: What are type annotations in TypeScript? Provide an example

    Ans: Type annotations are a way to explicitly declare the data type of a variable, function parameter, or return value in TypeScript. They help the compiler catch type-related errors at compile time, not at runtime.

    Example:

    1.  let age: number = 25;
        let name: string = "Alice";
        let isStudent: boolean = true;
    
    2.  let scores: number[] = [85, 92, 78];
        let names: string[] = ["Alice", "Bob"];

*/

/*
    Ques: What is the difference between let, const, and var in TypeScript?

    Ans: 
    var: Function-scoped, Hoisted, Can be redeclared.

    function testVar() {
    if (true) {
        var message = "Hello";
    }
    console.log(message); 
    }

    Let: Block-scoped ({ }), Not hoisted in the same way as var, Can be reassigned but not redeclared in the same scope, Preferred for variables that will change

    function testLet() {
    if (true) {
        let message = "Hello";
        console.log(message);  
    }
        console.log(message);  Error: message is not defined
    }

    Const: Block-scoped, Cannot be reassigned, Must be initialized at the time of declaration, Best for variables that are meant to stay constant

    const name = "Alice";
    name = "Bob";  Error: Cannot assign to 'name' because it is a constant

*/

/*
    Ques: What are interfaces in TypeScript? How do they help in defining object shapes? Provide an example.

    Ans: In TypeScript, an interface is a way to define the shape of an object — that is, what properties and methods it must or can have. Interfaces are used to enforce structure and type safety, especially in object-oriented or large-scale applications

    Without Interface:

    function printUser(user: { name: string; age: number }) {
    console.log(`${user.name} is ${user.age} years old.`);
    }

    With Interface:

    interface User {
    name: string;
    age: number;
    }

    function printUser(user: User) {
    console.log(`${user.name} is ${user.age} years old.`);
    }

    const person: User = { name: "Alice", age: 30 };
    printUser(person);

*/

/*
    Ques:What does the any type represent in TypeScript? How does it affect type safety?

    Ans: In TypeScript, the any type represents a value that can be of literally any type. When a variable, parameter, or return value is declared with the any type, TypeScript effectively disables its static type checking for that specific element. This means you can assign a value of any type (number, string, object, boolean, etc.) to an any-typed variable without causing a compile-time error.

    Using any effectively bypasses TypeScript’s type system, which can lead to runtime errors — exactly what TypeScript is designed to prevent

    example:

    let data: any;

    data = 42;
    data = "hello";
    data = true;
    data.toUpperCase();  // No error, but also no type safety


    let data: string;
    data = "hello";
    data = 42; //  Type error: number is not assignable to string

*/

/*
    Ques: Explain the difference between numeric enums and string enums in TypeScript. Provide examples for both.

    Ans: 
    Numeric Enums: By default, enums are numeric.
                Members are assigned incrementing numbers, starting at 0 (unless a custom number is specified).
                Values are auto-incremented.
    
    example:

    enum Direction {
    Up,      // 0
    Down,    // 1
    Left,    // 2
    Right    // 3
    }

    let move: Direction = Direction.Left;
    console.log(move); // 2


    String Enums: Members are assigned explicit string values.
            No auto-incrementing — you must provide all values manually.
            More readable and debuggable in output/logs.

    example: 

    enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
    }

    let move: Direction = Direction.Left;
    console.log(move); // "LEFT"

*/

/*
    Ques: What is reverse mapping in TypeScript enums? Provide an example.

    Ans: Reverse mapping in TypeScript enums refers to the ability to retrieve the string name of an enum member when given its numeric value.

    example: 

    enum Direction {
    Up,      // 0
    Down,    // 1
    Left,    // 2
    Right    // 3
    }

    console.log(Direction[2]) // Left
*/

/*
    Ques: How do computed members work in TypeScript enums? Give an example of how to use them

    Ans: In TypeScript, computed members in enums are values that are calculated at compile time using expressions, instead of being directly assigned.

    They are defined using an expression, like calling a function or performing arithmetic.

    Rules for Computed Members:

    1. They must come after any non-computed (constant) members, unless all members are explicitly initialized.

    2. They cannot participate in auto-incrementing unless their value is numeric and computable.

    function getRandomId() {
  return Math.floor(Math.random() * 100);
}

enum Status {
  OK = 200,
  NotFound = 404,
  Random = getRandomId(),
}

console.log(Status.OK);    
console.log(Status.NotFound); 
console.log(Status.Random);  

*/

/*
    Ques:
    Ans: optional properties in an interface using the question mark (?) syntax after the property name.

    interface User {
    id: number;
    name: string;
    age?: number; // optional
    }

    const user1: User = {
    id: 1,
    name: "Alice"
    };

    const user2: User = {
    id: 2,
    name: "Bob",
    age: 30 // optional, but can be included
    };

 */

/*
    Ques: What is the benefit of using strict equality (===) in TypeScript over loose equality (==)?
    Ans: In TypeScript (and JavaScript), using strict equality (===) instead of loose equality (==)
*/

/**
 *  Ques: What is type coercion in JavaScript? How does TypeScript handle it? Provide an example
 *  Ans: Type coercion is JavaScript's automatic conversion of one data type to another during operations, especially in comparisons or mathematical expressions.
 *  
 * console.log('5' + 1);    //51
    console.log('5' - 1);    //4
    console.log(true + 1);   //2
    console.log(null == undefined);  //ture
 */

/**
 *  Qus: What are union types in TypeScript? How are they different from interfaces? Provide an example.
 *  Ans: A union type in TypeScript allows a variable to hold more than one type. It's written using the | (pipe) symbol.
 * function printId(id: string | number) {
    if (typeof id === "string") {
        console.log("ID (string):", id.toUpperCase());
    } else {
        console.log("ID (number):", id.toFixed(2));
    }
    }

    printId(123);      // "ID (number): 123.00"
    printId("abc123"); // "ID (string): ABC123"

 */

/**
 *  Ques: How can you use type aliases in TypeScript? Provide an example where a type alias improves code readability
 *  Ans: A type alias in TypeScript is a way to create a custom name (alias) for a type.
It helps improve readability, reuse, and organization — especially when dealing with complex types.
    
    type UserID = string;

    let id: UserID = "abc-123"; // clearer than just saying "string"

 */
