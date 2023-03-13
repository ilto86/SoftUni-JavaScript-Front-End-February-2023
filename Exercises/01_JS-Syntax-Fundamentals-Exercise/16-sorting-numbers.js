// --------- First Solution --------- \\

    // function sortingNumbers(nums) {
    //     let sortedNums = nums.slice().sort((a, b) => a - b);
    //     let result = [];
    //
    //     let left = 0, right = sortedNums.length - 1;
    //     while (left <= right) {
    //         if (left === right) {
    //             result.push(sortedNums[left]);
    //         } else {
    //             result.push(sortedNums[left], sortedNums[right]);
    //         }
    //         left++;
    //         right--;
    //     }
    //     return result;
    // }
    //
    //
    // console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])); // [-3, 65,  1, 63,  3, 56, 18, 52, 31, 48]





// --------- Second Solution --------- \\
function sortingNumbers(nums) {
    nums.sort((a, b) => a - b);
    let result = [];

    while (nums.length > 0) {
        result.push(nums.shift());
        result.push(nums.pop());
    }
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])); // [-3, 65,  1, 63,  3, 56, 18, 52, 31, 48]
