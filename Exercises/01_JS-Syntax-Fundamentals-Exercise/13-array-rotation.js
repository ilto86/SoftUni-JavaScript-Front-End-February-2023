function arrayRotation(arr, count) {
    for (let index = 0; index <= count - 1; index++) {
        let el = arr.shift();
        arr.push(el);
    }
    return arr.join(' ');
}

console.log(arrayRotation([51, 47, 32, 61, 21], 2));
console.log(arrayRotation([32, 21, 61, 1], 4));
console.log(arrayRotation([2, 4, 15, 31], 5));

