function wordsTracker(words) {

    let searchWords = words[0].split(' ');
    let wordCounts = {};
    
    searchWords.forEach(searchWord => {
        for (let i = 1; i < words.length; i++) {
            let word = words[i];
            
            if (searchWord === word) {
                if (wordCounts[word]) {
                    wordCounts[word]++;
                } else {
                    wordCounts[word] = 1;
                }
            }
        }
    });
    let sortedWords = Object.keys(wordCounts).sort((a, b) => {
        return wordCounts[b] - wordCounts[a];
    });
    sortedWords.forEach(word => {
        console.log(`${word} - ${wordCounts[word]}`);
    });
}


wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]);

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence'
]);