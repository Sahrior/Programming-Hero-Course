// ==========================================
// 1. OBJECT DESTRUCTURING
// ==========================================

const user = {
  name: 'Alex',
  age: 18,
  city: 'Seattle',
  role: 'Developer'
};

// Basic extraction (variable names must match property keys)
const { name, age } = user;
console.log(name, age); // Output: Alex 18

// Renaming variables while destructuring
const { city: location, role: jobTitle } = user;
console.log(location, jobTitle); // Output: Seattle Developer

// Setting default values
const { country = 'USA' } = user;
console.log(country); // Output: USA

// Rest syntax with objects (collects remaining properties)
const { name: userName, ...restOfUser } = user;
console.log(restOfUser); // Output: { age: 18, city: 'Seattle', role: 'Developer' }


// ==========================================
// 2. ARRAY DESTRUCTURING
// ==========================================

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// Basic extraction (assigned by index position)
const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor); // Output: red green

// Skipping elements using commas
const [, , thirdColor, , fifthColor] = colors;
console.log(thirdColor, fifthColor); // Output: blue purple

// Setting default values
const [primary, secondary, tertiary = 'black'] = ['cyan', 'magenta'];
console.log(primary, secondary, tertiary); // Output: cyan magenta black

// Rest syntax with arrays (collects remaining elements into a new array)
const [head, ...tail] = colors;
console.log(head); // Output: red
console.log(tail); // Output: ['green', 'blue', 'yellow', 'purple']


// ==========================================
// 3. PRACTICAL COMBINED EXAMPLE (Function Parameters)
// ==========================================

// Destructuring objects directly inside function arguments
function displayProfile({ name, role }) {
  console.log(`${name} works as a ${role}`);
}

displayProfile(user); // Output: Alex works as a Developer

// Swapping two variables using array destructuring
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // Output: 2 1