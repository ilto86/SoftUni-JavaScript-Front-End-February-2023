function subtract() {
    const firstInputElement = document.getElementById('firstNumber');
    const secondInputElement = document.getElementById('secondNumber');
    const resultDivElement = document.getElementById('result');

    let firstNum = Number(firstInputElement.value);
    let secondNum = Number(secondInputElement.value);

    let sumNums = firstNum - secondNum;
    resultDivElement.textContent = sumNums;
}