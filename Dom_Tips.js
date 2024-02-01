// ****************** DOM Stands for document object model

//Displays different info about the dom on to the console.
console.log("document.head/body/title/URL/domain/doctype/forms/links/images");

// getElementById(): This method allows you to select a single element by its id attribute.
var element = document.getElementById("yourElementId");

// Allows you to change the contents of the element that you just selected.
element.textContent = "Hello World";
element.innerText = "Goodbye World";
element.innerHTML = "<h3> Hello There </h3>";

// querySelector(): This method allows you to select elements using CSS selectors. It returns the first element that matches the selector. Id's AND Classes can be passed using this method.
var element = document.querySelector("#yourElementId");

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "blue";

// querySelectorAll(): This method allows you to select multiple elements that match a CSS selector.
// getElementsByClassName();
// getElementsByTagName(); These functions exist, but try to use querySelectorAll() instead.

var elements = document.querySelectorAll(".yourClassName");

var odd = document.querySelectorAll("li:nth-child(odd)");
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f4f4f4";
}

// How to change the element's property using CSS. Make sure to use camelCase for CSS selectors.
elements.style.borderBottom = "solid 3px #000";

// ****************** Traversing the DOM
// parentNode property allows you to access the parent node of an element in the DOM.
// there is also parentElement();
var parent = element.parentNode;

// children property returns a collection of only the child elements (HTML elements) of the current element.
// Instead, use the following methods to ignore the text nodes. These are preferred!
var firstElementChild = element.firstElementChild;
var lastElementChild = element.firstElementChild;
var childElements = element.children;
var nextElement = element.nextElementSibling;
var previousElement = element.previousElementSibling;

// childNodes property gives you a collection of all child nodes (including text nodes, element nodes, etc.) of an element.
// IT INCLUDES ALL TEXT NODES TOO. Do not use these if you can.
var children = element.childNodes;
var firstChild = element.firstChild;
var lastChild = element.lastChild;
var nextSibling = element.nextSibling;
var previousSibling = element.previousSibling;

// closest method allows you to find the closest ancestor element that matches a specified CSS selector.
var closestElement = element.closest(".className");

// ****************** CREATING THINGS ON THE DOM
// createElement
var newDiv = document.createElement("div");
newDiv.classname = "hello";
newDiv.id = "hello1";
newDiv.setAttribute("title", "Hello Div");
//----->
<div class="hello" id="hello1" title="Hello Div"></div>;

// Create text node
newDivText = document.createTextNode("Hello World");
// Append text to div
newDiv.appendChild(newDivText);
//----->
<div class="hello" id="hello1" title="Hello Div">
  Hello World
</div>;

// Adding the newDiv into the DOM
var h1 = document.querySelector("header h1");
container.insertBefore(newDiv, h1);

// ****************** EVENT LISTENERS
var button = document
  .getElementById("button")
  .addEventListener("click", buttonClick);

function buttonClick(e) {
  console.log(e.target); // Would output the element the event was fired from
  console.log(e.type); // Would output 'click' if you used your mouse
  console.log(e.clientX); // Would output horizontal position of the mouse FROM THE EDGE OF THE WINDOW
  console.log(e.clientY); // Would output vertical  position of the mouse FROM THE EDGE OF THE WINDOW
  console.log(e.offsetX); // Would output vertical  position of the mouse from the ELEMENT
  console.log(e.offsetY); // Would output vertical  position of the mouse from the ELEMENT
  console.log(e.altKey); // True or false for pressing alt key
  console.log(e.ctrlKey); // True or false for pressing control key
  console.log(e.shiftKey); // True or false for pressing shift key
}

//
var button = document.getElementById("button");

// EVENT TYPE: Click
button.addEventListener("click", runEvent);

// EVENT TYPE: DOUBLE CLICK
button.addEventListener("dblclick", runEvent);

button.addEventListener("mousedown", runEvent);
button.addEventListener("mouseup", runEvent);

function runEvent(e) {
  console.log("EVENT TYPE: " + e.type);
}

// ****************** EVENTS WITHOUT BUTTONS
var box = document.getElementById("box");

// As soon as the mouse enters an area, the event listener triggers
box.addEventListener("mouseenter", runEvent1);
box.addEventListener("mouseleave", runEvent1);

// When it enters or leaves the content within the element, the event listener triggers
box.addEventListener("mouseover", runEvent1);
box.addEventListener("mouseout", runEvent1);

// Whenever the mouse MOVES at all
box.addEventListener("mousemove", runEvent1);

function runEvent1(e) {
  console.log("EVENT TYPE: " + e.type);

  // This will display a constant location of the mouse
  output.innerHTML =
    "<h3>MouseX: " + e.offsetX + "</h3><h3>Mouse Y: " + e.offsetY + "</h3>";

  // This will constantly change the color of the box
  box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";
}

// ****************** EVENTS ON FORMS
var itemInput = document.querySelector('input[type = "text"]');
var form = document.querySelector("form");

// Everytime a key is pressed on the keyboard, the event listener triggers
itemInput.addEventListener("keydown", runEvent2);
itemInput.addEventListener("keyup", runEvent2);
itemInput.addEventListener("keypress", runEvent2);

// When click INTO and OUT of a form, the event listener triggers
itemInput.addEventListener("focus", runEvent2);
itemInput.addEventListener("blur", runEvent2);

// When you cut or paste a text, the event listner triggers
itemInput.addEventListener("cut", runEvent2);
itemInput.addEventListener("paste", runEvent2);

// Whenver you pretty much do anything with the form input, it will trigger
itemInput.addEventListener("input", runEvent2);

function runEvent2(e) {
  console.log("EVENT TYPE: " + e.type);

  // This prints in realtime the accumulation of the values you typed in
  console.log(e.target.value);
  // This prints your accumulated values onto a div with the ID of output
  document.getElementById("output").innerHTML =
    "<h3>" + e.target.value + "</h3>";
}

// This will trigger whenever the user changes their options from the dropdown menu
var select = document.querySelector("select");
select.addEventListener("change", runEvent3);

// Whenver you pretty much do anything with the select input, it will trigger
select.addEventListener("input", runEvent3);

function runEvent3(e) {
  console.log("EVENT TYPE: " + e.type);

  // You can also get the value
  console.log(e.target.value);
}

// This prevents the form from submitting, therefore not letting the page refresh or update. Useful for asnychronous submissions
form.addEventListener("select", runEvent4);

function runEvent4(e) {
  e.preventDefault();
  console.log("EVENT TYPE: " + e.type);
}
