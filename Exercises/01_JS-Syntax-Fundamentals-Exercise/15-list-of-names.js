function listOfNames (names) {
    let sortedResult = [];

    let sortedNamesAsc = [...names]
    .sort((firstName, secondName) => firstName.localeCompare(secondName));

    for (let i = 0; i < sortedNamesAsc.length; i++) {
        sortedResult.push(`${i + 1}. ${sortedNamesAsc[i]}`);
    }

    return sortedResult.join('\n');
}

console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));
