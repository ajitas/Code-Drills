// Long Division

// This is the divide function. It takes in a dividend and a divisor 
// and returns the quotient from dividing the dividend by the divisor
function divide (dividend, divisor) {
// -------------------- Your Code Here --------------------
i=0;
while(divisor*i<=dividend)
    i++;

return i-1;




// --------------------- End Code Area --------------------
}

// Exporting the divide function for use in the test file.
module.exports = divide;