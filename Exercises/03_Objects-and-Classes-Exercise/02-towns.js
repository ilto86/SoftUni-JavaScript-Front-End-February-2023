function taskTowns(inputArr) {
    let towns = {};
    for (const el of inputArr) {
        const [ town, latitude, longitude ] = el.split(' | ');
        towns.town = town;
        towns.latitude = Number(latitude).toFixed(2);
        towns.longitude = Number(longitude).toFixed(2);
        console.log(towns);
    }
}

taskTowns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);

taskTowns(['Plovdiv | 136.45 | 812.575']);