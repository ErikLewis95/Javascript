//cara 1
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let includesSeven = arr.includes(10)
// console.log(includesSeven)

//cara 2
// function search (arr,x){
//     let i ; 
//     for (let i=0 ; i <arr.length; i++){
//      if (arr[i]===x){
//       return i
//      }
//     }
//     return -1
//   }
//   console.log (search ([2,20,10,3],10))


  //cara 3
  function binarySearch(arr, l, r, x) {
    if (r >= l) {
      let mid = l + Math.floor((r - l) / 2);
      if (arr[mid] == x) return mid;
      if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);
      return binarySearch(arr, mid + 1, r, x);
    }
    return "false bang";
  }
  
  let arr = [2, 3, 4, 5, 10];
  let x = 20;
  console.log(binarySearch(arr, 0, arr.length - 1, x)); 
  
