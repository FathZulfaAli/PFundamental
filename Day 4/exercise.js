/** @format */

//create a function that can create triangle pattern
function triangleNumber(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

triangleNumber(5);

/* Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".
● Parameters : n → total looping
○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz
 */

const fizzBuzz = (n) => {
  let arrResult = [];
  for (let i = 0; i < n; i++) {
    let result = i;
    if (!(i % 3) && !(i % 5)) {
      result = "FizzBuzz";
    } else if (!(i % 3)) {
      result = "Fizz";
    } else if (!(i % 5)) {
      result = "Buzz";
    }
    arrResult.push(result);
  }
  return arrResult.toString().replace(/,/g, " ");
};

console.log(fizzBuzz(3));

//Create a function that receiving array as input, and this function can find maximum value in array without using built in method in js
findMaxValue = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  let maxArr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxArr) maxArr = arr[i];
  }
  return maxArr;
};

const numbers = [10, 55, 79, 32];
console.log(`Max value of ${numbers} is`, findMaxValue(numbers));

//create a function that can create triangle pattern
function triangleContinousNumber(n) {
  let currentNumber = 0; //variabel untuk menghitung angka / temp
  for (let i = 1; i <= n; i++) {
    //looping sebanyak n kali
    let row = ""; //menampung setiap baris yang akan di print
    for (let j = 0; j < i; j++) {
      currentNumber++;
      row += currentNumber.toString().padStart(2, "0") + " ";
    }
    console.log(row);
  }
}

triangleContinousNumber(4);
