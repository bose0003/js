// Avoid writing functions and variables in global scope
// Using the var function, we can declare variables that are global in scope

/*
var hello = "hello world"
*/

// Functions are just another datatypes in JS

// We can reference to a function and store that reference in a variable.


let x = function() {
    console.log("This is a function reference");
}


// We can invoke a function stored in a variable by calling 
// the variable with the method invocation operator

x();

// With this, we can create a function inside a function and assign the inner 
// function to the outer function and call the variable

let a = function() {
    return function () {
        return "This is a function inside a function" 
    }
}

console.log(a()())