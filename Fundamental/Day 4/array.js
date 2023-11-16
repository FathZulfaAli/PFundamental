/** @format */

// Array declaration
let arr1 = ["A", "B", "C", "D", "E"];
let arr2 = new Array("A", "B", "C", "D", "E");

// sama aja bebas mau pake yang mana
console.log(arr1);
console.log(arr2);

const arrNumber = [1, 2, 3, 4, 5];
const books = ["buku mtk", "buku ipa", "ebook", "majalah", "komik"];

console.log(books);

const student1 = {
  name: "udin",
  email: "udin@je.com",
  age: 14,
};

const student2 = {
  name: "yanto",
  email: "yanto@gm.com",
  age: 90,
};

const students = [student1, student2];
console.log(students);

///built in method array

console.log(arrNumber);
arrNumber.push(6); //tambahkan 6 di dalam array
//.push digunakan untuk menambahkan value kedalam array di posisi index terakhir

console.log(arrNumber.toString().replace(/,/g, "")); //rubah array variabel arrNumber ke string
//.toString merubah array menjadi sebuah string

//arrNumber.push("7"); tidak disarankan untuk menambah tipe data lain ke dalam array, fokus 1 tipe data

console.log(arrNumber.join("-"));
//.join merubah array menjadi string dan mengganti setiap , menjadi value yang berada pada param join

arrNumber.pop();
console.log(arrNumber);
//.pop menghapus LAST index dari array dan return value di index tersebut

arrNumber.shift();
console.log(arrNumber);
//.shift menghapus FIRST index dari array

arrNumber.unshift(5);
console.log(arrNumber);
//.unshift menambahkan value ke index pertama ke dalam array

arrNumber.splice(0, 2, 8);
console.log(arrNumber);
//.splice menghapus index dalam array, dg ketentuan
// param pertama menjadi lokasi index
// param kedua menjadi total index yang akan dihapus, dimulai dari param pertama
// param ketiga adalah value yang ditambahkan ke dalam array dan diletakkan berdasarkan param pertama

console.log(arrNumber.length); //memunculkan total data yang ada dialam array

const arrNumber2 = [11, 12, 13, 14];
const gabunganAngka = arrNumber.concat(arrNumber2);
console.log(gabunganAngka);
//.concat menggambungkan 2 array dan disimpan ke dalam vatiabel gabungan angka
console.log(arrNumber.concat(arrNumber2)); // lebih simbel

const gabunganAngka2 = [...arrNumber, ...arrNumber2]; //spread arrNumber dan arrNumber2, lalu memasukkan value ke dalam array baru
console.log(gabunganAngka2);

console.log("angka 4 berlokasis di index ke", gabunganAngka.indexOf(4));
//.indexOf untuk mencari index dari value di dalam array

const fruits = ["apel", "mangga", "durian", "rambutan", "kurma"];
console.log(fruits.sort());
//.sort mengurutkan berdasarkan alphabeth, kurang cocok untuk penggunaan angka
//contoh
console.log(gabunganAngka.sort());

console.log(gabunganAngka.sort((a, b) => a - b)); // callback untuk mengurutkan array of number

console.log(gabunganAngka.sort((a, b) => b - a)); // callback untuk mebalikkan urutan

console.log(fruits.reverse());
//.reverse membalikkan urutan

for (let number of gabunganAngka) console.log(number);

for (let i = 0; i < gabunganAngka.length; i++)
  console.log(gabunganAngka[i], "ini for biasa");
/**
method dalam array butuh param, tp tidak semua
param dalam .map butuh callback function
berikut adalah callback function 
// () => {} || () =>
callback function juga ada param
 */
gabunganAngka.map((value, index) => {
  console.log(value, "adalah index ke", index);
});
