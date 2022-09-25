// // Given an array nums of size n, return the majority element. The majority element is the element 
// that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists 
// in the array.
// ● Example 1:
// ○ Input: nums = [3,2,3]
// ○ Output: 3
// ● Example 2:
// ○ Input: nums = [2,2,1,1,1,2,2]
// ○ Output: 2

// const arr = [2, 2, 1, 1, 1, 2, 2];
// function majorityElement(arr) {
//    const threshold = Math.floor(arr.length / 2);
//    const map = {};
//    for (let i = 0; i < arr.length; i++) {
//       const value = arr[i];
//       map[value] = map[value] + 1 || 1;
//       if (map[value] > threshold)
//          return value
//    };
//    return false;
// };
// console.log(majorityElement(arr)); 


//cara 2
// const majority = (arr) => {
//     let hashMap = {};//2:1,2:1+1,1:1,1:1+1,1:2+1,2:2+1,2:3+1
//     for (digit of arr){
//         if (!hashMap[digit]){
//             hashMap[digit]=1;
//         }else{
//             hashMap[digit] +=1;
//         }
//         if (hashMap[digit] >arr.length/2) return digit;// 
//     }
// }

// console.log(majority[2,2,1,1,1,2,2])

//modus jika arr=(1,2,3,4,4)
 const majority = (arr) => {
        let hashMap = {};//1 :1; 2:1; 3:1; 4:2
        for (digit of arr){
            if (!hashMap[digit]){
                hashMap[digit]=1;
            }else{
                hashMap[digit] +=1;
            }
        }
        //buat dua variabel satu buat nampung result dan counter
        let res; //4
        let counter =0;// =1

        //looping buat cari yang terbanyak
        console.log(hashMap)
        for (keys in hashMap){
            if (hashMap[keys]> counter){
                res=keys;
                counter = hashMap[keys];
            }
        }
        return res;
    };
    
    console.log(majority([1,2,3,4,4]));


// const arr = [1, 2, 3, 4, 3];
// function cari(arr) {
//   let number = arr[0];
//   const map = {};
//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
//     if (!map[value]) {
//       map[value] = 1;
//     } else {
//       map[value] += 1;
//     }
//     if (map[number] < map[value]) number = value;
//   }
//   console.log(map);
//   return {
//     number: number,
//     banyak: map[number],
//   };
// }
// console.log(cari(arr));

