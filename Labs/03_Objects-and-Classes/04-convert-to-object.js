// ---------------- Solution with for of(`Object` can when we use `entries` makes `array`) ---------------- \\

// function convertToObject(stringifyJson) {
//     let objJson = JSON.parse(stringifyJson);
//     let entries = Object.entries(objJson);

//     for (let [key, value] of entries) {
//         console.log(`${key}: ${value}`);
//     }
// }

// convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
// convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');



// ---------------- Solution with for in(Only for `Object` is For In) ---------------- \\

function convertToObject(strJson) {
    let objJson = JSON.parse(strJson);
    for (const key in objJson) {
        console.log(`${key}: ${objJson[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');