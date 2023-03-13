function phonebooks(input) {
    const phonebook = {};
    
    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let number = tokens[1];
        phonebook[name] = number;
    }

    for (const key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
}


phonebooks([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);

phonebooks([
    'George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'
]);