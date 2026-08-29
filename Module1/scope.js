// ==========================================
// 1. GLOBAL SCOPE
// ==========================================

// This variable is declared outside any function or block.
// It can be accessed from anywhere in this file.
let globalVariable = "I am global";

console.log(globalVariable);


// ==========================================
// 2. FUNCTION SCOPE
// ==========================================

function testFunction() {

    // This variable is declared inside a function.
    // It can ONLY be accessed inside this function.
    var functionVariable = "I am function scoped";

    console.log(functionVariable);
}

testFunction();

// ❌ This would cause an error because functionVariable
// is not accessible outside testFunction.
// console.log(functionVariable);


// ==========================================
// 3. BLOCK SCOPE
// ==========================================

if (true) {

    // let and const are block scoped.
    // They can ONLY be accessed inside this { } block.
    let blockVariable = "I am block scoped";
    const anotherBlockVariable = "I am also block scoped";

    console.log(blockVariable);
    console.log(anotherBlockVariable);
}

// ❌ Both variables are inaccessible here.
// console.log(blockVariable);
// console.log(anotherBlockVariable);


// ==========================================
// 4. LOCAL SCOPE
// ==========================================

function calculate() {

    // A variable declared inside a function is local
    // to that function.
    let localVariable = 100;

    console.log("Local variable:", localVariable);
}

calculate();

// ❌ localVariable cannot be accessed here.
// console.log(localVariable);


// ==========================================
// QUICK SUMMARY
// ==========================================

// Global  → accessible almost everywhere
// Function → accessible only inside the function
// Block    → let/const accessible only inside { }
// Local    → variable belonging to a specific local scope