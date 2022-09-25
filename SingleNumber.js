
// ● Given a non-empty array of integers nums, every element appears twice except for one. Find 
// that single one.
// ● You must implement a solution with a linear runtime complexity and use only constant extra 
// space.
// ● Example 1:
// ○ Input: nums = [2,2,1]
// ○ Output: 1
// ● Example 2:
// ○ Input: nums = [4,1,2,1,2]
// ○ Output: 4
// ● Example 3:
// ○ Input: nums = [1]
// ○ Output: 1

//cara 1
// function myFunc(arr) {
//     let res;
//     for (i = 0; i < arr.length; i++) {
//       res = res ^ arr[i];
//     }
//     return res;
//   }
  
//   console.log(myFunc([4, 4, 3, 3, 2, 2, 5, 1, 1, 8, 8]));

//cara 2

// function myFunc(arr) {
//     let single = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.filter(a => a == arr[i]).length == 1) single.push(arr[i])
//     }
//     return single.join(" ")
// }

// let arr = [4, 1, 2, 1, 2]
// console.log(myFunc(arr))

// cara 3
// function myFunc(arr) {
//     let single = [];
//     let temp;
//     for (let i = 0; i < arr.length; i++) {
//       temp = arr.filter((a) => a == arr[i]);
//       if (temp.length === 1) {
//         single.push(arr[i]);
//       }
//     }
//     return single.join(` `);
//   }
  
//   let arr = [4, 1, 2, 1, 2, 3, 3];
//   console.log(myFunc(arr)); 

  //cara4
  let singleNum = function (nums) {
    return nums.reduce((a, b) => a ^ b);
  };
  let nums = [2, 2, 1, 1, 3, 4, 3];
  console.log(singleNum(nums));