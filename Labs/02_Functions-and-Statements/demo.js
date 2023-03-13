// --------- First demo --------- \\

// printStars(12);

// function printStars(count) {
//     console.log('*'.repeat(count));
// }

// printStars(6);




// --------- Second demo --------- \\

// this don't work
// console.log(printStars(5));


// const printStars = function(count) {
//     return '*'.repeat(count);
// };

// // this work
// console.log(printStars(5));




// --------- Third demo --------- \\


// const printStars = function(count) {
//     return '*'.repeat(count);
// };

// for (let index = 0; index < 20; index++) {
//     console.log(`----- ${index + 1} -----`);

//     console.log(printStars(15));
// }





// --------- Fourth demo >>> Invocation from another function <<< --------- \\

// printBody();

// function printHeader() {
//     console.log('---- Page Header');
// }

// function printContent() {
//     console.log('---- Page Content');
// }

// function printFooter() {
//     console.log('---- Page Footer');
// }

// function printBody() {
//     printHeader();
//     printContent();
//     printFooter();
// }


// printBody();





// --------- Fifth demo >>> Self-invocation function(recursion) <<< --------- \\

// countUp(10);

// function countUp(x) {
//     console.log(x);
    
//     if (x < 20) { 
//         countUp(x + 1);
//     }
// }



// function printNumbers(number) {
//     console.log(number);
    
//     if (number > 0) { 
//         printNumbers(number - 1);
//     }
// }

// printNumbers(10);




// --------- sixth demo >>> DOM element from softUni Site HTML invoke <<< --------- \\

// document.getElementsByClassName('upcoming-open-courses-title course-title')[1].textContent = 'Здравей';




// --------- seventh demo >>> Multiply <<< --------- \\

// function multiply(a, b) {
//     if ((typeof(a) !== 'number') && (typeof(b) !== 'number')) {
//         console.log(`Type of a(${a}) is: ${typeof a}`);
//         console.log(`Type of b(${b}) is: ${typeof a}`);
//         console.log(Number(a[0]) * Number(a[1]));
//     } else {
//         console.log(`Type of a(${a}) is: ${typeof a}`);
//         console.log(`Type of b(${b}) is: ${typeof a}`);
//         console.log(a*b);
//     }
// }

// multiply(5, 7);
// multiply([2, 5]);


// --------- eighth demo >>> Multiply <<< --------- \\

// function multiplyNumbers(...params) {
//     console.log(arguments);
//     console.log(`arguments type is ${typeof(arguments)}`);
//     let sum = 1;
//     for (let i = 0; i < params.length; i++) {
//         sum *= params[i];
//     }
//     return sum;
// }

// console.log(multiplyNumbers(1,2,3,4,5));
// console.log(multiplyNumbers(6,7,8,9,10));


function multiplyNumbers() {
    let params = Object.values(arguments);
    let sum = 1;
    for (let i = 0; i < params.length; i++) {
        sum *= params[i];
    }
    return sum;
}

console.log(multiplyNumbers(1,2,3,4,5));
console.log(multiplyNumbers(6,7,8,9,10));


// --------- ninth demo >>> Print Name <<< --------- \\

// function printName(nameArr) {
//     console.log(nameArr[0] + ' ' + nameArr[1]);
// }

// printName(['John', 'Smith']);