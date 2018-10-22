/*

Chapter 4: Data Structures, Objects and Arrays
The Eloquent JavaScript

Reversing an array
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, 
takes an array as argument and produces a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, does what the reverse method does: 
it modifies the array given as argument by reversing its elements. 
Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, 
which variant do you expect to be useful in more situations? Which one runs faster?

*/

function reverseArray(arrayToReverse) {
    let reversedArray = [];
    let arrayLength = arrayToReverse.length - 1;
    for (let i = 0; i < arrayToReverse.length; i++) {
        reversedArray.push(arrayToReverse[arrayLength]);
        arrayLength = arrayLength - 1;
    }
    return reversedArray;
}

function reverseArrayInPlace(arrayToReverse) {
    let halfArrayLength = Math.floor((arrayToReverse.length -1) / 2);
    for (let i = 0; i <= halfArrayLength; i++) {
        let temp1 = arrayToReverse[i];
        let temp2 = arrayToReverse[(arrayToReverse.length - 1) - i];

        arrayToReverse[i] = temp2;
        arrayToReverse[(arrayToReverse.length - 1) - i] = temp1;
    }

    return arrayToReverse;
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]