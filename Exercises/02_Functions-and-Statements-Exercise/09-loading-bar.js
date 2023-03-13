function loadingBar (num) {
    let completed = num / 10;
    let remaining = 10 - completed;
    let bar = '';

    for (let index = 0; index < completed; index++) {
        bar += '%';
    }
    
    for (let index = 0; index < remaining; index++) {
        bar += '.';
    }

    if (num === 100) {
        console.log(`${num}% Complete!`);
        console.log(`[${bar}]`);
    } else {
        console.log(`${num}% [${bar}]`);
        console.log('Still loading...');
    }
}


loadingBar(30);
loadingBar(50);
loadingBar(100);