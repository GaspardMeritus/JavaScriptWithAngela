// 14.	SELECTING HTML ELEMENT WITH JAVASCRIPT

// querySelector() looks for the element that matches the selector inside the parenthesis
// Always returns one element. If selector matches more than one object it will return the first one
// In the parenthesis comes a selector (like css selector, it can be an element, a class or an id)
// We can combine selectors in order to select a more specific element like in CSS
document.querySelector("h1").innerHTML = "Good Bye";
document.querySelector("#title").innerHTML = "Good Bye";
document.querySelector(".btn");
document.querySelector("li a"); // select a link that is inside of a list item
document.querySelector("li.item"); // select the list item that contains the class "item"
document.querySelector("#list a"); // select a link that is inside of an element whose id is "list"

// querySelectorAll()[]: works similar to querySelector(), but if the selector matches more than one object it will return them all
// Always returns an array
document.querySelectorAll("h1")[2];

// firstElementChild: returns the first child (including his children) of a given element
document.firstElementChild; // returns the html tag (first child of document) including his children
document.firstElementChild.firstElementChild; // returns the first child (the HEAD element), including his children, of the html tag
document.firstElementChild.lastElementChild; // returns the last child (the BODY element), including his children, of the html tag
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
// Always returns an array
document.getElementsByTagName();
document.getElementsByTagName("li").style.color = "purple"; // won't work because we received an array as a result, we cannot work on it.
document.getElementsByTagName("li")[2].style.color = "purple"; // We must select an element to work on
document.getElementsByTagName("li").length;

// getElementsByClassName(): selects elements based on the name of the class.
// Always returns an array
document.getElementsByClassName();
document.getElementsByClassName("item").style.color = "purple"; // won't work because we received an array as a result, we cannot work on it.
document.getElementsByClassName("item")[2].style.color = "purple"; // We must select an element to work on
document.getElementsByClassName("item").length;

// getElementById():
// Always returns one element
document.getElementById();
document.getElementById("title").style.color = "purple"; // // will work because we received only one element, not an array
document.getElementById("title").innerHTML = "Good bye";

// 15.	CHANGING THE CSS STYLE USING JAVASCRIPT

document.querySelector("h1").style.fontSize = "10rem";
document.querySelector("h1").style.backgroundColor = "yellow";

// 17.	ClassList PROPERTY

// classList: gives a list of the classes that are currently attached to a given element
document.querySelector("button").classList;
document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
// if the class is already applied remove it, and if it's not applied apply it
document.querySelector("button").classList.toggle("invisible");

// 18.	TEXT MANIPULATION AND TEXT CONTENT PROPERTY

// innerHTML: returns all of the HTML that is in between the element tags, including children tags there could be around the text content
document.getElementById("title").innerHTML = "Good bye"; // innerHTML:: allows us to add html code on the flag
document.getElementById("title").innerHTML = "<em>Good bye</em>";
// textContent: only returns the text content, if there are children tags around it they will get ignored
document.getElementById("title").textContent = "Good bye";

// 19.	MANIPULATE HTML ELEMENT ATTRIBUTES

// attributes: gives a list of the attributes that are currently attached to a given element
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href"); // retrieve the current value of a given attribute
document.querySelector("a").getAttribute("href", "https://www.bing.com"); // set or change the current value of a given attribute
