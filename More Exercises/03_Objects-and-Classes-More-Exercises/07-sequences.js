function sequences(arrays) {
    const setArrays = new Set();
    arrays.forEach(arr => {
        const parsedArr = JSON.parse(arr);
        const sortedArr = parsedArr.sort((a, b) => b - a);
        const newArr = JSON.stringify(sortedArr);
        setArrays.add(newArr);
    });

    let result = [];

    for (const arr of arrays) {
        let currentArray = JSON.parse(arr).sort((a, b) => b - a);
        if (setArrays.has(JSON.stringify(currentArray))){
            result.push(currentArray);
            setArrays.delete(JSON.stringify(currentArray));
        }
    }

    result.sort((a, b) => a.length - b.length).forEach(arr => console.log(`[${arr.join(', ')}]`));

}

sequences([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
]);

sequences([
    '[7.14, 7.180, 7.339, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]'
]);