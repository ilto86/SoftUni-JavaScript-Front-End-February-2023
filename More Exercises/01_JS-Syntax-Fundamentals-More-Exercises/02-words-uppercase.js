function wordsUppercase(text) {
    let words = text.split(/[^\w]/);
    let arrWords = [];
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            arrWords.push(words[i].toUpperCase());
        }
    }
    console.log(arrWords.join(', '));
}

wordsUppercase('Hi, how are you?'); // HI, HOW, ARE, YOU
wordsUppercase('hello'); // HELLO