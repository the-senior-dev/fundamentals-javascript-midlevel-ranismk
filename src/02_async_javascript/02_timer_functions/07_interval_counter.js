/*
Create a function called startCounter that takes an integer n and a delay in milliseconds. 
The function should print integers starting from 1 up to n at each delay interval.

Requirements:
The function should use setInterval to print integers.
If n is less than 1, the function should immediately print "Invalid input".
*/
function startCounter(n, delay) {
    let i = 1;
    if(n < 1) {
        console.log("Invalid input")
    }
    let timer = setInterval(() => {
        console.log(i);
        i++;
        if(i > n) {
            clearInterval(timer);
        }
    },delay)
}

module.exports = startCounter;
