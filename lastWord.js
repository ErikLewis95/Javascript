//cara 1
// function myFunc(arr){
// let lastWord = arr [arr.length-1];
// arr.pop()
// return `${arr.join(", ")} and ${lastWord}`
// }
// let arr = ["Apple", "Banan" , "Kiwi", "Melon"];
// console.log(myFunc(arr)); //Apple, Banana, Kiwi, and Melon

//cara 2
const arr = ['a', 'b', 'c', 'd'];

const list = new Intl.ListFormat('en', {
  style: 'long',
  type: 'conjunction',
});

console.log(list.format(arr));//a,b,c, and d