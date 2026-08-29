
let user = {
    name : "sahrior",
    age: 23,
    adress: "dhaka"
}

console.log(user.name);
console.log(user["name"]);


console.log(user)
delete  user.adress;
console.log(user);

user.adress={
    city: "rajshahi",
    area : "rangpur"
}
console.log(user);

console.log(Object.entries(user));
console.log(Object.key(user));


