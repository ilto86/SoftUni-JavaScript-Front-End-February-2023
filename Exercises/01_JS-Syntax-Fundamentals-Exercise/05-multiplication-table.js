function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let times = i;
        let product = number * i;
        console.log(`${number} X ${times} = ${product}`);
    }
}

multiplicationTable(5);
multiplicationTable(2);