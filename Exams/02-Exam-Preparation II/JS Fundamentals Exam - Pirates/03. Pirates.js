function pirateHunt(input) {
    let cities = {};

    while (true) {
        let string = input.shift();
        
        if (string === 'Sail') {
            break;
        }
        
        let data = string.split('||');
        
        let city = data[0];
        let population = Number(data[1]);
        let gold = Number(data[2]);
        
        if (!cities.hasOwnProperty(city)) {
            cities[city] = { 'Population': population, 'Gold': gold };
        } else {
            cities[city]['Population'] += population;
            cities[city]['Gold'] += gold;
        }
    }
    
    while (true) {
        let data = input.shift();
        
        if (data === 'End') {
            break;
        }
        
        let commands = data.split('=>');
        let command = commands[0];
        let town = commands[1];
    
        if (command === 'Plunder') {
            let people = parseInt(commands[2]);
            let gold = parseInt(commands[3]);
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            cities[town]['Population'] -= people;
            cities[town]['Gold'] -= gold;
            if (cities[town]['Population'] === 0 || cities[town]['Gold'] === 0) {
                console.log(`${town} has been wiped off the map!`);
                delete cities[town];
            }
        } else if (command === 'Prosper') {
            let gold = parseInt(commands[2]);
            if (gold <= 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                cities[town]['Gold'] += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town]['Gold']} gold.`);
            }
        }
    }
    
    if (Object.keys(cities).length > 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        
        for (let city in cities) {
            let people = cities[city]['Population'];
            let gold = cities[city]['Gold'];

            console.log(`${city} -> Population: ${people} citizens, Gold: ${gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}


pirateHunt(([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
]));

pirateHunt(([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
]));