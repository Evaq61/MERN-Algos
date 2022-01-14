const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function insertionSort(nums) {
    if (nums.length < 2) {
        return "already sorted"
    }
    for (let i = 1; i < nums.length; i++) {
        let j = i;
        // console.log(j)
        // console.log(i)
        while (nums[j] < nums[j - 1]) {
            // console.log(nums[j])
            // console.log(nums[j-1])
            temp = nums[j]
            nums[j] = nums[j - 1]
            nums[j - 1] = temp
            // [nums[j], nums[j-1]] = [nums[j-1], nums[j]]
            j--
        }
    }
    return nums
}
console.log(insertionSort(numsRandomOrder))
console.log(insertionSort(numsReversed))