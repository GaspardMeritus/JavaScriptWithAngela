var inputName = prompt("enter your name");
var tweet = prompt("enter your tweet");

// CONVERT FIRST LETTER OF NAME TO UPPERCASE
var firstLetter = input.slice(0, 1).toUpperCase();
var otherLetters = input.slice(1, input.length).toLowerCase();
alert(firstLetter + otherLetters);

//SHOW THE NUMBER OF CHARACTERS YOU HAVE WRITTEN AND HOW MUCH YOU HAVE LEFT
alert(
  "you have written " +
    tweet.length +
    " characters, you have " +
    (140 - tweet.length) +
    " characters left"
);

// SHOW ONLY 140 CHARACTERS IN THE TWEET AND CUT THE REST
alert(paragraph.slice(0, 140));

// DOG AGE TO HUMAN AGE FORMULA

var dogAge = 2;
var humanAge = (dogAge - 2) * 4 + 21;
alert("Your dog is " + humanAge + " in human age");

// Karel the robot challenge
function main() {
  move4Spaces();
  move4Spaces();
  move4Spaces();
  move4Spaces();
}

function move4Spaces() {
  move();
  move();
  move();
  move();
  turnLeft();
}

// Karel the robot puts beepers challenge
function main2() {
  diagonalMoveAndBeeper();
  diagonalMoveAndBeeper();
  diagonalMoveAndBeeper();
  diagonalMoveAndBeeper();
  diagonalMoveAndBeeper();
}

function diagonalMoveAndBeeper() {
  move();
  turnLeft();
  move();
  putBeeper();
  turnRight();
}

// Karel placing beepers in the whole Chess Board challenge

function PlacingBeepersInChessBoard() {
  putBeeper();
  move4SpacesPlacingBeepers();
  move4SpacesPlacingBeepers();
  move4SpacesPlacingBeepers();

  move2SpacesPlacingBeepers();
  turnHalfCirclePlacingBeepers();

  move3SpacesPlacingBeepers();
  move3SpacesPlacingBeepers();
  move3SpacesPlacingBeepers();

  move();
  turnHalfCirclePlacingBeepers();
}

function turnHalfCirclePlacingBeepers() {
  turnLeft();
  move();
  putBeeper();
}

function move2SpacesPlacingBeepers() {
  move();
  move();
  putBeeper();
  move();
}

function move3SpacesPlacingBeepers() {
  move();
  move();
  turnLeft();
  putBeeper();
}

function move4SpacesPlacingBeepers() {
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  turnLeft();
}

// Create a BMI Calculator

function bmiCalculator(weight, height) {
  //var bmi = Math.floor(weight / (height * height));
  var bmi = weight / Math.pow(height, 2);
  return Math.round(bmi);
}
