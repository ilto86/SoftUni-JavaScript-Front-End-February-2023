function factorialDivision(a, b) {
    let factorialDivisionSum = 0;
    if (a >= 0 && b >= 0 && Number.isInteger(a) && Number.isInteger(b)) {
        factorialDivisionSum = factorial(a) / factorial(b);
        return factorialDivisionSum.toFixed(2);
    } else {
        return "Invalid input. Please enter positive integers.";
    }
    
    function factorial(n) {
        if (n == 0 || n == 1) {
            return 1;
        } else {
        return n * factorial(n-1);
        }
    }
}

  console.log(factorialDivision(5,2)); // Output: 60.00
  console.log(factorialDivision(6,2)); // Output: 360.00
  console.log(factorialDivision(5,3)); // Output: 20.00
  console.log(factorialDivision(4,2)); // Output: 12.00
  console.log(factorialDivision(3,-1)); // Output: Invalid input. Please enter positive integers.