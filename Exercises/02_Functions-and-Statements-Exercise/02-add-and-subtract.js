function subtract(firstNum, secondNum, thirdNum) {
    return sum(firstNum, secondNum) - thirdNum;

    function sum(firstNum, secondNum) {
        return firstNum + secondNum;
    }
}

console.log(subtract(23, 6, 10));    // 19
console.log(subtract(1, 17, 30));    // -12
console.log(subtract(42, 58, 100));  // 0