function printSum(startNum, endNum) {
    let arrNumbers = [];
    let sumOfNumbers = 0;

    for (let i = startNum; i <= endNum; i++) {
        arrNumbers.push(i);
        sumOfNumbers += i;
    }

    console.log(arrNumbers.join(' '))
    console.log(`Sum: ${sumOfNumbers}`)
}

printSum(5, 10)
printSum(0, 26)
printSum(50, 60)