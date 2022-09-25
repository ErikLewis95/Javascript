// memuat program amstrong number
// contoh 153 = 3 digit 
// 1 ^ 3 =3
// 5 ^3 =125
// 3 ^3 =27
//jadi 1+125+27 =153
// program to check an Armstrong number of n digits

// take an input
let number = 153;
let count = 0;
let a = number.toString();

for (let i = 0; i < a.length; i++) {
  count += a[i] ** a.length;
}

console.log(count);
if (count === number) {
  console.log("armstrong");
} else {
  console.log("not armstrong");
}