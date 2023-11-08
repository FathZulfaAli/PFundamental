/** @format */
//Create a function to convert Excel sheet column title to its corresponding column number.

const titleCoulumnNumber = (title) => {
  const alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  let coulumnNumber = 0;

  for (let i = 0; i < title.length; i++) {
    const char = title[i];
    const charValue = alphabet.indexOf(char) + 1;
    coulumnNumber = coulumnNumber * 26 + charValue;
  }

  return coulumnNumber;
};
const excelCoulumnTitle = "aaa";
const coulumnNumber = titleCoulumnNumber(excelCoulumnTitle.toUpperCase());
console.log(
  `Column Title '${excelCoulumnTitle.toUpperCase()}' has Column Number`,
  coulumnNumber
);

//Given a non-empty array of integers nums,
//every element appears twice except for one. Find that
//single one.

const singleNumber = (array) => {
  let unique = [];
  for (let i = 0; i < array.length; i++) {
    let isUnique = true;
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        isUnique = false;
      }
    }
    if (isUnique) {
      unique.push(array[i]);
    }
  }
  return unique;
};

//lecturer way
const findSingle = (num) => {
  return num
    .sort((a, b) => a - b)
    .filter((val, idx) => val != idx[i - 1] && val != idx[i + 1]); // find the issue
};

console.log(singleNumber([4, 1, 2, 1, 2, 3, 1, 5, 6, 98, 2]));

//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
const isAnagram = (s, t) => {
  if (s.length === t.length) {
  }
  false;

  const sortedS = s.toUpperCase().split("").sort().join("");
  const sortedT = t.toUpperCase().split("").sort().join("");

  return sortedS === sortedT;
};

console.log(isAnagram("car", "eat"));

//You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2
//steps. In how many distinct ways can you climb to the top?

const climbing = (n = 0) => {
  let tempArr = [0, 1];
  for (let i = 2; i < n + 2; i++) {
    tempArr.push(tempArr[i - 2] + tempArr[i - 1]);
  }
  return tempArr[tempArr.length - 1];
};

console.log(climbing(5));
