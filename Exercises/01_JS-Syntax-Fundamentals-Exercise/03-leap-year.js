function isLeapYear(num) {
    if ((num % 4 == 0 && num % 100 !== 0) || num % 400 == 0) {
        console.log('yes');
    }
    else {
        console.log('no');
    }
}

isLeapYear(1984);
isLeapYear(2003);
isLeapYear(4);