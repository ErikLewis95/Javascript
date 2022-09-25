// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

//cara1
// function findOutlier(integers){
//     let ganjil = []
//     let genap =[]
//     for (let i=0; i<integers,length;i++){
//       if (integers[i] % 2 ==0){
//         genap.push(integers[i])
//       }else {ganjil.push(integers[i])}
//     }
//       return ganjil.genap == 1 ? ganjil[0] :genap[0]
//     //your code here
//   }


//cara2
function findOutlier(integers){
    let odd = integers.filter((item) => item % 2 != 0)
    let even = integers.filter((item) => item % 2 == 0)
    return even.length == 1 ? even[0] : odd[0];
  }
  console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
  console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

  