//cara 1
// function myFunc(item) {
    
//   for (let i=0; i<it; i++)
//   {for (let j=0;j<it;j++)
//     {console.log(`checking:`, arr[j])}
//   if (arr[j]%2 === 1){arr.splice(j,1)
//     break
// }
//   }
// }
// let arr=[1,2,3,4,5]
// let it= arr.length
//   console.log(myFunc(arr));

//cara2
function myFunc(arr) {
   return arr.filter((item) => item  %2===0)
  }
  let arr=[1,2,3,4,5,6,7,8,9,10];
    console.log(myFunc(arr));//[2,4]

