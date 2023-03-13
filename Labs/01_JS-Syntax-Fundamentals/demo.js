// console.log('hello world');
// console.log('hello world');

// let a = 5;
// let b = 3;

// if (b < a) {
//     console.log(a);
// } 
// else {
//    console.log(a + b);
// }

// function additionSolve (num1, num2) {
//     console.log(num1 + num2);
//    }

//    additionSolve(10, 8);



// function solve (name, grade) {
//     console.log('The name is: ' + name + ', grade: ' + grade);          // The name is: Peter, grade: 3.555
//     console.log(`The name is: ${name}, grade: ${grade.toFixed(2)}`);    // The name is: Peter, grade: 3.56
//     console.log(grade.toFixed(2));            // 3.56
    
//     console.log(typeof grade)                // Typeof grade is: Number
//     console.log(typeof grade.toFixed(2))    // Typeof grade.toFixed is: String
// }

// solve('Peter', 3.555);      // The name is: Peter, grade: 3.555





// ==================  Comparison Operators  ================== //


//    console.log(1 == '1');   // true    Check only Value and give True
//    console.log(1 === '1');  // false   Check both Value and Type and give False

//    console.log(3 != '3');   // false   Check only Value and give False
//    console.log(3 !== '3');  // true    Check both Value and Type and give True

//    console.log(5 < 5.5);    // true
//    console.log(5 <= 4);     // false

//    console.log(2 > 1.5);    // true
//    console.log(2 >= 2);     // true

//    console.log((5 > 7) ? 4 : 10); // 10




// ==================  Conditional Statement if else if else  ================== //



// let a = 5;

// if (a > 10)
//     console.log("Bigger than 10");
// else if (a < 10)
//     console.log("Less than 10");
// else
//     console.log("Equal to 10");




// ==================  Conditional Switch-case Statement  ================== //


// let dayOfWeek = "Monday";

// switch (dayOfWeek) {
//     case "Monday":
//         console.log("Go to work!");
//         break; 
//     case "Tuesday":
//         console.log("Go to work!");
//         break; 
//     case "Wednesday":
//         console.log("Go to work!");
//         break; 
//     case "Thursday":
//         console.log("Go to work!");
//         break; 
//     case "Friday":
//         console.log("Go to work!"); 
//         break; 
//     case "Saturday":
//         console.log("Time Off!!");
//         break; 
//     case "Sunday":
//         console.log("Time Off!!");  
//         break;
//     default:
//         console.log("No Statement")
// }





// ==================  Logical Operators  ================== //


// Operator    Description        Example
//     !           NOT             !false -> true          - not False is True and not True is False
//     &&          AND             true && false -> false  - both must be True to become True
//     ||          OR              true || false -> true   - one is enough to True

// let a = 3;
// let b = -2;
// console.log(a > 0 && b > 0);    // expected output: false
// console.log(a > 0 || b > 0);    // expected output: true
// console.log(!(a > 0 || b > 0)); // expected output: false




// ==================  Typeof Operator  ================== //


// const val = 5;
// console.log(typeof val);        // number
// const str = 'hello';
// console.log(typeof str);        // string
// const obj = {name: 'Maria', age:18};
// const arr = ["Maria", 1, "age", 2, 3]
// console.log(typeof obj);        // object 
// console.log(typeof arr);        // object




// ==================  Loops  ================== //



// for (let i = 1; i <= 5; i++){
//     console.log(i)             // Incrementation in the condition
//    }

// let i = 1
// while (i <= 5) {
//     console.log(i)            // Incrementation outside the condition
//     i++
// }


// ==================  Arrays  ================== //



// let cars = ['BMW', 'Audi', 'Opel'];
// let firstCar = cars[0];               // BMW
// let lastCar = cars[cars.length - 1];  // Opel

// console.log(firstCar);  // BMW
// console.log(lastCar);   // Opel

// console.log(cars[3]);   // undefined
// console.log(cars[-1]);  // undefined




// ==================  Arrays  ================== //
// ===== Expression that unpacks values from arrays or objects, into distinct variables ===== //

// let numbers = [10, 20, 30, 40, 50];
// let [a, b, ...elems] = numbers;

// console.log(a)      // 10
// console.log(b)      // 20
// console.log(elems)  // [30, 40, 50]


// let numbers = [ 1, 2, 3, 4, 5 ];
// let output = '';

// for (let number of numbers)
//     output += `${number} `;

// console.log(output);
// console.log(typeof output);



// ===== Pop ===== //
// ===== Removes the last element from an array and returns that element ===== //
// ===== This method changes the length of the array ===== //

// let nums = [10, 20, 30, 40, 50, 60, 70];
// console.log(nums.length);     // 7
// console.log(nums.pop());     // 70
// console.log(nums.length);   // 6
// console.log(nums);         // [ 10, 20, 30, 40, 50, 60 ] 



// ===== Push ===== //
// ===== The push() method adds one or more elements to ===== //
// ===== the end of an array and returns the new length of the array ===== //

// let nums = [10, 20, 30, 40, 50, 60, 70];
// console.log(nums.length);       // 7
// console.log(nums.push(80));     // 8 (nums.length)
// console.log(nums);              // [ 10, 20, 30, 40, 50, 60, 70, 80 ]
// console.table(nums);            // same with top list but tabel layout and with indexes



// ===== Shift ===== //
// ===== The shift() method removes the first element from an array and returns that removed element ===== //
// ===== This method changes the length of the array ===== //

// let nums = [10, 20, 30, 40, 50, 60, 70];
// console.log(nums.length);         // 7
// console.log(nums.shift());       // 10 (removed element)
// console.log(nums);              // [ 20, 30, 40, 50, 60, 70 ] 
// console.table(nums);            // same with top list but tabel layout and with indexes



