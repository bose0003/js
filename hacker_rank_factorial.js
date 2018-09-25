function findFactorial(n) {
    if (n => 0) {
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return n * findFactorial(n-1)
        }
    }
    
}

let num = Number(prompt("Enter the number to find factorial of: "));

alert(findFactorial(num));
    