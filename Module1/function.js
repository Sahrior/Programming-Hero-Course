function calculateTip(billAmount, tipPercentage) {
  return billAmount * (tipPercentage / 100);
}

// Example usage:
const tip = calculateTip(50, 15); // Calculates a 15% tip on a $50 bill
console.log(tip); // Output: 7.5