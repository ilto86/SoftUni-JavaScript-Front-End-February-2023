function addressBook(input) {
    const addressbook = {};
    for (const line of input) {
        let [ name, address ] = line.split(':');
        // let tokens = line.split(':');
        // let name = tokens[0];
        // let address = tokens[1];
        addressbook[name] = address;
    }

    let sortedNames = Object.keys(addressbook)
    .sort((nameA, nameB) => nameA.localeCompare(nameB));
    // console.log(sortedNames);
    // console.log(addressbook);
    
    for (let name of sortedNames) {
        console.log(`${name} -> ${addressbook[name]}`);
    }
}

addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);

addressBook([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
]);