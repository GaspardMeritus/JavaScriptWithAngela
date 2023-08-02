// Love score calculator
function loveCalculator() {
  var nameOfPerson1 = prompt("Enter the name of the first person");
  var nameOfPerson2 = prompt("Enter the name of the first person");
  var randomNumber = Math.random();
  var percentage = randomNumber * 100 + 1;
  var loveScore = Math.floor(percentage);
  alert("You love score is " + loveScore);
}

// Create a BMI Calculator Advanced

function bmiCalculatorAdvanced(weight, height) {
  //var bmi = Math.floor(weight / (height * height));
  var bmi = weight / Math.pow(height, 2);
  bmi = Math.round(bmi);
  var interpretation;

  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else if (bmi > 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you are overweight";
  } else {
    interpretation = "I don't understand that BMI";
  }

  return interpretation;
}

// Leap year Challenge
// Rule 1: year is evenly divisible by 4
// Rule 2: except every year that is evenly divisible by 100
// Rule 3: unless the year is also evenly divisible by 400

function isLeap(year) {
  var message;

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        message = "Leap year.";
      } else {
        message = "Not Leap year.";
      }
    } else {
      message = "Leap year.";
    }
  } else {
    message = "Not Leap year.";
  }

  return message;
}

var interpretation = isLeap(2000);
console.log(interpretation);

// Fizz Buzz Challenge
var output = [];
var number = 1;

function fizzBuzz() {
  if (number % 3 === 0 && number % 5 !== 0) {
    output.push("Fizz");
  } else if (number % 3 !== 0 && number % 5 === 0) {
    output.push("Buzz");
  } else if (number % 3 === 0 && number % 5 === 0) {
    output.push("FizzBuzz");
  } else {
    output.push(number);
  }

  number++;
  console.log(output);
}
