// Create a function to convert Excel sheet column title to its corresponding column number.
// ● Example : 
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// …
// ● Example : 
// ○ Input : AB
// ○ Output : 28
//cara1
// function lettersToNumber(huruf) {
//     let daftarHuruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//      let panjang = daftarHuruf.length,
//      let hasil = 0;
//     let r = /\d/;
//     if (r.test(huruf)) {
//       return 'input salah';
//     } else {
//       normalisasiHuruf = huruf.toUpperCase();
//       for (let j = 0; j < normalisasiHuruf.length; j++) {
//         hasil = hasil * panjang + daftarHuruf.indexOf(normalisasiHuruf[j]) + 1;
//       }
//     }
//     return hasil;
//   }
  
//   console.log(lettersToNumber('AA'));
//   console.log(lettersToNumber('AZ'));
//   console.log(lettersToNumber('1AB'));
//   console.log(lettersToNumber('AB1'));


//cara2
//   function ex1(letters) {
//     letters = letters.toUpperCase();
//     for(var i = 0, res = 0; i < letters.length; i++){
//         res = letters[i].charCodeAt() - 64 + res * 26;
//     }
//     return res;
// }

// console.log(ex1("ZZ")); 

