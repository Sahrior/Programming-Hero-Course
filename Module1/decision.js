// if

const age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Not adult");
}


// if else if else

const marks = 75;

if (marks >= 80) {
    console.log("A+");
} else if (marks >= 70) {
    console.log("A");
} else if (marks >= 60) {
    console.log("B");
} else {
    console.log("Fail");
}


// switch

const day = "Friday";

switch (day) {

    case "Friday":
    case "Saturday":
        console.log("Weekend");
        break;

    case "Sunday":
        console.log("University");
        break;

    default:
        console.log("Other day");
}


// ternary

const number = 10;

const result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);