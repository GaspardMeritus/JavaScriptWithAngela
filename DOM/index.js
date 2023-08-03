// querySelector() looks inside the entire document
// always returns only one element, not an array
// In the parenthesis comes a selector (like css selector), it can be an element, a class or an id. We can also combine selectors
document.querySelector("h1").innerHTML = "Good Bye";
document.querySelector("#title").innerHTML = "Good Bye";
document.querySelector(".btn");

document.firstElementChild; // returns the html tag with (his children)
document.firstElementChild.firstElementChild; // returns the first child (the HEAD element) of the html tag (with his children)
document.firstElementChild.lastElementChild; // returns the last child (the BODY element) of the html tag (with his children)
var heading = document.firstElementChild.lastElementChild.firstElementChild; // returns the first child of the BODY element
heading.innerHTML = "Hello Gaspard";
heading.style.color = "red";
document.querySelector("input").click();
var myName =
  document.firstElementChild.lastElementChild.querySelector(
    "ul"
  ).lastElementChild;
myName.innerHTML = "Gaspard";

// getElementsByTagName(): looks through the webpage and searches for the elements with a particular tag name and fetch them in an array
// it always returns an array
document.getElementsByTagName();
document.getElementsByTagName("li").style.color = "purple"; // won't work because we received an array as a result, we cannot work on it.
document.getElementsByTagName("li")[2].style.color = "purple"; // We must select an element to work on
document.getElementsByTagName("li").length;

// getElementsByClassName(): selects elements based on the name of the class
// it always returns an array
document.getElementsByClassName();
document.getElementsByClassName("item").style.color = "purple"; // won't work because we received an array as a result, we cannot work on it.
document.getElementsByClassName("item")[2].style.color = "purple"; // We must select an element to work on
document.getElementsByClassName("item").length;

// getElementById()
// always returns only one element, not an array
document.getElementById();
document.getElementById("title").style.color = "purple"; // // will work because we received only one element, not an array
document.getElementById("title").innerHTML = "Good bye";
