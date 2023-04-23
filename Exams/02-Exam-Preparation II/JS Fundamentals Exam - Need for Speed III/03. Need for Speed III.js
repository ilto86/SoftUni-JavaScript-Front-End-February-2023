function carManager(input) {
    let number_of_cars = Number(input.shift());
    let cars = {};

    for (let i = 0; i < number_of_cars; i++) {
        let data = input.shift().split('|');
        let car = data[0];
        let mileage = Number(data[1]);
        let fuel = Number(data[2]);
        addCar(cars, car, mileage, fuel);
    }

    while (input.length > 0) {
        let commands = input.shift();

        if (commands === 'Stop') {
        break;
        }

        let order = commands.split(' : ');
        let command = order[0];
        let car = order[1];

        if (command === 'Drive') {
            let distance = Number(order[2]);
            let fuel = Number(order[3]);
            driveCar(cars, car, distance, fuel);
        }

        if (command === 'Refuel') {
            let fuel = Number(order[2]);
            refuelCar(cars, car, fuel);
        }

        if (command === 'Revert') {
            let amount_reverted = Number(order[2]);
            revertMileage(cars, car, amount_reverted);
        }
    }

    for (let car in cars) {
        console.log(`${car} -> Mileage: ${cars[car].Mileage} kms, Fuel in the tank: ${cars[car].Fuel} lt.`);
    }

    function addCar(cars, car, mileage, fuel) {
        cars[car] = {'Mileage': mileage, 'Fuel': fuel};
    }
    
    function driveCar(cars, car, distance, fuel) {
        if (cars[car]['Fuel'] < fuel) {
            console.log('Not enough fuel to make that ride');
        } else {
            cars[car]['Mileage'] += distance;
            cars[car]['Fuel'] -= fuel;
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            if (cars[car]['Mileage'] >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete cars[car];
            }
        }
    }
    
    function refuelCar(cars, car, fuel) {
        if (fuel + cars[car]['Fuel'] > 75) {
            let required_fuel = 75 - cars[car]['Fuel'];
            console.log(`${car} refueled with ${required_fuel} liters`);
            cars[car]['Fuel'] = 75;
        } else {
            cars[car]['Fuel'] += fuel;
            console.log(`${car} refueled with ${fuel} liters`);
        }
    }
    
    function revertMileage(cars, car, amount_reverted) {
        if (cars[car]['Mileage'] - amount_reverted <= 10000) {
            cars[car]['Mileage'] = 10000;
        } else {
            cars[car]['Mileage'] -= amount_reverted;
            console.log(`${car} mileage decreased by ${amount_reverted} kilometers`);
        }
    }
}



carManager([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);

carManager([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);