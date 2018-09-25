/*
Chapter 3: Functions
The Eloquent JavaScript

Recursion
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

*/

function isEven(number) {
    //console.log(number);
  	if (number == 0) {
      	//console.log("true");
        return true;
    } else if (number == 1) {
      	//console.log(number);
        return false;
    } else {
      	if (number < 0) {
          number = -(number);
          return isEven(number);
        }
        else if (number != 1 || number != 0) {
            number = number - 2;
            return isEven(number);
        }
    }
}

let val = isEven(50);
console.log(val);
// → true
console.log(isEven(75));
// → false
console.log(isEven(-4));
// → true