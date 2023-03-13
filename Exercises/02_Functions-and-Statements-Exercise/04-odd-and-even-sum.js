function oddAndEvenSum(num) {
    let evenSum = 0;
    let oddSum = 0;
    let numbers = num.toString().split('');

    for (const num of numbers) {
        if (num % 2 === 0) {
            evenSum += Number(num);
        } else {
            oddSum += +num;
        }
    }
    let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    console.log(result);
}

oddAndEvenSum(1000435); // Odd sum = 9, Even sum = 4
oddAndEvenSum(3495892137259234); // Odd sum = 54, Even sum = 22