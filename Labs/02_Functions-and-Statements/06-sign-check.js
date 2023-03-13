function signCheck(numOne, numTwo, numThree) {
    if (numOne * numTwo * numThree < 0) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}

// Test the function with some examples
signCheck(5, 12, -15); // Negative
signCheck(-6, -12, 14); // Positive
signCheck(-1, -2, -3); // Negative
