//****************** ARROW FUNCTIONS 

// Using Arrow functions
const myFunc = () => {
    const myVar = "value";
    return myVar;
}

// Using arrow functions with only a return statement
const myFunc1 = () => "value";

// Using arrow functions passing parameters
const multiplier = (item, multi) => item * multi;

// Arrow functions with default parameters
const greeting = (name = "Anonymous") => "Hello " + name;

// Using rest parameters
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // "You have passed 3 arguments."
console.log(howMany("string", null, [1, 2, 3], { })); // "You have passed 4 arguments."







// Using the spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1]; 
console.log(arr2); // Outputs [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY' ]








// Object destructuring ************************
// Instead of writing code like this;
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
// You can use ES6 destructuring to clean it up like this;
const { name1, age1 } = user;
