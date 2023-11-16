/** @format */

//set menyimpan data unique dan tidak duplicate
const fruits = ["banana", "apple", "apple", "durian"];

const newFruits = new Set(fruits);
console.log(newFruits);
newFruits.forEach((val) => {
  console.log(val);
});

newFruits.add("avocado");
console.log(newFruits.size);
console.log(newFruits.entries());
console.log(newFruits);
