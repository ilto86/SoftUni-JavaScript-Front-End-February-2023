// function countString(text, word) {
//     let count = 0;
//     let words = text.split(" ");
//     for (let index = 0; index <= words.length; index++) {
//         if (word === words[index]) {
//             count += 1
//         }
//     }
//     console.log(count);
// }

function countString(text, searchedWord) {
    let words = text.split(" ");
    let counter = 0;
    
    for (let word of words) {
        if (searchedWord === word) {
            counter += 1;
        }
    }
    console.log(counter);
}


countString('This is a word and it also is a sentence', 'is');
countString('softuni is great place for learning new programming languages', 'softuni');