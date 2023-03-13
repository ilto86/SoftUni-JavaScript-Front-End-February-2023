function gladiatorExpences(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expences = 0;
    let shiedBroken = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            expences += helmetPrice;
        }
        if (i % 3 === 0) {
            expences += swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            expences += shieldPrice;
            shiedBroken++;
            if (shiedBroken % 2 === 0) {
                expences += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${expences.toFixed(2)} aureus`);
}


gladiatorExpences(7, 2, 3, 4, 5);   // Gladiator expenses: 16.00 aureus  /Explaining:/ Trashed helmet -> 3 times
                                                                                    // Trashed sword -> 2 times
                                                                                    // Trashed shield -> 1 time
                                                                                    // Total: 6 + 6 + 4 = 16.00 aureus;

gladiatorExpences(23, 12.50, 21.50, 40, 200);   // Gladiator expenses: 608.00 aureus