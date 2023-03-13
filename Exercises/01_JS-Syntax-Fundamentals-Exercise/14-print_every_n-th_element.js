// --------- First Solution --------- \\

// function everyNthElement(arr, n) {
//     let result = [];

//     for (let index = 0; index < arr.length; index +=n) {
//         result.push(arr[index]);
        
//     }
//     return result;
// }

// console.log(everyNthElement(['5','20','31','4','20'],2));    // ['5', '31', '20']
// console.log(everyNthElement(['dsa','asd','test','tset'],2)); // ['dsa', 'test']
// console.log(everyNthElement(['1','2','3','4','5'],6));       // ['1']



// --------- Second Solution --------- \\
function everyNthElement(arr, n) {
    let result = [arr.shift()];

    arr.every((element, index) => {
        if((index + 1) % n === 0) {
            result.push(element);
        }
        return true;
    });

    return result;
    // return result.map((element) => element.trim());
    // return `[${result.join(', ')}]`;
}


console.log(everyNthElement(['5','20','31','4','20'],2));    // [ '5', '31', '20' ]
console.log(everyNthElement(['dsa','asd','test','tset'],2)); // [ 'dsa', 'test' ]
console.log(everyNthElement(['1','2','3','4','5'],6));       // [ '1' ]
console.log(everyNthElement(['1','2','3','4','5'],1));       // [ '1', '2', '3', '4', '5' ]