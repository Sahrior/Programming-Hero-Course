
//function rest operators

function add (...num){
    console.log(num);
    
}

add(1,2,34,5)


// object rest operators

const obj = {
    name : "sahrior",
    age : 27,
    adress : "dhaka",
    occupation : "devloper"
}
const {name, ...remaining} = obj;
console.log(remaining);


//array rest operators

const arr = [1,2,3,4,5]
const  [, , , ...rest] = arr

console.log(rest);
