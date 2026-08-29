// ==========================================
// FOR...OF AND FOR...IN
// ARRAY + OBJECT
// ==========================================


// ==========================================
// 1. ARRAY
// ==========================================

const fruits = ["Apple", "Banana", "Mango", "Orange"];


// ---------- FOR...OF with ARRAY ----------
// Gets the VALUES

console.log("FOR...OF - ARRAY:");

for (const fruit of fruits) {
    console.log(fruit);
}


// Output:
// Apple
// Banana
// Mango
// Orange



// ---------- FOR...IN with ARRAY ----------
// Gets the INDEXES

console.log("\nFOR...IN - ARRAY:");

for (const index in fruits) {
    console.log(index);
}


// Output:
// 0
// 1
// 2
// 3



// ---------- FOR...IN with ARRAY + VALUE ----------

console.log("\nFOR...IN - ARRAY + VALUE:");

for (const index in fruits) {
    console.log(index, fruits[index]);
}


// Output:
// 0 Apple
// 1 Banana
// 2 Mango
// 3 Orange



// ==========================================
// 2. OBJECT
// ==========================================

const student = {
    name: "Sahrior",
    age: 22,
    department: "CSE",
    university: "UIU"
};


// ---------- FOR...IN with OBJECT ----------
// Gets the KEYS

console.log("\nFOR...IN - OBJECT:");

for (const key in student) {
    console.log(key);
}


// Output:
// name
// age
// department
// university



// ---------- FOR...IN with OBJECT + VALUE ----------

console.log("\nFOR...IN - OBJECT + VALUE:");

for (const key in student) {
    console.log(key, student[key]);
}


// Output:
// name Sahrior
// age 22
// department CSE
// university UIU



// ==========================================
// 3. FOR...OF with OBJECT
// ==========================================

// ❌ This does NOT work:
//
// for (const value of student) {
//     console.log(value);
// }
//
// Objects are NOT directly iterable with for...of.



// ==========================================
// 4. FOR...OF with Object.keys()
// ==========================================

console.log("\nFOR...OF - OBJECT KEYS:");

for (const key of Object.keys(student)) {
    console.log(key);
}


// Output:
// name
// age
// department
// university



// ==========================================
// 5. FOR...OF with Object.values()
// ==========================================

console.log("\nFOR...OF - OBJECT VALUES:");

for (const value of Object.values(student)) {
    console.log(value);
}


// Output:
// Sahrior
// 22
// CSE
// UIU



// ==========================================
// 6. FOR...OF with Object.entries()
// ==========================================

console.log("\nFOR...OF - OBJECT KEY + VALUE:");

for (const [key, value] of Object.entries(student)) {
    console.log(key, value);
}


// Output:
// name Sahrior
// age 22
// department CSE
// university UIU