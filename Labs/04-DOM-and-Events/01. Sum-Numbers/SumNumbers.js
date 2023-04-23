function calc() {
    const firstInputElement = document.getElementById('num1');
    const secondInputElement = document.getElementById('num2');
    const sumInputElement = document.getElementById('sum');
    console.log(typeof firstInputElement);          // object
    console.log(typeof secondInputElement.value);   // string

    let firstNum = Number(firstInputElement.value);
    let secondNum = Number(secondInputElement.value);
    let sumNums = firstNum + secondNum;
    console.log(typeof sumNums); // number
    console.log(sumNums);        // if firstNum is 5 and secondNum is 5 sumNum give 10

    sumInputElement.value = sumNums;
}
