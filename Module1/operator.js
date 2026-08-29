// Arithmetic operators = + - * / %
const a = 10;
const b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333333333333335
console.log(a % b); // 1


// Assignment operators = += -= *= /=
let x = 10;

x += 3;
console.log(x); // 13

x -= 3;
console.log(x); // 10

x *= 3;
console.log(x); // 30

x /= 3;
console.log(x); // 10


// Comparison operators == != > < >= <= === !==
console.log(a == b);  // false
console.log(a != b);  // true
console.log(a > b);   // true
console.log(a < b);   // false
console.log(a >= b);  // true
console.log(a <= b);  // false
console.log(a === b); // false
console.log(a !== b); // true


// Logical operators && || !
const age = 20;
const hasId = true;

console.log(age >= 18 && hasId); // true
console.log(age >= 18 || hasId); // true
console.log(!hasId);             // false
