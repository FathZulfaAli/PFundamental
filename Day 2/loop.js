/** @format */

// for loop

for (let i = 0; i < 3; i++) {
  //task
  console.log("hello");
}
// statement 1: let i = 0 dipanggil pertama kali for dijalankan
// statement 2: i < 3 adalah kondisi yang menentukan task, apakah harus/tidak dijalankan
// statement 3: i++ akan dijalankan setiap seluruh task berhasil dijalankan

// while loop

let number = 0;
while (number < 3) {
  console.log("hello (while function)");
  number++; // harus ada untuk increment number sehingga loop tidak infinite
}

while (true) {
  console.log("ini adalah infinite");
  break; // sebagai penanda berhenti
}

//do while loop

number = 0; //falsy
do {
  //task
  console.log("ini tanpa kondisi");
} while (number);

//continue

for (let i = 0; i < 5; i++) {
  if (i == 2) continue; //continue digunakan untuk skip jika if == 2
  console.log("ini angka", i);
}

//Write a code to find factorial of a number
const numberOfFactorial = 6;
let result = 1;
let message = `factorial 6 => `;
// 1*2*3*4*5*6

for (let i = 1; i < numberOfFactorial; i++) {
  if (i == numberOfFactorial) message += i;
  else message += `${i} x `;
  result *= i;
}
console.log(message, "adalah", result);
