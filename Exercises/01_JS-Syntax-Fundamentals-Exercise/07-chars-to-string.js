function charsToString(...chars) {
    let string = '';
    for (let index = 0; index < chars.length; index++) {
        string += chars[index];
    }
    console.log(string)
}

charsToString('a','b','c')
charsToString('%','2','o')
charsToString('1','5','p')