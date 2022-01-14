
const sortedA1 = [];
const sortedB1 = [];
//expected output: [];

const sortedA2 = [5];
const sortedB2 = [2];
//expected output: [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
//expected output: [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 6, 9];
const sortedB4 = [3, 7, 8, 10, 11, 12];
//expected output: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11];

function merge(arr1, arr2) {
    // given 2 sorted array, combine them and return 1 sorted array. 

    //Check for edge case: an array is empty(?)
    if (arr1.length == 0) {
        return arr2;
    }
    else if (arr2.length == 0) {
        return arr1;
    }
    // loop through array 1?
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] < arr2[j]) {
                newArr.push(arr1[i])
            }
            else {
                newArr.push(arr2[j])
            }
        }
    }
    return newArr
}

console.log(merge(sortedA4, sortedB4))

// WIJI's Solution

// function merge(arr1, arr2){
//     let merge = []
//     while ( arr1.length > 0 && arr2.length > 0 ) {
//         let one = arr1[0];
//         let two = arr2[0];
//         if (one < two) {
//           merge.push(arr1.shift());
//         }else{
//           merge.push(arr2.shift());
//         }
//     }
//     merge = merge.concat(arr1).concat(arr2)
//     return merge
//   }

// SOLUTION GENERAL

// function merge2(arr1, arr2) {
//     let newArr = []
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             newArr.push(arr1[i]);
//             i++;
//         }
//         else {
//             newArr.push(arr2[j]);
//             j++;
//         }
//     }
//     // if(i<arr1.length){
//     //   for(let k=i; k<arr1.length; k++){
//     //     newArr.push(arr1[k]);
//     //   }
//     // }
//     // if(j<arr2.length){
//     //   for(let k=j; k<arr2.length; k++){
//     //     newArr.push(arr2[k]);
//     //   }
//     // }
//     while (i < arr1.length) {
//         newArr.push(arr1[i]);
//         i++;
//     }
//     while (j < arr2.length) {
//         newArr.push(arr2[j]);
//         j++;
//     }

//     return newArr;
// }
// // console.log(merge2(sortedA3, sortedB3))



// function merge(arr1, arr2) {
//     let newArr1 = [...arr1];
//     let newArr2 = [...arr2];
//     let arr = [];
//     while (newArr1.length || newArr2.length) {
//         if (newArr1[0] < newArr2[0]) {
//             arr.push(newArr1.shift())
//         } else {
//             arr.push(newArr2.shift())
//         }
//     }
//     return arr
// }


function mergeSort(arr) {
    //given an unsorted array, return a sorted array using mergeSort
    //HINT: keep separate the array until they are 2 sorted arrays
    //HINT2: You may need to have a recursive function
    //HINT3: Make use of the Merge function you created
}

const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];