// Love score calculator Challenge
function loveCalculator() {
  var nameOfPerson1 = prompt("Enter the name of the first person");
  var nameOfPerson2 = prompt("Enter the name of the first person");
  var randomNumber = Math.random();
  var percentage = randomNumber * 100 + 1;
  var loveScore = Math.floor(percentage);
  alert("You love score is " + loveScore);
}

// Create a BMI Calculator Advanced Challenge

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
var count = 1;
var output = [];
function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 !== 0) {
      output.push("Fizz");
    } else if (count % 3 !== 0 && count % 5 === 0) {
      output.push("Buzz");
    } else if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
}

fizzBuzz();

// Who is buying lunch Challenge
function whosPaying(names) {
  var randomNumber = Math.floor(Math.random() * names.length);
  console.log(randomNumber);
  return names[randomNumber] + " is going to buy lunch today!";
}
whosPaying(["Angela", "Jack", "Pam", "James", "Lara", "Gaspard"]);

// 99 Bottles of beer Challenge
var count = 99;
var bottleWord;
var action;

function beer() {
  while (count >= 0) {
    if (count === 0) {
      bottleWord = "No more bottles ";
      action = "Go to the store and buy some more, 99 bottles";
    } else if (count === 1) {
      bottleWord = count + " bottle ";
      action = "Take 1 down, pass it arround, no more bottles";
    } else {
      bottleWord = count + " bottles ";
      action = "Take 1 down, pass it arround, " + (count - 1) + " bottles";
    }
    console.log(
      bottleWord +
        "of beer on the wall, " +
        bottleWord +
        "of beer. " +
        action +
        " of beer on the wall."
    );
    count--;
  }
}
beer();

// Fibonaci Sequence Challenge
