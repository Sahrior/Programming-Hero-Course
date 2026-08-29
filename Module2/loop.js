const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// ==========================================
// 1. FOR LOOP
// ==========================================

console.log("FOR LOOP:");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// ==========================================
// 2. WHILE LOOP
// ==========================================

console.log("\nWHILE LOOP:");

let i = 0;

while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}


// ==========================================
// 3. DO-WHILE LOOP
// ==========================================

console.log("\nDO-WHILE LOOP:");

let j = 0;

do {
    console.log(fruits[j]);
    j++;
} while (j < fruits.length);


// ==========================================
// 4. FOR...OF LOOP
// ==========================================

console.log("\nFOR...OF LOOP:");

for (const fruit of fruits) {
    console.log(fruit);
}


// ==========================================
// 5. forEach()
// ==========================================

console.log("\nforEach:");

fruits.forEach((fruit) => {
    console.log(fruit);
});