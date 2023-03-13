function mathOperations (firstNum, secondNum, operator) {
    let result;
    switch (operator) {
        case "+": result = firstNum + secondNum; break; 
        case "-": result = firstNum - secondNum; break; 
        case "/": result = firstNum / secondNum; break; 
        case "*": result = firstNum * secondNum; break; 
        case "%": result = firstNum % secondNum; break; 
        case "**": result = firstNum ** secondNum; break; 
    }
console.log(result)
}

mathOperations(5, 6, '+')
mathOperations(5.5, 3, '-')
mathOperations(6, 5, '/')
mathOperations(3, 5.5, '*')
mathOperations(24, 7, '%')
mathOperations(2, 8, '**')