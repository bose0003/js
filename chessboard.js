/*

Chapter 2: Program Structure
The Eloquent JavaScript

Chessboard
Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. 
The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, 
define a binding size = 8 and change the program so that it works for any size, 
outputting a grid of the given width and height.
*/

let whiteTile = " #";
let blackTile = "# ";

let size = Number(prompt("Enter numer for board"));

let board_size = Math.round(size / 2);

for (let i = 0; i < size; i++) {
    if (i % 2 == 0) {
        console.log(whiteTile.repeat(board_size));
    } else {
        console.log(blackTile.repeat(board_size));
    }
}