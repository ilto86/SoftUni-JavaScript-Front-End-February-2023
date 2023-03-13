// ---------------- Solution with Array[] ---------------- \\
function piccolo(input) {
    let parkingLot = [];
    
    for (let i = 0; i < input.length; i++) {
        let [status, carNumber] = input[i].split(', ');
        
        if (status === 'IN') {
            if (!parkingLot.includes(carNumber)) {
                parkingLot.push(carNumber);
            }
        } else if (status === 'OUT') {
            let carIndex = parkingLot.indexOf(carNumber);
            if (carIndex !== -1) {
                parkingLot.splice(carIndex, 1);
            }
        }
    }
    const sortedParkingLot = parkingLot.sort();
    
    if (sortedParkingLot.length > 0) {
        console.log(sortedParkingLot.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}


piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU',
]);

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);





// ---------------- Solution with Set() ---------------- \\

// function parkingLot(input) {
//     let parking = new Set();
//     for (let i = 0; i < input.length; i++) {
//         let [direction, carNumber] = input[i].split(', ');
//         if (direction === 'IN') {
//             parking.add(carNumber);
//         } else {
//             parking.delete(carNumber);
//         }
//     }
//     if (parking.size === 0) {
//         console.log('Parking Lot is Empty');
//     } else {
//         console.log([...parking].sort().join('\n'));
//     }
// }


// parkingLot([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU',
// ]);

// parkingLot([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA'
// ]);