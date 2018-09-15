"use strict";

// let userName = prompt("Who are you?");
// alert(userName);
// if (userName = '') {
//     alert("Cancelled");
// } else if (userName == null) {
//     alert("Cancelled");
// } else if (userName == 'Admin') {
//     let pass = prompt("Password?");
//     if (pass == "") {
//         alert("Cancelled");
//     } else if (pass == null) {
//         alert("Cancelled");
//     } else if (pass == 'TheMaster') {
//         alert("Wlecome");
//     } else {
//         alert("Wrong password");
//     }
// } else {
//     alert("I don't know you.");
// }

let userName = prompt("Who's there?", '');

if (userName == 'Admin') {

  let pass = prompt('Password?', '');

  if (pass == 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass == '' || pass == null) {
    alert( 'Canceled.' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName == '' || userName == null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}   