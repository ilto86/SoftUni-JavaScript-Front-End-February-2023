// --------- Solution with If else --------- \\

// function calculator(num1, num2, operator) {
//     if (operator === 'add') {
//         return num1 + num2;
//     } else if (operator === 'subtract') {
//         return num1 - num2;
//     } else if (operator === 'multiply') {
//         return num1 * num2;
//     } else {
//         return num1 / num2;
//     }
// }

// console.log(calculator(5, 5, 'multiply'));      // 25
// console.log(calculator(40, 8, 'divide'));       // 5
// console.log(calculator(12, 19, 'add'));         // 31
// console.log(calculator(50, 13, 'subtract'));    // 37




// --------- Solution with Switch case --------- \\

// function calculator(num1, num2, operators) {
//     switch(operators) {
//         case 'add':
//             return num1 + num2;
//             break;
//         case 'subtract':
//             return num1 - num2;
//             break;
//         case 'multiply':
//             return num1 * num2;
//             break;
//         default:
//             return num1 / num2;
//     }
// }

// calculator(5, 5, 'multiply');   // 25
// calculator(40, 8, 'divide');    // 5
// calculator(12, 19, 'add');       // 31
// calculator(50, 13, 'subtract');    // 37




// --------- Solution with JavaScript-Objektliteral-Notation --------- \\
function simplyCalculator(numOne, numTwo, operator) {
    return {
        'multiply': numOne * numTwo,
        'divide': numOne / numTwo,
        'add': numOne + numTwo,
        'subtract': numOne - numTwo
    }[operator];
}


console.log(simplyCalculator(5, 5, 'multiply'));    // 25
console.log(simplyCalculator(40, 8, 'divide'));     // 5
console.log(simplyCalculator(12, 19, 'add'));       // 31
console.log(simplyCalculator(50, 13, 'subtract'));  // 37