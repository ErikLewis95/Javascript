// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])  => returns "(123) 456-7890"

//cara1
// function createPhoneNumber(arr) {
//     let tigaAwal = arr.slice(0, 3).join('');
//       let tigaTengah = arr.slice(3, 6).join('');
//       let empatAkhir = arr.slice(6).join('');
    
//       return `(${tigaAwal}) ${tigaTengah}-${empatAkhir}`;
//       }
//       console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//cara2
// function createPhoneNumber(numbers) {
//     let firstPart = "";
//     let secondPart = "";
//     let thirdPart = "";
//     for (let i = 0; i < numbers.length; i++) {
//       if (i < 3) {
//         firstPart += numbers[i].toString();
//       } else if (i >= 3 && i < 6) {
//         secondPart += numbers[i].toString();
//       } else if (i >= 6) {
//         thirdPart += numbers[i].toString();
//       }
//     }
//     return `(${firstPart} ${secondPart}-${thirdPart})`;
//   }
  
//   console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//cara 3
// function createPhoneNumber(str) {
//     return (
//       '(' +
//       str[0] +
//       str[1] +
//       str[2] +
//       ') ' +
//       str[3] +
//       str[4] +
//       str[5] +
//       '-' +
//       str[6] +
//       str[7] +
//       str[8] +
//       str[9]
//     );
//   }

//cara 4
function createPhoneNumber(numbers){
  
    var format = "(xxx) xxx-xxxx"
    for(i=0;i<numbers.length;i++){
      format = format.replace("x", numbers[i])
    }
    return format;
  }
  
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])