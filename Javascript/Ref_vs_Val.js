// Any primitive type of data like strings, numbers, booleans, undefined and null will be PASSED BY VALUE

// Other things like objects, arrays and objects can be PASSED BY REFERENCE 


let a = 10;
let b = "Hi";
let c = a; //c will be assigned the VALUE of 10 independet from a
c = c + 1; // This will ONLY change c to 11. a will remain 10. This is because a is passing 10 as a VALUE

// a = 10
// b = "HI"
// c = 11



let a = 10;
let b = "HI";
let c = [1, 2]; //c is pointing to a memory address. 0x01
let d = c; // Now d is getting passed the MOMERY ADDRESS. This is PASS BY REFERENCE
d.push(3);
// c = [1, 2, 3]
// d = [1, 2, 3]
// This is because both c and d are given the value of the MEMORY ADDRESS, not the actual array itself



let a = 10;
let b = "HI";
let c = [1, 2];
let d = c
c === d // True
c == d // True



let a = 10;
let b = "HI";
let c = [1, 2];
let d = [1, 2];
c === d // False // Because c equals 0x01 and d equals 0x02
c == d // False 
// This is because it's checking the value, which in this case would be the memory location. 


//So when you pass an array to use in a function like so:
let c = [1, 2];

function add(array, element) { //(0x01, 3)
    array.push(element);
}

add(c, 3);
//c will equal [1, 2, 3] because you're pushing to that exact memory address. You're PASSING BY REFERENCE.


//And in this case:
let c = [1, 2];

function add(array, element) { //(0x01, 3)
    array = [element]; //array = 0x02 => [3]
}

add(c, 3);

//c will still equal [1, 2], because inside of the function, array will be set to a new memory location (0x02)

for (var i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}