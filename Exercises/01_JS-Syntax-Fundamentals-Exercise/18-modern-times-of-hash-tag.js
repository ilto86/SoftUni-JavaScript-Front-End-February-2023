function modernTimes(text) {
    let words = text.split(' ');
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.startsWith('#') && word.length > 1) {
            let hasNumber = false;
            for (let j = 0; j < word.length; j++) {
                if (word.charCodeAt(j) >= 48 && word.charCodeAt(j) <= 57) {
                    hasNumber = true;
                    break;
                }
            }
            if (!hasNumber) {
                result.push(word.slice(1));
            }
        }
    }
    console.log(result.join('\n'));
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');  // special
                                                                                // socialMedia

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');   // variously
                                                                                                    // regions
                                                                                                    // number

modernTimes('Nowadays everyone uses # to tag a #special word #ThisIsNot007Special in #socialMedia');    // special
                                                                                                        // socialMedia






// --------- Solution with Regex --------- \\


// function modernTimes(text) {
//     let word = text.match(/((?<=#)[A-z]+)/g)
//     console.log(word.join('\n'));
// }
//
// modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
// modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');
// modernTimes('Nowadays everyone uses # to tag a #special word #ThisIsNot007Special in #socialMedia');
