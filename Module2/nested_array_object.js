let user = {
    name : "sahrior",
    age: 23,
    adress: {
        city: "rajshahi",
        area : "rangpur",
        zipcode: 6000
    }
}

console.log(user["adress"].city);

let entry = Object.entries(user);
console.log(entry[0]);


let students = [
    {
        name: "afifa",
        id: "101"
    },
    {
        name: "sahrior",
        id: "102"
    }
]

console.log(students[2].name);

