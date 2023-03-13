// ---------------- First Demo ---------------- \\
// let person = {name: 'Peter', age:20, height:183};

// let person = {};
// person.name = 'Nicole';
// person.age = 33;
// person.hairColor = 'black';

// person['lastName'] = 'Parker';

// console.log(person);




// ---------------- Second Demo ---------------- \\

// let person = {
//     sayHello: function(name) {
//     console.log(`Hi, ${name}'`);
//     }
// };

// person.sayHello('Thomas');





// ---------------- Third Demo ---------------- \\

// let person = {
//     sayHello(age) {
//     console.log('Hi, guys' + ` I am ${age} year old`);
//     }
// };

// console.log(person);
// person.sayHello(18);




// ---------------- Fourth Demo ---------------- \\

// let person = { name:'Peter', age: 20 };
// person.sayHello = (lastName) => console.log('Hi, guys' + ` I am ${lastName} and say Hello`);

// console.log(person);
// person.sayHello('Peshakof');




// ---------------- Fifth Demo ---------------- \\


// let cat = { name:'Tom', age: 5 };
// // console.log(`I am ${cat.name} and is ${cat.age} year old`);

// console.log(Object.keys(cat));
// console.log(Object.values(cat));
// console.log(Object.entries(cat));





// ---------------- Sixth Demo function in object is method ---------------- \\


// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: function (myAge) { return `My age is ${myAge}!`}
// };

// console.log(person.age(21)); // My age is 21!





// ---------------- Seventh Demo Sorting Helper ---------------- \\

// // sorting helper
// const compareNumbers = {
//     ascending: (a, b) => a - b,
//     descending: (a, b) => b - a
// };

// let dictionary = {1: 'One', 2: 'Two', 3: 'Three'};

// let entries = Object.entries(dictionary);
// entries.sort((a, b) => compareNumbers.descending(a[0], b[0]));

// for (let [key, value] of entries) {
//     console.log(key + ': ' + value);    // Note that the keys are sorted in descending order (3, 2, 1)
//                                         // and the corresponding values are printed alongside them.
// }



// ---------------- Eighth Demo Sorting ---------------- \\


// // First Solution
// const compareNumbers = {
//     ascending: (a, b) => a - b,
//     descending: (a, b) => b - a
// };

// let dictionary = {1: 'One', 2: 'Two', 3: 'Three', 4: 'One', 5: 'Three', 6: 'Two'};

// let entries = Object.entries(dictionary);

// entries.sort((a, b) => {
// //     if (a[1] < b[1]) {
// //         return -1;
// //     } else if (a[1] > b[1]) {
// //         return 1;
// //     } else {
// //         return compareNumbers.descending(a[0], b[0]);
// //     }
// // // Result: 4: One
// //         // 1: One
// //         // 5: Three
// //         // 3: Three
// //         // 6: Two
// //         // 2: Two

//     if (b[1] < a[1]) {
//         return -1;
//     } else if (b[1] > a[1]) {
//         return 1;
//     } else {
//         return compareNumbers.descending(a[0], b[0]);
//     }
//     // Result: 6: Two
//             // 2: Two
//             // 5: Three
//             // 3: Three
//             // 4: One
//             // 1: One
// });

// for (let [key, value] of entries) {
//     console.log(key + ': ' + value);
// }
// // First, the array is sorted based on the values in ascending order.
// // If two values are equal, then the keys are sorted in descending order.
// // Finally, the sorted key-value pairs are printed to the console.



// //Second Solution
// const compareNumbers = {
//     ascending: (a, b) => a - b,
//     descending: (a, b) => b - a
// };

// const compareA = (a, b) => a.localeCompare(b);

// const compareB = (a, b) => b.localeCompare(a);

// let dictionary = {1: 'One', 2: 'Two', 3: 'Three', 4: 'One', 5: 'Three', 6: 'Two'};

// let entries = Object.entries(dictionary);

// entries.sort((a, b) => {
// // if (compareA(a[1], b[1]) === 0) {
// //     return compareNumbers.descending(a[0], b[0]);
// // }

