"use strict";

let number = prompt("Enter a number greater than 100");

while (number <= 100) {
    number = prompt("Number not valid, please try again");
    if (number == undefined) {
        break;
    }
}