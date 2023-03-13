function perfectNumber(num) {
    let sumVariable = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sumVariable += i;
        }
    }

    if (sumVariable === num) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }   
}

perfectNumber(6);       // We have a perfect number! 1 + 2 + 3 = 6
perfectNumber(28);      // We have a perfect number! 1 + 2 + 4 + 7 + 14 = 28
perfectNumber(1236498); // It's not so perfect. 1 + 2 + 3 + 6 + 206083 + 412166 + 618249 = 1236510
