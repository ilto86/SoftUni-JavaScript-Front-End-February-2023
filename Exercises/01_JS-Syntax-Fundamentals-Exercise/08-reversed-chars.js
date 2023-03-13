function charsToString(...chars) {
    let string = '';
    for (let index = chars.length - 1; index >= 0; index--) {
        string += `${chars[index]} `;
    }
    console.log(string.trim());
}

charsToString('A','B','C');
charsToString('%','2','o');
charsToString('1','L','&');