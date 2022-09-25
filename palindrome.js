// //cara1
// let palindorme= "race, car";
// const arrAlpha = "abcdefghijklmnopqrstuvwxyz"
// .split("");
// palindorme = palindorme.split("");
// palindorme = palindorme.filter((letter)=>{
//     return arrAlpha.includes(letter);
// })
// palindorme = palindorme.join("");
// console.log(palindorme)

//cara2
// let palindrome = "jajang";
// let arrAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
// palindrome = palindrome.split("");
// palindrome = palindrome.filter((letter) => {
//   return arrAlpha.includes(letter);
// });
// palindrome = palindrome.join("");
// let wordReverse = "";
// for (i = palindrome.length - 1; i >= 0; i--) {
//   wordReverse += palindrome[i];
// }
// if (wordReverse === palindrome) {
//   console.log("Palindrom");
// } else {
//   console.log("Not Palindrom");
// }

//cara3
let check = (string) => {
    let palindrome = string;
    let arrAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
    palindrome = palindrome.split("");
    palindrome = palindrome.filter((letter) => {
      return arrAlpha.includes(letter);
    });
    palindrome = palindrome.join("");
  
    result = "";
    for (i = palindrome.length - 1; i >= 0; i--) {
      result += palindrome[i];
    }
    if (palindrome === result) {
      return true;
    }
    return false;
  };
  
  console.log(check("race, car"));
