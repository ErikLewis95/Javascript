// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string


// cara 1
// function reverseLetter(str) {
//     let cleanWord = str.replace(/[^a-zA-Z]/g, "");
//     return [...cleanWord].reverse().join("");
//   }
  
//   console.log(reverseLetter("krishan"));


//cara 2
// function reverseLetter(str) {
//     return str.split("").reverse().join("").replace(/[^A-Za-z]/g, "")

//     }
//     console.log (reverseLetter("hellow world"))

//cara 3
// function reverseLetter(str) {
//     //coding and coding..
//     let string = "";
  
//     if (typeof str !== typeof string) {
//       throw new Error("Your input must be a string");
//     } else {
//       let letter = "abcdefghijklmnopqrstuvwxyz".split("");
//       let x = str;
//       x = x.toLowerCase()
//       x = x.split("");
//       x = x.filter((y) => {
//         return letter.includes(y);
//       });
//       x = x.join("");
//       for (let i = x.length - 1; i >= 0; i--) {
//         string += x[i];
//       }
//       return string;
//     }
//   }
//   console.log(reverseLetter("krishan"));
//   console.log(reverseLetter("ultr53o?n"));
//   console.log(reverseLetter("ab23c"));
//   console.log(reverseLetter("krish21an"));