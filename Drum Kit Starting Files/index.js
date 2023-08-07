var numberOfButtons = document.querySelectorAll(".drum");

for (let index = 0; index < numberOfButtons.length; index++) {
  numberOfButtons[index].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML; // this: the word this gives the identity of the button that triggered the event
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
// We can pass a parameter into the callback function to get information about the element that triggered event
document.addEventListener("keypress", function (event) {
  var key = event.key;
  makeSound(key);
  buttonAnimation(key);
});

function makeSound(key) {
  switch (key) {
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
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
