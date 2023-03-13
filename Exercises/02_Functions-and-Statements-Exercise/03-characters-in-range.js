function charactersInRange(char1, char2) {
    let allCharacter = [];
    let firstChar = char1.charCodeAt(0);
    let secondChar = char2.charCodeAt(0);
    let startChar = Math.min(firstChar, secondChar);
    let endChar = Math.max(firstChar, secondChar);

    for (let char = startChar + 1; char < endChar; char++) {
        allCharacter.push(String.fromCharCode(char));
    }
    return allCharacter.join(' ');
}


console.log(charactersInRange('a', 'd')); // b c
console.log(charactersInRange('#', ':')); // $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
console.log(charactersInRange('C', '#')); // $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B