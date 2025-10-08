
//Conditional Operator

// Logical AND (&&): Returns the second operand if the first is true.

let x = 10;
let y = 3;

console.log(x < 15 && y > 1 ); // true
console.log(x < 15 && "Hello"); // Hello

// Logical OR (||): Returns the first operand if it's true; otherwise, returns the second.

console.log ((x === 5 || y === 5)); // false

console.log("Hello" || y === 3);    // Hello

// Ternary Operator (?): Return the  first operand if it's true; otherwise, return the second.

console.log(x === 10 ? "This is true" : "This is false");

// Nullish Operator (??): Returns the right-hand operand if the left is null or undefined.
//Exmaple 1:
let name = null;
let defaultName = "Guest";

console.log(name ?? defaultName); // "Guest"

//Example 2:
let count = 0;
let result = count || 10;
console.log(result); // 10 (because 0 is falsy)

console.log(count ?? 10); // 0 (because 0 is NOT null or undefined)

//Equality (==, ===): Checks for equality (with or without type coercion).
let p = 12;
let q = '12';
console.log(p == q); // true
console.log(p === q); // false

//Inequality (!=, !==): Checks for inequality (with or without type coercion).

console.log(p != q); // false
console.log(p !== q); // true

//Comparison Operators (>, <, >=, <=): Compares two values

console.log(x > y); // true
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <= y); // false

//Logical NOT (!): Negates a boolean value.

console.log(!x) // false

console.log(!(p === q))  // true

//If, Else-If, Else, Switch-Case

//If

let age = 25;
let hasID = true;

if (age >= 18 && hasID) 
  console.log("Allowed entry");

// Else

if (age >= 18 && hasID) {
  console.log("Allowed entry");
} else {
  console.log("Entry denied");
}

// Else-if

let a = 10;
let b = 20;
let c = 30;

if( a>b){
    console.log("B is less than A");
}else if( c>b) {
    console.log("C is grather than B");
}

// Switch

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");     // Tuesday
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}

//Example 2:
switch (day) {
  case 4:
  case 5:
    console.log("Soon it is Weekend");
    break;
  case 0:
  case 6:
    console.log("It is Weekend");
    break;
  default:
    console.log("Looking forward to the Weekend");  // Looking forward to the Weekend
}

// For, For..of, For..in Loop

let fruits = ["apple", "banana", "cherry"];

// For Loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// For..of Loop
for (let fruit of fruits) {
  console.log(fruit);
}

// For..in Loop

let person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

//While, Do…while loops

//While
let i = 1;

while (i <= 5) {
  console.log("while loop count:", i);
  i++;
}

//do..while 

let number = 1;

do {
  console.log("do...while loop number:", number);
  number++;
} while (number <= 5);

//Function Declaration, Expression

// Function Declaration

function hello(name) {
    return `Hi, ${name}`;
}
console.log(hello("John"));

//Function Expression

const Name = function hello(name) {
    return `Hi, ${name}`;
}

console.log(Name("John"));

// Arrow Function

myFunction = (a, b) => a * b;

console.log(myFunction(2, 5));

// Function Default parameter 
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}
console.log(greet('Alice')); 
console.log(greet())

//Recursive Function:

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


//SET 5
//write a function that takes a number as input and returns whether the number is positive, negative or zero using conditonal operators in javascript

 function checkNumber(num) {
  return num > 0 
    ? "Positive" 
    : num < 0 
      ? "Negative" 
      : "Zero";
}

console.log(checkNumber(10));   // Positive
console.log(checkNumber(-5));   // Negative
console.log(checkNumber(0));    // Zero

//write a function that takes the name of a day as input and returns whether it's a weekday or weekend. use if-else for one case and switch-case for the other



//write a program that takes an arry of numbers and returns the sum of all the even numbers using a for..of loop
function sumEvenNumbers(numbers) {
  let sum = 0;

  for (const num of numbers) {
    if (num % 2 === 0) {
      sum += num;
    }
  }

  return sum;
}
const nums = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(nums)); //  12 (2 + 4 + 6)


// write a while loop that prints all the numbers from 1 to 10. After printing each number, check if it is divisible by 2 or 3 and print "Divisible by 2 or 3" next to it

let t = 1;

while (t <= 10) {
  let output = t;

  if (t % 2 === 0 || t % 3 === 0) {
    output += " Divisible by 2 or 3";
  }

  console.log(output);
  t++;
}

//write a recursive function that calculates the fibonacci sequence for a given number n

function fibonacci(n) {
  if (n <= 0) {
    return 0;           
  } else if (n === 1) {
    return 1;           
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive case
  }
}
console.log(fibonacci(0));  //  0
console.log(fibonacci(1));  //  1
console.log(fibonacci(5));  //  5
console.log(fibonacci(10)); //  55

