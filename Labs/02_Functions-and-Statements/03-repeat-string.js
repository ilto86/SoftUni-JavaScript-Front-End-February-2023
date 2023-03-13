// --------- First Solution without Repeat  --------- \\

// function repeatString(string, count) {
//     let result = '';
//     for (let i = 0; i < count; i++) {
//     result += string;
//     }
//     return result;
// }

// console.log(repeatString('abc', 3));
// console.log(repeatString('String', 2));



// --------- Second Solution with Repeat  --------- \\

function repeatString(string, count) {
    for (let i = 0; i < count; i++) {
    return string.repeat(count);
    }
}

console.log(repeatString('abc', 3));
console.log(repeatString('String', 2));