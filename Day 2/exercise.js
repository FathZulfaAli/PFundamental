//Write a code to convert celsius to fahrenheit
const celcius = 60;
let fahrenheit = (celcius * 9 / 5) + 32;

console.log(`1. ${celcius}°C is equal to ${fahrenheit}°F`);

//Write a code to check whether the number is odd or even
const number = 25;
let kom = number % 2 == 0
switch (kom) {
  case (true):
    console.log(`2a. number ${number} is even`);
    break;
  default:
    console.log(`2a. number ${number} is odd`); 
    break;
}

const number1 = 2;
let kom1 = number1 % 2 == 0;
switch (kom1) {
  case (true):
    console.log(`2a. number ${number1} is even`);
    break;
  default:
    console.log(`2a. number ${number1} is odd`); 
    break;
}

//Write a code to check whether the number is prime number or not
const prime = 5;
let isPrime = true;

if (prime <= 1) {
  isPrime = false;
} else if (prime <= 3) {
  isPrime = true;
} else {
  for (let i = 2; i < prime; i++) {
    if (prime % i === 0 ) {
      //5 % 2 === 0 ? false
      //5 % 3 === 0 ? false
      //5 % 4 === 0 ? false
      isPrime = false;
      break;
    } 
  }
}

if (isPrime) {
  console.log(`3a. number ${prime} is prime number`);
} else {
  console.log(`3a. number ${prime} is not prime number`);
}

const prime1 = 6;
let isPrime1 = true;

if (prime1 <= 1) {
  isPrime1 = false;
} else if (prime1 <= 3) {
  isPrime1 = true;
} else {
  for (let i = 2; i < prime1; i++) {
    //6 % 2 === 0 
    if (prime1 % i === 0 ) {
      isPrime1 = false;
      break;
    } 
  }
}

if (isPrime1) {
  console.log(`3b. number ${prime1} is prime number`);
} else {
  console.log(`3b. number ${prime1} is not prime number`);
}

//Write a code to find the sum of the numbers
const sumNumber = 5;
let result = 0;

let message = "sum for 1 -> 5 is "

for (let i = 1; i <= sumNumber; i++){
  if (i == sumNumber) message+= i;
  else  message += `${i} + `; 
  result += i; 
};

console.log("4a.", message, "is", result);

const sumNumber2 = 3;
let result1 = 0;

let message1 = "sum for 1 -> 3 is "

for (let i = 1; i <= sumNumber2; i++){
  if (i == sumNumber2) message1 += i;
  else  message1 += `${i} + `; 
  result1 += i; 
};
console.log("4b.", message1, "is", result1);

//Write a code to find factorial of a number
const numberOfFactorial = 4;
let resultFact = 1;
let messageFact = `5a. factorial 4 => `

for (let i = 1; i <= numberOfFactorial; i++) {
  if (i === numberOfFactorial) messageFact += i;
  else messageFact += `${i} x `;
  resultFact *= i
}
console.log(messageFact, "is", resultFact);

const numberOfFactorial2 = 6;
let resultFact2 = 1;
let messageFact2 = `5b. factorial 4 => `

for (let i = 1; i <= numberOfFactorial2; i++) {
  if (i === numberOfFactorial2) messageFact2 += i;
  else messageFact2 += `${i} x `;
  resultFact2 *= i
}
console.log(messageFact2, "is", resultFact2);

//Write a code to print the first N fibonacci numbers
const fiboKe = 15;
let fiboNumbers = [0, 1];

for (let i = 2; i <= fiboKe; i++) {
  const nextFibo = fiboNumbers[i - 1] + fiboNumbers[i - 2];
  fiboNumbers.push(nextFibo);
}

const NFibo = fiboNumbers[fiboKe];
console.log(`6. angka Fibonacci ke-${fiboKe} adalah: ${NFibo}`);

//simple ver fibonacci
angka = 15;
let tmp1 = 0;
  tmp2 = 1;
  tmp3 = 0;
for (let i = 2; i <= angka; i++) {
  tmp3 = tmp1 + tmp2;
  tmp1 = tmp2;
  tmp2 = tmp3;
}

console.log(angka, "->", tmp3);