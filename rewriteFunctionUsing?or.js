"use strict";
function checkAge(age) {
    // Using ?
    //return (age >= 18)? true: confirm("'Do you have your parents permission to access this page?'"); 

    // using ||
    return (age > 18) || confirm("'Do you have your parents permission to access this page?'");

}