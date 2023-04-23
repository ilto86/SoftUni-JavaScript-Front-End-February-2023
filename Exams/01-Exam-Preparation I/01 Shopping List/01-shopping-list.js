function shoppingList(input) {
    let orderList = input.shift().split('!');

    for (let el of input) {
        let [ command, ...product ] = el.split(' ');
        switch(command) {
            case 'Urgent':  // add when is not in list
                if (!orderList.includes(product[0])) {
                    orderList.unshift(product[0]);
                }
                break;
            case 'Unnecessary':  // remove when is in list
                if (orderList.includes(product[0])) {
                    let remove = orderList.indexOf(product[0]);
                    orderList.splice(remove, 1);
                }
                break;
            case 'Correct':  // oldItem when is in list change name with newItem
                if (orderList.includes(product[0])) {
                    let replace = orderList.indexOf(product[0]);
                    orderList.splice(replace, 1, product[1]);
                }
                break;
            case 'Rearrange':  // remove from position when is in list and add to end
                if (orderList.includes(product[0])) {
                    let indexOfitem = orderList.indexOf(product[0]);
                    let pushAtEnd = orderList.slice(indexOfitem, indexOfitem + 1);
                    orderList.splice(indexOfitem, 1);
                    orderList.push(pushAtEnd);
                }
                break;
            default:
        }
    }
    console.log(orderList.join(', '));
}



shoppingList(                           // Tomatoes, Potatoes, Bread 
    (['Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'])
    );

shoppingList(                           // Milk, Onion, Salt, Water, Banana 
    (['Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'])
    );