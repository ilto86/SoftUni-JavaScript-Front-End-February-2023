function numberModification(number) {
    let strDigits = number.toString();
    let sum = 0;
    let count = 0;

    for (let digit of strDigits) {
        let num = Number(digit);
        sum += num;
        count++;
    }
    let average = sum / count;

    while (average < 5) {
        strDigits += '9';
        sum += 9;
        count++;
        average = sum / count;
    }
    return Number(strDigits);
}

console.log(numberModification(101)); // 1019999
console.log(numberModification(5835)); // 5835