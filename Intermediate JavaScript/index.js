// the random number generated is a 16 decimal place number, it can be any number between 0 and 0.9999999999999999, will never reach 1
var n = Math.random();
console.log(n);
n = n * 6; // will give numbers from 0 to 5.9999, will never reach 6
console.log(n);
n = Math.floor(n) + 1; // simulating dice roll haveing 6 possibilities
console.log(n);

// Control flow with IfElse
if (condition) {
} else {
}

// Control flow with While Loop

while (condition) {
  // code
}

// Control flow with For Loop
for (let index = 0; index < array.length; index++) {
  // code
}

// Arrays
var myArray = [];
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Gaspard"];
var countGuest = guestList.length;

var searchGuest = guestList.includes("Jack"); // includes(): returns a boolean

var input = prompt("what is your name ?");
var doestExist = guestList.includes(input);
if (doestExist) {
  alert("Welcome " + input);
} else {
  alert("Sorry, maybe next time");
}

guestList.push("Mateo"); // Adds a new item into an array
guestList.pop; // Removes the last item from an array
