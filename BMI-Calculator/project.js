let heightInInch = Number(prompt("Enter your height in inches"));
let weightInPound = Number(prompt("Enter your weight in pound"));
// converting inches and pound in cm and kilo
let convertHeightInCm = heightInInch * 2.54;
let convertWeightInKilo = weightInPound / 2.2046;
// calculate the body mass index
let calBMI = (convertWeightInKilo / (convertHeightInCm / 100) ** 2).toFixed(2);
console.log(`the body mass index is  ${calBMI}`);
if (calBMI >= 16 && calBMI <= 18.5) {
  console.log("you are Underweight");
} else if (calBMI > 18.5 && calBMI <= 25) {
  console.log("you are Normal");
} else if (calBMI > 25 && calBMI <= 30) {
  console.log("you are overweight");
} else {
  console.log("you are obesity");
}
