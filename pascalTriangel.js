// const pascal = (n) => {
//     let res = [[1], [1, 1]]; // [1,2,1]
  
//     for (let i = 2; i < n; i++) {
//       let temp = [1]; // [1,2,1]
//       let previous = [...res[i - 1]]; // [1,1]
  
//       previous.forEach((item, index) => {
//         if (previous[index + 1]) {
//           temp.push(item + previous[index + 1]);
//         }
//       });
  
//       temp.push(1);
//       res.push(temp);
//     }
  
//     return res;
//   };
  
//   console.log(pascal(6));


function myFunc(n) {
    let result = []
    for (let i = 1; i <= n; i++) {
        let arr = []
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) {
                arr.push(1)
            } else {
                arr.push((result[i - 2][j - 1] + result[i - 2][j]))
            }
        }
        result.push(arr)
    }
    return result
}

console.log(myFunc(6))