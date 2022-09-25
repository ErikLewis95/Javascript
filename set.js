const fruits = ["banana", "apple", "orange", "kiwi", "apple"];

const setFruits = new Set(fruits);

console.log(setFruits);
setFruits.add("lemon");
console.log(setFruits);
setFruits.delete("apple");
console.log(setFruits);
console.log(setFruits.size);


