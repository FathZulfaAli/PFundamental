/** @format */

//Write a function to get the lowest, highest and average value in the array (with and without sort function).
const numbers = [12, 5, 23, 18, 4, 45, 32];
const findMaxValue = (arr) => {
  let maxArr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxArr) maxArr = arr[i];
  }
  return maxArr;
};
const findMinValue = (arr) => {
  let minArr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minArr) minArr = arr[i];
  }
  return minArr;
};
const meanValue = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const mean = sum / arr.length;
  return mean.toFixed(1);
};

console.log(
  `{lowest :`,
  findMinValue(numbers),
  `highest :`,
  findMaxValue(numbers),
  `average :`,
  meanValue(numbers),
  "}"
);

//SIMPLE WAY DARI LECTURER
const score = (...numbers) => {
  const lowest = numbers.sort((a, b) => a - b)[0];
  const highest = numbers.sort((a, b) => b - a)[0];
  const average =
    numbers.reduce((sum, number) => sum + number, 0) / numbers.length;

  console.log(
    `{lowest :`,
    lowest,
    `highest :`,
    highest,
    `average :`,
    average,
    "}"
  );
};

score(numbers);

/*Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'. 
*/
const wordFormater = (arr) => {
  const lastWord = arr.pop();
  const comma = arr.join(`, `) + `, and ` + lastWord;
  return comma;
};

const fruits = ["apple", "banana", "cherry", "date"];
console.log(wordFormater(fruits));

//Write a function to split a string and convert it into an array of words
const stringConvert = (string) => {
  const toArr = string.split(" ");
  return toArr;
};
const stringToConvert = "Hello World";
console.log(stringConvert(stringToConvert));

/* Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4] 
*/
const calcElement = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) result.push(arr1[i] + arr2[i]);
  return result;
};
const array1 = [1, 2, 3];
const array2 = [3, 2, 1];
console.log(calcElement(array1, array2));

/*Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
 */

const addElement = (arr, newElement) => {
  if (!arr.includes(newElement)) {
    arr.push(newElement);
  }
  return arr;
};
const arr = [1, 2, 3, 4];
const newElement1 = 4;
const newElement2 = 7;
console.log(addElement(arr, newElement1));
console.log(addElement(arr, newElement2));

const addNewElement = (arr = {}, element) => {
  if (arr.indexOf(element) == -1) arr.push(element);
  //.indexOf apabila hasilnya -1 maka artinya tidak ketemu/ not found
  return arr;
};
console.log(addNewElement(arr, newElement2));
//GTW yang ini error knp wkwk
/*
console.log(
  addElement(arr, newElement1),
  addElement(arr, newElement2)
);
*/

/* Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]
 */

const removeOddNumbers = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++)
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  return result;
};

const numbers2 = [1, 2, 3, 4, 5, 6];
console.log(removeOddNumbers(numbers2));

/*Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
array can only contain 5 elements).
a. Example :
maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
The function will return [5, 10, 24, 3, 6]
 */
const maxSizeInput = (maxSize, ...numbers) => {
  numbers.length = maxSize;
  return numbers;
};
const givenIntegers = (5, 10, 24, 3, 6, 7, 8);
console.log(maxSizeInput(5, givenIntegers));

/* Write a function that will combine 2 given array into one array
a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
 */
const combineArr = (arr1, arr2) => {
  result = arr1.concat(arr2);
  return result;
};
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];

console.log(combineArr(arr1, arr2));

/* Write a function to find duplicate values in an array
a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5] 
*/
const checkDuplicates = (arr) => {
  const duplicates = [];
  const notDuplicates = {};
  for (let i = 0; i < arr.length; i++) {
    index = arr[i];
    if (notDuplicates[index] === undefined) {
      notDuplicates[index] = 1;
    } else if (notDuplicates[index] === 1) {
      duplicates.push(index);
      notDuplicates[index] = 2;
    }
  }
  return duplicates;
};
//lecturer way
const findDuplicates = (...arr) => {
  const duplicates = arr
    .sort()
    .filter((val, index) =>
      val == arr[index + 1] ? arr.indexOf(val) === index : null
    );
  return duplicates;
};

arrDuplicates = [1, 2, 2, 2, 3, 3, 4, 5, 5];
console.log(checkDuplicates(arrDuplicates));
console.log(findDuplicates(1, 2, 2, 2, 3, 3, 4, 5, 5));

/* Write a function to find the difference in 2 given array
a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
 */
const checkDifference = (arr1, arr2) => {
  const diff = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      diff.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      diff.push(arr2[i]);
    }
  }

  return diff;
};

//lecturer way
const diff = (arr1 = [], arr2 = []) =>
  arr1.filter((val) => arr2.indexOf(val) == -1);

const subj1 = [1, 2, 3, 4, 5];
const subj2 = [3, 4, 5, 6, 7];
console.log(checkDifference(subj1, subj2));
console.log(diff(subj1, subj2));

//write a function that will return primitive data types only.
const primitive = (...arr) => arr.filter((val) => typeof val != "object");
console.log(primitive(1, [], undefined, {}, "string", {}, []));

//Write a function from a given array of numbers and return the second smallest number
const secondSmallest = (arr) => {
  sortArr = arr.sort((a, b) => a - b);
  return sortArr[1];
};

console.log(secondSmallest([5, 3, 1, 7, 2, 6]));

//Write a function from a given array of mixed data types and return the sum of all the number
const countNumOnly = (arr = []) => {
  const number = [];
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      number.push(arr[i]);
      sum = +arr[i];
    }
  }
  return { number, sum };
};

console.log(countNumOnly(["3", 1, "string", null, false, undefined, 2]));

//Write a function from the below array of number that will return sum of duplicate values
const countDuplicatesValue = (...arr) =>
  arr
    .sort((a, b) => a - b)
    .filter((val, i) => val == arr[i + 1] || val == arr[i - 1])
    .reduce((sum, val) => val + sum, 0);

console.log(countDuplicatesValue(10, 20, 40, 10, 50, 30, 10, 60, 10));