// // Result: 4: One
//         // 1: One
//         // 5: Three
//         // 3: Three
//         // 6: Two
//         // 2: Two

// if (compareB(a[1], b[1]) === 0) {
//     return compareNumbers.descending(a[0], b[0]);
// }

// // Result: 6: Two
//         // 2: Two
//         // 5: Three
//         // 3: Three
//         // 4: One
//         // 1: One

// // return compareA(a[1], b[1]);

// return compareB(a[1], b[1]);
// });

// for (let [key, value] of entries) {
// console.log(key + ': ' + value);
// }

// // First, the array is sorted based on the values in ascending order.
// // If two values are equal, then the keys are sorted in descending order.
// // Finally, the sorted key-value pairs are printed to the console.





// ---------------- Ninth Demo Switch Method ---------------- \\

// ---------------- You will almost never see switch used in JS code ---------------- \\
// ---------------- Named methods are used instead  ---------------- \\

// // let command = 'increment';
// // let command = 'decrement';
// let command = 'reset';
// let count = 5;

// switch (command) {
//     case 'increment':
//         count++;
//         console.log(count); // 6
//         break;
//     case 'decrement':
//         count--;
//         console.log(count); // 5
//         break;
//     case 'reset':
//         count = 0;
//         console.log(count); // 0
//         break;
// }


// let count = 5;
// const parser = {
//     increment() { count++; },
//     decrement() { count--; },
//     reset() { count = 0; }
// };

// let command = 'increment';   // Without this count is 5
// parser[command]();   // and Without this count is 5
// console.log(count); // now count is 6

// // let command = 'decrement';   // Without this count is 5
// // parser[command]();   // and Without this count is 5
// // console.log(count); // now count is 4

// // let command = 'reset';   // Without this count is 5
// // parser[command]();   // and Without this count is 5
// // console.log(count); // now count is 0






// ---------------- Tenth Demo Accessing Object Context ---------------- \\

// ----------------  Functions in JavaScript have execution context ---------------- \\
// ---------------- Accessed with the keyword this  ---------------- \\
// ---------------- When executed as an object method, the context is a   ---------------- \\
// ---------------- reference to the parent object  ---------------- \\


// const person = {
//     firstName: 'Peter',
//     lastName: 'Johnson',
//     fullName() {
//     return this.firstName + ' ' + this.lastName;
//     }
// };

// console.log(person.fullName()); // 'Peter Johnson'


// const getFullName = person.fullName;
// console.log(getFullName()); // 'undefined undefined'

// const anotherPerson = { firstName: 'Bob',
// lastName: 'Smith' };
// anotherPerson.fullName = getFullName;
// console.log(anotherPerson.fullName()); // 'Bob Smith'






// ---------------- Eleventh Demo JSON Example ---------------- \\

// const jsonObj = {
//     "name": "Ivan",
//     "age": 25,
//     "grades": {
//     "Math": [2.50, 3.50],
//     "Chemistry": [4.50]
//     }
// };

// console.log(`(This is JSON object => ${jsonObj})`);
// console.log(jsonObj);
// console.log('===================================================================');
// console.log('===================================================================');

// ---------------- We can convert object into JSON string using JSON.stringify(object) method ---------------- \\

// let text = JSON.stringify(jsonObj);
// console.log(`(This is from object JSON to string Json => ${text})`);
// console.log(text);
// console.log('===================================================================');
// console.log('===================================================================');

// ---------------- We can convert JSON string into object using JSON.parse(text) method ---------------- \\

// let obj = JSON.parse(text);
// console.log(`(This is from string JSON to object Json => ${obj})`);
// console.log(obj);


// ---------------- Convert to Object ---------------- \\

// function objConverter(json) {
//     let person= JSON.parse(json);

//     // for (const key in person) {
//     //     console.log(`${key}: ${person[key]}`);
//     // }

//     let entries = Object.entries(person);
//     for (let [key, value] of entries) {
//     console.log(`${key}: ${value}`);
//     }
// }

// objConverter('{"name": "George", "age": 40, "town": "Sofia"}');




