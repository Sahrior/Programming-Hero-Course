
// foreach

const fruits = ["Apple", "Banana", "Mango", "Orange", "human"];

fruits.forEach((fruit) => {
    console.log(fruit);
});


// map


const newFruits = fruits.map((fruit) => {

    return fruit + " Fruit";

});

console.log(newFruits);


// filter 

const filteredFruits = fruits.filter((fruit) => {

    return fruit.length > 5;

});

console.log(filteredFruits);


// find


const foundFruit = fruits.find((fruit) => {

    return fruit.length > 5;

});

console.log(foundFruit);


// include

const result = fruits.includes("Mango");

console.log(result);

// some


const result1 = fruits.some((fruit) => {

    return fruit.length > 6;

});

console.log(result1);