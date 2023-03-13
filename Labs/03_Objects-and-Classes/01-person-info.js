function personInfo(firstName, lastName, age) {
    let person = {firstName, lastName, age};
    return person;                                      // Judge will this for ✅✅✅✅✅ 100/100
    // console.log(`firstName: ${person.firstName}`);   // Judge give for this code error ✱✱✱✱✱ 0/100
    // console.log(`lastName: ${person.lastName}`);     // Judge give for this code error ✱✱✱✱✱ 0/100
    // console.log(`age: ${person.age}`);               // Judge give for this code error ✱✱✱✱✱ 0/100
}

console.log(personInfo('Peter', 'Pan', '20'));      // Judge will this for ✔✔✔✔✔ 100/100
console.log(personInfo('George', 'Smith', '18'));   // Judge will this for ✔✔✔✔✔ 100/100
// personInfo('Peter', 'Pan', '20');                // Judge give for this code error ✱✱✱✱✱ 0/100
// personInfo('George', 'Smith', '18');             // Judge give for this code error ✱✱✱✱✱ 0/100