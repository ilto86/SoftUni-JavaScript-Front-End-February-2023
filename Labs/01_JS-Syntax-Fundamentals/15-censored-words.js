// --------- Solution without Regex --------- \\

function censoredWords(text, word) {
    while (text.includes(word)) {
    text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);
}





// --------- Solution with Regex --------- \\

// function censoredWords(text, word) {
//     console.log(text.replace((RegExp(word, 'g')), '*'.repeat(word.length)));
// }



censoredWords('A small sentence with some words','small');
censoredWords('Find the hidden word', 'hidden');