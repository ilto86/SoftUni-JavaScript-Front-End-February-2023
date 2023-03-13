// --------- First Solution --------- \\
function allDigitsEqual (digits) {
    let digitSum = 0;
    let arrDigits = digits.toString().split('').map(Number); // [...digits];
    let sameDigits = true;
    for (let index = 0; index < arrDigits.length - 1; index++) {
        const firstNum = arrDigits[index];
        const secondNum = arrDigits[index + 1];
        if (firstNum !== secondNum) {
            sameDigits = false;
        }

        digitSum += (arrDigits[index]);
    }

    digitSum += arrDigits[arrDigits.length - 1];

    console.log(sameDigits);
    console.log(digitSum);
}

allDigitsEqual(2222222);
allDigitsEqual(1234);



// --------- Second Solution --------- \\

// function allDigitsEqual(digits) {
//     let arrDigits = digits.toString().split('').map(Number);
//     let sameDigits = arrDigits.every(num => num === arrDigits[0]);
//     let digitSum = arrDigits.reduce((sum, num) => sum + num, 0);
//     console.log(sameDigits);
//     console.log(digitSum);
// }

// allDigitsEqual(2222222);
// allDigitsEqual(12345);