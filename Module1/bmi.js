const weight = process.argv[2];
const height = process.argv[3];

function calculateBmi(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}

console.log(`Your BMI is: ${calculateBmi(weight, height).toFixed(2)}`);

const yourBMI = calculateBmi(weight, height);

if (yourBMI < 18) {
    console.log("You Are Underweight.");
} else if (yourBMI < 25) {
    console.log("You Are Fit");
} else if (yourBMI < 30) {
    console.log("You Are Overweight");
} else {
    console.log("You Are Alien");
}