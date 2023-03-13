function storeProvision(arr1, arr2) {
    const store = {};
    
    for (let i = 0; i < arr1.length; i += 2) {
        let productName = arr1[i];
        let productQuantity = Number(arr1[i + 1]);

        if (store.hasOwnProperty(productName)) {
            store[productName] += productQuantity;
        } else {
            store[productName] = productQuantity;
        }
    }
    
    for (let i = 0; i < arr2.length; i += 2) {
        let productName = arr2[i];
        let productQuantity = Number(arr2[i + 1]);

        if (store.hasOwnProperty(productName)) {
            store[productName] += productQuantity;
        } else {
            store[productName] = productQuantity;
        }
    }
    
    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }
}


storeProvision([
    'Chips', '5', 'CocaCola', '9', 
    'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 
    'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);


storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14',
    'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7',
    'Tomatoes', '7', 'Bananas', '30'
    ]);