// --------- With for loop Solution --------- \\

// function cookingNumbers(num, ...operations) {
//     let number = +num

//     for (let index = 0; index < operations.length; index++) {
//         let operation = operations[index];

//         switch(operation) {
//             case 'chop':
//                 number /= 2;
//                 break;
//             case 'dice':
//                 number = Math.sqrt(number);
//                 break;
//             case 'spice':
//                 number++;
//                 break;
//             case 'bake':
//                 number *= 3;
//                 break;
//             case 'fillet':
//                 number -= number * 0.2;
//                 break;
//         }
//         console.log(number); 
//     }
// }

// cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');



// --------- With forEach Solution --------- \\

function cookingNumbers(num, ...operations) {
    let number = +num;

    operations.forEach((operation) => {
        switch(operation) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= number * 0.2;
                break;
        }
        console.log(number); 
    });
}

cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');