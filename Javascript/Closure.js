// When you have a function defined inside of another function, the function on the inside has access to variables and scope of the outer functions. This is true even after the outside function finishes executing, and the variables are no longer accessable from outside the function.

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');
//OUTPUT
//Outer Variable: outside
//Inner Variable: inside