// ---------------- Convert to JSON ---------------- \\

// function convertJSON(name, lastName, hairColor) {
//     let person = {name, lastName, hairColor};
//     console.log(JSON.stringify(person));
// }

// convertJSON('George', 'Jones', 'Brown');




// ---------------- Twelfth Demo Associative Arrays ---------------- \\
// ----------------------- Associative Arrays ----------------------- \\
// ----------------------- Storing Key-Value Pairs ------------------- \\

// let key = 'six';
// let assocArr = {
//     'one': 1,
//     'two': 2,
//     'three': 3,
//     [key]: 6
// }; 

// assocArr['four'] = 4;
// assocArr.five = 5;
// assocArr[key] = 6;

// console.log(assocArr);


// let assocArr = {};
// assocArr['one'] = 1;
// assocArr['two'] = 2;
// assocArr['three'] = 3;

// for(let key in assocArr) {
//     console.log(key + ' = ' + assocArr[key]);
// }





// ----------------------- Associative Arrays ----------------------- \\
// ----------------------- Manipulating Associative Arrays ------------------- \\

// let assocArr = { /* entries */ };
// if (assocArr.hasOwnProperty('John Smith')) { /* Key found */ }
// delete assocArr['John Smith'];




// // Define the associative array
// let assocArr = { 
//     'John Smith': 'some value',
//     'Jane Doe': 'another value',
//     'Carry Malinsky': 'same value',
//     'Joel Conner': 'someone\'s value',
// };

// // Check if 'John Smith' and 'Carry Malinsky' exists as a key in the associative array
// if (assocArr.hasOwnProperty('John Smith') && assocArr.hasOwnProperty('Carry Malinsky') ) {
//     console.log('Key found!');
// }

// // Delete the 'John Smith' key from the associative array
// delete assocArr['John Smith'];

// // Verify that 'John Smith' no longer exists as a key in the associative array
// if (!assocArr.hasOwnProperty('John Smith')) {
//     console.log('Key deleted!');
// }

// console.log(assocArr);// { 
//                         // 'Jane Doe': 'another value', 
//                         // 'Carry Malinsky': 'same value', 
//                         // 'Joel Conner': "someone's value"
//                       // }




// function checkAndDeleteKey(assocArr, key) {
//     // Check if the key exists in the associative array
//     if (assocArr.hasOwnProperty(key)) {
//         console.log('Key found!');
        
//         // Delete the key from the associative array
//         delete assocArr[key];
//         console.log('Key deleted!');
//     } else {
//         console.log('Key not found.');
//     }
// }

// // Example usage
// let myAssocArr = {
//     'John Smith': 'some value',
//     'Jane Doe': 'another value'
// };

// checkAndDeleteKey(myAssocArr, 'John Smith'); // Outputs: Key found! Key deleted!
// console.log(myAssocArr); // Outputs: { 'Jane Doe': 'another value' }

// checkAndDeleteKey(myAssocArr, 'Bob Johnson'); // Outputs: Key not found.
// console.log(myAssocArr); // Outputs: { 'Jane Doe': 'another value' }






// ---------------- Thirteenth Demo Class in JS ---------------- \\

// class Student {
//     constructor(name, age, grades) {
//         this.name = name;
//         this.age = age;
//         this.grades = grades;
//     }
//     sayHello() {
//         console.log(`Hi, My Name is ${this.name}`);
//     }
// }

// const student1 = new Student('Kiril', 25, [3,4,5]);
// const student2 = new Student('Anna', 23, [4,5,6]);
// const student3 = new Student('Peter', 21, [4,5,3]);

// // console.log(new Student('ILTO', 18, [6,5,4]));
// // console.log(student1);
// // console.log(student2);
// // console.log(student3);

// console.log(student2.name);
// student2.sayHello(); // "Hi, My Name is Anna" will be logged to the console


// Function Constructor
function Student(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
}

Student.prototype.sayHello = function() {
    console.log(`Hi, My Name is ${this.name}`);
};

const student1 = new Student('ILTO', 24, [2,2,4,5,3]);

console.log(student1.age);

student1.sayHello();