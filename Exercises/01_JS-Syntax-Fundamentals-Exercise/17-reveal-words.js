// --------- First Solution --------- \\

// function revealWords(replaceString, text) {
//     let words = text.split(' ');
//     let string = replaceString.split(', ');

//     for (let str of string) {
//         for (let word of words) {
//             if (word.includes('*')) {
//                 let wordIsEqual = word.length;
//                 let stringIsEqual = str.length;
//                 if (wordIsEqual === stringIsEqual) {
//                     text = text.replace(word, str);
//                     break;
//                 }
//             }
//         }
//     }
//     console.log(text);
// }



// --------- Second Solution --------- \\

function revealWords(replaceWords, text) {
    let words = text.split(' ');
    let replacements = replaceWords.split(', ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.includes('*')) {
            let matchingReplacement = replacements.find(replacement => replacement.length === word.length);
            if (matchingReplacement) {
                text = text.replace(word, matchingReplacement);
            }
        }
    }

    console.log(text);
}


revealWords('great','softuni is ***** place for learning new programming languages');
// softuni is great place for learning new programming languages

revealWords('great, learning','softuni is ***** place for ******** new programming languages');
// softuni is great place for learning new programming languages

