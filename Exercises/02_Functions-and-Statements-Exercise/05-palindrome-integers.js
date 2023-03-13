function palindromeIntegers(input) {
    for (let el of input) {
        let palindrome = String(el).split('').reverse().join('');
        if (String(el) === palindrome) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}



palindromeIntegers([123,323,421,121]); // false true false true
palindromeIntegers([32,2,232,1010]); // false true true false





// --------- Second Solution --------- \\
// function palindromeIntegers(numbers) {
//     return numbers.map((num) => Number([...num.toString()].reverse().join('')) === num).join('\n');
// }
//
//
// console.log(palindromeIntegers([123,323,421,121])); // false true false true
// console.log(palindromeIntegers([32,2,232,1010])); // false true true false