// ===== Unshift  ===== //
// ===== The unshift() method adds one or more elements  ===== //
// ===== to the beginning of an array and returns the new length of the array  ===== //

// let nums = [40, 50, 60];
// console.log(nums.length);           // 3
// console.log(nums.unshift(30));     // 4 (nums.length)
// console.log(nums.unshift(10,20)); // 6 (nums.length)
// console.log(nums);              // [ 10, 20, 30, 40, 50, 60 ] 
// console.table(nums);            // same with top list but tabel layout and with indexes



// ===== Splice  ===== //
// ===== Changes the contents of an array by removing or replacing  ===== //
// ===== existing elements and / or adding new elements  ===== //

// let nums = [1, 3, 4, 5, 6];
// nums.splice(1, 0, 2);           // inserts at index 1
// console.log(nums);              // [ 1, 2, 3, 4, 5, 6 ]
// nums.splice(4, 1, 19);          // replaces 1 element at index 4
// console.log(nums);              // [ 1, 2, 3, 4, 19, 6 ]
// let el = nums.splice(2, 1);     // removes 1 element at index 2 console.log(nums); // [ 1, 2, 4, 19, 6 ]
// console.log(el);                // [ 3 ]



// ===== Reverse  ===== //
// ===== Reverses the array The first array element becomes the last, and the last  ===== //
// ===== The first array element becomes the last, and the last array element becomes the first  ===== //

// let arr = [1, 2, 3, 4];
// arr.reverse();
// console.log(arr); // [ 4, 3, 2, 1 ]



// ===== Join ===== //
// ===== Creates and returns a new string by concatenating all ===== //
// ===== of the elements in an array (or an array-like object), separated by commas or a specified separator string   ===== //

// let elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());       // "Fire,Air,Water"
// console.log(elements.join(''));     // "FireAirWater"
// console.log(elements.join('-'));    // "Fire-Air-Water"
// console.log(['Fire'].join("."));    // Fire



// ===== Slice ===== //
// ===== The slice() method returns a shallow copy of a  ===== //
// ===== portion of an array into a new array object selected  ===== //
// ===== from begin to end (end not included)   ===== //
// ===== The original array will not be modified   ===== //

// let fruits = ['Banana', 'Orange', 'Lemon', 'Apple'];
// let citrus = fruits.slice(1, 3);
// let fruitsCopy = fruits.slice();

// console.log(fruits);       // fruits contains ['Banana', 'Orange', 'Lemon', 'Apple']
// console.log(citrus);      // citrus contains ['Orange', 'Lemon']
// console.log(fruitsCopy); // fruitsCopy contains ['Banana', 'Orange', 'Lemon', 'Apple']




// ===== Includes ===== //
// ===== Determines whether an array contains a certain  ===== //
// ===== element, returning true or false as appropriate  ===== //
// ===== ===== //
// ===== ===== //

// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

// let arr = ['a', 'b', 'c'];

// console.log(arr.includes('a', -100)); // true
// console.log(arr.includes('b', -100)); // true
// console.log(arr.includes('c', -100)); // true
// console.log(arr.includes('a', -2)); // false



// ===== IndexOf ===== //
// ===== The indexOf() method returns the first index at  ===== //
// ===== which a given element can be found in the array  ===== //
// ===== Output is -1 if element is not present  ===== //


// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison')); // 1

// // start from index 2
// console.log(beasts.indexOf('bison', 2)); // 4
// console.log(beasts.indexOf('giraffe')); // -1 
// console.log(beasts.indexOf('pantera')); // -1 


// ===== ForEach ===== //
// ===== The forEach() method executes a provided function  ===== //
// ===== once for each array element  ===== //
// ===== Converting a for loop to forEach  ===== //

// const items = ['item1', 'item2', 'item3'];
// const copy = [];

// // For loop
// console.log("===== For loop =====")

// for (let i = 0; i < items.length; i++) {
//     copy.push(items[i]);

//     console.log(copy) // 1 loop -> [ 'item1' ], 2 loop -> [ 'item1', 'item2' ], 3 loop -> [ 'item1', 'item2', 'item3' ]
//     console.log(items[i]) //  1 loop -> item1, 2 loop -> item2, 3 loop -> item3 
// }

// console.log("\n")

// // ForEach
// console.log("===== ForEach =====")

// items.forEach(item => { copy.push(item); });

// console.log(copy)  // [ 'item1', 'item2', 'item3', 'item1', 'item2', 'item3' ]
// console.log(items) // [ 'item1', 'item2', 'item3' ]



// ===== Map ===== //
// ===== Creates a new array with the results of calling a  ===== //
// ===== provided function on every element in the calling array  ===== //


// let numbers = [1, 4, 9];
// let roots = numbers.map(function(num, i, arr) {
//     return Math.sqrt(num)
// });

// console.log(numbers) // numbers is still [1, 4, 9]
// console.log(roots)  // roots is now [1, 2, 3]




// ===== Find ===== //
// ===== Returns the first found value in the array, ===== //
// ===== if an element in the array satisfies the provided  ===== //
// ===== testing function or undefined if not found  ===== //


// let array1 = [5, 12, 8, 130, 44];
// let found = array1.find(function(element) {
//     return element > 10; // return 12, but when element > 12 than return 130
// });

// console.log(array1) // numbers is still [ 5, 12, 8, 130, 44 ]
// console.log(found)  // is now found 12


// ===== Filter ===== //
// ===== Creates a new array with filtered elements only  ===== //
// ===== Calls a provided callback function once for each element in an array  ===== //
// ===== Does not mutate the array on which it is called  ===== //


let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// Filter array items based on search criteria (query)
function filterItems(arr, query) {
    return arr.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
};

console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes'] 