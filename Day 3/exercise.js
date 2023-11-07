const multiplicationNumber = 9;

for (let i = 1; i <= 10; i++) {
    const resultMultiplication = multiplicationNumber * 1;
    console.log(multiplicationNumber, ` x `, i);
};

let word = "racecar"
let reversedWord = word.split('').reverse().join('');

word == reversedWord ? console.log(`${word} is a palindrome`) : console.log(word, `is not a palindrome`);

const centi = 100000;
console.log(centi / 100000, `km`);

const uang = 1000;
console.log(`Rp., ${uang.toLocaleString("id-ID")},00`);

const string = "Hello World";
const searchTerm = "ell";
console.log(string.replace(searchTerm,""));

const string2 = "hello world"
const words = string2.split(' ');
const capWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
const uppString = capWords.join(' ');
console.log(uppString);

const word2 = "hello";
let resvWord2 = word2.split('').reverse().join('')
console.log(resvWord2);

const num1 = 42;
const num2 = 27;

if (num1 > num2) {
    console.log(num1, `larger than`, num2);
}else console.log(num2, `larger than`, num1);

string3  = "The QuiCk BrWoN Fox";
let swap = "";
for (let i = 0; i < string3.length; i++) {
   if (string.charAt(i).toUpperCase() == string.charAt(i))
    swap += string3.charAt(i).toLowerCase();
   else swap += string3.charAt(i).toUpperCase();
} console.log(swap);