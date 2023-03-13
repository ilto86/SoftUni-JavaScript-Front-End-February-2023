// This is Incorrect!!!
// function substring(text, startIndex, endIndex) {
//     endIndex += 1;
//     let substringText = text.substring(startIndex, endIndex)
//     console.log(substringText)
// }

// This is Correct!!!
function substring(text, startIndex, count) {
    let substringText = text.substring(startIndex, startIndex + count);
    console.log(substringText);
}

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);
substring('HelloSoftUni', 5, 11);