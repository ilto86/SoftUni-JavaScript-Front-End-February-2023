function reverseArray(count, arr) {
    let newArr = [];

    for (let i = 0; i < count; i++) {
        let firstNum = arr.shift();
        newArr.push(firstNum);
    }
    const reversedArr = newArr.reverse()
    console.log(reversedArr.join(" "));
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);