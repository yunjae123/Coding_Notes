// DOM Stands for document object model

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

