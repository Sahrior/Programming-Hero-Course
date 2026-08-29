const products = [
    {
        name: "Laptop",
        price: 80000,
        inStock: true
    },
    {
        name: "Mouse",
        price: 1500,
        inStock: true
    },
    {
        name: "Keyboard",
        price: 3000,
        inStock: false
    },
    {
        name: "Monitor",
        price: 25000,
        inStock: true
    },
    {
        name: "Headphone",
        price: 5000,
        inStock: false
    }
];


const totalPrice = products.reduce((total, product) => {

    return total + product.price;

}, 0);

console.log(totalPrice);

//sorting

products.sort((a, b) => {

    return a.price - b.price;

});

console.log(products);