// 1. Click Events

var numberOfButtons = document.querySelectorAll(".drum");

// 2. For Statement
for (let index = 0; index < numberOfButtons.length; index++) {
  numberOfButtons[index].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    // 3. Switch Case Statement
    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;

      case "k":
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;

      case "l":
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;

      default:
        console.log(buttonInnerHTML);
        break;
    }
  });
}

function handleClick2() {
  alert("I got clicked");
}

// 3. ForEach Statements
numberOfButtons.forEach((element) => {
  element.addEventListener("click", handleClick2);
});

// 4. While Statements
var count;
while (count < numberOfButtons.length) {
  element.addEventListener("click", handleClick2);
}

// 5. Higher Order functions: functions that can take other functions as inputs

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

calculator(3, 4, add);
calculator(3, 4, subtract);
calculator(3, 4, multiply);
calculator(3, 4, divide);

// 6. JavaScript Objects / Constructor Functions or Factory

var bellBoy1 = {
  theName: "Jane",
  age: 19,
  hasWorkPermit: true,
  languages: ["english", "french", "spanish"],
};
console.log(bellBoy1.age);

var houseKeeper1 = {
  theName: "Jane",
  yearsOFExperience: 12,
  cleaningRepertoire: ["bathroom", "lobby", "bedroom"],
};
console.log(houseKeeper1.theName);

// Creating objects easily with constructor
function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}
var bellBoy2 = new BellBoy("Billy", 20, false, ["english", "french"]);

function HouseKeeper(name, yearsOFExperience, cleaningRepertoire) {
  this.name = name;
  this.yearsOFExperience = yearsOFExperience;
  this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper2 = new HouseKeeper("Lynn", 4, ["bathroom", "lobby"]);

// 7. Methods: is a function associate to an object

var bellBoy3 = {
  theName: "Jane",
  age: 19,
  hasWorkPermit: true,
  languages: ["english", "french", "spanish"],
  moveSuitecase: function () {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
  },
};
function BellBoy2(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitecase = function () {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
  };
}

function HouseKeeper2(name, yearsOFExperience, cleaningRepertoire) {
  this.name = name;
  this.yearsOFExperience = yearsOFExperience;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function () {
    alert("Cleaning in progress...");
  };
}

// 8. Call Back functions: functions that get passed into a higher order function as an input


// 9. Keypress Events
