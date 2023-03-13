function carWash(arr) {
    let cleanValue = 0;

    while (arr.length > 0) {
        let currentCommands = arr.shift();

        if (currentCommands === 'soap') {
            cleanValue += 10;
        } else if (currentCommands === 'water') {
            cleanValue += cleanValue * 0.20;
        } else if (currentCommands === 'vacuum cleaner') {
            cleanValue += cleanValue * 0.25;
        } else if (currentCommands === 'mud') {
            cleanValue -= cleanValue * 0.10;
        }
    }
    console.log(`The car is ${cleanValue.toFixed(2)}% clean.`);
}


carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);        // The car is 39.00% clean.
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]); // The car is 13.12% clean.





// --------- Second Solution --------- \\
// function carWash(commands) {
//     let value = 0;
//    
//     for (let command of commands) {
//        
//         switch (command) {
//        
//             case 'soap':
//                 value += 10;
//                 break;
//        
//             case 'water':
//                 value *= 1.2;
//                 break;
//        
//             case 'vacuum cleaner':
//                 value *= 1.25;
//                 break;
//            
//             case 'mud':
//                 value *= 0.9;
//                 break;
//         }
//     }
//     console.log(`The car is ${value.toFixed(2)}% clean.`);
// }
//
// carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);        // The car is 39.00% clean.
// carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]); // The car is 13.12% clean.