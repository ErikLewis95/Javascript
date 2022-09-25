const maxProfit =(prices) => {
    let l=prices.length;
    let maxProfit = 0;
    let minPrice = prices[0];
    for(let i=1; i<l; i++) {
      maxProfit = Math.max(maxProfit, prices[i]-minPrice);
      minPrice = Math.min(minPrice, prices[i]);
    }
  
    return maxProfit;
  }

  console.log(maxProfit([7,6,4,3,1]));
  console.log(maxProfit([7,1,5,3,9,4]));



//    const maxProfit = (prices) => {
//     let l=prices.length;
//     let maxProfit = 0;
  
//     for(let i=0; i<l-1; i++) {
//       for(let j=i+1; j<l; j++) {
//         let diff = prices[j] - prices[i];
//         if (diff > maxProfit) {
//           maxProfit = diff;
//         }
//       }
//     }
    
//     return maxProfit;
//   }
//   console.log(maxProfit([7,6,4,3,1]));
//   console.log(maxProfit([7,1,5,3,6,4]));