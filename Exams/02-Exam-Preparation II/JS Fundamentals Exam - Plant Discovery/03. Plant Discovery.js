function exhibitionPlants(input) {
    const n = Number(input.shift());
    let plants = {};
    
    function ratePlant(plant, value) {
        if (!plants.hasOwnProperty(plant)) {
            console.log('error');
            return;
        }

        plants[plant].ratings.push(Number(value));
        plants[plant].avgRating = plants[plant].ratings.reduce((a, b) => a + b, 0) / plants[plant].ratings.length;
    }
    
    function updatePlant(plant, value) {
        if (!plants.hasOwnProperty(plant)) {
            console.log('error');
            return;
        }
    
        plants[plant].rarity = Number(value);
    }
    
    function resetPlant(plant) {
        if (!plants.hasOwnProperty(plant)) {
            console.log('error');
            return;
        }
    
        plants[plant].ratings = [];
        plants[plant].avgRating = 0;
    }
    
    for (let i = 1; i <= n; i++) {
        let [plant, rarity] = input.shift().split('<->');
        plants[plant] = { rarity: Number(rarity), ratings: [], avgRating: Number(0) };
    }
    
    while (input.length > 0 && input[0] !== 'Exhibition') {
        let [command, plantInfo] = input.shift().split(': ');
        let [plant, value] = plantInfo.split(' - ');
    
        if (command === 'Rate') {
            ratePlant(plant, value);
        } else if (command === 'Update') {
            updatePlant(plant, value);
        } else if (command === 'Reset') {
            resetPlant(plant);
        } else {
            console.log('error');
        }
    }

    console.log('Plants for the exhibition:');
    for (let plant in plants) {
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${plants[plant].avgRating.toFixed(2)}`);
    }
}

exhibitionPlants([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]);