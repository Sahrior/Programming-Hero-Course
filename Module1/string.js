// String creation
const name = "Sahrior";
console.log(name);


// String concatenation
const firstName = "Sahrior";
const lastName = "Shovon";

console.log(firstName + " " + lastName);


// Template literals
const age = 21;

console.log(`My name is ${name} and I am ${age} years old.`);


// String length
console.log(name.length);


// Access characters
console.log(name[0]);
console.log(name[1]);


// Uppercase and lowercase
console.log(name.toUpperCase());
console.log(name.toLowerCase());


// Trim
const text = "   Hello World   ";

console.log(text.trim());


// Includes
console.log(name.includes("rio"));


// Starts and ends
console.log(name.startsWith("Sah"));
console.log(name.endsWith("ior"));


// Index
console.log(name.indexOf("h"));


// Slice
console.log(name.slice(0, 3));


// Replace
const sentence = "I love JavaScript";

console.log(sentence.replace("JavaScript", "Python"));


// Split
const fruits = "apple,banana,mango";

console.log(fruits.split(","));


// Repeat
console.log("Hello ".repeat(3));


// Character
console.log(name.charAt(0));


// Convert number to string
const number = 100;

console.log(String(number));


// Convert string to number
const value = "500";

console.log(Number(value));