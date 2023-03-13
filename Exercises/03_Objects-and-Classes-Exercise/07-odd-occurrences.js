function oddOccurrences(text) {
    let textToLower = text.toLowerCase();
    let textArray = textToLower.split(' ');
    let oddOccurrencesWords = [];

    for (let i = 0; i < textArray.length; i++) {
        let currentWord = textArray[i];
        let counter = 0;
        for (let j = 0; j < textArray.length; j++) {
            if (currentWord === textArray[j]) {
                counter++;
            }
        }
        if (counter % 2 === 1 && !oddOccurrencesWords.includes(currentWord)) {
            oddOccurrencesWords.push(currentWord);
        }
    }
    console.log(oddOccurrencesWords.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');   // c# php 1 5

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');    // soft food