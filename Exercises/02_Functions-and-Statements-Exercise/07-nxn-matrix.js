function squareMatrix(num) {
    let newArr = Array(num).fill(Array(num).fill(num));
    newArr.forEach((row) => console.log(row.join(' ')));
}

squareMatrix(3);
squareMatrix(7);
squareMatrix(10);








