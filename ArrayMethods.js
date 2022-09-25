// join
let arr1 = ["a", "k", "u"];
console.log(arr1.join("")); //aku

let arr2 = [1, 2, 3];
console.log(arr2.pop());//3
console.log(arr2); //[1,2]

let arr3 = [1, 2, 3];
arr3.push(4);
console.log(arr3);//[1,2,3,4]

let arr4 = [1, 2, 3];
// arr4.shift();
let user = arr4.shift();
console.log(arr4);//[2,3]
console.log(user);//1

let arr5 = [1, 2, 3];
console.log("panjang dari array 5 =", arr5.length);//3
arr5.unshift(0);
console.log(arr5);//[0,1,2,3]

let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
console.log(arr6.concat(arr7));//[1,2,3,4,5,6]

let arr8 = [1, 3, 2, 4];
arr8.sort((a, b) => b - a);
console.log(arr8);//[4,3,2,1]

let arr9 = [1, 2, 3];
arr9.forEach((value, index) => { //1=>0, 2=>1, 3=>2
  console.log(value);//1 2 3
  console.log(index);//0 1 2
});

let arr10 = [1, 2, 3];
let foreach = arr10.forEach((value) => {
 value * 2;
});
let map = arr10.map((value) => {
  return value * 2;
});

console.log(foreach);//undefined
console.log(map);//[2,4,6]

let arr11 = [1, 2, 3];
let resultArr11 = arr11.map((value) => {
  return (value * 3) / 2;
});
console.log(resultArr11);//[1.5, 3, 4.5]