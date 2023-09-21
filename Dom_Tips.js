// ****************** DOM Stands for document object model

//Displays different info about the dom on to the console.
console.log('document.head/body/title/URL/domain/doctype/forms/links/images')

// getElementById(): This method allows you to select a single element by its id attribute.
var element = document.getElementById("yourElementId");

// Allows you to change the contents of the element that you just selected.
element.textContent = 'Hello World';
element.innerText = 'Goodbye World';
element.innerHTML = '<h3> Hello There </h3>';

// querySelector(): This method allows you to select elements using CSS selectors. It returns the first element that matches the selector. Id's AND Classes can be passed using this method.
var element = document.querySelector("#yourElementId");

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue'; 

// querySelectorAll(): This method allows you to select multiple elements that match a CSS selector. 
// getElementsByClassName(); 
// getElementsByTagName(); These functions exist, but try to use querySelectorAll() instead.

var elements = document.querySelectorAll(".yourClassName");

var odd = document.querySelectorAll('li:nth-child(odd)');
for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4'; 
}

// How to change the element's property using CSS. Make sure to use camelCase for CSS selectors.
elements.style.borderBottom = 'solid 3px #000';



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
var newDiv = document.createElement('div');
newDiv.classname = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Hello Div');
//-----> 
<div class = 'hello' id = 'hello1' title = 'Hello Div'></div>

// Create text node
newDivText = document.createTextNode('Hello World');
// Append text to div
newDiv.appendChild(newDivText);
//----->
<div class = 'hello' id = 'hello1' title = 'Hello Div'>Hello World</div>

// Adding the newDiv into the DOM
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);


// ****************** EVENT LISTENERS
var button = document.getElementById('button').addEventListener('click', buttonClick);

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
var button = document.getElementById('button');

// EVENT TYPE: Click
button.addEventListener('click', runEvent);

// EVENT TYPE: DOUBLE CLICK
button.addEventListener('dblclick', runEvent);

button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);

function runEvent(e) {
    console.log("EVENT TYPE: " + e.type);
}


// ****************** EVENTS WITHOUT BUTTONS
var box = document.getElementById('box');

// As soon as the mous enters an area, the event listener triggers
box.addEventListener('mouseenter', runEvent1);
box.addEventListener('mouseleave', runEvent1);

function runEvent1(e) {
    console.log('EVENT TYPE: ' + e.type);
}