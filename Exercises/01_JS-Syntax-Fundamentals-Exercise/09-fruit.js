function boughtFruit(fruit, fruitGrams, pricePerKg) {
    let weight = fruitGrams / 1000;
    let money = weight * pricePerKg;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

boughtFruit('orange', 2500, 1.80);   // I need $4.50 to buy 2.50 kilograms orange.
boughtFruit('apple', 1563, 2.35);    // I need $3.67 to buy 1.56 kilograms apple.