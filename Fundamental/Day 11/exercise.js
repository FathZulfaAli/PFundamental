/** @format */
//Given an array nums of size n, return the majority element. The majority element is the element that
//appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the arracon

const freqNumber = (array) => {
  let freq = 0;
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        count++;
        freq = array[i];
      }
    }
  }
  if (freq == false) console.log("There is no most frequent number");
  else return freq;
};

//lecturer way
const majority = (nums) => {
  let max = 0;
  new Set(nums).forEach((val) => {
    if (nums.length / 2 < nums.filter((nums) => nums == val).length) max = val;
  });
  return max ? max : "no majority";
};

const inputFreqNum = [2, 2, 1, 1, 1, 2, 2, 1, 1];
console.log(freqNumber(inputFreqNum));
console.log(majority(inputFreqNum));

//Create a function to convert roman numeral to integer.
const convertFromRoman = (num) => {};
