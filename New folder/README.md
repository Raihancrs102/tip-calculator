#SET 1

Q1: What is the purpose of the else if statement in an if-else block?

Ans: The purpose of the else if statement in an if-else block is to check multiple conditions sequentially. It allows you to define additional conditions if the initial if condition is false, giving your program a way to handle more than two possibilities.

Q2: Explain how the ternary operator works in javaScript with an example.

Ans:The ternary operator in JavaScript is a shorthand way of writing an if...else statement. It’s called "ternary" because it takes three operands.

//Example:

let age = 20;

let canVote = age >= 18 ? "Yes" : "No";

console.log(canVote);

//Example: FUNCTION CALL DEPENDING ON CONDITION

let isLoggedIn = true;

isLoggedIn ? showDashboard() : showLoginPage();

Q3: What are the logical operatiors in javaScript? Give Eexamples of how to use them

Ans:In JavaScript, logical operators are used to combine or manipulate boolean values (true or false). They are often used in control flow (if, while, etc.) or expressions where multiple conditions need to be evaluated.

//Example:

//AND OPERATOR

let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed entry");
} else {
  console.log("Entry denied");
}

//OR OPERATOR

let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("You can relax!");
} else {
  console.log("Go to work.");
}

// NOT OPETAOR

let isRaining = false;

if (!isRaining) {
  console.log("Go for a walk");
} else {
  console.log("Stay inside");
}

Q4: How do the if, else if , and else statements differ in JavaScript? Provide an example of each

Ans: 

IF: if is basically check the condition, either is true or false. if the conditon is true then code executed otherwise none.

let isRaining = ture;

if (isRaining) {
  console.log("Go for a walk");
}
ELSE IF: if the conditons are more than one and to check seperatly from each other then we use else if conditon.

let a = 10;
let b = 20;
let c = 30;

if( a>b){
    console.log("B is less than A");
}else if( c>b) {
    console.log("C is grather than B");
}

ELSE: when if and else if is not true than code is executed the else condition block

let a = 50;
let b = 100;

if(a>b) {
    console.log("A is grather than B");
}else {
    console.log("B is less than A");
}

#SET 2

Q1: What is the difference between a for loop and a for..of loop in javaScript? give an example.

Ans:

FOR LOOP: for loop is an index based itterations. Used when you need the index or want more control over the loop (start, stop, step).Works with arrays, strings, and more.

let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

FOR..OF LOOP: for..of loop is a value based itterations. Used to loop directly over the values of an iterable like an array, string, or Set.

let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}

Q2: How does a for..in loop behave? Provide an example

Ans: The for...in loop is used to iterate over the enumerable properties (keys) of an object. It gives you the keys (property names), not the values directly.

let person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

Q3: What is the purpose of the break statement in loop? Give an example where it is useful

Ans: The break statement "jumps out" of loops and switches.The break statement terminates the execution of a loop or a switch statement.

for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

Q4: Describe the defference between while and do..while loops in JavaScript? Give an example

Ans: The do while runs at least once, even if the condition is false from the start.This is because the code block is executed before the condition is tested:

While Loop: The while loop loops through a block of code as long as a specified condition is true.

while (i < 10) {
  text += "The number is " + i;
  i++;
}

do..while Loop: The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

do {
  text += "The number is " + i;
  i++;
}
while (i < 10);

#SET 3

Q1: What is the difference between a function declaration and a function expression in javaScript?

Function Declaration:
A JavaScript function is a block of code designed to perform a specific task. It is a reusable piece of code that can be executed when called upon. Functions can take inputs, called parameters, perform some actions, and return a value (optional).

Function Expression:
A Function Expression is a way to define a function in JavaScript by assigning it to a variable. Unlike function declarations, function expressions are not hoisted, meaning they cannot be called before they are defined.

Q2: What is the recursive function? Provide an example of a recursive  function for calculationg the factorial of a number
Ans: A recursive function is a function that calls itself in order to solve a problem. This technique is often used when a problem can be broken down into smaller subproblems of the same type.
The function must have a condition that stops the recursion. Without this, the function would keep calling itself indefinitely and result in a stack overflow error.

function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    return "Input must be a non-negative integer.";
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}
 console.log(factorial(5));

 Q3: Explain what default parameters are in a function. how do you use them in javaScript

 Ans: In JavaScript, set default values for function parameters. If a parameter is undefined, the default value will be used.

 function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5));      
console.log(multiply(5, 2));    

Q4: What is the purpose of the return statement in a function? Provide an example

Ans: Send back (return) a value from the function to where it was called. End the function’s execution immediately when return is reached.

function add(a, b) {
  return a + b;
}
 
console.log(add(2,5));

#SET 4

Q1: When would you use a switch-case satement instead of an if-else block

Ans:

Switch Case is better:

1. Multiple discrete values for one variable:

    Use switch-case when you need to compare the same variable or expression against many constant values.

      Example: Choosing an action based on a day of the week, menu option, or error code.

2. Better readability and structure:

   For many discrete cases, switch-case makes your code cleaner and easier to read compared to a long chain of if-else statements.

3. Performance:

  Some languages optimize switch-case better than if-else chains, making switch potentially faster when there are many cases.

4. Code maintainability:

    Adding new cases in a switch-case block is usually simpler and more organized.

if-else is better:

1. When conditions are ranges or complex expressions (e.g., if (x > 10 && y < 5)).

2. When you need to check multiple variables or different expressions.

3. When the cases are not constants or simple values.

Q2: What happens when a continue statement is used in a loop? how does it differ from break?

Ans: 

Continue: The continue statement skips the current iteration in a loop.The remaining code in the iteration is skipped and processing moves to the next iteration.

Break: The break statement "jumps out" of loops and switches.The break statement terminates the execution of a loop or a switch statement.

Q3: How can you handle multiple conditions in a single if statement? Provide an example using logical operators.

Ans: Handle multiple conditions in a single if statement by combining them with logical operators. The most common logical operators are:

AND (&&) — True only if all conditions are true.

OR (||) — True if any condition is true.

NOT (!) — Negates a condition (true becomes false, false becomes true).

int num = 16;

if (num >= 10 && num <= 20 || num % 2 == 0) {
    printf("Number is between 10 and 20, and it is even.\n");
} else {
    printf("Number does not meet the criteria.\n");
}


