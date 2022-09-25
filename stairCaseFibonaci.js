// ● You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 
// or 2 steps. In how many distinct ways can you climb to the top?
// ● Example 1:
// ○ Input: n = 2
// ○ Output: 2
// ○ Explanation: There are two ways to climb to the top.
// ■ 1. 1 step + 1 step
// ■ 2. 2 steps
// ● Example 2:
// ○ Input: n = 3
// ○ Output: 3
// ○ Explanation: There are three ways to climb to the top.
// ■ 1. 1 step + 1 step + 1 step
// ■ 2. 1 step + 2 steps
// ■ 3. 2 steps + 1 step

//cara1
const climbStairs = (n) => {
    if(n === 1 || n === 2) return n;
    let fibo = [1, 1];
  
    for(let i = 2; i <= n; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2]; 
    }
    return fibo[n]
  }
  console.log(climbStairs(7));

  //cara2
  // const memo = {
  //   1: 1,
  //   2: 2,
  // };
  // let climbStairs = function (n) {
  //   const result = memo[n];
  //   if (result !== undefined) {
  //     return result;
  //   }
  //   const left = climbStairs(n - 2);
  //   memo[n - 2] = left;
  //   const right = climbStairs(n - 1);
  //   memo[n - 1] = right;
  
  //   return left + right;
  // };
  
  // console.log(climbStairs(4));

  //cara3
//   function fibonacci(n) {
//     if (n < 2){
//         return 1;
//     }else{
//         return fibonacci(n-2) + fibonacci(n-1);
//     }
// }
// console.log(fibonacci(7))