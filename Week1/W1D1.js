// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// To test the function, use Shell in the terminal on the right. Type node W1D1.js

// go through the array
// check the first num with the next num
// if num 1 is greater than num 2 switch the 2
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var temp;
function bubbleSort(nums) {
    //given an unsorted array, sort the array using bubbleSort
    // i.e. keep swapping the largest value and put it at the end
    for (let i = 0; i < nums.length; i++) {
        for (i = nums.length - 1; i > 0; i--) {
            for (j = 0; j < i; j++) {
                if (nums[j] > nums[j + 1]) {
                    let temp = nums[j]
                    nums[j] = nums[j + 1]
                    nums[j + 1] = temp
                    }
                }
            }
        return nums;
}
}
console.log(bubbleSort(numsRandomOrder))
