function sumDigits(num) {
    let arrNum = num.toString().split('');
    let result = 0;
    for (let index = 0; index < arrNum.length; index++) {
        let digit = Number(arrNum[index]);
        result += digit;
    }
    return result;
}


console.log(sumDigits(245678));
console.log(sumDigits(97561));
console.log(sumDigits(543));