function taskEmployees(inputArr) {
    let employees = {};
    for (const name of inputArr) {
        employees[name] = name.length;
        console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
    }
}


taskEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);

    taskEmployees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);