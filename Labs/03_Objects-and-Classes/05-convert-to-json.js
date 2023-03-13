function convertToJson(name, lastName, hairColor) {
    let person = {name, lastName, hairColor};
    let strJson = JSON.stringify(person);
    console.log(strJson);
}

convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith', 'Blond');