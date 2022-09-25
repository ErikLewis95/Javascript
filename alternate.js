// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
//cara 1
function alternateCase(s) {
    return s.split("").map(item => {
       if(item === item.toUpperCase())
       return item.toLowerCase()
       else
       return item.toUpperCase()
       
}).join("")
}
console.log(alternateCase("Hello World"))
// //cara 2
// function alternateCase(s) {
//     let str = s.split("")
//     let result = []

//     for ( let i = 0; i < str.length; i++) {
//          if(/[A-Z]/.test(str[i])) {
//              result.push(str[i].toLowerCase())
//              } else {
//               result.push(str[i].toUpperCase())
//              }  
//         }
//     return result.join("")
//   }

//   //cara 3
//   function alternateCase(s) {
//     let kataBaru = '';
//     for (huruf of s) {
//       if (huruf === huruf.toUpperCase()) kataBaru += huruf.toLowerCase();
//       else kataBaru += huruf.toUpperCase();
//     }
//     return kataBaru;
//   }

