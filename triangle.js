// //cara1
// function horiztonal(num) {
//     var stars = "";
//     for (var i = 0; i <= num; i++) {
//       stars = stars + `$[i]`
//     }
//     return stars;
//   }
  
// //cara2
//   function buildTri(num) {
//     var stars = "";
//     for (var i = 0; i < num; i++) {
//       stars = stars + horiztonal(i) + "\n";
//     }
//     console.log(stars)
//   }
  
//   buildTri(5);

// //cara3
//   let segitiga = (n) => {
//     // n=4
//     for (i = 0; i < n; i++) {
//       // i=0,1,2
//       for (j = 0; j < n; j++) {
//         // j=0,1,2,3
//         if (i >= j) {
//           process.stdout.write("* ");
//         }
//         if (j == n - 1) {
//           process.stdout.write("\n");
//         }
//       }
//     }
//   };
//   segitiga(4);
   
// //cara4
let baris = '';
for (let i = 1; i <= 4; i++) {
  baris += `*`.repeat(i) + '\n';
}
console.log(baris);

// //cara 5
// let triangle = (n) => {
//     let result = "";
//   // *
//   // * *
//   // * * *
//   // * * * *
//   let counter=0
//     for (let i = 1; i <= n; i++) {
//       for (let j = 1; j <= i; j++) 
//        {counter++
//         if (counter <= 9) {
//           result += `0${counter} `;
//         } else {
//           result += `${counter} `;
//         }
//       }
//       result += "\n";
//     }
  
//     console.log(result);
//   };
  
//   triangle(5);


  