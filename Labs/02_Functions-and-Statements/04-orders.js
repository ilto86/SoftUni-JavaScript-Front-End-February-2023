// --------- First Solution with switch statement --------- \\

// function orders(products, quantity) {
//     let totalPrice = 0;
//     switch(products) {
//         case 'coffee':
//             totalPrice = 1.50 * quantity;
//             break;
//         case 'coke':
//             totalPrice = 1.40 * quantity;
//             break;
//         case 'snacks':
//             totalPrice = 2.00 * quantity;
//             break;
//         default:
//             totalPrice = quantity;
//     }
//     return totalPrice.toFixed(2);
// }


// console.log(orders('water', 5));
// console.log(orders('coffee', 2));




// --------- Second Solution with if statement --------- \\

function orders(products, quantity) {
    if (products === 'coffee') {
        return (1.5 * quantity).toFixed(2);
    } else if (products === 'coke') {
        return (1.4 * quantity).toFixed(2);
    } else if (products === 'snacks') {
        return (2 * quantity).toFixed(2);
    } else {
        return quantity.toFixed(2);
    }
}



console.log(orders('water', 5));
console.log(orders('coffee', 2));