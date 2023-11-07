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
const excelCoulumnTitle = "AB";
const coulumnNumber = titleCoulumnNumber(excelCoulumnTitle);
console.log(
  `Column Title '${excelCoulumnTitle}' has Column Number`,
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

console.log(singleNumber([4, 1, 2, 1, 2]));

//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
const isAnagram = (s, t) => {
  if (s.length === t.length) {
  }
  false;

  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
};

console.log(isAnagram("car", "eat"));
