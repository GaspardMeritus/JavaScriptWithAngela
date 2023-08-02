alert("Hello World");
var yourName = prompt("What is your name?");
alert(yourName);
typeof yourName;

var myName = " Gaspard";

// Concatenation

var message = "hello";
var userName = "Jane";
alert(message + " " + userName);
var characterLength = userName.length;
userName.slice(0, 1);

var x = 5;
var y;
x++;
x--;
++x;
--x;
x += y;
x += 3;
x *= 3;
x /= 3;

// Functions with no parameters
function getMilk(money) {
  var milkPrice = 1.5;
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  console.log(
    "You can buy " + Math.floor(money / milkPrice) + " bottles of milk"
  );
}

getMilk(50);
// Parameterized functions

function lifeInWeeks(age) {
  var maxAge = 90;
  var yearsLeft = Math.floor(maxAge - age);
  var days = Math.floor(yearsLeft * 365);
  var weeks = Math.floor(yearsLeft * 52);
  var months = Math.floor(yearsLeft * 12);
  console.log(
    "You have " +
      days +
      " days, " +
      weeks +
      " weeks, and " +
      months +
      " months left."
  );
}

lifeInWeeks(56);

// Functions with output
function buyMilk(money) {
  var milkPrice = 1.5;
  console.log(
    "You can buy " + Math.floor(money / milkPrice) + " bottles of milk"
  );
  return money % milkPrice;
}

var change = buyMilk(4);
console.log(change);

// refactoring
function goGetMilk(money, botlleCost) {
  console.log(
    "Buy " + calculateBottles(money, botlleCost) + " bottles of milk"
  );
  return calulateChange(money, botlleCost);
}

function calculateBottles(money, botlleCost) {
  var numberOfBottles = Math.floor(money / botlleCost);
  return numberOfBottles;
}

function calulateChange(money, botlleCost) {
  var change = money % botlleCost;
  return change;
}
console.log("Hello master, here is your " + goGetMilk(4, 1.5) + " change");
