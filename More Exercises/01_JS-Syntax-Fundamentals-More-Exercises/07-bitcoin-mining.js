function bitcoinMining(inputNumbers) {
    let workingDays = 0;
    let totalBitcoins = 0;
    let money = 0;
    let bitcoinPrice = 11949.16;
    let gramGoldPrice = 67.51;
    let dayOfFirtsBitcoin = 0;

    for (let i = 0; i <= inputNumbers.length - 1; i++) {
        workingDays++;
        if (workingDays % 3 === 0) {
            money += inputNumbers[i] * (gramGoldPrice * 0.7)
        } else {
            money += inputNumbers[i] * gramGoldPrice;
        }
        if (money - bitcoinPrice >= 0) {

            while (money - bitcoinPrice >= 0) {
                if (dayOfFirtsBitcoin === 0) {
                    dayOfFirtsBitcoin = workingDays;
                }
                totalBitcoins++;
                money -= bitcoinPrice;
            }
        }
    }
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (dayOfFirtsBitcoin !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirtsBitcoin}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}


bitcoinMining([50, 100]);   // Bought bitcoins: 0
                            // Left money: 10126.50 lv.

bitcoinMining([3124.15, 504.212, 2511.124]);    // Bought bitcoins: 30
                                                // Day of the first purchased bitcoin: 1
                                                // Left money: 5144.11 lv. 