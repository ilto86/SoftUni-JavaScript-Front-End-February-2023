// --------- Solution with If else --------- \\

// function calculator(num1, operator, num2) {
//     let result = 0;
//     if (operator === '+') {
//         result = num1 + num2;
//     } else if (operator === '-') {
//         result = num1 - num2;
//     } else if (operator === '*') {
//         result = num1 * num2;
//     } else {
//         result = num1 / num2;
//     }
//     console.log(result.toFixed(2));
// }

// calculator(5, '+', 10);     // 15.00
// calculator(25.5, '-', 3);   // 22.50




// --------- Solution with Switch case --------- \\

function calculator(num1, operator, num2) {
    let result = 0;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
            result = num1 / num2;
    }
    console.log(result.toFixed(2));
}

calculator(5, '+', 10);     // 15.00
calculator(25.5, '-', 3);   // 22.50